"use client";

import React, { useState } from "react";
import {
  MapPin,
  PhoneCall,
  Mail,
  Send,
  CheckCircle,
  Clock,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactSection() {
  const { language } = useLanguage();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    program: "hifz",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", phone: "", program: "hifz", message: "" });
    setTimeout(() => {
      setSubmitted(false);
    }, 6000);
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 bg-madrasah-light/40 dark:bg-slate-900/40 border-t border-madrasah-border/40 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-madrasah-accent font-bold text-xs sm:text-sm tracking-wider uppercase">
            {language === "ar" ? "تواصل معنا" : language === "en" ? "Contact Us" : "যোগাযোগ করুন"}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-madrasah-primary dark:text-white mt-1">
            {language === "ar"
              ? "زيارة الحرم الجامعي والاستفسارات"
              : language === "en"
              ? "Campus Visit & General Inquiries"
              : "ক্যাম্পাস পরিদর্শন ও জিজ্ঞাসা"}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2">
            {language === "ar"
              ? "نرحب بزيارتكم واستفساراتكم حول شروط القبول والتسجيل."
              : language === "en"
              ? "Reach out for any information regarding admissions, hostel, or campus visits."
              : "যেকোনো তথ্য, ভর্তি সহায়তা বা ক্যাম্পাস পরিদর্শনের জন্য আমাদের সাথে যোগাযোগ করুন।"}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* ================= LEFT COLUMN: CONTACT CARDS ================= */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* 1. Address Card */}
            <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-madrasah-border dark:border-slate-700 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-madrasah-light dark:bg-slate-700 text-madrasah-primary dark:text-blue-400 flex items-center justify-center text-xl shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 dark:text-white text-sm">
                  {language === "ar" ? "عنوان الحرم الجامعي" : language === "en" ? "Campus Address" : "ক্যাম্পাসের ঠিকানা"}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                  দক্ষিণ শ্যামলী, হবিগঞ্জ সদর, হবিগঞ্জ, সিলেট বিভাগ, বাংলাদেশ।
                </p>
              </div>
            </div>

            {/* 2. Hotline Card */}
            <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-madrasah-border dark:border-slate-700 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-madrasah-light dark:bg-slate-700 text-madrasah-primary dark:text-blue-400 flex items-center justify-center text-xl shrink-0">
                <PhoneCall className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 dark:text-white text-sm">
                  {language === "ar" ? "هاتف القبول والمساعدة" : language === "en" ? "Helpline & Admission" : "হটলাইন ও ভর্তি হেল্প"}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 font-mono">
                  ফোন: +৮৮০ ১৭৪৮-৮৬৮১৬১
                </p>
                <p className="text-xs text-slate-400 mt-0.5 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>প্রতিদিন সকাল ৮:০০ - বিকাল ৫:০০ টা</span>
                </p>
              </div>
            </div>

            {/* 3. Email Card */}
            <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-madrasah-border dark:border-slate-700 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-madrasah-light dark:bg-slate-700 text-madrasah-primary dark:text-blue-400 flex items-center justify-center text-xl shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 dark:text-white text-sm">
                  {language === "ar" ? "البريد الإلكتروني" : language === "en" ? "Email Contact" : "ইমেইল যোগাযোগ"}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">aimhabiganj@gmail.com</p>
                <p className="text-xs text-slate-400">info@aimhabiganj.com</p>
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: QUICK INQUIRY FORM ================= */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-3xl border border-madrasah-border dark:border-slate-700 shadow-sm">
              <h3 className="font-bold text-madrasah-primary dark:text-white text-lg mb-4">
                {language === "ar"
                  ? "إرسال رسالة أو استفسار"
                  : language === "en"
                  ? "Send an Inquiry or Message"
                  : "বার্তা বা তথ্য অনুসন্ধান পাঠান"}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="parentName"
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
                    >
                      আপনার নাম *
                    </label>
                    <input
                      type="text"
                      id="parentName"
                      required
                      placeholder="অভিভাবকের পুরো নাম"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-madrasah-accent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="parentPhone"
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
                    >
                      মোবাইল নম্বর *
                    </label>
                    <input
                      type="tel"
                      id="parentPhone"
                      required
                      placeholder="০১৭১XXXXXXX"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-madrasah-accent font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="inquiryProgram"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
                  >
                    আগ্রহী বিভাগ / শ্রেণি
                  </label>
                  <select
                    id="inquiryProgram"
                    value={form.program}
                    onChange={(e) => setForm({ ...form, program: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-madrasah-accent"
                  >
                    <option value="hifz">হিফজুল কুরআন বিভাগ (আন্তর্জাতিক)</option>
                    <option value="nurani">নূরানী ও প্লে-নার্সারি শাখা</option>
                    <option value="primary">প্রাথমিক স্তর (১ম - ৫ম শ্রেণি)</option>
                    <option value="dakhil">দাখিল স্তর (৬ষ্ঠ - ১০ম শ্রেণি)</option>
                    <option value="language">আরবি ভাষা ডিপ্লোমা ও বিশেষ কোর্স</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="inquiryMsg"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
                  >
                    আপনার মন্তব্য বা প্রশ্ন
                  </label>
                  <textarea
                    id="inquiryMsg"
                    rows={3}
                    placeholder="আপনার কোনো নির্দিষ্ট জিজ্ঞাসা থাকলে লিখুন..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-madrasah-accent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-madrasah-primary hover:bg-madrasah-accent text-white font-bold rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>বার্তা প্রেরণ করুন</span>
                </button>
              </form>

              {submitted && (
                <div className="mt-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-xl text-xs font-semibold text-center animate-[fadeIn_0.2s_ease-out]">
                  ✓ ধন্যবাদ! আপনার বার্তাটি গৃহীত হয়েছে। মাদরাসা দপ্তর থেকে দ্রুত আপনার সাথে যোগাযোগ করা হবে।
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
