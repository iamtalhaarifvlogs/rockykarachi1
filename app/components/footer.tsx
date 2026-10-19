
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#c9a86c]/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold text-[#c9a86c] mb-4">Rocky Escorts Karachi</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Premium VIP call girls and elite companions in Karachi. 
              Discreet, verified and available 24/7 across DHA, Clifton, Bahria Town, PECHS and major hotels.
            </p>
            <p className="text-[#c9a86c] font-medium text-sm">
              Call / WhatsApp: 03708540579
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-[#c9a86c] uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/" className="hover:text-[#c9a86c] transition">Home</Link></li>
              <li><Link href="/models" className="hover:text-[#c9a86c] transition">Models</Link></li>
              <li><Link href="/companions" className="hover:text-[#c9a86c] transition">Companions</Link></li>
              <li><Link href="/about-us" className="hover:text-[#c9a86c] transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-[#c9a86c] transition">Contact</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-sm font-semibold text-[#c9a86c] uppercase tracking-wider mb-4">Service Areas</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/portfolio/vip-escorts-dha-karachi" className="hover:text-[#c9a86c] transition">Escorts in DHA Karachi</Link></li>
              <li><Link href="/portfolio/escorts-clifton-karachi" className="hover:text-[#c9a86c] transition">Escorts in Clifton</Link></li>
              <li><Link href="/portfolio/escorts-bahria-town-karachi" className="hover:text-[#c9a86c] transition">Escorts in Bahria Town</Link></li>
              <li><Link href="/portfolio/escorts-pechs-karachi" className="hover:text-[#c9a86c] transition">Escorts in PECHS</Link></li>
              <li><Link href="/portfolio/escorts-gulshan-e-iqbal-karachi" className="hover:text-[#c9a86c] transition">Escorts in Gulshan-e-Iqbal</Link></li>
            </ul>
          </div>

          {/* Hotels & Locations */}
          <div>
            <h4 className="text-sm font-semibold text-[#c9a86c] uppercase tracking-wider mb-4">Hotels & Locations</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/escorts-in-al-harmain-hotel" className="hover:text-[#c9a86c] transition">Al Harmain Hotel Escorts</Link></li>
              <li><Link href="/escorts-in-bahadurabad" className="hover:text-[#c9a86c] transition">Bahadurabad Escorts</Link></li>
              <li><span className="text-gray-500">Marriott Hotel</span></li>
              <li><span className="text-gray-500">PC Hotel</span></li>
              <li><span className="text-gray-500">Mövenpick Hotel</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#c9a86c]/15 pt-6 text-center">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Rocky Escorts Karachi. All Rights Reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Karachi Escorts · VIP Call Girls · DHA · Clifton · Bahria Town · PECHS · Hotel Outcall
          </p>
        </div>
      </div>
    </footer>
  );
}