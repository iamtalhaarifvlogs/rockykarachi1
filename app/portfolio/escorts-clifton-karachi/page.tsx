import Link from "next/link";

export const metadata = {
  title:
    "Premium Escorts in Clifton Karachi | Elite VIP Female Companions Karachi",
  description:
    "Discover professional and discreet premium escorts in Clifton Karachi. Explore our elite VIP escort gallery and book the top-rated female companions in Karachi.",
};

export default function Page() {
  const images = ["/nm1.jpg", "/nm2.jpg", "/nm3.jpg", "/nm4.jpg"];

  return (
    <main className="bg-[#FFECE8] text-[#222222]">
      {/* Hero Section */}
      <section
        className="w-full h-[500px] relative bg-cover bg-center"
        style={{ backgroundImage: "url('/herobg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/20 flex items-center justify-center px-4">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold text-center leading-tight">
            Premium <strong>Escorts in Clifton Karachi</strong> – Call Now 03708540579
          </h1>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h2 className="text-4xl font-semibold mb-4 text-[#D6336C]">
          Elite <strong>Escorts in Clifton Karachi</strong> – Top-Rated Female Companions
        </h2>
        <p className="text-lg leading-relaxed text-[#333333] mb-6">
          Welcome to the most trusted <strong>escort agency in Clifton Karachi</strong>. We
          offer <strong>premium VIP female escorts</strong>, <strong>high-class companionship</strong> for elite clients, 
          and <strong>discreet professional escort services</strong>. Our portfolio includes 
          <strong>&nbsp; top-rated Clifton escorts</strong>, <strong>luxury escorts for events in Karachi</strong>, 
          and <strong>exclusive female companions near me</strong>.
        </p>
        <p className="text-lg leading-relaxed text-[#333333] mb-6">
          Whether you are searching for <strong>luxury VIP escorts in Clifton Karachi</strong>, 
          <strong>professional female companions</strong>, or <strong>high-end escort services in Karachi</strong>, 
          our elite escorts deliver personalized experiences with elegance, charm, and discretion.
        </p>
        <p className="text-lg leading-relaxed text-[#333333]">
          Clients trust us for <strong>Clifton Karachi top escorts</strong>, <strong>exclusive companions for parties or dinners</strong>, 
          <strong>high-class female escorts</strong>, and <strong>elite VIP escort services in Karachi</strong>.
        </p>
      </section>

      {/* Photo Gallery */}
      <section className="bg-white py-12 px-6">
        <h3 className="text-3xl text-center font-semibold mb-8 text-[#D6336C]">
          Clifton <strong>Escorts Gallery</strong> – Luxury Visual Portfolio
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={img}
                alt={`Clifton Escort ${idx + 1} - Premium VIP Female Companion Karachi`}
                className="object-cover w-full h-[300px] transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-4xl mx-auto px-4 py-12 text-[#222222]">
        <h2 className="text-3xl font-semibold mb-4">
          Why Book Our <strong>Escorts in Clifton Karachi</strong>
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Our <strong>Clifton escort agency</strong> provides professional, elegant, and
          discreet companions for clients seeking <strong>elite VIP escorts in Karachi</strong>,
          <strong>top-rated female escorts</strong>, <strong>exclusive companionship for events</strong>, 
          and <strong>luxury escort services near Clifton</strong>.
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-lg">
          <li>Premium and professional female escorts in <strong>Clifton Karachi</strong></li>
          <li>VIP and elite escort services for private events and dinners</li>
          <li>Discreet and safe companionship for high-end clients in Karachi</li>
          <li>Personalized experiences tailored to your preferences</li>
          <li>Trusted and highly-rated escorts with proven client satisfaction</li>
          <li>Luxury escorts for parties, meetings, or personal visits</li>
          <li>Exclusive access to elite companions in <strong>Clifton Karachi</strong></li>
          <li>Booking top female escorts in Karachi made easy and discreet</li>
          <li>High-class, sophisticated companions for elite clientele</li>
          <li>Professional VIP escort services in Karachi</li>
        </ul>
      </section>

      {/* SEO & Benefits Section */}
      <section className="bg-[#FFF0F2] py-12 px-6 text-center">
        <h3 className="text-3xl font-semibold mb-6 text-[#D6336C]">
          Experience Luxury Escort Services in <strong>Clifton Karachi</strong>
        </h3>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-4">
          Booking a <strong>premium escort in Clifton Karachi</strong> ensures a memorable and
          sophisticated experience. Our companions specialize in <strong>discreet VIP escort services</strong>, 
          <strong>elite female companionship</strong>, and <strong>luxury escorts for high-class clients in Karachi</strong>.
        </p>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          We cover popular searches like <strong>Clifton Karachi escorts near me</strong>, 
          <strong>elite VIP female escorts Karachi</strong>, <strong>professional escort agency Clifton</strong>, 
          <strong>high-end escorts for hire in Karachi</strong>, <strong>trusted Clifton escorts</strong>, 
          <strong>luxury female companions in Clifton</strong>, <strong>exclusive escort experiences Karachi</strong>, 
          <strong>top-rated escorts near Clifton</strong>, <strong>Karachi private escort services</strong>, 
          <strong>premium companionship in Clifton</strong>, <strong>female VIP escort booking Karachi</strong>, 
          <strong>elite female companions for events in Karachi</strong>, and <strong>Clifton Karachi high-class escorts</strong>. 
          All services focus on safety, professionalism, and unforgettable experiences.
        </p>
      </section>

      {/* Call To Action */}
      <section className="bg-[#D6336C] text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Book Your Elite Escort in <strong>Clifton Karachi</strong> Today
        </h2>
        <p className="text-lg mb-6">
          Contact us now to reserve your <strong>VIP escort in Clifton Karachi</strong> and enjoy
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
        © {new Date().getFullYear()} Clifton Escorts Karachi. All Rights Reserved.
      </footer>
    </main>
  );
}