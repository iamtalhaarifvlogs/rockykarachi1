import Link from "next/link";

export const metadata = {
  title:
    "Premium Escorts in Bahria Town Karachi | Elite VIP Female Companions",
  description:
    "Discover professional and discreet premium escorts in Bahria Town Karachi. Explore our elite VIP escort gallery and book the top-rated female companions in Karachi.",
};

export default function Page() {
  const images = ["/nm5.jpg", "/nm6.jpg", "/nm7.jpg", "/nm8.jpg", "/nm9.jpg"];

  return (
    <main className="bg-[#FFECE8] text-[#222222]">
      {/* Hero Section */}
      <section
        className="w-full h-[500px] relative bg-cover bg-center"
        style={{ backgroundImage: "url('/herobg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/20 flex items-center justify-center px-4">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold text-center leading-tight">
            Premium <strong>Escorts in Bahria Town Karachi</strong> – Call Now 03708540579
          </h1>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h2 className="text-4xl font-semibold mb-4 text-[#D6336C]">
          Elite <strong>Escorts in Bahria Town Karachi</strong> – VIP Female Companions
        </h2>
        <p className="text-lg leading-relaxed text-[#333333] mb-6">
          Welcome to the most trusted <strong>escort agency in Bahria Town Karachi</strong>. We specialize in 
          providing <strong>premium VIP female escorts</strong>, <strong>exclusive companionship</strong>, and 
          <strong>high-class professional escort services</strong>. Our portfolio includes 
          <strong>top-rated Bahria Town escorts</strong>, <strong>luxury companions for events in Karachi</strong>, 
          and <strong>elite female escorts near me</strong> for a truly sophisticated experience.
        </p>
        <p className="text-lg leading-relaxed text-[#333333] mb-6">
          Our <strong>Bahria Town escorts</strong> offer personalized, professional, and discreet experiences for 
          clients seeking <strong>high-class female companions</strong>, <strong>VIP escort services</strong>, 
          <strong>luxury companionship in Karachi</strong>, and <strong>elite escorts for private events</strong>.
        </p>
        <p className="text-lg leading-relaxed text-[#333333]">
          Clients frequently search for <strong>Bahria Town Karachi top escorts</strong>, <strong>luxury VIP escorts</strong>, 
          <strong>professional female companions for hire</strong>, <strong>exclusive escort experiences</strong>, 
          and <strong>high-end VIP escorts in Karachi</strong>. Our team ensures safety, discretion, and a 
          memorable experience with every booking.
        </p>
      </section>

      {/* Photo Gallery */}
      <section className="bg-white py-12 px-6">
        <h3 className="text-3xl text-center font-semibold mb-8 text-[#D6336C]">
          Bahria Town <strong>Escorts Gallery</strong> – Luxury Visual Portfolio
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={img}
                alt={`Bahria Town Escort ${idx + 1} - Premium VIP Female Companion Karachi`}
                className="object-cover w-full h-[300px] transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-4xl mx-auto px-4 py-12 text-[#222222]">
        <h2 className="text-3xl font-semibold mb-4">
          Why Choose Our <strong>Escorts in Bahria Town Karachi</strong>
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Our <strong>Bahria Town escort agency</strong> delivers premium, professional, and discreet services for clients seeking 
          <strong>VIP female companions</strong>, <strong>elite Bahria Town escorts</strong>, <strong>high-class companionship</strong>, 
          <strong>luxury VIP escort services</strong>, and <strong>exclusive private escorts in Karachi</strong>.
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-lg">
          <li>Professional and highly-rated female escorts in <strong>Bahria Town Karachi</strong></li>
          <li>Luxury VIP escorts for private dinners and events</li>
          <li>Discreet and safe companionship for elite clients in Karachi</li>
          <li>Personalized experiences tailored to your lifestyle and preferences</li>
          <li>Easy and confidential booking of top female escorts in Bahria Town</li>
          <li>Exclusive access to elite companions for VIP clients</li>
          <li>High-class and sophisticated companionship for memorable experiences</li>
          <li>Professional escort services for parties, corporate events, and private meetings</li>
          <li>Trusted Bahria Town escorts with proven client satisfaction</li>
          <li>Luxury and elegance guaranteed with every booking</li>
        </ul>
      </section>

      {/* SEO & Benefits Section */}
      <section className="bg-[#FFF0F2] py-12 px-6 text-center">
        <h3 className="text-3xl font-semibold mb-6 text-[#D6336C]">
          Experience Premium Escort Services in <strong>Bahria Town Karachi</strong>
        </h3>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-4">
          Booking a <strong>premium escort in Bahria Town Karachi</strong> ensures a luxurious, safe, and unforgettable experience. 
          Our companions specialize in <strong>VIP escort services in Karachi</strong>, <strong>elite female companionship</strong>, 
          <strong>high-class private escorts</strong>, and <strong>luxury Bahria Town escort experiences</strong>.
        </p>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          We cover popular searches including <strong>Bahria Town Karachi escorts near me</strong>, 
          <strong>VIP female escorts Karachi</strong>, <strong>exclusive companionship for high-end clients</strong>, 
          <strong>luxury female escorts for events</strong>, <strong>professional escort agency in Bahria Town</strong>, 
          <strong>elite Bahria Town escorts for hire</strong>, <strong>trusted VIP escorts Karachi</strong>, 
          <strong>top-rated female companions for parties</strong>, <strong>discreet private escort services</strong>, 
          <strong>high-class female escorts in Bahria Town Karachi</strong>, <strong>luxury VIP experiences Karachi</strong>, 
          <strong>exclusive private escort booking</strong>, <strong>premium companions near me Karachi</strong>, 
          and <strong>Bahria Town top escort portfolio</strong>. All services focus on professionalism, safety, 
          and unforgettable client satisfaction.
        </p>
      </section>

      {/* Call To Action */}
      <section className="bg-[#D6336C] text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Book Your Elite Escort in <strong>Bahria Town Karachi</strong> Today
        </h2>
        <p className="text-lg mb-6">
          Contact us now to reserve your <strong>VIP escort in Bahria Town Karachi</strong> and enjoy 
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
        © {new Date().getFullYear()} Bahria Town Escorts Karachi. All Rights Reserved.
      </footer>
    </main>
  );
}