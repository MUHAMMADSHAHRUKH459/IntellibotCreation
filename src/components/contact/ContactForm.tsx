"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { getWhatsAppUrl } from "@/lib/data";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.union([z.string().email("Enter a valid email address"), z.literal("")]),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const serviceOptions = [
  "Custom Business Management Systems",
  "Inventory and Stock Management",
  "Sales and Expense Management",
  "Member and Foundation Management",
  "Web Applications",
  "AI-powered Business Automation",
  "Not sure yet",
];

const inputClasses =
  "w-full rounded-xl border border-border bg-navy-light/40 px-4 py-3 text-sm text-text placeholder:text-muted focus:border-accent/50 focus:outline-none transition-colors";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    const message = [
      "Hello, I would like to discuss a project.",
      `Name: ${data.name}`,
      data.email ? `Email: ${data.email}` : "",
      data.phone ? `Phone/WhatsApp: ${data.phone}` : "",
      `Service: ${data.service}`,
      `Project details: ${data.message}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.assign(getWhatsAppUrl(message));
  }

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8">
      <motion.form
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
              autoComplete="name"
              placeholder="Your name"
              className={inputClasses}
              aria-invalid={Boolean(errors.name)}
              {...register("name")}
            />
            {errors.name && (
              <p className="mt-1.5 text-xs text-red-400">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-text">
              Email Address (optional)
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="you@business.com"
              className={inputClasses}
              aria-invalid={Boolean(errors.email)}
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
              Phone or WhatsApp (optional)
            </label>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+92 3XX XXXXXXX"
              className={inputClasses}
              {...register("phone")}
            />
          </div>

          <div>
            <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-text">
              Service Needed
            </label>
            <select
              id="service"
              className={inputClasses}
              aria-invalid={Boolean(errors.service)}
              {...register("service")}
            >
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
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-text">
            Project Details
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="What would you like your system to help manage?"
            className={`${inputClasses} resize-none`}
            aria-invalid={Boolean(errors.message)}
            {...register("message")}
          />
          {errors.message && (
            <p className="mt-1.5 text-xs text-red-400">{errors.message.message}</p>
          )}
        </div>

        <p className="text-xs leading-relaxed text-muted">
          This opens WhatsApp with your project details filled in. Review and send the
          message in WhatsApp to complete your inquiry.
        </p>

        <AnimatedButton
          type="submit"
          disabled={isSubmitting}
          showArrow={false}
          className="mt-2 w-full justify-center disabled:opacity-70"
        >
          <MessageCircle className="h-4 w-4" />
          Continue in WhatsApp
        </AnimatedButton>
      </motion.form>
    </div>
  );
}
