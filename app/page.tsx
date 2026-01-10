export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-wide">
            Top-Rated Karachi Escorts | VIP Call Girls 24/7 Available – Book Now
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6">
            Welcome to rockyescortskarchi — your trusted source for verified
            Karachi escorts, VIP call girls, and elite companions available
            across DHA, Clifton, Bahria Town, and top hotels.
          </h2>

          <p className="text-lg text-yellow-400">
            📞 Call / WhatsApp: <span className="text-white">03708540579</span>
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4 max-w-5xl text-gray-300">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-6">
            Call Girls in Karachi – Verified, Sensual & Elite Companions
          </h2>

          <p className="leading-relaxed">
            At rockyescortskarchi, we offer professional, discreet, and verified
            escort services in Karachi. Whether you’re visiting for business,
            staying in a hotel, or relaxing at home, we provide companions
            tailored to your preferences with complete privacy and fast outcall.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-gradient-to-b from-gray-950 to-black py-20">
        <div className="container mx-auto px-4 max-w-6xl text-gray-300">
          <h3 className="text-2xl font-semibold text-yellow-400 mb-6">
            Why Choose rockyescortskarchi?
          </h3>

          <ul className="grid md:grid-cols-2 gap-4 list-disc pl-6">
            <li>100% real and verified escorts</li>
            <li>Fast outcall service anywhere in Karachi</li>
            <li>VIP and affordable models available</li>
            <li>24/7 availability – day & night</li>
            <li>Complete discretion and privacy</li>
            <li>Client-focused satisfaction</li>
          </ul>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4 max-w-6xl text-gray-300">
          <h3 className="text-2xl font-semibold text-yellow-400 mb-6">
            Escort Services in Karachi – Customized for Your Desires
          </h3>

          <h4 className="text-xl font-medium text-yellow-300 mb-4">
            Services We Offer
          </h4>

          <ul className="list-disc pl-6 space-y-2">
            <li>One-hour encounters to full-night stays</li>
            <li>Outcall services to hotels, homes, and guest houses</li>
            <li>Romantic dinner dates</li>
            <li>Massage with happy ending</li>
            <li>Couple-friendly escort services</li>
            <li>Travel companion escorts</li>
          </ul>
        </div>
      </section>

      {/* AREAS */}
      <section className="bg-gradient-to-br from-black to-gray-900 py-20">
        <div className="container mx-auto px-4 max-w-6xl text-gray-300">
          <h3 className="text-2xl font-semibold text-yellow-400 mb-8">
            Escort Services by Area in Karachi
          </h3>

          {[
            ["DHA Karachi Escorts", "Premium, elegant companions for upscale living."],
            ["Clifton Karachi Escorts", "Stylish escorts near Seaview and Boat Basin."],
            ["Malir Karachi Escorts", "Private, discreet outcall services."],
            ["Nazimabad Karachi Escorts", "Local girls with traditional charm."],
            ["Bahria Town Karachi Escorts", "VIP companions in modern luxury settings."],
          ].map(([title, desc], i) => (
            <div key={i} className="mb-6">
              <h4 className="text-xl text-yellow-300 font-medium">{title}</h4>
              <p className="text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING TABLE */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h3 className="text-2xl font-semibold text-yellow-400 mb-6 text-center">
            Prices of Karachi Escort Services
          </h3>

          <p className="text-gray-400 text-center mb-8">
            Transparent pricing with no hidden charges.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border border-yellow-500/30 text-gray-300">
              <thead className="bg-gray-900">
                <tr>
                  <th className="p-4 border border-yellow-500/30">Service Type</th>
                  <th className="p-4 border border-yellow-500/30">Time</th>
                  <th className="p-4 border border-yellow-500/30">Price Range (PKR)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Short-Time Fun", "1 Hour", "30,000 – 65,000"],
                  ["Full Night (Incall / Outcall)", "8 Hours", "35,000 – 80,000"],
                  ["VIP Escort", "Custom", "50,000+"],
                  ["Massage with Ending", "1 Hour", "22,000 – 32,000"],
                ].map((row, i) => (
                  <tr key={i} className="text-center">
                    {row.map((cell, j) => (
                      <td key={j} className="p-4 border border-yellow-500/20">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-yellow-400 mt-6">
            📞 Book Now: <span className="text-white">03708540579</span>
          </p>
        </div>
      </section>

      {/* BOOKING PROCESS */}
      <section className="bg-gradient-to-b from-gray-950 to-black py-20">
        <div className="container mx-auto px-4 max-w-6xl text-gray-300">
          <h3 className="text-2xl font-semibold text-yellow-400 mb-6">
            Booking Process – Easy, Discreet & Fast
          </h3>

          <ol className="list-decimal pl-6 space-y-2">
            <li>Call or WhatsApp us at 03708540579</li>
            <li>Tell us your location and preference</li>
            <li>Select from our verified girls</li>
            <li>Confirm time and rate</li>
            <li>Your escort arrives within 30–60 minutes</li>
          </ol>
        </div>
      </section>

      {/* SAFETY */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4 max-w-6xl text-gray-300">
          <h3 className="text-2xl font-semibold text-yellow-400 mb-6">
            Safety, Hygiene & Discretion
          </h3>

          <ul className="list-disc pl-6 space-y-2">
            <li>Cleanliness and health standards</li>
            <li>Strict age verification (18+ only)</li>
            <li>Complete privacy and confidentiality</li>
            <li>Legal and ethical compliance</li>
          </ul>
        </div>
      </section>

      {/* SEO KEYWORDS */}
      <section className="bg-gradient-to-br from-black to-gray-900 py-16">
        <div className="container mx-auto px-4 max-w-6xl text-gray-500 text-sm leading-relaxed">
          <p>
            Karachi Escorts, Escorts in Karachi, VIP Karachi Escorts, Karachi Call
            Girls, Independent Escorts Karachi, Model Escorts in Karachi, DHA
            Karachi Escorts, Clifton Karachi Escorts, Bahria Town Karachi Escorts,
            Hotel Escorts Karachi, Outcall Escorts Karachi, Massage with Happy
            Ending Karachi, GFE Escorts Karachi, Full Service Escorts Karachi
          </p>
        </div>
      </section>
    </>
  );
}
