"use client";

import React from "react";
import Link from "next/link";
import {
  BookOpen,
  Laptop,
  Languages,
  ShieldCheck,
  Quote,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function WhyChooseUs() {
  const { language } = useLanguage();

  const content = {
    bn: {
      badge: "প্রতিষ্ঠান পরিচিতি",
      title: "আধুনিক সুযোগ-সুবিধা ও দ্বীনি শিক্ষার অপূর্ব সমন্বয়",
      description:
        "আস-সালাম আইডিয়াল মাদরাসা (এইম) কুরআন-সুন্নাহর মৌলিক শিক্ষার উপর ভিত্তি করে প্রতিষ্ঠিত একটি আধুনিক ও যুগোপযোগী শিক্ষা প্রতিষ্ঠান। এখানে শিক্ষার্থীদের জন্য কুরআন হিফজের বিশেষ ব্যবস্থার পাশাপাশি জাতীয় কারিকুলাম, ইংরেজি ভাষা দক্ষতা, গণিত ও তথ্যপ্রযুক্তির উপর সর্বোচ্চ গুরুত্ব দেওয়া হয়।",
      cardEst: "প্রতিষ্ঠা ২০১০ ইং",
      cardTitle: "আদর্শ চরিত্র ও ইলমে ওহির প্রদীপ্ত আঙিনা",
      cardSub: "সুন্নাহ ভিত্তিক জীবনধারা গঠন ও বিজ্ঞানমনস্ক নৈতিক প্রজন্ম তৈরির প্রত্যয়।",
      cardQuote:
        "“তোমাদের মধ্যে সর্বোত্তম ব্যক্তি সে, যে নিজে কুরআন শিখে এবং অন্যকে শেখায়।” — সহীহ বুখারী",
      badgeSafe: "নিরাপদ আবাসিক পরিবেশ",
      badgeSafeSub: "২৪ ঘণ্টা সিসিটিভি ও স্নেহপূর্ণ তত্ত্বাবধান",
      features: [
        {
          icon: BookOpen,
          title: "তাজবীদসহ হিফজুল কুরআন",
          desc: "আন্তর্জাতিক মানের ক্বারীগণের তত্ত্বাবধানে বিশুদ্ধ লাহনে পবিত্র কুরআন হিফজের সুব্যবস্থা।",
        },
        {
          icon: Laptop,
          title: "কম্পিউটার ও স্মার্ট ক্লাস",
          desc: "প্রাথমিক পর্যায় থেকেই আধুনিক প্রযুক্তি, কম্পিউটার বেসিক ও ইন্টারেক্টিভ লার্নিং।",
        },
        {
          icon: Languages,
          title: "ত্রিভাষিক কথপোকথন ও সাহিত্য",
          desc: "আরবি, ইংরেজি ও মাতৃভাষা বাংলায় নিয়মিত স্পোকেন প্র্যাকটিস ও সাহিত্য ক্লাব পরিচালনা।",
        },
        {
          icon: ShieldCheck,
          title: "স্বাস্থ্যসম্মত খাবার ও হোস্টেল",
          desc: "আবাসিক শিক্ষার্থীদের জন্য পুষ্টিকর মেস ব্যবস্থাপনা, সুপরিসর ডাইনিং ও স্বাস্থ্য সচেতনতা।",
        },
      ],
    },
    en: {
      badge: "About Institution",
      title: "Harmony of Islamic Values & Modern Facilities",
      description:
        "As-Salam Ideal Madrasah (AIM) is founded on authentic Islamic scholarship and modern pedagogy. Alongside specialized Quran memorization, we emphasize national curriculum subjects, English fluency, mathematics, and digital skills.",
      cardEst: "Est. 2010",
      cardTitle: "A Beacon of Divine Wisdom & Moral Character",
      cardSub: "Building prophetic character and technologically empowered future leaders.",
      cardQuote:
        "“The best among you are those who learn the Quran and teach it.” — Sahih Bukhari",
      badgeSafe: "Secure Residential Hostel",
      badgeSafeSub: "24/7 CCTV surveillance & dedicated mentorship",
      features: [
        {
          icon: BookOpen,
          title: "Hifzul Quran with Tajweed",
          desc: "Guided by certified masters for melodious recitation and structured memorization.",
        },
        {
          icon: Laptop,
          title: "Smart Computer & IT Lab",
          desc: "Early immersion into digital tools, coding fundamentals, and interactive learning.",
        },
        {
          icon: Languages,
          title: "Trilingual Language Mastery",
          desc: "Daily practical conversation and literary clubs in Arabic, English, and Bengali.",
        },
        {
          icon: ShieldCheck,
          title: "Nutritious Meals & Hostel Care",
          desc: "Hygienic living quarters, balanced dining, and full-time compassionate mentors.",
        },
      ],
    },
    ar: {
      badge: "نبذة عن المدرسة",
      title: "تكامل فريد بين أصالة التعليم الشرعي والتفوق الأكاديمي",
      description:
        "مدرسة السلام النموذجية مؤسسة تعليمية رائدة تجمع بين تعليم القرآن الكريم والسنة النبوية وبين المناهج الأكاديمية الحديثة من لغات ورياضيات وتقنيات حاسوبية لبناء جيل نافع لأمته.",
      cardEst: "تأسست ۲۰۱۰ م",
      cardTitle: "صرح الأخلاق والعلوم الشرعية المباركة",
      cardSub: "تنشئة جيل قرآني متخلق بأخلاق النبوة ومتقن لعلوم العصر.",
      cardQuote:
        "«خيركم من تعلم القرآن وعلمه» — صحيح البخاري",
      badgeSafe: "بيئة سكنية آمنة ومتميزة",
      badgeSafeSub: "إشراف تربوي على مدار الساعة وكاميرات مراقبة",
      features: [
        {
          icon: BookOpen,
          title: "تحفيظ القرآن بالتجويد والإتقان",
          desc: "إشراف نخبة من القراء المتقنين لضبط المخارج والترتيل العذب.",
        },
        {
          icon: Laptop,
          title: "مختبر الحاسوب والتعليم الذكي",
          desc: "تدريب الطلاب على المهارات الرقمية والوسائط التعليمية الحديثة.",
        },
        {
          icon: Languages,
          title: "إتقان اللغات الثلاث",
          desc: "أنشطة محادثة مستمرة باللغة العربية والإنجليزية واللغة الأم.",
        },
        {
          icon: ShieldCheck,
          title: "تغذية صحية وسكن طلابي مريح",
          desc: "وجبات متوازنة وإشراف طبي وتربوي متكامل لراحة الطلاب.",
        },
      ],
    },
  };

  const active = content[language] || content.bn;

  return (
    <section id="about" className="py-16 sm:py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* ================= LEFT COLUMN: STYLIZED GRAPHIC CARD ================= */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Stylized Graphic Card (aimpurbachal exact gradient & elevation) */}
              <div className="w-full aspect-[4/3] rounded-3xl bg-gradient-to-tr from-madrasah-primary via-madrasah-accent to-madrasah-light p-6 sm:p-8 shadow-2xl overflow-hidden flex flex-col justify-between text-white relative">
                <div className="absolute -right-8 -bottom-8 w-44 h-44 bg-white/10 rounded-full blur-xl pointer-events-none" />
                
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm mb-4">
                    {active.cardEst}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold leading-snug">
                    {active.cardTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-100 mt-2 leading-relaxed">
                    {active.cardSub}
                  </p>
                </div>

                {/* Hadith Quote Pill */}
                <div className="relative z-10 bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/20 text-xs leading-relaxed mt-4">
                  <div className="flex items-start gap-2">
                    <Quote className="w-4 h-4 text-madrasah-border shrink-0 mt-0.5" />
                    <span>{active.cardQuote}</span>
                  </div>
                </div>
              </div>

              {/* Floating Feature Badge */}
              <div className="absolute -bottom-5 -right-2 sm:right-6 bg-white dark:bg-slate-800 border border-madrasah-border shadow-lg rounded-2xl p-3.5 sm:p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-madrasah-light dark:bg-blue-900/40 text-madrasah-accent flex items-center justify-center text-xl shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-800 dark:text-white text-xs sm:text-sm">
                    {active.badgeSafe}
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">
                    {active.badgeSafeSub}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: ABOUT DETAILS & 4-CARD FEATURE GRID ================= */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div>
              <span className="text-madrasah-accent font-bold text-xs sm:text-sm tracking-wider uppercase">
                {active.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-madrasah-primary dark:text-white leading-tight mt-1.5">
                {active.title}
              </h2>
            </div>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              {active.description}
            </p>

            {/* 4 Feature Cards Grid (Exact aimpurbachal styling: rounded-2xl bg-madrasah-light border border-madrasah-border/60) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {active.features.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="p-4 rounded-2xl bg-madrasah-light/60 dark:bg-slate-800/60 border border-madrasah-border/60 dark:border-slate-700/80 hover:border-madrasah-accent transition duration-200"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-madrasah-light dark:bg-slate-700 flex items-center justify-center text-madrasah-primary dark:text-blue-400 shrink-0">
                        <IconComponent className="w-4 h-4 text-madrasah-primary dark:text-blue-400" />
                      </div>
                      <h3 className="font-bold text-madrasah-primary dark:text-blue-300 text-sm sm:text-base">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed ps-1">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
