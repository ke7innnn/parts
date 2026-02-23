"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import ParallaxBackground from "@/components/ParallaxBackground";

export default function Home() {
  return (
    <>
      {/* ========== HERO SECTION ========== */}
      <section className="relative overflow-hidden min-h-screen flex items-center bg-white">


        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32 w-full pt-28 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="animate-fade-in-up">
              {/* <div className="inline-flex items-center gap-3 rounded-full bg-primary/10 border border-primary/20 px-5 py-2 text-sm font-medium text-primary mb-8">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                Premium Auto Parts
              </div> */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-text leading-[1.1]">
                Welcome to <br />
                <span className="text-primary">Optimus Auto Parts</span>
              </h1>
              <p className="mt-6 text-lg text-text-muted max-w-xl leading-relaxed">
                Whether you need a hard-to-find replacement or want to lower repair costs, our extensive inventory and dedicated support make us a trusted source for quality used auto parts.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="#contact-form"
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-bold text-white shadow-sm hover:bg-primary-dark active:scale-[0.98] transition-all"
                >
                  Shop Parts
                  <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <a
                  href="tel:+1234567890"
                  className="inline-flex items-center justify-center rounded-lg border border-accent bg-white px-8 py-4 text-base font-bold text-accent hover:bg-accent hover:text-white transition-all"
                >
                  <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  Call Now
                </a>
              </div>
            </div>

            {/* Right illustration - now visible on mobile */}
            <div className="flex items-center justify-center animate-fade-in-up mt-8 lg:mt-0" style={{ animationDelay: "0.2s" }}>
              <div className="relative w-[140%] sm:w-[110%] lg:w-[130%] aspect-[4/3] max-w-[700px] lg:ml-4 animate-float" style={{ animationDelay: "0.5s" }}>
                <Image
                  src="/car-2.png"
                  alt="Premium Blue Car"
                  fill
                  className="object-contain mix-blend-multiply scale-110 sm:scale-100 lg:scale-110"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US SECTION ========== */}
      <section className="py-20 sm:py-28 bg-white border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text tracking-tight">
              Why Choose <span className="text-primary">Optimus Auto Parts?</span>
            </h2>
            <p className="mt-4 text-text-muted text-lg">
              When it comes to servicing or enhancing your vehicle, the choices you make truly matter. From saving money to making a more eco-conscious decision, choosing used auto parts just makes sense. At Optimus Auto Parts, we simplify that choice by offering:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Extensive Selection",
                description: "From engine parts and transmission assemblies to exterior and interior components, our inventory covers nearly every make and model.",
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                ),
              },
              {
                title: "Reliable Quality",
                description: "Each part goes through thorough inspection and testing to ensure it meets standards for performance, durability, and proper fit.",
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                ),
              },
              {
                title: "Cost-Effective Pricing",
                description: "Get dependable parts at a fraction of the cost of new ones without compromising on quality or reliability.",
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: "Expert Support",
                description: "Our team of automotive experts is here to help you find the exact part you need for your specific vehicle.",
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                ),
              },
            ].map((card) => (
              <div
                key={card.title}
                className="group rounded-xl bg-surface border border-border p-8 hover:shadow-md hover:border-primary/30 hover:-translate-y-1 transition-all duration-200"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-text mb-2">{card.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== COMPREHENSIVE INVENTORY SECTION ========== */}
      <section className="py-20 sm:py-28 bg-surface border-t border-border relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text tracking-tight">
              Our <span className="text-primary">Comprehensive Inventory</span>
            </h2>
            <p className="mt-6 text-text-muted text-lg leading-relaxed">
              When it comes to maintaining or upgrading your vehicle, every decision matters. From cost-efficiency to environmental responsibility, buying used auto parts is an intelligent choice. At Optimus Auto Parts, we aim to make this decision even easier by providing a massive selection of high-quality components for every need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Engines and Transmissions",
                description: "Whether you're looking for a complete engine assembly or specific drivetrain components, our warehouse is stocked with parts for almost every make and model.",
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.129-1.125V3.375c0-.621-.508-1.125-1.129-1.125H11.25a9 9 0 00-9 9V14.25" />
                  </svg>
                ),
              },
              {
                title: "Electrical Systems",
                description: "Every used electrical part we sell is thoroughly inspected and tested to ensure peak functionality, durability, and perfect vehicle compatibility.",
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                ),
              },
              {
                title: "Used Suspension",
                description: "Save significantly compared to buying new suspension systems without sacrificing ride quality, safety, or overall vehicle performance.",
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-10.635 15.827l.19-1.487m10.39-13.08l.19-1.488" />
                  </svg>
                ),
              },
              {
                title: "Used ABS",
                description: "No matter where you are in the USA, we deliver the precision braking components and ABS modules you need right to your doorstep.",
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                  </svg>
                ),
              },
              {
                title: "Mechanical Parts",
                description: "Purchase A-Grade used mechanical parts like engines and transmissions at the best price. Call our USA Toll Free line today for a quote.",
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21" />
                  </svg>
                ),
              },
              {
                title: "ECU & ECM",
                description: "Looking for critical electrical controllers like ECU, ECM, or wiring harnesses? We provide expert guidance to help you make the right choice.",
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative rounded-2xl bg-white border border-border p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-300"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-text mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-text-muted leading-relaxed text-sm lg:text-base">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS SECTION ========== */}
      <section className="py-20 sm:py-28 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-text tracking-tight">
              What Our <span className="text-primary">Customers Say</span>
            </h2>
            <p className="mt-4 text-text-muted text-lg">
              Don't just take our word for it. Hear from the people who keep their vehicles on the road with Optimus Auto Parts.
            </p>
          </motion.div>

          <div className="relative">
            <div className="flex overflow-x-auto pb-8 gap-6 no-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing">
              {[
                {
                  name: "Mike Rodriguez",
                  role: "Professional Mechanic",
                  content: "The replacement engine for my client's Ford F-150 was in pristine condition. Fast shipping and excellent customer support. Highly recommended!",
                },
                {
                  name: "Sarah Jenkins",
                  role: "Vehicle Owner",
                  content: "I'd been searching for a specific ECU for weeks. They had it in stock and verified the fitment instantly. Saved my car from the scrap heap!",
                },
                {
                  name: "David Chen",
                  role: "DIY Enthusiast",
                  content: "Saved over $1,200 on a transmission swap. The quality of their 'A-Grade' parts is truly impressive. My go-to source from now on.",
                },
                {
                  name: "Jennifer Wilson",
                  role: "Fleet Manager",
                  content: "Managing a fleet means parts need to be reliable and affordable. The ABS modules we sourced work perfectly and the delivery was incredibly fast.",
                },
              ].map((testimonial, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex-shrink-0 w-[300px] sm:w-[400px] snap-center bg-surface border border-border p-8 rounded-2xl relative"
                >
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg key={s} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-text leading-relaxed italic mb-6">"{testimonial.content}"</p>
                  <div>
                    <h4 className="font-bold text-text">{testimonial.name}</h4>
                    <p className="text-sm text-text-muted">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* ========== CONTACT FORM SECTION ========== */}
      <section id="contact-form" className="py-20 sm:py-28 bg-white border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left info */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-text tracking-tight">
                Ready to <span className="text-primary">Order Parts?</span>
              </h2>
              <p className="mt-4 text-text-muted text-lg leading-relaxed">
                Tell us what you need and our team will get you the exact high-quality auto parts required for your vehicle.
              </p>

              {/* <div className="mt-8 space-y-4">
                {[
                  "100% Fitment Guarantee",
                  "Premium parts shipped within 24 hours",
                  "OEM and high-quality aftermarket options",
                  "Expert customer support",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex-shrink-0 h-7 w-7 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-base text-text-muted">{item}</span>
                  </div>
                ))}
              </div> */}

              <div className="mt-10 space-y-6">
                <div className="p-6 rounded-xl bg-surface border border-border">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-text mb-1">Our Location</h4>
                      <p className="text-text-muted text-sm leading-relaxed">
                        96-10 57th Avenue, <br />
                        Corona, NY 11368
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-surface border border-border">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="w-full">
                      <h4 className="font-bold text-text mb-2">Working Hours</h4>
                      <div className="space-y-1.5 text-sm">
                        <div className="flex justify-between items-center py-1 border-b border-border/50">
                          <span className="text-text-muted">Week Days:</span>
                          <span className="font-semibold text-text">08:00 – 20:00</span>
                        </div>
                        <div className="flex justify-between items-center py-1 border-b border-border/50">
                          <span className="text-text-muted">Saturday:</span>
                          <span className="font-semibold text-text">08:00 – 16:00</span>
                        </div>
                        <div className="flex justify-between items-center py-1">
                          <span className="text-text-muted">Sunday:</span>
                          <span className="font-semibold text-text">08:00 – 14:00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-primary/5 border border-primary/10">
                  <p className="text-text-muted text-sm leading-relaxed">
                    <span className="font-bold text-text block mb-1 underline decoration-primary/30 underline-offset-4">Need immediate assistance?</span>
                    Call us directly at{" "}
                    <a href="tel:+1234567890" className="text-primary font-bold hover:underline">
                      +1 (234) 567-890
                    </a>
                    <span className="block mt-1">or email us at{" "}
                    <a href="mailto:info@autopartsstore.com" className="text-primary font-bold hover:underline">
                      info@autopartsstore.com
                    </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Right form */}
            <div className="rounded-xl border border-border bg-surface p-8 sm:p-10 shadow-sm">
              <h3 className="text-xl font-bold text-text mb-1">Submit Your Request</h3>
              <p className="text-text-muted mb-6 text-sm">We&apos;ll get back to you within 24 hours.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>

  );
}
