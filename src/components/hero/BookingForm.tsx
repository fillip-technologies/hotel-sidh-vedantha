export function BookingForm() {
  return (
    <form
      className="grid border border-primary-foreground/25 bg-background shadow-md md:grid-cols-[1fr_1fr_1fr_auto]"
      id="booking"
    >
      <label className="grid gap-2 border-b border-border p-5 md:border-b-0 md:border-r">
        <span className="text-caption text-text-muted">Check In</span>
        <input
          className="luxury-focus bg-transparent text-body-md text-text-primary"
          type="date"
        />
      </label>
      <label className="grid gap-2 border-b border-border p-5 md:border-b-0 md:border-r">
        <span className="text-caption text-text-muted">Check Out</span>
        <input
          className="luxury-focus bg-transparent text-body-md text-text-primary"
          type="date"
        />
      </label>
      <label className="grid gap-2 border-b border-border p-5 md:border-b-0 md:border-r">
        <span className="text-caption text-text-muted">Guests</span>
        <select className="luxury-focus bg-transparent text-body-md text-text-primary">
          <option>2 Guests</option>
          <option>1 Guest</option>
          <option>3 Guests</option>
          <option>4 Guests</option>
        </select>
      </label>
      <button
        className="luxury-focus bg-primary px-8 py-5 text-caption tracking-[var(--tracking-cta)] text-primary-foreground hover:bg-gold hover:text-accent-foreground"
        type="submit"
      >
        Check Availability
      </button>
    </form>
  );
}
