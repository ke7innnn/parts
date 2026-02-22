"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-black border-b border-border/30">
        <div className="absolute inset-0 z-0">
          <Image
            src="/legal-bg.png"
            alt="Cyber Security Pattern"
            fill
            className="object-cover opacity-30 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 border border-primary/30 px-4 py-1.5 text-sm font-medium text-primary-light mb-6 backdrop-blur-md">
              Service Agreement
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight drop-shadow-xl">
              Terms & <span className="text-primary-light">Conditions</span>
            </h1>
            <p className="mt-6 text-xl text-gray-400 font-light">
              Last updated: February 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-background relative">
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12 bg-surface/40 backdrop-blur-xl border border-border/40 p-8 sm:p-12 lg:p-16 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/20 text-primary-light text-lg">1</span>
                Service Description
              </h2>
              <div className="text-gray-300 font-light leading-relaxed space-y-4">
                <p>
                  AutoParts Leads operates an elite lead generation network that
                  connects premium auto parts suppliers with pre-vetted, high-intent buyers. Our
                  service includes the sophisticated sourcing, verification, and real-time delivery of
                  exclusive leads parameters assigned by our partners.
                </p>
                <p>
                  By accessing our secure platform, you agree to these corporate terms and conditions
                  in full. Disagreement with any clause necessitates immediate discontinuation of our services.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/20 text-primary-light text-lg">2</span>
                Use of Services
              </h2>
              <div className="text-gray-300 font-light leading-relaxed space-y-4">
                <p>When utilizing our proprietary network, you legally agree to:</p>
                <ul className="list-disc list-inside space-y-3 ml-4 text-gray-400">
                  <li>
                    Submit absolute accuracy when establishing your verified corporate account.
                  </li>
                  <li>
                    Exploit provided exclusive leads solely for your direct, legitimate business
                    operations.
                  </li>
                  <li>
                    <strong className="text-white">Never</strong> redistribute, resell, arbitrate, or expose our leads to
                    third parties without expressed executive authorization.
                  </li>
                  <li>
                    Operate in absolute compliance with municipal, state, and federal trade laws.
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/20 text-primary-light text-lg">3</span>
                Payment Terms
              </h2>
              <div className="text-gray-300 font-light leading-relaxed space-y-4">
                <p>
                  Financial terms are strictly codified during your VIP onboarding process.
                  All invoices are payable in full as stipulated in your master service agreement.
                  Failure to maintain account standings will trigger immediate service suspension.
                </p>
                <p className="italic text-gray-500">
                  * Pricing matrices may be dynamically adjusted with a 30-day corporate notice.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/20 text-primary-light text-lg">4</span>
                Limitation of Liability
              </h2>
              <div className="text-gray-300 font-light leading-relaxed space-y-4">
                <p>
                  AutoParts Leads delivers intelligence on an &quot;as-is&quot; basis via advanced algorithmic sourcing.
                  While we obsess over demographic accuracy, no system can mathematically guarantee that 100% of leads
                  convert into finalized revenue.
                </p>
                <p>
                  To the absolute boundary of jurisprudence, AutoParts Leads shields itself from any cascading,
                  indirect, incidental, or punishing damages associated with the operational use of our platform.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/20 text-primary-light text-lg">5</span>
                Intellectual Property
              </h2>
              <p className="text-gray-300 font-light leading-relaxed">
                All algorithms, brand marks, and digital assets executing on this
                infrastructure remain the exclusive intellectual territory of AutoParts Leads.
                Any unauthorized scraping, cloning, or synthesis of our digital property is strictly prohibited.
              </p>
            </div>

            <div className="pt-8 border-t border-border/50">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/20 text-primary-light text-lg">6</span>
                Corporate Contact
              </h2>
              <p className="text-gray-300 font-light leading-relaxed mb-6">
                Direct all contractual escalations to our legal department:
              </p>
              <div className="p-6 rounded-2xl bg-black/40 border border-border/50 shadow-inner">
                <p className="text-sm text-gray-300 mb-3">
                  <strong className="text-white font-semibold">Direct Email:</strong>{" "}
                  <a
                    href="mailto:legal@autopartsleads.com"
                    className="text-primary-light hover:text-white transition-colors"
                  >
                    legal@autopartsleads.com
                  </a>
                </p>
                <p className="text-sm text-gray-300 mb-3">
                  <strong className="text-white font-semibold">Legal Desk:</strong>{" "}
                  <a
                    href="tel:+1234567890"
                    className="text-primary-light hover:text-white transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </p>
                <p className="text-sm text-gray-300">
                  <strong className="text-white font-semibold">Filing Address:</strong> 123 Auto Drive, Suite 100, Detroit,
                  MI 48201
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
