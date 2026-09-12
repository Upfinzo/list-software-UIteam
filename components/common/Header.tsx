"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { navigation } from "@/data/navigation";
import Button from "@/components/common/Button";
import { Images } from "@/assets/images/images";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openMenu = (index: number) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setHoveredIndex(index);
  };

  const scheduleClose = () => {
    closeTimeout.current = setTimeout(() => setHoveredIndex(null), 120);
  };

  const activeMenu = hoveredIndex !== null ? navigation[hoveredIndex] : null;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "top-0 bg-white shadow-md" : "top-10"
      }`}
      onMouseLeave={scheduleClose}
    >
      {/* Gradient Border */}
      <div
        className={`mx-auto max-w-7xl rounded-[100px] p-[1.5px] transition-all duration-300 ${
          isScrolled
            ? "bg-transparent"
            : "bg-[linear-gradient(359deg,#8CC8FF_0%,#E8F3FF_25%,#FFFFFF_50%,#FFFFFF_75%,#A9D4FF_100%)]"
        }`}
      >
        <div
          className={`flex h-20 items-center justify-between rounded-[100px] px-6 transition-all duration-300 ${
            isScrolled ? "" : "bg-[linear-gradient(180deg,#F0F9FF_0%,#F4F7FF_50%,#EEF0FF_100%)]"
          }`}
        >
          <Link href="/" className="flex shrink-0 items-center">
            <img src={Images.common.logo} alt="ListSoftware Logo" className="h-auto w-[75px]" />
          </Link>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {navigation.map((item, index) => {
                const isActive = activeIndex === index;
                return (
                  <li key={item.href} onMouseEnter={() => openMenu(index)}>
                    <Link
                      href={item.href}
                      onClick={() => setActiveIndex(index)}
                      className={`relative text-sm font-medium transition-colors ${
                        isActive ? "text-black" : "text-gray-700 hover:text-black"
                      }`}
                    >
                      {item.label}
                      {isActive && (
                        <span className="absolute -bottom-2 left-0 h-[1px] w-full bg-[#4B9EFF]" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Button href="/contact" variant="primary">
              Request a Demo
            </Button>
            <button
              type="button"
              className="rounded-full bg-[#111A2E] p-2.5 text-white md:hidden"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Full-width mega menu */}
      {activeMenu?.megaMenu && (
        <div
          className="absolute inset-x-0 top-full z-40 hidden md:block"
          onMouseEnter={() => hoveredIndex !== null && openMenu(hoveredIndex)}
        >
          <div className="w-screen border-t border-[#DCEAFF] bg-white shadow-xl">
            <div className="mx-auto grid max-w-[1380px] grid-cols-[0.9fr_1.2fr_1.2fr_0.9fr] gap-0 px-8 py-8">
              {activeMenu.megaMenu.map((column) => (
                <div
                  key={column.title}
                  className={`px-6 ${column.featured ? "border-l border-[#E6EBF2]" : ""}`}
                >
                  <h4 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#66758A]">
                    {column.title}
                  </h4>
                  <div className="flex flex-col gap-2">
                    {column.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-[#F7F9FC]"
                        >
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E5EAF2] bg-white shadow-sm">
                            <Icon className="h-[18px] w-[18px] text-[#3277D9]" />
                          </span>
                          <span>
                            <span className="block text-[13px] font-semibold text-[#172033] group-hover:text-[#3277D9]">
                              {item.label}
                            </span>
                            <span className="mt-0.5 block text-[11px] leading-4 text-[#718096]">
                              {item.description}
                            </span>
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                  {column.featured && column.description && column.ctaLabel && column.ctaHref && (
                    <div className="mt-8 border-t border-[#E6EBF2] pt-5">
                      <p className="mb-4 text-xs leading-5 text-[#718096]">{column.description}</p>
                      <Link
                        href={column.ctaHref}
                        className="inline-flex items-center rounded-full border border-[#DCE2EA] px-5 py-2 text-xs font-semibold text-[#172033] transition-colors hover:border-[#3277D9] hover:text-[#3277D9]"
                      >
                        {column.ctaLabel}
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mx-auto mt-3 max-w-7xl rounded-3xl border border-[#DCEAFF] bg-white px-6 py-4 shadow-md md:hidden">
          <nav>
            <ul className="flex flex-col gap-4">
              {navigation.map((item, index) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => {
                      setActiveIndex(index);
                      setMobileOpen(false);
                    }}
                    className={`block text-sm font-medium transition-colors ${
                      activeIndex === index ? "text-black" : "text-gray-700 hover:text-black"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;