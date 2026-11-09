"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FileSignature,
  Search,
  CheckCircle2,
  GraduationCap,
  Award,
  Calendar,
  ArrowRight,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Phone,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { language, t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    {
      url: "/Assembly.jpg",
      badge:
        language === "ar"
          ? "تكامل فريد بين التعليم الديني والحديث"
          : language === "en"
          ? "Harmony of Islamic & Modern Education"
          : "দ্বীনি তাহজিব ও জেনারেল শিক্ষার অপূর্ব সমন্বয়",
      titlePrefix:
        language === "ar"
          ? "صرح المعرفة والأخلاق النبوية"
          : language === "en"
          ? "Illuminating Minds & Noble Character"
          : "জ্ঞানের আলো ও নৈতিক চরিত্রের",
      titleHighlight:
        language === "ar"
          ? "مدرسة السلام النموذجية"
          : language === "en"
          ? "A Model Center of Excellence"
          : "সমন্বিত আদর্শ পাঠশালা",
      subtitle:
        language === "ar"
          ? "نجمع بين حفظ القرآن الكريم والعلوم الشرعية والمناهج الحديثة لبناء جيل قرآني معاصر متميز."
          : language === "en"
          ? "Committed to nurturing enlightened leaders through Quranic scholarship, English proficiency, and modern academic excellence."
          : "কুরআন-হাদিসের বিশুদ্ধ শিক্ষার পাশাপাশি জাতীয় কারিকুলাম, ইংরেজি ভাষা দক্ষতা ও আধুনিক প্রযুক্তির মেলবন্ধনে একবিংশ শতাব্দীর আলোকিত ভবিষ্যৎ প্রজন্ম গঠনে আমরা প্রতিশ্রুতিবদ্ধ।",
    },
    {
      url: "/assembly2.jpg",
      badge:
        language === "ar"
          ? "حرم جامعي داخلي آمن ومنظم"
          : language === "en"
          ? "Safe, Disciplined Residential Campus"
          : "নিরাপদ, মনোরম ও সুশৃঙ্খল আবাসিক ক্যাম্পাস",
      titlePrefix:
        language === "ar"
          ? "رعاية تربوية متكاملة"
          : language === "en"
          ? "Holistic Care & Mentorship"
          : "সুশৃঙ্খল আবাসন ও আত্মশুদ্ধি",
      titleHighlight:
        language === "ar"
          ? "بيئة إيمانية هادئة"
          : language === "en"
          ? "Nurturing Future Leaders"
          : "নৈতিক চরিত্র গঠনের সেরা ঠিকানা",
      subtitle:
        language === "ar"
          ? "بيئة آمنة تخضع لإشراف متواصل على مدار الساعة مع رعاية صحية وغذائية متكاملة."
          : language === "en"
          ? "24/7 caring supervision, hygienic living facilities, and personalized mentorship for character development."
          : "অভিজ্ঞ উলামা ও দক্ষ শিক্ষক মণ্ডলীর সার্বক্ষণিক নিবিড় তত্ত্বাবধান, উন্নত হোস্টেল এবং পুষ্টিকর খাবারের সুব্যবস্থা।",
    },
    {
      url: "/hero2.png",
      badge:
        language === "ar"
          ? "قسم تحفيظ القرآن الكريم في ٦ أشهر"
          : language === "en"
          ? "Hifzul Quran in 6 Months"
          : "আন্তর্জাতিক মানের তাহফিজ প্রোগ্রাম",
      titlePrefix:
        language === "ar"
          ? "تجويد متقن وترتيل عذب"
          : language === "en"
          ? "Mastery of Quranic Memorization"
          : "বিশুদ্ধ তিলাওয়াত ও হিফজুল কুরআন",
      titleHighlight:
        language === "ar"
          ? "إتقان كتاب الله العزيز"
          : language === "en"
          ? "Flawless Tajweed & Retention"
          : "সহজ পদ্ধতিতে পবিত্র কুরআন হিফজ",
      subtitle:
        language === "ar"
          ? "منهجية علمية فريدة وميسرة تتيح للطالب إتمام حفظ القرآن الكريم مع الإتقان والتجويد."
          : language === "en"
          ? "Specialized 6-month Hifz completion methodology with international standard Tajweed."
          : "আন্তর্জাতিক মানের ক্বারীগণের তত্ত্বাবধানে তাজবীদ, হুসনুত তিলাওয়াত ও চাপমুক্ত আধুনিক ট্র্যাকিং সিস্টেমে হিফজ সম্পন্ন।",
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  }, [carouselImages.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  }, [carouselImages.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const current = carouselImages[currentSlide];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-madrasah-light via-white to-white py-14 lg:py-20 border-b border-madrasah-border/30 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* ================= LEFT COLUMN: INSPIRING COPY ================= */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Live Badge Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-madrasah-border text-madrasah-primary dark:text-blue-400 text-xs sm:text-sm font-semibold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-madrasah-accent animate-pulse" />
              <span>{current.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-madrasah-primary dark:text-white tracking-tight leading-snug lg:leading-tight">
              {current.titlePrefix} <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-madrasah-accent via-blue-600 to-madrasah-primary dark:from-blue-400 dark:to-madrasah-accent">
                {current.titleHighlight}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {current.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/admission/form"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-madrasah-primary hover:bg-blue-900 text-white font-semibold text-base shadow-lg shadow-madrasah-primary/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <FileSignature className="w-5 h-5" />
                <span>
                  {language === "ar"
                    ? "استمارة القبول الإلكترونية"
                    : language === "en"
                    ? "Online Admission Form"
                    : "অনলাইন ভর্তি ফর্ম"}
                </span>
              </Link>

              <a
                href="#results"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white dark:bg-slate-800 border-2 border-madrasah-border text-madrasah-primary dark:text-blue-400 hover:bg-madrasah-light dark:hover:bg-slate-700 font-semibold text-base transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Search className="w-5 h-5 text-madrasah-accent" />
                <span>
                  {language === "ar"
                    ? "نتائج الامتحانات ۲۰۲٦"
                    : language === "en"
                    ? "Exam Results 2026"
                    : "পরীক্ষার ফলাফল ২০২৬"}
                </span>
              </a>
            </div>

            {/* Highlight Badges (Exact aimpurbachal styling) */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-madrasah-accent shrink-0" />
                <span>
                  {language === "ar"
                    ? "أساتذة معتمدون دولياً"
                    : language === "en"
                    ? "Master Certified Huffaz"
                    : "আন্তর্জাতিক মানের হাফেজ শিক্ষক"}
                </span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-madrasah-accent shrink-0" />
                <span>
                  {language === "ar"
                    ? "فصول ومختبرات حديثة"
                    : language === "en"
                    ? "Modern Smart Campus"
                    : "শীতাতপ নিয়ন্ত্রিত আধুনিক ক্যাম্পাস"}
                </span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-madrasah-accent shrink-0" />
                <span>
                  {language === "ar"
                    ? "سكن داخلي مريح ومكتبة"
                    : language === "en"
                    ? "Library & Secure Hostel"
                    : "সুপরিসর লাইব্রেরি ও আবাসিক হোস্টেল"}
                </span>
              </div>
            </div>

            {/* Slide Navigation Controls */}
            <div className="pt-3 flex items-center justify-center lg:justify-start gap-3">
              <div className="flex items-center gap-1.5">
                {carouselImages.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentSlide
                        ? "w-8 bg-madrasah-primary"
                        : "w-2 bg-madrasah-border/60 hover:bg-madrasah-accent"
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-1 ms-2">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous slide"
                  className="p-1 rounded-lg border border-madrasah-border text-slate-600 dark:text-slate-300 hover:bg-madrasah-light transition"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next slide"
                  className="p-1 rounded-lg border border-madrasah-border text-slate-600 dark:text-slate-300 hover:bg-madrasah-light transition"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: INTERACTIVE QUICK SERVICE PORTAL ================= */}
          <div className="lg:col-span-5 relative">
            {/* Background Glow Circle */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-madrasah-border/30 rounded-full blur-3xl pointer-events-none" />

            <div className="relative bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-xl border border-madrasah-border/60 dark:border-slate-800">
              {/* Window-Style Header with 3 Dots */}
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-xs font-bold text-madrasah-primary dark:text-blue-400 uppercase tracking-wider bg-madrasah-light dark:bg-slate-800 px-3 py-1 rounded-full">
                  {language === "ar" ? "بوابة الخدمات السريعة" : language === "en" ? "Quick Portal" : "দ্রুত সেবা পোর্টাল"}
                </span>
              </div>

              {/* Service Cards */}
              <div className="space-y-3.5">
                {/* 1. Admission Form Link */}
                <Link
                  href="/admission/form"
                  className="group p-4 rounded-2xl bg-madrasah-light/60 dark:bg-slate-800/80 border border-madrasah-border hover:bg-madrasah-light hover:border-madrasah-accent cursor-pointer transition-all duration-200 flex items-center justify-between block"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-madrasah-primary text-white flex items-center justify-center text-lg group-hover:scale-110 transition-transform shrink-0">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="font-bold text-slate-800 dark:text-white text-sm group-hover:text-madrasah-primary dark:group-hover:text-blue-400">
                        {language === "ar" ? "طلب القبول ۲۰۲٦-۲۷" : language === "en" ? "Admission Application 2026-27" : "শিক্ষার্থী ভর্তি আবেদন ২০২৬-২৭"}
                      </h2>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {language === "ar" ? "تعبئة الاستمارة وتأكيد التسجيل" : language === "en" ? "Online form & admit card" : "ফরম পূরণ ও প্রবেশপত্র সংগ্রহ"}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-madrasah-accent group-hover:translate-x-1 transition-transform shrink-0" />
                </Link>

                {/* 2. Online Marksheet Verification */}
                <a
                  href="#results"
                  className="group p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-madrasah-accent hover:bg-slate-50 dark:hover:bg-slate-750 cursor-pointer transition-all duration-200 flex items-center justify-between block"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-madrasah-accent text-white flex items-center justify-center text-lg group-hover:scale-110 transition-transform shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="font-bold text-slate-800 dark:text-white text-sm group-hover:text-madrasah-accent">
                        {language === "ar" ? "التحقق من كشف الدرجات" : language === "en" ? "Online Marksheet Verification" : "অনলাইন মার্কশিট যাচাই"}
                      </h2>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {language === "ar" ? "البحث برقم الجلوس" : language === "en" ? "Search by roll number" : "রোল নম্বর দিয়ে ফলাফল দেখুন"}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-madrasah-accent group-hover:translate-x-1 transition-transform shrink-0" />
                </a>

                {/* 3. Academic Calendar & Notices */}
                <a
                  href="#notices"
                  className="group p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-madrasah-accent hover:bg-slate-50 dark:hover:bg-slate-750 cursor-pointer transition-all duration-200 flex items-center justify-between block"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-madrasah-primary dark:text-blue-300 flex items-center justify-center text-lg group-hover:scale-110 transition-transform shrink-0">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="font-bold text-slate-800 dark:text-white text-sm group-hover:text-madrasah-primary dark:group-hover:text-blue-400">
                        {language === "ar" ? "التقويم الأكاديمي والإعلانات" : language === "en" ? "Academic Calendar & Notices" : "একাডেমিক ক্যালেন্ডার ও নোটিশ"}
                      </h2>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {language === "ar" ? "قائمة العطلات وجداول الحصص" : language === "en" ? "Holiday list & class routine" : "ছুটির তালিকা ও ক্লাস রুটিন"}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-madrasah-accent group-hover:translate-x-1 transition-transform shrink-0" />
                </a>
              </div>

              {/* Helpline Footnote */}
              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>{language === "ar" ? "خط المساعدة العاجل:" : language === "en" ? "Helpline:" : "জরুরি ভর্তি হেল্পলাইন:"}</span>
                <a
                  href="tel:+8801748868161"
                  className="font-bold text-madrasah-primary dark:text-blue-400 font-mono hover:underline flex items-center gap-1"
                >
                  <Phone className="w-3 h-3 text-madrasah-accent" />
                  <span>+৮৮০ ১৭৪৮-৮৬৮১৬১</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
