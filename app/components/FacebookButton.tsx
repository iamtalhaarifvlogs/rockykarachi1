"use client";

import Link from "next/link";

export default function FacebookButton() {
  const facebookUrl = "https://www.facebook.com/share/1CDg2uAznc/";

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <Link
        href={facebookUrl}
        target="_blank"
        aria-label="Facebook"
        className="
          flex items-center justify-center
          w-14 h-14
          bg-[#1877F2] hover:bg-[#145dbf]
          text-white
          rounded-full
          shadow-xl
          transition-transform duration-300
          hover:scale-105
        "
      >
        {/* Facebook Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z" />
        </svg>
      </Link>
    </div>
  );
}