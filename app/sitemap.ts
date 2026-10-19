
import { MetadataRoute } from "next";

const baseUrl = "https://rockykarachi1.vercel.app";
// Domain lagne ke baad isko change kar dena:
// const baseUrl = "https://rockykarachi1.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    // Homepage - highest priority
    { path: "/", priority: 1.0, changeFrequency: "daily" as const },

    // Main service pages
    { path: "/models", priority: 0.95, changeFrequency: "weekly" as const },
    { path: "/companions", priority: 0.95, changeFrequency: "weekly" as const },

    // Location pages - high value
    { path: "/portfolio/vip-escorts-dha-karachi", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/portfolio/escorts-clifton-karachi", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/portfolio/escorts-bahria-town-karachi", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/portfolio/escorts-pechs-karachi", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/portfolio/escorts-gulshan-e-iqbal-karachi", priority: 0.9, changeFrequency: "weekly" as const },

    // Hotel / area pages
    { path: "/escorts-in-al-harmain-hotel", priority: 0.85, changeFrequency: "weekly" as const },
    { path: "/escorts-in-bahadurabad", priority: 0.85, changeFrequency: "weekly" as const },

    // Info pages
    { path: "/about-us", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}