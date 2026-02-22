"use client";

import { useState, FormEvent } from "react";
import MagneticWrapper from "@/components/MagneticWrapper";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  partsRequired: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  partsRequired?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    partsRequired: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

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

    if (!formData.partsRequired.trim()) {
      newErrors.partsRequired = "Please describe the parts you need";
    }

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
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setStatus("success");
        setFormData({ fullName: "", email: "", phone: "", partsRequired: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-xl bg-green-500/10 border border-green-500/20 p-8 text-center backdrop-blur-sm">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-500/20">
          <svg
            className="h-7 w-7 text-green-400"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">
          Request Received!
        </h3>
        <p className="mt-2 text-sm text-green-200">
          Our VIP support team will contact you within 2 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-green-400 underline hover:text-green-300 transition-colors"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {status === "error" && (
        <div className="rounded-lg bg-red-500/10 border border-red-500/30 p-4 text-sm text-red-400 text-center backdrop-blur-sm">
          Something went wrong. Please try again or use the email provided.
        </div>
      )}

      <div>
        <label
          htmlFor="fullName"
          className="block text-sm font-medium text-text mb-1.5"
        >
          Full Name <span className="text-accent">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className={`w-full rounded-xl border px-4 py-3.5 text-base text-white placeholder-gray-500 outline-none transition-all duration-300 focus:ring-2 focus:ring-primary/40 focus:border-primary shadow-inner ${errors.fullName ? "border-red-500 bg-red-500/10" : "border-border/60 bg-background/50 hover:border-gray-500"
            }`}
          placeholder="John Doe"
        />
        {errors.fullName && (
          <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-text mb-1.5"
        >
          Email <span className="text-accent">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full rounded-xl border px-4 py-3.5 text-base text-white placeholder-gray-500 outline-none transition-all duration-300 focus:ring-2 focus:ring-primary/40 focus:border-primary shadow-inner ${errors.email ? "border-red-500 bg-red-500/10" : "border-border/60 bg-background/50 hover:border-gray-500"
            }`}
          placeholder="john@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-500">{errors.email}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-text mb-1.5"
        >
          Phone Number <span className="text-accent">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full rounded-xl border px-4 py-3.5 text-base text-white placeholder-gray-500 outline-none transition-all duration-300 focus:ring-2 focus:ring-primary/40 focus:border-primary shadow-inner ${errors.phone ? "border-red-500 bg-red-500/10" : "border-border/60 bg-background/50 hover:border-gray-500"
            }`}
          placeholder="+1 (234) 567-890"
        />
        {errors.phone && (
          <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="partsRequired"
          className="block text-sm font-medium text-text mb-1.5"
        >
          Parts Required <span className="text-accent">*</span>
        </label>
        <textarea
          id="partsRequired"
          name="partsRequired"
          value={formData.partsRequired}
          onChange={handleChange}
          rows={4}
          className={`w-full rounded-xl border px-4 py-3.5 text-base text-white placeholder-gray-500 outline-none transition-all duration-300 resize-none focus:ring-2 focus:ring-primary/40 focus:border-primary shadow-inner ${errors.partsRequired
            ? "border-red-500 bg-red-500/10"
            : "border-border/60 bg-background/50 hover:border-gray-500"
            }`}
          placeholder="Describe the auto parts you need..."
        />
        {errors.partsRequired && (
          <p className="mt-1 text-xs text-red-500">{errors.partsRequired}</p>
        )}
      </div>

      <MagneticWrapper intensity={0.1}>
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full flex justify-center rounded-xl bg-primary px-6 py-4 text-base font-bold tracking-wide text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:bg-primary-light active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 mt-4 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] skew-x-[-30deg] group-hover:animate-shine" />
          <span className="relative z-10 flex justify-center items-center">
            {status === "loading" ? (
              <span className="inline-flex items-center gap-2">
                <svg
                  className="animate-spin h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Processing VIP Request...
              </span>
            ) : (
              "Send Priority Request"
            )}
          </span>
        </button>
      </MagneticWrapper>
    </form>
  );
}
