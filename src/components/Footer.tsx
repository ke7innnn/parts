"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms & Conditions" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-border/30 overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center gap-2 mb-5 group">
              <svg
                className="h-9 w-9 text-primary transition-transform group-hover:scale-110"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="40"
                  height="40"
                  rx="8"
                  fill="currentColor"
                />
                <path
                  d="M8 24C8 24 11 16 14 14C17 12 23 12 26 14C29 16 32 24 32 24"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="14" cy="26" r="3" fill="white" />
                <circle cx="26" cy="26" r="3" fill="white" />
                <path
                  d="M14 20H26"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M12 22H28"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-xl font-bold text-primary">
                Auto<span className="text-accent">Parts</span>
              </span>
            </Link>
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
              Connecting auto parts suppliers with ready-to-buy customers across
              the country. High-quality, exclusive leads delivered daily.
            </p>
          </motion.div>

          {/* Links */}
          {footerLinks.map((group, groupIdx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (groupIdx + 1) }}
            >
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary-light mb-5">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white hover:pl-1 transition-all duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Info & Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-gray-500">
            <a
              href="tel:+1234567890"
              className="hover:text-primary-light transition-colors flex items-center gap-2 group"
            >
              <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-surface border border-border/50 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              +1 (234) 567-890
            </a>
            <a
              href="mailto:info@autopartsleads.com"
              className="hover:text-primary-light transition-colors flex items-center gap-2 group"
            >
              <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-surface border border-border/50 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              info@autopartsleads.com
            </a>
          </div>
          <p className="text-xs text-gray-600 font-light">
            &copy; {new Date().getFullYear()} AutoParts Leads. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
