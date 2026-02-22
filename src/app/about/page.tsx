"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutPage() {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacityHeader = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <>
      {/* Page Header (Parallax) */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-black pt-20">
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: yBg }}
        >
          <Image
            src="/about-bg.png"
            alt="Luxury Auto Parts Garage"
            fill
            className="object-cover opacity-50 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/20 to-background z-10" />
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
              Discover Our Story
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight drop-shadow-xl">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-blue-400">Us</span>
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto font-light">
              Driving connections between premium auto parts suppliers and high-intent buyers nationwide.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-24 sm:py-32 bg-background relative border-t border-border/30">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Our <span className="text-primary-light">Mission</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mx-auto mt-6 rounded-full opacity-70" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg prose-invert max-w-none bg-surface/40 backdrop-blur-xl border border-border/30 p-8 sm:p-12 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <p className="text-gray-300 leading-relaxed text-xl font-light">
              At AutoParts Leads, our mission is simple: to bridge the gap
              between auto parts suppliers and the customers who need them most.
              We understand the challenges businesses face in finding reliable,
              high-intent buyers in the competitive auto parts industry.
            </p>
            <p className="text-gray-300 leading-relaxed text-xl font-light mt-8">
              Founded by industry veterans with decades of experience in
              automotive parts distribution and digital marketing, we built a
              platform that delivers real, verified leads — not just data, but
              genuine, high-value business opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-24 sm:py-32 bg-surface relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background/5 pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
              What Makes Us <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-blue-400">Different</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Industry Expertise",
                description: "Our team brings years of specialized experience in the automotive parts industry. We understand your market, your products, and your customers.",
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                ),
              },
              {
                title: "Quality Over Quantity",
                description: "We focus on delivering fewer, higher-quality leads rather than flooding you with unqualified contacts. Every exclusive lead truly counts.",
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                ),
              },
              {
                title: "Dedicated Support",
                description: "Every premium client gets a dedicated 24/7 account manager. We are here to ensure your lead generation strategy scales with your business.",
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group rounded-2xl border border-border/40 bg-background/50 p-10 shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:border-primary/40 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <svg className="h-32 w-32 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0l3.7 8.3L24 9.5l-6 5.8 1.4 8.3L12 19.5 4.6 23.6 6 15.3 0 9.5l8.3-1.2z" />
                  </svg>
                </div>
                <div className="mb-6 inline-flex items-center justify-center rounded-2xl bg-primary/10 p-4 text-primary-light group-hover:bg-primary group-hover:text-white transition-colors duration-300 relative z-10 shadow-[0_0_15px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
                  {item.title}
                </h3>
                <p className="text-base text-gray-400 leading-relaxed font-light relative z-10 group-hover:text-gray-300 transition-colors">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 sm:py-32 bg-black relative border-t border-border/30 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-[100%] blur-[120px] pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 tracking-tight">
            Deep Roots in the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-blue-400">Auto Industry</span>
          </h2>
          <p className="text-gray-300 text-xl leading-relaxed font-light">
            With over a decade of experience in the automotive parts sector, our
            premium team has developed exclusive relationships with thousands of buyers and
            suppliers across the globe. We leverage this private network and our
            proprietary matching technology to deliver leads that convert —
            consistently and predictably.
          </p>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 bg-gradient-to-br from-background via-surface to-background relative border-t border-border/50">
        <div className="absolute inset-0 bg-[url('/texture-bg.png')] opacity-10 mix-blend-overlay pointer-events-none bg-cover bg-center" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight drop-shadow-2xl mb-6">
              Start Receiving <span className="text-primary-light">Leads Today</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light mb-12">
              Join the elite network of auto parts businesses already scaling with our
              high-quality corporate lead generation service.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center rounded-xl bg-primary px-10 py-5 text-lg font-bold text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] hover:bg-primary-light hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] skew-x-[-30deg] group-hover:animate-shine" />
                <span className="relative z-10 flex items-center">
                  Get Started Now
                  <svg className="ml-3 h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 backdrop-blur-md px-10 py-5 text-lg font-bold text-white hover:bg-white/10 hover:border-white/40 hover:-translate-y-1 transition-all duration-300 shadow-xl"
              >
                <svg className="mr-3 h-6 w-6 text-primary-light" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
