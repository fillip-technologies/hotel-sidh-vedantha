import { siteContact } from "@/data/siteContact";

export function FloatingWhatsApp() {
  return (
    <a
      aria-label="Chat with us on WhatsApp"
      className="floating-whatsapp luxury-focus"
      href={siteContact.whatsappHref}
      rel="noopener noreferrer"
      target="_blank"
      title="Chat with us on WhatsApp"
    >
      <svg aria-hidden="true" viewBox="0 0 32 32" fill="currentColor">
        <path d="M16.02 3.2A12.7 12.7 0 0 0 5.1 22.36L3.3 28.8l6.6-1.73A12.7 12.7 0 1 0 16.02 3.2Zm0 23.1c-1.95 0-3.86-.52-5.53-1.5l-.4-.23-3.92 1.03 1.05-3.82-.26-.41a10.46 10.46 0 1 1 9.06 4.93Zm5.74-7.84c-.31-.16-1.84-.91-2.13-1.02-.29-.1-.5-.16-.71.16-.21.31-.81 1.02-.99 1.23-.18.21-.36.23-.67.08-.31-.16-1.32-.49-2.51-1.55-.93-.83-1.55-1.85-1.73-2.16-.18-.31-.02-.48.13-.64.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.54-.08-.16-.71-1.71-.97-2.34-.25-.61-.51-.53-.71-.54l-.61-.01c-.21 0-.54.08-.83.39-.29.31-1.09 1.07-1.09 2.62s1.12 3.04 1.28 3.25c.16.21 2.2 3.36 5.33 4.71.74.32 1.32.51 1.77.65.74.24 1.41.2 1.94.12.59-.09 1.84-.75 2.1-1.47.26-.72.26-1.34.18-1.47-.08-.13-.29-.21-.6-.36Z" />
      </svg>
      <span className="floating-whatsapp-tooltip" aria-hidden="true">
        Chat with us on WhatsApp
      </span>
    </a>
  );
}
