"use client";

import { useState } from "react";
import { Bot } from "lucide-react";

interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 36, className = "" }: LogoProps) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <span
        style={{ height: size, width: size }}
        className={`flex items-center justify-center rounded-lg bg-accent glow-accent ${className}`}
      >
        <Bot className="h-1/2 w-1/2 text-white" />
      </span>
    );
  }

  return (
    <div
      style={{ height: size, width: size }}
      className={`relative overflow-hidden rounded-lg ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo1.png"
        alt="Intellibot Creation logo"
        className="h-full w-full object-cover"
        onError={() => setErrored(true)}
      />
    </div>
  );
}