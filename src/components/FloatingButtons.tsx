"use client";

import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
      <a
        href="https://t.me/acabemy_quraan"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تيليجرام"
        className="w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
      >
        <FaTelegramPlane className="w-6 h-6" />
      </a>
      <a
        href="https://wa.me/201130127894"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="واتساب"
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 animate-bounce"
        style={{ animationDuration: "2s" }}
      >
        <FaWhatsapp className="w-7 h-7" />
      </a>
    </div>
  );
}
