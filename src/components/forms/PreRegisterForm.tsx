"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import {
  preRegisterSchema,
  type PreRegisterFormValues,
} from "@/lib/validations";

export function PreRegisterForm() {
  const [isSuccess, setIsSuccess] = React.useState(false);

  const { submit, isPending } = useFormSubmit<PreRegisterFormValues>({
    endpoint: "/api/book-pre-register",
    onSuccess: () => setIsSuccess(true),
  });

  const form = useForm<PreRegisterFormValues>({
    resolver: zodResolver(preRegisterSchema),
    defaultValues: { name: "", email: "" },
  });

  if (isSuccess) {
    return (
      <p className="text-paragraph text-center py-4">
        Thank you so much for your interest. I have sent an email to you with
        further information.
      </p>
    );
  }

  return (
    <form onSubmit={form.handleSubmit(submit)} noValidate>
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
          variant="ghost"
          disabled={isPending}
          className="btn-outline-dark w-full sm:w-auto"
        >
          {isPending ? "Registering..." : "Register"}
        </Button>
      </FieldGroup>
    </form>
  );
}
