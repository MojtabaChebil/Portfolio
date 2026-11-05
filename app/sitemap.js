import { projects } from "@/data/projects";

const BASE = "https://mojtabachebil.vercel.app";

export default function sitemap() {
  const pages = ["", "/resume", "/work", "/contact"].map((p) => ({
    url: `${BASE}${p}`,
    lastModified: new Date(),
  }));
  const work = projects.map((p) => ({
    url: `${BASE}/work/${p.slug}`,
    lastModified: new Date(),
  }));
  return [...pages, ...work];
}