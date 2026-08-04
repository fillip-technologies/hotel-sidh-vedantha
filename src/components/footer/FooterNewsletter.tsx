export function FooterNewsletter() {
  return (
    <section aria-labelledby="footer-newsletter">
      <h2 className="text-heading-sm text-text-primary" id="footer-newsletter">
        Private Offers
      </h2>
      <form className="mt-5 grid gap-3">
        <label className="sr-only" htmlFor="footer-email">
          Email address
        </label>
        <input
          className="luxury-focus rounded-full border border-border bg-background px-5 py-3 text-body-sm text-text-primary placeholder:text-text-muted"
          id="footer-email"
          name="email"
          placeholder="Email address"
          type="email"
        />
        <button
          className="luxury-focus brand-gradient-bg rounded-full px-5 py-3 text-button"
          type="submit"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}
