"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, BookOpen, ChevronDown } from "lucide-react";

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/about", label: "من نحن" },
  { href: "/quran", label: "القرآن الكريم والتجويد" },
  { href: "/arabic", label: "تأسيس العربي" },
  { href: "/teachers", label: "المعلمين والمعلمات" },
  { href: "/reviews", label: "آراء طلابنا" },
  { href: "/library", label: "المكتبة" },
  { href: "/games", label: "الألعاب والمسابقات" },
  { href: "/faq", label: "الأسئلة الشائعة" },
  { href: "/contact", label: "اتصل بنا" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-emerald-700 to-emerald-500 flex items-center justify-center shadow-lg">
              <BookOpen className="w-6 h-6 md:w-7 md:h-7 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-sm md:text-base font-bold text-emerald-800 leading-tight">
                اكاديمية الحافظ المتميز
              </h1>
              <p className="text-[10px] md:text-xs text-emerald-600">اون لاين</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center px-5 py-2.5 bg-gradient-to-l from-emerald-700 to-emerald-600 text-white text-sm font-semibold rounded-xl hover:from-emerald-800 hover:to-emerald-700 transition-all shadow-md hover:shadow-lg"
            >
              سجل الآن
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-gray-700 hover:bg-emerald-50 rounded-lg transition-colors"
              aria-label="القائمة"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - slides from right */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 z-50">
          <div className="absolute inset-0 bg-black/30" onClick={() => setMobileOpen(false)} />
          <nav className="absolute top-0 right-0 w-72 h-full bg-white shadow-2xl overflow-y-auto animate-in slide-in-from-right duration-300">
            <div className="p-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-xl transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center px-4 py-3 bg-gradient-to-l from-emerald-700 to-emerald-600 text-white font-semibold rounded-xl"
                >
                  سجل الآن
                </Link>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
