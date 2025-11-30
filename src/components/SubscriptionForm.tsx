"use client";

import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FormType } from "@/schemas/subscription-form.schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import { DateInput } from "@/components/ui/date-input";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import SignatureCanvas from "react-signature-canvas";
import { Loader2, Eraser } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { Link } from "@/navigation";

export function SubscriptionForm() {
    const t = useTranslations("SubscriptionForm");
    const tErrors = useTranslations("errors");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const sigPad = useRef<SignatureCanvas>(null);

    const form = useForm<FormType>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            dob: "",
            phone: "",

            branchCode: "",
            agree: false,
            signature: "",
        },
    });



    const clearSignature = () => {
        sigPad.current?.clear();
        form.setValue("signature", "");
    };

    const onSignatureEnd = () => {
        if (sigPad.current) {
            form.setValue("signature", sigPad.current.getTrimmedCanvas().toDataURL("image/png"));
        }
    };

    const onSubmit = async (data: FormType) => {
        setIsSubmitting(true);
        setSubmitError(null);

        try {
            const response = await fetch("/api/subscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.details || result.error || "Submission failed");
            }

            setSubmitSuccess(true);
            form.reset();
            sigPad.current?.clear();
        } catch (error: any) {
            console.error("Submission error:", error);
            setSubmitError(error.message || "An unexpected error occurred.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitSuccess) {
        return (
            <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-lg text-center border border-green-200 dark:border-green-800">
                <h3 className="text-2xl font-bold text-green-800 dark:text-green-300 mb-4">
                    {t("successTitle")}
                </h3>
                <p className="text-green-700 dark:text-green-400 mb-6">
                    {t("successMessage")}
                </p>
                <Button onClick={() => setSubmitSuccess(false)}>
                    {t("subscribeAnother")}
                </Button>
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-zinc-900 p-6 md:p-8 rounded-xl border border-zinc-200 dark:border-zinc-800 max-w-5xl mx-auto">
            <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold mb-2">{t("title")}</h2>
                <p className="text-zinc-500 dark:text-zinc-400">
                    {t("subtitle")}
                </p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    {/* Branch Selection */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold border-b pb-2">
                            {t("branchSelection")}
                        </h3>
                        <FormField
                            control={form.control}
                            name="branchCode"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{t("branch")}</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder={t("selectBranch")} />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="PD">Parndorf</SelectItem>
                                            <SelectItem value="SZ">Salzburg</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    {/* Personal Data */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold border-b pb-2">
                            {t("personalData")}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{t("firstName")}</FormLabel>
                                        <FormControl>
                                            <Input placeholder={t("firstNamePlaceholder")} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="lastName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{t("lastName")}</FormLabel>
                                        <FormControl>
                                            <Input placeholder={t("lastNamePlaceholder")} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{t("email")}</FormLabel>
                                        <FormControl>
                                            <Input type="email" placeholder={t("emailPlaceholder")} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{t("phone")}</FormLabel>
                                        <FormControl>
                                            <PhoneInput
                                                placeholder={t("phonePlaceholder") || "+43..."}
                                                value={field.value}
                                                onChange={field.onChange}
                                                error={form.formState.errors.phone?.message}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormField
                            control={form.control}
                            name="dob"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{t("dob")}</FormLabel>
                                    <FormControl>
                                        <DateInput
                                            placeholder={t("dobPlaceholder") || "YYYY-MM-DD"}
                                            value={field.value || ""}
                                            onChange={field.onChange}
                                            maxDate={new Date()}
                                            yearFrom={1900}
                                            yearTo={new Date().getFullYear()}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>





                    {/* Signature & Agreement */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold border-b pb-2">
                            {t("agreement")}
                        </h3>

                        <FormField
                            control={form.control}
                            name="agree"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                        <FormLabel>
                                            {t("agreeLabel")} <Link href="/privacy" className="text-primary hover:underline">{t("agreeLinkDatenschut")}</Link> {t("and")} <Link href="/privacy" className="text-primary hover:underline">{t("nutzungsBedingungen")}</Link> {t("zu")}
                                        </FormLabel>
                                        <p className="text-sm text-muted-foreground mt-2">
                                            {t("agreeDescription")}
                                        </p>
                                    </div>
                                </FormItem>
                            )}
                        />

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <FormLabel className={cn(form.formState.errors.signature && "text-destructive")}>
                                    {t("signature")}
                                </FormLabel>
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="sm"
                                    onClick={clearSignature}
                                    className="text-zinc-500"
                                >
                                    <Eraser className="w-4 h-4 mr-2" />
                                    {t("clear")}
                                </Button>
                            </div>
                            <div className={cn(
                                "border rounded-md overflow-hidden bg-white touch-none h-[200px] w-full",
                                form.formState.errors.signature ? "border-destructive" : "border-zinc-300"
                            )}>
                                <SignatureCanvas
                                    ref={sigPad}
                                    canvasProps={{
                                        className: "w-full h-full",
                                    }}
                                    onEnd={onSignatureEnd}
                                />
                            </div>
                            {form.formState.errors.signature && (
                                <p className="text-sm font-medium text-destructive">
                                    {t(form.formState.errors.signature.message as string)}
                                </p>
                            )}
                        </div>
                    </div>

                    {submitError && (
                        <div className="bg-destructive/15 text-destructive p-3 rounded-md text-sm">
                            {tErrors(submitError)}
                        </div>
                    )}

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                {t("submitting")}
                            </>
                        ) : (
                            t("subscribe")
                        )}
                    </Button>
                </form>
            </Form>
        </div>
    );
}
