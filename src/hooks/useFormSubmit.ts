"use client";

import * as React from "react";
import { toast } from "sonner";

interface UseFormSubmitOptions<T> {
  endpoint: string;
  onSuccess?: () => void;
  successMessage?: string;
}

export function useFormSubmit<T>({
  endpoint,
  onSuccess,
  successMessage,
}: UseFormSubmitOptions<T>) {
  const [isPending, setIsPending] = React.useState(false);

  const submit = React.useCallback(
    async (data: T) => {
      setIsPending(true);
      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message || "Something went wrong.");
        }

        if (successMessage) {
          toast.success(successMessage);
        }

        if (typeof window !== "undefined" && window.umami) {
          window.umami.track("form-submit", { endpoint });
        }

        onSuccess?.();
      } catch (error) {
        toast.error(
          error instanceof Error ? error.message : "Something went wrong."
        );
      } finally {
        setIsPending(false);
      }
    },
    [endpoint, onSuccess, successMessage]
  );

  return { submit, isPending };
}
