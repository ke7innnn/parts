import Image from "next/image";
import ParallaxBackground from "@/components/ParallaxBackground";

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* ========== CONTENT SECTION ========== */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-white relative overflow-hidden z-0">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="prose prose-slate max-w-none">
            <h1 className="text-4xl sm:text-5xl font-bold text-text tracking-tight mb-8">
              Privacy <span className="text-primary">Policy</span>
            </h1>

            <div className="bg-surface border border-border p-8 rounded-2xl mb-12">
              <p className="text-text leading-relaxed mb-4">
                Welcome to <strong>Optimus Consulting US DBA Optimus Auto Parts</strong> (“we,” “our,” or “us”). This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website, use our services, or interact with our business. By accessing our website or using our services, you agree to the terms described in this policy.
              </p>
              <p className="text-text leading-relaxed">
                All references to <strong>Optimus Auto Parts</strong> refer to <strong>Optimus Consulting US DBA Optimus Auto Parts</strong>, a legally registered business entity. This name may be used interchangeably across our website and communications for branding and operational purposes.
              </p>
            </div>

            <div className="space-y-12 text-text-muted leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-text mb-4 border-b border-border pb-2">Our Commitment to Privacy</h2>
                <p>
                  This policy explains how and why personal information is collected, used, protected, and shared through our retailers, website, mobile applications, affiliates, and business partners. Your privacy matters to us. To ensure transparency, this notice outlines our online information practices and the choices available to you regarding how your data is collected and used. This policy is accessible on our homepage and wherever personally identifiable information may be requested.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text mb-4 border-b border-border pb-2">How We Use Information</h2>
                <p className="mb-4">
                  <strong>Optimus Consulting US DBA Optimus Auto Parts</strong> recognizes the importance of protecting your privacy and securing your data. We use your information only as necessary to operate our business and deliver quality products and services, including informing you about offerings and opportunities. Enrollment in and use of <strong>Optimus Auto Parts</strong> products and services is entirely voluntary, and you may opt out at any time.
                </p>
                <p>
                  If you have questions or concerns about this policy, please contact us at <a href="mailto:support@optimusautoparts.com" className="text-primary hover:underline font-semibold">support@optimusautoparts.com</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text mb-4 border-b border-border pb-2">Information We Collect and Why</h2>
                <p className="mb-4">
                  Information you provide when placing an order is used solely to process and complete that order. We do not share this information with third parties except where required to fulfill the transaction.
                </p>
                <p className="mb-4">
                  If you provide information about another individual (for example, a shipping recipient), it is used only to deliver the order and confirm receipt. Return email addresses are used only to respond to inquiries and are not shared or reused for other purposes.
                </p>
                <p className="mb-4">
                  We may use non-identifiable, aggregated data to improve website functionality and share general insights with advertisers. For example, we may report website traffic statistics without revealing any personally identifiable information.
                </p>
                <p>
                  We will never use or share your personal information for purposes unrelated to those described above without giving you the option to opt out.
                </p>
              </section>

              <section className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
                <h2 className="text-2xl font-bold text-text mb-4">Core Charge Policy</h2>
                <p className="mb-4">
                  A <strong>Core Charge</strong> is a refundable deposit collected at the time of purchase for certain rebuildable components such as engines, transmissions, transfer cases, turbos, superchargers, and fuel injectors. The charge is refunded once your old, rebuildable core is returned.
                </p>
                <p>
                  To qualify for a full refund, the returned core must match the model and part number of the purchased item. If you are unsure whether your core meets return requirements, please contact our parts department before ordering. Returned cores must be shipped within 30 days of purchase in the original packaging. Return shipping costs are the responsibility of the customer unless stated otherwise.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text mb-4 border-b border-border pb-2">Privacy Policy for SMS Messaging</h2>
                <p className="mb-6">Mobile numbers collected for SMS communication are <strong>not shared</strong> with third parties or affiliates for marketing purposes.</p>
                
                <h3 className="text-xl font-bold text-text mb-3">Information We Collect</h3>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                  <li>Your phone number</li>
                  <li>Any additional information you voluntarily provide during signup</li>
                </ul>

                <h3 className="text-xl font-bold text-text mb-3">How We Use This Information</h3>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                  <li>Send transactional messages such as order updates and shipping notifications</li>
                  <li>Share promotions, discounts, and updates</li>
                  <li>Provide customer support and respond to inquiries</li>
                </ul>

                <h3 className="text-xl font-bold text-text mb-3">Consent and Opt-Out</h3>
                <p className="mb-4">
                  By providing your phone number, you consent to receive recurring SMS messages from <strong>Optimus Auto Parts</strong>. You may opt out at any time by replying <strong>STOP</strong> to any message or contacting us at <a href="mailto:support@optimusautoparts.com" className="text-primary hover:underline font-semibold">support@optimusautoparts.com</a> or <a href="tel:18885668927" className="text-primary hover:underline font-semibold">(888) 566-8927</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text mb-4 border-b border-border pb-2">Data Security</h2>
                <p>
                  We use appropriate physical, electronic, and administrative safeguards to protect your information and prevent unauthorized access. Temporary cookies may be used to verify browser compatibility; these contain no personal data and are deleted when you close your browser.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text mb-4 border-b border-border pb-2">Children’s Privacy</h2>
                <p>
                  Protecting children’s privacy is a priority. We do not knowingly collect or maintain information from individuals under the age of 13, and our website is not designed to attract children under 13.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text mb-4 border-b border-border pb-2">Terms of Use</h2>
                <p className="mb-4">
                  By visiting this website, purchasing services, or downloading information, you agree to be bound by the <strong>Terms & Conditions of Optimus Auto Parts</strong>. All users must be at least 18 years old or have parental consent.
                </p>
                <p className="mb-4">
                  You agree to provide accurate information, conduct transactions in good faith, and refrain from fraudulent activity. Unauthorized use, duplication, or distribution of website content is prohibited and may result in legal action.
                </p>
                <p>
                  <strong>Optimus Auto Parts</strong> reserves the right to terminate access to services at its discretion and without notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text mb-4 border-b border-border pb-2">Liability Limits and Inventory Accuracy</h2>
                <p>
                  Due to rapid inventory turnover, product listings may not always reflect current availability or pricing and are subject to change.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text mb-4 border-b border-border pb-2">Fraud Protection</h2>
                <p>
                  <strong>Optimus Auto Parts</strong>, along with its affiliates and partners, reserves the right to use enrollment, transaction, and account data to prevent fraud. Any attempt to misuse our services may result in denial of access and potential legal action.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text mb-4 border-b border-border pb-2">Sharing Information with Other Businesses</h2>
                <p className="mb-4">
                  We may offer products or services from other businesses through partnerships. When applicable, we will disclose when another business is involved and may share relevant personal information necessary to complete those transactions.
                </p>
                <p>
                  You may opt out of sharing data with unaffiliated third parties by contacting us using the details below.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text mb-4 border-b border-border pb-2">Legal Requirements and Business Transfers</h2>
                <p>
                  We may disclose information when required by law or to protect the rights, safety, or property of <strong>Optimus Auto Parts</strong>, its employees, customers, and partners. In the event of a merger, sale, or restructuring, your information may be transferred to the successor entity under the same privacy protections.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text mb-4 border-b border-border pb-2">Marketing Preferences</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Phone & SMS</strong>: Opt-in only</li>
                  <li><strong>Email & Mail</strong>: Opt-out available</li>
                </ul>
                <p className="mt-4">
                  You may opt out of marketing communications or data sharing with affiliates at any time.
                </p>
              </section>

              <section className="mt-16 pt-12 border-t border-border">
                <h2 className="text-2xl font-bold text-text mb-6">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-text mb-2 text-sm uppercase tracking-wider">Postal Address</h4>
                    <p className="bg-surface p-4 rounded-xl border border-border text-sm">
                      96-10 57th Avenue,<br />
                      Corona, New York, 11368
                    </p>
                  </div>
                  <div className="space-y-4 text-sm">
                    <div>
                      <h4 className="font-bold text-text mb-1 uppercase tracking-wider text-[10px]">Email Support</h4>
                      <div className="space-y-1">
                        <a href="mailto:info@optimusautoparts.com" className="block text-primary hover:underline">info@optimusautoparts.com</a>
                        <a href="mailto:support@optimusautoparts.com" className="block text-primary hover:underline">support@optimusautoparts.com</a>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-text mb-1 uppercase tracking-wider text-[10px]">Phone</h4>
                      <a href="tel:18885668927" className="text-primary hover:underline font-semibold">(888) 566-8927</a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
