export default function SeoSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Rocky Escorts Karachi",
    url: "https://rockyescortskarachi.com",
    logo: "https://rockyescortskarachi.com/logo.png",
    image: "https://rockyescortskarachi.com/herobg.jpg",
    description:
      "Rocky Escorts Karachi provides verified VIP call girls, model escorts, hotel outcall services, and elite companions across Karachi.",
    telephone: "+92-370-8540579",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Karachi",
      addressRegion: "Sindh",
      addressCountry: "PK",
    },
    areaServed: [
      "DHA Karachi",
      "Clifton Karachi",
      "Bahria Town Karachi",
      "Malir Karachi",
      "Nazimabad Karachi",
      "Gulshan Karachi",
    ],
    sameAs: [
      "https://www.facebook.com/share/1CDg2uAznc/",
    ],
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Karachi Escort Services",
        description:
          "VIP Karachi escorts, model escorts, call girls, hotel outcall services, massage with happy ending, and girlfriend experience.",
        areaServed: "Karachi",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}