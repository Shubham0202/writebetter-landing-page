import { ImageResponse } from "next/og";

import { SITE_CONFIG } from "@/config/site";

export const alt = `${SITE_CONFIG.name}: ${SITE_CONFIG.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BRAND_INDIGO = "#4f46e5";
const NAVY = "#14213d";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(180deg, #eef0ff 0%, #fcfcfe 60%)",
          color: NAVY,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <svg width="72" height="72" viewBox="0 0 32 32">
            <rect width="32" height="32" rx="8" fill={BRAND_INDIGO} />
            <path
              d="M9.5 16.5l4.5 4.5 8.5-9.5"
              fill="none"
              stroke="white"
              strokeWidth="3.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span style={{ fontSize: 48, fontWeight: 700 }}>{SITE_CONFIG.name}</span>
        </div>
        <div style={{ marginTop: 48, fontSize: 72, fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
          Your Writing, Just Better.
        </div>
        <div style={{ marginTop: 28, fontSize: 32, color: "#4b5571", maxWidth: 900 }}>
          Grammar checker and polite writing assistant for Chrome.
        </div>
      </div>
    ),
    size,
  );
}
