import fs from "fs";
import path from "path";
import { MetadataRoute } from "next";

const baseUrl = "https://www.rockyescortskarachi.com/";

// 🚫 Never index these
const EXCLUDED = ["api", "admin", "dashboard", "_components", "private"];

// 🧠 Normalize segments
function normalize(segment: string): string | null {
  if (segment.startsWith("(") && segment.endsWith(")")) return "";
  if (segment.startsWith("[")) return null;
  return segment;
}

// 🔍 Detect noindex pages
function isNoIndex(filePath: string): boolean {
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    return content.includes("noindex");
  } catch {
    return false;
  }
}

// 🧠 Extract keywords from path (for scoring)
function getKeywords(route: string): string[] {
  return route.split("/").filter(Boolean);
}

// 📊 Advanced scoring engine
function calculatePriority(route: string): number {
  const depth = route.split("/").length;

  let score = 1;

  // homepage
  if (route === "/") return 1.0;

  // shallow pages rank higher
  score -= depth * 0.1;

  // keyword boosts
  const keywords = getKeywords(route);

  if (keywords.includes("pricing")) score += 0.2;
  if (keywords.includes("services")) score += 0.15;
  if (keywords.includes("contact")) score += 0.1;
  if (keywords.includes("blog")) score += 0.05;

  // clamp between 0.3 and 1
  return Math.max(0.3, Math.min(1, score));
}

// 🔄 Smart crawl frequency
function getChangeFreq(route: string): MetadataRoute.Sitemap[number]["changeFrequency"] {
  if (route === "/") return "daily";
  if (route.includes("blog")) return "weekly";
  if (route.includes("pricing")) return "monthly";
  return "monthly";
}

// 🔗 Internal linking dataset (hidden weapon)
type RouteNode = {
  path: string;
  depth: number;
};

function buildInternalLinkGraph(routes: string[]): Record<string, string[]> {
  const graph: Record<string, string[]> = {};

  routes.forEach((route) => {
    graph[route] = routes
      .filter((r) => r !== route)
      .sort((a, b) => a.length - b.length)
      .slice(0, 5); // top 5 closest pages
  });

  return graph;
}

// 🔍 Recursive scanner
function scan(dir: string, parent = ""): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  let routes: string[] = [];

  for (const entry of entries) {
    if (EXCLUDED.includes(entry.name)) continue;

    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      const normalized = normalize(entry.name);
      if (normalized === null) continue;

      const newPath = normalized ? `${parent}/${normalized}` : parent;

      routes.push(...scan(fullPath, newPath));
    }

    if (entry.isFile() && entry.name === "page.tsx") {
      if (isNoIndex(fullPath)) continue;

      const route = parent === "" ? "/" : parent;
      routes.push(route);
    }
  }

  return routes;
}

// 🧠 Crawl budget optimizer
function optimizeCrawlBudget(routes: string[]): string[] {
  return routes.filter((route) => {
    const depth = route.split("/").length;

    // remove very deep low-value pages
    if (depth > 4 && !route.includes("blog")) return false;

    return true;
  });
}

// 🚀 MAIN
export default function sitemap(): MetadataRoute.Sitemap {
  const appDir = path.join(process.cwd(), "app");

  let routes = scan(appDir);

  // dedupe
  routes = Array.from(new Set(routes));

  // optimize crawl budget
  routes = optimizeCrawlBudget(routes);

  // build internal graph (optional use)
  const internalGraph = buildInternalLinkGraph(routes);

  // 👉 you can export this somewhere later if needed
  // console.log(internalGraph);

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: getChangeFreq(route),
    priority: calculatePriority(route),
  }));
}