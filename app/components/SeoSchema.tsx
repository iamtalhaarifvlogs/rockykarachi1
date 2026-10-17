export default function SeoSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://rockyescortskarachi.com/#website",
        url: "https://rockyescortskarachi.com",
        name: "Rocky Escorts Karachi",
        description:
          "Premium VIP call girls, verified escorts and elite companions in Karachi. Available 24/7 across DHA, Clifton, Bahria Town, PECHS and major hotels.",
        publisher: {
          "@id": "https://rockyescortskarachi.com/#organization",
        },
        inLanguage: "en-PK",
      },
      {
        "@type": "Organization",
        "@id": "https://rockyescortskarachi.com/#organization",
        name: "Rocky Escorts Karachi",
        url: "https://rockyescortskarachi.com",
        logo: {
          "@type": "ImageObject",
          url: "https://rockyescortskarachi.com/karachi-escorts-vip-call-girls-hero.jpg",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+923708540579",
          contactType: "customer service",
          areaServed: "PK",
          availableLanguage: ["English", "Urdu"],
        },
        sameAs: ["https://www.facebook.com/share/1CDg2uAznc/"],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}