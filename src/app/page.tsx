import Link from "next/link";
import { BookOpen, Star, Users, Award, GraduationCap, Globe, Play, CheckCircle, ArrowLeft } from "lucide-react";

const features = [
  { icon: BookOpen, title: "حفظ القرآن الكريم", desc: "منهج متكامل لحفظ القرآن الكريم مع معلمين مجازين بأعلى الأسانيد" },
  { icon: GraduationCap, title: "تجويد متقن", desc: "تعلم أحكام التجويد بطريقة مبسطة واحترافية مع التطبيق العملي" },
  { icon: Globe, title: "تعليم عالمي", desc: "نخدم طلابنا في أكثر من 30 دولة حول العالم عبر الإنترنت" },
  { icon: Users, title: "معلمون مجازون", desc: "نخبة من المعلمين والمعلمات الحاصلين على إجازات في القرآن الكريم" },
  { icon: Award, title: "شهادات معتمدة", desc: "شهادات إتمام الحفظ والتجويد معتمدة من الأكاديمية" },
  { icon: Star, title: "تقييم مستمر", desc: "متابعة دورية ومستمرة لمستوى الطالب مع تقارير أداء شهرية" },
];

const stats = [
  { value: "+5000", label: "طالب وطالبة" },
  { value: "+200", label: "معلم ومعلمة" },
  { value: "+30", label: "دولة حول العالم" },
  { value: "+95%", label: "نسبة رضا الطلاب" },
];

export default function Home() {
  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-bl from-emerald-900 via-emerald-800 to-emerald-950 text-white">
        <div className="absolute inset-0 islamic-pattern opacity-30" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-emerald-700/50 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-emerald-200 border border-emerald-600/50">
                <Star className="w-4 h-4 text-amber-400" />
                المنصة التعليمية الأولى للقرآن الكريم
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                اكاديمية{" "}
                <span className="gold-gradient">الحافظ المتميز</span>
                <br />
                اون لاين
              </h1>
              <p className="text-lg md:text-xl text-emerald-100 leading-relaxed max-w-lg">
                منصة تعليمية عالمية متخصصة في تعليم القرآن الكريم والتجويد
                وتأسيس اللغة العربية عبر الإنترنت مع نخبة من المعلمين والمعلمات المجازين
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/quran"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-l from-amber-500 to-amber-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg hover:shadow-xl"
                >
                  ابدأ رحلتك مع القرآن
                  <ArrowLeft className="w-5 h-5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-white/20 transition-all"
                >
                  تعرف علينا
                </Link>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-amber-500/20 to-emerald-400/20 flex items-center justify-center animate-float">
                  <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-amber-500/30 to-emerald-400/30 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-amber-500 to-amber-400 flex items-center justify-center shadow-2xl">
                        <BookOpen className="w-12 h-12 text-white" />
                      </div>
                      <p className="text-2xl font-bold text-amber-300" style={{ fontFamily: "Amiri, serif" }}>
                        &#x0627;&#x0642;&#x0652;&#x0631;&#x064E;&#x0623;&#x0652;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-emerald-700">{s.value}</div>
                <p className="text-gray-600 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-b from-white to-emerald-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              لماذا <span className="text-emerald-700">اكاديمية الحافظ المتميز؟</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              نقدم تجربة تعليمية فريدة ومتكاملة تجمع بين الأصالة والتكنولوجيا الحديثة
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200 group"
              >
                <div className="w-14 h-14 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-5 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                  <f.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">برامجنا التعليمية</h2>
            <p className="text-lg text-gray-600">اختر البرنامج المناسب لك ولأبنائك</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Quran Program */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-800 to-emerald-900 p-8 md:p-10 text-white group hover:shadow-2xl transition-all">
              <div className="absolute top-0 left-0 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-amber-500/20 flex items-center justify-center mb-6">
                  <BookOpen className="w-7 h-7 text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3">القرآن الكريم والتجويد</h3>
                <p className="text-emerald-200 leading-relaxed mb-6">
                  منهج متكامل لتعليم القرآن الكريم حفظاً وتجويداً ومراجعةً وتفسيراً
                  مع معلمين ومعلمات مجازين بأعلى الأسانيد
                </p>
                <div className="flex items-center gap-2 mb-6 text-emerald-200 text-sm">
                  <span>تبدأ من</span>
                  <span className="text-2xl font-bold text-amber-400">$15</span>
                  <span>/ شهرياً</span>
                </div>
                <Link
                  href="/quran"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
                >
                  عرض الباقات
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
            </div>
            {/* Arabic Program */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-800 to-blue-900 p-8 md:p-10 text-white group hover:shadow-2xl transition-all">
              <div className="absolute top-0 left-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-6">
                  <GraduationCap className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3">تأسيس اللغة العربية</h3>
                <p className="text-blue-200 leading-relaxed mb-6">
                  برنامج شامل لتعليم اللغة العربية قراءةً وكتابةً بطرق حديثة
                  ومبتكرة تناسب جميع الأعمار والمستويات
                </p>
                <div className="flex items-center gap-2 mb-6 text-blue-200 text-sm">
                  <span>تبدأ من</span>
                  <span className="text-2xl font-bold text-cyan-400">$24</span>
                  <span>/ شهرياً</span>
                </div>
                <Link
                  href="/arabic"
                  className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
                >
                  عرض الباقات
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-emerald-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">كيف تبدأ معنا؟</h2>
            <p className="text-lg text-gray-600">خطوات بسيطة للانضمام لأسرة الحافظ المتميز</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "١", title: "اختر البرنامج", desc: "اختر البرنامج المناسب لك من بين برامجنا المتنوعة" },
              { step: "٢", title: "اختر الباقة", desc: "حدد الباقة التي تناسب جدولك وميزانيتك" },
              { step: "٣", title: "حدد الموعد", desc: "اختر الوقت المناسب لحصصك مع مرونة كاملة" },
              { step: "٤", title: "ابدأ التعلم", desc: "انطلق في رحلتك التعليمية مع أفضل المعلمين" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-emerald-700 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-l from-emerald-800 to-emerald-900 text-white islamic-pattern">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ابدأ رحلتك في حفظ القرآن الكريم اليوم
          </h2>
          <p className="text-lg text-emerald-200 mb-8 max-w-2xl mx-auto">
            انضم لآلاف الطلاب حول العالم واحصل على حصة تجريبية مجانية
            مع أفضل المعلمين المجازين
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl text-lg font-bold transition-colors shadow-lg"
            >
              احجز حصتك التجريبية المجانية
            </Link>
            <a
              href="https://wa.me/201130127894"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-bold transition-colors shadow-lg"
            >
              تواصل عبر واتساب
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
