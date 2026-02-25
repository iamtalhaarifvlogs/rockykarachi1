import Link from "next/link";

export const metadata = {
  title:
    "Premium Escorts in Clifton Karachi | Top-Rated Elite Escort Services",
  description:
    "Discover premium escorts in Clifton Karachi offering professional, discreet, and elite companionship. Explore our top-rated Clifton escorts gallery and book now.",
};

export default function Page() {
  const images = ["/nm1.jpg", "/nm2.jpg", "/nm3.jpg", "/nm4.jpg"];

  return (
    <main className="bg-[#FFECE8] text-[#222222]">
      {/* Hero Section */}
      <section className="w-full h-[500px] relative">
        <img
          src="/nm1.jpg"
          alt="Premium Escorts in Clifton Karachi"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center px-4">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold text-center leading-tight">
            Premium Escorts in Clifton Karachi – Elite Companionship
          </h1>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h2 className="text-4xl font-semibold mb-4 text-[#D6336C]">
          Explore Top-Rated Clifton Escorts
        </h2>
        <p className="text-lg leading-relaxed text-[#333333] mb-6">
          Our Clifton escort portfolio features **highly professional and
          discreet elite companions**. Whether you are looking for **premium
          companionship in Clifton Karachi**, elegant company for events, or a
          memorable personal experience, our escorts provide unmatched charm
          and sophistication.
        </p>
        <p className="text-lg leading-relaxed text-[#333333]">
          With **top-rated Clifton escorts**, you can enjoy a safe, luxurious,
          and unforgettable experience. Browse our gallery below to find your
          ideal escort and book effortlessly.
        </p>
      </section>

      {/* Photo Gallery */}
      <section className="bg-white py-12 px-6">
        <h3 className="text-3xl text-center font-semibold mb-8 text-[#D6336C]">
          Clifton Escorts Gallery – Visual Portfolio
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={img}
                alt={`Clifton Escort ${idx + 1} - Premium Elite Companion`}
                className="object-cover w-full h-[300px] transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Features & SEO Section */}
      <section className="max-w-4xl mx-auto px-4 py-12 text-[#222222]">
        <h2 className="text-3xl font-semibold mb-4">
          Why Choose Our Clifton Escort Services
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          We offer **exclusive escort services in Clifton Karachi** designed to
          cater to your needs with professionalism, elegance, and discretion.
          Our long-term commitment to excellence makes us a trusted choice for
          those seeking elite companionship.
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-lg">
          <li>Professional, charming, and courteous escorts</li>
          <li>Discreet and safe premium escort experiences</li>
          <li>Customizable companionship services tailored to your preferences</li>
          <li>Exclusive access to **elite Clifton Karachi escorts**</li>
        </ul>
      </section>

      {/* Benefits Section for SEO */}
      <section className="bg-[#FFF0F2] py-12 px-6 text-center">
        <h3 className="text-3xl font-semibold mb-6 text-[#D6336C]">
          Experience Luxury with Clifton Escorts
        </h3>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          Booking a **premium escort in Clifton Karachi** ensures a memorable
          and sophisticated experience. Our escorts combine beauty, intelligence,
          and elegance to provide personalized companionship tailored to your
          lifestyle.
        </p>
      </section>

      {/* Call To Action */}
      <section className="bg-[#D6336C] text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Book Your Preferred Clifton Escort Today
        </h2>
        <p className="text-lg mb-6">
          Contact us now to reserve your **elite escort in Clifton Karachi** and
          enjoy a luxurious, safe, and unforgettable experience.
        </p>
        <Link
          href="/contact"
          className="bg-white text-[#D6336C] font-semibold px-8 py-3 rounded-md shadow-md hover:bg-gray-100 transition"
        >
          Contact Us
        </Link>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-[#555555]">
        © {new Date().getFullYear()} Clifton Escorts Karachi. All Rights Reserved.
      </footer>
    </main>
  );
}