import { Metadata } from "next";
import { Star, Quote, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "آراء طلابنا",
  description: "نماذج وآراء طلاب اكاديمية الحافظ المتميز اون لاين وأولياء أمورهم",
};

const testimonials = [
  { name: "أم عبدالله", country: "السعودية", text: "أكاديمية رائعة والمعلمة ممتازة جداً، ابنتي أتمت حفظ جزء عم في شهرين فقط. أنصح الجميع بالتجربة.", rating: 5 },
  { name: "أبو محمد", country: "أمريكا", text: "أفضل أكاديمية للتعليم عن بعد، أبنائي يحبون معلميهم جداً والمستوى في تقدم مستمر بفضل الله.", rating: 5 },
  { name: "أم سارة", country: "بريطانيا", text: "كنت أبحث عن معلمة مجازة لتحفيظ ابنتي القرآن وجدت ما أبحث عنه هنا. جودة عالية وأسعار مناسبة.", rating: 5 },
  { name: "أحمد حسن", country: "كندا", text: "انضممت للأكاديمية منذ سنة وأتممت حفظ 10 أجزاء بفضل الله. المعلم متميز والمنهج رائع.", rating: 5 },
  { name: "أم يوسف", country: "ألمانيا", text: "ابني كان لا يعرف القراءة بالعربية والآن بعد 4 أشهر يقرأ القرآن بطلاقة. شكراً للأكاديمية.", rating: 5 },
  { name: "فاطمة", country: "فرنسا", text: "المعلمة رائعة والحصص ممتعة جداً. أحس بتطور كبير في حفظي وتجويدي. جزاكم الله خيراً.", rating: 5 },
  { name: "أبو خالد", country: "أستراليا", text: "سجلت أبنائي الثلاثة وكلهم متحمسون للحصص. المرونة في المواعيد ميزة عظيمة.", rating: 5 },
  { name: "أم آية", country: "الإمارات", text: "ابنتي حصلت على إجازة في حفص عن عاصم من خلال الأكاديمية. أنصح كل أم بتسجيل أبنائها.", rating: 5 },
  { name: "عمر", country: "تركيا", text: "أفضل استثمار في حياتي. تعلمت القراءة الصحيحة للقرآن وأنا في الأربعين من عمري.", rating: 5 },
  { name: "أم عائشة", country: "هولندا", text: "خدمة ممتازة ومتابعة مستمرة. يرسلون لي تقارير أسبوعية عن مستوى ابنتي.", rating: 5 },
  { name: "إبراهيم", country: "ماليزيا", text: "تعلمت اللغة العربية من الصفر والآن أقرأ القرآن بدون أخطاء. الحمد لله.", rating: 5 },
  { name: "أم حمزة", country: "السويد", text: "المعلمون محترفون ويتعاملون مع الأطفال بصبر وحب. ابني يتشوق لكل حصة.", rating: 4 },
];

export default function TestimonialsPage() {
  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="relative bg-gradient-to-bl from-emerald-900 via-emerald-800 to-emerald-950 text-white py-20 md:py-28">
        <div className="absolute inset-0 islamic-pattern opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">آراء طلابنا</h1>
          <p className="text-lg md:text-xl text-emerald-200 leading-relaxed max-w-3xl mx-auto">
            نفتخر بثقة طلابنا وأولياء أمورهم من جميع أنحاء العالم
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all p-6">
                <Quote className="w-8 h-8 text-emerald-200 mb-3" />
                <p className="text-gray-600 leading-relaxed mb-4">{t.text}</p>
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <Star key={si} className={`w-4 h-4 ${si < t.rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}`} />
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-gray-900">{t.name}</span>
                  <span className="flex items-center gap-1 text-xs text-gray-500">
                    <MapPin className="w-3 h-3" />
                    {t.country}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
