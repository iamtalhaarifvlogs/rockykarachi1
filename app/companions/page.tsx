import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Premium Escorts in Karachi | VIP Female Companions | Rockyescortskarachi",
  description:
    "Rockyescortskarachi provides premium, discreet and VIP escort services across Karachi including Bahria Town, DHA, Clifton and more. Explore elite female companionship experiences with complete privacy.",
};

export default function Page() {
  const images = ["/nm5.jpg", "/nm6.jpg", "/nm7.jpg", "/nm8.jpg", "/nm9.jpg"];

  return (
    <main className="bg-[#FFECE8] text-[#222222]">

      {/* ================= HERO ================= */}
      <section
        className="relative w-full h-[600px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/herobg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Premium Escorts in Karachi – VIP Female Companions
          </h1>

          <h2 className="mt-6 text-xl md:text-2xl text-white font-medium">
            Discreet. Elegant. Private Experiences Across Karachi.
          </h2>

          <p className="mt-6 text-white text-lg max-w-2xl mx-auto">
            Rockyescortskarachi delivers professional and confidential VIP escort
            services designed for clients seeking refined companionship in Karachi.
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

      {/* ================= AUTHORITY INTRO ================= */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-semibold mb-6 text-[#D6336C]">
          About Rockyescortskarachi
        </h2>

        <div className="space-y-6 text-lg leading-relaxed text-[#333]">
          <p>
            Rockyescortskarachi is a premium escort agency offering elite female
            companionship services throughout Karachi. Our focus is on privacy,
            professionalism, safety, and exceptional client experience.
          </p>

          <p>
            We provide VIP companions for private meetings, exclusive events,
            luxury dinners, and personalized social engagements.
          </p>

          <p>
            Every experience is tailored discreetly to meet individual expectations
            while maintaining the highest standards of confidentiality.
          </p>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10 text-center">
            Our Premium Escort Services in Karachi
          </h2>

          <div className="grid md:grid-cols-2 gap-10 text-lg text-[#333]">
            <div>
              <h3 className="font-semibold text-xl mb-3">VIP Escort Services</h3>
              <p>
                High-end companionship tailored for discerning clients seeking
                elegance, refinement, and discretion.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-3">Private Event Companions</h3>
              <p>
                Professional female companions for corporate gatherings,
                exclusive parties, and social functions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-3">Luxury Dinner Dates</h3>
              <p>
                Sophisticated companionship for upscale dining and
                personalized engagements.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-3">Discreet Private Bookings</h3>
              <p>
                Confidential arrangements ensuring safety, comfort, and privacy
                for every client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICE AREAS ================= */}
      <section className="py-16 px-6 bg-[#FFF0F2] text-center">
        <h2 className="text-3xl font-semibold mb-6 text-[#D6336C]">
          Areas We Cover in Karachi
        </h2>

        <p className="text-lg max-w-3xl mx-auto leading-relaxed text-[#333]">
          Our services extend across major residential and commercial zones
          including Bahria Town, DHA, Clifton, Gulshan, PECHS and surrounding
          premium locations within Karachi.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-6 text-[#D6336C] font-medium">
          <Link href="/bahria-town" className="hover:underline">Bahria Town</Link>
          <Link href="/dha" className="hover:underline">DHA</Link>
          <Link href="/clifton" className="hover:underline">Clifton</Link>
          <Link href="/gulshan" className="hover:underline">Gulshan</Link>
          <Link href="/pechs" className="hover:underline">PECHS</Link>
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Exclusive Escort Gallery
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={img}
                alt={`VIP Female Companion Karachi ${idx + 1}`}
                className="object-cover w-full h-[320px] hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#D6336C] text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Book a Premium Escort in Karachi Today
        </h2>

        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Contact Rockyescortskarachi for confidential VIP escort services
          designed around discretion and elegance.
        </p>

        <Link
          href="/contact"
          className="bg-white text-[#D6336C] font-semibold px-8 py-3 rounded-md shadow-md hover:bg-gray-100 transition"
        >
          Contact Us
        </Link>
      </section>

    </main>
  );
}