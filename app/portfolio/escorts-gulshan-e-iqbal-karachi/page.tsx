import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Escorts in Gulshan-e-Iqbal Karachi | Elite VIP Female Companions",
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
    images: ["/herobg.jpg"],
    type: "website",
  },
  alternates: {
    canonical: "/gulshan-e-iqbal-karachi-escorts",
  },
};

export default function GulshanEIqbalEscortsPage() {
  const images = [
    "/mp1.jpg",
    "/mp2.jpg",
    "/mp3.jpg",
    "/mp4.jpg",
    "/mp5.jpg",
    "/mp6.jpg",
    "/mp7.jpg",
    "/mp8.jpg",
  ];

  return (
    <main className="bg-white text-black">
      {/* HERO SECTION */}
      <section
        className="relative w-full min-h-[75vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/herobg.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl px-6 text-center">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Premium <span className="text-cyan-200">Escorts in Gulshan-e-Iqbal Karachi</span>
            <br /> Call Now <span className="text-yellow-300">03708540579</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-gray-100 font-medium leading-relaxed">
            Scroll down to explore our exclusive VIP gallery, top-rated companions, and premium escort services in
            Gulshan-e-Iqbal Karachi.
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="max-w-5xl mx-auto px-6 py-14 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 text-black">
          Elite Escorts in Gulshan-e-Iqbal Karachi – VIP Female Companions
        </h2>

        <div className="mb-12 flex justify-center">
          <img
            src="/mp1.jpg"
            alt="Elite VIP Escorts in Gulshan-e-Iqbal Karachi"
            className="rounded-2xl shadow-xl max-w-full h-auto"
            loading="lazy"
          />
        </div>

        <p className="text-lg leading-relaxed text-gray-800 mb-6">
          Welcome to the most trusted{" "}
          <strong>escort agency in Gulshan-e-Iqbal Karachi</strong>. We specialize in providing{" "}
          <strong>premium VIP female escorts</strong>,{" "}
          <strong>exclusive companionship</strong>, and{" "}
          <strong>high-class professional escort services</strong>.
        </p>

        <p className="text-lg leading-relaxed text-gray-800">
          Our <strong>Gulshan-e-Iqbal escorts</strong> offer personalized, professional, and discreet experiences for
          clients seeking <strong>high-class female companions</strong>,{" "}
          <strong>VIP escort services</strong>, and{" "}
          <strong>luxury companionship in Karachi</strong>.
        </p>
      </section>

      {/* PHOTO GALLERY */}
      <section className="bg-gray-50 py-14 px-6">
        <h3 className="text-3xl text-center font-extrabold mb-10 text-black">
          Gulshan-e-Iqbal <span className="text-cyan-800">Escorts Gallery</span> – Luxury Visual Portfolio
        </h3>

        <div className="mb-12 flex justify-center">
          <img
            src="/mp2.jpg"
            alt="Gulshan-e-Iqbal Escorts Gallery - Premium VIP Companions"
            className="rounded-2xl shadow-xl max-w-full h-auto"
            loading="lazy"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-2xl shadow-lg bg-white border border-gray-200"
            >
              <img
                src={img}
                alt={`Gulshan-e-Iqbal Escort ${idx + 1} - Premium VIP Female Companion Karachi`}
                className="object-cover w-full h-[300px] transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-extrabold mb-10 text-black text-center">
          Why Choose Our <span className="text-cyan-800">Escorts in Gulshan-e-Iqbal Karachi</span>
        </h2>

        <div className="mb-12 flex justify-center">
          <img
            src="/mp3.jpg"
            alt="Why Choose Gulshan-e-Iqbal Escorts"
            className="rounded-2xl shadow-xl max-w-full h-auto"
            loading="lazy"
          />
        </div>

        <ul className="list-disc list-inside space-y-4 text-lg text-gray-800 leading-relaxed">
          <li>
            Professional and highly-rated female escorts in{" "}
            <strong>Gulshan-e-Iqbal Karachi</strong>
          </li>
          <li>Luxury VIP escorts for private dinners and events</li>
          <li>Discreet and safe companionship for elite clients in Karachi</li>
          <li>Personalized experiences tailored to your preferences</li>
          <li>Easy and confidential booking of top escorts in Gulshan-e-Iqbal</li>
          <li>Exclusive access to elite VIP companions</li>
          <li>High-class and sophisticated companionship for memorable experiences</li>
          <li>Professional escort services for parties and corporate events</li>
        </ul>
      </section>

      {/* BENEFITS SECTION */}
      <section className="bg-gray-50 py-14 px-6 text-center">
        <h3 className="text-3xl font-extrabold mb-10 text-black">
          Experience Premium Escort Services in{" "}
          <span className="text-cyan-800">Gulshan-e-Iqbal Karachi</span>
        </h3>

        <div className="mb-12 flex justify-center">
          <img
            src="/mp4.jpg"
            alt="Premium Escort Services in Gulshan-e-Iqbal Karachi"
            className="rounded-2xl shadow-xl max-w-full h-auto"
            loading="lazy"
          />
        </div>

        <p className="text-lg leading-relaxed max-w-3xl mx-auto text-gray-800">
          Booking a <strong>premium escort in Gulshan-e-Iqbal Karachi</strong> ensures a luxurious, safe, and unforgettable
          experience. Our companions specialize in{" "}
          <strong>VIP escort services in Karachi</strong>,{" "}
          <strong>elite female companionship</strong>, and{" "}
          <strong>high-class private escort experiences</strong>.
        </p>
      </section>

      {/* FINAL CTA */}
      <section className="bg-black text-white py-16 text-center px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-8">
          Book Your Elite Escort in{" "}
          <span className="text-cyan-200">Gulshan-e-Iqbal Karachi</span> Today
        </h2>

        <div className="mb-10 flex justify-center">
          <img
            src="/mp8.jpg"
            alt="Book Elite Escorts in Gulshan-e-Iqbal Karachi"
            className="rounded-2xl shadow-xl max-w-full h-auto"
            loading="lazy"
          />
        </div>

        <p className="text-lg mb-10 text-gray-200">
          Contact us now to reserve your <strong>VIP escort in Gulshan-e-Iqbal Karachi</strong>.
        </p>

        <Link
          href="/contact"
          className="bg-white text-black font-bold px-10 py-4 rounded-2xl shadow-lg hover:bg-gray-200 transition inline-block"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
}