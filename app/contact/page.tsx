import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Rocky Escorts Karachi | Book VIP Call Girls",
  description:
    "Contact Rocky Escorts Karachi for verified VIP call girls in DHA, Clifton, Bahria Town and hotels. Fast WhatsApp booking. Call 03708540579.",
  openGraph: {
    title: "Contact Rocky Escorts Karachi | Book VIP Call Girls",
    description: "Fast and discreet booking for verified Karachi escorts. WhatsApp 03708540579.",
    images: [{ url: "/karachi-escorts-vip-call-girls-hero.jpg" }],
  },
};

export default function ContactPage() {
  return (
    <main className="bg-[#0a0a0a] text-gray-200">
      {/* HERO WITH CTA */}
      <section className="relative min-h-[80vh] flex items-center justify-center text-center px-6">
        <Image
          src="/karachi-escorts-vip-call-girls-hero.jpg"
          alt="Contact Rocky Escorts Karachi Book VIP Call Girls"
          fill
          priority
          className="object-cover opacity-40 object-[center_20%]"
        />
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Rocky Escorts Karachi
            <span className="block text-[#c9a86c] mt-2 text-2xl md:text-3xl">
              Book VIP Call Girls 24/7
            </span>
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Fast response • Verified profiles • Complete privacy
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

      {/* CONTACT INFO */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-[#c9a86c] mb-6">How to Book</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          Booking with <strong>Rocky Escorts Karachi</strong> is simple and private. 
          WhatsApp is the fastest way to confirm availability of VIP Call Girls. You can also call directly.
        </p>
        <p className="text-gray-300 leading-relaxed mb-10">
          We provide verified escorts and companions for hotel, home and private meetings across Karachi including 
          DHA, Clifton, Bahria Town, PECHS and major hotels.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-[#111] border border-[#c9a86c]/20 rounded-xl p-6 text-center">
            <p className="text-lg font-semibold text-[#c9a86c] mb-3">WhatsApp</p>
            <p className="text-gray-400 text-sm mb-4">Fastest and most private way to book.</p>
            <a href="https://wa.me/923708540579" target="_blank" className="text-[#c9a86c] font-medium hover:underline">
              03708540579
            </a>
          </div>
          <div className="bg-[#111] border border-[#c9a86c]/20 rounded-xl p-6 text-center">
            <p className="text-lg font-semibold text-[#c9a86c] mb-3">Direct Call</p>
            <p className="text-gray-400 text-sm mb-4">Speak with our team for instant confirmation.</p>
            <a href="tel:03708540579" className="text-[#c9a86c] font-medium hover:underline">
              03708540579
            </a>
          </div>
          <div className="bg-[#111] border border-[#c9a86c]/20 rounded-xl p-6 text-center">
            <p className="text-lg font-semibold text-[#c9a86c] mb-3">Facebook</p>
            <p className="text-gray-400 text-sm mb-4">Follow for updates and information.</p>
            <Link href="https://www.facebook.com/share/1CDg2uAznc/" target="_blank" className="text-[#c9a86c] font-medium hover:underline">
              Visit Facebook Page
            </Link>
          </div>
        </div>

        {/* SERVICE AREAS */}
        <h2 className="text-3xl font-semibold text-[#c9a86c] mb-6">Areas We Cover</h2>
        <p className="text-gray-300 mb-6">
          Contact Rocky Escorts Karachi for service across these major locations:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-16 text-sm">
          {[
            { name: "DHA Karachi Escorts", link: "/portfolio/vip-escorts-dha-karachi" },
            { name: "Clifton Call Girls", link: "/portfolio/escorts-clifton-karachi" },
            { name: "Bahria Town Escorts", link: "/portfolio/escorts-bahria-town-karachi" },
            { name: "PECHS Escorts", link: "/portfolio/escorts-pechs-karachi" },
            { name: "Gulshan-e-Iqbal", link: "/portfolio/escorts-gulshan-e-iqbal-karachi" },
            { name: "Bahadurabad", link: "/escorts-in-bahadurabad" },
            { name: "Al Harmain Hotel", link: "/escorts-in-al-harmain-hotel" },
            { name: "Nazimabad", link: "/contact" },
            { name: "Major Hotels", link: "/contact" },
          ].map((area) => (
            <Link
              key={area.name}
              href={area.link}
              className="bg-[#111] border border-[#c9a86c]/15 rounded-lg py-3 px-4 text-center hover:border-[#c9a86c]/40 transition"
            >
              {area.name}
            </Link>
          ))}
        </div>

        {/* FAQ */}
        <h2 className="text-3xl font-semibold text-[#c9a86c] mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {[
            { q: "What is the best way to contact Rocky Escorts Karachi?", a: "WhatsApp on 03708540579 is the fastest and most private method. You can also call the same number." },
            { q: "How long does it take to get a response?", a: "Most messages are answered within a few minutes. We are available 24 hours a day." },
            { q: "Can I book VIP Call Girls for a hotel in Karachi?", a: "Yes. We provide discreet hotel outcall service across Karachi including DHA, Clifton, Bahria Town and major hotels." },
            { q: "Do I need to share personal details?", a: "Only basic information needed for booking (location and preferred time). Complete privacy is maintained." },
            { q: "Is advance payment required?", a: "Usually payment is done after the companion arrives. Details are confirmed at the time of booking." },
            { q: "Do you serve areas outside DHA and Clifton?", a: "Yes. We also cover Bahria Town, PECHS, Gulshan-e-Iqbal, Bahadurabad, Nazimabad and other major parts of Karachi." },
          ].map((item, i) => (
            <div key={i} className="bg-[#111] border border-[#c9a86c]/20 rounded-xl p-5">
              <p className="font-semibold text-[#c9a86c] mb-1">{item.q}</p>
              <p className="text-gray-400 text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}