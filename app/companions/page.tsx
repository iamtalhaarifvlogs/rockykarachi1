
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Escorts in Karachi | VIP Companions",
  description:
    "Premium Escorts in Karachi. Elite VIP companions in Bahria Town, Clifton, DHA and PECHS. Discreet service. Call 03708540579.",
  openGraph: {
    title: "Premium Escorts in Karachi | VIP Companions",
    description: "Book premium VIP escorts in Bahria Town, Clifton, DHA, PECHS. Call 03708540579",
    images: [{ url: "/karachi-escorts-vip-call-girls-hero.jpg" }],
  },
};

export default function CompanionsPage() {
  const bahriaImages = [
    "/24-7-escorts-karachi-available.jpg",
    "/real-verified-call-girls-karachi.jpg",
    "/exclusive-vip-escorts-karachi.jpg",
    "/beautiful-call-girls-karachi.jpg",
    "/sexy-escorts-in-karachi.jpg",
    "/top-rated-escorts-karachi.jpg",
  ];

  const cliftonImages = [
    "/independent-call-girls-karachi-01.jpg",
    "/discreet-escorts-karachi-outcall.jpg",
    "/private-call-girls-karachi.jpg",
    "/hotel-outcall-escorts-karachi.jpg",
    "/karachi-call-girls-ayesha-independent.jpg",
    "/vip-model-escorts-karachi-clifton.jpg",
  ];

  const pechsImages = [
    "/top-rated-escorts-karachi.jpg",
    "/affordable-call-girls-karachi.jpg",
    "/night-service-escorts-karachi.jpg",
    "/full-service-escorts-karachi.jpg",
    "/companion-girls-karachi-vip.jpg",
    "/karachi-call-girls-hina-outcall.jpg",
  ];

  const dhaImages = [
    { name: "Sara", img: "/karachi-call-girls-sara-vip.jpg" },
    { name: "Ayesha", img: "/karachi-call-girls-ayesha-independent.jpg" },
    { name: "Zara", img: "/karachi-call-girls-zara-premium.jpg" },
    { name: "Hina", img: "/karachi-call-girls-hina-outcall.jpg" },
    { name: "Alina", img: "/vip-model-escorts-karachi-dha.jpg" },
    { name: "Noor", img: "/vip-model-escorts-karachi-clifton.jpg" },
  ];

  const moreLikeThis = [
    { img: "/escorts-in-dha-karachi-vip.jpg", title: "VIP Escorts in DHA", link: "/portfolio/vip-escorts-dha-karachi" },
    { img: "/escorts-in-clifton-karachi-call-girls.jpg", title: "Call Girls in Clifton", link: "/portfolio/escorts-clifton-karachi" },
    { img: "/escorts-in-bahria-town-karachi.jpg", title: "Bahria Town Escorts", link: "/portfolio/escorts-bahria-town-karachi" },
    { img: "/al-harmain-hotel-escorts-karachi.jpg", title: "Al Harmain Hotel Escorts", link: "/escorts-in-al-harmain-hotel" },
  ];

  return (
    <main className="bg-[#0a0a0a] text-gray-200">
      {/* HERO */}
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/karachi-escorts-vip-call-girls-hero.jpg"
          alt="Premium Escorts in Karachi Elite VIP Companions"
          fill
          priority
          className="object-cover object-[center_20%]"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Premium Escorts in Karachi
            <span className="block text-[#c9a86c] mt-2 text-2xl md:text-3xl">
              Elite VIP Companions
            </span>
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Elite VIP companions in Bahria Town, Clifton, DHA, PECHS and more
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/923708540579" target="_blank" className="inline-block bg-[#c9a86c] text-black font-semibold px-10 py-4 rounded-full hover:bg-white transition">
              WhatsApp 03708540579
            </a>
            <a href="tel:03708540579" className="inline-block border border-[#c9a86c] text-[#c9a86c] font-semibold px-10 py-4 rounded-full hover:bg-[#c9a86c] hover:text-black transition">
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Looking for <strong>Premium Escorts in Karachi</strong>? We provide elite VIP female companions 
            for discreet meetings in Bahria Town, Clifton, DHA and PECHS. All profiles are verified.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Book high-class <strong>VIP Companions</strong> for short time or full night. Fast response and 
            complete privacy guaranteed. Call or WhatsApp 03708540579.
          </p>
        </div>
      </section>

      {/* BAHRIA TOWN */}
      <section id="bahria-town" className="py-16 px-6 bg-[#111]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#c9a86c] mb-4">
            Escorts in Bahria Town Karachi
          </h2>
          <p className="text-center text-gray-300 max-w-3xl mx-auto mb-10">
            Premium VIP female escorts and luxury companions available in Bahria Town Karachi. 
            Discreet, professional and high-class service for elite clients.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {bahriaImages.map((img, idx) => (
              <div key={idx} className="relative aspect-[3/4] rounded-xl overflow-hidden border border-[#c9a86c]/20">
                <Image src={img} alt={`Escorts in Bahria Town Karachi companion ${idx + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIFTON */}
      <section id="clifton" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#c9a86c] mb-4">
            Escorts in Clifton Karachi
          </h2>
          <p className="text-center text-gray-300 max-w-3xl mx-auto mb-10">
            Top-rated escorts in Clifton near Seaview, Boat Basin and Dolmen Mall. 
            Elegant and sophisticated companions for private evenings.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {cliftonImages.map((img, idx) => (
              <div key={idx} className="relative aspect-[3/4] rounded-xl overflow-hidden border border-[#c9a86c]/20">
                <Image src={img} alt={`Escorts in Clifton Karachi companion ${idx + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PECHS */}
      <section id="pechs" className="py-16 px-6 bg-[#111]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#c9a86c] mb-4">
            Escorts in PECHS Karachi
          </h2>
          <p className="text-center text-gray-300 max-w-3xl mx-auto mb-10">
            Verified VIP escorts and call girls in PECHS Karachi. Fast outcall and discreet service.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {pechsImages.map((img, idx) => (
              <div key={idx} className="relative aspect-[3/4] rounded-xl overflow-hidden border border-[#c9a86c]/20">
                <Image src={img} alt={`Escorts in PECHS Karachi companion ${idx + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DHA */}
      <section id="dha" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#c9a86c] mb-4">
            Escorts in DHA Karachi
          </h2>
          <p className="text-center text-gray-300 max-w-3xl mx-auto mb-10">
            Elite VIP companions in DHA Phase 5 and Phase 6. Luxury and complete discretion.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {dhaImages.map((model) => (
              <div key={model.name} className="bg-[#111] border border-[#c9a86c]/20 rounded-xl overflow-hidden">
                <div className="relative aspect-[3/4]">
                  <Image src={model.img} alt={`${model.name} Escorts in DHA Karachi`} fill className="object-cover" />
                </div>
                <div className="p-3 text-center">
                  <p className="font-medium text-white">{model.name}</p>
                  <Link href="/contact" className="text-xs text-[#c9a86c] hover:underline">
                    Book {model.name}
                  </Link>
                </div>
              </div>
            ))}
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
              { q: "Do you provide Premium Escorts in Bahria Town, Clifton, DHA and PECHS?", a: "Yes. We cover all major areas including Bahria Town, Clifton, DHA Phase 5 & 6, and PECHS." },
              { q: "Are the VIP companions verified with real photos?", a: "Yes. All profiles are verified with real photos. We do not use fake images." },
              { q: "Is the service completely discreet?", a: "Yes. Privacy and discretion are our highest priority for every booking." },
              { q: "How can I book a premium companion in Karachi?", a: "WhatsApp or call 03708540579. Share your preferred area and time for quick confirmation." },
              { q: "Do you provide hotel outcall service?", a: "Yes. Discreet hotel outcall is available across Karachi including major hotels." },
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
                  <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-105 transition duration-500" />
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