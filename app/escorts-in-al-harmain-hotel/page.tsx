import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Escorts in Al Harmain Hotel Karachi | VIP Call Girls Al Harmain 03708540579",
  description:
    "Premium VIP Escorts in Al Harmain Hotel Karachi. Beautiful models, college girls & high-class companions for hotel service. Fast delivery & complete privacy. Call 03708540579",
  keywords: [
    "escorts in al harmain hotel karachi",
    "al harmain hotel call girls",
    "vip escorts al harmain",
    "hotel escorts karachi",
    "al harmain hotel escorts",
    "call girls in al harmain hotel",
    "vip models al harmain",
    "escort service al harmain hotel",
  ],
  openGraph: {
    title: "Escorts in Al Harmain Hotel Karachi | VIP Call Girls",
    description:
      "Luxury VIP Escorts & Models available at Al Harmain Hotel Karachi. Discreet and fast service. Call 03708540579",
    images: [{ url: "/al-harmain-hotel-escorts-karachi.jpg" }],
  },
};

export default function AlHarmainHotelEscortsPage() {
  const galleryImages = [
    "/independent-call-girls-karachi-01.jpg",
    "/discreet-escorts-karachi-outcall.jpg",
    "/private-call-girls-karachi.jpg",
    "/hotel-outcall-escorts-karachi.jpg",
    "/24-7-escorts-karachi-available.jpg",
    "/real-verified-call-girls-karachi.jpg",
    "/exclusive-vip-escorts-karachi.jpg",
  ];

  const moreLikeThis = [
    {
      img: "/karachi-call-girls-sara-vip.jpg",
      title: "VIP Escorts in DHA Karachi",
      link: "/companions#dha",
    },
    {
      img: "/karachi-call-girls-ayesha-independent.jpg",
      title: "Escorts in Clifton Karachi",
      link: "/companions#clifton",
    },
    {
      img: "/karachi-call-girls-zara-premium.jpg",
      title: "Escorts in Bahria Town",
      link: "/companions#bahria-town",
    },
    {
      img: "/karachi-call-girls-hina-outcall.jpg",
      title: "Escorts in PECHS Karachi",
      link: "/companions#pechs",
    },
  ];

  return (
    <main className="bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/al-harmain-hotel-escorts-karachi.jpg"
            alt="Escorts in Al Harmain Hotel Karachi - VIP Call Girls"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Escorts in Al Harmain Hotel Karachi
            <br />
            <span className="text-[#FFD700]">Call Now 03708540579</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            VIP Models • College Girls • Elite Companions
            <br />
            Hotel Outcall Service • Fast Delivery • 100% Privacy
          </p>
          <a
            href="tel:03708540579"
            className="mt-10 inline-block bg-[#FFD700] hover:bg-amber-300 text-black font-bold text-xl px-16 py-5 rounded-full transition-all shadow-lg"
          >
            CALL / WHATSAPP 03708540579
          </a>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Premium Escorts in Al Harmain Hotel Karachi
          </h2>
          <p className="text-lg text-white/80 max-w-4xl mx-auto leading-relaxed">
            Looking for reliable <strong>escorts in Al Harmain Hotel Karachi</strong>? 
            We provide verified VIP call girls, college girls and high-class companions 
            for discreet hotel outcall service. Our professional team ensures fast delivery, 
            real photos and complete privacy for every client staying at Al Harmain Hotel.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#FFD700]">
            Why Choose Our Al Harmain Hotel Escorts?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              ["Fast Hotel Delivery", "20-35 minutes directly to your room at Al Harmain Hotel"],
              ["Complete Privacy", "Safe, discreet and professional hotel escort service"],
              ["Real & Verified Girls", "Genuine profiles with real photos of Karachi escorts"],
              ["All Categories", "VIP Models, College Girls, Independent Escorts & More"],
              ["Hotel Friendly", "Experienced in smooth and discreet hotel entry"],
              ["24/7 Availability", "Escorts available day and night in Al Harmain Hotel"],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="bg-zinc-900 p-8 rounded-2xl border border-[#FFD700]/20 hover:border-[#FFD700] transition-all"
              >
                <h3 className="font-bold text-xl mb-3 text-[#FFD700]">{title}</h3>
                <p className="text-white/80">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Escorts */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Types of Escorts Available at Al Harmain Hotel
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "VIP Model Escorts",
              "College & University Girls",
              "Fashion Models",
              "Independent Escorts",
              "GFE Romantic Escorts",
              "Luxury Elite Escorts",
            ].map((type) => (
              <div
                key={type}
                className="bg-black border border-[#FFD700]/30 p-8 rounded-2xl text-center hover:border-[#FFD700] transition-all"
              >
                <p className="font-semibold text-lg">{type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-black">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#FFD700]">
            Pricing – Escorts in Al Harmain Hotel Karachi
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-[#FFD700]/20">
            <table className="w-full border-collapse bg-zinc-900 min-w-[600px]">
              <thead>
                <tr className="bg-zinc-800">
                  <th className="p-6 text-left text-white">Category</th>
                  <th className="p-6 text-center text-white">Short Time</th>
                  <th className="p-6 text-center text-white">Full Night</th>
                </tr>
              </thead>
              <tbody className="text-white/80">
                <tr className="border-b border-zinc-800">
                  <td className="p-6">College / Normal Girls</td>
                  <td className="p-6 text-center">35,000 – 45,000</td>
                  <td className="p-6 text-center">60,000 – 80,000</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="p-6">VIP Escorts</td>
                  <td className="p-6 text-center">50,000 – 80,000</td>
                  <td className="p-6 text-center">100,000 – 150,000</td>
                </tr>
                <tr>
                  <td className="p-6">Model / Celebrity Level</td>
                  <td className="p-6 text-center">80,000 – 150,000</td>
                  <td className="p-6 text-center">150,000 – 300,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#FFD700]">
            Our Beautiful Companions at Al Harmain Hotel
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((src, idx) => (
              <div
                key={idx}
                className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#FFD700]/20"
              >
                <Image
                  src={src}
                  alt={`Escorts in Al Harmain Hotel Karachi ${idx + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#FFD700]">
            Frequently Asked Questions – Al Harmain Hotel Escorts
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How fast can escorts reach Al Harmain Hotel Karachi?",
                a: "Our escorts usually reach Al Harmain Hotel within 20-35 minutes after confirmation.",
              },
              {
                q: "Are the escorts real and verified?",
                a: "Yes, all our Karachi escorts are 100% verified with real photos. No fake profiles.",
              },
              {
                q: "Is the service discreet at Al Harmain Hotel?",
                a: "Absolutely. We provide complete privacy and professional hotel-friendly service.",
              },
              {
                q: "What payment methods are accepted?",
                a: "We accept cash payment after the companion arrives at your hotel room.",
              },
              {
                q: "Can I book for full night at Al Harmain Hotel?",
                a: "Yes, both short-time and full-night bookings are available for Al Harmain Hotel.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-zinc-900 border border-[#FFD700]/20 rounded-2xl p-6"
              >
                <h3 className="font-semibold text-lg text-[#FFD700] mb-2">
                  {item.q}
                </h3>
                <p className="text-white/80">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Like This */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#FFD700]">
            More Like This – Related Escorts in Karachi
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {moreLikeThis.map((item, idx) => (
              <Link
                key={idx}
                href={item.link}
                className="group block rounded-2xl overflow-hidden border border-[#FFD700]/20 hover:border-[#FFD700] transition-all"
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 bg-black text-center">
                  <p className="font-medium text-sm md:text-base">{item.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-black text-center border-t border-[#FFD700]/20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Book Escorts in Al Harmain Hotel Karachi Now
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Fast Delivery • Real Photos • Complete Privacy
          </p>
          <a
            href="tel:03708540579"
            className="inline-block bg-[#FFD700] text-black font-bold text-2xl md:text-3xl px-16 py-6 rounded-full hover:bg-amber-300 transition-all"
          >
            03708540579
          </a>
        </div>
      </section>
    </main>
  );
}