import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

function clampText(value: string, max: number) {
  const trimmed = value.trim();
  if (trimmed.length <= max) return trimmed;
  return `${trimmed.slice(0, max - 1)}…`;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const title = clampText(searchParams.get("title") ?? "NaviVision", 90);
  const subtitle = clampText(
    searchParams.get("subtitle") ??
      "Build, operate, and invest across talent, software, real estate, and startups.",
    140,
  );

  const brandBlue = "rgb(32, 160, 224)";
  const brandGreen = "rgb(64, 160, 64)";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background:
            "radial-gradient(1200px 600px at 20% 20%, rgba(32,160,224,0.35), transparent 55%), radial-gradient(1000px 520px at 85% 75%, rgba(64,160,64,0.28), transparent 55%), linear-gradient(135deg, rgba(2,6,23,0.04), rgba(2,6,23,0.02))",
          color: "rgb(2, 6, 23)",
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 18,
              background: `linear-gradient(135deg, ${brandBlue}, ${brandGreen})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 18px 35px rgba(2,6,23,0.18)",
            }}
          >
            <div
              style={{
                width: 18,
                height: 18,
                borderRadius: 999,
                background: "rgba(255,255,255,0.92)",
              }}
            />
          </div>
          <div style={{ fontSize: 32, fontWeight: 700, letterSpacing: "-0.02em" }}>
            NaviVision
          </div>
        </div>

        <div style={{ maxWidth: 980 }}>
          <div
            style={{
              fontSize: 66,
              fontWeight: 750,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            {title}
          </div>
          <div
            style={{
              marginTop: 20,
              fontSize: 28,
              lineHeight: 1.35,
              color: "rgba(15, 23, 42, 0.78)",
            }}
          >
            {subtitle}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 20,
            color: "rgba(15, 23, 42, 0.72)",
          }}
        >
          <div>navivision.net</div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 12, height: 12, borderRadius: 999, background: brandBlue }} />
            <div style={{ width: 12, height: 12, borderRadius: 999, background: brandGreen }} />
          </div>
        </div>
      </div>
    ),
    size,
  );
}
