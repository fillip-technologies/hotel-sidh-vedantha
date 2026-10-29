"use client";

import { useState, type FormEvent } from "react";
import { BriefcaseBusiness, CheckCircle2, FileUp, Phone, Send, UserRound, type LucideIcon } from "lucide-react";

import { getRecaptchaToken } from "@/lib/recaptchaClient";
import { careerPositions } from "@/data/careerPositions";

const maxResumeBytes = 5 * 1024 * 1024;
const phonePattern = "[+]?[0-9 -]{10,15}";

export function CareerApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const resume = formData.get("resume");

    if (!(resume instanceof File) || resume.size === 0) {
      setError("Please attach your resume.");
      return;
    }
    if (resume.size > maxResumeBytes) {
      setError("Your resume must be 5 MB or smaller.");
      return;
    }
    const extension = resume.name.split(".").pop()?.toLowerCase();
    if (!extension || !["pdf", "doc", "docx"].includes(extension)) {
      setError("Upload a PDF, DOC, or DOCX resume.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const token = await getRecaptchaToken("career_application");
      if (!token) {
        setError("We couldn't verify your application. Please refresh the page and try again.");
        return;
      }

      formData.set("recaptchaToken", token);
      const response = await fetch("/api/careers", { method: "POST", body: formData });
      const result = await response.json().catch(() => null);

      if (!response.ok || !result?.ok) {
        setError(result?.error ?? "We couldn't submit your application. Please try again.");
        return;
      }

      form.reset();
      setSubmitted(true);
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-border bg-card p-6 text-center shadow-glass md:p-8" role="status">
        <CheckCircle2 className="mx-auto size-10 text-success" aria-hidden="true" />
        <h2 className="mt-4 text-heading-md text-text-primary">Application received</h2>
        <p className="mt-3 text-body-sm text-text-secondary">
          Thank you for your interest. The hotel team has received your application.
        </p>
        <button
          className="luxury-focus btn btn-secondary mt-6 w-full"
          onClick={() => setSubmitted(false)}
          type="button"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form className="rounded-xl border border-border bg-card p-5 shadow-glass md:p-8" onSubmit={handleSubmit}>
      <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">Apply for a hotel role</p>
      <h2 className="mt-3 text-heading-md text-text-primary">Share your application</h2>
      <p className="mt-3 text-body-sm text-text-secondary">
        Your application and resume are emailed to the hotel’s configured inbox. The resume is not published on this website.
      </p>

      <div className="mt-6 grid gap-5">
        <FormField
          icon={UserRound}
          label="Full Name"
          name="name"
          placeholder="Enter your full name"
          required
          maxLength={100}
          autoComplete="name"
        />
        <FormField
          icon={Phone}
          label="Phone Number"
          name="phone"
          placeholder="Enter your phone number"
          required
          maxLength={20}
          autoComplete="tel"
          pattern={phonePattern}
          title="Enter a valid phone number"
          type="tel"
        />
        <label className="grid gap-2 text-body-sm text-text-secondary">
          Position Applied For
          <span className="relative">
            <BriefcaseBusiness className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-text-muted" aria-hidden="true" />
            <select
              className="luxury-focus h-12 w-full appearance-none rounded-full border border-border bg-surface px-11 text-body-sm text-text-primary"
              defaultValue=""
              name="position"
              required
            >
              <option disabled value="">Select a position</option>
              {careerPositions.map((position) => (
                <option key={position.title} value={position.title}>{position.title}</option>
              ))}
            </select>
          </span>
        </label>

        <label className="grid gap-2 text-body-sm text-text-secondary">
          Resume Upload
          <span className="relative">
            <FileUp className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-text-muted" aria-hidden="true" />
            <input
              className="luxury-focus w-full rounded-full border border-border bg-surface py-3 pl-11 pr-3 text-body-sm text-text-primary file:mr-3 file:rounded-full file:border-0 file:bg-secondary file:px-3 file:py-2 file:text-caption file:font-semibold file:text-secondary-foreground"
              name="resume"
              type="file"
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              required
            />
          </span>
          <span className="text-caption text-text-muted">PDF, DOC, or DOCX · Maximum 5 MB</span>
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

      {error ? <p className="mt-4 text-body-sm text-red-600" role="alert">{error}</p> : null}

      <button
        className="luxury-focus btn btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-60"
        disabled={isSubmitting}
        type="submit"
      >
        {isSubmitting ? "Submitting..." : "Submit Application"}
        <Send className="size-4" aria-hidden="true" />
      </button>
    </form>
  );
}

function FormField({
  autoComplete,
  icon: Icon,
  label,
  maxLength,
  name,
  pattern,
  placeholder,
  required,
  title,
  type = "text",
}: {
  autoComplete?: string;
  icon: LucideIcon;
  label: string;
  maxLength: number;
  name: string;
  pattern?: string;
  placeholder: string;
  required?: boolean;
  title?: string;
  type?: string;
}) {
  return (
    <label className="grid gap-2 text-body-sm text-text-secondary">
      {label}
      <span className="relative">
        <Icon className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-text-muted" aria-hidden="true" />
        <input
          autoComplete={autoComplete}
          className="luxury-focus h-12 w-full rounded-full border border-border bg-surface px-11 text-body-sm text-text-primary placeholder:text-text-muted"
          maxLength={maxLength}
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
