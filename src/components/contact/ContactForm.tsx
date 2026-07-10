"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import AnimatedButton from "@/components/ui/AnimatedButton";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const serviceOptions = [
  "Custom Web Development",
  "Software Development",
  "AI Chatbot Development",
  "AI Agent Development",
  "Not sure yet",
];

const budgetOptions = [
  "Under $1,000",
  "$1,000 - $5,000",
  "$5,000 - $15,000",
  "$15,000+",
  "Let's discuss",
];

const inputClasses =
  "w-full rounded-xl border border-border bg-navy-light/40 px-4 py-3 text-sm text-text placeholder:text-muted focus:border-accent/50 focus:outline-none transition-colors";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormValues) {
    // Simulate submission — replace with a real API call / email service
    // (e.g. Resend, Formspree, or a custom API route) when ready.
    await new Promise((resolve) => setTimeout(resolve, 1200));
    console.log("Contact form submission:", data);
    setSubmitted(true);
    reset();
  }

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center py-16 text-center"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent glow-accent">
              <CheckCircle2 className="h-8 w-8 text-white" />
            </span>
            <h3 className="mt-6 text-xl font-semibold text-text">Message sent!</h3>
            <p className="mt-2 max-w-xs text-sm text-muted">
              Thanks for reaching out. We&apos;ll get back to you within 24 hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 text-sm font-medium text-accent-light hover:text-accent"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
            noValidate
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-text">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className={inputClasses}
                  {...register("name")}
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-400">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-text">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@company.com"
                  className={inputClasses}
                  {...register("email")}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-400">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-text">
                  Phone (optional)
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+1 234 567 8900"
                  className={inputClasses}
                  {...register("phone")}
                />
              </div>

              <div>
                <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-text">
                  Service Needed
                </label>
                <select id="service" className={inputClasses} {...register("service")}>
                  <option value="">Select a service</option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="mt-1.5 text-xs text-red-400">{errors.service.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="budget" className="mb-1.5 block text-sm font-medium text-text">
                Estimated Budget (optional)
              </label>
              <select id="budget" className={inputClasses} {...register("budget")}>
                <option value="">Select a range</option>
                {budgetOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-text">
                Project Details
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell us about your project, goals, and timeline..."
                className={`${inputClasses} resize-none`}
                {...register("message")}
              />
              {errors.message && (
                <p className="mt-1.5 text-xs text-red-400">{errors.message.message}</p>
              )}
            </div>

            <AnimatedButton
              type="submit"
              disabled={isSubmitting}
              showArrow={false}
              className="mt-2 w-full justify-center disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send Message
                </>
              )}
            </AnimatedButton>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}