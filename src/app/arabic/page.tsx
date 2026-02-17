import { Metadata } from "next";
import { GraduationCap, CheckCircle, Star, Pencil, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "تأسيس اللغة العربية",
  description: "برنامج شامل لتعليم اللغة العربية قراءة وكتابة بطرق حديثة ومبتكرة - اكاديمية الحافظ المتميز اون لاين",
};

const packages = [
  {
    name: "باقة 4 حصص",
    price: 24,
    sessions: 4,
    duration: "30 دقيقة",
    popular: false,
    features: [
      "مرونة في اختيار الوقت المناسب",
      "معلمون ومعلمات مجازون",
      "اشراف وتذكير بالحصص",
      "قراءة وكتابة بطرق حديثة",
    ],
  },
  {
    name: "باقة 8 حصص",
    price: 38,
    sessions: 8,
    duration: "30 دقيقة",
    popular: true,
    features: [
      "مرونة في اختيار الوقت المناسب",
      "معلمون ومعلمات مجازون",
      "اشراف وتذكير بالحصص",
      "قراءة وكتابة بطرق حديثة",
    ],
  },
  {
    name: "باقة 12 حصة",
    price: 50,
    sessions: 12,
    duration: "30 دقيقة",
    popular: false,
    features: [
      "مرونة في اختيار الوقت المناسب",
      "معلمون ومعلمات مجازون",
      "اشراف وتذكير بالحصص",
      "قراءة وكتابة بطرق حديثة",
    ],
  },
];

const methodology = [
  { icon: BookOpen, title: "القراءة التفاعلية", desc: "تعلم القراءة من خلال قصص ونصوص تفاعلية ممتعة" },
  { icon: Pencil, title: "الكتابة الإبداعية", desc: "تطوير مهارات الكتابة من خلال تمارين إبداعية متنوعة" },
  { icon: GraduationCap, title: "القواعد المبسطة", desc: "تعلم قواعد اللغة العربية بأساليب مبسطة وسهلة" },
];

export default function ArabicPage() {
  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="relative bg-gradient-to-bl from-blue-900 via-blue-800 to-blue-950 text-white py-20 md:py-28">
        <div className="absolute inset-0 islamic-pattern opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-cyan-500/20 flex items-center justify-center">
            <GraduationCap className="w-10 h-10 text-cyan-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">تأسيس اللغة العربية</h1>
          <p className="text-lg md:text-xl text-blue-200 leading-relaxed max-w-3xl mx-auto">
            برنامج شامل ومتكامل لتعليم اللغة العربية قراءةً وكتابةً بطرق حديثة ومبتكرة
            تناسب جميع الأعمار والمستويات مع معلمين متخصصين
          </p>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">طريقة التأسيس</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {methodology.map((m) => (
              <div key={m.title} className="bg-blue-50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-blue-100 flex items-center justify-center">
                  <m.icon className="w-8 h-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{m.title}</h3>
                <p className="text-gray-600">{m.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-gradient-to-l from-blue-50 to-blue-100 rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">عن البرنامج</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              يعتمد برنامج تأسيس اللغة العربية على أحدث الأساليب التعليمية المعتمدة عالمياً
              في تعليم اللغات. يبدأ البرنامج بتعليم الحروف ومخارجها، ثم ينتقل إلى تكوين
              الكلمات والجمل البسيطة، وصولاً إلى القراءة والكتابة بطلاقة.
            </p>
            <p className="text-gray-600 leading-relaxed">
              يتميز البرنامج باستخدام الوسائل التعليمية التفاعلية والألعاب اللغوية التي تجعل
              عملية التعلم ممتعة وفعالة، مع مراعاة الفروق الفردية بين الطلاب.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">اختر الباقة المناسبة</h2>
            <p className="text-lg text-gray-600">باقات مرنة تناسب جميع الاحتياجات</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-2xl p-8 transition-all hover:shadow-xl ${
                  pkg.popular
                    ? "bg-gradient-to-b from-blue-700 to-blue-800 text-white shadow-xl scale-105"
                    : "bg-white border border-gray-200 shadow-sm"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 right-1/2 translate-x-1/2 bg-cyan-500 text-white text-sm font-bold px-4 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    الأكثر طلباً
                  </div>
                )}
                <h3 className={`text-xl font-bold mb-2 ${pkg.popular ? "text-white" : "text-gray-900"}`}>
                  {pkg.name}
                </h3>
                <div className="mb-1">
                  <span className={`text-4xl font-bold ${pkg.popular ? "text-cyan-400" : "text-blue-700"}`}>
                    ${pkg.price}
                  </span>
                  <span className={`text-sm mr-1 ${pkg.popular ? "text-blue-200" : "text-gray-500"}`}>
                    / باقة
                  </span>
                </div>
                <p className={`text-sm mb-6 ${pkg.popular ? "text-blue-200" : "text-gray-500"}`}>
                  {pkg.sessions} حصص - {pkg.duration}
                </p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${pkg.popular ? "text-cyan-400" : "text-blue-600"}`} />
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
                      ? "bg-cyan-500 hover:bg-cyan-600 text-white"
                      : "bg-blue-700 hover:bg-blue-800 text-white"
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
