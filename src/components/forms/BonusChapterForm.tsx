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
  bonusChapterRequestSchema,
  type BonusChapterRequestValues,
} from "@/lib/validations";

export function BonusChapterForm() {
  const [isSuccess, setIsSuccess] = React.useState(false);

  const { submit, isPending } = useFormSubmit<BonusChapterRequestValues>({
    endpoint: "/api/bonus-chapter",
    onSuccess: () => setIsSuccess(true),
  });

  const form = useForm<BonusChapterRequestValues>({
    resolver: zodResolver(bonusChapterRequestSchema),
    defaultValues: { name: "", email: "" },
  });

  if (isSuccess) {
    return (
      <p className="text-paragraph text-center py-4">
        Thank you for requesting the extra chapter. We&apos;ll get it to you as
        soon as possible.
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
              <FieldLabel htmlFor="bonus-chapter-name">Your name</FieldLabel>
              <Input
                {...field}
                id="bonus-chapter-name"
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
              <FieldLabel htmlFor="bonus-chapter-email">Your email</FieldLabel>
              <Input
                {...field}
                id="bonus-chapter-email"
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
          variant="default"
          disabled={isPending}
          className="h-11 min-h-11 px-6 text-sm font-semibold w-full sm:w-auto"
        >
          {isPending ? "Sending..." : "Request chapter"}
        </Button>
      </FieldGroup>
    </form>
  );
}
