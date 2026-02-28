import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Premium Escorts in Bahria Town Karachi | Elite VIP Female Companions",
  description:
    "Discover professional and discreet premium escorts in Bahria Town Karachi. Explore our elite VIP escort gallery and book the top-rated female companions in Karachi.",
  keywords: [
    "Escorts in Bahria Town Karachi",
    "VIP female escorts Karachi",
    "Luxury escort services Karachi",
    "Bahria Town escort agency",
    "Premium escorts Karachi",
  ],
};

export default function Page() {
  const images = ["/nm5.jpg", "/nm6.jpg", "/nm7.jpg", "/nm8.jpg", "/nm9.jpg"];

  return (
    <main className="bg-[#FFECE8] text-[#222222]">

      {/* ================= HERO SECTION ================= */}
      <section
        className="relative w-full h-[550px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/herobg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Premium Escorts in Bahria Town Karachi – Call Now 03708540579
          </h1>

          <h2 className="mt-6 text-xl md:text-2xl text-white font-medium">
            Discreet • Luxury • Verified VIP Female Companions
          </h2>

          <p className="mt-6 text-white text-lg max-w-2xl mx-auto">
            Explore elite companionship experiences designed for privacy,
            sophistication, and premium service standards in Bahria Town Karachi.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="bg-[#D6336C] text-white px-8 py-3 rounded-md shadow-lg hover:bg-[#b92b5a] transition"
            >
              Book Confidentially
            </Link>
          </div>
        </div>
      </section>

      {/* ================= INTRODUCTION ================= */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-semibold mb-6 text-[#D6336C]">
          Elite Escorts in Bahria Town Karachi – VIP Female Companions
        </h2>

        <div className="space-y-6 text-lg leading-relaxed text-[#333]">
          <p>
            Welcome to the most trusted escort agency in Bahria Town Karachi.
            We specialize in premium VIP female escorts, exclusive companionship,
            and high-class professional escort services tailored for discerning clients.
          </p>

          <p>
            Our portfolio includes top-rated Bahria Town escorts, luxury companions
            for events in Karachi, and elite female escorts near you who provide
            sophisticated, personalized experiences.
          </p>

          <p>
            Clients frequently search for Bahria Town Karachi top escorts,
            luxury VIP escorts, professional female companions for hire,
            and high-end VIP escorts in Karachi — all delivered with discretion,
            privacy, and safety.
          </p>
        </div>
      </section>

      {/* ================= SERVICES OVERVIEW ================= */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Why Choose Our Escorts in Bahria Town Karachi
          </h2>

          <ul className="grid md:grid-cols-2 gap-6 text-lg list-disc list-inside text-[#333]">
            <li>Professional and highly-rated female escorts</li>
            <li>Luxury VIP escorts for dinners and private events</li>
            <li>Discreet and safe companionship</li>
            <li>Personalized experiences tailored to your preferences</li>
            <li>Easy and confidential booking process</li>
            <li>Elite companions for VIP clients</li>
            <li>High-class and sophisticated companionship</li>
            <li>Services for parties and corporate gatherings</li>
            <li>Trusted Bahria Town escorts with proven satisfaction</li>
            <li>Luxury and elegance with every booking</li>
          </ul>
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="py-16 px-6 bg-[#FFF0F2]">
        <h2 className="text-3xl font-semibold text-center mb-10 text-[#D6336C]">
          Bahria Town Escorts Gallery – Luxury Visual Portfolio
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={img}
                alt={`Premium VIP Female Escort ${idx + 1} in Bahria Town Karachi`}
                className="object-cover w-full h-[320px] hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ================= EXPERIENCE SECTION ================= */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-[#D6336C]">
          Experience Premium Escort Services in Bahria Town Karachi
        </h2>

        <div className="space-y-6 text-lg leading-relaxed text-[#333]">
          <p>
            Booking a premium escort in Bahria Town Karachi ensures a luxurious,
            safe, and unforgettable experience. Our companions specialize in
            elite female companionship and VIP escort services designed for
            high-end clientele.
          </p>

          <p>
            We cover popular search queries including VIP female escorts Karachi,
            exclusive companionship for high-end clients, luxury female escorts
            for events, discreet private escort services, and premium companions near you.
          </p>

          <p>
            Every service prioritizes professionalism, confidentiality, safety,
            and client satisfaction.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#D6336C] text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Book Your Elite Escort in Bahria Town Karachi Today
        </h2>

        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Contact us now to reserve your VIP escort and experience discreet,
          luxurious companionship tailored to your expectations.
        </p>

        <Link
          href="/contact"
          className="bg-white text-[#D6336C] font-semibold px-8 py-3 rounded-md shadow-md hover:bg-gray-100 transition"
        >
          Contact Us
        </Link>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="text-center py-6 text-[#555] bg-[#FFECE8]">
        © {new Date().getFullYear()} Bahria Town Escorts Karachi. All Rights Reserved.
      </footer>
    </main>
  );
}