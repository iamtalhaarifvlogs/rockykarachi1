import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title:
    "Contact Rocky Escorts Karachi | VIP Call Girls 24/7 – WhatsApp 03708540579",
  description:
    "Contact Rocky Escorts Karachi for verified VIP call girls, hotel escorts, and elite companions across DHA, Clifton, Bahria Town & top hotels. Call or WhatsApp 03708540579.",
};

export default function ContactPage() {
  return (
    <main className="bg-black text-white">
      {/* HERO SECTION */}
      <section className="relative min-h-[80vh] flex items-center justify-center text-center px-6">
        <Image
          src="/herobg.jpg"
          alt="Contact Rocky Escorts Karachi VIP Call Girls"
          fill
          priority
          className="object-cover opacity-30"
        />

        <div className="relative z-10 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-6">
            ROCKY ESCORTS KARACHI VIP CALL GIRLS – 24/7
          </h1>

          <p className="text-xl md:text-2xl mb-4">
            📞 Call / WhatsApp Now:{" "}
            <span className="font-semibold">03708540579</span>
          </p>

          <p className="text-gray-300 mt-4">
            Fast response • Complete privacy • Verified escorts only
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-12">
        <h2 className="text-3xl font-bold text-yellow-500">
          Contact Rocky Escorts Karachi – Fast, Discreet & Reliable
        </h2>

        <p className="text-gray-300 leading-relaxed">
          Looking to book verified call girls in Karachi? Rocky Escorts Karachi
          makes contacting professional escorts easy, fast, and completely
          discreet. Whether you are staying in a hotel, visiting for business,
          or relaxing at home, our team is available 24/7 to assist you.
        </p>

        <p className="text-gray-300 leading-relaxed">
          We provide VIP Karachi escorts, model escorts, and independent call
          girls across DHA, Clifton, Bahria Town, Malir, Nazimabad, Gulshan, and
          top hotels including PC Hotel, Marriott, Mövenpick, Avari Towers,
          Regent Plaza, and more.
        </p>

        {/* CONTACT OPTIONS */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="border border-yellow-500/30 rounded-xl p-6 bg-black/80">
            <h3 className="text-xl font-semibold text-yellow-500 mb-3">
              📞 Call Directly
            </h3>
            <p className="text-gray-300">
              Speak directly with our booking team for instant confirmation and
              availability.
            </p>
            <p className="mt-3 font-semibold text-white">
              Phone: 03708540579
            </p>
          </div>

          <div className="border border-yellow-500/30 rounded-xl p-6 bg-black/80">
            <h3 className="text-xl font-semibold text-yellow-500 mb-3">
              💬 WhatsApp Booking
            </h3>
            <p className="text-gray-300">
              Quick and private WhatsApp booking for Karachi escorts, hotel
              outcalls, and VIP models.
            </p>
            <p className="mt-3 font-semibold text-white">
              WhatsApp: 03708540579
            </p>
          </div>

          <div className="border border-yellow-500/30 rounded-xl p-6 bg-black/80">
            <h3 className="text-xl font-semibold text-yellow-500 mb-3">
              🔵 Facebook Page
            </h3>
            <p className="text-gray-300">
              Follow us on Facebook to view updates, models, and escort service
              information.
            </p>
            <Link
              href="https://www.facebook.com/share/1CDg2uAznc/"
              target="_blank"
              className="inline-block mt-3 text-yellow-400 hover:underline"
            >
              Visit Our Facebook Page
            </Link>
          </div>
        </div>

        {/* WHY CONTACT US */}
        <h2 className="text-3xl font-bold text-yellow-500 mt-20">
          Why Contact Rocky Escorts Karachi?
        </h2>

        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>100% verified Karachi escorts & call girls</li>
          <li>Fast response time (30–60 minutes outcall)</li>
          <li>Complete privacy & discretion guaranteed</li>
          <li>Hotel, home & guest house service available</li>
          <li>VIP, model & affordable escort options</li>
          <li>24/7 booking support – day & night</li>
        </ul>

        {/* SEO KEYWORD PARAGRAPH */}
        <p className="text-gray-400 text-sm mt-12 leading-relaxed">
          Karachi Escorts, Escorts in Karachi, VIP Karachi Escorts, Karachi Call
          Girls, Call Girls in Karachi, Independent Escorts Karachi, Model
          Escorts in Karachi, DHA Karachi Escorts, Clifton Karachi Escorts,
          Bahria Town Karachi Escorts, Hotel Escorts Karachi, Outcall Escorts
          Karachi, Massage with Happy Ending Karachi, GFE Escorts Karachi, Full
          Service Escorts Karachi.
        </p>
      </section>
    </main>
  );
}
