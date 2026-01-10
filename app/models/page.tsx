import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Top-Rated Karachi Escorts | VIP Call Girls 24/7 Available – Call Now 03708540579",
  description:
    "Verified Karachi escorts, VIP call girls, and elite companions available across DHA, Clifton, Bahria Town, and top hotels. Call or WhatsApp 03708540579.",
  keywords: [
    "Karachi Escorts",
    "Call Girls in Karachi",
    "VIP Karachi Escorts",
    "Model Escorts in Karachi",
    "DHA Karachi Escorts",
    "Clifton Karachi Escorts",
    "Bahria Town Karachi Escorts",
    "Hotel Escorts Karachi",
    "Outcall Escorts Karachi",
  ],
};

export default function ModelsPage() {
  return (
    <main className="bg-black text-yellow-500 px-4 py-12">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* HERO SECTION */}
        <section className="space-y-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            Top-Rated Karachi Escorts | VIP Call Girls 24/7 Available – Call Now
            03708540579
          </h1>
          <p className="text-sm md:text-base text-yellow-400 max-w-4xl mx-auto">
            Welcome to rockyescortskarchi — your trusted source for verified
            Karachi escorts, VIP call girls, and elite companions available
            across DHA, Clifton, Bahria Town, and top hotels.
          </p>
          <p className="font-semibold">
            📞 Call / WhatsApp: <span className="underline">03708540579</span>
          </p>
        </section>

        {/* MAIN H1 KEYWORD */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-center">
            Call Girls in Karachi – Verified, Sensual & Elite Companions
          </h2>
          <p className="text-yellow-400 max-w-5xl mx-auto text-center">
            At rockyescortskarchi, we offer professional, discreet, and verified
            escort services in Karachi. Whether you’re visiting for business,
            staying in a hotel, or relaxing at home, we provide companions
            tailored to your preferences with complete privacy and fast outcall.
          </p>
        </section>

        {/* WHY CHOOSE */}
        <section className="space-y-4 max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-center">
            Why Choose rockyescortskarchi?
          </h3>
          <ul className="list-disc list-inside text-yellow-400 space-y-1">
            <li>100% real and verified escorts</li>
            <li>Fast outcall service anywhere in Karachi</li>
            <li>VIP and affordable models available</li>
            <li>24/7 availability – day & night</li>
            <li>Complete discretion and privacy</li>
            <li>Client-focused satisfaction</li>
          </ul>
        </section>

        {/* MODELS COLLAGE + CONTENT */}
        <section className="grid md:grid-cols-3 gap-10">
          {[
            {
              img: "/model1.jpg",
              title: "Escorts in DHA Karachi – Premium Girls",
              text:
                "Our DHA Karachi escorts represent elegance, class, and confidence. Ideal for upscale dates, private parties, or relaxing evenings in Phase 2 or Phase 6.",
            },
            {
              img: "/model2.jpg",
              title: "Escorts in Clifton Karachi – Sensual Experiences",
              text:
                "Clifton Karachi escorts are bold, stunning, and experienced, perfect for clients staying near Seaview, Dolmen Mall, or Boat Basin.",
            },
            {
              img: "/model3.jpg",
              title: "Escorts in Bahria Town Karachi – VIP Girls",
              text:
                "Bahria Town Karachi escorts reflect modern luxury and sophistication, perfect for elite clients seeking premium companionship.",
            },
            {
              img: "/model4.jpg",
              title: "Escorts in Malir Karachi – Full Privacy",
              text:
                "Malir Karachi escort services deliver intimate experiences with discretion, professionalism, and comfort directly to your location.",
            },
            {
              img: "/model5.jpg",
              title: "Escorts in Nazimabad Karachi – Desi Charm",
              text:
                "Nazimabad escorts offer traditional beauty, emotional warmth, and genuine companionship with fast outcall service.",
            },
            {
              img: "/model6.jpg",
              title: "VIP & Model Escorts in Karachi",
              text:
                "Our VIP Karachi escorts include models, influencers, and elite companions selected for clients who demand the best.",
            },
          ].map((item, index) => (
            <div key={index} className="space-y-4">
              <Image
                src={item.img}
                alt={item.title}
                width={400}
                height={500}
                className="rounded-xl shadow-xl"
              />
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-yellow-400 text-sm">{item.text}</p>
            </div>
          ))}
        </section>

        {/* PRICING */}
        <section className="space-y-6 max-w-5xl mx-auto">
          <h3 className="text-xl font-semibold text-center">
            Prices of Karachi Escort Services
          </h3>

          <table className="w-full border border-yellow-500/40 text-sm">
            <thead className="bg-yellow-500/10">
              <tr>
                <th className="p-3 border">Service Type</th>
                <th className="p-3 border">Time</th>
                <th className="p-3 border">Price Range (PKR)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border">Short-Time Fun</td>
                <td className="p-3 border">1 Hour</td>
                <td className="p-3 border">30,000 – 65,000</td>
              </tr>
              <tr>
                <td className="p-3 border">Full Night</td>
                <td className="p-3 border">8 Hours</td>
                <td className="p-3 border">35,000 – 80,000</td>
              </tr>
              <tr>
                <td className="p-3 border">VIP Escort</td>
                <td className="p-3 border">Custom</td>
                <td className="p-3 border">50,000+</td>
              </tr>
              <tr>
                <td className="p-3 border">Massage with Ending</td>
                <td className="p-3 border">1 Hour</td>
                <td className="p-3 border">22,000 – 32,000</td>
              </tr>
            </tbody>
          </table>

          <p className="text-center font-semibold">
            📞 Book Now: <span className="underline">03708540579</span>
          </p>
        </section>

      </div>
    </main>
  );
}
