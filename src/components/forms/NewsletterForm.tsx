"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Field, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  newsletterSchema,
  type NewsletterFormValues,
} from "@/lib/validations";

export function NewsletterForm() {
  const [isPending, setIsPending] = React.useState(false);

  const form = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "" },
  });

  async function onSubmit(data: NewsletterFormValues) {
    setIsPending(true);
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong.");
      }

      toast.success("You're subscribed! Check your inbox.");
      form.reset();
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Something went wrong."
      );
    } finally {
      setIsPending(false);
    }
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
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
