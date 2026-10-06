const PAGES_BASE = "/demo_cashew";

export function asset(path: string) {
  const configured = process.env.NEXT_PUBLIC_BASE_PATH;
  if (configured) return `${configured}${path}`;
  // Production is published only at the GitHub Pages project path.
  if (process.env.NODE_ENV === "production") return `${PAGES_BASE}${path}`;
  return path;
}
