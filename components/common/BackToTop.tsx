"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const SHOW_AFTER = 320;

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > SHOW_AFTER);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
      className={`fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-[#032683] text-white shadow-[0_8px_24px_rgba(3,38,131,0.28)] transition-all duration-300 hover:bg-[#1A5BB8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#032683] sm:bottom-8 sm:right-8 ${
        isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}
