"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  showArrow?: boolean;
  className?: string;
}

const variantStyles: Record<string, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-light glow-accent",
  secondary:
    "glass-card text-text hover:border-accent/50",
  ghost: "text-text hover:text-accent-light",
};

const sizeStyles: Record<string, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function AnimatedButton({
  href,
  variant = "primary",
  size = "md",
  showArrow = true,
  className,
  children,
  ...props
}: AnimatedButtonProps) {
  const classes = cn(
    "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-300",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  const content = (
    <motion.span
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={classes}
    >
      {children}
      {showArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {content}
      </Link>
    );
  }

  return (
    <button {...props} className="inline-block bg-transparent">
      {content}
    </button>
  );
}