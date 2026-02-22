"use client";

import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticWrapper from "@/components/MagneticWrapper";

export default function Home() {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 300]);
  const yCar = useTransform(scrollY, [0, 1000], [0, -150]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <>
      {/* ========== HERO SECTION (PARALLAX + FRAMER MOTION) ========== */}
      <section className="relative overflow-hidden min-h-screen flex items-center bg-black">
        {/* Parallax Background */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: yBg }}
        >
          <Image
            src="/texture-bg.png"
            alt="Dark Carbon Fiber Texture"
            fill
            className="object-cover opacity-60 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background z-10" />
        </motion.div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <motion.div
              style={{ opacity: opacityText }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-3 rounded-full bg-primary/20 border border-primary/30 px-5 py-2 text-sm font-medium text-primary-light mb-8 backdrop-blur-sm">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-light opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                Premium Auto Leads
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                Accelerate Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-blue-300">Parts Business</span>
              </h1>
              <p className="mt-6 text-lg text-gray-300 max-w-xl leading-relaxed">
                We connect exclusive auto parts suppliers with high-intent, verified buyers across the globe. Dominate the market with real-time leads.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-5">
                <MagneticWrapper intensity={0.2}>
                  <Link
                    href="#contact-form"
                    className="flex w-full sm:w-auto items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-bold text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:bg-primary-light transition-all duration-300"
                  >
                    Get Started
                    <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </MagneticWrapper>
                <MagneticWrapper intensity={0.2}>
                  <a
                    href="tel:+1234567890"
                    className="flex w-full sm:w-auto items-center justify-center rounded-lg border border-accent/70 bg-accent/10 backdrop-blur-sm px-8 py-4 text-base font-bold text-accent-hover hover:bg-accent hover:text-white transition-all duration-300"
                  >
                    <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    Call Now
                  </a>
                </MagneticWrapper>
              </div>
            </motion.div>

            {/* Right illustration/Image with Parallax */}
            <motion.div
              style={{ y: yCar }}
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="hidden lg:flex items-center justify-center"
            >
              <div className="relative w-full aspect-square max-w-[600px]">
                <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full mix-blend-screen" />
                <Image
                  src="/hero-car.png"
                  alt="Premium Luxury Engine Parts"
                  fill
                  className="object-contain drop-shadow-[0_0_30px_rgba(0,0,0,0.8)]"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        >
          <span className="text-xs font-semibold text-gray-400 tracking-widest uppercase">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-5 h-8 border-2 border-gray-400 rounded-full flex justify-center pt-1"
          >
            <div className="w-1 h-2 bg-gray-400 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* ========== WHY CHOOSE US SECTION ========== */}
      <section className="py-24 sm:py-32 bg-background relative border-t border-border/30">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Why Choose <span className="text-primary-light">Us</span>
            </h2>
            <p className="mt-6 text-gray-400 text-lg">
              We deliver results that drive your business forward with premium auto parts leads and unmatched exclusivity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "High-Intent Leads",
                description: "Every lead we provide is from customers actively searching for auto parts, ensuring maximum conversion rates.",
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                ),
              },
              {
                title: "Exclusive Distribution",
                description: "Leads are never shared with multiple suppliers. You get exclusive access to every potential customer.",
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                ),
              },
              {
                title: "Fast Delivery",
                description: "Receive fresh leads delivered directly to you within hours, not days. Speed is our priority.",
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: "Verified Customers",
                description: "Every lead is verified and screened to ensure you are connecting with genuine, ready-to-buy customers.",
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                ),
              },
            ].map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative rounded-2xl bg-surface border border-border/40 p-8 shadow-sm hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:border-primary/50 hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg className="h-24 w-24 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0l3.7 8.3L24 9.5l-6 5.8 1.4 8.3L12 19.5 4.6 23.6 6 15.3 0 9.5l8.3-1.2z" />
                  </svg>
                </div>
                <div className="relative z-10 mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary-light group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {card.icon}
                </div>
                <h3 className="relative z-10 text-xl font-bold text-white mb-3">
                  {card.title}
                </h3>
                <p className="relative z-10 text-sm text-gray-400 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== HOW IT WORKS SECTION ========== */}
      <section className="py-24 sm:py-32 bg-black relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
              How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-blue-400">Works</span>
            </h2>
            <p className="mt-6 text-gray-400 text-lg">
              Getting started is simple. Three easy steps to start receiving high-quality leads directly to your inbox.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-background via-primary/50 to-background -translate-y-1/2 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
              {[
                {
                  step: "01",
                  title: "Submit Requirements",
                  description: "Tell us about your target market, the types of leads you need, and your specific part specialties.",
                  icon: (
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  ),
                },
                {
                  step: "02",
                  title: "We Match Buyers",
                  description: "Our advanced algorithm matches your profile with verified buyers actively looking for your auto parts.",
                  icon: (
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                    </svg>
                  ),
                },
                {
                  step: "03",
                  title: "Start Closing Deals",
                  description: "Get exclusive, high-intent leads delivered via email or SMS. Contact them and start closing deals.",
                  icon: (
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                  className="relative group rounded-2xl bg-surface/80 backdrop-blur-sm border border-border/50 p-8 text-center shadow-lg hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] hover:border-primary/50 transition-all duration-300"
                >
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 inline-flex items-center justify-center rounded-full bg-black border border-primary/50 px-5 py-2 text-sm font-black tracking-widest text-primary-light shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    STEP {item.step}
                  </div>
                  <div className="mt-8 mb-6 mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-primary/20 to-transparent border border-primary/30 text-primary-light group-hover:text-white group-hover:border-primary group-hover:from-primary/40 transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== CONTACT FORM SECTION ========== */}
      <section id="contact-form" className="py-24 sm:py-32 bg-background relative border-t border-border/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                Ready to <span className="text-primary-light">Get Started?</span>
              </h2>
              <p className="mt-6 text-gray-400 text-lg leading-relaxed">
                Tell us what you need and our team will connect you with
                high-quality auto parts leads tailored to your exact business specifications.
              </p>

              <div className="mt-10 space-y-6">
                {[
                  "No setup fees or hidden costs",
                  "Premium leads delivered within 24 hours",
                  "100% verified customer contacts",
                  "Dedicated 24/7 account manager",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <svg
                        className="h-4 w-4 text-primary-light group-hover:text-white transition-colors"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="3"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-base text-gray-300 group-hover:text-white transition-colors">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 p-8 rounded-2xl bg-surface/50 backdrop-blur-md border border-border/50 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                <p className="text-base text-gray-400">
                  <span className="font-bold text-white block mb-2 text-lg">Need immediate assistance?</span>
                  Call us directly at{" "}
                  <a href="tel:+1234567890" className="text-primary-light font-bold hover:text-white hover:underline transition-colors block mt-1 text-xl">
                    +1 (234) 567-890
                  </a>
                  <span className="block mt-4 mb-1">or email our priority support at</span>
                  <a href="mailto:info@autopartsleads.com" className="text-primary-light font-bold hover:text-white hover:underline transition-colors block text-lg">
                    info@autopartsleads.com
                  </a>
                </p>
              </div>
            </motion.div>

            {/* Right form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl border border-border/50 bg-surface/80 backdrop-blur-md p-8 sm:p-10 shadow-[0_0_40px_rgba(0,0,0,0.8)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
              <h3 className="text-2xl font-bold text-white mb-2 relative z-10">
                Submit Your Request
              </h3>
              <p className="text-gray-400 mb-8 relative z-10">We'll get back to you within 2 hours.</p>
              <div className="relative z-10">
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
