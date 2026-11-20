"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, LayoutGrid } from "lucide-react";
import GlowCard from "@/components/ui/GlowCard";
import { getWhatsAppUrl, projects, projectCategories } from "@/lib/data";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div className="flex h-52 w-full items-center justify-center rounded-xl bg-gradient-to-br from-navy-light to-navy">
        <LayoutGrid className="h-10 w-10 text-accent-light/50" />
      </div>
    );
  }

  return (
    <div className="relative h-52 w-full overflow-hidden rounded-xl bg-navy-light">
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

function ProjectCard({ project }: { project: Project }) {
  return (
    <GlowCard className="group">
      <ProjectImage src={project.image} alt={project.title} />
      <div className="mt-5 flex items-center justify-between gap-2">
        <span className="text-xs font-medium text-accent-light">{project.category}</span>
      </div>
      <h3 className="mt-2 text-lg font-semibold text-text">{project.title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted">{project.description}</p>

      <a
        href={getWhatsAppUrl(`Hello, I would like to discuss a project similar to ${project.title}.`)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-accent-light transition-colors hover:text-text"
      >
        Ask about a similar project
        <ArrowUpRight className="h-4 w-4" />
      </a>
    </GlowCard>
  );
}

export default function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState<(typeof projectCategories)[number]>("All");

  const filtered = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div>
      {/* Filters */}
      <div className="mb-12 flex flex-wrap justify-center gap-3">
        {projectCategories.map((category) => (
          <button
            key={category}
            type="button"
            aria-pressed={activeCategory === category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "rounded-full border px-5 py-2 text-sm font-medium transition-colors duration-200",
              activeCategory === category
                ? "border-accent bg-accent text-white glow-accent"
                : "border-border text-muted hover:border-accent/40 hover:text-text"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="py-20 text-center text-sm text-muted">
          No projects found in this category yet.
        </p>
      )}
    </div>
  );
}