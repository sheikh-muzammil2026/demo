"use client";

import React, { useState } from "react";
import { GraduationCap, X, CheckCircle, Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AdmissionModal({ isOpen, onClose }) {
  const { language } = useLanguage();
  const [form, setForm] = useState({
    name: "",
    class: "১ম শ্রেণি",
    phone: "",
    residential: "অনাবাসিক (Day Care / Semi)",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-850 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border-2 border-madrasah-border dark:border-slate-700 relative animate-[fadeIn_0.2s_ease-out]">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 dark:hover:text-white text-lg w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-750 flex items-center justify-center cursor-pointer transition"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-madrasah-light dark:bg-slate-700 text-madrasah-primary dark:text-blue-400 flex items-center justify-center mx-auto text-xl mb-2">
            <GraduationCap className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-madrasah-primary dark:text-white">
            অনলাইন ভর্তি প্রাথমিক ফরম
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            শিক্ষাবর্ষ ২০২৬-২০২৭ এর প্রাথমিক তালিকাভুক্তি
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <label
              htmlFor="applicantName"
              className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
            >
              শিক্ষার্থীর পূর্ণ নাম *
            </label>
            <input
              type="text"
              id="applicantName"
              required
              placeholder="যেমন: আব্দুল্লাহ আল মামুন"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2 text-sm text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-madrasah-accent"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label
                htmlFor="applicantClass"
                className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
              >
                ভর্তির শ্রেণি *
              </label>
              <select
                id="applicantClass"
                value={form.class}
                onChange={(e) => setForm({ ...form, class: e.target.value })}
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-sm text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-madrasah-accent"
              >
                <option>প্লে / নার্সারি</option>
                <option>১ম শ্রেণি</option>
                <option>হিফজ বিভাগ (আন্তর্জাতিক)</option>
                <option>দাখিল ৬ষ্ঠ শ্রেণি</option>
                <option>দাখিল ৯ম শ্রেণি</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="applicantPhone"
                className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
              >
                অভিভাবকের ফোন *
              </label>
              <input
                type="tel"
                id="applicantPhone"
                required
                placeholder="০১৭১XXXXXXX"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-sm text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-madrasah-accent font-mono"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="applicantResidential"
              className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
            >
              আবাসিক ব্যবস্থা
            </label>
            <select
              id="applicantResidential"
              value={form.residential}
              onChange={(e) => setForm({ ...form, residential: e.target.value })}
              className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2 text-sm text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-madrasah-accent"
            >
              <option>অনাবাসিক (Day Care / Semi)</option>
              <option>পূর্ণ আবাসিক (Hostel Accommodation)</option>
            </select>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 bg-madrasah-primary hover:bg-madrasah-accent text-white font-bold rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>আবেদন সম্পন্ন করুন</span>
            </button>
          </div>
        </form>

        {submitted && (
          <div className="mt-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-xl text-xs font-semibold text-center animate-[fadeIn_0.2s_ease-out]">
            ✓ আবেদন সফল হয়েছে! আপনার আবেদন ট্র্যাকিং আইডি: <strong>#AIM-2026-9481</strong>
          </div>
        )}
      </div>
    </div>
  );
}
