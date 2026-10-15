"use client";

import { useState, type FormEvent } from "react";
import { CalendarCheck, CheckCircle2, Mail, MessageSquare, Phone, UserRound } from "lucide-react";

import { postForm } from "@/lib/postForm";

type MasterLeadFormProps = {
  ctaLabel?: string;
  context?: string;
  tone?: "default" | "light";
};

export function MasterLeadForm({
  ctaLabel = "Request a Call Back",
  context = "Hotel enquiry",
  tone = "default",
}: Readonly<MasterLeadFormProps>) {
  const isLight = tone === "light";
  const fieldToneClass = isLight
    ? "border-black/10 bg-white text-zinc-900 placeholder:text-zinc-400"
    : "border-border bg-surface text-text-primary placeholder:text-text-muted";
  const iconToneClass = isLight ? "text-zinc-400" : "text-text-muted";
  const labelToneClass = isLight ? "text-zinc-600" : "text-text-secondary";

  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSending) return;

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setIsSending(true);
    setError(null);
    const failure = await postForm("/api/enquiry", { ...data, context });
    setIsSending(false);

    if (failure) setError(failure);
    else {
      form.reset();
      setSubmitted(true);
    }
  };

  const shellClass = `rounded-xl border p-5 shadow-glass backdrop-blur-md md:p-6 ${
    isLight ? "border-black/10 bg-white/95" : "border-border bg-glass"
  }`;

  if (submitted) {
    return (
      <div className={`${shellClass} text-center`} role="status">
        <CheckCircle2 className="mx-auto size-10 text-success" aria-hidden="true" />
        <h2 className={`mt-4 text-heading-md ${isLight ? "text-zinc-900" : "text-text-primary"}`}>
          Thank you!
        </h2>
        <p className={`mt-3 text-body-sm ${labelToneClass}`}>
          Your enquiry has been sent. Our team will get back to you shortly.
        </p>
        <button
          className="luxury-focus btn btn-primary mt-6 w-full"
          onClick={() => setSubmitted(false)}
          type="button"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form className={shellClass} onSubmit={handleSubmit}>
      <p className={`text-caption ${isLight ? "text-zinc-500" : "text-text-muted"}`}>{context}</p>
      <h2 className={`mt-3 text-heading-md ${isLight ? "text-zinc-900" : "text-text-primary"}`}>
        Plan with our concierge
      </h2>
      <div className="mt-6 grid gap-4">
        <FormField
          icon={UserRound}
          iconToneClass={iconToneClass}
          fieldToneClass={fieldToneClass}
          label="Your Name"
          labelToneClass={labelToneClass}
          name="name"
          placeholder="Enter your name"
          required
          type="text"
        />
        <FormField
          icon={Phone}
          iconToneClass={iconToneClass}
          fieldToneClass={fieldToneClass}
          label="Phone Number"
          labelToneClass={labelToneClass}
          name="phone"
          pattern="[+]?[0-9 \-]{10,15}"
          placeholder="Enter phone number"
          required
          title="Enter a valid phone number"
          type="tel"
        />
        <FormField
          icon={Mail}
          iconToneClass={iconToneClass}
          fieldToneClass={fieldToneClass}
          label="Email Address"
          labelToneClass={labelToneClass}
          name="email"
          placeholder="Enter email address"
          required
          type="email"
        />
        <label className={`grid gap-2 text-body-sm ${labelToneClass}`}>
          Service Type
          <select
            className={`luxury-focus h-12 rounded-full border px-4 ${fieldToneClass}`}
            name="service"
          >
            <option value="Room Booking">Room Booking</option>
            <option value="Event / Banquet">Event / Banquet</option>
            <option value="Dining">Dining</option>
            <option value="Corporate Booking">Corporate Booking</option>
            <option value="General Enquiry">General Enquiry</option>
          </select>
        </label>
        <label className={`grid gap-2 text-body-sm ${labelToneClass}`}>
          Message
          <span className="relative">
            <MessageSquare className={`absolute left-4 top-4 size-4 ${iconToneClass}`} aria-hidden="true" />
            <textarea
              className={`luxury-focus min-h-28 w-full rounded-xl border px-11 py-3 ${fieldToneClass}`}
              name="message"
              placeholder="Tell us your dates, guest count, or event details"
            />
          </span>
        </label>
        <input
          aria-hidden="true"
          autoComplete="off"
          className="hidden"
          name="website"
          tabIndex={-1}
          type="text"
        />
      </div>
      {error ? (
        <p className="mt-4 text-body-sm text-red-600" role="alert">
          {error}
        </p>
      ) : null}
      <button
        className="luxury-focus btn btn-primary mt-6 w-full disabled:opacity-60"
        disabled={isSending}
        type="submit"
      >
        {isSending ? "Sending..." : ctaLabel}
        <CalendarCheck className="size-4" aria-hidden="true" />
      </button>
    </form>
  );
}

function FormField({
  icon: Icon,
  iconToneClass,
  fieldToneClass,
  label,
  labelToneClass,
  name,
  pattern,
  placeholder,
  required,
  title,
  type,
}: {
  icon: typeof UserRound;
  iconToneClass: string;
  fieldToneClass: string;
  label: string;
  labelToneClass: string;
  name: string;
  pattern?: string;
  placeholder: string;
  required?: boolean;
  title?: string;
  type: string;
}) {
  return (
    <label className={`grid gap-2 text-body-sm ${labelToneClass}`}>
      {label}
      <span className="relative">
        <Icon className={`absolute left-4 top-1/2 size-4 -translate-y-1/2 ${iconToneClass}`} aria-hidden="true" />
        <input
          className={`luxury-focus h-12 w-full rounded-full border px-11 ${fieldToneClass}`}
          name={name}
          pattern={pattern}
          placeholder={placeholder}
          required={required}
          title={title}
          type={type}
        />
      </span>
    </label>
  );
}
