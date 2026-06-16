"use client";

import { useRef, useState } from "react";
import { Check, Copy, Share2, X } from "lucide-react";
import { toast } from "sonner";

import {
  Dialog,
  DialogBackdrop,
  DialogClose,
  DialogDescription,
  DialogPopup,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ShareArticleButtonProps {
  title: string;
  url: string;
  className?: string;
}

export function ShareArticleButton({ title, url, className }: ShareArticleButtonProps) {
  const [copied, setCopied] = useState(false);
  const copyResetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const resetCopiedState = () => {
    if (copyResetTimer.current) {
      clearTimeout(copyResetTimer.current);
      copyResetTimer.current = null;
    }
    setCopied(false);
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      if (copyResetTimer.current) {
        clearTimeout(copyResetTimer.current);
      }
      copyResetTimer.current = setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch {
      inputRef.current?.focus();
      inputRef.current?.select();
      toast.error("Couldn't copy automatically. Please copy the link manually.");
    }
  };

  return (
    <Dialog onOpenChange={(open) => !open && resetCopiedState()}>
      <DialogTrigger
        className={[
          "inline-flex items-center gap-1.5 text-paragraph font-normal text-accent underline underline-offset-2 hover:text-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <Share2 className="size-4" />
        Share article
      </DialogTrigger>

      <DialogPortal>
        <DialogBackdrop />
        <DialogPopup>
          <DialogClose
            className="absolute right-3 top-3 size-7"
            aria-label="Close share dialog"
          >
            <X className="size-4" />
          </DialogClose>

          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>Copy this link to share:</DialogDescription>

          <div className="mt-5 space-y-3">
            <input
              ref={inputRef}
              readOnly
              value={url}
              onFocus={(event) => event.currentTarget.select()}
              onClick={(event) => event.currentTarget.select()}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              aria-label="Article link"
            />

            <button
              type="button"
              onClick={handleCopyLink}
              className="btn-accent w-full justify-center"
            >
              {copied ? (
                <>
                  <Check className="mr-2 size-4" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="mr-2 size-4" />
                  Copy link
                </>
              )}
            </button>
          </div>
        </DialogPopup>
      </DialogPortal>
    </Dialog>
  );
}
