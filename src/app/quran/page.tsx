import { Metadata } from "next";
import Link from "next/link";
import { BookOpen, CheckCircle, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "القرآن الكريم والتجويد",
  description: "تعلم القرآن الكريم حفظاً وتجويداً ومراجعةً وتفسيراً مع معلمين ومعلمات مجازين - اكاديمية الحافظ المتميز اون لاين",
};

const packages = [
  {
    name: "باقة 4 حصص",
    price: 15,
    sessions: 4,
    duration: "30 دقيقة",
    popular: false,
    features: [
      "مرونة في اختيار الوقت المناسب",
      "معلمون ومعلمات مجازون",
      "اشراف وتذكير بالحصص",
      "حفظ وتجويد ومراجعه وتفسير",
    ],
  },
  {
    name: "باقة 8 حصص",
    price: 27,
    sessions: 8,
    duration: "30 دقيقة",
    popular: true,
    features: [
      "مرونة في اختيار الوقت المناسب",
      "معلمون ومعلمات مجازون",
      "اشراف وتذكير بالحصص",
      "حفظ وتجويد ومراجعه وتفسير",
    ],
  },
  {
    name: "باقة 12 حصة",
    price: 38,
    sessions: 12,
    duration: "30 دقيقة",
    popular: false,
    features: [
      "مرونة في اختيار الوقت المناسب",
      "معلمون ومعلمات مجازون",
      "اشراف وتذكير بالحصص",
      "حفظ وتجويد ومراجعه وتفسير",
    ],
  },
];

const curriculum = [
  "حفظ القرآن الكريم كاملاً أو أجزاء محددة",
  "تعلم أحكام التجويد نظرياً وتطبيقياً",
  "المراجعة المستمرة والمنهجية للمحفوظ",
  "تفسير الآيات ومعرفة أسباب النزول",
  "تصحيح مخارج الحروف والنطق الصحيح",
  "تعلم القراءات المختلفة",
  "اختبارات دورية لقياس مستوى التقدم",
  "شهادة إتمام الحفظ والتجويد",
];

export default function QuranPage() {
  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="relative bg-gradient-to-bl from-emerald-900 via-emerald-800 to-emerald-950 text-white py-20 md:py-28">
        <div className="absolute inset-0 islamic-pattern opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-amber-500/20 flex items-center justify-center">
            <BookOpen className="w-10 h-10 text-amber-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">القرآن الكريم والتجويد</h1>
          <p className="text-lg md:text-xl text-emerald-200 leading-relaxed max-w-3xl mx-auto">
            منهج متكامل لتعليم القرآن الكريم لجميع الأعمار - حفظ وتجويد ومراجعة وتفسير
            مع نخبة من المعلمين والمعلمات المجازين بأعلى الأسانيد
          </p>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">ماذا ستتعلم؟</h2>
          <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {curriculum.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-emerald-50 rounded-xl p-4">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gradient-to-b from-emerald-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">باقات القرآن الكريم</h2>
            <p className="text-lg text-gray-600">اختر الباقة المناسبة لحفظ وتجويد القرآن</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-2xl p-8 transition-all hover:shadow-xl ${
                  pkg.popular
                    ? "bg-gradient-to-b from-emerald-700 to-emerald-800 text-white shadow-xl scale-105"
                    : "bg-white border border-gray-200 shadow-sm"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 right-1/2 translate-x-1/2 bg-amber-500 text-white text-sm font-bold px-4 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    الأكثر طلباً
                  </div>
                )}
                <h3 className={`text-xl font-bold mb-2 ${pkg.popular ? "text-white" : "text-gray-900"}`}>
                  {pkg.name}
                </h3>
                <div className="mb-1">
                  <span className={`text-4xl font-bold ${pkg.popular ? "text-amber-400" : "text-emerald-700"}`}>
                    ${pkg.price}
                  </span>
                  <span className={`text-sm mr-1 ${pkg.popular ? "text-emerald-200" : "text-gray-500"}`}>
                    / باقة
                  </span>
                </div>
                <p className={`text-sm mb-6 ${pkg.popular ? "text-emerald-200" : "text-gray-500"}`}>
                  {pkg.sessions} حصص - {pkg.duration}
                </p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${pkg.popular ? "text-amber-400" : "text-emerald-600"}`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/201130127894"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3 rounded-xl font-semibold transition-colors ${
                    pkg.popular
                      ? "bg-amber-500 hover:bg-amber-600 text-white"
                      : "bg-emerald-700 hover:bg-emerald-800 text-white"
                  }`}
                >
                  اشترك الآن
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
