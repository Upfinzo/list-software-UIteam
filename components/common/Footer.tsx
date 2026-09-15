import Link from "next/link";
import { Images } from "@/assets/images/images";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden border-t border-gray-800 bg-[#07142F] bg-cover bg-center bg-no-repeat text-white before:absolute before:inset-0 before:z-0 before:bg-[#07142F]/87 before:content-['']"
      style={{
        backgroundImage: `url(${Images.common.footerbg})`,
      }}
    >
      {/* Main Footer */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-2 md:gap-10 lg:grid-cols-[30%_17.5%_17.5%_17.5%_17.5%] lg:gap-0">

        {/* Column 1 - Logo + Content */}
        <div>
          <Link
            href="/"
            className="text-xl font-bold text-white"
          >
              <img
              src={Images.common.footerlogo}
              alt="ListSoftware Logo"
              className="h-auto w-[104px]"
            />
          </Link>

          <p className="mt-4 max-w-xs text-sm leading-6 text-white/80">
            Building modern software solutions.
          </p>
        </div>

        {/* Column 2 - Platform */}
        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[2px] text-[#54B9FF]">
            Platform
          </h3>

          <ul className="space-y-3">
            <li>
              <Link href="/" className="text-sm text-white/70 hover:text-white">
                Core Banking
              </Link>
            </li>

            <li>
              <Link href="/" className="text-sm text-white/70 hover:text-white">
                Capabilities
              </Link>
            </li>

            <li>
              <Link href="/technlogy" className="text-sm text-white/70 hover:text-white">
                Technology
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 - Solutions */}
        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[2px] text-[#54B9FF]">
            Solutions
          </h3>

          <ul className="space-y-3">
            <li>
              <Link href="/" className="text-sm text-white/70 hover:text-white">
                Digital Banking
              </Link>
            </li>

            <li>
              <Link href="/" className="text-sm text-white/70 hover:text-white">
                Payments
              </Link>
            </li>

            <li>
              <Link href="/" className="text-sm text-white/70 hover:text-white">
                Lending
              </Link>
            </li>

            <li>
              <Link href="/" className="text-sm text-white/70 hover:text-white">
                Compliance & Risk
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4 - Company */}
        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[2px] text-[#54B9FF]">
            Company
          </h3>

          <ul className="space-y-3">
            <li>
              <Link href="/" className="text-sm text-white/70 hover:text-white">
                About
              </Link>
            </li>

            <li>
              <Link href="/" className="text-sm text-white/70 hover:text-white">
                Contact
              </Link>
            </li>

            <li>
              <Link href="/" className="text-sm text-white/70 hover:text-white">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 5 - Resources */}
        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[2px] text-[#54B9FF]">
            Resources
          </h3>

          <ul className="space-y-3">
            <li>
              <Link href="/" className="text-sm text-white/70 hover:text-white">
                Insights
              </Link>
            </li>

            <li>
              <Link href="/" className="text-sm text-white/70 hover:text-white">
                Documentation
              </Link>
            </li>

            <li>
              <Link href="/" className="text-sm text-white/70 hover:text-white">
                FAQs
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative z-10 mx-auto max-w-7xl border-t border-white/15 px-6 py-6">
        <div className="flex flex-col gap-4 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} ListSoftware. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href="/" className="hover:text-white">
              Privacy Policy
            </Link>

            <Link href="/" className="hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="relative z-10 h-[3px] bg-[#21B8FF]" />
    </footer>
  );
}