"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import AnimatedButton from "@/components/ui/AnimatedButton";
import GradientBlobs from "@/components/ui/GradientBlobs";
import { getWhatsAppUrl } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-grid">
      <GradientBlobs />

      {/* Fade to background at edges */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg/40 via-transparent to-bg" />

      <div className="container-custom relative z-10 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-navy-light/40 px-4 py-1.5 text-xs font-medium text-accent-light"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Custom software for Pakistani businesses and organizations
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight text-glow gradient-text sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Custom Business Management Systems
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base text-muted sm:text-lg"
        >
          Built around the day-to-day needs of retail shops, businesses, foundations,
          and welfare organizations — from stock, sales, and expenses to member
          management and AI-powered automation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <AnimatedButton href="/contact" size="lg">
            Discuss Your System
          </AnimatedButton>
          <AnimatedButton href="/projects" variant="secondary" size="lg" showArrow={false}>
            <Play className="h-4 w-4" />
            View Projects
          </AnimatedButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted"
        >
          <a
            href={getWhatsAppUrl("Hello, I would like to discuss a custom business management system.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-5 py-2.5 text-accent-light transition-colors hover:border-accent/50 hover:text-text"
          >
            <ArrowRight className="h-3.5 w-3.5" />
            Ask on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}