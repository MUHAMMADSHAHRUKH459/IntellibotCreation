"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import GradientBlobs from "@/components/ui/GradientBlobs";
import { stats } from "@/lib/data";

export default function Stats() {
  return (
    <section className="section relative overflow-hidden">
      <GradientBlobs variant="subtle" />
      <div className="container-custom relative z-10">
        <div className="glass-card rounded-3xl px-6 py-14 sm:px-12">
          <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <span className="text-4xl font-semibold tracking-tight text-glow gradient-text sm:text-5xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="mt-2 text-xs text-muted sm:text-sm">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}