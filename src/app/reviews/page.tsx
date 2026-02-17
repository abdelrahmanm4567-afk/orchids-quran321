import { Metadata } from "next";
import { Star, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "آراء طلابنا",
  description: "نماذج وآراء طلابنا في اكاديمية الحافظ المتميز اون لاين - تجارب حقيقية من طلاب حول العالم",
};

const reviews = [
  { name: "أم محمد", country: "السعودية", rating: 5, text: "تجربة رائعة جداً مع الأكاديمية. ابني حفظ 5 أجزاء في أقل من سنة بفضل الله ثم بفضل المعلم المتميز الذي يتابعه باستمرار." },
  { name: "أحمد علي", country: "مصر", rating: 5, text: "أفضل أكاديمية تعاملت معها. المعلمون محترفون ومجازون والمنهج متكامل. أنصح الجميع بالتسجيل." },
  { name: "فاطمة حسن", country: "الإمارات", rating: 5, text: "بناتي استفادوا كثيراً من برنامج التأسيس العربي. أصبحوا يقرأون ويكتبون بطلاقة والحمد لله." },
  { name: "عبدالله محمد", country: "أمريكا", rating: 5, text: "كنت أبحث عن أكاديمية موثوقة لتعليم أبنائي القرآن عن بعد ووجدت ضالتي في أكاديمية الحافظ المتميز." },
  { name: "أم عمر", country: "بريطانيا", rating: 5, text: "المرونة في المواعيد ممتازة جداً. نستطيع اختيار الوقت المناسب لنا مع فرق التوقيت والحمد لله." },
  { name: "خالد إبراهيم", country: "كندا", rating: 5, text: "ابني كان يعاني في النطق الصحيح للحروف والآن بفضل الله أصبح يقرأ القرآن بتجويد صحيح." },
  { name: "مريم أحمد", country: "ألمانيا", rating: 5, text: "تجربتي مع الأكاديمية أكثر من رائعة. المتابعة مستمرة والتذكير بالحصص يساعدني كثيراً." },
  { name: "أبو يوسف", country: "فرنسا", rating: 5, text: "أبنائي الثلاثة مسجلين في الأكاديمية ومستواهم تحسن بشكل ملحوظ. جزاكم الله خيراً." },
  { name: "سارة عبدالرحمن", country: "تركيا", rating: 5, text: "أنا سعيدة جداً بالنتائج. المعلمة صبورة جداً مع ابنتي وتشجعها دائماً." },
  { name: "محمد حسين", country: "ماليزيا", rating: 5, text: "الأسعار مناسبة جداً مقارنة بالجودة العالية. أنصح كل عائلة مسلمة بالتسجيل." },
  { name: "أم أحمد", country: "قطر", rating: 5, text: "الإشراف والمتابعة من الإدارة ممتازة. يتواصلون معنا باستمرار للاطمئنان على مستوى أبنائنا." },
  { name: "عمر خالد", country: "الأردن", rating: 5, text: "حصلت على إجازة في حفص عن عاصم من خلال الأكاديمية. شكراً لكم على هذا العمل المبارك." },
];

export default function ReviewsPage() {
  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="relative bg-gradient-to-bl from-emerald-900 via-emerald-800 to-emerald-950 text-white py-20 md:py-28">
        <div className="absolute inset-0 islamic-pattern opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">نماذج وآراء طلابنا</h1>
          <p className="text-lg md:text-xl text-emerald-200 leading-relaxed max-w-3xl mx-auto">
            تجارب حقيقية من طلابنا حول العالم تعكس جودة التعليم والمتابعة المستمرة
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all p-6 relative">
                <Quote className="absolute top-4 left-4 w-8 h-8 text-emerald-100" />
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-4 relative z-10">{r.text}</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-bold text-gray-900">{r.name}</p>
                  <p className="text-sm text-emerald-600">{r.country}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
