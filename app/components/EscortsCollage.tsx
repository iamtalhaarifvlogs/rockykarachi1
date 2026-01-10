"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const models = [
  { id: 1, src: "/model1.jpg", style: "top-24 left-6" },
  { id: 2, src: "/model2.jpg", style: "top-1/3 right-8" },
  { id: 3, src: "/model3.jpg", style: "bottom-28 left-10" },
  { id: 4, src: "/model4.jpg", style: "top-20 right-1/4" },
  { id: 5, src: "/model5.jpg", style: "bottom-32 right-12" },
  { id: 6, src: "/model6.jpg", style: "top-1/2 left-1/4" },
];

export default function EscortsCollage() {
  const [visible, setVisible] = useState<number[]>([]);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setVisible((prev) => [...prev, index]);
      index++;

      if (index === models.length) {
        clearInterval(interval);
        setTimeout(() => setShowMessage(true), 1200);
      }
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Floating Images */}
      <div className="fixed inset-0 z-40 pointer-events-none">
        {models.map((model, i) => (
          <div
            key={model.id}
            className={`absolute ${model.style} transition-all duration-700 ease-out ${
              visible.includes(i)
                ? "opacity-80 scale-100"
                : "opacity-0 scale-90"
            }`}
          >
            <Image
              src={model.src}
              alt="Model"
              width={140}
              height={200}
              priority
              className="rounded-xl shadow-2xl"
            />
          </div>
        ))}
      </div>

      {/* Message Bubble */}
      {showMessage && (
        <div className="fixed bottom-10 right-10 z-50 transition-opacity duration-700 opacity-100">
          <div className="bg-black border border-yellow-500/60 px-6 py-4 rounded-xl shadow-xl">
            <p className="text-yellow-500 text-sm tracking-wide">
              I’m ready for you ✨
            </p>
          </div>
        </div>
      )}
    </>
  );
}