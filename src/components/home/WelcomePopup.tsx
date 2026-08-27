"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X } from "lucide-react";

export function WelcomePopup() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setOpen(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  if (!mounted || !open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[var(--z-modal)] flex items-center justify-center bg-primary/80 p-4 backdrop-blur-sm"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Hotel Sidh Vedantha announcement"
    >
      <div
        className="relative w-full max-w-2xl overflow-hidden rounded-xl shadow-glass"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          aria-label="Close"
          className="luxury-focus absolute right-3 top-3 inline-flex size-9 items-center justify-center rounded-full bg-primary/60 text-primary-foreground hover:bg-primary/80"
          onClick={() => setOpen(false)}
          type="button"
        >
          <X className="size-4" aria-hidden="true" />
        </button>
        <Image
          alt="Hotel Sidh Vedantha is proudly affiliated with Bihar Tourism"
          className="h-auto w-full"
          height={900}
          priority
          src="/images/popup.webp"
          width={1600}
        />
      </div>
    </div>,
    document.body,
  );
}
