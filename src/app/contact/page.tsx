import { Metadata } from "next";
import { Mail, Phone, MessageCircle, Send, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "اتصل بنا",
  description: "تواصل مع اكاديمية الحافظ المتميز اون لاين - واتساب، تيليجرام، بريد إلكتروني",
};

export default function ContactPage() {
  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="relative bg-gradient-to-bl from-emerald-900 via-emerald-800 to-emerald-950 text-white py-20 md:py-28">
        <div className="absolute inset-0 islamic-pattern opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">اتصل بنا</h1>
          <p className="text-lg md:text-xl text-emerald-200 leading-relaxed max-w-3xl mx-auto">
            نسعد بتواصلكم معنا والإجابة على جميع استفساراتكم
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">معلومات التواصل</h2>
              <div className="space-y-6">
                <a href="https://wa.me/201130127894" target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-4 p-4 rounded-xl bg-green-50 hover:bg-green-100 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center text-white">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">واتساب</p>
                    <p className="text-gray-600 text-sm">+201130127894</p>
                  </div>
                </a>
                <a href="https://t.me/acabemy_quraan" target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-4 p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center text-white">
                    <Send className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">تيليجرام</p>
                    <p className="text-gray-600 text-sm">@acabemy_quraan</p>
                  </div>
                </a>
                <a href="mailto:enamel311@gmail.com"
                   className="flex items-center gap-4 p-4 rounded-xl bg-red-50 hover:bg-red-100 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-red-500 flex items-center justify-center text-white">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">البريد الإلكتروني</p>
                    <p className="text-gray-600 text-sm">enamel311@gmail.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-amber-50">
                  <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center text-white">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">ساعات العمل</p>
                    <p className="text-gray-600 text-sm">السبت - الجمعة: 8 صباحاً - 11 مساءً (بتوقيت القاهرة)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">أرسل رسالة</h2>
              <form className="space-y-4" action={`mailto:enamel311@gmail.com`} method="GET">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">الاسم الكامل</label>
                  <input type="text" name="name" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-right" placeholder="أدخل اسمك الكامل" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">البريد الإلكتروني</label>
                  <input type="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-right" placeholder="أدخل بريدك الإلكتروني" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">رقم الهاتف</label>
                  <input type="tel" name="phone" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-right" placeholder="أدخل رقم هاتفك" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">الموضوع</label>
                  <input type="text" name="subject" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-right" placeholder="موضوع الرسالة" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">الرسالة</label>
                  <textarea name="body" rows={4} required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-right resize-none" placeholder="اكتب رسالتك هنا..." />
                </div>
                <button type="submit" className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-3 rounded-xl font-semibold transition-colors">
                  إرسال الرسالة
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
