"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlowCard from "@/components/ui/GlowCard";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { services } from "@/lib/data";

export default function ServicesPreview() {
  return (
    <section className="section">
      <div className="container-custom">
        <SectionHeading
          eyebrow="What We Do"
          title="Services built for real business impact"
          description="From modern websites to autonomous AI agents — everything we build is engineered to help your business run smarter."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link key={service.slug} href={`/services#${service.slug}`} className="block h-full">
              <GlowCard className="h-full">
                <div className="flex h-full flex-col">
                  <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-light text-accent-light">
                    <service.icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg font-semibold text-text">{service.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {service.shortDescription}
                  </p>
                  <span className="mt-6 flex items-center gap-1.5 text-sm font-medium text-accent-light">
                    Learn more
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </GlowCard>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <AnimatedButton href="/services" variant="secondary">
            Explore All Services
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}