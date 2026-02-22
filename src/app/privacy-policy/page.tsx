"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
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
              Legal Commitment
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight drop-shadow-xl">
              Privacy <span className="text-primary-light">Policy</span>
            </h1>
            <p className="mt-6 text-xl text-gray-400 font-light">
              Last updated: February 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-background relative">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

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
                Information We Collect
              </h2>
              <div className="text-gray-300 font-light leading-relaxed space-y-4">
                <p>
                  When you use our services, we may collect the following types
                  of exclusive business information:
                </p>
                <ul className="list-disc list-inside space-y-3 ml-4 text-gray-400">
                  <li>
                    <strong className="text-gray-200 font-semibold">Personal Information:</strong>{" "}
                    Name, email address, phone number, and verified business details
                    provided through our VIP contact forms.
                  </li>
                  <li>
                    <strong className="text-gray-200 font-semibold">Usage Data:</strong>{" "}
                    Information about how you interact with our platform,
                    including engagement metrics and lead acquisition history.
                  </li>
                  <li>
                    <strong className="text-gray-200 font-semibold">
                      Cookies & Tracking Data:
                    </strong>{" "}
                    We utilize advanced cookies and telemetry to enhance your B2B
                    browsing experience and guarantee maximum security.
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/20 text-primary-light text-lg">2</span>
                How We Use Your Information
              </h2>
              <div className="text-gray-300 font-light leading-relaxed space-y-4">
                <p>We leverage collected data for the following premium services:</p>
                <ul className="list-disc list-inside space-y-3 ml-4 text-gray-400">
                  <li>
                    To rapidly process and respond to your high-value requests for
                    exclusive auto parts leads.
                  </li>
                  <li>
                    To communicate with you via your dedicated account manager regarding
                    vital updates and scaling opportunities.
                  </li>
                  <li>
                    To iteratively improve our sophisticated lead matching algorithm.
                  </li>
                  <li>
                    To aggressively protect our platform against fraud and ensure compliance
                    with all legal obligations.
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/20 text-primary-light text-lg">3</span>
                Information Sharing
              </h2>
              <div className="text-gray-300 font-light leading-relaxed space-y-4">
                <p>
                  We <strong className="text-white">never</strong> sell, trade, or rent your personal business intelligence to
                  unauthorized third parties. We share information strictly under the
                  following secure conditions:
                </p>
                <ul className="list-disc list-inside space-y-3 ml-4 text-gray-400">
                  <li>
                    With elite service partners who assist us in operating our
                    infrastructure under strict NDAs.
                  </li>
                  <li>
                    When legally mandated by law enforcement or legal processes.
                  </li>
                  <li>
                    To safeguard the integrity, property, or safety of our exclusive AutoParts
                    Leads network.
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/20 text-primary-light text-lg">4</span>
                Data Security
              </h2>
              <p className="text-gray-300 font-light leading-relaxed">
                We implement military-grade encryption and industry-leading security protocols to shield your
                sensitive intelligence from unauthorized access, disclosure,
                alteration, or destruction. While no internet transmission is absolutely impenetrable, our
                defenses exceed industry standards to maximize your peace of mind.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/20 text-primary-light text-lg">5</span>
                Your Rights
              </h2>
              <div className="text-gray-300 font-light leading-relaxed space-y-4">
                <p>As a premium member, you have complete control over your data. You may:</p>
                <ul className="list-disc list-inside space-y-3 ml-4 text-gray-400">
                  <li>Demand access to the complete profile we hold on your business.</li>
                  <li>
                    Request immediate corrections or deletion of your corporate data.
                  </li>
                  <li>Opt out of strategic marketing communications at your discretion.</li>
                  <li>
                    Port your data locally using industry-standard formats.
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-border/50">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/20 text-primary-light text-lg">6</span>
                Contact Us
              </h2>
              <p className="text-gray-300 font-light leading-relaxed mb-6">
                Direct all privacy concerns or inquiries to our corporate compliance officer:
              </p>
              <div className="p-6 rounded-2xl bg-black/40 border border-border/50 shadow-inner">
                <p className="text-sm text-gray-300 mb-3">
                  <strong className="text-white font-semibold">Email:</strong>{" "}
                  <a
                    href="mailto:privacy@autopartsleads.com"
                    className="text-primary-light hover:text-white transition-colors"
                  >
                    privacy@autopartsleads.com
                  </a>
                </p>
                <p className="text-sm text-gray-300 mb-3">
                  <strong className="text-white font-semibold">Priority Phone:</strong>{" "}
                  <a
                    href="tel:+1234567890"
                    className="text-primary-light hover:text-white transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </p>
                <p className="text-sm text-gray-300">
                  <strong className="text-white font-semibold">HQ Address:</strong> 123 Auto Drive, Suite 100, Detroit,
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
