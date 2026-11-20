import type { Metadata } from "next";
import GradientBlobs from "@/components/ui/GradientBlobs";
import AnimatedButton from "@/components/ui/AnimatedButton";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import { getWhatsAppUrl, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description: `Explore ${siteConfig.name}'s confirmed projects, including business management systems, FBR digital invoicing, and an AI-powered design and e-commerce platform.`,
};

export default function ProjectsPage() {
  return (
    <>
      <section className="section relative overflow-hidden pt-12">
        <GradientBlobs variant="subtle" />
        <div className="container-custom relative z-10 text-center">
          <span className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-navy-light/40 px-4 py-1.5 text-xs font-medium text-accent-light">
            Our Portfolio
          </span>
          <h1 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight text-glow gradient-text sm:text-5xl md:text-6xl">
            Selected systems and platforms
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted sm:text-lg">
            Explore business management systems for retail and foundations, FBR
            digital invoicing, a school management project, and Design Genie.
          </p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-custom">
          <ProjectsGrid />
        </div>
      </section>

      <section className="section">
        <div className="container-custom text-center">
          <h2 className="mx-auto max-w-xl text-2xl font-semibold text-text sm:text-3xl">
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-muted sm:text-base">
            Tell us about the system or workflow you want to improve.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <AnimatedButton href="/contact" size="lg">
              Discuss Your Project
            </AnimatedButton>
            <a
              href={getWhatsAppUrl("Hello, I would like to discuss a business system project.")}
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