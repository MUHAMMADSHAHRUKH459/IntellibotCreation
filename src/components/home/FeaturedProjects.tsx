"use client";

import { useState } from "react";
import { ArrowUpRight, LayoutGrid } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlowCard from "@/components/ui/GlowCard";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { getWhatsAppUrl, projects } from "@/lib/data";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div className="flex h-48 w-full items-center justify-center rounded-xl bg-gradient-to-br from-navy-light to-navy">
        <LayoutGrid className="h-10 w-10 text-accent-light/50" />
      </div>
    );
  }

  return (
    <div className="relative h-48 w-full overflow-hidden rounded-xl bg-navy-light">
      {/* Keep the fallback available when a project image cannot load. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        onError={() => setErrored(true)}
        loading="lazy"
      />
    </div>
  );
}

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="section">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Our Work"
          title="Selected business systems and platforms"
          description="Explore business systems and platforms built around specific operational needs."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {featured.map((project) => (
            <GlowCard key={project.id} className="group">
              <ProjectImage src={project.image} alt={project.title} />
              <div className="mt-5">
                <span className="text-xs font-medium text-accent-light">{project.category}</span>
              </div>
              <h3 className="mt-2 text-lg font-semibold text-text">{project.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{project.description}</p>
              <a
                href={getWhatsAppUrl(`Hello, I would like to discuss a project similar to ${project.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex min-h-11 items-center gap-1.5 text-sm font-medium text-accent-light"
              >
                Ask about a similar project
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </GlowCard>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <AnimatedButton href="/projects" variant="secondary">
            View All Projects
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}