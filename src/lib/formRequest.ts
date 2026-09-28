import { isRateLimited } from "./rateLimit";

/** Shared guard for the form routes: rate limit, parse JSON, drop honeypot bots. */
export async function readFormRequest(request: Request, scope: string) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(`${scope}:${ip}`)) {
    return { response: Response.json({ ok: false, error: "Too many requests. Please try again later." }, { status: 429 }) };
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return { response: Response.json({ ok: false, error: "Invalid request." }, { status: 400 }) };
  }

  // Hidden "website" field: humans leave it empty, bots fill it. Pretend success and send nothing.
  if (typeof body.website === "string" && body.website !== "") {
    return { response: Response.json({ ok: true }) };
  }

  return { body };
}

export function mailFailed(error: unknown) {
  console.error("Failed to send mail:", error);
  return Response.json(
    { ok: false, error: "We couldn't send your request right now. Please call us instead." },
    { status: 502 },
  );
}
