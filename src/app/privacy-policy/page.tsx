import Image from "next/image";
import ParallaxBackground from "@/components/ParallaxBackground";

export default function PrivacyPolicyPage() {
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
            Privacy <span className="text-primary">Policy</span>
          </h1>
          <p className="mt-4 text-text-muted">Last updated: February 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20 bg-white relative overflow-hidden z-0">


        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-border shadow-sm">
          <div className="prose prose-slate max-w-none space-y-8">
            <div>
              <h2 className="text-xl font-bold text-text mb-3">1. Information We Collect</h2>
              <p className="text-text-muted leading-relaxed">
                We collect information you provide directly, including your name, email address, phone number, and business details when you submit a lead request or contact us. We also automatically collect certain information about your device and how you interact with our website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text mb-3">2. How We Use Your Information</h2>
              <p className="text-text-muted leading-relaxed">
                We use the information we collect to process and deliver leads, communicate with you about our services, improve our platform, and comply with legal obligations. We may also use your information to send you marketing communications with your consent.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text mb-3">3. Information Sharing</h2>
              <p className="text-text-muted leading-relaxed">
                We do not sell your personal information. We may share your information with trusted service providers who assist us in operating our platform, conducting our business, or serving our users. We may also disclose information when required by law or to protect our rights.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text mb-3">4. Data Security</h2>
              <p className="text-text-muted leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text mb-3">5. Cookies</h2>
              <p className="text-text-muted leading-relaxed">
                Our website uses cookies and similar tracking technologies to enhance your browsing experience. You can control cookies through your browser settings. Disabling cookies may affect the functionality of our website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text mb-3">6. Your Rights</h2>
              <p className="text-text-muted leading-relaxed">
                You have the right to access, correct, or delete your personal data. You may also object to or restrict certain processing of your data. To exercise these rights, please contact us at info@autopartsleads.com.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text mb-3">7. Contact Us</h2>
              <p className="text-text-muted leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:info@autopartsleads.com" className="text-primary hover:underline">info@autopartsleads.com</a> or call us at{" "}
                <a href="tel:+1234567890" className="text-primary hover:underline">+1 (234) 567-890</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
