import ContactForm from "@/components/ContactForm";
import ParallaxBackground from "@/components/ParallaxBackground";

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-blue-50 to-white border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-text tracking-tight text-center">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="mt-4 text-lg text-text-muted text-center max-w-2xl mx-auto">
            Get in touch with our team. We&apos;re here to help you grow your auto parts business.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden z-0">
        <ParallaxBackground
          src="/parallax-car-light.png"
          alt="Abstract Sports Car"
          speed={0.18}
          opacity={50}
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-text mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text">Phone</h3>
                    <a href="tel:+1234567890" className="text-text-muted hover:text-primary transition-colors">+1 (234) 567-890</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text">Email</h3>
                    <a href="mailto:info@autopartsleads.com" className="text-text-muted hover:text-primary transition-colors">info@autopartsleads.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text">Business Hours</h3>
                    <p className="text-text-muted">Monday – Friday, 9:00 AM – 6:00 PM EST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-xl border border-border bg-surface p-8 sm:p-10 shadow-sm">
              <h3 className="text-xl font-bold text-text mb-1">Send Us a Message</h3>
              <p className="text-text-muted mb-6 text-sm">We&apos;ll respond within 24 hours.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
