import { z } from "zod";

export const formSchema = z.object({
    firstName: z.string().min(1, { message: 'required' }),
    lastName: z.string().min(1, { message: 'required' }),
    email: z.string().email({ message: 'invalidEmail' }),
    dob: z.string().min(1, { message: 'required' }),
    phone: z.string().optional(),
    // Branch code is now selected by the user
    branchCode: z.string().min(1, { message: 'required' }),
    agree: z.boolean().refine(val => val, { message: 'checkboxRequired' }),
    signature: z.string().min(1, { message: 'signatureRequired' }),
});

export type FormType = z.infer<typeof formSchema>;

export type ErrorsType = Partial<FormType>;

export const serverFormSchema = z.object({
    firstName: z.string().min(1, { message: "required" }).max(50, { message: "tooLong" }),
    lastName: z.string().min(1, { message: "required" }).max(50, { message: "tooLong" }),
    email: z.string().email({ message: "invalidEmail" }),
    dob: z.string().min(1, { message: "required" }).refine((val) => {
        const date = new Date(val);
        return !isNaN(date.getTime()) && date <= new Date();
    }, { message: "invalidDate" }),
    phone: z.string().optional().refine((val) => {
        if (!val) return true;
        const phoneRegex = /^[\+]?[^A-Za-z]{7,20}$/;
        return phoneRegex.test(val);
    }, { message: "invalidPhone" }),
    branchCode: z.string().max(10, { message: "tooLong" }).optional(),
    agree: z.boolean().refine(val => val, { message: "checkboxRequired" }),
    signature: z.string().min(1, { message: "signatureRequired" }),
});
