"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import AnimatedButton from "@/components/ui/AnimatedButton";
import GradientBlobs from "@/components/ui/GradientBlobs";
import { getWhatsAppUrl } from "@/lib/data";

export default function FinalCTA() {
  return (
    <section className="section relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] border border-border bg-navy px-6 py-16 text-center sm:px-12 sm:py-20"
        >
          <GradientBlobs />
          <div className="relative z-10">
            <span className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-navy-light/40 px-4 py-1.5 text-xs font-medium text-accent-light">
              <Sparkles className="h-3.5 w-3.5" />
              Start with Your Requirements
            </span>
            <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-glow gradient-text sm:text-4xl md:text-5xl">
              Ready to organize your business workflows?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-muted sm:text-lg">
              Tell us what your shop, business, or foundation needs to manage.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <AnimatedButton href="/contact" size="lg">
                Discuss Your System
              </AnimatedButton>
              <a
                href={getWhatsAppUrl("Hello, I would like to discuss a custom business management system.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium text-text transition-colors hover:border-accent/50 sm:text-base"
              >
                Message on WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}