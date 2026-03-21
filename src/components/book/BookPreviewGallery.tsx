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

  function close() {
    setOpenIndex(null);
  }

  function prev() {
    if (hasPrev) setOpenIndex((i) => (i ?? 0) - 1);
  }

  function next() {
    if (hasNext) setOpenIndex((i) => (i ?? 0) + 1);
  }

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
            <Image
              src={images[openIndex].src}
              alt={images[openIndex].alt}
              width={1200}
              height={1600}
              className="relative z-[1] max-h-[90vh] md:max-h-[94vh] w-auto max-w-[94vw] rounded-lg object-contain"
              sizes="(min-width: 1024px) 80vw, 94vw"
              priority
            />

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
