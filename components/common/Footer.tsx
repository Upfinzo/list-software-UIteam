import { navigation } from "@/data/navigation";
import Link from "next/link";


export default function Footer() {
  return (
    <footer className="border-t bg-gray-950 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <Link
            href="/"
            className="text-xl font-bold"
          >
            ListSoftware
          </Link>

          <p className="mt-2 text-sm text-gray-400">
            Building modern software solutions.
          </p>
        </div>

        <nav>
          <ul className="flex gap-6">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-gray-400 hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ListSoftware. All rights reserved.
      </div>
    </footer>
  );
}