import { NextRequest, NextResponse } from "next/server";
import { serverFormSchema } from "@/schemas/subscription-form.schema";
import { CreateContact, ContactsApi } from "@getbrevo/brevo";

// Simple in-memory rate limiter
const rateLimit = new Map<string, { count: number; lastReset: number }>();
const LIMIT = 5; // 5 requests
const WINDOW = 60 * 60 * 1000; // per hour

const getIp = (req: NextRequest) => {
    return req.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";
};

export const POST = async (req: NextRequest) => {
    try {
        const ip = getIp(req);
        const now = Date.now();
        const record = rateLimit.get(ip) || { count: 0, lastReset: now };

        if (now - record.lastReset > WINDOW) {
            record.count = 0;
            record.lastReset = now;
        }

        if (record.count >= LIMIT) {
            return NextResponse.json(
                { error: "Too many requests", details: "Please try again later." },
                { status: 429 }
            );
        }

        record.count++;
        rateLimit.set(ip, record);

        const body = await req.json();

        if (typeof body !== "object" || body === null) {
            return NextResponse.json(
                {
                    error: "Invalid request body",
                    details: "Request body must be a valid JSON object",
                },
                { status: 400 }
            );
        }

        const result = serverFormSchema.safeParse(body);
        if (!result.success) {
            const errors: Record<string, string> = {};

            result.error.issues.forEach((issue) => {
                const path = issue.path.join(".");
                errors[path] = issue.message;
            });

            return NextResponse.json(
                {
                    error: "Validation failed",
                    details: errors,
                },
                { status: 400 }
            );
        }

        const validatedData = result.data;

        try {

            const branchCode = validatedData.branchCode;

            if (!branchCode) {
                return NextResponse.json(
                    {
                        error: "Invalid branch code",
                        details: { branchCode: "branchNotFound" },
                    },
                    { status: 400 }
                );
            }

            const parentDob = new Date(validatedData.dob);
            if (isNaN(parentDob.getTime())) {
                return NextResponse.json(
                    {
                        error: "Invalid parent date of birth",
                        details: { dob: "invalidDate" },
                    },
                    { status: 400 }
                );
            }


            let contactAPI = new ContactsApi();
            // @ts-ignore
            contactAPI.authentications.apiKey.apiKey = process.env.BREVO_API || "";

            let contact = new CreateContact();
            contact.email = validatedData.email;
            contact.attributes = {
                FIRSTNAME: validatedData.firstName,
                LASTNAME: validatedData.lastName,
                SIGNATURE: validatedData.signature,
                PHONENUMBER: validatedData.phone || "",
                DOB: validatedData.dob,
            };

            const listId = branchCode?.toUpperCase() === "PD" ? 10 : 9;
            contact.listIds = [listId];

            await contactAPI.createContact(contact);

            return NextResponse.json({
                message: "Subscription created successfully",
                success: true,
            });
        } catch (dbError) {
            if ((dbError as any).response?.body?.code === "duplicate_parameter") {
                return NextResponse.json(
                    {
                        error: "emailAlreadyExists",
                        details: "Email already exists",
                    },
                    { status: 400 }
                );
            }
            console.error("Brevo API Error:", dbError);
            return NextResponse.json(
                {
                    error: "serverError",
                    details: "Unable to create contact",
                },
                { status: 500 }
            );
        }
    } catch (parseError) {
        console.error("Server Error:", parseError);
        return NextResponse.json(
            {
                error: "serverError",
                details: "Internal Server Error",
            },
            { status: 500 }
        );
    }
};
