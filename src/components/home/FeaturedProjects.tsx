"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, LayoutGrid } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlowCard from "@/components/ui/GlowCard";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

const statusStyles: Record<string, string> = {
  Live: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Completed: "bg-accent/10 text-accent-light border-accent/20",
  "In Progress": "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

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
      {/* Plain <img> on purpose: avoids Next.js image optimizer errors while
          placeholder images don't exist yet in /public/projects. Swap back to
          next/image once real project screenshots are added. */}
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
          title="Featured projects that speak for themselves"
          description="A selection of systems and platforms we've built for businesses across industries."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {featured.map((project) => (
            <GlowCard key={project.id} className="group">
              <ProjectImage src={project.image} alt={project.title} />
              <div className="mt-5 flex items-center justify-between gap-2">
                <span className="text-xs font-medium text-accent-light">{project.category}</span>
                <span
                  className={cn(
                    "rounded-full border px-2.5 py-0.5 text-[11px] font-medium",
                    statusStyles[project.status]
                  )}
                >
                  {project.status}
                </span>
              </div>
              <h3 className="mt-2 text-lg font-semibold text-text">{project.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-navy-light px-2.5 py-1 text-[11px] text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href="/projects"
                className="mt-5 flex items-center gap-1.5 text-sm font-medium text-accent-light"
              >
                View project
                <ArrowUpRight className="h-4 w-4" />
              </Link>
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