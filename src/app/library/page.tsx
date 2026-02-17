import { Metadata } from "next";
import { BookOpen, ExternalLink, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "المكتبة",
  description: "مكتبة اكاديمية الحافظ المتميز - كتب ومراجع في القرآن الكريم والتجويد واللغة العربية",
};

const books = [
  { title: "تحفة الأطفال", author: "الإمام الجمزوري", category: "التجويد", description: "منظومة في تجويد القرآن الكريم للمبتدئين", link: "https://archive.org/details/tohfat-alatfal" },
  { title: "الجزرية في التجويد", author: "ابن الجزري", category: "التجويد", description: "منظومة شاملة في علم التجويد وأحكامه", link: "https://archive.org/details/al-jazariyyah" },
  { title: "القاعدة النورانية", author: "الشيخ نور محمد حقاني", category: "تأسيس", description: "أساسيات القراءة العربية ونطق الحروف", link: "https://archive.org/details/al-qaida-noorania" },
  { title: "تفسير السعدي", author: "الشيخ عبدالرحمن السعدي", category: "التفسير", description: "تيسير الكريم الرحمن في تفسير كلام المنان", link: "https://archive.org/details/tafsir-sa3di" },
  { title: "تفسير ابن كثير", author: "الحافظ ابن كثير", category: "التفسير", description: "من أشهر كتب التفسير بالمأثور", link: "https://archive.org/details/tafsir-ibn-kathir" },
  { title: "البرهان في تجويد القرآن", author: "محمد الصادق قمحاوي", category: "التجويد", description: "كتاب شامل في أحكام التجويد النظرية والتطبيقية", link: "https://archive.org/details/al-burhan-tajweed" },
  { title: "المنير في أحكام التجويد", author: "جمعية المحافظة على القرآن", category: "التجويد", description: "كتاب مبسط في أحكام التجويد مع أمثلة تطبيقية", link: "https://archive.org/details/al-munir-tajweed" },
  { title: "نور البيان", author: "الشيخ طارق السعيد", category: "تأسيس", description: "منهج متكامل لتعليم القراءة والنطق الصحيح", link: "https://archive.org/details/noor-albayan" },
  { title: "العربية بين يديك", author: "مجموعة مؤلفين", category: "لغة عربية", description: "سلسلة متكاملة لتعليم اللغة العربية لغير الناطقين بها", link: "https://archive.org/details/arabic-between-your-hands" },
  { title: "معلم القراءة العربية", author: "أحمد محمد", category: "تأسيس", description: "كتاب لتعليم أساسيات القراءة العربية للمبتدئين", link: "https://archive.org/details/arabic-reading-teacher" },
  { title: "أطلس التجويد", author: "أيمن سويد", category: "التجويد", description: "أطلس مصور لمخارج الحروف وصفاتها", link: "https://archive.org/details/atlas-tajweed" },
  { title: "الملخص المفيد في علم التجويد", author: "محمد أحمد معبد", category: "التجويد", description: "ملخص شامل ومبسط لأحكام التجويد", link: "https://archive.org/details/summary-tajweed" },
];

const categories = ["الكل", "التجويد", "التفسير", "تأسيس", "لغة عربية"];

export default function LibraryPage() {
  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="relative bg-gradient-to-bl from-emerald-900 via-emerald-800 to-emerald-950 text-white py-20 md:py-28">
        <div className="absolute inset-0 islamic-pattern opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">المكتبة</h1>
          <p className="text-lg md:text-xl text-emerald-200 leading-relaxed max-w-3xl mx-auto">
            مجموعة مختارة من أفضل الكتب والمراجع في القرآن الكريم والتجويد واللغة العربية
          </p>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {books.map((book, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all overflow-hidden group">
                <div className="h-40 bg-gradient-to-br from-emerald-700 to-emerald-800 flex items-center justify-center relative">
                  <BookOpen className="w-16 h-16 text-white/30" />
                  <div className="absolute top-3 right-3 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
                    {book.category}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1">{book.title}</h3>
                  <p className="text-sm text-emerald-600 mb-2">{book.author}</p>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2">{book.description}</p>
                  <a
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    اقرأ الكتاب
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
