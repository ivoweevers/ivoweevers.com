"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogClose,
} from "@/components/ui/dialog";

interface BookImage {
  src: string;
  alt: string;
}

interface BookPreviewGalleryProps {
  images: BookImage[];
}

export function BookPreviewGallery({ images }: BookPreviewGalleryProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const touchStartX = React.useRef<number | null>(null);

  const isOpen = openIndex !== null;
  const hasPrev = openIndex !== null && openIndex > 0;
  const hasNext = openIndex !== null && openIndex < images.length - 1;

  function prev() {
    if (hasPrev) setOpenIndex((i) => (i ?? 0) - 1);
  }

  function next() {
    if (hasNext) setOpenIndex((i) => (i ?? 0) + 1);
  }

  React.useEffect(() => {
    if (!isOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, openIndex]);

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < 40) return;
    if (delta > 0) prev();
    else next();
  }

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setOpenIndex(i)}
            className="overflow-hidden rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent cursor-pointer"
            aria-label={`View ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={600}
              height={800}
              className="w-full h-auto transition-transform duration-200 hover:scale-[1.02]"
            />
          </button>
        ))}
      </div>

      <Dialog
        open={isOpen}
        onOpenChange={(open) => {
          if (!open) setOpenIndex(null);
        }}
      >
        <DialogPortal>
          <DialogOverlay className="bg-black/80" />
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {/* Close */}
            <DialogClose
              className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              aria-label="Close preview"
            >
              <X className="h-6 w-6" />
            </DialogClose>

            {/* Prev */}
            {hasPrev && (
              <button
                onClick={prev}
                className="absolute left-4 z-10 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                aria-label="Previous page"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            )}

            {/* Image */}
            {openIndex !== null && (
              <Image
                src={images[openIndex].src}
                alt={images[openIndex].alt}
                width={1200}
                height={1600}
                className="max-h-[85vh] md:max-h-[92vh] w-auto max-w-[92vw] md:max-w-3xl lg:max-w-4xl xl:max-w-5xl rounded-lg object-contain transition-opacity duration-200"
                priority
              />
            )}

            {/* Next */}
            {hasNext && (
              <button
                onClick={next}
                className="absolute right-4 z-10 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                aria-label="Next page"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            )}
          </div>
        </DialogPortal>
      </Dialog>
    </>
  );
}
