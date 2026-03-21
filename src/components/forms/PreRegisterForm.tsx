"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  preRegisterSchema,
  type PreRegisterFormValues,
} from "@/lib/validations";

export function PreRegisterForm() {
  const [isPending, setIsPending] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const form = useForm<PreRegisterFormValues>({
    resolver: zodResolver(preRegisterSchema),
    defaultValues: { name: "", email: "" },
  });

  async function onSubmit(data: PreRegisterFormValues) {
    setIsPending(true);
    try {
      const response = await fetch("/api/book-pre-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong.");
      }

      setIsSuccess(true);
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Something went wrong."
      );
    } finally {
      setIsPending(false);
    }
  }

  if (isSuccess) {
    return (
      <p className="text-paragraph text-center py-4">
        Thank you so much for your interest. I have sent an email to you with
        further information.
      </p>
    );
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
      <FieldGroup>
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid || undefined}>
              <FieldLabel htmlFor="register-name">Your name</FieldLabel>
              <Input
                {...field}
                id="register-name"
                type="text"
                placeholder="Your name"
                aria-invalid={fieldState.invalid}
                autoComplete="name"
                className="h-12 bg-white"
              />
              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />

        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid || undefined}>
              <FieldLabel htmlFor="register-email">Your email</FieldLabel>
              <Input
                {...field}
                id="register-email"
                type="email"
                placeholder="Your email"
                aria-invalid={fieldState.invalid}
                autoComplete="email"
                className="h-12 bg-white"
              />
              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />

        <Button
          type="submit"
          disabled={isPending}
          className="h-11 rounded-lg bg-accent text-white font-semibold text-sm px-6 hover:bg-accent-hover w-full sm:w-auto"
        >
          {isPending ? "Registering..." : "Register"}
        </Button>
      </FieldGroup>
    </form>
  );
}
