export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://rockykarachi1.vercel.app/#business",
    name: "Rocky Escorts Karachi",
    alternateName: "Rocky Escorts",
    description:
      "Premium VIP call girls, verified escorts and elite companions in Karachi. Available 24/7 in DHA, Clifton, Bahria Town, PECHS and major hotels.",
    image: "https://rockykarachi1.vercel.app/karachi-escorts-vip-call-girls-hero.jpg",
    url: "https://rockykarachi1.vercel.app",
    telephone: "+923708540579",
    priceRange: "$$-$$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Karachi",
      addressRegion: "Sindh",
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "24.8607",
      longitude: "67.0011",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: [
      { "@type": "Place", name: "DHA Karachi" },
      { "@type": "Place", name: "Clifton Karachi" },
      { "@type": "Place", name: "Bahria Town Karachi" },
      { "@type": "Place", name: "PECHS Karachi" },
      { "@type": "Place", name: "Gulshan-e-Iqbal Karachi" },
      { "@type": "Place", name: "Bahadurabad Karachi" },
    ],
    sameAs: ["https://www.facebook.com/share/1CDg2uAznc/"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}