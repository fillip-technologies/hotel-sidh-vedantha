type Grecaptcha = {
  ready: (cb: () => void) => void;
  execute: (siteKey: string, options: { action: string }) => Promise<string>;
};

declare global {
  interface Window {
    grecaptcha?: Grecaptcha;
  }
}

let scriptPromise: Promise<void> | null = null;

function loadScript(siteKey: string) {
  scriptPromise ??= new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    script.onload = () => window.grecaptcha?.ready(() => resolve());
    script.onerror = () => {
      scriptPromise = null;
      reject(new Error("Failed to load reCAPTCHA"));
    };
    document.head.appendChild(script);
  });
  return scriptPromise;
}

/** Client helper: loads reCAPTCHA v3 on demand and returns a fresh token for `action`, or null on failure. */
export async function getRecaptchaToken(action: string): Promise<string | null> {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  if (!siteKey) return null;

  try {
    await loadScript(siteKey);
    return (await window.grecaptcha?.execute(siteKey, { action })) ?? null;
  } catch {
    return null;
  }
}
