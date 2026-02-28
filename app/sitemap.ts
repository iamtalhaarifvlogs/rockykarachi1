import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rockyescortskarachi.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date("2026-02-24"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date("2026-02-24"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2026-02-24"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/models`,
      lastModified: new Date("2026-02-24"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio/vip-escorts-dha-karachi`,
      lastModified: new Date("2026-02-24"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio/escorts-clifton-karachi`,
      lastModified: new Date("2026-02-24"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio/escorts-bahria-town-karachi`,
      lastModified: new Date("2026-02-24"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio/escorts-pechs-karachi`,
      lastModified: new Date("2026-02-24"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}