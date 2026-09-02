import { Search } from "lucide-react";

export function BookingForm() {
  return (
    <form
      className="mx-auto grid w-full max-w-[var(--container-page)] overflow-hidden rounded-xl border border-primary-foreground/25 bg-background p-2 shadow-glass md:grid-cols-[1fr_1fr_0.85fr_auto] md:items-center md:rounded-full"
      id="booking"
    >
      <label className="grid gap-2 border-b border-border px-6 py-4 md:border-b-0 md:border-r lg:px-8">
        <span className="text-caption text-text-muted">Check In</span>
        <input
          className="luxury-focus bg-transparent text-body-md text-text-primary"
          type="date"
        />
      </label>
      <label className="grid gap-2 border-b border-border px-6 py-4 md:border-b-0 md:border-r lg:px-8">
        <span className="text-caption text-text-muted">Check Out</span>
        <input
          className="luxury-focus bg-transparent text-body-md text-text-primary"
          type="date"
        />
      </label>
      <label className="grid gap-2 border-b border-border px-6 py-4 md:border-b-0 md:border-r lg:px-8">
        <span className="text-caption text-text-muted">Guests</span>
        <select className="luxury-focus bg-transparent text-body-md text-text-primary">
          <option>2 Guests</option>
          <option>1 Guest</option>
          <option>3 Guests</option>
          <option>4 Guests</option>
        </select>
      </label>
      <button
        className="luxury-focus btn btn-primary md:self-stretch lg:px-8"
        type="submit"
      >
        <Search className="size-4" aria-hidden="true" />
        Check Availability
      </button>
    </form>
  );
}
