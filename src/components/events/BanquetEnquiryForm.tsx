"use client";

import { useEffect, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { selectHallEvent } from "./SelectHallLink";

import { getRecaptchaToken } from "@/lib/recaptchaClient";
import { postForm } from "@/lib/postForm";

const fieldClass = "luxury-focus mt-2 h-12 w-full rounded-md border border-black/10 bg-white px-4 text-body-sm text-zinc-900 placeholder:text-zinc-400";
const labelClass = "grid text-body-sm text-zinc-700";
type EnquiryMode = "banquet" | "meeting";

export function BanquetEnquiryForm({ mode = "banquet" }: { mode?: EnquiryMode }) {
  const isMeeting = mode === "meeting";
  const context = isMeeting ? "Meeting Room enquiry" : "Banquets & Events enquiry";
  const meetingTypes = ["Business Meeting", "Team Discussion", "Client Meeting", "Presentation", "Training Session", "Small Corporate Gathering", "Other"];
  const banquetTypes = ["Wedding & Reception", "Birthday / Anniversary", "Corporate Event", "Meeting & Conference", "Engagement / Ring Ceremony", "Family Function / Social Gathering", "Other"];

  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hall, setHall] = useState("");

  useEffect(() => {
    const onSelectHall = (event: Event) => {
      setSubmitted(false);
      setHall((event as CustomEvent<string>).detail);
    };
    window.addEventListener(selectHallEvent, onSelectHall);
    return () => window.removeEventListener(selectHallEvent, onSelectHall);
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSending) return;

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setIsSending(true);
    setError(null);
    const recaptchaToken = await getRecaptchaToken("enquiry");
    const failure = await postForm("/api/enquiry", { ...data, recaptchaToken });
    setIsSending(false);

    if (failure) setError(failure);
    else {
      form.reset();
      setHall("");
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-xl bg-white p-7 text-center shadow-xl md:p-10" role="status">
        <CheckCircle2 className="mx-auto size-11 text-success" aria-hidden="true" />
        <h3 className="mt-5 font-heading text-3xl font-normal text-zinc-900">Your enquiry is with us.</h3>
        <p className="mx-auto mt-3 max-w-md text-body-md leading-relaxed text-zinc-600">{isMeeting ? "Thank you for sharing your plans. Our team will be in touch to discuss your meeting." : "Thank you for sharing your plans. Our events team will be in touch to discuss your occasion."}</p>
        <button className="luxury-focus mt-6 text-body-sm text-zinc-700 underline underline-offset-4" onClick={() => setSubmitted(false)} type="button">Send another enquiry</button>
      </div>
    );
  }

  return (
    <motion.form
      animate={{ opacity: 1, y: 0 }}
      className="rounded-xl bg-white p-6 shadow-xl sm:p-8 md:p-10"
      initial={{ opacity: 0, y: 16 }}
      onSubmit={handleSubmit}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <p className="text-caption uppercase tracking-[var(--tracking-eyebrow)] text-accent-hover">{isMeeting ? "Meeting room enquiry" : "Event enquiry"}</p>
      <h3 className="mt-3 font-heading text-3xl font-normal text-zinc-900 sm:text-4xl">{isMeeting ? "Tell us about your meeting" : "Tell us about your plans"}</h3>
      <p className="mt-3 text-body-sm leading-relaxed text-zinc-600">Fields marked with * are required.</p>

      <div className="mt-7 grid gap-x-5 gap-y-5 sm:grid-cols-2">
        <label className={labelClass}>
          Full Name *
          <input autoComplete="name" className={fieldClass} maxLength={100} name="name" placeholder="Your full name" required />
        </label>
        <label className={labelClass}>
          Phone Number *
          <input autoComplete="tel" className={fieldClass} maxLength={20} name="phone" pattern="[+]?[0-9 -]{10,15}" placeholder="Your phone number" required title="Enter a valid phone number" type="tel" />
        </label>
        <label className={labelClass}>
          Email Address <span className="text-caption text-zinc-500">Optional</span>
          <input autoComplete="email" className={fieldClass} maxLength={150} name="email" placeholder="you@example.com" type="email" />
        </label>
        <label className={labelClass}>
          {isMeeting ? "Meeting Date *" : "Event Date *"}
          <input className={fieldClass} name="eventDate" required type="date" />
        </label>
        <label className={labelClass}>
          {isMeeting ? "Expected Attendees *" : "Expected Guest Count *"}
          <input className={fieldClass} inputMode="numeric" max="10000" min="1" name="guestCount" placeholder="Approximate number" required type="number" />
        </label>
        <label className={`${labelClass} sm:col-span-2`}>
          {isMeeting ? "Meeting Type *" : "Event Type *"}
          <select className={fieldClass} defaultValue="" name="service" required>
            <option disabled value="">{isMeeting ? "Select a meeting type" : "Select an occasion"}</option>
            {(isMeeting ? meetingTypes : banquetTypes).map((type) => <option key={type}>{type}</option>)}
          </select>
        </label>
        {!isMeeting ? (
          <label className={`${labelClass} sm:col-span-2`}>
            Preferred Hall <span className="text-caption text-zinc-500">Optional</span>
            <select className={fieldClass} name="preferredHall" onChange={(event) => setHall(event.target.value)} value={hall}>
              <option value="">Help me choose</option>
              <option>Lus Crown</option>
              <option>La Imperial</option>
              <option>Crystal Elite</option>
              <option>The Oasis (Board Room)</option>
              <option>Rooftop Terrace</option>
            </select>
          </label>
        ) : null}
        <label className={`${labelClass} sm:col-span-2`}>
          Additional Requirements
          <textarea className="luxury-focus mt-2 min-h-28 w-full resize-y rounded-md border border-black/10 bg-white px-4 py-3 text-body-sm text-zinc-900 placeholder:text-zinc-400" maxLength={2000} name="message" placeholder={isMeeting ? "Share your preferred setup, equipment needs, or other requirements." : "Tell us about your preferred setup, menu, or anything else we should know."} />
        </label>
      </div>
      <input name="context" type="hidden" value={context} />
      <input autoComplete="off" className="hidden" name="website" tabIndex={-1} type="text" />
      {error ? <p className="mt-5 text-body-sm text-red-700" role="alert">{error}</p> : null}
      <button className="luxury-focus btn btn-primary mt-7 w-full justify-center disabled:cursor-wait disabled:opacity-60" disabled={isSending} type="submit">
        {isSending ? "Sending enquiry…" : "Submit Enquiry"}
        {!isSending ? <ArrowRight aria-hidden="true" className="size-4" /> : null}
      </button>
      <p className="mt-4 text-center text-caption leading-relaxed text-zinc-500">Your details will only be used to respond to this event enquiry.</p>
    </motion.form>
  );
}
