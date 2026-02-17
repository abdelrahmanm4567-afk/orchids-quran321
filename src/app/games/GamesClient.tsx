"use client";

import { useState, useEffect, useCallback } from "react";
import { Trophy, RotateCcw, CheckCircle, XCircle, Gamepad2, BookOpen, Star, Timer, ArrowLeft } from "lucide-react";

// ======== GAME DATA ========
const quranQuestions = [
  { q: "ما هي أطول سورة في القرآن الكريم؟", options: ["سورة البقرة", "سورة آل عمران", "سورة النساء", "سورة المائدة"], correct: 0 },
  { q: "كم عدد سور القرآن الكريم؟", options: ["110", "114", "120", "124"], correct: 1 },
  { q: "ما هي السورة التي تسمى قلب القرآن؟", options: ["سورة الرحمن", "سورة يس", "سورة الملك", "سورة الكهف"], correct: 1 },
  { q: "كم عدد أجزاء القرآن الكريم؟", options: ["20", "25", "30", "35"], correct: 2 },
  { q: "ما هي أقصر سورة في القرآن الكريم؟", options: ["سورة الإخلاص", "سورة الفلق", "سورة الكوثر", "سورة الناس"], correct: 2 },
  { q: "في أي سورة وردت آية الكرسي؟", options: ["سورة البقرة", "سورة آل عمران", "سورة الأنعام", "سورة الأعراف"], correct: 0 },
  { q: "ما هي السورة التي تبدأ بـ 'الحمد لله'؟", options: ["سورة البقرة", "سورة الفاتحة", "سورة الأنعام", "سورة الكهف"], correct: 1 },
  { q: "كم مرة ذُكر اسم 'محمد' في القرآن الكريم؟", options: ["3 مرات", "4 مرات", "5 مرات", "6 مرات"], correct: 1 },
  { q: "ما هي السورة التي تسمى 'الفاضحة'؟", options: ["سورة المنافقون", "سورة التوبة", "سورة الأحزاب", "سورة المجادلة"], correct: 1 },
  { q: "أي سورة تُقرأ في كل ركعة من ركعات الصلاة؟", options: ["سورة الإخلاص", "سورة الفاتحة", "سورة البقرة", "سورة الكوثر"], correct: 1 },
];

const arabicLetters = [
  { letter: "أ", name: "ألف" }, { letter: "ب", name: "باء" }, { letter: "ت", name: "تاء" },
  { letter: "ث", name: "ثاء" }, { letter: "ج", name: "جيم" }, { letter: "ح", name: "حاء" },
  { letter: "خ", name: "خاء" }, { letter: "د", name: "دال" }, { letter: "ذ", name: "ذال" },
  { letter: "ر", name: "راء" }, { letter: "ز", name: "زاي" }, { letter: "س", name: "سين" },
  { letter: "ش", name: "شين" }, { letter: "ص", name: "صاد" }, { letter: "ض", name: "ضاد" },
  { letter: "ط", name: "طاء" }, { letter: "ظ", name: "ظاء" }, { letter: "ع", name: "عين" },
  { letter: "غ", name: "غين" }, { letter: "ف", name: "فاء" }, { letter: "ق", name: "قاف" },
  { letter: "ك", name: "كاف" }, { letter: "ل", name: "لام" }, { letter: "م", name: "ميم" },
  { letter: "ن", name: "نون" }, { letter: "هـ", name: "هاء" }, { letter: "و", name: "واو" },
  { letter: "ي", name: "ياء" },
];

const tajweedRules = [
  { q: "ما حكم النون الساكنة إذا جاء بعدها حرف الباء؟", options: ["إظهار", "إدغام", "إقلاب", "إخفاء"], correct: 2 },
  { q: "كم عدد حروف الإظهار الحلقي؟", options: ["4", "5", "6", "7"], correct: 2 },
  { q: "ما هي حروف الإظهار الشفوي؟", options: ["جميع الحروف ما عدا الباء والميم", "حروف الحلق", "حروف القلقلة", "حروف الاستعلاء"], correct: 0 },
  { q: "ما هي حروف القلقلة؟", options: ["ق ط ب ج د", "ص ض ط ظ", "هـ ع ح غ خ", "ي ر م ل و"], correct: 0 },
  { q: "المد الطبيعي يمد بمقدار:", options: ["حركة واحدة", "حركتين", "أربع حركات", "ست حركات"], correct: 1 },
  { q: "ما هو حكم اللام في لفظ الجلالة بعد الفتح؟", options: ["ترقق", "تفخم", "تسكن", "تحذف"], correct: 1 },
  { q: "الإدغام بغنة يكون في حروف:", options: ["ي ن م و", "ل ر", "ق ط ب ج د", "هـ ع ح"], correct: 0 },
  { q: "كم مقدار مد المنفصل عند حفص؟", options: ["حركتان", "ثلاث حركات", "أربع أو خمس حركات", "ست حركات"], correct: 2 },
];

