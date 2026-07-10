"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradientBlobsProps {
  className?: string;
  variant?: "default" | "subtle";
}

export default function GradientBlobs({ className, variant = "default" }: GradientBlobsProps) {
  const opacity = variant === "subtle" ? 0.12 : 0.22;

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <motion.div
        className="absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full blur-[120px]"
        style={{ background: "var(--color-accent)", opacity }}
        animate={{
          x: [0, 60, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full blur-[120px]"
        style={{ background: "var(--color-accent-light)", opacity: opacity * 0.8 }}
        animate={{
          x: [0, -50, 0],
          y: [0, 60, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 h-[24rem] w-[24rem] rounded-full blur-[110px]"
        style={{ background: "var(--color-accent-dim)", opacity: opacity * 0.9 }}
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}