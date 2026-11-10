import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Karachi Escorts | Call Girls in Karachi 24/7",
  description:
    "Premium Karachi Escorts and Call Girls available 24/7. Verified VIP escorts in DHA, Clifton, Bahria Town and hotels. Discreet outcall. Call 03708540579.",
  openGraph: {
    title: "Karachi Escorts | Call Girls in Karachi 24/7",
    description: "Verified VIP escorts and call girls across Karachi. Call 03708540579.",
    images: [{ url: "/escorts-in-dha-karachi-vip.jpg" }],
  },
};

export default function HomePage() {
  const featuredModels = [
    { name: "Sara", img: "/karachi-call-girls-sara-vip.jpg", location: "DHA Karachi", desc: "Elegant VIP companion" },
    { name: "Ayesha", img: "/karachi-call-girls-ayesha-independent.jpg", location: "Clifton", desc: "Independent & sophisticated" },
    { name: "Zara", img: "/karachi-call-girls-zara-premium.jpg", location: "Bahria Town", desc: "Premium exclusive model" },
    { name: "Hina", img: "/karachi-call-girls-hina-outcall.jpg", location: "PECHS", desc: "Discreet outcall specialist" },
    { name: "Mehwish", img: "/luxury-call-girls-karachi.jpg", location: "Hotel", desc: "Hotel-friendly escort" },
    { name: "Sana", img: "/karachi-call-girls-sana-discreet.jpg", location: "Karachi", desc: "Fully discreet companion" },
    { name: "Alina", img: "/vip-model-escorts-karachi-dha.jpg", location: "DHA", desc: "High-class DHA model" },
    { name: "Noor", img: "/vip-model-escorts-karachi-clifton.jpg", location: "Clifton", desc: "Stylish Clifton companion" },
    { name: "Fatima", img: "/vip-model-escorts-karachi-bahria.jpg", location: "Bahria Town", desc: "Luxury companion" },
    { name: "Iqra", img: "/vip-model-escorts-karachi-pechs.jpg", location: "PECHS", desc: "Elegant personality" },
    { name: "Maham", img: "/high-class-escorts-karachi.jpg", location: "High Class", desc: "Premium high-class" },
    { name: "Laiba", img: "/luxury-call-girls-karachi.jpg", location: "Luxury", desc: "Luxury experience" },
    { name: "Anaya", img: "/independent-escorts-karachi-real.jpg", location: "Independent", desc: "Real independent escort" },
    { name: "Hira", img: "/professional-escorts-service-karachi.jpg", location: "Professional", desc: "Professional service" },
    { name: "Saba", img: "/24-7-escorts-karachi-available.jpg", location: "24/7", desc: "Available any time" },
    { name: "Kinza", img: "/exclusive-vip-escorts-karachi.jpg", location: "Exclusive", desc: "Exclusive VIP" },
  ];

  const moreLikeThis = [
    { img: "/escorts-in-dha-karachi-vip.jpg", title: "VIP Escorts DHA Karachi", link: "/portfolio/vip-escorts-dha-karachi" },
    { img: "/escorts-in-clifton-karachi-call-girls.jpg", title: "Call Girls in Clifton", link: "/portfolio/escorts-clifton-karachi" },
    { img: "/escorts-in-bahria-town-karachi.jpg", title: "Bahria Town Escorts", link: "/portfolio/escorts-bahria-town-karachi" },
    { img: "/al-harmain-hotel-escorts-karachi.jpg", title: "Al Harmain Hotel Escorts", link: "/escorts-in-al-harmain-hotel" },
  ];

  return (
    <main className="bg-[#0a0a0a] text-gray-200">
      {/* HERO */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/escorts-in-dha-karachi-vip.jpg"
          alt="Karachi Escorts and Call Girls available 24/7"
          fill
          priority
          className="object-cover object-[center_20%]"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Karachi Escorts & Call Girls
            <span className="block text-[#c9a86c] mt-2 text-2xl md:text-3xl">Available 24/7</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Verified VIP call girls and elite companions in DHA, Clifton, Bahria Town, PECHS and major hotels across Karachi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/923708540579"
              target="_blank"
              className="inline-block bg-[#c9a86c] text-black font-semibold px-10 py-4 rounded-full hover:bg-white transition"
            >
              WhatsApp 03708540579
            </a>
            <a
              href="tel:03708540579"
              className="inline-block border border-[#c9a86c] text-[#c9a86c] font-semibold px-10 py-4 rounded-full hover:bg-[#c9a86c] hover:text-black transition"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* INTRO - Multiple paragraphs for Seobility */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#c9a86c] mb-8">
            Premium Karachi Escorts Service
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Looking for reliable <strong>Karachi Escorts</strong>? Our agency provides verified and professional 
            <strong> Call Girls in Karachi</strong> for both incall and outcall. Every companion is selected for elegance, 
            personality and complete discretion. We operate 24/7 so you can book anytime.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Whether you need <strong>escorts in Karachi</strong> for a short meeting or full night companionship, 
            our team ensures fast response and total privacy. Popular areas include DHA, Clifton, Bahria Town, 
            PECHS, Gulshan and major hotels.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            All <strong>Karachi call girls</strong> profiles use real photos. We do not publish fake images. 
            Book through WhatsApp or direct call on 03708540579 for quick confirmation.
          </p>

          {/* Scenario A: Contextual H3 Interlinking Block */}
          <div className="bg-[#111] border border-[#c9a86c]/30 rounded-2xl p-6 mt-8">
            <h3 className="text-xl font-semibold text-[#c9a86c] mb-2">Explore Related VIP Portals</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Seeking additional verified options and extended agency choices in Karachi? Take a look at{" "}
              <a 
                href="https://pakistanmodelshub.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#c9a86c] underline hover:text-white transition"
              >
                Pakistan Models Hub
              </a>{" "}
              and{" "}
              <a 
                href="https://elitekarachimodels.online/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#c9a86c] underline hover:text-white transition"
              >
                Elite Karachi Models
              </a>{" "}
              for diverse portfolios, independent model profiles, and executive companion bookings across all top hotels.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED MODELS */}
      <section className="py-16 px-6 bg-[#111]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#c9a86c] mb-4">
            Featured VIP Companions
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Browse our selection of verified Karachi Escorts and Call Girls. Each profile is real and available for booking.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredModels.map((model) => (
              <div
                key={model.name}
                className="bg-[#0a0a0a] border border-[#c9a86c]/20 rounded-2xl overflow-hidden hover:border-[#c9a86c]/50 transition"
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={model.img}
                    alt={`${model.name} Karachi Escort in ${model.location}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="text-lg font-semibold text-white">{model.name}</p>
                  <p className="text-sm text-[#c9a86c] mb-1">{model.location}</p>
                  <p className="text-gray-400 text-xs mb-3">{model.desc}</p>
                  <Link
                    href="/contact"
                    className="inline-block w-full bg-[#c9a86c] text-black py-2 rounded-lg text-sm font-medium hover:bg-white transition"
                  >
                    Book {model.name} Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TYPES */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#c9a86c] mb-4">
            Types of Escorts Available
          </h2>
          <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
            From VIP model escorts to independent call girls, we cover every preference across Karachi.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "VIP Model Escorts",
              "College Girls",
              "Independent Escorts",
              "Young Call Girls",
              "MILF & Mature",
              "Aunties",
              "GFE Companions",
              "Hotel Outcall",
              "Full Night Service",
              "Luxury Elite",
              "TikTokers",
              "Professionals",
            ].map((type) => (
              <div
                key={type}
                className="bg-[#111] border border-[#c9a86c]/20 rounded-xl py-4 text-center text-sm hover:border-[#c9a86c]/50 transition"
              >
                {type}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-16 px-6 bg-[#111]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#c9a86c] mb-4">
            Why Choose Rocky Escorts Karachi
          </h2>
          <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
            Clients trust us for verified Karachi Escorts, fast response and complete privacy.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Verified Profiles", desc: "Real photos only. No fake profiles of Karachi call girls." },
              { title: "Complete Privacy", desc: "Discreet handling of every escort booking in Karachi." },
              { title: "24/7 Availability", desc: "Day and night service for Karachi Escorts across the city." },
              { title: "Hotel Friendly", desc: "Experienced in discreet hotel outcall for call girls." },
              { title: "Wide Coverage", desc: "DHA, Clifton, Bahria Town, PECHS and more areas covered." },
              { title: "Professional Service", desc: "Respectful and high-class companionship every time." },
            ].map((item) => (
              <div key={item.title} className="bg-[#0a0a0a] border border-[#c9a86c]/20 rounded-2xl p-6">
                <p className="text-lg font-semibold text-[#c9a86c] mb-2">{item.title}</p>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-[#c9a86c] mb-4">Service Charges</h2>
          <p className="text-center text-gray-400 mb-8">
            Transparent rates for Karachi Escorts and Call Girls. Final price depends on model and duration.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-[#c9a86c]/20">
            <table className="w-full text-left">
              <thead className="bg-[#111]">
                <tr>
                  <th className="p-4 text-[#c9a86c]">Category</th>
                  <th className="p-4 text-[#c9a86c] text-center">Short Time</th>
                  <th className="p-4 text-[#c9a86c] text-center">Full Night</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-t border-[#c9a86c]/10">
                  <td className="p-4">College / Young Girls</td>
                  <td className="p-4 text-center">30,000 – 45,000</td>
                  <td className="p-4 text-center">60,000 – 80,000</td>
                </tr>
                <tr className="border-t border-[#c9a86c]/10">
                  <td className="p-4">VIP Escorts</td>
                  <td className="p-4 text-center">50,000 – 80,000</td>
                  <td className="p-4 text-center">100,000 – 150,000</td>
                </tr>
                <tr className="border-t border-[#c9a86c]/10">
                  <td className="p-4">Model / Elite</td>
                  <td className="p-4 text-center">80,000 – 150,000</td>
                  <td className="p-4 text-center">150,000+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-[#111]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-[#c9a86c] mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Are Karachi Escorts on this site real?",
                a: "Yes. All Karachi call girls profiles are verified with real photos. We do not use fake pictures.",
              },
              {
                q: "Which areas do you cover for escorts in Karachi?",
                a: "DHA, Clifton, Bahria Town, PECHS, Gulshan-e-Iqbal, Bahadurabad, Nazimabad and major hotels.",
              },
              {
                q: "How do I book Call Girls in Karachi?",
                a: "WhatsApp or call 03708540579. Share your location and preferred time for quick confirmation.",
              },
              {
                q: "Do you provide hotel outcall for Karachi Escorts?",
                a: "Yes. Discreet hotel outcall is available across Karachi for short time and full night.",
              },
              {
                q: "Is the service available 24/7?",
                a: "Yes. Karachi Escorts and Call Girls are available day and night including late bookings.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-[#0a0a0a] border border-[#c9a86c]/20 rounded-xl p-5">
                <p className="font-semibold text-[#c9a86c] mb-1">{item.q}</p>
                <p className="text-gray-400 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MORE LIKE THIS */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-[#c9a86c] mb-10">
            Explore More Areas
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {moreLikeThis.map((item) => (
              <Link
                key={item.title}
                href={item.link}
                className="group block rounded-2xl overflow-hidden border border-[#c9a86c]/20 hover:border-[#c9a86c]/50 transition"
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-3 bg-[#111] text-center text-sm">{item.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}