"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import { Images } from "@/assets/images/images";
import { enabledNavigationLinks } from "@/data/navigation";

const preventDisabledNavigation = (
  event: MouseEvent<HTMLAnchorElement>
) => {
  const href = event.currentTarget.getAttribute("href");

  if (href && !enabledNavigationLinks.has(href)) {
    event.preventDefault();
  }
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const footerSections = [
  {
    title: "Platform",
    links: [
      { label: "Core Banking", href: "/" },
      { label: "Capabilities", href: "/" },
      { label: "Technology", href: "/technology" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Digital Banking", href: "/" },
      { label: "Payments", href: "/" },
      { label: "Lending", href: "/" },
      { label: "Compliance & Risk", href: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/" },
      { label: "Contact", href: "/" },
      { label: "Careers", href: "/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Insights", href: "/" },
      { label: "Documentation", href: "/" },
      { label: "FAQs", href: "/faq" },
    ],
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.469v6.766z",
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.514l-5.106-6.514L2.306 21.75H-1.2l7.73-8.835L-2.51 2.25h6.514l4.888 6.283L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/",
    path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
];

export default function Footer() {
  return (
    <footer className="animated-footer relative isolate overflow-hidden rounded-t-[32px] text-white">

      {/* =====================================
          ANIMATED BACKGROUND WITH FLOWING WAVES
      ===================================== */}

      <div className="footer-background" aria-hidden="true">

        {/* Base animated gradient background */}
        <div className="footer-base" />

        {/* Flowing wave ribbons - smooth animated layers */}
        <div className="footer-wave footer-wave-1" />
        <div className="footer-wave footer-wave-2" />
        <div className="footer-wave footer-wave-3" />
        <div className="footer-wave footer-wave-4" />
        <div className="footer-wave footer-wave-5" />

        {/* Soft glowing accents for depth */}
        <div className="footer-glow footer-glow-1" />
        <div className="footer-glow footer-glow-2" />

        {/* Dark overlay for contrast and readability */}
        <div className="footer-dark-overlay" />
      </div>

      {/* =====================================
          BACK TO TOP BUTTON
      ===================================== */}

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className="footer-top-button absolute right-6 top-6 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#003B83] shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl active:scale-95 md:right-8 md:top-8"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M12 19V5m-7 7 7-7 7 7"
          />
        </svg>
      </button>

      {/* =====================================
          MAIN FOOTER CONTENT
      ===================================== */}

      <div className="footer-inner relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pb-12 pt-24 sm:grid-cols-2 md:px-8 lg:grid-cols-[28%_18%_18%_18%_18%] lg:gap-6 lg:px-8 lg:pb-16">

        {/* BRAND COLUMN */}

        <div className="footer-column">

          <Link
            href="/"
            onClick={preventDisabledNavigation}
            className="inline-block transition-transform duration-300 hover:scale-105"
          >
            <img
              src={Images.common.footerlogo}
              alt="LIST Software Logo"
              className="h-auto w-[104px] object-contain"
            />
          </Link>

          <p className="mt-6 max-w-xs text-sm leading-7 text-white/85">
            Core banking and connected banking technology,
            anchored by the Custodian Core Banking System.
          </p>

          {/* SOCIAL ICONS */}

          <div className="mt-8 flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="footer-social group flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#54D6C7] hover:bg-[#54D6C7] hover:text-[#001F3F]"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>

          {/* ADDRESS */}

          <p className="mt-8 text-xs leading-6 text-white/70">
            Technology Center, 6th Floor, Elika Park,
            <br />
            Old Pune–Bangalore Highway, Shahupuri,
            <br />
            Kolhapur, Maharashtra – 416001
          </p>
        </div>

        {/* NAVIGATION COLUMNS */}

        {footerSections.map((section) => (
          <div key={section.title} className="footer-column">

            <h3 className="mb-6 text-xs font-semibold uppercase tracking-wider">
              {section.title}
            </h3>

            <ul className="space-y-4">
              {section.links.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={preventDisabledNavigation}
                    className="footer-nav-link relative inline-block text-sm text-white/80 transition-colors duration-300 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* =====================================
          DIVIDER
      ===================================== */}

      <div className="relative z-10 mx-auto max-w-7xl border-t border-white/15 px-6 md:px-8" />

      {/* =====================================
          BOTTOM FOOTER
      ===================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-8 md:px-8">

        <div className="flex flex-col gap-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} LIST Software. All rights reserved.
          </p>

          <div className="flex gap-6 sm:gap-8">

            <Link
              href="/"
              onClick={preventDisabledNavigation}
              className="transition-colors duration-300 hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/"
              onClick={preventDisabledNavigation}
              className="transition-colors duration-300 hover:text-white"
            >
              Terms
            </Link>

          </div>
        </div>
      </div>
    </footer>
  );
} 