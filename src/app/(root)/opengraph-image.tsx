import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ali Elmuzayn — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px",
        background:
          "radial-gradient(900px 500px at 80% -10%, rgba(120,170,255,0.18), transparent 60%), radial-gradient(700px 400px at -10% 30%, rgba(180,140,255,0.14), transparent 60%), #0b0c10",
        color: "#f5f6f7",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: 18,
          color: "rgba(245,246,247,0.6)",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.18)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 14,
              color: "#f5f6f7",
              background: "rgba(255,255,255,0.04)",
            }}
          >
            AE
          </div>
          <span>Ali Elmuzayn / Engineer</span>
        </div>
        <span>Portfolio · 2025</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <span
          style={{
            fontSize: 18,
            color: "rgba(245,246,247,0.55)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          {"// selected work · systems · performance"}
        </span>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 96,
            lineHeight: 1.02,
            fontWeight: 600,
            letterSpacing: "-0.02em",
          }}
        >
          <span>Engineering</span>
          <span
            style={{
              backgroundImage:
                "linear-gradient(100deg, #f5f6f7 0%, #f5f6f7 35%, #8fb6ff 55%, #c8a8ff 70%, #f5f6f7 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            quiet, durable
          </span>
          <span>software.</span>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: 20,
          color: "rgba(245,246,247,0.7)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: 999,
              background: "#34d399",
              boxShadow: "0 0 0 4px rgba(52,211,153,0.18)",
            }}
          />
          <span>Available for select work</span>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          {["Next.js", "TypeScript", "Tailwind v4", "RSC"].map((t) => (
            <span
              key={t}
              style={{
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.04)",
                padding: "6px 14px",
                borderRadius: 999,
                fontSize: 16,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>,
    { ...size },
  );
}
