"use client";

import React from "react";
import { UserCheck, Quote, Star, MessageSquareQuote, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ReviewSection() {
  const { language } = useLanguage();

  const content = {
    bn: {
      principalTag: "অধ্যক্ষ মহোদয়ের বাণী",
      principalName: "মুফতি মাওলানা আব্দুর রহমান",
      principalRole: "অধ্যক্ষ ও প্রধান মুহাদ্দিস",
      principalDegrees: "এম.এ (ইসলামিক স্টাডিজ), দাওরায়ে হাদিস",
      principalQuoteTitle: "“চরিত্র ও আত্মশুদ্ধি ছাড়া কেবল প্রাতিষ্ঠানিক ডিগ্রি মূল্যহীন”",
      principalMessage:
        "আস-সালাম আইডিয়াল মাদরাসা (এইম)-এর মূল লক্ষ্য হলো প্রতিটি সন্তানকে এমন এক আদর্শ মানুষ হিসেবে গড়ে তোলা—যারা কুরআনের আলোয় নিজেদের জীবন পরিচালিত করবে, পিতা-মাতার প্রতি শ্রদ্ধাশীল হবে এবং সমাজ ও রাষ্ট্রের কল্যাণে আধুনিক জ্ঞানের প্রতিটি শাখায় শ্রেষ্ঠত্ব অর্জন করবে। আমরা আন্তরিক স্নেহ ও শাসনের মাধ্যমে শিক্ষার্থীর অন্তর্নিহিত প্রতিভার বিকাশ ঘটাতে দৃঢ় প্রতিজ্ঞ।",
      signature: "আস-সালাম আইডিয়াল মাদ্রাসা পরিবার",
      badgeReviews: "অভিভাবক ও উলামায়ে কেরামের অনুভূতি",
      titleReviews: "অভিভাবক ও সুধীমহলের মূল্যায়ন",
      subReviews:
        "আমাদের শিক্ষা, আবাসন ও সার্বিক পরিবেশ সম্পর্কে সম্মানিত অভিভাবক ও বিশিষ্ট শিক্ষাবিদদের আন্তরিক মতামত।",
      reviews: [
        {
          name: "মাওলানা মাহমুদুল হাসান",
          role: "বিশিষ্ট আলেম ও শিক্ষাবিদ",
          comment:
            "আস-সালাম আইডিয়াল মাদরাসা (এইম)-এর দ্বীনি ও আধুনিক শিক্ষার সমন্বয়টি সত্যিই অনন্য। বিশেষ করে শিক্ষার্থীদের আখলাক এবং সুন্নতি জিন্দেগি গঠনের প্রতি শিক্ষকদের আন্তরিকতা অত্যন্ত প্রশংসনীয়।",
        },
        {
          name: "প্রকৌশলী আনিসুর রহমান",
          role: "অভিভাবক (একাডেমিক বিভাগ)",
          comment:
            "আমার সন্তান এখানে ৩ বছর ধরে পড়ছে। মাদরাসার স্মার্ট ডিজিটাল ক্লাসরুম এবং চমৎকার হোস্টেল ম্যানেজমেন্টের কারণে আমি সন্তানের পড়াশোনা ও নিরাপত্তা নিয়ে সম্পূর্ণ নিশ্চিন্ত।",
        },
        {
          name: "ডা. আমিনা বেগম",
          role: "অভিভাবক (হিফজ বিভাগ)",
          comment:
            "হিফজ বিভাগের উস্তাদদের স্নেহপূর্ণ আচরণ ও মানসিক চাপহীন আধুনিক ট্র্যাকিং সিস্টেম আমার সন্তানের হিফজ সম্পন্ন করা সহজ ও আনন্দময় করে তুলেছে।",
        },
      ],
    },
    en: {
      principalTag: "Principal's Message",
      principalName: "Mufti Mawlana Abdur Rahman",
      principalRole: "Principal & Head of Hadith",
      principalDegrees: "M.A. (Islamic Studies), Dawrah-e-Hadith",
      principalQuoteTitle: "“Degrees without Moral Character and Self-Purification Hold No Value”",
      principalMessage:
        "At As-Salam Ideal Madrasah (AIM), our core mission is to nurture children into moral leaders whose hearts are illuminated by the Holy Quran, who honor their parents, and who excel in contemporary science and literature for the welfare of humanity.",
      signature: "As-Salam Ideal Madrasah Family",
      badgeReviews: "Voices of Trust",
      titleReviews: "Guardian & Scholar Testimonials",
      subReviews:
        "Heartfelt reflections from parents and educators on our spiritual discipline and academic rigor.",
      reviews: [
        {
          name: "Mawlana Mahmudul Hasan",
          role: "Islamic Scholar & Educator",
          comment:
            "The integration of authentic Islamic scholarship and modern academics at AIM is exemplary. The faculty’s dedication to prophetic character is inspiring.",
        },
        {
          name: "Engr. Anisur Rahman",
          role: "Parent (Academic Section)",
          comment:
            "My son has been studying here for three years. The smart classrooms and disciplined residential hostel provide complete peace of mind.",
        },
        {
          name: "Dr. Amina Begum",
          role: "Parent (Hifz Wing)",
          comment:
            "The caring mentors and stress-free daily tracking method made my child’s Quran memorization journey smooth and joyful.",
        },
      ],
    },
    ar: {
      principalTag: "كلمة فضيلة مدير المدرسة",
      principalName: "المفتي مولانا عبد الرحمن",
      principalRole: "المدير وشيخ الحديث",
      principalDegrees: "ماجستير في الدراسات الإسلامية، دورة الحديث الشريف",
      principalQuoteTitle: "«الشهادات الأكاديمية لا قيمة لها إن لم تقترن بالأخلاق والتزكية»",
      principalMessage:
        "إن رسالتنا في مدرسة السلام النموذجية هي إعداد جيل قرآني متخلق بالأدب النبوي، بار بوالديه، متفوق في شتى العلوم العصرية، نافع لمجتمعه وأمته.",
      signature: "أسرة مدرسة السلام النموذجية",
      badgeReviews: "شهادات الثقة والتقدير",
      titleReviews: "انطباعات أولياء الأمور والعلماء",
      subReviews:
        "كلمات صادقة من أولياء الأمور والأساتذة حول البيئة التربوية والمستوى الأكاديمي.",
      reviews: [
        {
          name: "الشيخ محمود الحسن",
          role: "عالم وباحث تربوي",
          comment:
            "إن التكامل بين العلوم الشرعية والتعليم الحديث في مدرسة السلام النموذجية رائع للغاية واهتمام المعلمين بالسلوك الإسلامي يستحق كل تقدير.",
        },
        {
          name: "المهندس أنيس الرحمن",
          role: "ولي أمر طالب (القسم الأكاديمي)",
          comment:
            "يدرس ابني هنا منذ ثلاث سنوات. بفضل الفصول الذكية والإدارة المتميزة للسكن، أشعر باطمئنان تام على مستواه وتربيته.",
        },
        {
          name: "الدكتورة أمينة بيغم",
          role: "ولية أمر (قسم تحفيظ القرآن)",
          comment:
            "المتابعة الحانية لمعلمي القرآن الكريم والأسلوب الميسر جعل حفظ ابني للقرآن رحلة ممتعة ومباركة.",
        },
      ],
    },
  };

  const active = content[language] || content.bn;

  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* ================= 1. PRINCIPAL'S MESSAGE BANNER (aimpurbachal exact styling) ================= */}
        <div className="bg-gradient-to-r from-madrasah-primary to-madrasah-dark rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/5 pointer-events-none hidden lg:block" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Avatar & Designation */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-madrasah-border/80 overflow-hidden shadow-2xl bg-blue-900/60 mb-4 flex items-center justify-center text-white">
                <UserCheck className="w-16 h-16 text-madrasah-border" />
              </div>
              <h3 className="text-lg font-bold">{active.principalName}</h3>
              <p className="text-xs text-madrasah-border mt-0.5">{active.principalRole}</p>
              <p className="text-[11px] text-blue-200 mt-0.5">{active.principalDegrees}</p>
            </div>

            {/* Message Body */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-madrasah-border">
                <MessageSquareQuote className="w-4 h-4" />
                <span>{active.principalTag}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {active.principalQuoteTitle}
              </h2>

              <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
                {active.principalMessage}
              </p>

              <div className="pt-2 flex items-center gap-3">
                <span className="w-10 h-0.5 bg-madrasah-border" />
                <span className="text-xs text-blue-200 tracking-wider">
                  {active.signature}
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* ================= 2. GUARDIAN & SCHOLAR TESTIMONIAL CARDS ================= */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-madrasah-accent font-bold text-xs sm:text-sm tracking-wider uppercase">
              {active.badgeReviews}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-madrasah-primary dark:text-white mt-1">
              {active.titleReviews}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2">
              {active.subReviews}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {active.reviews.map((rev, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-madrasah-border dark:border-slate-700 hover:border-madrasah-accent shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3 text-xs">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">
                    “{rev.comment}”
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-madrasah-light text-madrasah-primary font-bold flex items-center justify-center text-xs">
                    {rev.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-white text-xs sm:text-sm">
                      {rev.name}
                    </h4>
                    <p className="text-[11px] text-slate-400">{rev.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
