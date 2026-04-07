import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Premium Escorts in Gulshan-e-Iqbal Karachi | Elite VIP Female Companions",
  description:
    "Discover professional and discreet premium escorts in Gulshan-e-Iqbal Karachi. Explore our elite VIP escort gallery and book top-rated female companions for luxury experiences in Karachi. Call Now 03708540579",
  keywords: [
    "Gulshan-e-Iqbal Karachi escorts",
    "premium escorts Gulshan-e-Iqbal",
    "VIP female escorts Gulshan-e-Iqbal Karachi",
    "elite companions Gulshan Karachi",
    "luxury escort services Gulshan-e-Iqbal",
    "top rated Gulshan-e-Iqbal escorts",
    "Gulshan-e-Iqbal escorts near me",
    "high class female escorts Karachi Gulshan",
    "professional escort agency Gulshan-e-Iqbal",
    "exclusive VIP companions Gulshan Karachi",
  ],
  openGraph: {
    title: "Premium Escorts in Gulshan-e-Iqbal Karachi | Elite VIP Female Companions",
    description:
      "Book elite VIP female companions and premium escorts in Gulshan-e-Iqbal Karachi. Discreet, high-class luxury services. Call Now 03708540579",
    images: "",
    type: "website",
  },
  alternates: {
    canonical: "/gulshan-e-iqbal-karachi-escorts",
  },
};

export default function GulshanEIqbalEscortsPage() {
  const images = ["/mp1.jpg", "/mp2.jpg", "/mp3.jpg", "/mp4.jpg", "/mp5.jpg", "/mp6.jpg", "/mp7.jpg", "/mp8.jpg"];

  return (
    <main className="bg- text-[#222222]">
      {/* Hero Section */}
      <section
        className="w-full h- relative bg-cover bg-center"
        style={{ backgroundImage: "url('/herobg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/20 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Premium <strong>Escorts in Gulshan-e-Iqbal Karachi</strong> – Call Now 03708540579
            </h1>

            <p className="mt-6 text-xl sm:text-2xl text-white font-medium">
              Scroll down to discover our exclusive elite VIP gallery, top-rated companions & premium services in Gulshan-e-Iqbal
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h2 className="text-4xl font-semibold mb-8 text- ">
          Elite Escorts in Gulshan-e-Iqbal Karachi – VIP Female Companions
        </h2>

        {/* Image below first H2 */}
        <div className="mb-10 flex justify-center">
          <img
            src="/mp1.jpg"
            alt="Elite VIP Escorts in Gulshan-e-Iqbal Karachi"
            className="rounded-xl shadow-lg max-w-full h-auto"
            loading="lazy"
          />
        </div>

        <p className="text-lg leading-relaxed text-[#333333] mb-6">
          Welcome to the most trusted <strong>escort agency in Gulshan-e-Iqbal Karachi</strong>. We specialize in
          providing <strong>premium VIP female escorts</strong>, <strong>exclusive companionship</strong>, and
          <strong>high-class professional escort services</strong>.
        </p>
        <p className="text-lg leading-relaxed text-[#333333] mb-6">
          Our <strong>Gulshan-e-Iqbal escorts</strong> offer personalized, professional, and discreet experiences for
          clients seeking <strong>high-class female companions</strong>, <strong>VIP escort services</strong>,
          and <strong>luxury companionship in Karachi</strong>.
        </p>
      </section>

      {/* Photo Gallery */}
      <section className="bg-white py-12 px-6">
        <h3 className="text-3xl text-center font-semibold mb-8 text- ">
          Gulshan-e-Iqbal <strong>Escorts Gallery</strong> – Luxury Visual Portfolio
        </h3>

        {/* Image below Gallery H3 */}
        <div className="mb-10 flex justify-center">
          <img
            src="/mp2.jpg"
            alt="Gulshan-e-Iqbal Escorts Gallery - Premium VIP Companions"
            className="rounded-xl shadow-lg max-w-full h-auto"
            loading="lazy"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {images.map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={img}
                alt={`Gulshan-e-Iqbal Escort ${idx + 1} - Premium VIP Female Companion Karachi`}
                className="object-cover w-full h- transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-4xl mx-auto px-4 py-12 text-[#222222]">
        <h2 className="text-3xl font-semibold mb-8">
          Why Choose Our <strong>Escorts in Gulshan-e-Iqbal Karachi</strong>
        </h2>

        {/* Image below this H2 */}
        <div className="mb-10 flex justify-center">
          <img
            src="/mp3.jpg"
            alt="Why Choose Gulshan-e-Iqbal Escorts"
            className="rounded-xl shadow-lg max-w-full h-auto"
            loading="lazy"
          />
        </div>

        <ul className="list-disc list-inside mt-4 space-y-3 text-lg">
          <li>Professional and highly-rated female escorts in <strong>Gulshan-e-Iqbal Karachi</strong></li>
          <li>Luxury VIP escorts for private dinners and events</li>
          <li>Discreet and safe companionship for elite clients in Karachi</li>
          <li>Personalized experiences tailored to your lifestyle and preferences</li>
          <li>Easy and confidential booking of top female escorts in Gulshan-e-Iqbal</li>
          <li>Exclusive access to elite companions for VIP clients</li>
          <li>High-class and sophisticated companionship for memorable experiences</li>
          <li>Professional escort services for parties, corporate events, and private meetings</li>
        </ul>
      </section>

      {/* Benefits Section */}
      <section className="bg- py-12 px-6 text-center">
        <h3 className="text-3xl font-semibold mb-8 text- ">
          Experience Premium Escort Services in <strong>Gulshan-e-Iqbal Karachi</strong>
        </h3>

        {/* Image below this H3 */}
        <div className="mb-10 flex justify-center">
          <img
            src="/mp4.jpg"
            alt="Premium Escort Services in Gulshan-e-Iqbal Karachi"
            className="rounded-xl shadow-lg max-w-full h-auto"
            loading="lazy"
          />
        </div>

        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          Booking a <strong>premium escort in Gulshan-e-Iqbal Karachi</strong> ensures a luxurious, safe, and unforgettable experience.
          Our companions specialize in <strong>VIP escort services in Karachi</strong>, <strong>elite female companionship</strong>,
          and <strong>high-class private escorts</strong>.
        </p>
      </section>

      {/* Final CTA */}
      <section className="bg- text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Book Your Elite Escort in <strong>Gulshan-e-Iqbal Karachi</strong> Today
        </h2>

        {/* Image below final H2 */}
        <div className="mb-8 flex justify-center">
          <img
            src="/mp8.jpg"
            alt="Book Elite Escorts in Gulshan-e-Iqbal Karachi"
            className="rounded-xl shadow-lg max-w-full h-auto"
            loading="lazy"
          />
        </div>

        <p className="text-lg mb-6">
          Contact us now to reserve your <strong>VIP escort in Gulshan-e-Iqbal Karachi</strong>.
        </p>

        <Link
          href="/contact"
          className="bg-white text- font-semibold px-8 py-3 rounded-md shadow-md hover:bg-gray-100 transition inline-block"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
}