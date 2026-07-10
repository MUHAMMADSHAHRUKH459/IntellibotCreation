"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import AnimatedButton from "@/components/ui/AnimatedButton";
import GradientBlobs from "@/components/ui/GradientBlobs";

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
              Let&apos;s Build Something Great
            </span>
            <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-glow gradient-text sm:text-4xl md:text-5xl">
              Ready to turn your idea into intelligent software?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-muted sm:text-lg">
              Tell us about your project and let&apos;s discuss how we can help you
              build, automate, and scale with confidence.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <AnimatedButton href="/contact" size="lg">
                Start Your Project
              </AnimatedButton>
              <AnimatedButton href="/projects" variant="ghost" size="lg" showArrow={false}>
                See our work first
              </AnimatedButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}