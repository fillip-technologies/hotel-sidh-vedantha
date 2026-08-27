import { CalendarCheck, Mail, MessageSquare, Phone, UserRound } from "lucide-react";

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

  return (
    <form
      className={`rounded-xl border p-5 shadow-glass backdrop-blur-md md:p-6 ${
        isLight ? "border-black/10 bg-white/95" : "border-border bg-glass"
      }`}
    >
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
          type="text"
        />
        <FormField
          icon={Phone}
          iconToneClass={iconToneClass}
          fieldToneClass={fieldToneClass}
          label="Phone Number"
          labelToneClass={labelToneClass}
          name="phone"
          placeholder="Enter phone number"
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
          type="email"
        />
        <label className={`grid gap-2 text-body-sm ${labelToneClass}`}>
          Service Type
          <select
            className={`luxury-focus h-12 rounded-full border px-4 ${fieldToneClass}`}
            name="service"
          >
            <option>Room Booking</option>
            <option>Event / Banquet</option>
            <option>Dining</option>
            <option>Corporate Booking</option>
            <option>General Enquiry</option>
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
      </div>
      <button
        className="luxury-focus brand-gradient-bg mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-button"
        type="submit"
      >
        {ctaLabel}
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
  placeholder,
  type,
}: {
  icon: typeof UserRound;
  iconToneClass: string;
  fieldToneClass: string;
  label: string;
  labelToneClass: string;
  name: string;
  placeholder: string;
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
          placeholder={placeholder}
          type={type}
        />
      </span>
    </label>
  );
}
