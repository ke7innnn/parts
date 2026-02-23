import Image from "next/image";
import ParallaxBackground from "@/components/ParallaxBackground";

export default function AboutPage() {
  return (
    <>
      {/* ========== MISSION SECTION ========== */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-white relative overflow-hidden z-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h1 className="text-4xl sm:text-5xl font-bold text-text tracking-tight mb-8">
              Our <span className="text-primary">Mission</span>
            </h1>
            <p className="text-lg text-text-muted leading-relaxed">
              Our goal is straightforward: to deliver dependable, budget-friendly, and environmentally responsible solutions for all your automotive needs. Whether you’re a car enthusiast, a workshop owner, or simply keeping your vehicle in great shape, Optimus Auto Parts is here to support you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                title: "Clear Pricing",
                description: "Enjoy transparent, upfront pricing on all used auto parts—no hidden costs, just real value.",
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.546 1.16 3.76.565 4.582-1.232.13-.284.223-.574.279-.871m-4.48-8.032l.879.659c1.546 1.16 3.76.565 4.582-1.232.13-.284.223-.574.279-.871m-4.48-4.066l.879.659c1.546 1.16 3.76.565 4.582-1.232.13-.284.223-.574.279-.871m-4.48-4.066L9 3.102c-1.546 1.16-3.76.565-4.582 1.232C4.136 4.394 3.75 4.974 3.75 5.617c0 .642.386 1.222.668 1.554L9 10.455" />
                  </svg>
                )
              },
              {
                title: "Professional Support",
                description: "Our experienced team is ready to guide you to the right parts for your vehicle, making the entire process smooth and hassle-free.",
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a5.97 5.97 0 00-.942 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                )
              },
              {
                title: "Quality Guarantee",
                description: "Every part you buy is covered by a dependable guarantee, so you can feel confident in its performance and reliability.",
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                )
              },
              {
                title: "Easy Returns",
                description: "If something doesn’t meet expectations, our simple return process ensures a quick and stress-free resolution, letting you shop with complete confidence.",
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                  </svg>
                )
              },
            ].map((feature, index) => (
              <div key={index} className="flex gap-6 p-8 rounded-2xl bg-surface border border-border hover:border-primary/20 transition-all shadow-sm">
                <div className="flex-shrink-0 h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text mb-2">{feature.title}</h3>
                  <p className="text-text-muted leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 sm:py-20 bg-surface border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { stat: "10,000+", label: "Parts Delivered" },
              { stat: "500+", label: "Happy Customers" },
              { stat: "98%", label: "Satisfaction Rate" },
              { stat: "24hrs", label: "Avg Delivery Time" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-3xl sm:text-4xl font-bold text-primary">{item.stat}</p>
                <p className="mt-1 text-sm text-text-muted">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
