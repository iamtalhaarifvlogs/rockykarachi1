import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "VIP Escorts in DHA Karachi | Elite Luxury Companions in DHA Phase 5 & 6",
  description:
    "Premium VIP companions available in DHA Karachi. Verified, elegant, and discreet luxury models for private evenings, hotel visits, and elite social gatherings.",
  keywords:
    "VIP Escorts DHA Karachi, DHA Karachi Escorts, Elite Escorts DHA Phase 5, Luxury Escorts Phase 6 Karachi, High Profile Companions DHA, Karachi VIP Companions",
};

export default function VipEscortsDhaKarachiPage() {
  const models = [
    "/nm1.jpg",
    "/model1.jpg",
    "/model2.jpg",
    "/model3.jpg",
  ];

  return (
    <main className="bg-[#FFECE8] text-[#222222]">

      {/* HERO SECTION */}
      <section
        className="relative h-[550px] bg-cover bg-center"
        style={{ backgroundImage: "url('/herobg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40 flex items-center justify-center px-6">
          <div className="text-center max-w-4xl">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              VIP Escorts in DHA Karachi - Call Now For The Best Experience 03708540579
            </h1>
            <p className="text-white text-lg md:text-xl opacity-90">
              Exclusive luxury companions in DHA Phase 5 & Phase 6 for refined,
              private, and elegant experiences.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-semibold text-[#D6336C] mb-6">
          Elite Luxury Companions in DHA Karachi
        </h2>

        <p className="text-lg leading-relaxed text-[#333333] mb-6">
          DHA Karachi represents prestige, security, and refined living.
          Our VIP companions reflect that same sophistication — offering
          elegant presence for private evenings, upscale dinners, and
          discreet social engagements across Phase 5, Phase 6, and nearby
          premium locations.
        </p>

        <p className="text-lg leading-relaxed text-[#333333]">
          Whether you are visiting Karachi for business or residing in DHA,
          our curated selection ensures professionalism, beauty, and complete discretion.
        </p>
      </section>

      {/* MODELS GRID */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-semibold text-center text-[#D6336C] mb-12">
          Featured VIP Models – DHA Karachi
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {models.map((img, index) => (
            <div
              key={index}
              className="bg-[#FFF0F2] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-[320px] overflow-hidden">
                <img
                  src={img}
                  alt={`VIP Companion DHA Karachi ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">
                  Elite Model {index + 1}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Sophisticated • Discreet • Luxury Experience
                </p>

                <Link
                  href="/contact"
                  className="block w-full bg-[#D6336C] hover:bg-[#b82b5c] text-white py-3 rounded-md font-medium transition"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-6 text-center text-[#D6336C]">
          Why DHA Clients Choose Our VIP Services
        </h2>

        <div className="text-lg leading-relaxed text-[#333333] space-y-6">
          <p>
            DHA Karachi is known for its exclusivity and high standards.
            Our services are designed to complement that lifestyle —
            offering private companionship tailored for refined individuals
            who value elegance and confidentiality.
          </p>

          <p>
            From fine dining experiences in upscale restaurants to
            private hotel evenings and personal engagements,
            our companions maintain professionalism at every level.
          </p>

          <ul className="list-disc list-inside space-y-3 mt-6">
            <li>Discreet bookings with complete privacy</li>
            <li>Available across DHA Phase 4, 5 & 6</li>
            <li>Professional, verified luxury companions</li>
            <li>Flexible scheduling for evenings or extended time</li>
            <li>High-end, refined presence for elite settings</li>
          </ul>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-[#D6336C] text-white py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Experience Elite Luxury in DHA Karachi
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Connect today for a private and refined experience with our VIP companions.
        </p>

        <Link
          href="/contact"
          className="bg-white text-[#D6336C] px-10 py-4 rounded-full font-semibold shadow-md hover:bg-gray-100 transition"
        >
          Contact Now
        </Link>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-10 text-center text-[#555]">
        <p>
          Explore More:{" "}
          <Link
            href="/portfolio/escorts-clifton-karachi"
            className="text-[#D6336C] hover:underline mx-2"
          >
            Clifton Escorts
          </Link>
          •
          <Link
            href="/portfolio/escorts-bahria-town-karachi"
            className="text-[#D6336C] hover:underline mx-2"
          >
            Bahria Town Escorts
          </Link>
          •
          <Link
            href="/portfolio/escorts-pechs-karachi"
            className="text-[#D6336C] hover:underline mx-2"
          >
            PECHS Escorts
          </Link>
        </p>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-[#777] bg-[#FFF0F2]">
        © {new Date().getFullYear()} Rocky Escorts Karachi. All Rights Reserved.
      </footer>
    </main>
  );
}