import { MetadataRoute } from "next";

const baseUrl = "https://rockykarachi1.vercel.app";
// Domain lagne ke baad:
// const baseUrl = "https://rockyescortskarachi.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/dashboard/", "/private/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}