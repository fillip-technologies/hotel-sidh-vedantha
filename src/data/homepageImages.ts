/**
 * Homepage-only room images.
 *
 * Every path here applies to the homepage ONLY. The /rooms listing page and the
 * /rooms/[slug] detail pages always use the `image` field in rooms.json, so
 * editing this file can never change them.
 *
 * Keys are room slugs: "executive-rooms" | "club-rooms" | "premium-rooms" | "vedantha-suite".
 * Remove a key (or the whole entry) to fall back to the rooms.json image.
 */

/** "Rooms & Suites" — the 3 large tiles near the top of the homepage. */
export const showcaseImages: Record<string, string> = {
  "vedantha-suite": "/images/Rooms/room 1-Suite/0Z8A8862.png",
  "premium-rooms": "/images/Rooms/room 4-Premium/0Z8A89322.png",
  "executive-rooms": "/images/Rooms/room 3-EXecutive/0Z8A90844.png",
};

/** "Comfort for Every Stay" — the 4 room cards further down the homepage. */
export const roomCardImages: Record<string, string> = {
  "executive-rooms": "/images/Rooms/room 3-EXecutive/0Z8A90844.png",
  "club-rooms": "/images/Rooms/room 2-Club/0Z8A8909.JPG",
  "premium-rooms": "/images/Rooms/room 4-Premium/0Z8A89322.png",
  "vedantha-suite": "/images/Rooms/room 1-Suite/0Z8A8862.png",
};
