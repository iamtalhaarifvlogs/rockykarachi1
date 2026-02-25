import Link from "next/link";

export const metadata = {
  title:
    "Premium Escorts in PECHS Karachi | Elite VIP Female Companions",
  description:
    "Discover professional and discreet premium escorts in PECHS Karachi. Explore our elite VIP escort gallery and book the top-rated female companions in Karachi.",
};

export default function Page() {
  const images = ["/nm10.jpg", "/nm11.jpg", "/nm12.jpg", "/nm13.jpg", "/nm14.jpg"];

  return (
    <main className="bg-[#FFECE8] text-[#222222]">
      {/* Hero Section */}
      <section
        className="w-full h-[500px] relative bg-cover bg-center"
        style={{ backgroundImage: "url('/herobg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/20 flex items-center justify-center px-4">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold text-center leading-tight">
            Premium <strong>Escorts in PECHS Karachi</strong> – Call Now 03708540579
          </h1>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h2 className="text-4xl font-semibold mb-4 text-[#D6336C]">
          Elite <strong>Escorts in PECHS Karachi</strong> – VIP Female Companions
        </h2>
        <p className="text-lg leading-relaxed text-[#333333] mb-6">
          Welcome to the most trusted <strong>escort agency in PECHS Karachi</strong>. We specialize in 
          providing <strong>premium VIP female escorts</strong>, <strong>exclusive companionship</strong>, 
          and <strong>high-class professional escort services</strong>. Our portfolio features 
          <strong>top-rated PECHS Karachi escorts</strong>, <strong>luxury companions for private events</strong>, 
          and <strong>elite female escorts near me</strong> for a sophisticated and memorable experience.
        </p>
        <p className="text-lg leading-relaxed text-[#333333] mb-6">
          Our <strong>PECHS escorts</strong> offer professional, discreet, and personalized experiences for 
          clients seeking <strong>high-class female companions</strong>, <strong>VIP escort services in Karachi</strong>, 
          <strong>luxury companionship for parties</strong>, and <strong>exclusive VIP escorts in PECHS</strong>.
        </p>
        <p className="text-lg leading-relaxed text-[#333333]">
          Clients often search for <strong>PECHS Karachi top escorts</strong>, <strong>elite VIP female escorts</strong>, 
          <strong>professional companions for hire</strong>, <strong>luxury private escort services Karachi</strong>, 
          <strong>exclusive high-end escorts</strong>, and <strong>trusted VIP escorts PECHS Karachi</strong>. 
          Our team ensures safety, discretion, and unforgettable experiences every time.
        </p>
      </section>

      {/* Photo Gallery */}
      <section className="bg-white py-12 px-6">
        <h3 className="text-3xl text-center font-semibold mb-8 text-[#D6336C]">
          PECHS <strong>Escorts Gallery</strong> – Luxury Visual Portfolio
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={img}
                alt={`PECHS Escort ${idx + 1} - Premium VIP Female Companion Karachi`}
                className="object-cover w-full h-[300px] transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-4xl mx-auto px-4 py-12 text-[#222222]">
        <h2 className="text-3xl font-semibold mb-4">
          Why Choose Our <strong>Escorts in PECHS Karachi</strong>
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Our <strong>PECHS escort agency</strong> delivers premium, professional, and discreet services for clients seeking 
          <strong>VIP female companions</strong>, <strong>elite PECHS escorts</strong>, <strong>high-class companionship</strong>, 
          <strong>luxury VIP escort services</strong>, and <strong>exclusive private escorts in Karachi</strong>.
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-lg">
          <li>Professional and highly-rated female escorts in <strong>PECHS Karachi</strong></li>
          <li>Luxury VIP escorts for private dinners, parties, and events</li>
          <li>Discreet and safe companionship for high-end clients in Karachi</li>
          <li>Personalized experiences tailored to your lifestyle and preferences</li>
          <li>Easy and confidential booking of top female escorts in PECHS</li>
          <li>Exclusive access to elite companions for VIP clients</li>
          <li>High-class and sophisticated companionship for unforgettable experiences</li>
          <li>Professional escort services for corporate events, parties, and private meetings</li>
          <li>Trusted PECHS escorts with proven client satisfaction</li>
          <li>Luxury, elegance, and discretion guaranteed with every booking</li>
        </ul>
      </section>

      {/* SEO & Benefits Section */}
      <section className="bg-[#FFF0F2] py-12 px-6 text-center">
        <h3 className="text-3xl font-semibold mb-6 text-[#D6336C]">
          Experience Premium Escort Services in <strong>PECHS Karachi</strong>
        </h3>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-4">
          Booking a <strong>premium escort in PECHS Karachi</strong> ensures a luxurious, safe, and unforgettable experience. 
          Our companions specialize in <strong>VIP escort services in Karachi</strong>, <strong>elite female companionship</strong>, 
          <strong>high-class private escorts</strong>, and <strong>luxury PECHS Karachi escort experiences</strong>.
        </p>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          Popular searches we cover include: <strong>PECHS Karachi escorts near me</strong>, 
          <strong>elite VIP female escorts Karachi</strong>, <strong>professional escort agency PECHS</strong>, 
          <strong>high-end escorts for hire in Karachi</strong>, <strong>trusted PECHS escorts</strong>, 
          <strong>luxury female companions PECHS</strong>, <strong>exclusive escort experiences Karachi</strong>, 
          <strong>top-rated escorts near PECHS</strong>, <strong>Karachi private escort services</strong>, 
          <strong>premium companionship in PECHS</strong>, <strong>female VIP escort booking Karachi</strong>, 
          <strong>elite female companions for events in Karachi</strong>, and <strong>PECHS Karachi high-class escorts</strong>. 
          All services focus on professionalism, safety, and unforgettable client satisfaction.
        </p>
      </section>

      {/* Call To Action */}
      <section className="bg-[#D6336C] text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Book Your Elite Escort in <strong>PECHS Karachi</strong> Today
        </h2>
        <p className="text-lg mb-6">
          Contact us now to reserve your <strong>VIP escort in PECHS Karachi</strong> and enjoy 
          a luxurious, discreet, and unforgettable experience.
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
        © {new Date().getFullYear()} PECHS Escorts Karachi. All Rights Reserved.
      </footer>
    </main>
  );
}