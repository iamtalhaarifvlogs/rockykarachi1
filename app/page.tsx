import EscortsCollage from "@/app/components/EscortsCollage";
import WhatsAppButton from "@/app/components/WhatsAppButton";

export default function HomePage() {
  return (
    <>
      <WhatsAppButton />

      {/* HERO SECTION - Updated & Cleaner */}
      <section
        className="relative py-48 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hm1.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-wide drop-shadow-2xl">
            Karachi Escorts 24/7 Available – Call Now 03708540579
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed mb-8 drop-shadow-xl">
            Premium Karachi escorts, VIP call girls &amp; elite companions available 
            in DHA, Clifton, Bahria Town, Gulshan, Nazimabad and top hotels.
          </h2>

          <p className="text-lg text-yellow-400 font-medium drop-shadow-xl">
            📞 Call / WhatsApp: <span className="text-white font-semibold">03708540579</span>
          </p>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4 max-w-5xl text-gray-300">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-6">
            Karachi Escorts – Verified, Sensual &amp; Elite Companions
          </h2>

          <div className="w-full h-72 md:h-96 rounded-2xl overflow-hidden mb-8 border border-yellow-500/20 shadow-lg">
            <img
              src="/hm2.jpg"
              alt="Karachi Escorts - Premium Call Girls in Karachi"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <p className="leading-relaxed text-lg">
            Looking for reliable <strong>escorts in Karachi</strong>? At rockyescortskarchi, we provide premium, discreet, and verified 
            <strong>Karachi escorts</strong> for incall and outcall services. Whether you're in a hotel, home, or guest house, our beautiful 
            and professional companions are ready to offer you an unforgettable experience with complete privacy.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US - Enhanced with SEO */}
      <section className="bg-gradient-to-b from-gray-950 to-black py-20">
        <div className="container mx-auto px-4 max-w-6xl text-gray-300">
          <h3 className="text-3xl font-semibold text-yellow-400 mb-12 text-center">
            Why Choose Us for Karachi Escorts Service?
          </h3>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Point 1 */}
            <div>
              <h4 className="text-xl font-medium text-white mb-4">
                100% Verified Karachi Escorts
              </h4>
              <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden border border-yellow-500/20 shadow-lg mb-6">
                <img src="/hm3.jpg" alt="Verified Karachi Escorts" className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-400 leading-relaxed">
                Every escort is personally verified. We only work with real, beautiful, and professional <strong>Karachi escorts</strong>.
              </p>
            </div>

            {/* Point 2 */}
            <div>
              <h4 className="text-xl font-medium text-white mb-4">
                Fast Outcall Service Across Karachi
              </h4>
              <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden border border-yellow-500/20 shadow-lg mb-6">
                <img src="/hm4.jpg" alt="Fast Outcall Escorts in Karachi" className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-400 leading-relaxed">
                We provide quick outcall service to all major areas including DHA, Clifton, PECHS, Nazimabad, Gulshan, and top hotels.
              </p>
            </div>

            {/* Point 3 */}
            <div>
              <h4 className="text-xl font-medium text-white mb-4">
                Escorts in Marriott Hotel Karachi
              </h4>
              <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden border border-yellow-500/20 shadow-lg mb-6">
                <img src="/hm5.jpg" alt="Escorts in Marriott Hotel Karachi" className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-400 leading-relaxed">
                Special service for guests staying at <strong>Marriott Hotel Karachi</strong> and other 5-star hotels with full discretion.
              </p>
            </div>

            {/* Point 4 */}
            <div>
              <h4 className="text-xl font-medium text-white mb-4">
                24/7 Availability – Day or Night
              </h4>
              <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden border border-yellow-500/20 shadow-lg mb-6">
                <img src="/hm6.jpg" alt="24/7 Karachi Escorts Service" className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-400 leading-relaxed">
                Need <strong>escorts in Karachi</strong> at midnight or early morning? We are available 24 hours a day, 7 days a week.
              </p>
            </div>

            {/* Point 5 */}
            <div>
              <h4 className="text-xl font-medium text-white mb-4">
                Complete Privacy &amp; Discretion
              </h4>
              <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden border border-yellow-500/20 shadow-lg mb-6">
                <img src="/hm7.jpg" alt="Discreet Escorts in Karachi" className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-400 leading-relaxed">
                Your safety and privacy are our top priority when you book <strong>Karachi escorts</strong> with us.
              </p>
            </div>

            {/* Point 6 */}
            <div>
              <h4 className="text-xl font-medium text-white mb-4">
                Satisfaction Guaranteed
              </h4>
              <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden border border-yellow-500/20 shadow-lg mb-6">
                <img src="/hm8.jpg" alt="Satisfaction Guaranteed Karachi Escorts" className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-400 leading-relaxed">
                We ensure every client is 100% satisfied with our <strong>escorts in Karachi</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4 max-w-6xl text-gray-300">
          <h3 className="text-3xl font-semibold text-yellow-400 mb-6 text-center">
            Our Escort Services in Karachi
          </h3>

          <ul className="list-disc pl-6 space-y-3 text-lg max-w-3xl mx-auto">
            <li>Short time &amp; full night escorts in Karachi</li>
            <li>Outcall services to hotels, homes &amp; guest houses</li>
            <li>Romantic dinner dates with <strong>Karachi escorts</strong></li>
            <li>Body massage with happy ending</li>
            <li>Girlfriend Experience (GFE)</li>
            <li>VIP and model escorts in Karachi</li>
          </ul>
        </div>
      </section>

      {/* AREAS & HOTELS - SEO Heavy Section */}
      <section className="bg-gradient-to-b from-black via-gray-900 to-black py-24">
        <div className="container mx-auto px-4 max-w-6xl text-gray-300">
          <h2 className="text-4xl font-light text-white mb-10 text-center">
            Escorts in Karachi – Available Across All Major Areas
          </h2>

          <div className="space-y-16">
            <div>
              <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Escorts in DHA Karachi</h3>
              <p className="leading-relaxed">
                Looking for <strong>escorts in DHA Karachi</strong>? Our premium DHA escorts are elegant, sophisticated, and perfect for discerning gentlemen.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Escorts in Clifton Karachi</h3>
              <p className="leading-relaxed">
                Experience the best <strong>Clifton Karachi escorts</strong> near Seaview, Boat Basin, and Dolmen Mall.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Escorts in Marriott Hotel Karachi</h3>
              <p className="leading-relaxed">
                We provide discreet <strong>escorts in Marriott Hotel Karachi</strong> with fast hotel service and complete privacy.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Escorts in Nazimabad &amp; PECHS Karachi</h3>
              <p className="leading-relaxed">
                Affordable and beautiful escorts available in Nazimabad, North Nazimabad, and PECHS Karachi with quick response.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING TABLE */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h3 className="text-3xl font-semibold text-yellow-400 mb-6 text-center">
            Karachi Escorts Price List
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full border border-yellow-500/30 text-gray-300">
              <thead className="bg-gray-900">
                <tr>
                  <th className="p-4 border border-yellow-500/30">Service</th>
                  <th className="p-4 border border-yellow-500/30">Duration</th>
                  <th className="p-4 border border-yellow-500/30">Price (PKR)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Short Time", "1 Hour", "30,000 – 65,000"],
                  ["Full Night", "8 Hours", "40,000 – 90,000"],
                  ["VIP Escort", "Custom", "60,000+"],
                  ["Massage + Happy Ending", "1 Hour", "25,000 – 40,000"],
                ].map((row, i) => (
                  <tr key={i} className="text-center border-t border-yellow-500/20">
                    {row.map((cell, j) => (
                      <td key={j} className="p-4 border border-yellow-500/20">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-br from-black to-gray-950 py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light text-white mb-6">
            Ready to Book Karachi Escorts?
          </h2>
          <p className="text-2xl text-yellow-400 mb-8">
            Call or WhatsApp Now – 03708540579
          </p>
          <a 
            href="tel:03708540579"
            className="inline-block bg-yellow-400 text-black font-bold text-2xl px-16 py-6 rounded-full hover:bg-white transition-all"
          >
            CALL 03708540579
          </a>
        </div>
      </section>
    </>
  );
}