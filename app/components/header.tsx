"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://instagram.com/massageserviceskhi2026",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5C18.55 4 20 5.45 20 7.75v8.5c0 2.3-1.45 3.75-3.75 3.75h-8.5C5.45 20 4 18.55 4 16.25v-8.5C4 5.45 5.45 4 7.75 4zm8.75 2a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
        </svg>
      ),
    },
    {
      name: "X",
      href: "https://x.com/rmassagekhi",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M18.244 2H21l-6.52 7.45L22 22h-6.844l-5.36-6.99L3.8 22H1l7.05-8.06L2 2h6.906l4.86 6.36L18.244 2zM16.9 20h1.7L7.1 4H5.3l11.6 16z" />
        </svg>
      ),
    },
    {
      name: "Pinterest",
      href: "https://pin.it/4s4PefVQl",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 2C6.48 2 2 6.21 2 11.36c0 3.88 2.27 7.2 5.56 8.66-.08-.74-.15-1.88.03-2.7.16-.7 1.02-4.47 1.02-4.47s-.26-.53-.26-1.31c0-1.23.72-2.14 1.62-2.14.76 0 1.13.56 1.13 1.24 0 .76-.48 1.89-.73 2.94-.21.89.44 1.61 1.31 1.61 1.57 0 2.78-1.61 2.78-3.94 0-2.06-1.49-3.5-3.62-3.5-2.47 0-3.92 1.82-3.92 3.71 0 .74.29 1.53.65 1.96.07.08.08.15.06.23-.07.25-.22.89-.25 1.02-.04.16-.13.19-.3.11-1.12-.51-1.82-2.11-1.82-3.39 0-2.76 2.06-5.29 5.94-5.29 3.12 0 5.55 2.2 5.55 5.14 0 3.07-1.95 5.54-4.65 5.54-.91 0-1.77-.47-2.06-1.02l-.56 2.09c-.2.75-.75 1.68-1.11 2.25.84.26 1.73.4 2.65.4 5.52 0 10-4.21 10-9.36C22 6.21 17.52 2 12 2z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-black border-b border-yellow-500/40">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">

          {/* Logo + Desktop Socials */}
          <div className="flex items-center space-x-6">
            <Link
              href="/"
              className="text-2xl font-bold text-yellow-500 tracking-wide"
            >
              Rocky Escorts
            </Link>

            {/* Desktop Social Icons (Beside Logo) */}
            <div className="hidden md:flex items-center space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 text-yellow-500">
            <Link href="/" className="hover:text-yellow-400">
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <span className="cursor-pointer hover:text-yellow-400">
                Services
              </span>

              <div className="absolute left-0 mt-3 w-56 bg-black border border-yellow-500/40 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/portfolio/vip-escorts-dha-karachi" className="block px-4 py-3 text-yellow-500 hover:bg-yellow-500/10">
                  Escorts in DHA
                </Link>
                <Link href="/portfolio/escorts-clifton-karachi" className="block px-4 py-3 text-yellow-500 hover:bg-yellow-500/10">
                  VIP Escorts in Clifton
                </Link>
                <Link href="/portfolio/escorts-gulshan-e-iqbal-karachi" className="block px-4 py-3 text-yellow-500 hover:bg-yellow-500/10">
                  VIP Escorts in Gulshan E Iqbal
                </Link>
                <Link href="/portfolio/escorts-bahria-town-karachi" className="block px-4 py-3 text-yellow-500 hover:bg-yellow-500/10">
                  VIP Escorts in Bahria Town Karachi
                </Link>
                <Link href="/portfolio/escorts-pechs-karachi" className="block px-4 py-3 text-yellow-500 hover:bg-yellow-500/10">
                  VIP Escorts in PECHS Karachi
                </Link>
                <Link href="/portfolio" className="block px-4 py-3 text-yellow-500 hover:bg-yellow-500/10">
                  View More
                </Link>
                <Link href="/models" className="block px-4 py-3 text-yellow-500 hover:bg-yellow-500/10">
                  Models
                </Link>
              </div>
            </div>

            <Link href="/about-us" className="hover:text-yellow-400">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-yellow-400">
              Contact Us
            </Link>
          </nav>

          {/* Hamburger */}
          <button
            className="md:hidden text-yellow-500"
            onClick={() => setMenuOpen(true)}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Floating Socials Desktop */}
        <div className="hidden md:flex fixed top-1/3 right-6 flex-col space-y-4 z-40">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-black border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all duration-300 shadow-lg"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Floating Socials Mobile */}
        <div className="md:hidden fixed top-20 right-4 flex flex-col space-y-3 z-40">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-black border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all duration-300 shadow-lg"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </header>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-black border-l border-yellow-500/40 z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col space-y-6 text-yellow-500">
          <button className="self-end text-yellow-500" onClick={() => setMenuOpen(false)}>
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>

          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex justify-between w-full hover:text-yellow-400"
            >
              Services
              <span>{servicesOpen ? "−" : "+"}</span>
            </button>

            {servicesOpen && (
              <div className="mt-3 ml-4 flex flex-col space-y-3 text-sm">
                <Link href="/portfolio/vip-escorts-dha-karachi" onClick={() => setMenuOpen(false)}>Escorts in DHA</Link>
                <Link href="/portfolio/escorts-clifton-karachi" onClick={() => setMenuOpen(false)}>VIP Escorts in Clifton</Link>
                <Link href="/portfolio/escorts-bahria-town-karachi" onClick={() => setMenuOpen(false)}>VIP Escorts in Bahria Town Karachi</Link>
                <Link href="/portfolio/escorts-pechs-karachi" onClick={() => setMenuOpen(false)}>VIP Escorts in PECHS Karachi</Link>
                <Link href="/portfolio/escorts-gulshan-e-iqbal-karachi" onClick={() => setMenuOpen(false)}>VIP Escorts in Gulshan E Iqbal Karachi</Link>
                <Link href="/portfolio" onClick={() => setMenuOpen(false)}>View More</Link>
                <Link href="/models" onClick={() => setMenuOpen(false)}>Models</Link>
              </div>
            )}
          </div>

          <Link href="/about-us" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
        </div>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}