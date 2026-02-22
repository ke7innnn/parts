import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AutoParts Store | High-Quality Auto Parts Delivered Daily",
  description:
    "We provide drivers and mechanics with premium auto parts across the country. Get verified, high-quality car parts delivered to your door.",
  keywords: [
    "auto parts store",
    "car parts suppliers",
    "automotive parts",
    "buy auto parts",
    "car parts for sale",
  ],
  openGraph: {
    title: "AutoParts Store | High-Quality Auto Parts Delivered Daily",
    description:
      "We provide drivers and mechanics with premium auto parts across the country.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-background text-text`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
