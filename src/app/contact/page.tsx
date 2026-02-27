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
            Get in touch with our team. We&apos;re here to help you find the exact auto parts you need.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden z-0">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-text mb-6 text-center lg:text-left">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-6">
  {/* Phone Section - Takes only the space it needs */}
  <div className="flex-none flex items-start gap-4 p-4 rounded-xl bg-surface border border-border">
    <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    </div>
    <div>
      <h3 className="font-semibold text-text">Phone</h3>
      <a href="tel:+18553784258" className="text-sm text-primary font-bold hover:underline whitespace-nowrap">+1 855 378 4258</a>
    </div>
  </div>

  {/* Email Section - Takes up all remaining space */}
  <div className="flex-1 min-w-0 flex items-start gap-4 p-4 rounded-xl bg-surface border border-border">
    <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    </div>
    <div className="min-w-0">
      <h3 className="font-semibold text-text">Email</h3>
      <a href="mailto:contact@optimusautoparts.com" className="text-sm text-primary font-bold hover:underline break-words">
        contact@optimusautoparts.com
      </a>
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
                      <h4 className="font-bold text-text mb-3">Working Hours</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between items-center py-1.5 border-b border-border/50">
                          <span className="text-text-muted">Week Days:</span>
                          <span className="font-semibold text-text">08:00 – 20:00</span>
                        </div>
                        <div className="flex justify-between items-center py-1.5 border-b border-border/50">
                          <span className="text-text-muted">Saturday:</span>
                          <span className="font-semibold text-text">08:00 – 16:00</span>
                        </div>
                        <div className="flex justify-between items-center py-1.5">
                          <span className="text-text-muted">Sunday:</span>
                          <span className="font-semibold text-text">08:00 – 14:00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden border border-border shadow-sm aspect-video sm:aspect-[21/9] lg:aspect-auto lg:h-[300px]">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.238321650865!2d-73.8643870242252!3d40.73476257138766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25f0022379375%3A0xe5a363d6b04eb810!2s96-10%2057th%20Ave%2C%20Corona%2C%20NY%2011368%2C%20USA!5e0!3m2!1sen!2sin!4v1708600000000!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
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
