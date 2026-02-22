"use client";

import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ContactPage() {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 800], [0, 200]);
  const opacityHeader = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <>
      {/* Page Header (Parallax) */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-black pt-20">
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: yBg }}
        >
          <Image
            src="/contact-bg.png"
            alt="Neon Automotive Sensor"
            fill
            className="object-cover opacity-60 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background z-10" />
        </motion.div>

        <motion.div
          style={{ opacity: opacityHeader }}
          className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 border border-primary/30 px-4 py-1.5 text-sm font-medium text-primary-light mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.2)]">
              24/7 Premium Support
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight drop-shadow-xl">
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-blue-400">Us</span>
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto font-light">
              We&apos;d love to hear from you. Reach out to our dedicated VIP team and let us help accelerate your
              business growth.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Content */}
      <section className="py-24 sm:py-32 bg-background relative border-t border-border/30">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Get In <span className="text-primary-light">Touch</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-12 font-light">
                Have questions about our exclusive auto parts lead generation service?
                Want to learn more about how we can scale your operations? Contact
                our specialists using any of the direct methods below.
              </p>

              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-start gap-6 group">
                  <div className="flex-shrink-0 h-16 w-16 rounded-2xl bg-surface/50 border border-border/50 flex items-center justify-center backdrop-blur-md group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300 shadow-lg shadow-black/20">
                    <svg className="h-7 w-7 text-primary-light group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">VIP Phone Line</h3>
                    <a href="tel:+1234567890" className="text-2xl font-light text-gray-300 hover:text-primary-light transition-colors block mb-2">
                      +1 (234) 567-890
                    </a>
                    <p className="text-sm text-gray-500">
                      Mon - Fri, 9am - 6pm EST
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-6 group">
                  <div className="flex-shrink-0 h-16 w-16 rounded-2xl bg-surface/50 border border-border/50 flex items-center justify-center backdrop-blur-md group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300 shadow-lg shadow-black/20">
                    <svg className="h-7 w-7 text-primary-light group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Priority Email</h3>
                    <a href="mailto:info@autopartsleads.com" className="text-xl font-light text-gray-300 hover:text-primary-light transition-colors block mb-2">
                      info@autopartsleads.com
                    </a>
                    <p className="text-sm text-gray-500">
                      Guaranteed response within 2 hours
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-6 group">
                  <div className="flex-shrink-0 h-16 w-16 rounded-2xl bg-surface/50 border border-border/50 flex items-center justify-center backdrop-blur-md group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300 shadow-lg shadow-black/20">
                    <svg className="h-7 w-7 text-primary-light group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Headquarters</h3>
                    <p className="text-lg font-light text-gray-300 leading-relaxed mb-2">
                      123 Auto Drive, Suite 100
                      <br />
                      Detroit, MI 48201
                    </p>
                    <p className="text-sm text-gray-500">
                      By appointment only
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-3xl border border-border/50 bg-surface/80 backdrop-blur-xl p-8 sm:p-12 shadow-[0_0_40px_rgba(0,0,0,0.5)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Send a Direct Message
                </h3>
                <p className="text-gray-400 mb-8 font-light">
                  Skip the line. Fill out the form below to connect instantly.
                </p>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
