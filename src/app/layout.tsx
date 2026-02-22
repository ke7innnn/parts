import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import CursorGlow from "@/components/CursorGlow";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AutoParts Leads | High-Quality Auto Parts Leads Delivered Daily",
  description:
    "We connect auto parts suppliers with ready-to-buy customers across the country. Get verified, high-intent leads delivered to your inbox daily.",
  keywords: [
    "auto parts leads",
    "car parts suppliers",
    "automotive leads",
    "auto parts buyers",
    "lead generation",
  ],
  openGraph: {
    title: "AutoParts Leads | High-Quality Auto Parts Leads Delivered Daily",
    description:
      "We connect auto parts suppliers with ready-to-buy customers across the country.",
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
      <body className={`${inter.variable} font-sans antialiased`}>
        <SmoothScroll>
          <ScrollProgress />
          <CursorGlow />
          <Header />
          <main>{children}</main>
          <Footer />
          <BackToTop />
        </SmoothScroll>
      </body>
    </html>
  );
}
