import type { Metadata } from "next";
import GradientBlobs from "@/components/ui/GradientBlobs";
import AnimatedButton from "@/components/ui/AnimatedButton";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description: `Explore ${siteConfig.name}'s portfolio of websites, business software, and AI-powered systems built for clients across industries.`,
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
            Projects that showcase real business impact
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted sm:text-lg">
            A selection of websites, business systems, and AI-powered products
            we&apos;ve built for clients across industries.
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
            Let&apos;s discuss your idea and turn it into your next success story.
          </p>
          <div className="mt-8 flex justify-center">
            <AnimatedButton href="/contact" size="lg">
              Start a Project
            </AnimatedButton>
          </div>
        </div>
      </section>
    </>
  );
}