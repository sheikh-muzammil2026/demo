"use client";

import React, { useState, useEffect, useRef } from "react";
import { Globe, ChevronDown, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: "bn", name: "বাংলা", short: "বাং" },
    { code: "en", name: "English", short: "EN" },
    { code: "ar", name: "العربية", short: "عربي" },
  ];

  const activeLang =
    languages.find((lang) => lang.code === language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (code) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border transition-all duration-300 focus:outline-none cursor-pointer shadow-sm ${
          isOpen
            ? "border-madrasah-accent bg-madrasah-light text-madrasah-primary shadow-sm"
            : "border-slate-200 dark:border-slate-700 bg-slate-100/80 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-madrasah-light hover:border-madrasah-border hover:text-madrasah-primary"
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe className="w-3.5 h-3.5 text-madrasah-accent" />
        <span className="text-[11px] sm:text-xs font-semibold tracking-wide flex items-center gap-1">
          <span className="hidden sm:inline">{activeLang.name}</span>
          <span className="inline sm:hidden">{activeLang.short}</span>
        </span>
        <ChevronDown
          className={`w-3 h-3 text-slate-500 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-madrasah-primary" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute ltr:right-0 rtl:left-0 mt-2 w-40 origin-top-right rounded-2xl border border-madrasah-border bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 shadow-xl backdrop-blur-2xl focus:outline-none z-[100] overflow-hidden"
          role="menu"
        >
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-madrasah-accent to-transparent" />
          <div className="p-1.5 space-y-0.5">
            {languages.map((lang) => {
              const isSelected = language === lang.code;
              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-madrasah-light text-madrasah-primary font-bold border border-madrasah-border"
                      : "text-slate-700 dark:text-slate-200 hover:bg-madrasah-light/60 hover:text-madrasah-primary"
                  }`}
                  role="menuitem"
                >
                  <span>{lang.name}</span>
                  {isSelected && <Check className="w-3.5 h-3.5 text-madrasah-accent" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
