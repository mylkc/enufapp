// Central place to configure your media server URL.
// For local development, leave as localhost:3001.
// In production, set VITE_MEDIA_SERVER_URL in an .env file.
export const MEDIA_SERVER_URL =
  import.meta.env.VITE_MEDIA_SERVER_URL || "http://localhost:3001";
