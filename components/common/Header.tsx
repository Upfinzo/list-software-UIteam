"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

import { navigation } from "@/data/navigation";
import Button from "@/components/common/Button";
import { Images } from "@/assets/images/images";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeDirectionIndex, setActiveDirectionIndex] = useState(0);

  const [mobileExpandedIndex, setMobileExpandedIndex] = useState<number | null>(null);
  const [mobileActiveDirectionIndex, setMobileActiveDirectionIndex] = useState<number | null>(null);

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

  useEffect(() => {
    setActiveDirectionIndex(0);
  }, [hoveredIndex]);

  const activeDirection = activeMenu?.megaMenu?.[activeDirectionIndex] ?? null;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "top-0 bg-white shadow-md" : "top-4 sm:top-10"
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
          className={`flex h-16 items-center justify-between rounded-[100px] px-4 transition-all duration-300 sm:h-20 sm:px-6 ${
            isScrolled ? "" : "bg-[linear-gradient(180deg,#F0F9FF_0%,#F4F7FF_50%,#EEF0FF_100%)]"
          }`}
        >
          <Link href="/" className="flex shrink-0 items-center">
            <img src={Images.common.logo} alt="ListSoftware Logo" className="h-auto w-[60px] sm:w-[75px]" />
          </Link>

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-6 xl:gap-8">
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

          <div className="flex items-center gap-2 sm:gap-3">
            <Button href="/contact" variant="primary" className="hidden sm:inline-flex">
              Request a Demo
            </Button>

            <button
              type="button"
              className="rounded-full bg-[#111A2E] p-2.5 text-white lg:hidden"
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

      {/* Full-width mega menu — desktop/large tablets only (lg+) */}
      {activeMenu?.megaMenu && (
        <div
          className="absolute inset-x-0 top-full z-40 hidden lg:block"
          onMouseEnter={() => hoveredIndex !== null && openMenu(hoveredIndex)}
        >
          <div className="w-screen border-t border-[#DCEAFF] bg-white shadow-xl">
            <div className="mx-auto flex max-w-[1600px] flex-col gap-6 px-6 py-6 xl:flex-row xl:gap-10 xl:px-12 xl:py-10">
              {/* Left: Directions */}
              <div className="w-full shrink-0 xl:w-[280px] 2xl:w-[320px]">
                <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#66758A]">
                  Directions
                </h4>
                <div className="grid grid-cols-2 gap-1 xl:flex xl:flex-col 2xl:grid-cols-1">
                  {activeMenu.megaMenu.map((direction, directionIndex) => {
                    const isActive = activeDirectionIndex === directionIndex;

                    return (
                      <button
                        key={direction.label}
                        type="button"
                        onMouseEnter={() => setActiveDirectionIndex(directionIndex)}
                        className={`rounded-2xl p-2.5 text-left transition-colors xl:p-3 ${
                          isActive ? "bg-white shadow-md" : "hover:bg-gray-50"
                        }`}
                      >
                        <span className="block text-sm font-semibold text-gray-900">
                          {direction.label}
                        </span>
                        <span className="hidden text-xs text-gray-500 xl:block">
                          {direction.description}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right: active Direction's panel */}
              {activeDirection && (
                <div className="flex-1 rounded-2xl bg-[#F7FAFF] p-5 xl:p-8">
                  <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#66758A] xl:mb-6">
                    {activeDirection.panel.panelTitle}
                  </h4>

                  <div className="grid grid-cols-2 gap-x-6 gap-y-5 xl:grid-cols-2 xl:gap-x-8 2xl:grid-cols-4">
                    {activeDirection.panel.columns.map((column) => (
                      <div key={column.title}>
                        <h5 className="mb-2.5 text-xs font-semibold text-gray-400 xl:mb-3">
                          {column.title}
                        </h5>
                        <div className="flex flex-col gap-3 xl:gap-4">
                          {column.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="flex items-center gap-2 text-sm font-medium text-gray-800 transition-colors hover:text-[#3277D9]"
                            >
                              <span className="truncate">{item.label}</span>
                              {item.badge && (
                                <span className="shrink-0 rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-semibold text-[#3277D9]">
                                  {item.badge}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {activeDirection.panel.note && (
                    <div className="mt-6 flex flex-col gap-3 border-t border-[#E6EBF2] pt-5 sm:flex-row sm:items-center sm:justify-between xl:mt-8 xl:pt-6">
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          {activeDirection.panel.note.title}
                        </p>
                        <p className="mt-1 text-xs text-gray-500">
                          {activeDirection.panel.note.description}
                        </p>
                      </div>
                      <Link
                        href={activeDirection.panel.note.ctaHref}
                        className="inline-flex w-fit shrink-0 rounded-full border border-[#DCE2EA] px-5 py-2 text-xs font-semibold text-gray-900 transition-colors hover:border-[#3277D9] hover:text-[#3277D9]"
                      >
                        {activeDirection.panel.note.ctaLabel}
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile/Tablet Menu */}
      {mobileOpen && (
        <div className="mx-4 mt-3 max-h-[75vh] overflow-y-auto rounded-3xl border border-[#DCEAFF] bg-white px-4 py-4 shadow-md sm:mx-auto sm:max-w-2xl sm:px-6 lg:hidden">
          <nav>
            <ul className="flex flex-col gap-1">
              {navigation.map((item, index) => {
                const isExpanded = mobileExpandedIndex === index;

                return (
                  <li key={item.href} className="border-b border-gray-100 last:border-none">
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        onClick={() => {
                          setActiveIndex(index);
                          if (!item.megaMenu) setMobileOpen(false);
                        }}
                        className={`block py-3 text-sm font-medium transition-colors ${
                          activeIndex === index ? "text-black" : "text-gray-700 hover:text-black"
                        }`}
                      >
                        {item.label}
                      </Link>

                      {item.megaMenu && (
                        <button
                          type="button"
                          aria-label={`Toggle ${item.label} submenu`}
                          onClick={() => {
                            const nextExpanded = isExpanded ? null : index;
                            setMobileExpandedIndex(nextExpanded);
                            setMobileActiveDirectionIndex(nextExpanded !== null ? 0 : null);
                          }}
                          className="p-2 text-gray-500"
                        >
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                          />
                        </button>
                      )}
                    </div>

                    {item.megaMenu && isExpanded && (
                      <div className="pb-3 pl-2">
                        {item.megaMenu.map((direction, directionIndex) => {
                          const isDirectionOpen = mobileActiveDirectionIndex === directionIndex;

                          return (
                            <div key={direction.label} className="mb-2 rounded-2xl bg-gray-50">
                              <button
                                type="button"
                                onClick={() =>
                                  setMobileActiveDirectionIndex(isDirectionOpen ? null : directionIndex)
                                }
                                className="flex w-full items-center justify-between gap-3 p-3 text-left"
                              >
                                <span className="text-sm font-semibold text-gray-900">
                                  {direction.label}
                                </span>
                                <ChevronDown
                                  className={`h-4 w-4 shrink-0 text-gray-400 transition-transform ${
                                    isDirectionOpen ? "rotate-180" : ""
                                  }`}
                                />
                              </button>

                              {isDirectionOpen && (
                                <div className="space-y-4 px-3 pb-4">
                                  {direction.panel.columns.map((column) => (
                                    <div key={column.title}>
                                      <h5 className="mb-2 text-xs font-semibold text-gray-400">
                                        {column.title}
                                      </h5>
                                      <div className="flex flex-col gap-2">
                                        {column.items.map((subItem) => (
                                          <Link
                                            key={subItem.href}
                                            href={subItem.href}
                                            onClick={() => setMobileOpen(false)}
                                            className="text-sm text-gray-700 hover:text-[#3277D9]"
                                          >
                                            {subItem.label}
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-4 sm:hidden">
              <Button href="/contact" variant="primary" className="w-full justify-center">
                Request a Demo
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;