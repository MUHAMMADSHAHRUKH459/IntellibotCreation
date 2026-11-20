"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import GlowCard from "@/components/ui/GlowCard";
import { whyChooseUs } from "@/lib/data";

export default function WhyChooseUs() {
  return (
    <section className="section">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Engineering trust, one project at a time"
          description="We combine technical depth with genuine care for outcomes — the reasons clients choose to work with us again."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item) => (
            <GlowCard key={item.title}>
              <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-navy-light text-accent-light">
                <item.icon className="h-5 w-5" />
              </span>
              <h3 className="text-base font-semibold text-text">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}