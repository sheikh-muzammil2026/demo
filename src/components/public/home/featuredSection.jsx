"use client";

import React from "react";
import Link from "next/link";
import {
  BookOpen,
  Shapes,
  School,
  Feather,
  Check,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function FeaturedSections() {
  const { language } = useLanguage();

  const content = {
    bn: {
      badge: "একাডেমিক বিভাগসমূহ",
      title: "আমাদের শিক্ষা কার্যক্রম ও পাঠ্যধারা",
      subtitle:
        "শিশু শ্রেণি থেকে শুরু করে দাখিল স্তর ও আন্তর্জাতিক মানসম্পন্ন হিফজ পাঠক্রমের সুবিন্যস্ত বিন্যাস।",
      programs: [
        {
          id: "hifz",
          icon: BookOpen,
          tag: "হিফজুল কুরআন বিভাগ",
          title: "আন্তর্জাতিক তাহফিজ প্রোগ্রাম",
          desc: "অভিজ্ঞ হাফেজে কুরআনদের তত্ত্বাবধানে তাজবীদ, হুসনুত তিলাওয়াত ও ৬ মাস থেকে ৩ বছরের বিশেষ হিফজ কোর্স।",
          points: [
            "দৈনিক সবক ও আমুখতা (দাওর) পর্যালোচনা",
            "বার্ষিক হুসনে কুরআন প্রতিযোগিতা",
            "আন্তর্জাতিক ক্বেরাত ও তাজবীদ প্রশিক্ষণ",
          ],
          href: "/admission/form",
        },
        {
          id: "nurani",
          icon: Shapes,
          tag: "নূরানী ও প্রাক-প্রাথমিক",
          title: "প্লে থেকে দ্বিতীয় শ্রেণি",
          desc: "শিশুবান্ধব ও আনন্দময় পরিবেশে সহীহ কুরআন পাঠ, সুন্দর হাতের লেখা, মৌলিক আরবি ও প্রাথমিক সাধারণ শিক্ষা।",
          points: [
            "বর্ণমালা ও চারুকলার মজার পাঠ",
            "প্রাথমিক আদব-কায়দা ও মাসনূন দোয়া",
            "মৌলিক ইংরেজি ও গণিতের মজবুত ভিত্তি",
          ],
          href: "/admission/form",
        },
        {
          id: "academic",
          icon: School,
          tag: "প্রাথমিক ও মাধ্যমিক স্তর",
          title: "৩য় শ্রেণি থেকে দাখিল (১০ম)",
          desc: "বাংলাদেশ মাদ্রাসা শিক্ষা বোর্ড অনুমোদিত কারিকুলাম অনুসারে গণিত, বিজ্ঞান, সমাজ, ইংরেজি ও তথ্যপ্রযুক্তি পাঠদান।",
          points: [
            "বোর্ড পরীক্ষায় শতভাগ সাফল্য ও জিপিএ-৫ কেয়ার",
            "বিজ্ঞান ও কম্পিউটার ব্যবহারিক প্রশিক্ষণ",
            "দুর্বল শিক্ষার্থীদের জন্য অতিরিক্ত সান্ধ্যকালীন ক্লাস",
          ],
          href: "/admission/form",
        },
        {
          id: "language",
          icon: Feather,
          tag: "ভাষা ও বিশেষ কোর্স",
          title: "আরবি ভাষা ও ইসলামিক স্টাডিজ",
          desc: "আধুনিক আরবি ব্যাকরণ, কথ্য আরবি ভাষা ডিপ্লোমা ও সাধারণ শিক্ষার্থীদের জন্য সান্ধ্যকালীন বিশেষ ইসলামিক কোর্স।",
          points: [
            "নিয়মিত ল্যাঙ্গুয়েজ ক্লাব ও সেমিনার",
            "আন্তর্জাতিক স্কলারশিপ প্রস্তুতি",
            "সার্টিফিকেট ও বিশেষ সনদ প্রদান",
          ],
          href: "/admission/form",
        },
      ],
    },
    en: {
      badge: "Academic Departments",
      title: "Our Academic Programs & Curriculum",
      subtitle:
        "From early childhood education up to Dakhil (Secondary) alongside international Hifz curriculum.",
      programs: [
        {
          id: "hifz",
          icon: BookOpen,
          tag: "Hifzul Quran Wing",
          title: "International Tahfiz Program",
          desc: "Specialized Quran memorization guided by master Huffaz with rigorous Tajweed and melodious recitation.",
          points: [
            "Daily Sabaq, Sabqi & revision monitoring",
            "Annual Quran recitation championships",
            "International standard Tajweed mastery",
          ],
          href: "/admission/form",
        },
        {
          id: "nurani",
          icon: Shapes,
          tag: "Noorani & Pre-Primary",
          title: "Play to Grade 2",
          desc: "Joyful child-friendly learning environment fostering foundational Quranic literacy, handwriting, and basics.",
          points: [
            "Creative alphabet & art foundation",
            "Prophetic manners & daily Duas",
            "Core English & arithmetic groundwork",
          ],
          href: "/admission/form",
        },
        {
          id: "academic",
          icon: School,
          tag: "Primary & Secondary",
          title: "Grade 3 to Dakhil (10th)",
          desc: "Approved Madrasah Education Board curriculum integrating Mathematics, Science, English, and IT.",
          points: [
            "100% board pass track & GPA-5 mentorship",
            "Hands-on Science & Computer IT lab",
            "Evening remedial care for weaker students",
          ],
          href: "/admission/form",
        },
        {
          id: "language",
          icon: Feather,
          tag: "Language & Special Courses",
          title: "Arabic Fluency & Islamic Studies",
          desc: "Modern Arabic grammar, conversational Arabic diplomas, and evening courses for adult learners.",
          points: [
            "Regular Language Club & speaking practice",
            "Preparation for global Islamic universities",
            "Official institutional certification",
          ],
          href: "/admission/form",
        },
      ],
    },
    ar: {
      badge: "الأقسام التعليمية",
      title: "برامجنا ومناهجنا الدراسية",
      subtitle:
        "من المراحل التمهيدية للأطفال حتى الشهادة الثانوية مع قسم تحفيظ القرآن الكريم المتميز.",
      programs: [
        {
          id: "hifz",
          icon: BookOpen,
          tag: "قسم تحفيظ القرآن الكريم",
          title: "البرنامج الدولي لتحفيظ القرآن",
          desc: "حفظ متقن لكتاب الله بإشراف كبار القراء مع العناية التامة بمخارج الحروف والتجويد.",
          points: [
            "متابعة يومية للحفظ والمراجعة والعرض",
            "المشاركة في المسابقات القرآنية السنوية",
            "إتقان القراءات والتجويد العملي",
          ],
          href: "/admission/form",
        },
        {
          id: "nurani",
          icon: Shapes,
          tag: "القسم النوراني والتمهيدي",
          title: "من الروضة حتى الصف الثاني",
          desc: "بيئة محببة للأطفال لتعلم القراءة القرآنية الصحيحة والخط الجميل والآداب الإسلامية.",
          points: [
            "تأسيس ممتع للحروف والأنشطة الإبداعية",
            "حفظ الأذكار النبوية والآداب اليومية",
            "مبادئ الرياضيات واللغة الإنجليزية",
          ],
          href: "/admission/form",
        },
        {
          id: "academic",
          icon: School,
          tag: "التعليم الابتدائي والثانوي",
          title: "من الصف الثالث حتى الصف العاشر",
          desc: "تدريس المناهج الرسمية المعتمدة بما فيها الرياضيات، والعلوم، واللغات، وتكنولوجيا المعلومات.",
          points: [
            "نسبة نجاح كاملة في الامتحانات العامة",
            "مختبرات عملية للحاسوب والعلوم",
            "فصول تقوية مسائية إضافية للطلاب",
          ],
          href: "/admission/form",
        },
        {
          id: "language",
          icon: Feather,
          tag: "الدورات واللغات الخاصة",
          title: "اللغة العربية والدراسات الشرعية",
          desc: "دبلومات في المحادثة العربية وقواعد اللغة والدورات المسائية لعامة الطلاب.",
          points: [
            "نادي اللغة العربية والخطابة الحرة",
            "تأهيل للالتحاق بالجامعات الإسلامية الدولية",
            "شهادات معتمدة للخريجين",
          ],
          href: "/admission/form",
        },
      ],
    },
  };

  const active = content[language] || content.bn;

  return (
    <section
      id="programs"
      className="py-16 sm:py-20 bg-madrasah-light/40 dark:bg-slate-900/40 border-y border-madrasah-border/40 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-madrasah-accent font-bold text-xs sm:text-sm tracking-wider uppercase">
            {active.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-madrasah-primary dark:text-white mt-2">
            {active.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mt-3 text-sm sm:text-base leading-relaxed">
            {active.subtitle}
          </p>
        </div>

        {/* 4 Academic Department Cards (Exact aimpurbachal styling) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {active.programs.map((program) => {
            const IconComponent = program.icon;
            return (
              <div
                key={program.id}
                className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-madrasah-border dark:border-slate-700 hover:border-madrasah-accent shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-madrasah-light dark:bg-slate-700 text-madrasah-accent flex items-center justify-center text-2xl mb-5 group-hover:bg-madrasah-accent group-hover:text-white transition-colors shrink-0">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <span className="text-xs font-bold text-madrasah-primary dark:text-blue-300 bg-madrasah-light dark:bg-slate-700/80 px-2.5 py-1 rounded-md">
                    {program.tag}
                  </span>

                  <h3 className="text-lg font-bold text-slate-800 dark:text-white mt-3 group-hover:text-madrasah-primary dark:group-hover:text-blue-400 transition">
                    {program.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                    {program.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 space-y-2">
                  {program.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-madrasah-accent shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                  <div className="pt-2">
                    <Link
                      href={program.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-madrasah-primary dark:text-blue-400 hover:text-madrasah-accent transition"
                    >
                      <span>{language === "ar" ? "تقديم طلب" : language === "en" ? "Apply Online" : "ভর্তি আবেদন"}</span>
                      <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
