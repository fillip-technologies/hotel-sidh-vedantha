"use client";

import type { ReactNode } from "react";

export const selectHallEvent = "banquet:select-hall";

export function SelectHallLink({ children, className, hall }: { children: ReactNode; className?: string; hall: string }) {
  return (
    <a
      className={className}
      href="#event-enquiry"
      onClick={() => window.dispatchEvent(new CustomEvent(selectHallEvent, { detail: hall }))}
    >
      {children}
    </a>
  );
}
