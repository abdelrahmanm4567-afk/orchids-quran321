import { Metadata } from "next";
import { Award, BookOpen, Star, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "المعلمين والمعلمات",
  description: "تعرف على نخبة المعلمين والمعلمات المجازين في اكاديمية الحافظ المتميز اون لاين",
};

const teachers = [
  { name: "الشيخ أحمد محمد", specialty: "حفظ القرآن الكريم", experience: "15 سنة", certifications: "إجازة بالقراءات العشر", gender: "male" },
  { name: "الشيخ عبدالرحمن يوسف", specialty: "التجويد وعلوم القرآن", experience: "12 سنة", certifications: "إجازة في حفص عن عاصم", gender: "male" },
  { name: "الشيخ محمود حسن", specialty: "حفظ القرآن والتفسير", experience: "10 سنوات", certifications: "إجازة بالسند المتصل", gender: "male" },
  { name: "الأستاذة فاطمة أحمد", specialty: "تحفيظ القرآن للأطفال", experience: "8 سنوات", certifications: "إجازة في حفص عن عاصم", gender: "female" },
  { name: "الأستاذة مريم عبدالله", specialty: "تأسيس اللغة العربية", experience: "10 سنوات", certifications: "ماجستير في اللغة العربية", gender: "female" },
  { name: "الشيخ خالد إبراهيم", specialty: "القراءات والتجويد", experience: "18 سنة", certifications: "إجازة بالقراءات السبع", gender: "male" },
  { name: "الأستاذة نور الهدى", specialty: "تحفيظ القرآن للنساء", experience: "7 سنوات", certifications: "إجازة في حفص عن عاصم", gender: "female" },
  { name: "الشيخ عمر سعيد", specialty: "التجويد والمقامات", experience: "14 سنة", certifications: "إجازة بالقراءات العشر", gender: "male" },
  { name: "الأستاذة سارة محمد", specialty: "تأسيس العربي للأطفال", experience: "6 سنوات", certifications: "بكالوريوس تربية لغة عربية", gender: "female" },
  { name: "الشيخ يوسف علي", specialty: "حفظ القرآن والتجويد", experience: "11 سنة", certifications: "إجازة في حفص عن عاصم", gender: "male" },
  { name: "الأستاذة هاجر حسين", specialty: "القاعدة النورانية", experience: "9 سنوات", certifications: "إجازة في القاعدة النورانية", gender: "female" },
  { name: "الشيخ إسلام عبدالحميد", specialty: "التفسير وعلوم القرآن", experience: "13 سنة", certifications: "دكتوراه في علوم القرآن", gender: "male" },
];

export default function TeachersPage() {
  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="relative bg-gradient-to-bl from-emerald-900 via-emerald-800 to-emerald-950 text-white py-20 md:py-28">
        <div className="absolute inset-0 islamic-pattern opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">المعلمين والمعلمات</h1>
          <p className="text-lg md:text-xl text-emerald-200 leading-relaxed max-w-3xl mx-auto">
            نخبة من المعلمين والمعلمات المجازين بأعلى الأسانيد المتصلة إلى رسول الله صلى الله عليه وسلم
          </p>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teachers.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all overflow-hidden group">
                <div className={`h-3 ${t.gender === "male" ? "bg-emerald-600" : "bg-purple-600"}`} />
                <div className="p-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white text-2xl font-bold ${
                    t.gender === "male" ? "bg-emerald-100 text-emerald-700" : "bg-purple-100 text-purple-700"
                  }`}>
                    {t.gender === "male" ? (
                      <GraduationCap className="w-8 h-8" />
                    ) : (
                      <BookOpen className="w-8 h-8" />
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 text-center mb-1">{t.name}</h3>
                  <p className={`text-sm text-center mb-3 ${t.gender === "male" ? "text-emerald-600" : "text-purple-600"}`}>
                    {t.specialty}
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-amber-500" />
                      <span>الخبرة: {t.experience}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-amber-500" />
                      <span>{t.certifications}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
