import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Escorts in Karachi | Elite VIP Female Companions in Bahria Town, Clifton, DHA, PECHS",
  description:
    "Discover professional and discreet premium escorts in Karachi. Explore elite VIP escort galleries and book top-rated female companions in Bahria Town, Clifton, DHA Phase 5 & 6, PECHS. Luxury high-class services for events, dinners, and private experiences.",
  keywords: [
    "Premium Escorts Karachi",
    "VIP Escorts Bahria Town Karachi",
    "Elite Escorts Clifton Karachi",
    "Luxury Escorts DHA Karachi",
    "High-Class Escorts PECHS Karachi",
    "Bahria Town Karachi escorts near me",
    "Clifton Karachi top escorts",
    "DHA Phase 5 escorts",
    "PECHS VIP female companions",
    "Karachi luxury companionship",
    "Professional escort agency Karachi",
    "Exclusive VIP escorts Karachi",
    "High-end female escorts for events",
    "Discreet private escort services Karachi",
    "Top-rated companions Bahria Town",
    "Elite escorts Clifton",
    "VIP models DHA Phase 6",
    "Premium companions PECHS Karachi",
  ],
  openGraph: {
    title: "Premium Escorts in Karachi | Elite VIP Female Companions in Bahria Town, Clifton, DHA, PECHS",
    description:
      "Book premium VIP escorts in Karachi's top areas: Bahria Town, Clifton, DHA, PECHS. Discreet, professional luxury companions for unforgettable experiences. Call Now 03708540579",
    images: ["/herobg.jpg"],
    type: "website",
  },
  alternates: {
    canonical: "/escorts-karachi", // Adjust to your actual slug/full URL
  },
};

export default function Page() {
  const bahriaImages = ["/nm5.jpg", "/nm6.jpg", "/nm7.jpg", "/nm8.jpg", "/nm9.jpg"];
  const cliftonImages = ["/nm1.jpg", "/nm2.jpg", "/nm3.jpg", "/nm4.jpg"];
  const pechsImages = ["/nm10.jpg", "/nm11.jpg", "/nm12.jpg", "/nm13.jpg", "/nm14.jpg"];
  const dhaImages = ["/nm1.jpg", "/model1.jpg", "/model2.jpg", "/model3.jpg"];

  return (
    <main className="bg-[#FFECE8] text-[#222222]">
      {/* Hero Section - General H1 with number, covering all areas */}
      <section
        className="w-full h-[500px] relative bg-cover bg-center"
        style={{ backgroundImage: "url('/herobg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/20 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Premium <strong>Escorts in Karachi</strong> – Call Now 03708540579
            </h1>
            {/* Motivational H2 to encourage scrolling, as requested */}
            <h2 className="mt-6 text-white text-xl sm:text-2xl font-medium">
              Scroll down to explore elite VIP companions, luxury galleries, and premium services in Bahria Town, Clifton, DHA, PECHS & more
            </h2>
          </div>
        </div>
      </section>

      {/* Bahria Town Section - All original content included */}
      <section id="bahria-town" className="max-w-5xl mx-auto px-6 py-12 text-center">
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
      <section className="bg-white py-12 px-6">
        <h3 className="text-3xl text-center font-semibold mb-8 text-[#D6336C]">
          Bahria Town <strong>Escorts Gallery</strong> – Luxury Visual Portfolio
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {bahriaImages.map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={img}
                alt={`Bahria Town Escort ${idx + 1} - Premium VIP Female Companion Karachi - Elite Luxury Escort Service Bahria Town`}
                className="object-cover w-full h-[300px] transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
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

      {/* Clifton Section - All original content included */}
      <section id="clifton" className="max-w-5xl mx-auto px-6 py-12 text-center">
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
      <section className="bg-white py-12 px-6">
        <h3 className="text-3xl text-center font-semibold mb-8 text-[#D6336C]">
          Clifton <strong>Escorts Gallery</strong> – Luxury Visual Portfolio
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {cliftonImages.map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={img}
                alt={`Clifton Escort ${idx + 1} - Premium VIP Female Companion Karachi - Elite Luxury Escort Service Clifton`}
                className="object-cover w-full h-[300px] transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
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

      {/* PECHS Section - All original content included */}
      <section id="pechs" className="max-w-5xl mx-auto px-6 py-12 text-center">
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
      <section className="bg-white py-12 px-6">
        <h3 className="text-3xl text-center font-semibold mb-8 text-[#D6336C]">
          PECHS <strong>Escorts Gallery</strong> – Luxury Visual Portfolio
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {pechsImages.map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={img}
                alt={`PECHS Escort ${idx + 1} - Premium VIP Female Companion Karachi - Elite Luxury Escort Service PECHS`}
                className="object-cover w-full h-[300px] transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
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

      {/* DHA Section - All original content included, adapted to match structure */}
      <section id="dha" className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h2 className="text-4xl font-semibold mb-4 text-[#D6336C]">
          VIP <strong>Escorts in DHA Karachi</strong> – Elite Luxury Companions in DHA Phase 5 & 6
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
      <section className="bg-white py-12 px-6">
        <h3 className="text-3xl text-center font-semibold mb-8 text-[#D6336C]">
          DHA <strong>Escorts Gallery</strong> – Featured VIP Models
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {dhaImages.map((img, index) => (
            <div
              key={index}
              className="bg-[#FFF0F2] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-[320px] overflow-hidden">
                <img
                  src={img}
                  alt={`VIP Companion DHA Karachi ${index + 1} - Premium VIP Female Companion Karachi - Elite Luxury Escort Service DHA`}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  loading="lazy"
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
      <section className="max-w-4xl mx-auto px-4 py-12 text-[#222222]">
        <h2 className="text-3xl font-semibold mb-4">
          Why DHA Clients Choose Our <strong>VIP Escorts in DHA Karachi</strong>
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
      <section className="bg-[#FFF0F2] py-12 px-6 text-center">
        <h3 className="text-3xl font-semibold mb-6 text-[#D6336C]">
          Experience Elite Luxury Escort Services in <strong>DHA Karachi</strong>
        </h3>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-4">
          Connect today for a private and refined experience with our VIP companions in DHA Karachi.
        </p>
      </section>

      {/* General Call To Action - Covering all areas */}
      <section className="bg-[#D6336C] text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Book Your Elite Escort in <strong>Karachi</strong> Today – Bahria Town, Clifton, DHA, PECHS
        </h2>
        <p className="text-lg mb-6">
          Contact us now to reserve your <strong>VIP escort in Karachi</strong> and enjoy
          a luxurious, discreet, and unforgettable experience. Call 03708540579
        </p>
        <Link
          href="/contact"
          className="bg-white text-[#D6336C] font-semibold px-8 py-3 rounded-md shadow-md hover:bg-gray-100 transition"
        >
          Contact Us
        </Link>
      </section>

      {/* Internal Links Section - From DHA original */}
      <section className="py-10 text-center text-[#555]">
        <p>
          Explore More:{" "}
          <a href="#clifton" className="text-[#D6336C] hover:underline mx-2">
            Clifton Escorts
          </a>
          •
          <a href="#bahria-town" className="text-[#D6336C] hover:underline mx-2">
            Bahria Town Escorts
          </a>
          •
          <a href="#pechs" className="text-[#D6336C] hover:underline mx-2">
            PECHS Escorts
          </a>
          •
          <a href="#dha" className="text-[#D6336C] hover:underline mx-2">
            DHA Escorts
          </a>
        </p>
      </section>
    </main>
  );
}