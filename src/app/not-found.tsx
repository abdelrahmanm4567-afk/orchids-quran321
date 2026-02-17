import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-emerald-50 to-white">
      <div className="text-center px-4">
        <h1 className="text-8xl md:text-9xl font-bold text-emerald-200 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">الصفحة غير موجودة</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          عذراً، الصفحة التي تبحث عنها غير موجودة. ربما تم نقلها أو حذفها.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
            <Home className="w-5 h-5" />
            العودة للرئيسية
          </Link>
          <Link href="/contact" className="inline-flex items-center gap-2 border border-emerald-700 text-emerald-700 hover:bg-emerald-50 px-6 py-3 rounded-xl font-semibold transition-colors">
            اتصل بنا
            <ArrowRight className="w-5 h-5 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  );
}
