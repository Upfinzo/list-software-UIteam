"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { ChevronDoubleRightIcon } from "@heroicons/react/16/solid";

import { navigation } from "@/data/navigation";
import Button from "@/components/common/Button";
import { Images } from "@/assets/images/images";

// Add a route here when it should become navigable.
const enabledNavigationLinks = new Set(["/"]);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [displayedIndex, setDisplayedIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileExpandedIndex, setMobileExpandedIndex] = useState<number | null>(null);
  const [hoveredProductIndex, setHoveredProductIndex] = useState<number | null>(0);

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
  const displayedMenu = displayedIndex !== null ? navigation[displayedIndex] : null;

  useEffect(() => {
    if (hoveredIndex !== null) {
      setDisplayedIndex(hoveredIndex);
      return;
    }

    const closeAnimation = window.setTimeout(() => setDisplayedIndex(null), 220);
    return () => window.clearTimeout(closeAnimation);
  }, [hoveredIndex]);

  useEffect(() => {
    if (displayedMenu?.megaMenu?.items.length && hoveredProductIndex === null) {
      setHoveredProductIndex(0);
    }
  }, [displayedMenu, hoveredProductIndex]);

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
            <img src={Images.common.logo} alt="ListSoftware Logo" className="h-auto w-[100px] sm:w-[100px]" />
          </Link>

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-6 xl:gap-8">
              {navigation.map((item, index) => {
                const isActive = activeIndex === index;
                return (
                  <li key={item.href} onMouseEnter={() => openMenu(index)}>
                    <Link
                      href={item.href}
                      onClick={(event) => {
                        if (!enabledNavigationLinks.has(item.href)) {
                          event.preventDefault();
                          return;
                        }
                        setActiveIndex(index);
                      }}
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
            {/*
              The wrapper carries the breakpoint, not the Button: Button's own
              base class sets inline-flex, which outranks a `hidden` passed
              through className and would keep this visible on mobile — where
              the copy inside the hamburger menu already covers it.
            */}
            <div className="hidden lg:block">
              <Button href="/contact" variant="primary">
                Request a Demo<ArrowRight height={15} />
              </Button>
            </div>

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
      {displayedMenu?.megaMenu && (
        <div
          className="absolute inset-x-0 top-full z-40 hidden lg:block"
          onMouseEnter={() => displayedIndex !== null && openMenu(displayedIndex)}
        >
          <div
            className={`w-screen border-t border-[#DCEAFF] bg-white shadow-xl bg-[linear-gradient(180deg,#F0F9FF_0%,#F4F7FF_50%,#EEF0FF_100%)] ${
              hoveredIndex !== null
                ? "animate-[dropdown-in_220ms_ease-out]"
                : "animate-[dropdown-out_220ms_ease-in]"
            }`}
          >
            <div className="mx-auto flex max-w-[1600px] flex-col gap-12 px-6 py-6 xl:flex-row xl:gap-4 xl:px-6 xl:py-6">
              {displayedMenu.megaMenu.image && (
                <div className="order-2 w-full shrink-0 xl:order-2 xl:w-[300px] 2xl:w-[340px]">
                  <div className="flex h-full flex-col overflow-hidden rounded-[28px] border border-white/50 bg-white/40 shadow-[0_18px_45px_rgba(38,71,120,0.12)] backdrop-blur-sm">
                    <div className="overflow-hidden rounded-t-[28px]">
                      <img
                        src={
                          hoveredProductIndex !== null && displayedMenu.megaMenu.items[hoveredProductIndex]?.image?.src
                            ? displayedMenu.megaMenu.items[hoveredProductIndex].image.src
                            : displayedMenu.megaMenu.image.src
                        }
                        alt={
                          hoveredProductIndex !== null && displayedMenu.megaMenu.items[hoveredProductIndex]?.image?.alt
                            ? displayedMenu.megaMenu.items[hoveredProductIndex].image.alt
                            : displayedMenu.megaMenu.image.alt
                        }
                        className="h-[200px] w-full object-cover"
                      />
                    </div>

                    <div className="p-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#5D7A9F]">
                        {hoveredProductIndex !== null && displayedMenu.megaMenu.items[hoveredProductIndex]
                          ? "Selected solution"
                          : "Featured solution"}
                      </p>

                      <h3 className="mt-2 text-lg font-semibold text-gray-900">
                        {hoveredProductIndex !== null && displayedMenu.megaMenu.items[hoveredProductIndex]
                          ? displayedMenu.megaMenu.items[hoveredProductIndex].label
                          : displayedMenu.megaMenu.image.title || "Products"}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-gray-600">
                        {hoveredProductIndex !== null && displayedMenu.megaMenu.items[hoveredProductIndex]?.desc
                          ? displayedMenu.megaMenu.items[hoveredProductIndex].desc
                          : displayedMenu.megaMenu.image.description || "Explore integrated digital banking products built for modern institutions."}
                      </p>

                      {displayedMenu.megaMenu.image.ctaLabel && displayedMenu.megaMenu.image.ctaHref && (
                        <Link
                          href={displayedMenu.megaMenu.image.ctaHref}
                          className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-[#DCE2EA] bg-[#F5F9FF] px-4 py-2 text-xs font-semibold text-gray-900 transition-colors hover:border-[#3277D9] hover:bg-[#EEF6FF] hover:text-[#3277D9]"
                        >
                          {displayedMenu.megaMenu.image.ctaLabel}
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              )}
              <div className="order-1 relative flex items-center justify-center rounded-[28px] border border-[#f5f5f5] bg-white/80 p-6 shadow-[0_12px_28px_rgba(58,90,133,0.06)] xl:order-1 xl:flex-1 xl:p-8">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-10 left-1/3 hidden w-px bg-[#56B0E61F] xl:block"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-10 left-2/3 hidden w-px bg-[#56B0E61F] xl:block"
                />
                <div className="grid grid-cols-2 gap-x-12 gap-y-4 xl:grid-cols-3 xl:gap-x-16 2xl:grid-cols-3">
                  {displayedMenu.megaMenu.items.map((item, index) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onMouseEnter={() => setHoveredProductIndex(index)}
                      onMouseLeave={() => setHoveredProductIndex(null)}
                      onClick={(event) => {
                        if (!enabledNavigationLinks.has(item.href)) {
                          event.preventDefault();
                        }
                      }}
                      className={`group flex w-full items-start gap-2 rounded-lg p-1.5 text-gray-800 transition-colors hover:bg-[#F2F8FF] hover:text-[#3277D9] ${
                        hoveredProductIndex === index ? "bg-[#F2F8FF]" : ""
                      }`}
                    >
                      <ChevronDoubleRightIcon
                        aria-hidden="true"
                        className="mt-1.5 h-3.5 w-3.5 shrink-0 text-black transition-colors group-hover:text-[#3277D9]"
                      />
                      <span className="flex min-w-0 flex-col">
                        <span className="text-sm font-semibold leading-6 text-gray-900 group-hover:text-[#3277D9]">
                          {item.label}
                        </span>
                        {item.desc && (
                          <span className="text-[11px] leading-[1.5] text-gray-500">
                            {item.desc}
                          </span>
                        )}
                        {item.badge && (
                          <span className="mt-1 shrink-0 self-start rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-semibold text-[#3277D9]">
                            {item.badge}
                          </span>
                        )}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

           
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
                const mobilePreviewImage = item.megaMenu?.items[0]?.image ?? item.megaMenu?.image;
                const mobilePreviewDescription =
                  item.megaMenu?.items[0]?.desc ?? item.megaMenu?.image?.description;

                return (
                  <li key={item.href} className="border-b border-gray-100 last:border-none">
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        onClick={(event) => {
                          if (!enabledNavigationLinks.has(item.href)) {
                            event.preventDefault();
                          }
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
                          onClick={() => setMobileExpandedIndex(isExpanded ? null : index)}
                          className="p-2 text-gray-500"
                        >
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                          />
                        </button>
                      )}
                    </div>

                    {item.megaMenu && isExpanded && (
                      <div className="pb-4 pl-2">
                        <div className="flex flex-col gap-5">
                          {item.megaMenu.items.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              onClick={(event) => {
                                if (!enabledNavigationLinks.has(subItem.href)) {
                                  event.preventDefault();
                                }
                                setMobileOpen(false);
                              }}
                              className="flex flex-col gap-0.5 text-gray-700 hover:text-[#3277D9]"
                            >
                              <span className="text-sm font-medium text-gray-900">{subItem.label}</span>
                              {subItem.desc && (
                                <span className="text-[11px] leading-5 text-gray-500">{subItem.desc}</span>
                              )}
                            </Link>
                          ))}
                        </div>

                        {mobilePreviewImage && (
                          <div className="mt-4 overflow-hidden rounded-2xl border border-[#DCEAFF] bg-[#F7FAFF] shadow-sm">
                            <img
                              src={mobilePreviewImage.src}
                              alt={mobilePreviewImage.alt || item.label}
                              className="block h-28 w-full object-cover"
                            />

                            <div className="p-3">
                              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#5D7A9F]">
                                Featured
                              </p>
                              <p className="mt-1 text-sm font-semibold text-gray-900">
                                {item.megaMenu.items[0]?.label || item.megaMenu.image?.title || item.label}
                              </p>
                              {mobilePreviewDescription && (
                                <p className="mt-1 text-[11px] leading-5 text-gray-600">
                                  {mobilePreviewDescription}
                                </p>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* The menu itself is lg:hidden, so this needs no breakpoint of
                its own — it is the mobile and tablet copy of the CTA. */}
            <div className="mt-4">
              <Button
                href="/contact"
                variant="primary"
                className="w-full justify-center"
                onClick={() => setMobileOpen(false)}
              >
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