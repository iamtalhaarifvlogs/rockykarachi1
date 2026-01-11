"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-yellow-500/40">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-yellow-500 tracking-wide"
        >
          Rocky Escorts
        </Link>

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
              <Link
                href="/how-to-book"
                className="block px-4 py-3 text-yellow-500 hover:bg-yellow-500/10"
              >
                How do I book?
              </Link>
              <Link
                href="/how-to-connect"
                className="block px-4 py-3 text-yellow-500 hover:bg-yellow-500/10"
              >
                How do I connect?
              </Link>
              <Link
                href="/models"
                className="block px-4 py-3 text-yellow-500 hover:bg-yellow-500/10"
              >
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
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-black border-l border-yellow-500/40 z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col space-y-6 text-yellow-500">
          {/* Close */}
          <button
            className="self-end text-yellow-500"
            onClick={() => setMenuOpen(false)}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          {/* Mobile Services */}
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
                <Link href="/how-to-book" onClick={() => setMenuOpen(false)}>
                  How do I book?
                </Link>
                <Link href="/how-to-connect" onClick={() => setMenuOpen(false)}>
                  How do I connect?
                </Link>
                <Link href="/models" onClick={() => setMenuOpen(false)}>
                  Models
                </Link>
              </div>
            )}
          </div>

          <Link href="/about-us" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Contact Us
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}