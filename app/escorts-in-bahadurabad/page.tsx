import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Escorts in Bahadurabad Karachi | VIP Call Girls Bahadurabad 03708540579",
  description: "Premium VIP Escorts in Bahadurabad Karachi. High-class models, college girls & celebrity companions available for hotel and home service. Fast & discreet delivery. Call 03708540579",
  keywords: [
    "escorts in bahadurabad karachi", "bahadurabad call girls", "vip escorts bahadurabad",
    "college girls bahadurabad", "housewife escorts bahadurabad", "celebrity escorts karachi",
    "bahadurabad escort service", "hotel escorts bahadurabad", "call girls bahadurabad"
  ],
  openGraph: {
    title: "Escorts in Bahadurabad Karachi | VIP Call Girls Bahadurabad",
    description: "Luxury & VIP Escorts in Bahadurabad Karachi. Real photos, complete privacy & fast service. Call 03708540579",
    images: [{ url: "/nm1.jpg" }],
  },
};

export default function BahadurabadEscortsPage() {
  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[650px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image 
            src="/nm1.jpg" 
            alt="Escorts in Bahadurabad Karachi" 
            fill 
            className="object-cover"
            priority 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            ESCORTS IN BAHADURABAD KARACHI<br />
            <span className="text-[#FFD700]">03708540579</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            VIP Models • College Girls • Celebrity Companions<br />
            Fast Delivery • 100% Privacy • Luxury Service
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
          <h2 className="text-4xl font-bold mb-6">Escorts in Bahadurabad Karachi</h2>
          <p className="text-lg text-white/80 max-w-4xl mx-auto leading-relaxed">
            Welcome to the most trusted premium escort agency in Karachi. We provide high-class 
            VIP Escorts in Bahadurabad with verified girls, real photos, and complete discretion. 
            Perfect for hotel visits, home service, short meetings, and full night bookings.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#FFD700]">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              ["Fast Delivery", "20-30 minutes in Bahadurabad and nearby areas"],
              ["Complete Privacy", "100% discretion and safe service guaranteed"],
              ["Real & Verified", "Genuine profiles with real photos"],
              ["All Categories", "VIP Models, College Girls, Housewives & Celebrity Look-Alikes"],
              ["Hotel Friendly", "Safe & professional entry in all hotels"],
              ["24/7 Availability", "Day or night service always available"],
            ].map(([title, desc]) => (
              <div key={title} className="bg-zinc-900 p-8 rounded-2xl border border-[#FFD700]/20 hover:border-[#FFD700] transition">
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
          <h2 className="text-4xl font-bold text-center mb-12">Types of Escorts in Bahadurabad</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "VIP Model Escorts", "University & College Girls", "Fashion Models",
              "Housewife Escorts", "Celebrity Look-Alike", "Independent Escorts",
              "Slim & Young Girls", "GFE Romantic Escorts", "Luxury Elite Escorts"
            ].map((type) => (
              <div key={type} className="bg-black border border-[#FFD700]/30 p-8 rounded-2xl text-center hover:border-[#FFD700] transition">
                <p className="font-semibold text-lg">{type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-black">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#FFD700]">Pricing</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-zinc-900 rounded-2xl overflow-hidden">
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
          <h2 className="text-4xl font-bold text-center mb-12 text-[#FFD700]">Our Premium Companions</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[1,2,3,4,5,6,7,8,9,10].map((n) => (
              <div key={n} className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#FFD700]/20">
                <Image 
                  src={`/nm${n}.jpg`} 
                  alt="Celebrity Escorts Bahadurabad Karachi" 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-700" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-black text-center border-t border-[#FFD700]/20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">Book Your Exclusive Escort in Bahadurabad Now</h2>
          <p className="text-xl text-white/80 mb-10">Fast • Discreet • Premium Experience</p>
          <a 
            href="tel:03708540579"
            className="inline-block bg-[#FFD700] text-black font-bold text-3xl px-20 py-7 rounded-full hover:bg-amber-300 transition-all"
          >
            03708540579
          </a>
        </div>
      </section>
    </main>
  );
}