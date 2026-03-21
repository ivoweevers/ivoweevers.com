"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

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

  const close = React.useCallback(() => setOpenIndex(null), []);

  const prev = React.useCallback(() => {
    setOpenIndex((i) => (i !== null && i > 0 ? i - 1 : i));
  }, []);

  const next = React.useCallback(() => {
    setOpenIndex((i) =>
      i !== null && i < images.length - 1 ? i + 1 : i
    );
  }, [images.length]);

  React.useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, close, prev, next]);

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

      {isOpen &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Book page preview"
            className="fixed inset-0 z-50 flex items-center justify-center"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/85"
              onClick={close}
              aria-hidden="true"
            />

            {/* Close */}
            <button
              onClick={close}
              className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              aria-label="Close preview"
            >
              <X className="h-6 w-6" />
            </button>

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
            <div className="relative z-[1] h-[90vh] md:h-[94vh] w-[94vw] md:w-[70vw] lg:w-[55vw] flex items-center justify-center">
              <Image
                src={images[openIndex].src}
                alt={images[openIndex].alt}
                fill
                className="object-contain rounded-lg"
                sizes="(min-width: 1024px) 55vw, (min-width: 768px) 70vw, 94vw"
                priority
              />
            </div>

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
          </div>,
          document.body
        )}
    </>
  );
}
