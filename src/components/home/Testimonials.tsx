"use client";

import { Star, Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlowCard from "@/components/ui/GlowCard";
import { testimonials } from "@/lib/data";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by businesses that value results"
          description="Real feedback from clients we've partnered with to build their digital systems."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {testimonials.map((t) => (
            <GlowCard key={t.id}>
              <Quote className="h-7 w-7 text-accent/40" />
              <div className="mt-4 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent-light text-accent-light" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-text">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-light text-sm font-semibold text-accent-light">
                  {initials(t.name)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-text">{t.name}</p>
                  <p className="text-xs text-muted">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}