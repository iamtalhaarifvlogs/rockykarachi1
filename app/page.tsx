export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-b from-black via-gray-900 to-black py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-500 mb-4 tracking-wide">
           Top-Rated Karachi Escorts | VIP Call Girls 24/7 Available – Book Now</h1><h2 className="text-4xl md:text-5xl font-extrabold text-white-500 mb-4 tracking-wide">
Discover the most trusted Karachi escorts service at rockyescortskarachi.com . Book VIP call girls, models, and college escorts in Clifton, DHA, Bahria Town & top hotels. 100% real photos, full privacy, fast outcall – Call Now: 03708540579
          </h2>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-6">
            Rocky Escorts Karachi – Elite & Discreet Escort Services
          </h2>

          <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed">
            Experience luxury companionship with verified, elegant, and
            professional escorts in Karachi. We offer 24/7 availability,
            complete discretion, and premium service.
          </p>

          <div className="mt-8">
            <a
              href="https://wa.me/923708540579"
              className="inline-block bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full hover:bg-yellow-400 transition"
            >
              Book on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-center text-3xl font-bold text-yellow-400 mb-12">
          Our Premium Escort Services in Karachi
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "VIP Escorts Karachi",
            "Luxury Call Girls",
            "Elite Companions",
            "Discreet Private Meetings",
            "24/7 Escort Services",
            "High-Class Karachi Escorts",
          ].map((title, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 to-black border border-yellow-500/30 rounded-2xl p-8 hover:border-yellow-500 hover:shadow-2xl hover:shadow-yellow-500/10 transition"
            >
              <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                {title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Enjoy premium escort services in Karachi with verified models,
                complete privacy, and unmatched satisfaction.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="bg-black border-t border-yellow-500/20 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6">
            Why Choose Rocky Escorts Karachi?
          </h2>

          <p className="text-gray-300 leading-relaxed mb-4">
            Rocky Escorts Karachi is a trusted name in luxury escort services.
            Our companions are selected for beauty, elegance, and professionalism.
            We guarantee discreet arrangements and unforgettable experiences.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Whether you’re a local resident or visiting Karachi, our escort
            services offer privacy, comfort, and premium companionship tailored
            to your desires.
          </p>
        </div>
      </section>
    </>
  );
}
