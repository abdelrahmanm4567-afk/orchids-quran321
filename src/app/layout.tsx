import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata: Metadata = {
  title: {
    default: "اكاديمية الحافظ المتميز اون لاين | تعليم القرآن الكريم واللغة العربية",
    template: "%s | اكاديمية الحافظ المتميز",
  },
  description:
    "اكاديمية الحافظ المتميز اون لاين - منصة تعليمية عالمية متخصصة في تعليم القرآن الكريم والتجويد وتأسيس اللغة العربية عبر الإنترنت مع معلمين ومعلمات مجازين",
  keywords: [
    "تعليم القرآن الكريم",
    "تحفيظ القرآن اون لاين",
    "تجويد القرآن",
    "تعليم اللغة العربية",
    "تأسيس العربي",
    "اكاديمية الحافظ المتميز",
    "حفظ القرآن عن بعد",
    "معلم قرآن اون لاين",
    "دروس قرآن مباشرة",
    "learn Quran online",
    "Quran academy",
    "online Quran classes",
    "Arabic language learning",
    "Tajweed classes online",
  ],
  authors: [{ name: "اكاديمية الحافظ المتميز" }],
  creator: "اكاديمية الحافظ المتميز",
  publisher: "اكاديمية الحافظ المتميز",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ar_AR",
    siteName: "اكاديمية الحافظ المتميز اون لاين",
    title: "اكاديمية الحافظ المتميز اون لاين | تعليم القرآن الكريم واللغة العربية",
    description:
      "منصة تعليمية عالمية متخصصة في تعليم القرآن الكريم والتجويد وتأسيس اللغة العربية عبر الإنترنت",
  },
  twitter: {
    card: "summary_large_image",
    title: "اكاديمية الحافظ المتميز اون لاين",
    description:
      "منصة تعليمية عالمية متخصصة في تعليم القرآن الكريم والتجويد وتأسيس اللغة العربية",
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&family=Amiri:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#047857" />
      </head>
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingButtons />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
