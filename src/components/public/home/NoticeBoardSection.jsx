"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  FileText,
  Calendar,
  FileDown,
  ArrowRight,
  X,
  ExternalLink,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const API_BASE = (
  process.env.NEXT_PUBLIC_SERVER_API || "http://localhost:5000"
).replace(/\/$/, "");

export default function NoticeBoardSection() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState("all");
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedNotice, setSelectedNotice] = useState(null);

  const fallbackNotices = [
    {
      id: "1",
      category: "admission",
      categoryLabel: "ভর্তি তথ্য",
      date: "০৫ নভেম্বর ২০২৬",
      title: "২০২৬-২০২৭ শিক্ষাবর্ষে শিশু থেকে দাখিল শ্রেণি পর্যন্ত ভর্তি পরীক্ষার সময়সূচি",
      description:
        "আস-সালাম আইডিয়াল মাদরাসার আবাসিক ও অনাবাসিক শাখার সকল বিভাগে আগামী ২০ নভেম্বর শুক্রবার থেকে লিখিত ও মৌখিক ভর্তি পরীক্ষা অনুষ্ঠিত হবে। অফিস অথবা ওয়েবসাইট থেকে প্রবেশপত্র সংগ্রহ করুন।",
      size: "PDF (1.2 MB)",
      attachmentUrl: "/admission/form",
    },
    {
      id: "2",
      category: "academic",
      categoryLabel: "একাডেমিক",
      date: "২৮ অক্টোবর ২০২৬",
      title: "হিফজুল কুরআন মেধা অন্বেষণ ও ক্বেরাত প্রতিযোগিতার চূড়ান্ত তারিখ ঘোষণা",
      description:
        "মাদ্রাসার বার্ষিক হিফজ প্রতিযোগিতা ও পুরস্কার বিতরণী অনুষ্ঠান আগামী ১২ নভেম্বর মাদরাসা অডিটোরিয়ামে অনুষ্ঠিত হবে। সম্মানিত অভিভাবকবৃন্দকে যথা সময়ে উপস্থিত থাকার অনুরোধ রইল।",
      size: "PDF (850 KB)",
      attachmentUrl: null,
    },
    {
      id: "3",
      category: "holiday",
      categoryLabel: "ছুটির নোটিশ",
      date: "১৫ অক্টোবর ২০২৬",
      title: "পবিত্র ঈদে মিলাদুন্নবী (সা.) উপলক্ষে মাদরাসা বন্ধ সংক্রান্ত বিজ্ঞপ্তি",
      description:
        "এতদ্বারা সকল শিক্ষক, শিক্ষার্থী ও অভিভাবকদের জানানো যাচ্ছে যে, আগামী ১৭ অক্টোবর মাদ্রাসার সকল প্রকার শিক্ষা কার্যক্রম বন্ধ থাকিবে। ১৮ অক্টোবর থেকে যথারীতি ক্লাস চলবে।",
      size: "PDF (420 KB)",
      attachmentUrl: null,
    },
  ];

  useEffect(() => {
    let isMounted = true;
    const fetchNotices = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/notices?status=active&limit=12`, {
          cache: "no-store",
        });
        if (!res.ok) throw new Error("Notice fetch failed");
        const json = await res.json();
        if (isMounted && json.success && json.notices && json.notices.length > 0) {
          const mapped = json.notices.map((n) => ({
            id: n._id,
            category: n.category || "academic",
            categoryLabel:
              n.category === "admission"
                ? "ভর্তি তথ্য"
                : n.category === "holiday"
                ? "ছুটির নোটিশ"
                : "একাডেমিক",
            date: n.publishDate
              ? new Date(n.publishDate).toLocaleDateString("bn-BD")
              : "সাম্প্রতিক",
            title: n.title,
            description: n.description,
            size: n.attachmentUrl ? "PDF ডকুমেন্ট" : "বিজ্ঞপ্তি",
            attachmentUrl: n.attachmentUrl,
          }));
          setNotices(mapped);
        } else {
          setNotices(fallbackNotices);
        }
      } catch (err) {
        setNotices(fallbackNotices);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchNotices();
    return () => {
      isMounted = false;
    };
  }, []);

  const displayedList =
    activeTab === "all"
      ? notices
      : notices.filter((n) => n.category === activeTab);

  const tabs = [
    { id: "all", label: "সকল" },
    { id: "academic", label: "একাডেমিক" },
    { id: "admission", label: "ভর্তি" },
    { id: "holiday", label: "ছুটি" },
  ];

  return (
    <section
      id="notices"
      className="py-16 sm:py-20 bg-madrasah-light/30 dark:bg-slate-900/30 border-t border-madrasah-border/40 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-madrasah-accent font-bold text-xs sm:text-sm tracking-wider uppercase">
              {language === "ar" ? "آخر التحديثات" : language === "en" ? "Latest Updates" : "সর্বশেষ আপডেট"}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-madrasah-primary dark:text-white mt-1">
              {language === "ar"
                ? "لوحة الإعلانات والأخبار الأكاديمية"
                : language === "en"
                ? "Notice Board & Announcements"
                : "নোটিশ বোর্ড ও সাম্প্রতিক সংবাদ"}
            </h2>
          </div>

          {/* Category Filter Tabs (aimpurbachal styling: bg-white p-1.5 rounded-2xl border border-madrasah-border/60) */}
          <div className="flex items-center space-x-2 bg-white dark:bg-slate-800 p-1.5 rounded-2xl border border-madrasah-border/60 dark:border-slate-700 shadow-sm self-start">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-madrasah-primary text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-300 hover:text-madrasah-primary dark:hover:text-blue-400"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Notice Grid (3 columns: aimpurbachal exact cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayedList.map((notice) => (
            <div
              key={notice.id}
              className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-madrasah-border dark:border-slate-700 hover:border-madrasah-accent shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-3">
                  <span
                    className={`font-bold px-2.5 py-0.5 rounded-md text-[11px] ${
                      notice.category === "admission"
                        ? "bg-blue-100 text-madrasah-primary dark:bg-blue-900/50 dark:text-blue-300"
                        : notice.category === "holiday"
                        ? "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300"
                        : "bg-madrasah-light text-madrasah-accent dark:bg-slate-700 dark:text-blue-300"
                    }`}
                  >
                    {notice.categoryLabel}
                  </span>
                  <span>{notice.date}</span>
                </div>

                <h3 className="font-bold text-slate-800 dark:text-white text-base hover:text-madrasah-primary dark:hover:text-blue-400 transition line-clamp-2">
                  {notice.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 line-clamp-3 leading-relaxed">
                  {notice.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between text-xs">
                <button
                  type="button"
                  onClick={() => setSelectedNotice(notice)}
                  className="text-madrasah-accent font-bold hover:underline cursor-pointer"
                >
                  বিস্তারিত পড়ুন →
                </button>
                <span className="text-slate-400 dark:text-slate-500 text-[11px] flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5 text-red-500" />
                  <span>{notice.size}</span>
                </span>
              </div>
            </div>
          ))}

          {displayedList.length === 0 && (
            <div className="col-span-3 text-center py-12 text-slate-400">
              এই ক্যাটাগরিতে বর্তমানে কোনো নোটিশ নেই।
            </div>
          )}
        </div>

        {/* View All Notices Archive Link */}
        <div className="mt-10 text-center">
          <Link
            href="/notices"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border-2 border-madrasah-border text-madrasah-primary dark:text-blue-400 hover:bg-madrasah-light dark:hover:bg-slate-800 font-bold text-xs transition"
          >
            <span>সকল নোটিশ আর্কাইভ দেখুন</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>

      {/* ================= NOTICE DETAIL MODAL (aimpurbachal styling) ================= */}
      {selectedNotice && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-850 rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-madrasah-border dark:border-slate-700 relative animate-[fadeIn_0.2s_ease-out]">
            <button
              type="button"
              onClick={() => setSelectedNotice(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 dark:hover:text-white text-lg w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <span className="text-xs font-bold text-madrasah-accent uppercase tracking-wider bg-madrasah-light dark:bg-slate-700 px-3 py-1 rounded-full">
              {selectedNotice.categoryLabel}
            </span>

            <h3 className="text-lg font-bold text-madrasah-primary dark:text-white mt-3">
              {selectedNotice.title}
            </h3>

            <p className="text-xs text-slate-600 dark:text-slate-300 mt-3 leading-relaxed whitespace-pre-line">
              {selectedNotice.description}
            </p>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
              {selectedNotice.attachmentUrl ? (
                <a
                  href={selectedNotice.attachmentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-madrasah-primary dark:text-blue-400 hover:underline"
                >
                  <FileDown className="w-4 h-4 text-madrasah-accent" />
                  <span>ডকুমেন্ট ডাউনলোড</span>
                </a>
              ) : (
                <span className="text-xs text-slate-400">তারিখ: {selectedNotice.date}</span>
              )}

              <button
                type="button"
                onClick={() => setSelectedNotice(null)}
                className="px-5 py-2 rounded-xl bg-madrasah-primary text-white text-xs font-bold hover:bg-madrasah-accent transition cursor-pointer"
              >
                ঠিক আছে
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
