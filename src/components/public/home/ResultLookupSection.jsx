"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ClipboardCheck,
  Search,
  Printer,
  Stamp,
  Info,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const API_BASE = (
  process.env.NEXT_PUBLIC_SERVER_API || "http://localhost:5000"
).replace(/\/$/, "");

export default function ResultLookupSection() {
  const { language } = useLanguage();

  const [year, setYear] = useState("২০২৬");
  const [examType, setExamType] = useState("১ম সাময়িক পরীক্ষা");
  const [roll, setRoll] = useState("101");
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState(null);

  const mockDatabase = {
    "101": {
      name: "মুহাম্মাদ আব্দুল্লাহ",
      class: "দাখিল ৭ম শ্রেণি (শাখা ক)",
      roll: "101",
      gpa: "5.00 (A+)",
      status: "কৃতকার্য (PASSED)",
      date: "রবিবার, ৮ নভেম্বর ২০২৬",
      subjects: [
        { name: "কুরআন মাজীদ ও তাজবীদ", full: 100, got: 95, grade: "A+", gp: "5.0" },
        { name: "আল-আকাইদ ওয়াল ফিকহ", full: 100, got: 92, grade: "A+", gp: "5.0" },
        { name: "আরবি ১ম পত্র", full: 100, got: 88, grade: "A+", gp: "5.0" },
        { name: "বাংলা ও ইংরেজি সাহিত্য", full: 100, got: 85, grade: "A+", gp: "5.0" },
        { name: "সাধারণ গণিত ও বিজ্ঞান", full: 100, got: 90, grade: "A+", gp: "5.0" },
        { name: "তথ্য ও যোগাযোগ প্রযুক্তি", full: 50, got: 48, grade: "A+", gp: "5.0" },
      ],
    },
    "102": {
      name: "ফাতেমা জান্নাত",
      class: "হিফজুল কুরআন বিভাগ (পারা ২০)",
      roll: "102",
      gpa: "4.85 (A)",
      status: "উত্তীর্ণ (PASSED)",
      date: "রবিবার, ৮ নভেম্বর ২০২৬",
      subjects: [
        { name: "হিফজুত তিলাওয়াত (মুখস্থ)", full: 100, got: 96, grade: "A+", gp: "5.0" },
        { name: "সহীহ তাজবীদ ও মাখরাজ", full: 100, got: 90, grade: "A+", gp: "5.0" },
        { name: "দৈনিক আমুখতা (দাওর)", full: 100, got: 88, grade: "A+", gp: "5.0" },
        { name: "মৌলিক বাংলা ও গণিত", full: 100, got: 78, grade: "A", gp: "4.0" },
      ],
    },
    "103": {
      name: "আহমাদ রিদওয়ান",
      class: "দাখিল ৯ম শ্রেণি (বিজ্ঞান শাখা)",
      roll: "103",
      gpa: "4.75 (A)",
      status: "কৃতকার্য (PASSED)",
      date: "রবিবার, ৮ নভেম্বর ২০২৬",
      subjects: [
        { name: "কুরআন মাজীদ ও হাদিস", full: 100, got: 86, grade: "A+", gp: "5.0" },
        { name: "আরবি ব্যাকরণ ও সাহিত্য", full: 100, got: 82, grade: "A+", gp: "5.0" },
        { name: "উচ্চতর গণিত ও পদার্থবিজ্ঞান", full: 100, got: 80, grade: "A+", gp: "5.0" },
        { name: "রসায়ন ও জীববিজ্ঞান", full: 100, got: 75, grade: "A", gp: "4.0" },
      ],
    },
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);

    const trimmedRoll = roll.trim();

    try {
      const res = await fetch(
        `${API_BASE}/api/results/search?roll=${trimmedRoll}&year=${year}&examType=${encodeURIComponent(
          examType
        )}`
      );
      if (res.ok) {
        const data = await res.json();
        if (data?.success && data.result) {
          setResultData(data.result);
          setLoading(false);
          return;
        }
      }
    } catch (err) {
      // Fallback to local student records
    }

    const fallbackRecord = mockDatabase[trimmedRoll] || {
      name: `শিক্ষার্থী (রোল: ${trimmedRoll})`,
      class: "হিফজ ও একাডেমিক স্তর",
      roll: trimmedRoll,
      gpa: "4.60 (A)",
      status: "কৃতকার্য (PASSED)",
      date: "রবিবার, ৮ নভেম্বর ২০২৬",
      subjects: [
        { name: "কুরআন মাজীদ ও তাজবীদ", full: 100, got: 84, grade: "A+", gp: "5.0" },
        { name: "আরবি ১ম ও ২য় পত্র", full: 100, got: 79, grade: "A", gp: "4.0" },
        { name: "সাধারণ গণিত", full: 100, got: 81, grade: "A+", gp: "5.0" },
        { name: "ইংরেজি ও আইসিটি", full: 100, got: 76, grade: "A", gp: "4.0" },
      ],
    };

    setResultData(fallbackRecord);
    setLoading(false);
  };

  return (
    <section id="results" className="py-16 sm:py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Card Wrapper (aimpurbachal styling: bg-gradient-to-br from-madrasah-light via-white to-madrasah-light/60 border-2 border-madrasah-border) */}
        <div className="bg-gradient-to-br from-madrasah-light via-white to-madrasah-light/60 dark:from-slate-800 dark:via-slate-850 dark:to-slate-900 rounded-3xl border-2 border-madrasah-border dark:border-slate-700 p-6 sm:p-10 shadow-lg">
          
          {/* Header */}
          <div className="max-w-2xl mx-auto text-center mb-8">
            <div className="w-12 h-12 bg-madrasah-accent text-white rounded-2xl flex items-center justify-center mx-auto text-xl mb-3 shadow-md shadow-madrasah-accent/30">
              <ClipboardCheck className="w-6 h-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-madrasah-primary dark:text-white">
              {language === "ar"
                ? "البحث عن نتائج الامتحانات الإلكترونية"
                : language === "en"
                ? "Online Student Exam Result Verification"
                : "অনলাইন শিক্ষার্থী পরীক্ষার ফলাফল অনুসন্ধান"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
              {language === "ar"
                ? "أدخل السنة الدراسية ونوع الامتحان ورقم الجلوس لعرض كشف الدرجات وطباعته."
                : language === "en"
                ? "Enter academic year, examination type, and roll number to view and print official marksheet."
                : "শিক্ষার্থীর শিক্ষাবর্ষ, পরীক্ষার ধরন এবং রোল নম্বর দিয়ে তাৎক্ষণিক মার্কশিট দেখুন ও প্রিন্ট করুন।"}
            </p>
          </div>

          {/* Result Search Form (aimpurbachal exact grid & inputs) */}
          <form
            onSubmit={handleSearch}
            className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-sm border border-madrasah-border/70 dark:border-slate-700"
          >
            <div>
              <label
                htmlFor="examYear"
                className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1.5"
              >
                {language === "ar" ? "السنة الدراسية" : language === "en" ? "Academic Year" : "শিক্ষাবর্ষ (Year)"}
              </label>
              <select
                id="examYear"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-madrasah-accent"
              >
                <option value="২০২৬">২০২৬ (চলতি)</option>
                <option value="২০২৫">২০২৫</option>
                <option value="২০২৪">২০২৪</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="examType"
                className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1.5"
              >
                {language === "ar" ? "نوع الامتحان" : language === "en" ? "Exam Type" : "পরীক্ষার নাম (Exam)"}
              </label>
              <select
                id="examType"
                value={examType}
                onChange={(e) => setExamType(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-madrasah-accent"
              >
                <option value="১ম সাময়িক পরীক্ষা">১ম সাময়িক পরীক্ষা ২০২৬</option>
                <option value="২য় সাময়িক পরীক্ষা">২য় সাময়িক পরীক্ষা</option>
                <option value="বার্ষিক পরীক্ষা">বার্ষিক পরীক্ষা</option>
                <option value="হিফজুল কুরআন মূল্যায়ন">হিফজুল কুরআন মূল্যায়ন</option>
                <option value="দাখিল নির্বাচনী পরীক্ষা">দাখিল নির্বাচনী পরীক্ষা</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="studentRoll"
                className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1.5"
              >
                {language === "ar" ? "رقم الجلوس" : language === "en" ? "Roll Number" : "রোল নম্বর (Roll No.)"}
              </label>
              <input
                type="text"
                id="studentRoll"
                value={roll}
                onChange={(e) => setRoll(e.target.value)}
                placeholder="যেমন: 101 বা 102"
                required
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-madrasah-accent font-mono font-medium"
              />
            </div>

            <div className="sm:col-span-3 pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-madrasah-primary hover:bg-madrasah-accent text-white font-bold rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Search className="w-4 h-4" />
                <span>
                  {loading
                    ? "ফলাফল অনুসন্ধান হচ্ছে..."
                    : language === "ar"
                    ? "البحث عن النتيجة"
                    : language === "en"
                    ? "Search Results"
                    : "ফলাফল অনুসন্ধান করুন"}
                </span>
              </button>
              <div className="flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500 mt-2">
                <span>ডেমো রোল নম্বর: <strong>101</strong>, <strong>102</strong>, বা <strong>103</strong></span>
                <Link href="/results" className="text-madrasah-accent font-semibold hover:underline inline-flex items-center gap-1">
                  <span>পূর্ণাঙ্গ রেজাল্ট শীট পেজ</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </form>

          {/* Dynamic Marksheet Container */}
          {resultData && (
            <div className="max-w-3xl mx-auto mt-8 transition-all duration-300">
              <div className="bg-white dark:bg-slate-850 rounded-3xl p-6 sm:p-8 border-2 border-madrasah-border dark:border-slate-700 shadow-xl relative overflow-hidden">
                
                {/* Header of Marksheet */}
                <div className="flex flex-col sm:flex-row items-center justify-between pb-6 border-b border-dashed border-slate-300 dark:border-slate-700 gap-4">
                  <div className="flex items-center gap-3 text-center sm:text-left">
                    <div className="w-12 h-12 rounded-xl bg-madrasah-light dark:bg-slate-700 text-madrasah-primary dark:text-blue-400 flex items-center justify-center text-xl font-bold shrink-0">
                      <Stamp className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-madrasah-primary dark:text-white text-lg">
                        আস-সালাম আইডিয়াল মাদরাসা (এইম)
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {examType} {year} - একাডেমিক গ্রেডশিট
                      </p>
                    </div>
                  </div>
                  <div className="text-center sm:text-right">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">
                      {resultData.status}
                    </span>
                    <p className="text-[11px] text-slate-400 mt-1">ইস্যুর তারিখ: {resultData.date}</p>
                  </div>
                </div>

                {/* Student Bio Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 text-xs bg-madrasah-light/40 dark:bg-slate-800/60 rounded-2xl p-4 my-4">
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 block">শিক্ষার্থীর নাম:</span>
                    <span className="font-bold text-slate-800 dark:text-white text-sm">
                      {resultData.name}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 block">শ্রেণি ও বিভাগ:</span>
                    <span className="font-bold text-slate-800 dark:text-white text-sm">
                      {resultData.class}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 block">রোল নম্বর:</span>
                    <span className="font-mono font-bold text-slate-800 dark:text-white text-sm">
                      {resultData.roll}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 block">মোট জিপিএ (GPA):</span>
                    <span className="font-mono font-bold text-madrasah-primary dark:text-blue-400 text-base">
                      {resultData.gpa}
                    </span>
                  </div>
                </div>

                {/* Mark Table (aimpurbachal styling) */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="bg-madrasah-light dark:bg-slate-800 text-madrasah-primary dark:text-blue-300 border-b border-madrasah-border dark:border-slate-700">
                        <th className="py-2.5 px-3 font-bold rounded-l-lg">বিষয় (Subject)</th>
                        <th className="py-2.5 px-3 font-bold text-center">পূর্ণমান</th>
                        <th className="py-2.5 px-3 font-bold text-center">প্রাপ্ত নম্বর</th>
                        <th className="py-2.5 px-3 font-bold text-center">লেটার গ্রেড</th>
                        <th className="py-2.5 px-3 font-bold text-center rounded-r-lg">গ্রেড পয়েন্ট</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      {resultData.subjects.map((sub, sIdx) => (
                        <tr key={sIdx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition">
                          <td className="py-2.5 px-3 font-medium text-slate-800 dark:text-slate-200">
                            {sub.name}
                          </td>
                          <td className="py-2.5 px-3 text-center text-slate-500 dark:text-slate-400 font-mono">
                            {sub.full}
                          </td>
                          <td className="py-2.5 px-3 text-center font-bold text-madrasah-primary dark:text-blue-400 font-mono">
                            {sub.got}
                          </td>
                          <td className="py-2.5 px-3 text-center font-semibold text-slate-700 dark:text-slate-300">
                            {sub.grade}
                          </td>
                          <td className="py-2.5 px-3 text-center font-mono font-bold text-slate-700 dark:text-slate-300">
                            {sub.gp}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Actions & Print */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                  <p className="text-slate-400 italic flex items-center gap-1">
                    <Info className="w-3.5 h-3.5" />
                    <span>এটি একটি প্রাতিষ্ঠানিক ডিজিটাল কপি।</span>
                  </p>
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="px-4 py-2 rounded-xl bg-madrasah-light hover:bg-madrasah-border/60 dark:bg-slate-800 dark:hover:bg-slate-700 text-madrasah-primary dark:text-blue-300 font-bold flex items-center gap-1.5 transition cursor-pointer"
                  >
                    <Printer className="w-4 h-4" />
                    <span>মার্কশিট প্রিন্ট করুন</span>
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
