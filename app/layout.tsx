import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import BackToTop from "@/components/common/BackToTop";
import Preloader from "@/components/common/Preloader";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
});

export const metadata: Metadata = {
  title: {
    default: "ListSoftware",
    template: "%s | ListSoftware",
  },
  description:
    "ListSoftware provides modern software solutions for growing businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html lang="en" className={interTight.variable} suppressHydrationWarning>
  <body suppressHydrationWarning>
    <Preloader />
    <Header />

    <main>{children}</main>

    <Footer />
    <BackToTop />
  </body>
</html>
  );
}