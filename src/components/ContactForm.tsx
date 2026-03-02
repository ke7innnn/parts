"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  partsRequired: string;
  smsConsent: boolean;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  partsRequired?: string;
  smsConsent?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    partsRequired: "",
    smsConsent: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\d\s\-+()]{7,20}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.partsRequired.trim()) newErrors.partsRequired = "Please describe the parts you need";
    if (!formData.smsConsent) newErrors.smsConsent = "You must agree to receive SMS messages to proceed";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const response = await fetch(
        "https://contact-form-submission.vercel.app/autoparts-contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        setStatus("success");
        setFormData({ fullName: "", email: "", phone: "", partsRequired: "", smsConsent: false });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-xl bg-green-50 border border-green-200 p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
          <svg className="h-7 w-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-text mb-2">Request Received!</h3>
        <p className="mt-2 text-sm text-text-muted">Our team will contact you within 24 hours.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-primary underline hover:text-primary-dark transition-colors"
        >
          Submit another request
        </button>
      </div>
    );
  }

  const inputClass = (hasError: boolean) =>
    `w-full rounded-lg border px-4 py-3 text-base text-text placeholder-text-muted/50 outline-none transition-all focus:ring-2 focus:ring-primary/30 focus:border-primary ${hasError ? "border-red-400 bg-red-50" : "border-border bg-white hover:border-primary/40"
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {status === "error" && (
        <div className="rounded-lg bg-red-50 border border-red-200 p-4 text-sm text-red-600 text-center">
          Something went wrong. Please try again or contact us directly.
        </div>
      )}

      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-text mb-1.5">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className={inputClass(!!errors.fullName)} placeholder="John Doe" />
        {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text mb-1.5">
          Email <span className="text-red-500">*</span>
        </label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={inputClass(!!errors.email)} placeholder="john@example.com" />
        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-text mb-1.5">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={inputClass(!!errors.phone)} placeholder="+1 (234) 567-890" />
        {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="partsRequired" className="block text-sm font-medium text-text mb-1.5">
          Parts Required <span className="text-red-500">*</span>
        </label>
        <textarea id="partsRequired" name="partsRequired" value={formData.partsRequired} onChange={handleChange} rows={4} className={`${inputClass(!!errors.partsRequired)} resize-none`} placeholder="Describe the auto parts you need..." />
        {errors.partsRequired && <p className="mt-1 text-xs text-red-500">{errors.partsRequired}</p>}
      </div>

      <div className="flex items-start gap-3 mt-4">
        <div className="flex h-5 items-center mt-0.5">
          <input
            id="smsConsent"
            name="smsConsent"
            type="checkbox"
            checked={formData.smsConsent}
            onChange={handleChange}
            className="h-4 w-4 rounded border-border text-primary focus:ring-primary/30"
          />
        </div>
        <div className="text-xs leading-5 text-text-muted">
          <label htmlFor="smsConsent" className="font-medium text-text">
            SMS Consent <span className="text-red-500">*</span>
          </label>
          <p className="mt-1">
            By checking this box, you agree to receive SMS messages from Insight Consulting US related to delivery notifications. You may reply STOP to opt-out at any time. Reply HELP to (855) 378-4258 for assistance. Messages and data rates may apply. Message frequency will vary. Learn more on our <Link href="/privacy-policy" className="text-primary hover:underline font-medium">privacy policy page</Link> and <Link href="/terms" className="text-primary hover:underline font-medium">Term &amp; Conditions</Link>.
          </p>
          {errors.smsConsent && <p className="mt-1 text-xs text-red-500 font-medium">{errors.smsConsent}</p>}
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-lg bg-primary px-6 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-primary-dark active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed transition-all mt-2"
      >
        {status === "loading" ? (
          <span className="inline-flex items-center gap-2">
            <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </span>
        ) : (
          "Send Request"
        )}
      </button>
    </form>
  );
}
