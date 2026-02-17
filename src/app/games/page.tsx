import { Metadata } from "next";
import GamesClient from "./GamesClient";

export const metadata: Metadata = {
  title: "الألعاب والمسابقات",
  description: "ألعاب تعليمية ومسابقات ممتعة لتعلم القرآن الكريم واللغة العربية - اكاديمية الحافظ المتميز اون لاين",
};

export default function GamesPage() {
  return <GamesClient />;
}
