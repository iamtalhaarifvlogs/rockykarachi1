
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Rocky Escorts Karachi | Trusted VIP Call Girls Service in Karachi",
  description:
    "Rocky Escorts Karachi is a trusted provider of verified VIP call girls and elite companions in DHA, Clifton, Bahria Town, PECHS and major hotels. Discreet 24/7 service. Call 03708540579.",
  openGraph: {
    title: "About Rocky Escorts Karachi | Trusted VIP Call Girls",
    description: "Verified VIP escorts and discreet companions across Karachi.",
    images: [{ url: "/luxury-call-girls-karachi.jpg" }],
  },
};

export default function AboutUsPage() {
  return (
    <main className="bg-[#0a0a0a] text-gray-200">
      {/* HERO */}
      <section className="relative h-[80vh] flex items-center justify-center text-center">
        <Image
          src="/luxury-call-girls-karachi.jpg"
          alt="About Rocky Escorts Karachi - VIP Call Girls"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            About Rocky Escorts Karachi
            <span className="block text-[#c9a86c] mt-3 text-2xl md:text-3xl">
              Trusted VIP Call Girls Service
            </span>
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Verified companions • Complete privacy • Available 24/7
          </p>
          <a
            href="https://wa.me/923708540579"
            target="_blank"
            className="inline-block bg-[#c9a86c] text-black font-semibold px-10 py-4 rounded-full hover:bg-white transition"
          >
            WhatsApp Now – 03708540579
          </a>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-[#c9a86c] mb-6">
          Who We Are
        </h2>
        <p className="text-lg leading-relaxed text-gray-300 mb-6">
          <strong>Rocky Escorts Karachi</strong> is a trusted name for premium VIP call girls and elite companions in Karachi. 
          We focus on providing verified, well-mannered and professional escorts for clients who value privacy, class and a smooth experience.
        </p>
        <p className="text-lg leading-relaxed text-gray-300 mb-6">
          Whether you are a local gentleman in DHA or Clifton, a businessman staying at a five-star hotel, or visiting Karachi for a short trip, 
          our team ensures discreet communication and reliable service. We cover major areas including 
          <Link href="/portfolio/vip-escorts-dha-karachi" className="text-[#c9a86c] hover:underline"> DHA</Link>, 
          <Link href="/portfolio/escorts-clifton-karachi" className="text-[#c9a86c] hover:underline"> Clifton</Link>, 
          <Link href="/portfolio/escorts-bahria-town-karachi" className="text-[#c9a86c] hover:underline"> Bahria Town</Link>, 
          <Link href="/portfolio/escorts-pechs-karachi" className="text-[#c9a86c] hover:underline"> PECHS</Link>, 
          Gulshan-e-Iqbal and popular hotels.
        </p>
        <p className="text-lg leading-relaxed text-gray-300 mb-12">
          Our goal is simple: real profiles, clear communication, and a respectful experience every time you book.
        </p>

        {/* WHY CHOOSE US */}
        <h2 className="text-3xl font-semibold text-[#c9a86c] mb-8">
          Why Clients Choose Rocky Escorts Karachi
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {[
            { title: "Verified Profiles Only", desc: "Every companion is verified with real photos. No fake pictures or misleading information." },
            { title: "Complete Discretion", desc: "Your privacy is our priority. All bookings and conversations remain confidential." },
            { title: "Wide Area Coverage", desc: "Available across DHA, Clifton, Bahria Town, PECHS, Gulshan, Bahadurabad and major hotels." },
            { title: "Fast Response", desc: "WhatsApp and call support available 24/7 for quick confirmation and booking." },
            { title: "Hotel & Home Service", desc: "Discreet outcall service for hotels, apartments and private residences." },
            { title: "Professional Companions", desc: "Well-mannered, elegant and experienced escorts for short time or full night." },
          ].map((item) => (
            <div key={item.title} className="bg-[#111] border border-[#c9a86c]/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-[#c9a86c] mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 className="text-3xl font-semibold text-[#c9a86c] mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4 mb-16">
          {[
            { q: "Is Rocky Escorts Karachi a real service?", a: "Yes. We provide verified VIP call girls and companions across Karachi with real photos and direct booking via WhatsApp or call." },
            { q: "Which areas of Karachi do you cover?", a: "We cover DHA Phase 5 & 6, Clifton, Bahria Town, PECHS, Gulshan-e-Iqbal, Bahadurabad, Nazimabad and major hotels including Al Harmain, Marriott and PC Hotel." },
            { q: "How do I book an escort in Karachi?", a: "Simply WhatsApp or call 03708540579. Share your location and preferred time. Our team will confirm availability quickly." },
            { q: "Do you provide hotel outcall service?", a: "Yes. We offer discreet hotel outcall service across Karachi for both short-time and full-night bookings." },
            { q: "Are the photos real?", a: "Yes. All profiles use real verified photos. We do not use fake or edited pictures." },
            { q: "Is the service available at night?", a: "Yes. We operate 24/7 including late night and early morning bookings." },
          ].map((item, i) => (
            <div key={i} className="bg-[#111] border border-[#c9a86c]/20 rounded-xl p-5">
              <h3 className="font-semibold text-[#c9a86c] mb-1">{item.q}</h3>
              <p className="text-gray-400 text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}