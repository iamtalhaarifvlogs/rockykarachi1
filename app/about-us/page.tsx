import Image from "next/image";

export default function AboutUsPage() {
  return (
    <main className="bg-black text-white">
      {/* HERO SECTION */}
      <section
        className="relative h-[85vh] flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/herobg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 px-6 max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-bold text-[#D4AF37] mb-6">
            ROCKY ESCORTS KARACHI VIP CALL GIRLS  
            <br />
            <span className="text-2xl md:text-3xl text-white mt-3 block">
              📞 0370-8540579
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white leading-relaxed">
            Premium, discreet and elite escort services in Karachi for gentlemen
            who value class, privacy and unforgettable companionship.
          </p>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-6">
          About Rocky Escorts Karachi
        </h2>

        <p className="text-white text-lg leading-relaxed mb-6">
          Rocky Escorts Karachi is a trusted name in the world of luxury escort
          and VIP call girl services in Karachi. We are not just a service – we
          are an experience crafted for men who understand taste, discretion
          and elegance.
        </p>

        <p className="text-white text-lg leading-relaxed mb-6">
          Our platform connects you with some of the most beautiful, confident
          and well-maintained models, escorts and companions in Karachi. Whether
          you are a local gentleman, businessman, or visiting from another city
          or country, we ensure a smooth, private and respectful experience.
        </p>

        <p className="text-white text-lg leading-relaxed mb-10">
          From DHA, Clifton, PECHS, Gulshan, North Nazimabad to five-star hotels
          across Karachi, our VIP escorts are available for bookings with full
          privacy and professionalism.
        </p>

        {/* IMAGE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-14">
          {[
            "/model1.jpg",
            "/model2.jpg",
            "/model3.jpg",
            "/model4.jpg",
            "/model5.jpg",
            "/model6.jpg",
          ].map((src, index) => (
            <div
              key={index}
              className="relative w-full h-[380px] rounded-xl overflow-hidden border border-[#D4AF37]/30"
            >
              <Image
                src={src}
                alt="Karachi VIP Escort Model"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* WHY CHOOSE US */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-6">
          Why Choose Rocky Escorts?
        </h2>

        <ul className="list-disc list-inside text-white text-lg space-y-3 mb-12">
          <li>100% Real & Verified Escorts and Models</li>
          <li>Discreet and Secure Booking Process</li>
          <li>Premium Call Girls in Karachi</li>
          <li>Hotel, Home & Private Location Visits</li>
          <li>Respectful, Clean & Classy Companionship</li>
          <li>24/7 WhatsApp Booking Support</li>
        </ul>

        {/* KARACHI FOCUS */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-6">
          Escort Services Designed for Karachi Lifestyle
        </h2>

        <p className="text-white text-lg leading-relaxed mb-6">
          Karachi is a city that never sleeps, and we understand its lifestyle.
          Whether you want company for a late-night dinner, a hotel stay, a
          private meetup or simply someone to relax with after a long day, our
          escorts know how to match your mood.
        </p>

        <p className="text-white text-lg leading-relaxed mb-6">
          We focus on privacy because in Karachi, discretion matters. No fake
          promises, no uncomfortable situations — only smooth communication,
          respectful behavior and premium service.
        </p>

        {/* CALL TO ACTION */}
        <div className="mt-14 p-8 border border-[#D4AF37]/40 rounded-2xl bg-black/80 text-center">
          <h2 className="text-3xl font-bold text-[#D4AF37] mb-4">
            Ready to Book a VIP Escort in Karachi?
          </h2>

          <p className="text-white text-lg mb-6">
            Connect with us now on WhatsApp and experience premium escort
            services like never before.
          </p>

          <a
            href="https://wa.me/923708540579"
            target="_blank"
            className="inline-block bg-[#D4AF37] text-black font-semibold px-8 py-4 rounded-full hover:bg-white transition"
          >
            WhatsApp Now – 0370-8540579
          </a>
        </div>
      </section>
    </main>
  );
}
