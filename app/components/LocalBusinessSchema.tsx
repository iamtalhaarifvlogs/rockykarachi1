"use client";

import Script from "next/script";

export default function LocalBusinessSchema() {
  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Rocky Escorts Karachi",
          image: "https://rockyescortskarachi.com/herobg.jpg",
          telephone: "+92-370-8540579",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Karachi",
            addressCountry: "PK",
          },
          url: "https://rockyescortskarachi.com",
          priceRange: "$$",
          sameAs: [
            "https://www.facebook.com/share/1CDg2uAznc/"
          ],
        }),
      }}
    />
  );
}