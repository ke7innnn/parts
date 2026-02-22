import Link from "next/link";
import Image from "next/image";
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
              <div className="inline-flex items-center gap-3 rounded-full bg-primary/10 border border-primary/20 px-5 py-2 text-sm font-medium text-primary mb-8">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                Premium Auto Leads
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-text leading-[1.1]">
                Accelerate Your <br />
                <span className="text-primary">Parts Business</span>
              </h1>
              <p className="mt-6 text-lg text-text-muted max-w-xl leading-relaxed">
                We connect exclusive auto parts suppliers with high-intent, verified buyers across the globe. Dominate the market with real-time leads.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="#contact-form"
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-bold text-white shadow-sm hover:bg-primary-dark active:scale-[0.98] transition-all"
                >
                  Get Started
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
                  src="/bluecar.png"
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
              Why Choose <span className="text-primary">Us</span>
            </h2>
            <p className="mt-4 text-text-muted text-lg">
              We deliver results that drive your business forward with premium auto parts leads and unmatched exclusivity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* ========== HOW IT WORKS SECTION ========== */}
      <section className="py-20 sm:py-28 bg-surface border-t border-border relative overflow-hidden z-0">


        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text tracking-tight">
              How It <span className="text-primary">Works</span>
            </h2>
            <p className="mt-4 text-text-muted text-lg">
              Getting started is simple. Three easy steps to start receiving high-quality leads directly to your inbox.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            ].map((item) => (
              <div
                key={item.step}
                className="relative rounded-xl bg-white border border-border p-8 text-center hover:shadow-md hover:border-primary/30 transition-all duration-200"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center justify-center rounded-full bg-primary px-4 py-1.5 text-xs font-bold tracking-widest text-white shadow-sm">
                  STEP {item.step}
                </div>
                <div className="mt-6 mb-5 mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-text mb-3">{item.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
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
                Ready to <span className="text-primary">Get Started?</span>
              </h2>
              <p className="mt-4 text-text-muted text-lg leading-relaxed">
                Tell us what you need and our team will connect you with
                high-quality auto parts leads tailored to your exact business specifications.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "No setup fees or hidden costs",
                  "Premium leads delivered within 24 hours",
                  "100% verified customer contacts",
                  "Dedicated account manager",
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
              </div>

              <div className="mt-10 p-6 rounded-xl bg-surface border border-border">
                <p className="text-text-muted">
                  <span className="font-bold text-text block mb-1">Need immediate assistance?</span>
                  Call us directly at{" "}
                  <a href="tel:+1234567890" className="text-primary font-bold hover:underline">
                    +1 (234) 567-890
                  </a>
                  <span className="block mt-2">or email us at</span>
                  <a href="mailto:info@autopartsleads.com" className="text-primary font-bold hover:underline">
                    info@autopartsleads.com
                  </a>
                </p>
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
