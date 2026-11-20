import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import GlowCard from "@/components/ui/GlowCard";
import GradientBlobs from "@/components/ui/GradientBlobs";
import FounderPhoto from "@/components/about/FounderPhoto";
import AnimatedButton from "@/components/ui/AnimatedButton";
import {
  getWhatsAppUrl,
  siteConfig,
  services,
  processSteps,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description: `${siteConfig.name} provides custom business management systems in Pakistan for retail shops, businesses, foundations, and welfare organizations.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="section relative overflow-hidden pt-12">
        <GradientBlobs variant="subtle" />
        <div className="container-custom relative z-10 text-center">
          <span className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-navy-light/40 px-4 py-1.5 text-xs font-medium text-accent-light">
            About {siteConfig.name}
          </span>
          <h1 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight text-glow gradient-text sm:text-5xl md:text-6xl">
            Software shaped around the way your business works
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted sm:text-lg">
            {siteConfig.name} provides custom business management systems in
            Pakistan for retail shops, businesses, foundations, and welfare
            organizations.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <SectionHeading
            eyebrow="What We Build"
            title="Systems for everyday business and foundation workflows"
            description="Choose the areas you need to manage. We discuss your requirements before defining a system's scope."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <GlowCard key={service.slug} className="h-full">
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-navy-light text-accent-light">
                  <service.icon className="h-5 w-5" />
                </span>
                <h2 className="text-base font-semibold text-text">{service.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.shortDescription}
                </p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="glass-card mx-auto max-w-4xl rounded-3xl px-6 py-12 text-center sm:px-12">
            <FounderPhoto src="/founder.png" alt={siteConfig.founder} />
            <h2 className="mt-6 text-2xl font-semibold text-text sm:text-3xl">
              {siteConfig.founder}
            </h2>
            <p className="mt-1 text-sm text-accent-light">
              Founder, {siteConfig.name}
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <SectionHeading
            eyebrow="How We Work"
            title="From discovery to delivery"
            description="The project moves forward once the scope and proposal are agreed."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <GlowCard key={step.step}>
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-navy-light text-accent-light">
                  <step.icon className="h-5 w-5" />
                </span>
                <span className="font-mono text-xs text-accent-light">{step.step}</span>
                <h3 className="mt-1 text-sm font-semibold text-text">{step.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">
                  {step.description}
                </p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-custom text-center">
          <h2 className="mx-auto max-w-xl text-2xl font-semibold text-text sm:text-3xl">
            Have a system in mind?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-muted sm:text-base">
            Share what your business or organization needs to manage.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <AnimatedButton href="/contact" size="lg">
              Discuss Your Project
            </AnimatedButton>
            <a
              href={getWhatsAppUrl("Hello, I would like to discuss a business management system.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium text-text transition-colors hover:border-accent/50"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
