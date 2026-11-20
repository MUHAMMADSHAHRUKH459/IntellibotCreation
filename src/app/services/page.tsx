import type { Metadata } from "next";
import { Check } from "lucide-react";
import AnimatedButton from "@/components/ui/AnimatedButton";
import GradientBlobs from "@/components/ui/GradientBlobs";
import { getWhatsAppUrl, services, siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description: `Explore ${siteConfig.name}'s custom business management systems, inventory, sales and expense management, foundation management, web applications, and AI-powered business automation.`,
};

export default function ServicesPage() {
  return (
    <>
      {/* Intro */}
      <section className="section relative overflow-hidden pt-12">
        <GradientBlobs variant="subtle" />
        <div className="container-custom relative z-10 text-center">
          <span className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-navy-light/40 px-4 py-1.5 text-xs font-medium text-accent-light">
            Our Services
          </span>
          <h1 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight text-glow gradient-text sm:text-5xl md:text-6xl">
            Custom systems for the way your business works
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted sm:text-lg">
            Business management systems for retail shops, businesses, foundations,
            and welfare organizations.
          </p>
        </div>
      </section>

      {/* Individual services */}
      {services.map((service, index) => (
        <section
          key={service.slug}
          id={service.slug}
          className={cn("section scroll-mt-24", index % 2 === 1 && "bg-navy/40")}
        >
          <div className="container-custom">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-light text-accent-light glow-accent">
                  <service.icon className="h-7 w-7" />
                </span>
                <h2 className="text-2xl font-semibold tracking-tight text-text sm:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                  {service.description}
                </p>

                <div className="mt-8">
                  <h3 className="text-sm font-semibold text-accent-light">Service scope</h3>
                  <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {service.offerings.map((offering) => (
                      <li key={offering} className="flex items-start gap-2 text-sm text-muted">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-light" />
                        {offering}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <AnimatedButton href="/contact" size="md">
                    Discuss Your Requirements
                  </AnimatedButton>
                </div>
              </div>

              <div className="glass-card rounded-3xl p-8 sm:p-10">
                <h3 className="text-xl font-semibold text-text">
                  Looking for {service.title.toLowerCase()}?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Share what your business or organization needs to manage, and we
                  can discuss the right scope for a system.
                </p>
                <a
                  href={getWhatsAppUrl(`Hello, I would like to discuss ${service.title.toLowerCase()}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium text-text transition-colors hover:border-accent/50"
                >
                  Ask on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Final CTA */}
      <section className="section relative overflow-hidden">
        <div className="container-custom">
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-navy px-6 py-16 text-center sm:px-12 sm:py-20">
            <GradientBlobs />
            <div className="relative z-10">
              <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-glow gradient-text sm:text-4xl">
                Not sure which service fits your project?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base text-muted">
                Tell us what you are building so we can discuss the scope and next
                steps.
              </p>
              <div className="mt-10 flex justify-center">
                <AnimatedButton href="/contact" size="lg">
                  Discuss Your Requirements
                </AnimatedButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}