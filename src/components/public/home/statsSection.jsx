"use client";

import React, { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

const formatLocalizedNumber = (num, language) => {
  const formatted = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  if (language === "bn") {
    const bengaliDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    return formatted.replace(/\d/g, (digit) => bengaliDigits[digit]);
  }

  if (language === "ar") {
    const arabicDigits = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
    return formatted.replace(/\d/g, (digit) => arabicDigits[digit]);
  }

  return formatted;
};

function AnimatedCounter({ targetNumber, suffix = "", language = "bn" }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const node = elementRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1800;
          const steps = 45;
          const stepTime = duration / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.floor(easeOutProgress * targetNumber);

            if (currentStep >= steps) {
              setCount(targetNumber);
              clearInterval(timer);
            } else {
              setCount(currentVal);
            }
          }, stepTime);
        }
      },
      { threshold: 0.25 }
    );

    if (node) {
      observer.observe(node);
    }

    return () => observer.disconnect();
  }, [targetNumber, hasAnimated]);

  return (
    <span ref={elementRef}>
      {formatLocalizedNumber(count, language)}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const { language } = useLanguage();

  const content = {
    bn: [
      {
        value: 1250,
        suffix: "+",
        label: "অধ্যয়নরত শিক্ষার্থী",
      },
      {
        value: 45,
        suffix: "+",
        label: "যোগ্য ও অভিজ্ঞ শিক্ষক",
      },
      {
        value: 280,
        suffix: "+",
        label: "হিফজ সম্পন্নকারী হাফেজ",
      },
      {
        value: 100,
        suffix: "%",
        label: "বোর্ড পরীক্ষায় পাশের হার",
      },
    ],
    en: [
      {
        value: 1250,
        suffix: "+",
        label: "Active Students",
      },
      {
        value: 45,
        suffix: "+",
        label: "Qualified Faculty",
      },
      {
        value: 280,
        suffix: "+",
        label: "Certified Huffaz",
      },
      {
        value: 100,
        suffix: "%",
        label: "Board Exam Success",
      },
    ],
    ar: [
      {
        value: 1250,
        suffix: "+",
        label: "طالب وطالبة",
      },
      {
        value: 45,
        suffix: "+",
        label: "عالم ومدرس متخصص",
      },
      {
        value: 280,
        suffix: "+",
        label: "حافظ لكتاب الله",
      },
      {
        value: 100,
        suffix: "%",
        label: "نسبة النجاح العامة",
      },
    ],
  };

  const stats = content[language] || content.bn;

  return (
    <section className="bg-madrasah-primary text-white py-10 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-blue-800">
          {stats.map((item, index) => (
            <div key={index} className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-madrasah-border mb-1 tracking-tight">
                <AnimatedCounter
                  targetNumber={item.value}
                  suffix={item.suffix}
                  language={language}
                />
              </div>
              <div className="text-sm font-medium text-blue-100">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
