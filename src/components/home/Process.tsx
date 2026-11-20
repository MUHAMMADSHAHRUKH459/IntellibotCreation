"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/data";

export default function Process() {
  return (
    <section className="section relative">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Our Process"
          title="A clear path from idea to delivery"
          description="We align on what you need, agree on a proposal, then build and deliver the system."
        />

        <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* Connecting line for large screens */}
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-border-strong to-transparent lg:block" />

          {processSteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative flex flex-col items-center text-center"
            >
              <span className="relative z-10 mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-navy glass-card text-accent-light">
                <step.icon className="h-6 w-6" />
              </span>
              <span className="mb-2 font-mono text-xs font-medium text-accent-light">
                {step.step}
              </span>
              <h3 className="text-base font-semibold text-text">{step.title}</h3>
              <p className="mt-2 max-w-[14rem] text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}