"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const models = [
  { id: 1, src: "/models/model1.jpg", className: "top-24 left-6" },
  { id: 2, src: "/models/model2.jpg", className: "top-1/3 right-8" },
  { id: 3, src: "/models/model3.jpg", className: "bottom-24 left-10" },
  { id: 4, src: "/models/model4.jpg", className: "top-20 right-1/4" },
  { id: 5, src: "/models/model5.jpg", className: "bottom-32 right-12" },
  { id: 6, src: "/models/model6.jpg", className: "top-1/2 left-1/4" },
];

export default function EscortCollage() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev < models.length) return prev + 1;
        clearInterval(interval);
        setTimeout(() => setShowMessage(true), 1200);
        return prev;
      });
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Floating Models */}
      <div className="pointer-events-none fixed inset-0 z-30 hidden md:block">
        {models.map((model, index) => (
          <div
            key={model.id}
            className={`absolute ${model.className} transition-all duration-700 ${
              index < visibleCount
                ? "opacity-80 scale-100"
                : "opacity-0 scale-90"
            }`}
          >
            <Image
              src={model.src}
              alt="Escort model"
              width={140}
              height={200}
              className="rounded-xl shadow-xl"
            />
          </div>
        ))}
      </div>

      {/* Soft Message */}
      {showMessage && (
        <div className="fixed bottom-10 right-10 z-40 animate-fadeIn">
          <div className="bg-black border border-yellow-500/40 px-6 py-4 rounded-xl shadow-lg">
            <p className="text-yellow-500 text-sm tracking-wide">
              I’m ready for you ✨
            </p>
          </div>
        </div>
      )}
    </>
  );
}