import EscortsCollage from "@/app/components/EscortsCollage";
import WhatsAppButton from "@/app/components/WhatsAppButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Karachi Escorts | Call Girls in Karachi 24/7 - 03708540579",
  description: "Premium Karachi Escorts & Call Girls Service. Book verified escorts in DHA, Clifton, Marriott Hotel, PECHS, Nazimabad & all major areas of Karachi. Fast outcall service.",
  keywords: [
    "escorts in Karachi", 
    "Karachi escorts", 
    "call girls in Karachi", 
    "Karachi call girls",
    "escorts in DHA Karachi",
    "escorts in Clifton Karachi",
    "escorts in Marriott hotel Karachi",
    "VIP escorts Karachi",
    "independent escorts Karachi",
    "outcall escorts Karachi",
    "hotel escorts Karachi",
    "DHA escorts",
    "Clifton escorts",
    "Nazimabad escorts",
    "PECHS escorts"
  ],
  openGraph: {
    title: "Karachi Escorts | Call Girls in Karachi - 03708540579",
    description: "High-class Karachi escorts and call girls available 24/7 in DHA, Clifton, Marriott Hotel & across Karachi. Discreet & verified service.",
    images: [{ url: "/hm1.jpg" }],
  },
};

export default function HomePage() {
  return (
    <>
      <WhatsAppButton />

      {/* HERO SECTION */}
      <section
        className="relative py-48 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hm1.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-wide drop-shadow-2xl">
            Karachi Escorts 24/7 Available – Call Now 03708540579
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed mb-8 drop-shadow-xl">
            Premium Karachi escorts, VIP call girls &amp; elite companions available 
            in DHA, Clifton, Bahria Town, Gulshan, Nazimabad and top hotels.
          </h2>

          <p className="text-lg text-yellow-400 font-medium drop-shadow-xl">
            📞 Call / WhatsApp: <span className="text-white font-semibold">03708540579</span>
          </p>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4 max-w-5xl text-gray-300">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-6">
            Karachi Escorts – Verified &amp; Premium Call Girls in Karachi
          </h2>

          <div className="w-full h-72 md:h-96 rounded-2xl overflow-hidden mb-8 border border-yellow-500/20 shadow-lg">
            <img
              src="/hm2.jpg"
              alt="Karachi Escorts - Premium Call Girls Service"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <p className="leading-relaxed text-lg">
            Looking for reliable <strong>escorts in Karachi</strong>? We provide premium, discreet, and verified 
            <strong>Karachi escorts</strong> and call girls for incall and outcall services across the city. 
            Whether you're staying in a hotel or at home, our beautiful companions offer an unforgettable experience with complete privacy.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-gradient-to-b from-gray-950 to-black py-20">
        <div className="container mx-auto px-4 max-w-6xl text-gray-300">
          <h3 className="text-3xl font-semibold text-yellow-400 mb-12 text-center">
            Why Choose Us for Escorts in Karachi?
          </h3>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h4 className="text-xl font-medium text-white mb-4">100% Verified Karachi Escorts</h4>
              <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden border border-yellow-500/20 shadow-lg mb-6">
                <img src="/hm3.jpg" alt="Verified Escorts in Karachi" className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-400 leading-relaxed">
                Every escort is personally verified. We only offer real and professional <strong>Karachi escorts</strong>.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-medium text-white mb-4">Fast Outcall Service in Karachi</h4>
              <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden border border-yellow-500/20 shadow-lg mb-6">
                <img src="/hm4.jpg" alt="Fast Outcall Escorts Karachi" className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-400 leading-relaxed">
                Quick response for <strong>escorts in Karachi</strong> across DHA, Clifton, PECHS, Nazimabad and all major areas.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-medium text-white mb-4">Escorts in Marriott Hotel Karachi</h4>
              <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden border border-yellow-500/20 shadow-lg mb-6">
                <img src="/hm5.jpg" alt="Escorts in Marriott Hotel Karachi" className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-400 leading-relaxed">
                Discreet hotel service for guests staying at <strong>Marriott Hotel Karachi</strong> and other 5-star hotels.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-medium text-white mb-4">24/7 Karachi Escorts Service</h4>
              <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden border border-yellow-500/20 shadow-lg mb-6">
                <img src="/hm6.jpg" alt="24/7 Escorts in Karachi" className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-400 leading-relaxed">
                Need <strong>Karachi escorts</strong> at any time? We are available 24 hours a day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES & AREAS */}
      <section className="bg-gradient-to-b from-black via-gray-900 to-black py-24">
        <div className="container mx-auto px-4 max-w-6xl text-gray-300">
          <h2 className="text-4xl font-light text-white mb-10 text-center">
            Escorts in Karachi – Available in All Major Areas
          </h2>

          <div className="space-y-16">
            <div>
              <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Escorts in DHA Karachi</h3>
              <p className="leading-relaxed">Premium <strong>escorts in DHA Karachi</strong> offering luxury companionship and discreet service.</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Escorts in Clifton Karachi</h3>
              <p className="leading-relaxed">Beautiful and sophisticated <strong>Clifton Karachi escorts</strong> near Seaview and Boat Basin.</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Escorts in Marriott Hotel Karachi</h3>
              <p className="leading-relaxed">Professional <strong>escorts in Marriott Hotel Karachi</strong> with fast and discreet hotel service.</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Escorts in Nazimabad &amp; PECHS</h3>
              <p className="leading-relaxed">Affordable and attractive escorts available in Nazimabad, North Nazimabad, and PECHS Karachi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
     

      {/* FINAL CTA */}
      <section className="bg-gradient-to-br from-black to-gray-950 py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light text-white mb-6">
            Ready to Book Karachi Escorts?
          </h2>
          <p className="text-2xl text-yellow-400 mb-8">
            Call or WhatsApp Now – 03708540579
          </p>
          <a 
            href="tel:03708540579"
            className="inline-block bg-yellow-400 text-black font-bold text-2xl px-16 py-6 rounded-full hover:bg-white transition-all"
          >
            CALL 03708540579
          </a>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Rocky Escorts Karachi",
            "description": "Premium Karachi Escorts and Call Girls Service providing verified companions in DHA, Clifton, Marriott Hotel and across Karachi.",
            "url": "https://rockyescortskarachi.com",
            "telephone": "+923708540579",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Karachi",
              "addressCountry": "PK"
            },
            "offers": {
              "@type": "Offer",
              "description": "Escorts in Karachi, Call Girls in Karachi, Hotel Escorts Karachi"
            }
          })
        }}
      />
    </>
  );
}