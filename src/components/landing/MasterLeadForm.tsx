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

  return (
    <form
      className={`rounded-xl border p-5 shadow-glass backdrop-blur-md md:p-6 ${
        isLight
          ? "border-primary-foreground/18 bg-primary-foreground/95"
          : "border-border bg-glass"
      }`}
    >
      <p className="text-caption text-text-muted">{context}</p>
      <h2 className="mt-3 text-heading-md text-text-primary">Plan with our concierge</h2>
      <div className="mt-6 grid gap-4">
        <FormField
          icon={UserRound}
          label="Your Name"
          name="name"
          placeholder="Enter your name"
          type="text"
        />
        <FormField
          icon={Phone}
          label="Phone Number"
          name="phone"
          placeholder="Enter phone number"
          type="tel"
        />
        <FormField
          icon={Mail}
          label="Email Address"
          name="email"
          placeholder="Enter email address"
          type="email"
        />
        <label className="grid gap-2 text-body-sm text-text-secondary">
          Service Type
          <select
            className="luxury-focus h-12 rounded-full border border-border bg-surface px-4 text-text-primary placeholder:text-text-muted"
            name="service"
          >
            <option>Room Booking</option>
            <option>Event / Banquet</option>
            <option>Dining</option>
            <option>Corporate Booking</option>
            <option>General Enquiry</option>
          </select>
        </label>
        <label className="grid gap-2 text-body-sm text-text-secondary">
          Message
          <span className="relative">
            <MessageSquare className="absolute left-4 top-4 size-4 text-text-muted" aria-hidden="true" />
            <textarea
              className="luxury-focus min-h-28 w-full rounded-xl border border-border bg-surface px-11 py-3 text-text-primary"
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
  label,
  name,
  placeholder,
  type,
}: {
  icon: typeof UserRound;
  label: string;
  name: string;
  placeholder: string;
  type: string;
}) {
  return (
    <label className="grid gap-2 text-body-sm text-text-secondary">
      {label}
      <span className="relative">
        <Icon className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-text-muted" aria-hidden="true" />
        <input
          className="luxury-focus h-12 w-full rounded-full border border-border bg-surface px-11 text-text-primary placeholder:text-text-muted"
          name={name}
          placeholder={placeholder}
          type={type}
        />
      </span>
    </label>
  );
}
