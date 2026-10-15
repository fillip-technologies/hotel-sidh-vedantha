const MIN_SCORE = 0.5;

/** Server helper: asks Google whether a reCAPTCHA v3 token is valid, human-looking, and for the expected action. */
export async function verifyRecaptcha(token: unknown, action: string, ip: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    console.error("RECAPTCHA_SECRET_KEY is not set; rejecting form submission.");
    return false;
  }
  if (typeof token !== "string" || token === "") return false;

  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token, ...(ip !== "unknown" && { remoteip: ip }) }),
    });
    const result = await response.json();
    return result?.success === true && result.action === action && result.score >= MIN_SCORE;
  } catch (error) {
    console.error("reCAPTCHA verification failed:", error);
    return false;
  }
}
