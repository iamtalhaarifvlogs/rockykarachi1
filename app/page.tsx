export default function HomePage() {
  return (
    <section className="container mx-auto px-4 py-10">
      {/* H1 with Phone Number */}
      <h1 className="text-center text-3xl md:text-4xl font-bold text-yellow-500 mb-6">
        Call / WhatsApp: 03708540579
      </h1>

      <h2 className="text-center text-2xl font-semibold text-yellow-400 mb-4">
        Rocky Escorts Karachi – Premium Escort Services
      </h2>

      <p className="max-w-4xl mx-auto text-center text-gray-300 mb-10 leading-relaxed">
        Rocky Escorts Karachi provides high-class escort services in Karachi.
        Our agency connects you with elegant, verified, and professional
        companions for private meetings, tours, and exclusive experiences.
        Discretion and satisfaction are guaranteed.
      </p>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[
          "VIP Escorts Karachi",
          "Luxury Call Girls",
          "24/7 Escort Service",
          "Elite Companions",
          "Discreet Meetings",
          "Premium Karachi Escorts",
        ].map((title, index) => (
          <div
            key={index}
            className="border border-yellow-500 rounded-xl p-6 bg-gradient-to-b from-black to-gray-900 hover:shadow-lg hover:shadow-yellow-500/20 transition"
          >
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">
              {title}
            </h3>
            <p className="text-gray-400 text-sm">
              Experience premium escort services in Karachi with trusted and
              professional companions available for private and social meetings.
            </p>
          </div>
        ))}
      </div>

      {/* SEO Content Section */}
      <div className="max-w-5xl mx-auto mt-14 text-gray-300 leading-relaxed">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
          Why Choose Rocky Escorts Karachi?
        </h2>
        <p>
          We are one of the most trusted escort agencies in Karachi, offering
          luxury services with complete privacy. Whether you are looking for
          companionship, dinner dates, or private time, Rocky Escorts Karachi
          ensures top-tier service and satisfaction.
        </p>
      </div>
    </section>
  );
}
