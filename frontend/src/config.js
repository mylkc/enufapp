// Central place to configure your media server URL.
// In production, set VITE_MEDIA_SERVER_URL in an .env file.
const mediaEnv = import.meta.env?.VITE_MEDIA_SERVER_URL;
export const MEDIA_SERVER_URL = mediaEnv || "";
if (!mediaEnv && typeof console !== "undefined") {
  console.warn("VITE_MEDIA_SERVER_URL is not set; MEDIA_SERVER_URL is empty.");
}
