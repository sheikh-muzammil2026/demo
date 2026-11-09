import React from "react";
import HeroSection from "@/components/public/home/hero";
import StatsSection from "@/components/public/home/statsSection";
import WhyChooseUs from "@/components/public/home/whyChooseUs";
import FeaturedSections from "@/components/public/home/featuredSection";
import ResultLookupSection from "@/components/public/home/ResultLookupSection";
import NoticeBoardSection from "@/components/public/home/NoticeBoardSection";
import ReviewSection from "@/components/public/home/reviews";
import ContactSection from "@/components/public/home/ContactSection";

export const metadata = {
  title: "As-Salam Ideal Madrasah (AIM) | দারুল উলুম ও আধুনিক শিক্ষার সমন্বিত প্রতিষ্ঠান",
  description:
    "আস-সালাম আইডিয়াল মাদরাসা (এইম) হবিগঞ্জ - আল-কুরআন ও আধুনিক শিক্ষার অপূর্ব সমন্বয়ে আলোকিত আদর্শ মানুষ গড়ার অনন্য শিক্ষাকেন্দ্র।",
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Stats Counter Banner */}
      <StatsSection />

      {/* 3. About Institution */}
      <WhyChooseUs />

      {/* 4. Academic Departments & Programs */}
      <FeaturedSections />

      {/* 5. Online Result Lookup & Verification System */}
      <ResultLookupSection />

      {/* 6. Notice Board & Events */}
      <NoticeBoardSection />

      {/* 7. Principal's Message & Testimonials */}
      <ReviewSection />

      {/* 8. Contact & Campus Location */}
      <ContactSection />
    </div>
  );
}
