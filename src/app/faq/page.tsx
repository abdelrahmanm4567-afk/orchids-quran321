import { Metadata } from "next";
import FAQClient from "./FAQClient";

export const metadata: Metadata = {
  title: "الأسئلة الشائعة",
  description: "إجابات على أكثر الأسئلة شيوعاً حول اكاديمية الحافظ المتميز اون لاين وبرامجها التعليمية",
};

export default function FAQPage() {
  return <FAQClient />;
}
