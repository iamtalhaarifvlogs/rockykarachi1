// app/portfolio/vip-escorts-dha-karachi/page.tsx

import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'VIP Escorts in DHA Karachi – Exclusive & Verified Companions | Rocky Escorts',
  description:
    'Discover premium VIP escorts in DHA Karachi. Discreet, verified models for upscale evenings, outcalls to hotels, GFE, and luxury companionship in Karachi’s elite area.',
  keywords: [
    'VIP Escorts in DHA Karachi',
    'DHA Karachi Escorts',
    'Escorts in DHA Karachi',
    'VIP Escorts Karachi',
    'Karachi Escorts',
    'Escorts in Karachi',
    'High Profile Escorts Karachi',
    'Independent Escorts Karachi',
  ].join(', '),
  openGraph: {
    title: 'VIP Escorts in DHA Karachi – Exclusive Companions',
    description: 'Luxury & discreet VIP escort services in DHA Karachi – verified models, hotel outcalls, GFE available.',
    url: 'https://rockyescortskarachi.com/portfolio/vip-escorts-dha-karachi',
    type: 'website',
  },
};

export default function VipEscortsDhaKarachiPage() {
  return (
    <>
      {/* If your layout.tsx already includes Header, you may NOT need to import it again here */}
      {/* <Header />  ← uncomment only if this page needs its own variant or if layout doesn't wrap */}

      <main className="min-h-screen bg-gray-50">
        {/* Hero / Intro Section – adjust classes to match your theme */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-100">
          <div className="container mx-auto px-4 max-w-6xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-6">
              VIP Escorts in DHA Karachi – Call Now For The Best Experience 03708540579
            </h1>

            <p className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto leading-relaxed mb-10">
              Imagine stepping into Karachi's most prestigious neighbourhood with a stunning, sophisticated companion by your side — turning heads at fine dining, private events, or intimate hotel evenings. 
              Our verified VIP escorts in DHA Karachi deliver discretion, elegance, and tailored experiences for discerning gentlemen.
            </p>
          </div>
        </section>

        {/* Profiles Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-10 text-center">
              Featured VIP Escorts in DHA Karachi
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {/* Example profile card – duplicate & customize with real data */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-80">
                  <Image
                    src="/dha-escort1.jpg"
                    alt="VIP escort in DHA Karachi – elegant companion"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Aisha – 24</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    GFE specialist • Outcall to DHA hotels • Discreet & verified • Starting 18,000 PKR
                  </p>
                  <Link
                    href="/contact"
                    className="block w-full text-center bg-rose-600 hover:bg-rose-700 text-white font-medium py-3 rounded-lg transition-colors"
                  >
                    Contact via WhatsApp
                  </Link>
                </div>
              </div>

              {/* Repeat similar blocks for 3–6 more profiles */}
              {/* ... add more <div> cards here ... */}

            </div>
          </div>
        </section>

        {/* Why Choose / Benefits */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8 text-center">
              Why Gentlemen Choose Our DHA VIP Escorts
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                DHA remains Karachi’s premier address for luxury living — and our VIP escorts match that standard perfectly.
                All models are verified, professional, and trained to provide exceptional companionship whether for business trips, social events, or private relaxation.
              </p>
              <ul className="list-disc pl-6 space-y-3 mt-6">
                <li>Fully discreet outcall services to top DHA locations and 5-star hotels</li>
                <li>GFE, massage, full-night, and extended companionship options</li>
                <li>Handpicked for beauty, intelligence, and class</li>
                <li>Competitive rates with no compromise on quality or privacy</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-10 text-center">Frequently Asked Questions</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">How discreet are your services in DHA?</h3>
                <p className="text-gray-700">Complete discretion is guaranteed — from booking to arrival. We never share client information.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">Do you offer outcall to hotels?</h3>
                <p className="text-gray-700">Yes — PC Hotel, Marriott, Movenpick, and most DHA / Clifton hotels are popular choices.</p>
              </div>
              {/* Add 2–4 more FAQ items */}
            </div>
          </div>
        </section>

        {/* Strong CTA */}
        <section className="py-16 bg-gradient-to-r from-rose-600 to-pink-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for an Unforgettable Evening in DHA?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Connect with our VIP escorts today — verified, elegant, and available now.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-rose-600 hover:bg-gray-100 font-bold text-lg px-10 py-5 rounded-full shadow-lg transition-all transform hover:scale-105"
            >
              Book via WhatsApp Now →
            </Link>
          </div>
        </section>

        {/* Interlinks / Related */}
        <section className="py-12 text-center text-gray-600">
          <div className="container mx-auto px-4">
            <p className="text-lg">
              Explore more:{' '}
              <Link href="/" className="text-rose-600 hover:underline mx-2">Home</Link> •
              <Link href="/portfolio/escorts-clifton-karachi" className="text-rose-600 hover:underline mx-2">Clifton Escorts</Link> •
              <Link href="/blog/full-night-escort-service-karachi" className="text-rose-600 hover:underline mx-2">Full Night Services</Link> •
              <Link href="/blog/safe-escort-tips-karachi" className="text-rose-600 hover:underline mx-2">Safety Guide</Link>
            </p>
          </div>
        </section>
      </main>

      {/* <Footer />  ← same as Header: only if layout doesn't already include it */}
    </>
  );
}
