"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Field, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import {
  newsletterSchema,
  type NewsletterFormValues,
} from "@/lib/validations";

export function NewsletterForm() {
  const form = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "" },
  });

  const { submit, isPending } = useFormSubmit<NewsletterFormValues>({
    endpoint: "/api/newsletter",
    successMessage: "You're subscribed! Check your inbox.",
    onSuccess: () => form.reset(),
  });

  return (
    <form
      onSubmit={form.handleSubmit(submit)}
      className="flex flex-col gap-3 sm:flex-row sm:items-start"
      noValidate
    >
      <Controller
        name="email"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field className="flex-1" data-invalid={fieldState.invalid || undefined}>
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <Input
              {...field}
              id="newsletter-email"
              type="email"
              placeholder="your@email.com"
              aria-invalid={fieldState.invalid}
              aria-describedby={fieldState.error ? "newsletter-error" : undefined}
              autoComplete="email"
            />
            {fieldState.invalid && (
              <FieldError id="newsletter-error" errors={[fieldState.error]} />
            )}
          </Field>
        )}
      />
      <Button type="submit" disabled={isPending} className="shrink-0">
        {isPending ? "Subscribing..." : "Subscribe"}
      </Button>
    </form>
  );
}
