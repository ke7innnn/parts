import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-blue-50 to-white border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-text tracking-tight text-center">
            About <span className="text-primary">Us</span>
          </h1>
          <p className="mt-4 text-lg text-text-muted text-center max-w-2xl mx-auto">
            We&apos;re on a mission to connect auto parts suppliers with high-intent buyers nationwide.
          </p>
        </div>
      </section>

      {/* Mission + Image */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
              <Image
                src="/about-bg.png"
                alt="Our Warehouse"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-text mb-4">Our Mission</h2>
              <p className="text-text-muted leading-relaxed mb-4">
                At AutoParts Leads, we bridge the gap between auto parts suppliers and qualified buyers. Our platform uses advanced matching technology to ensure every lead you receive is from a genuine, ready-to-purchase customer.
              </p>
              <p className="text-text-muted leading-relaxed mb-4">
                Founded by automotive industry veterans, we understand the challenges suppliers face in finding reliable customers. That&apos;s why we&apos;ve built a system that delivers exclusive, verified leads directly to your inbox.
              </p>
              <p className="text-text-muted leading-relaxed">
                We&apos;re committed to transparency, quality, and delivering measurable results for every partner we work with.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 sm:py-20 bg-surface border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { stat: "10,000+", label: "Leads Delivered" },
              { stat: "500+", label: "Active Partners" },
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
