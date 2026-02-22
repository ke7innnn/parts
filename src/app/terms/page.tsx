import Image from "next/image";
import ParallaxBackground from "@/components/ParallaxBackground";

export default function TermsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden border-b border-border">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/about-bg-light.png"
            alt="Warehouse Background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/90 to-white/95"></div>
        </div>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-text tracking-tight">
            Terms & <span className="text-primary">Conditions</span>
          </h1>
          <p className="mt-4 text-text-muted">Last updated: February 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20 bg-white relative overflow-hidden z-0">


        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-border shadow-sm">
          <div className="prose prose-slate max-w-none space-y-8">
            <div>
              <h2 className="text-xl font-bold text-text mb-3">1. Acceptance of Terms</h2>
              <p className="text-text-muted leading-relaxed">
                By accessing or using the AutoParts Store website and services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not access or use our services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text mb-3">2. Services</h2>
              <p className="text-text-muted leading-relaxed">
                AutoParts Store provides an online platform for purchasing auto parts. Availability of specific parts may vary based on market conditions.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text mb-3">3. User Obligations</h2>
              <p className="text-text-muted leading-relaxed">
                You agree to provide accurate and complete information when using our services. You are responsible for maintaining the confidentiality of any account credentials and for all activities that occur under your account.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text mb-3">4. Payment Terms</h2>
              <p className="text-text-muted leading-relaxed">
                Payment terms will be outlined in your service agreement. All fees are non-refundable unless otherwise stated. We reserve the right to change pricing with 30 days advance written notice.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text mb-3">5. Intellectual Property</h2>
              <p className="text-text-muted leading-relaxed">
                All content, trademarks, and other intellectual property on this website are owned by AutoParts Store. You may not reproduce, distribute, or create derivative works without our prior written permission.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text mb-3">6. Limitation of Liability</h2>
              <p className="text-text-muted leading-relaxed">
                AutoParts Store shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid by you in the preceding 12 months.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text mb-3">7. Termination</h2>
              <p className="text-text-muted leading-relaxed">
                Either party may terminate the service agreement with 30 days written notice. We may suspend or terminate your access immediately if you violate these terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text mb-3">8. Contact</h2>
              <p className="text-text-muted leading-relaxed">
                For questions about these Terms, please contact us at{" "}
                <a href="mailto:info@autopartsstore.com" className="text-primary hover:underline">info@autopartsstore.com</a> or call us at{" "}
                <a href="tel:+1234567890" className="text-primary hover:underline">+1 (234) 567-890</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
