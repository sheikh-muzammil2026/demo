"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
} from "lucide-react";
import { FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-madrasah-dark text-white border-t-4 border-madrasah-accent mt-auto transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* ================= COL 1: ABOUT & LOGO ================= */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-madrasah-primary to-madrasah-accent flex items-center justify-center text-white shadow-md shadow-blue-500/20 p-1.5 shrink-0">
                <Image
                  src="/aimlogo1.png"
                  alt="AIM Logo"
                  width={40}
                  height={40}
                  className="rounded-xl object-contain"
                />
              </div>
              <div>
                <span className="block text-base sm:text-lg font-bold leading-tight text-white">
                  {language === "ar"
                    ? "مدرسة السلام النموذجية"
                    : language === "en"
                    ? "As-Salam Ideal Madrasah"
                    : "আস-সালাম আইডিয়াল মাদ্রাসা"}
                </span>
                <span className="block text-xs text-madrasah-border">
                  দ্বীনি ও আধুনিক শিক্ষার ঠিকানা
                </span>
              </div>
            </Link>

            <p className="text-xs text-blue-200 leading-relaxed">
              একটি আদর্শ দ্বীনি শিক্ষাকেন্দ্র যা আধুনিক বিশ্বের চ্যালেঞ্জ মোকাবিলায় আত্মমর্যাদাশীল, আদর্শ ও খোদাভীরু প্রজন্ম তৈরিতে নিবেদিত।
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2 text-madrasah-border text-base">
              <a
                href="https://www.facebook.com/p/AIM-Habiganj-100062973924471/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-blue-900/80 flex items-center justify-center hover:bg-madrasah-accent hover:text-white transition"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href="http://www.youtube.com/@aimhabiganj"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-blue-900/80 flex items-center justify-center hover:bg-madrasah-accent hover:text-white transition"
                aria-label="YouTube"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/8801748868161"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-blue-900/80 flex items-center justify-center hover:bg-madrasah-accent hover:text-white transition"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* ================= COL 2: QUICK LINKS ================= */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-blue-900 pb-2">
              জরুরি লিংক
            </h4>
            <ul className="space-y-2 text-xs text-blue-200">
              <li>
                <Link href="/about" className="hover:text-white hover:underline transition">
                  মাদ্রাসার ইতিহাস ও পরিচিতি
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-white hover:underline transition">
                  একাডেমিক সিলেবাস ও পাঠক্রম
                </Link>
              </li>
              <li>
                <Link href="/#results" className="hover:text-white hover:underline transition">
                  অনলাইন পরীক্ষার রেজাল্ট
                </Link>
              </li>
              <li>
                <Link href="/notices" className="hover:text-white hover:underline transition">
                  বার্ষিক ছুটির তালিকা ও নোটিশ
                </Link>
              </li>
              <li>
                <Link href="/admission/form" className="hover:text-white hover:underline transition">
                  অনলাইন ভর্তি নির্দেশিকা ও ফরম
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white hover:underline transition">
                  মিডিয়া ও ফটো গ্যালারি
                </Link>
              </li>
            </ul>
          </div>

          {/* ================= COL 3: ACADEMIC TIMINGS ================= */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-blue-900 pb-2">
              ক্লাস ও অফিস সময়
            </h4>
            <ul className="space-y-2.5 text-xs text-blue-200">
              <li className="flex justify-between items-center">
                <span>মাদ্রাসা ক্লাস:</span>
                <span className="font-mono text-white font-semibold">সকাল ০৮:০০ - দুপুর ০১:৩০</span>
              </li>
              <li className="flex justify-between items-center">
                <span>হিফজ শাখা:</span>
                <span className="font-mono text-white font-semibold">ফজর হতে এশা পর্যন্ত</span>
              </li>
              <li className="flex justify-between items-center">
                <span>অফিস সময়সূচি:</span>
                <span className="font-mono text-white font-semibold">সকাল ০৯:০০ - বিকাল ০৪:০০</span>
              </li>
              <li className="flex justify-between items-center text-madrasah-border pt-1">
                <span>সাপ্তাহিক ছুটি:</span>
                <span className="font-bold">বৃহস্পতিবার ও শুক্রবার</span>
              </li>
            </ul>
          </div>

          {/* ================= COL 4: CAMPUS LOCATION & HOTLINE ================= */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-blue-900 pb-2">
              ক্যাম্পাস অবস্থান
            </h4>
            <p className="text-xs text-blue-200 leading-relaxed mb-3">
              প্রধান ক্যাম্পাস: দক্ষিণ শ্যামলী, কোর্ট স্টেশন রোড, হবিগঞ্জ সদর, সিলেট বিভাগ।
            </p>
            <div className="bg-blue-900/60 p-3.5 rounded-xl border border-blue-800 text-xs space-y-1">
              <div className="font-semibold text-white">প্রয়োজনে কল দিন:</div>
              <a
                href="tel:+8801748868161"
                className="font-mono text-madrasah-border font-bold block text-sm hover:underline"
              >
                +৮৮০ ১৭৪৮-৮৬৮১৬১
              </a>
              <div className="text-[11px] text-blue-300 mt-1">
                ভর্তি অনুসন্ধান ও সার্বক্ষণিক সিকিউরিটি সার্ভিস
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Credit (Exact aimpurbachal styling) */}
        <div className="mt-12 pt-6 border-t border-blue-900/80 flex flex-col sm:flex-row items-center justify-between text-xs text-blue-300 gap-3">
          <p>© ২০২৬ আস-সালাম আইডিয়াল মাদ্রাসা। সর্বস্বত্ব সংরক্ষিত।</p>
          <div className="flex flex-wrap items-center space-x-3 sm:space-x-4">
            <Link href="/about#policies" className="hover:text-white">
              গোপনীয়তা নীতি
            </Link>
            <span>•</span>
            <Link href="/about#policies" className="hover:text-white">
              শর্তাবলী
            </Link>
            <span>•</span>
            <span className="text-madrasah-border">
              Designed with Palette: #0D47A1, #2196F3, #90CAF9, #E3F2FD
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
