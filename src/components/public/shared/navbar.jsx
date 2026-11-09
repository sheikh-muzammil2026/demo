"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Sun,
  Moon,
  LogIn,
  LogOut,
  LayoutDashboard,
  ChevronDown,
  ChevronRight,
  GraduationCap,
  Menu,
  X,
  Phone,
  Mail,
  Award,
  Bell,
} from "lucide-react";
import { FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const FIRST_SECTION_HASHES = new Set([
  "home",
  "about",
  "programs",
  "results",
  "notices",
  "contact",
  "profile",
  "teachers",
  "timeline",
  "hifz",
]);

const API_BASE = (
  process.env.NEXT_PUBLIC_SERVER_API || "http://localhost:5000"
).replace(/\/$/, "");

export default function Navbar() {
  const { language, t } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();
  const headerRef = useRef(null);

  const [darkMode, setDarkMode] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [tickerNotices, setTickerNotices] = useState([]);

  const { data: session } = authClient.useSession();
  const isLoggedIn = !!session?.user;
  const userRole = session?.user?.role;

  // Dark Mode detection & persistence
  useEffect(() => {
    const isDark =
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList.toggle("dark", isDark);
    window.__isDarkModeActive = isDark;
    const frameId = requestAnimationFrame(() => {
      setDarkMode(isDark);
    });
    return () => cancelAnimationFrame(frameId);
  }, []);

  // Fetch live ticker notices
  useEffect(() => {
    let isMounted = true;
    const fetchTicker = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/notices/ticker`, {
          cache: "no-store",
        });
        if (!res.ok) throw new Error("Ticker fetch failed");
        const data = await res.json();
        if (!isMounted) return;
        if (data?.success && data.tickerNotices && data.tickerNotices.length > 0) {
          setTickerNotices(data.tickerNotices);
        } else if (data?.latestNotice) {
          setTickerNotices([data.latestNotice]);
        }
      } catch (err) {
        // Fallback notices will be used automatically
      }
    };

    fetchTicker();
    const interval = setInterval(fetchTicker, 60000);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  // Close dropdown & mobile menu when route changes
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveDropdown(null);
      setMobileMenuOpen(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newMode);
    if (typeof window !== "undefined") {
      window.__isDarkModeActive = newMode;
    }
  };

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
      },
    });
  };

  const getDashboardPath = () => {
    if (!userRole) return "/";
    return `/dashboard/${userRole.toLowerCase()}`;
  };

  const scrollToElementCleanly = useCallback((hash) => {
    if (typeof window === "undefined" || !hash) return false;

    if (hash === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return true;
    }

    const element = document.getElementById(hash);
    if (!element) return false;

    const nav = typeof document !== "undefined" ? document.querySelector("nav") : null;
    const navHeight = nav ? nav.offsetHeight : 80;
    const elementTop = element.getBoundingClientRect().top + window.scrollY;

    const targetY = Math.max(0, elementTop - navHeight - 10);
    window.scrollTo({ top: targetY, behavior: "smooth" });
    return true;
  }, []);

  const handleMenuClick = (e, href) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);

    if (!href) return;

    const currentPath =
      typeof window !== "undefined" ? window.location.pathname : pathname;

    if (!href.includes("#")) {
      if (currentPath === href) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    const [targetPath, hash] = href.split("#");
    const normalizedTarget = targetPath || "/";

    if (currentPath === normalizedTarget) {
      const didScroll = scrollToElementCleanly(hash);
      if (didScroll) {
        e.preventDefault();
        window.history.pushState(null, "", href);
      }
    }
  };

  const menuItems = [
    { id: "home", name: language === "ar" ? "الرئيسية" : language === "en" ? "Home" : "মূলপাতা", href: "/#home" },
    {
      id: "about",
      name: language === "ar" ? "عن المدرسة" : language === "en" ? "About Us" : "পরিচিতি",
      href: "/about",
      basePath: "/about",
      dropdown: [
        { name: t("menu.profile") || "প্রতিষ্ঠান পরিচিতি", href: "/about#profile" },
        { name: t("menu.founder") || "প্রতিষ্ঠাতা পরিচিতি", href: "/about#founder" },
        { name: t("menu.vision") || "লক্ষ্য ও উদ্দেশ্য", href: "/about#vision" },
        { name: t("menu.committee") || "পরিচালনা পর্ষদ", href: "/about#committee" },
        { name: t("menu.features") || "আমাদের বৈশিষ্ট্য", href: "/about#features" },
        { name: t("menu.policies") || "নীতিমালা", href: "/about#policies" },
        { name: t("menu.faculty") || "শিক্ষকমণ্ডলী", href: "/about#faculty" },
        { name: t("menu.staff") || "কর্মকর্তা ও কর্মচারী", href: "/about#staff" },
      ],
    },
    {
      id: "programs",
      name: language === "ar" ? "الأقسام" : language === "en" ? "Programs" : "বিভাগসমূহ",
      href: "/#programs",
      dropdown: [
        { name: "হিফজুল কুরআন বিভাগ (আন্তর্জাতিক)", href: "/#programs" },
        { name: "নূরানী ও প্রাক-প্রাথমিক শাখা", href: "/#programs" },
        { name: "প্রাথমিক ও মাধ্যমিক স্তর (দাখিল)", href: "/#programs" },
        { name: "আরবি ভাষা ও বিশেষ কোর্স", href: "/#programs" },
        { name: "একাডেমিক পূর্ণাঙ্গ সিলেবাস", href: "/academics" },
        { name: "ক্লাস ও পরীক্ষার রুটিন", href: "/academics/routine/class-wise" },
      ],
    },
    {
      id: "results",
      name: language === "ar" ? "النتائج" : language === "en" ? "Results" : "ফলাফল যাচাই",
      href: "/#results",
    },
    {
      id: "notices",
      name: language === "ar" ? "الإعلانات" : language === "en" ? "Notices" : "নোটিশ বোর্ড",
      href: "/#notices",
      dropdown: [
        { name: "সাম্প্রতিক নোটিশ ও বিজ্ঞপ্তি", href: "/#notices" },
        { name: "সকল নোটিশ আর্কাইভ", href: "/notices" },
      ],
    },
    {
      id: "admission",
      name: language === "ar" ? "القبول والتسجيل" : language === "en" ? "Admission" : "ভর্তি",
      href: "/admission",
      basePath: "/admission",
      dropdown: [
        { name: "ভর্তি নির্দেশিকা ও সময়সূচি", href: "/admission#timeline" },
        { name: "ভর্তি পরীক্ষা ও যোগ্যতা", href: "/admission#test" },
        { name: "ভর্তি ও অন্যান্য ফি", href: "/admission#fees" },
        { name: "অনলাইন ভর্তি আবেদন ফরম", href: "/admission/form" },
      ],
    },
    {
      id: "hostel",
      name: language === "ar" ? "السكن الداخلي" : language === "en" ? "Hostel" : "আবাসন",
      href: "/hostel",
      basePath: "/hostel",
      dropdown: [
        { name: "ছাত্রাবাস পরিচিতি", href: "/hostel#about" },
        { name: "পরিচালক ও শিক্ষকবৃন্দ", href: "/hostel#directors" },
        { name: "আবাসন নিয়মাবলী ও রুটিন", href: "/hostel#routine" },
      ],
    },
    {
      id: "contact",
      name: language === "ar" ? "اتصل بنا" : language === "en" ? "Contact" : "যোগাযোগ",
      href: "/#contact",
    },
  ];

  const defaultTickerItems = [
    "📢 শিক্ষাবর্ষ ২০২৬-২০২৭ এর সকল বিভাগে নতুন শিক্ষার্থী ভর্তি আবেদন চলছে!",
    "🏆 হিফজুল কুরআন মেধা অন্বেষণ ও ক্বেরাত প্রতিযোগিতা আগামী ১২ নভেম্বর অনুষ্ঠিত হবে।",
    "📜 সাময়িক পরীক্ষা ২০২৬ এর ফলাফল প্রকাশ করা হয়েছে, অনলাইনে মার্কশিট যাচাই করুন।",
  ];

  const tickerItems =
    tickerNotices.length > 0
      ? tickerNotices.map((n) => `📢 ${n.title}`)
      : defaultTickerItems;

  const isMenuActive = (item) => {
    if (item.basePath) {
      return pathname?.startsWith(item.basePath);
    }
    if (item.href && !item.href.includes("#")) {
      return pathname === item.href;
    }
    return false;
  };

  return (
    <header ref={headerRef} className="w-full">
      {/* ================= 1. TOP NOTICE TICKER & CONTACT BAR (aimpurbachal styling) ================= */}
      <div className="bg-madrasah-dark text-white text-xs md:text-sm border-b border-blue-900/60 py-2 px-4 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Live Alert Badge + Marquee Ticker */}
          <div className="flex items-center w-full md:w-3/5 overflow-hidden">
            <span className="bg-madrasah-accent text-white text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1.5 shrink-0 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-white animate-ping" />
              {language === "ar" ? "إعلان" : language === "en" ? "Notice" : "বিজ্ঞপ্তি"}
            </span>
            <div className="ml-3 overflow-hidden whitespace-nowrap w-full">
              <div className="inline-block animate-[marquee_25s_linear_infinite] hover:[animation-play-state:paused] text-blue-100 text-xs">
                {tickerItems.map((item, index) => (
                  <span key={index} className="mx-4">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Contacts, Socials, Language & Auth Controls */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-5 text-xs text-blue-100 shrink-0">
            <a
              href="tel:+8801748868161"
              className="flex items-center gap-1.5 hover:text-white transition font-mono"
            >
              <Phone className="w-3.5 h-3.5 text-madrasah-border" />
              <span>+৮৮০ ১৭৪৮-৮৬৮১৬১</span>
            </a>
            <span className="text-blue-400">|</span>
            <a
              href="mailto:aimhabiganj@gmail.com"
              className="flex items-center gap-1.5 hover:text-white transition"
            >
              <Mail className="w-3.5 h-3.5 text-madrasah-border" />
              <span>aimhabiganj@gmail.com</span>
            </a>
            <span className="text-blue-400">|</span>
            <div className="flex items-center space-x-2 text-madrasah-border text-sm">
              <a
                href="https://www.facebook.com/p/AIM-Habiganj-100062973924471/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition p-1"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-3.5 h-3.5" />
              </a>
              <a
                href="http://www.youtube.com/@aimhabiganj"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition p-1"
                aria-label="YouTube"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/8801748868161"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition p-1"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-3.5 h-3.5" />
              </a>
            </div>

            <span className="text-blue-400">|</span>

            {/* Language Switcher */}
            <div className="text-slate-800">
              <LanguageSwitcher />
            </div>

            {/* Dark Mode Toggle */}
            <button
              type="button"
              onClick={toggleDarkMode}
              title={darkMode ? "Light Mode" : "Dark Mode"}
              aria-label="Toggle Dark Mode"
              className="p-1.5 rounded-lg bg-blue-900/60 hover:bg-madrasah-accent text-blue-100 hover:text-white transition"
            >
              {darkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>

            {/* Auth Login/Dashboard Link */}
            {isLoggedIn ? (
              <div className="flex items-center gap-2">
                <Link
                  href={getDashboardPath()}
                  className="inline-flex items-center gap-1 bg-madrasah-accent hover:bg-blue-600 text-white px-2.5 py-1 rounded-lg text-xs font-semibold shadow-sm transition"
                >
                  <LayoutDashboard className="w-3 h-3" />
                  <span>{t("menu.dashboard") || "ড্যাশবোর্ড"}</span>
                </Link>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="text-blue-200 hover:text-rose-300 transition"
                  title="Logout"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="inline-flex items-center gap-1 hover:text-white text-blue-200 transition"
              >
                <LogIn className="w-3.5 h-3.5 text-madrasah-border" />
                <span>{t("menu.login") || "লগইন"}</span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* ================= 2. MAIN NAVBAR (aimpurbachal styling) ================= */}
      <nav className="bg-white/95 dark:bg-slate-900/95 sticky top-0 z-40 border-b border-madrasah-border/40 dark:border-slate-800 shadow-sm backdrop-blur-md transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo & Branding */}
            <Link
              href="/"
              onClick={(e) => handleMenuClick(e, "/")}
              className="flex items-center space-x-3 group cursor-pointer"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-madrasah-primary to-madrasah-accent flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform p-1.5 shrink-0">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src="/aimlogo1.png"
                    alt="AIM Logo"
                    fill
                    sizes="56px"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
              <div>
                <span className="block text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-madrasah-primary dark:text-blue-400 leading-tight">
                  {language === "ar"
                    ? "مدرسة السلام النموذجية"
                    : language === "en"
                    ? "As-Salam Ideal Madrasah"
                    : "আস-সালাম আইডিয়াল মাদ্রাসা"}
                </span>
                <span className="block text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium tracking-wide">
                  As-Salam Ideal Madrasah • আল-কুরআন ও আধুনিক শিক্ষার সমন্বয়
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-7 text-sm font-semibold text-slate-700 dark:text-slate-200">
              {menuItems.map((item) => {
                const active = isMenuActive(item);
                const isOpen = activeDropdown === item.id;

                return (
                  <div
                    key={item.id}
                    className="relative group py-2"
                    onMouseEnter={() => item.dropdown && setActiveDropdown(item.id)}
                    onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
                  >
                    {item.dropdown ? (
                      <>
                        <button
                          type="button"
                          onClick={(e) => {
                            if (!item.dropdown) {
                              handleMenuClick(e, item.href);
                            } else {
                              setActiveDropdown(isOpen ? null : item.id);
                            }
                          }}
                          className={`inline-flex items-center gap-1 transition-colors py-1 cursor-pointer ${
                            active
                              ? "text-madrasah-primary dark:text-blue-400 font-bold"
                              : "hover:text-madrasah-accent"
                          }`}
                        >
                          <Link
                            href={item.href}
                            onClick={(e) => handleMenuClick(e, item.href)}
                            className="cursor-pointer"
                          >
                            {item.name}
                          </Link>
                          <ChevronDown
                            className={`w-3.5 h-3.5 transition-transform duration-200 ${
                              isOpen ? "rotate-180 text-madrasah-accent" : ""
                            }`}
                          />
                        </button>

                        {/* Dropdown Menu */}
                        <div
                          className={`absolute ltr:left-0 rtl:right-0 top-full pt-2 w-64 z-50 transition-all duration-200 ${
                            isOpen
                              ? "opacity-100 visible translate-y-0"
                              : "opacity-0 invisible translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:pointer-events-auto"
                          }`}
                        >
                          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-madrasah-border/60 dark:border-slate-800 p-2 text-xs space-y-1">
                            {item.dropdown.map((sub, idx) => (
                              <Link
                                key={idx}
                                href={sub.href}
                                onClick={(e) => handleMenuClick(e, sub.href)}
                                className="flex items-center justify-between px-3 py-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-madrasah-light/60 dark:hover:bg-slate-800 hover:text-madrasah-primary dark:hover:text-blue-400 font-medium transition"
                              >
                                <span>{sub.name}</span>
                                <ChevronRight className="w-3.5 h-3.5 text-madrasah-accent opacity-75" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={(e) => handleMenuClick(e, item.href)}
                        className={`transition-colors py-1 cursor-pointer block ${
                          active
                            ? "text-madrasah-primary dark:text-blue-400 font-bold"
                            : "hover:text-madrasah-accent"
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>

            {/* CTA & Mobile Menu Toggle */}
            <div className="flex items-center space-x-3">
              {/* Online Admission CTA Button */}
              <Link
                href="/admission/form"
                className="hidden sm:inline-flex items-center gap-2 bg-madrasah-primary hover:bg-madrasah-accent text-white px-5 py-2.5 rounded-xl font-semibold text-sm shadow-md shadow-madrasah-primary/20 transition-all transform active:scale-95 cursor-pointer"
              >
                <GraduationCap className="w-4 h-4" />
                <span>{language === "ar" ? "تقديم طلب القبول" : language === "en" ? "Admission" : "ভর্তি আবেদন"}</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="lg:hidden p-2.5 rounded-xl bg-madrasah-light dark:bg-slate-800 text-madrasah-primary dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-slate-700 focus:outline-none transition cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* ================= 3. MOBILE DROPDOWN MENU (aimpurbachal styling) ================= */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-slate-900 border-t border-madrasah-border/50 dark:border-slate-800 px-5 pt-3 pb-6 space-y-2.5 shadow-lg animate-[fadeIn_0.2s_ease-out]">
            {menuItems.map((item) => (
              <div key={item.id} className="border-b border-slate-100 dark:border-slate-800/80 pb-1.5">
                <Link
                  href={item.href}
                  onClick={(e) => handleMenuClick(e, item.href)}
                  className="block py-1.5 text-slate-700 dark:text-slate-200 hover:text-madrasah-accent font-semibold text-sm"
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="ps-3 pt-1 space-y-1">
                    {item.dropdown.slice(0, 4).map((sub, sIdx) => (
                      <Link
                        key={sIdx}
                        href={sub.href}
                        onClick={(e) => handleMenuClick(e, sub.href)}
                        className="block py-1 text-xs text-slate-500 dark:text-slate-400 hover:text-madrasah-primary"
                      >
                        • {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Controls & Switchers */}
            <div className="flex items-center justify-between pt-3">
              <LanguageSwitcher />
              <button
                type="button"
                onClick={toggleDarkMode}
                className="p-2 rounded-xl bg-madrasah-light dark:bg-slate-800 text-madrasah-primary dark:text-blue-300 text-xs font-semibold flex items-center gap-1.5"
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                <span>{darkMode ? "লাইট মোড" : "ডার্ক মোড"}</span>
              </button>
            </div>

            {/* Mobile Full-Width CTA */}
            <div className="pt-2">
              <Link
                href="/admission/form"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center block bg-madrasah-primary hover:bg-madrasah-accent text-white py-2.5 rounded-xl font-semibold text-sm shadow transition"
              >
                অনলাইন ভর্তি আবেদন
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
