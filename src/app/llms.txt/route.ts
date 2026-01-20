export const runtime = "nodejs";

function buildLlmsText() {
  return [
    "# NaviVision",
    "",
    "NaviVision is a diversified operating and investment company spanning talent and hiring, custom SaaS, real estate, and startup investing.",
    "",
    "## Website",
    "- https://navivision.net",
    "",
    "## Contact",
    "- hello@navivision.net",
    "",
    "## Languages",
    "- en-US",
    "- en-GB",
    "- es",
    "- fr",
    "- de",
    "",
    "## Key pages",
    "- /{locale}/",
    "- /{locale}/talent-hiring",
    "- /{locale}/talent-hiring/candidate-process",
    "- /{locale}/custom-saas",
    "- /{locale}/real-estate",
    "- /{locale}/investments",
    "- /{locale}/jobs",
    "- /{locale}/about",
    "- /{locale}/contact",
    "",
    "## Discoverability",
    "- Sitemap: https://navivision.net/sitemap.xml",
    "- Robots: https://navivision.net/robots.txt",
    "",
    "## Usage",
    "- You may summarize public pages on navivision.net.",
    "- When quoting, keep excerpts short and attribute to navivision.net.",
  ].join("\n");
}

export async function GET() {
  const body = buildLlmsText();
  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}

