import { Metadata } from "next";
import { BookOpen, Target, Eye, Heart, Award, Users, Globe, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "من نحن",
  description: "تعرف على اكاديمية الحافظ المتميز اون لاين - رؤيتنا ورسالتنا وقيمنا في تعليم القرآن الكريم واللغة العربية",
};

const values = [
  { icon: BookOpen, title: "الإتقان", desc: "نسعى لإتقان تلاوة وحفظ القرآن الكريم بأعلى مستوى من الجودة" },
  { icon: Heart, title: "الإخلاص", desc: "نعمل بإخلاص تام في خدمة كتاب الله وتعليمه لجميع المسلمين" },
  { icon: Users, title: "الشمولية", desc: "نوفر بيئة تعليمية شاملة تناسب جميع الأعمار والمستويات" },
  { icon: Shield, title: "الأمانة", desc: "نحافظ على أمانة العلم ودقة النقل في تعليم القرآن الكريم" },
  { icon: Globe, title: "العالمية", desc: "نتطلع للوصول إلى كل مسلم في أي مكان في العالم" },
  { icon: Award, title: "التميز", desc: "نسعى دائماً للتميز في كل ما نقدمه من خدمات تعليمية" },
];

export default function AboutPage() {
  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="relative bg-gradient-to-bl from-emerald-900 via-emerald-800 to-emerald-950 text-white py-20 md:py-28">
        <div className="absolute inset-0 islamic-pattern opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">من نحن</h1>
          <p className="text-lg md:text-xl text-emerald-200 leading-relaxed max-w-3xl mx-auto">
            اكاديمية الحافظ المتميز اون لاين هي منصة تعليمية عالمية رائدة
            متخصصة في تعليم القرآن الكريم والتجويد وتأسيس اللغة العربية عبر الإنترنت
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">قصتنا</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  انطلقت اكاديمية الحافظ المتميز من إيمان عميق بأهمية تعليم القرآن الكريم
                  واللغة العربية لكل مسلم في أي مكان في العالم. بدأنا رحلتنا بهدف واضح
                  وهو تسهيل تعلم كتاب الله عبر التكنولوجيا الحديثة.
                </p>
                <p>
                  نؤمن بأن كل مسلم يستحق فرصة حفظ القرآن الكريم وتعلم تلاوته بشكل صحيح،
                  ولذلك عملنا على بناء منصة تعليمية متكاملة تجمع بين الأصالة في المنهج
                  والحداثة في الأساليب التعليمية.
                </p>
                <p>
                  اليوم نخدم آلاف الطلاب والطالبات في أكثر من 30 دولة حول العالم،
                  مع نخبة من المعلمين والمعلمات المجازين بأعلى الأسانيد.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-10 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-emerald-700 flex items-center justify-center">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-800 mb-2" style={{ fontFamily: "Amiri, serif" }}>
                &quot;وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ&quot;
              </h3>
              <p className="text-emerald-600 text-sm">سورة القمر - آية 17</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-emerald-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-emerald-100">
              <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center mb-5">
                <Eye className="w-7 h-7 text-emerald-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">رؤيتنا</h3>
              <p className="text-gray-600 leading-relaxed">
                أن نكون المنصة التعليمية الرائدة عالمياً في تعليم القرآن الكريم
                واللغة العربية عبر الإنترنت، وأن نصل بالعلم الشرعي إلى كل بيت
                مسلم في العالم بأعلى معايير الجودة والإتقان.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-emerald-100">
              <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center mb-5">
                <Target className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">رسالتنا</h3>
              <p className="text-gray-600 leading-relaxed">
                تقديم تجربة تعليمية متميزة ومتكاملة لتعليم القرآن الكريم
                واللغة العربية عبر الإنترنت، من خلال معلمين مؤهلين ومجازين
                وأساليب تعليمية حديثة تناسب جميع الأعمار والمستويات.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">قيمنا</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-emerald-100 flex items-center justify-center">
                  <v.icon className="w-8 h-8 text-emerald-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
