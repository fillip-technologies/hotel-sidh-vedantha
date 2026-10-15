"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";

import { siteContact } from "@/data/siteContact";

type CopyEmailButtonProps = {
  className?: string;
  /** Visible text. Omit it for an icon-only button. */
  label?: string;
};

const resetDelayMs = 2000;

/**
 * Copies the hotel email to the clipboard.
 *
 * Sits next to the `mailto:` links, which do nothing on computers that have no
 * default email app set up, so every visitor still has a way to get the address.
 */
export function CopyEmailButton({ className = "", label }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;

    const timer = window.setTimeout(() => setCopied(false), resetDelayMs);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteContact.email);
      setCopied(true);
    } catch {
      // Clipboard access is unavailable (e.g. blocked by the browser): show the
      // address in a prompt so it can still be copied by hand.
      window.prompt("Copy our email address:", siteContact.email);
    }
  };

  const Icon = copied ? Check : Copy;
  const status = copied ? "Email copied" : "Copy email address";

  return (
    <button
      aria-label={label ? undefined : status}
      className={`cursor-pointer ${className}`}
      onClick={copyEmail}
      title={status}
      type="button"
    >
      <Icon className="size-4 shrink-0" aria-hidden="true" />
      {label && <span aria-live="polite">{copied ? "Copied!" : label}</span>}
    </button>
  );
}
