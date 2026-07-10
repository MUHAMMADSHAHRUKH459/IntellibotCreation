"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { techStack } from "@/lib/data";

export default function TechStack() {
  // Duplicate the list so the marquee loops seamlessly
  const items = [...techStack, ...techStack];

  return (
    <section className="section overflow-hidden">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Modern Technologies"
          title="Powered by a modern, battle-tested stack"
          description="We build with tools trusted by the world's best engineering teams — for speed, scale, and reliability."
        />
      </div>

      <div className="relative">
        {/* Edge fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent sm:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent sm:w-40" />

        <motion.div
          className="flex w-max gap-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {items.map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="glass-card flex shrink-0 items-center rounded-full px-6 py-3 text-sm font-medium text-text"
            >
              {tech.name}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}