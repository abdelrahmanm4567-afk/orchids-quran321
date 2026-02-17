import Link from "next/link";
import { BookOpen, Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaYoutube, FaInstagram, FaTiktok, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

const footerLinks = [
  {
    title: "الأكاديمية",
    links: [
      { href: "/about", label: "من نحن" },
      { href: "/teachers", label: "المعلمين والمعلمات" },
      { href: "/reviews", label: "آراء طلابنا" },
      { href: "/library", label: "المكتبة" },
    ],
  },
  {
    title: "البرامج التعليمية",
    links: [
      { href: "/quran", label: "القرآن الكريم والتجويد" },
      { href: "/arabic", label: "تأسيس اللغة العربية" },
      { href: "/games", label: "الألعاب والمسابقات" },
      { href: "/faq", label: "الأسئلة الشائعة" },
    ],
  },
  {
    title: "قانوني",
    links: [
      { href: "/privacy", label: "سياسة الخصوصية" },
      { href: "/terms", label: "الشروط والأحكام" },
      { href: "/contact", label: "اتصل بنا" },
    ],
  },
];

const socialLinks = [
  { href: "https://wa.me/201130127894", icon: FaWhatsapp, label: "واتساب", color: "hover:bg-green-600" },
  { href: "https://t.me/acabemy_quraan", icon: FaTelegramPlane, label: "تيليجرام", color: "hover:bg-blue-500" },
  { href: "#", icon: FaFacebookF, label: "فيسبوك", color: "hover:bg-blue-700" },
  { href: "#", icon: FaYoutube, label: "يوتيوب", color: "hover:bg-red-600" },
  { href: "#", icon: FaInstagram, label: "انستجرام", color: "hover:bg-pink-600" },
  { href: "#", icon: FaTiktok, label: "تيك توك", color: "hover:bg-gray-800" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-emerald-900 to-emerald-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-400 flex items-center justify-center">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">اكاديمية الحافظ المتميز</h3>
                <p className="text-xs text-emerald-300">اون لاين</p>
              </div>
            </Link>
            <p className="text-emerald-200 text-sm leading-relaxed mb-5">
              منصة تعليمية عالمية متخصصة في تعليم القرآن الكريم والتجويد
              وتأسيس اللغة العربية عبر الإنترنت
            </p>
            <div className="space-y-2 text-sm text-emerald-200">
              <a href="mailto:enamel311@gmail.com" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                <Mail className="w-4 h-4" />
                enamel311@gmail.com
              </a>
              <a href="https://wa.me/201130127894" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                <Phone className="w-4 h-4" />
                +201130127894
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="text-base font-bold text-amber-400 mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-emerald-200 hover:text-white hover:translate-x-1 transition-all inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social */}
        <div className="mt-12 pt-8 border-t border-emerald-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`w-10 h-10 rounded-full bg-emerald-800 flex items-center justify-center text-white transition-all ${s.color} hover:scale-110`}
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="text-sm text-emerald-300">
              &copy; {new Date().getFullYear()} اكاديمية الحافظ المتميز. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
