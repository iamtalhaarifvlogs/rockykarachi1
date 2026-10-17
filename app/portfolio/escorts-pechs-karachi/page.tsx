import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Escorts in PECHS Karachi | Premium VIP Call Girls PECHS - 03708540579",
  description:
    "Book premium Escorts in PECHS Karachi. Verified VIP call girls and luxury companions available in PECHS. Discreet outcall. Call 03708540579.",
  openGraph: {
    title: "Escorts in PECHS Karachi | VIP Call Girls",
    images: [{ url: "/escorts-in-pechs-karachi-vip.jpg" }],
  },
};

export default function PECHSEscortsKarachiPage() {
  const models = [
    { name: "Sara", img: "/karachi-call-girls-sara-vip.jpg", desc: "Elegant VIP companion" },
    { name: "Ayesha", img: "/karachi-call-girls-ayesha-independent.jpg", desc: "Independent & sophisticated" },
    { name: "Zara", img: "/karachi-call-girls-zara-premium.jpg", desc: "Premium exclusive model" },
    { name: "Hina", img: "/karachi-call-girls-hina-outcall.jpg", desc: "Discreet outcall specialist" },
    { name: "Mehwish", img: "/karachi-call-girls-mehwish-hotel.jpg", desc: "Hotel-friendly escort" },
    { name: "Sana", img: "/karachi-call-girls-sana-discreet.jpg", desc: "Fully discreet companion" },
    { name: "Alina", img: "/vip-model-escorts-karachi-dha.jpg", desc: "High-class model" },
    { name: "Noor", img: "/vip-model-escorts-karachi-clifton.jpg", desc: "Stylish & charming" },
    { name: "Fatima", img: "/vip-model-escorts-karachi-bahria.jpg", desc: "Luxury companion" },
    { name: "Iqra", img: "/vip-model-escorts-karachi-pechs.jpg", desc: "Elegant PECHS companion" },
    { name: "Maham", img: "/high-class-escorts-karachi.jpg", desc: "Premium high-class" },
    { name: "Laiba", img: "/luxury-call-girls-karachi.jpg", desc: "Luxury experience" },
    { name: "Anaya", img: "/independent-escorts-karachi-real.jpg", desc: "Real independent escort" },
    { name: "Hira", img: "/professional-escorts-service-karachi.jpg", desc: "Professional service" },
    { name: "Saba", img: "/24-7-escorts-karachi-available.jpg", desc: "Available 24/7" },
    { name: "Kinza", img: "/exclusive-vip-escorts-karachi.jpg", desc: "Exclusive VIP" },
  ];

  const moreLikeThis = [
    { img: "/escorts-in-dha-karachi-vip.jpg", title: "Escorts in DHA", link: "/portfolio/vip-escorts-dha-karachi" },
    { img: "/escorts-in-clifton-karachi-call-girls.jpg", title: "Escorts in Clifton", link: "/portfolio/escorts-clifton-karachi" },
    { img: "/escorts-in-bahria-town-karachi.jpg", title: "Escorts in Bahria Town", link: "/portfolio/escorts-bahria-town-karachi" },
    { img: "/al-harmain-hotel-escorts-karachi.jpg", title: "Al Harmain Hotel", link: "/escorts-in-al-harmain-hotel" },
  ];

  return (
    <main className="bg-[#0a0a0a] text-gray-200">
      {/* HERO - Face visible */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/escorts-in-pechs-karachi-vip.jpg"
          alt="Escorts in PECHS Karachi - VIP Call Girls"
          fill
          priority
          className="object-cover object-[center_18%]"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Escorts in PECHS Karachi
            <span className="block text-[#c9a86c] mt-2 text-2xl md:text-3xl">Call 03708540579</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8">VIP Call Girls & Luxury Companions in PECHS</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/923708540579" target="_blank" className="inline-block bg-[#c9a86c] text-black font-semibold px-10 py-4 rounded-full hover:bg-white transition">
              WhatsApp – 03708540579
            </a>
            <a href="tel:03708540579" className="inline-block border border-[#c9a86c] text-[#c9a86c] font-semibold px-10 py-4 rounded-full hover:bg-[#c9a86c] hover:text-black transition">
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* INTRO - Content Depth */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#c9a86c] mb-6 text-center">Premium Escorts in PECHS Karachi</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-5">
            Looking for high-class <strong>escorts in PECHS Karachi</strong>? We provide verified VIP call girls and luxury companions across PECHS with complete discretion.
          </p>
          <p className="text-gray-400 leading-relaxed mb-5">
            PECHS is a convenient and frequently requested area for discreet companionship. Whether you need a short meeting or a full evening, our verified escorts are available for home and hotel visits. Clients from 
            <Link href="/portfolio/vip-escorts-dha-karachi" className="text-[#c9a86c] hover:underline"> DHA</Link> and 
            <Link href="/portfolio/escorts-clifton-karachi" className="text-[#c9a86c] hover:underline"> Clifton</Link> also request PECHS based companions.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Booking is private and fast. WhatsApp or call 03708540579 with your location in PECHS and preferred time. We confirm availability quickly and maintain complete privacy.
          </p>
        </div>
      </section>

      {/* TYPES */}
      <section className="py-12 px-6 bg-[#111]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-[#c9a86c] mb-10">Types of Escorts Available in PECHS</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {["VIP Model Escorts","College Girls","Independent Escorts","Young Call Girls","MILF & Mature","Aunties","GFE Companions","Hotel Outcall","Full Night Service","Luxury Elite","TikTokers","Professionals"].map((type) => (
              <div key={type} className="bg-[#0a0a0a] border border-[#c9a86c]/20 rounded-xl py-3 text-center text-sm">{type}</div>
            ))}
          </div>
        </div>
      </section>

      {/* MODELS */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-[#c9a86c] mb-12">Featured Escorts in PECHS</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {models.map((model) => (
              <div key={model.name} className="bg-[#111] border border-[#c9a86c]/20 rounded-2xl overflow-hidden hover:border-[#c9a86c]/50 transition">
                <div className="relative aspect-[3/4]">
                  <Image src={model.img} alt={`${model.name} - Escorts in PECHS Karachi VIP Call Girl`} fill className="object-cover" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-white">{model.name}</h3>
                  <p className="text-sm text-gray-400 mb-3">{model.desc}</p>
                  <Link href="/contact" className="inline-block w-full bg-[#c9a86c] text-black py-2 rounded-lg text-sm font-medium hover:bg-white transition">
                    Book {model.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-16 px-6 bg-[#111]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-[#c9a86c] mb-10">Why Choose Us for PECHS Escorts?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Verified Profiles", desc: "Real photos and verified companions only." },
              { title: "Complete Privacy", desc: "Discreet service with full confidentiality." },
              { title: "Fast Response in PECHS", desc: "Quick confirmation across PECHS." },
              { title: "24/7 Available", desc: "Day and night service in PECHS." },
              { title: "PECHS Coverage", desc: "All major blocks of PECHS Karachi." },
              { title: "Wide Selection", desc: "From young girls to mature companions." },
            ].map((item) => (
              <div key={item.title} className="bg-[#0a0a0a] border border-[#c9a86c]/20 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-[#c9a86c] mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-[#c9a86c] mb-8">Service Charges – PECHS Karachi</h2>
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
                <tr className="border-t border-[#c9a86c]/10"><td className="p-4">College / Young Girls</td><td className="p-4 text-center">35,000 – 45,000</td><td className="p-4 text-center">60,000 – 80,000</td></tr>
                <tr className="border-t border-[#c9a86c]/10"><td className="p-4">VIP Escorts</td><td className="p-4 text-center">50,000 – 80,000</td><td className="p-4 text-center">100,000 – 150,000</td></tr>
                <tr className="border-t border-[#c9a86c]/10"><td className="p-4">Model / Elite</td><td className="p-4 text-center">80,000 – 150,000</td><td className="p-4 text-center">150,000+</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* MORE LIKE THIS */}
      <section className="py-16 px-6 bg-[#111]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-[#c9a86c] mb-10">More Like This</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {moreLikeThis.map((item) => (
              <Link key={item.title} href={item.link} className="group block rounded-2xl overflow-hidden border border-[#c9a86c]/20 hover:border-[#c9a86c]/50 transition">
                <div className="relative aspect-[3/4]">
                  <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-3 bg-[#0a0a0a] text-center text-sm">{item.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Unique Local */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-[#c9a86c] mb-10">Frequently Asked Questions – PECHS Escorts</h2>
          <div className="space-y-4">
            {[
              { q: "Do you provide escorts in PECHS Karachi?", a: "Yes. We provide verified VIP escorts across PECHS for home and hotel visits." },
              { q: "How long does it take for an escort to reach PECHS?", a: "Usually 20–35 minutes depending on your exact location and traffic." },
              { q: "Can I book a PECHS escort for a hotel?", a: "Yes. Discreet hotel outcall is available for hotels in and around PECHS." },
              { q: "Are the PECHS escort photos real?", a: "Yes. All profiles use real verified photos only. No fake images." },
              { q: "What is the best way to book escorts in PECHS?", a: "WhatsApp or call 03708540579. Share your PECHS location and preferred time for quick confirmation." },
              { q: "Do you also cover DHA and Clifton from PECHS bookings?", a: "Yes. We can arrange the same verified companions for DHA and Clifton as well." },
            ].map((item, i) => (
              <div key={i} className="bg-[#111] border border-[#c9a86c]/20 rounded-xl p-5">
                <h3 className="font-semibold text-[#c9a86c] mb-1">{item.q}</h3>
                <p className="text-gray-400 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}