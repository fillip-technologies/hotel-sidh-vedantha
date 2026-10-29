"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X } from "lucide-react";

export function MeetingRoomGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const triggerElement = triggerRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      window.requestAnimationFrame(() => triggerElement?.focus());
    };
  }, [isOpen]);

  return (
    <>
      <figure className="group overflow-hidden rounded-lg bg-primary shadow-lg">
        <button
          aria-label="Open meeting room photo preview"
          className="luxury-focus relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden md:aspect-[16/10]"
          onClick={() => setIsOpen(true)}
          ref={triggerRef}
          type="button"
        >
          <Image
            alt="Meeting table and chairs arranged in the hotel's meeting room"
            className="object-cover transition-transform duration-slow group-hover:scale-[1.035]"
            fill
            loading="lazy"
            sizes="(min-width: 1024px) 60vw, 100vw"
            src="/images/event.png"
          />
          <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/80 to-transparent p-5 pt-16 text-left text-body-sm text-primary-foreground">
            Meeting room setup · Select to enlarge
          </span>
        </button>
        <figcaption className="px-5 py-3 text-caption text-primary-foreground/70">Meeting room photograph</figcaption>
      </figure>

      {isOpen ? createPortal(
        <div
          aria-labelledby="meeting-photo-caption"
          aria-modal="true"
          className="fixed inset-0 z-[var(--z-modal)] flex items-center justify-center bg-primary/90 p-4 backdrop-blur-sm md:p-10"
          onClick={() => setIsOpen(false)}
          onKeyDown={(event) => {
            if (event.key !== "Tab") return;
            event.preventDefault();
            closeRef.current?.focus();
          }}
          role="dialog"
        >
          <button
            aria-label="Close meeting room photo"
            className="luxury-focus absolute right-4 top-4 inline-flex size-11 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 md:right-8 md:top-8"
            onClick={() => setIsOpen(false)}
            ref={closeRef}
            type="button"
          >
            <X aria-hidden="true" className="size-5" />
          </button>
          <figure className="relative w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
            <div className="relative aspect-[4/3] max-h-[78svh] w-full overflow-hidden rounded-lg sm:aspect-[16/10]">
              <Image
                alt="Meeting table and chairs arranged in the hotel's meeting room"
                className="object-contain"
                fill
                loading="eager"
                sizes="94vw"
                src="/images/event.png"
              />
            </div>
            <figcaption className="mt-4 text-center text-body-md text-primary-foreground" id="meeting-photo-caption">Meeting room setup</figcaption>
          </figure>
        </div>,
        document.body,
      ) : null}
    </>
  );
}