// ======== QUIZ GAME COMPONENT ========
function QuizGame({ questions, title, color }: { questions: typeof quranQuestions; title: string; color: string }) {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);
  const [shuffled, setShuffled] = useState(questions);

  useEffect(() => {
    setShuffled([...questions].sort(() => Math.random() - 0.5).slice(0, 10));
  }, [questions]);

  const handleAnswer = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === shuffled[current].correct) setScore((s) => s + 1);
    setTimeout(() => {
      if (current + 1 < shuffled.length) {
        setCurrent((c) => c + 1);
        setSelected(null);
      } else {
        setFinished(true);
      }
    }, 1000);
  };

  const restart = () => {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setFinished(false);
    setShuffled([...questions].sort(() => Math.random() - 0.5).slice(0, 10));
  };

  if (finished) {
    return (
      <div className="text-center py-10">
        <Trophy className="w-20 h-20 mx-auto text-amber-500 mb-4" />
        <h3 className="text-3xl font-bold text-gray-900 mb-2">أحسنت!</h3>
        <p className="text-xl text-gray-600 mb-6">
          حصلت على <span className="font-bold text-emerald-700">{score}</span> من{" "}
          <span className="font-bold">{shuffled.length}</span>
        </p>
        <div className="flex justify-center gap-2 mb-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`w-8 h-8 ${i < Math.ceil((score / shuffled.length) * 5) ? "fill-amber-400 text-amber-400" : "text-gray-300"}`} />
          ))}
        </div>
        <button onClick={restart} className={`inline-flex items-center gap-2 ${color} text-white px-6 py-3 rounded-xl font-semibold`}>
          <RotateCcw className="w-5 h-5" />
          أعد المحاولة
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm font-medium text-gray-500">السؤال {current + 1} من {shuffled.length}</span>
        <span className="text-sm font-bold text-emerald-700">النقاط: {score}</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full mb-8">
        <div className={`h-full ${color} rounded-full transition-all duration-300`} style={{ width: `${((current + 1) / shuffled.length) * 100}%` }} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-6">{shuffled[current].q}</h3>
      <div className="grid gap-3">
        {shuffled[current].options.map((opt, idx) => {
          let cls = "bg-white border-2 border-gray-200 hover:border-emerald-400";
          if (selected !== null) {
            if (idx === shuffled[current].correct) cls = "bg-emerald-50 border-2 border-emerald-500";
            else if (idx === selected) cls = "bg-red-50 border-2 border-red-400";
          }
          return (
            <button
              key={idx}
              onClick={() => handleAnswer(idx)}
              disabled={selected !== null}
              className={`p-4 rounded-xl text-right font-medium transition-all ${cls} flex items-center justify-between`}
            >
              <span>{opt}</span>
              {selected !== null && idx === shuffled[current].correct && <CheckCircle className="w-5 h-5 text-emerald-600" />}
              {selected !== null && idx === selected && idx !== shuffled[current].correct && <XCircle className="w-5 h-5 text-red-500" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ======== MEMORY GAME ========
function MemoryGame() {
  const [cards, setCards] = useState<{ id: number; text: string; matched: boolean; flipped: boolean }[]>([]);
  const [flippedIds, setFlippedIds] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [completed, setCompleted] = useState(false);

  const initGame = useCallback(() => {
    const selected = arabicLetters.sort(() => Math.random() - 0.5).slice(0, 6);
    const pairs = selected.flatMap((l, i) => [
      { id: i * 2, text: l.letter, matched: false, flipped: false },
      { id: i * 2 + 1, text: l.name, matched: false, flipped: false },
    ]).sort(() => Math.random() - 0.5);
    setCards(pairs);
    setFlippedIds([]);
    setMoves(0);
    setCompleted(false);
  }, []);

  useEffect(() => { initGame(); }, [initGame]);

  const handleFlip = (id: number) => {
    if (flippedIds.length === 2) return;
    const card = cards.find((c) => c.id === id);
    if (!card || card.matched || card.flipped) return;

    const newCards = cards.map((c) => (c.id === id ? { ...c, flipped: true } : c));
    setCards(newCards);
    const newFlipped = [...flippedIds, id];
    setFlippedIds(newFlipped);

    if (newFlipped.length === 2) {
      setMoves((m) => m + 1);
      const [first, second] = newFlipped.map((fid) => newCards.find((c) => c.id === fid)!);
      const letter = arabicLetters.find((l) => l.letter === first.text || l.name === first.text);
      const isMatch = letter && ((first.text === letter.letter && second.text === letter.name) || (first.text === letter.name && second.text === letter.letter));

      if (isMatch) {
        setTimeout(() => {
          const matched = newCards.map((c) => (c.id === first.id || c.id === second.id ? { ...c, matched: true } : c));
          setCards(matched);
          setFlippedIds([]);
          if (matched.every((c) => c.matched)) setCompleted(true);
        }, 500);
      } else {
        setTimeout(() => {
          setCards(newCards.map((c) => (c.id === first.id || c.id === second.id ? { ...c, flipped: false } : c)));
          setFlippedIds([]);
        }, 1000);
      }
    }
  };

  if (completed) {
    return (
      <div className="text-center py-10">
        <Trophy className="w-20 h-20 mx-auto text-amber-500 mb-4" />
        <h3 className="text-3xl font-bold text-gray-900 mb-2">ممتاز!</h3>
        <p className="text-xl text-gray-600 mb-6">أتممت اللعبة في {moves} محاولة</p>
        <button onClick={initGame} className="inline-flex items-center gap-2 bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold">
          <RotateCcw className="w-5 h-5" />
          العب مرة أخرى
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm font-medium text-gray-500">طابق الحرف مع اسمه</span>
        <span className="text-sm font-bold text-emerald-700">المحاولات: {moves}</span>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
        {cards.map((card) => (
          <button
            key={card.id}
            onClick={() => handleFlip(card.id)}
            className={`h-20 sm:h-24 rounded-xl text-xl font-bold transition-all duration-300 ${
              card.matched
                ? "bg-emerald-100 text-emerald-700 border-2 border-emerald-300"
                : card.flipped
                ? "bg-amber-50 text-amber-700 border-2 border-amber-300"
                : "bg-emerald-700 text-white hover:bg-emerald-600 cursor-pointer"
            }`}
          >
            {card.flipped || card.matched ? card.text : "؟"}
          </button>
        ))}
      </div>
    </div>
  );
}

// ======== MAIN PAGE ========
const games = [
  { id: "quran-quiz", title: "مسابقة القرآن الكريم", desc: "اختبر معلوماتك عن القرآن الكريم", icon: BookOpen, color: "bg-emerald-700" },
  { id: "tajweed-quiz", title: "مسابقة التجويد", desc: "اختبر معرفتك بأحكام التجويد", icon: Star, color: "bg-amber-600" },
  { id: "memory", title: "لعبة الذاكرة - الحروف العربية", desc: "طابق الحرف العربي مع اسمه", icon: Gamepad2, color: "bg-blue-700" },
];

export default function GamesClient() {
  const [activeGame, setActiveGame] = useState<string | null>(null);

  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="relative bg-gradient-to-bl from-emerald-900 via-emerald-800 to-emerald-950 text-white py-20 md:py-28">
        <div className="absolute inset-0 islamic-pattern opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">الألعاب والمسابقات</h1>
          <p className="text-lg md:text-xl text-emerald-200 leading-relaxed max-w-3xl mx-auto">
            ألعاب تعليمية ومسابقات ممتعة لتعلم القرآن الكريم واللغة العربية بطريقة تفاعلية
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {!activeGame ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {games.map((g) => (
                <button
                  key={g.id}
                  onClick={() => setActiveGame(g.id)}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all p-6 text-right group"
                >
                  <div className={`w-14 h-14 rounded-xl ${g.color} text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <g.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{g.title}</h3>
                  <p className="text-sm text-gray-600">{g.desc}</p>
                </button>
              ))}
            </div>
          ) : (
            <div>
              <button
                onClick={() => setActiveGame(null)}
                className="inline-flex items-center gap-2 text-emerald-700 font-semibold mb-6 hover:text-emerald-800"
              >
                <ArrowLeft className="w-4 h-4 rotate-180" />
                العودة للألعاب
              </button>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
                {activeGame === "quran-quiz" && <QuizGame questions={quranQuestions} title="مسابقة القرآن الكريم" color="bg-emerald-700" />}
                {activeGame === "tajweed-quiz" && <QuizGame questions={tajweedRules} title="مسابقة التجويد" color="bg-amber-600" />}
                {activeGame === "memory" && <MemoryGame />}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
