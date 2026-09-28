/** Client helper: POSTs JSON to a form route and returns an error message, or null on success. */
export async function postForm(url: string, data: Record<string, unknown>): Promise<string | null> {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await response.json().catch(() => null);

    if (response.ok && result?.ok) return null;
    return result?.error ?? "Something went wrong. Please try again.";
  } catch {
    return "Network error. Please check your connection and try again.";
  }
}
