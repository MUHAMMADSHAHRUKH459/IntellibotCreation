"use client";

import { useState } from "react";
import { Bot } from "lucide-react";

interface FounderPhotoProps {
  src: string;
  alt: string;
}

export default function FounderPhoto({ src, alt }: FounderPhotoProps) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <span className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl bg-accent glow-accent">
        <Bot className="h-10 w-10 text-white" />
      </span>
    );
  }

  return (
    <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-2xl border border-border glow-accent">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        onError={() => setErrored(true)}
      />
    </div>
  );
}