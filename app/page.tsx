import EscortsCollage from "@/app/components/EscortsCollage";
import WhatsAppButton from "@/app/components/WhatsAppButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Karachi Escorts | Best Call Girls in Karachi 24/7 VIP Service - 03708540579",
  description:
    "Premium Karachi Escorts & Call Girls available 24/7. Book verified VIP escorts in DHA, Clifton, Marriott Hotel, PECHS, Nazimabad, Bahria Town & all major areas. Discreet outcall & incall service with real photos.",
  keywords: [
    // Short-tail
    "Karachi escorts",
    "escorts in Karachi",
    "call girls Karachi",
    "Karachi call girls",
    "VIP escorts Karachi",
    "escorts Karachi",
    "independent escorts Karachi",
    "hotel escorts Karachi",
    "outcall escorts Karachi",
    "DHA escorts",
    "Clifton escorts",
    "Nazimabad escorts",
    "PECHS escorts",
    // Medium-tail
    "DHA escorts Karachi",
    "Clifton escorts Karachi",
    "Marriott Hotel escorts Karachi",
    "Bahria Town escorts",
    "Gulshan escorts Karachi",
    // Long-tail
    "best VIP escorts in DHA Karachi 24/7",
    "discreet call girls in Clifton Karachi",
    "verified escorts near Marriott Hotel Karachi",
    "premium outcall service PECHS Nazimabad",
    "luxury companions Bahria Town Karachi",
    "affordable independent escorts North Nazimabad",
    "24 hour hotel escorts Karachi 5 star",
    "elite private escorts service Karachi",
    "fast response call girls DHA Phase",
    "beautiful escorts available now in Karachi",
    "high class escorts near Seaview Clifton",
    "professional companions Marriott Hotel outcall",
    "real photos verified escorts Karachi",
    "private incall outcall Karachi night",
  ],
  openGraph: {
    title: "Karachi Escorts | Best Call Girls in Karachi 24/7 VIP - 03708540579",
    description:
      "High-class verified Karachi escorts & call girls available 24/7 in DHA, Clifton, Marriott Hotel, PECHS & across Karachi. Discreet, premium & fast outcall service.",
    images: [{ url: "/hm1.jpg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karachi Escorts | Best Call Girls 24/7 - 03708540579",
    description:
      "Premium verified escorts in DHA, Clifton, Marriott Hotel & all Karachi areas. Call now for discreet service.",
    images: ["/hm1.jpg"],
  },
};

export default function HomePage() {
  return (
    <>
      <WhatsAppButton />

      {/* Custom Keyframes for Mesmerizing Effects */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes float {
              0%, 100% { transform: translateY(0) translateX(0); }
              33% { transform: translateY(-18px) translateX(8px); }
              66% { transform: translateY(10px) translateX(-6px); }
            }
            @keyframes float-slow {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-12px); }
            }
            @keyframes glow-pulse {
              0%, 100% { box-shadow: 0 0 8px rgba(250, 204, 21, 0.35), 0 0 20px rgba(250, 204, 21, 0.15); }
              50% { box-shadow: 0 0 22px rgba(250, 204, 21, 0.65), 0 0 45px rgba(250, 204, 21, 0.3); }
            }
            @keyframes text-glow {
              0%, 100% { text-shadow: 0 0 8px rgba(250, 204, 21, 0.4), 0 0 20px rgba(250, 204, 21, 0.2); }
              50% { text-shadow: 0 0 16px rgba(250, 204, 21, 0.7), 0 0 35px rgba(250, 204, 21, 0.35); }
            }
            @keyframes gradient-shift {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
            @keyframes shimmer {
              0% { background-position: -200% 0; }
              100% { background-position: 200% 0; }
            }
            @keyframes border-glow {
              0%, 100% { border-color: rgba(250, 204, 21, 0.25); }
              50% { border-color: rgba(250, 204, 21, 0.55); }
            }
            .animate-float { animation: float 7s ease-in-out infinite; }
            .animate-float-slow { animation: float-slow 5s ease-in-out infinite; }
            .animate-glow-pulse { animation: glow-pulse 2.8s ease-in-out infinite; }
            .animate-text-glow { animation: text-glow 3s ease-in-out infinite; }
            .animate-gradient { background-size: 200% 200%; animation: gradient-shift 8s ease infinite; }
            .animate-shimmer {
              background: linear-gradient(90deg, transparent, rgba(250, 204, 21, 0.15), transparent);
              background-size: 200% 100%;
              animation: shimmer 3.5s infinite;
            }
            .animate-border-glow { animation: border-glow 3s ease-in-out infinite; }
          `,
        }}
      />

      {/* ==================== HERO SECTION ==================== */}
      <section
        className="relative py-44 md:py-56 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: "url('/hm1.jpg')" }}
      >
        {/* Animated multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/10 via-transparent to-yellow-900/10 animate-gradient opacity-60" />

        {/* Floating glowing orbs */}
        <div className="absolute top-20 left-[10%] w-40 h-40 md:w-64 md:h-64 rounded-full bg-yellow-400/10 blur-3xl animate-float pointer-events-none" />
        <div className="absolute bottom-16 right-[12%] w-32 h-32 md:w-52 md:h-52 rounded-full bg-yellow-500/15 blur-3xl animate-float-slow pointer-events-none" style={{ animationDelay: "1.2s" }} />
        <div className="absolute top-1/3 right-[25%] w-24 h-24 rounded-full bg-amber-300/10 blur-2xl animate-float pointer-events-none" style={{ animationDelay: "2.4s" }} />
        <div className="absolute bottom-1/4 left-[20%] w-28 h-28 rounded-full bg-yellow-400/8 blur-2xl animate-float-slow pointer-events-none" style={{ animationDelay: "0.8s" }} />

        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-wide drop-shadow-2xl animate-text-glow">
            Karachi Escorts 24/7 Available
            <span className="block mt-2 text-yellow-400 font-medium">
              Call Now 03708540579
            </span>
          </h1>

          <h2 className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-10 drop-shadow-xl">
            Premium Karachi escorts, VIP call girls &amp; elite companions available
            in DHA, Clifton, Bahria Town, Gulshan, Nazimabad and top hotels.
          </h2>

          <div className="inline-block">
            <p className="text-xl md:text-2xl text-yellow-400 font-medium drop-shadow-xl mb-8 animate-text-glow">
              📞 Call / WhatsApp:{" "}
              <span className="text-white font-semibold tracking-wider">
                03708540579
              </span>
            </p>

            <a
              href="tel:03708540579"
              className="inline-flex items-center gap-3 bg-yellow-400 text-black font-bold text-xl md:text-2xl px-12 py-5 rounded-full 
                         hover:bg-white hover:scale-105 transition-all duration-500 
                         animate-glow-pulse shadow-[0_0_25px_rgba(250,204,21,0.4)]
                         hover:shadow-[0_0_40px_rgba(250,204,21,0.7)]"
            >
              <span>CALL NOW</span>
              <span className="text-2xl">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ==================== INTRO SECTION ==================== */}
      <section className="bg-black py-20 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-yellow-500/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 max-w-5xl text-gray-300 relative">
          <h2 className="text-3xl md:text-4xl font-semibold text-yellow-400 mb-8 text-center animate-text-glow">
            Karachi Escorts – Verified &amp; Premium Call Girls in Karachi
          </h2>

          <div className="group relative w-full h-72 md:h-96 rounded-2xl overflow-hidden mb-10 border border-yellow-500/20 shadow-lg hover:border-yellow-400/50 transition-all duration-700 animate-border-glow">
            <img
              src="/hm2.jpg"
              alt="Premium Karachi Escorts - Verified Call Girls Service in DHA Clifton"
              className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>

          <p className="leading-relaxed text-lg md:text-xl text-center max-w-3xl mx-auto">
            Looking for reliable <strong className="text-yellow-400">escorts in Karachi</strong>? We provide premium, discreet, and verified{" "}
            <strong className="text-yellow-400">Karachi escorts</strong> and call girls for incall and outcall services across the city.
            Whether you&apos;re staying in a hotel or at home, our beautiful companions offer an unforgettable experience with complete privacy.
          </p>
        </div>
      </section>

     
      {/* ==================== WHY CHOOSE US ==================== */}
      <section className="bg-gradient-to-b from-gray-950 to-black py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-900/5 via-transparent to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 max-w-6xl text-gray-300 relative">
          <h3 className="text-3xl md:text-4xl font-semibold text-yellow-400 mb-16 text-center animate-text-glow">
            Why Choose Us for Escorts in Karachi?
          </h3>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
            {/* Card 1 */}
            <div className="group relative bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20 hover:border-yellow-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(250,204,21,0.25)]">
              <h4 className="text-xl font-medium text-white mb-5 group-hover:text-yellow-400 transition-colors duration-300">
                100% Verified Karachi Escorts
              </h4>
              <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden border border-yellow-500/20 mb-6">
                <img
                  src="/hm3.jpg"
                  alt="Verified Escorts in Karachi - Real Photos"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <p className="text-gray-400 leading-relaxed">
                Every escort is personally verified. We only offer real and professional{" "}
                <strong className="text-yellow-400/90">Karachi escorts</strong>.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20 hover:border-yellow-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(250,204,21,0.25)]">
              <h4 className="text-xl font-medium text-white mb-5 group-hover:text-yellow-400 transition-colors duration-300">
                Fast Outcall Service in Karachi
              </h4>
              <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden border border-yellow-500/20 mb-6">
                <img
                  src="/hm4.jpg"
                  alt="Fast Outcall Escorts Karachi - DHA Clifton PECHS"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <p className="text-gray-400 leading-relaxed">
                Quick response for <strong className="text-yellow-400/90">escorts in Karachi</strong> across DHA, Clifton, PECHS, Nazimabad and all major areas.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20 hover:border-yellow-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(250,204,21,0.25)]">
              <h4 className="text-xl font-medium text-white mb-5 group-hover:text-yellow-400 transition-colors duration-300">
                Escorts in Marriott Hotel Karachi
              </h4>
              <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden border border-yellow-500/20 mb-6">
                <img
                  src="/hm5.jpg"
                  alt="Escorts in Marriott Hotel Karachi - Discreet 5 Star Service"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <p className="text-gray-400 leading-relaxed">
                Discreet hotel service for guests staying at{" "}
                <strong className="text-yellow-400/90">Marriott Hotel Karachi</strong> and other 5-star hotels.
              </p>
            </div>

            {/* Card 4 */}
            <div className="group relative bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20 hover:border-yellow-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(250,204,21,0.25)]">
              <h4 className="text-xl font-medium text-white mb-5 group-hover:text-yellow-400 transition-colors duration-300">
                24/7 Karachi Escorts Service
              </h4>
              <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden border border-yellow-500/20 mb-6">
                <img
                  src="/hm6.jpg"
                  alt="24/7 Escorts in Karachi - Always Available"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <p className="text-gray-400 leading-relaxed">
                Need <strong className="text-yellow-400/90">Karachi escorts</strong> at any time? We are available 24 hours a day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SERVICES & AREAS ==================== */}
      <section className="bg-gradient-to-b from-black via-gray-900 to-black py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 max-w-6xl text-gray-300 relative">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-16 text-center">
            Escorts in Karachi – Available in All Major Areas
          </h2>

          <div className="grid sm:grid-cols-2 gap-8">
            {[
              {
                title: "Escorts in DHA Karachi",
                desc: "Premium escorts in DHA Karachi offering luxury companionship and discreet service.",
              },
              {
                title: "Escorts in Clifton Karachi",
                desc: "Beautiful and sophisticated Clifton Karachi escorts near Seaview and Boat Basin.",
              },
              {
                title: "Escorts in Marriott Hotel Karachi",
                desc: "Professional escorts in Marriott Hotel Karachi with fast and discreet hotel service.",
              },
              {
                title: "Escorts in Nazimabad & PECHS",
                desc: "Affordable and attractive escorts available in Nazimabad, North Nazimabad, and PECHS Karachi.",
              },
            ].map((area, i) => (
              <div
                key={i}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/80 border border-yellow-500/15 
                           hover:border-yellow-400/40 transition-all duration-500 hover:-translate-y-1 
                           hover:shadow-[0_0_30px_rgba(250,204,21,0.15)] overflow-hidden"
              >
                <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <h3 className="text-2xl font-semibold text-yellow-400 mb-4 group-hover:text-yellow-300 transition-colors">
                  {area.title}
                </h3>
                <p className="leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="bg-gradient-to-br from-black via-gray-950 to-black py-24 text-center relative overflow-hidden">
        {/* Decorative glowing rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-yellow-500/10 rounded-full animate-float-slow pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-yellow-500/5 rounded-full animate-float pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 animate-text-glow">
            Ready to Book Karachi Escorts?
          </h2>
          <p className="text-2xl md:text-3xl text-yellow-400 mb-12 font-medium">
            Call or WhatsApp Now – 03708540579
          </p>
          <a
            href="tel:03708540579"
            className="inline-block bg-yellow-400 text-black font-bold text-2xl md:text-3xl px-16 py-6 rounded-full 
                       hover:bg-white hover:scale-110 transition-all duration-500 
                       animate-glow-pulse shadow-[0_0_30px_rgba(250,204,21,0.5)]
                       hover:shadow-[0_0_50px_rgba(250,204,21,0.8)]"
          >
            CALL 03708540579
          </a>
        </div>
      </section>

      {/* JSON-LD Structured Data - Enhanced */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Rocky Escorts Karachi",
            description:
              "Premium Karachi Escorts and Call Girls Service providing verified companions in DHA, Clifton, Marriott Hotel and across Karachi. Available 24/7 for incall and outcall.",
            url: "https://rockyescortskarachi.com",
            telephone: "+923708540579",
            image: "https://rockyescortskarachi.com/hm1.jpg",
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
            priceRange: "$$",
            areaServed: [
              "DHA Karachi",
              "Clifton",
              "Marriott Hotel Karachi",
              "PECHS",
              "Nazimabad",
              "Bahria Town",
              "Gulshan",
            ],
            makesOffer: {
              "@type": "Offer",
              description:
                "Escorts in Karachi, Call Girls in Karachi, Hotel Escorts Karachi, VIP Outcall Service",
            },
          }),
        }}
      />
    </>
  );
}