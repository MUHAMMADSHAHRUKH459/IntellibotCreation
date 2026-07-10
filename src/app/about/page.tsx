import type { Metadata } from "next";
import { Bot, Award, Users, Rocket } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlowCard from "@/components/ui/GlowCard";
// import AnimatedButton from "@/components/ui/AnimatedButton";
// import AnimatedCounter from "@/components/ui/AnimatedCounter";
import GradientBlobs from "@/components/ui/GradientBlobs";
import FounderPhoto from "@/components/about/FounderPhoto";

import {
  siteConfig,
  companyValues,
  timeline,
  technologiesUsed,
//   stats,
  processSteps,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.name}'s story, mission, and the team behind our software development and AI automation agency.`,
};

const techGroups = [
  { label: "Frontend", items: technologiesUsed.frontend },
  { label: "Backend", items: technologiesUsed.backend },
  { label: "Database", items: technologiesUsed.database },
  { label: "AI Stack", items: technologiesUsed.ai },
  { label: "Infrastructure", items: technologiesUsed.infra },
];

export default function AboutPage() {
  return (
    <>
      {/* Intro */}
      <section className="section relative overflow-hidden pt-12">
        <GradientBlobs variant="subtle" />
        <div className="container-custom relative z-10 text-center">
          <span className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-navy-light/40 px-4 py-1.5 text-xs font-medium text-accent-light">
            About {siteConfig.name}
          </span>
          <h1 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight text-glow gradient-text sm:text-5xl md:text-6xl">
            We build the software modern businesses run on
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted sm:text-lg">
            {siteConfig.name} is a software development and AI automation agency
            helping businesses turn ideas into scalable, intelligent digital systems.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section">
        <div className="container-custom grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="Started with a simple belief"
              align="left"
              className="mb-6"
            />
            <p className="text-sm leading-relaxed text-muted sm:text-base">
              {siteConfig.name} began with a simple belief: businesses deserve
              software that actually fits how they work, not the other way around.
              What started as building custom tools for local businesses has grown
              into a full-service agency delivering websites, business software, and
              AI-powered systems for clients around the world.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              Today, we combine modern engineering practices with the latest in AI
              to help our clients move faster, automate the repetitive, and focus on
              what actually grows their business.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Rocket, label: "Founded", value: "2021" },
              { icon: Users, label: "Team Focus", value: "Full-Stack + AI" },
              { icon: Award, label: "Delivery", value: "Global Clients" },
              { icon: Bot, label: "Specialty", value: "AI Automation" },
            ].map((item) => (
              <GlowCard key={item.label}>
                <item.icon className="h-6 w-6 text-accent-light" />
                <p className="mt-4 text-sm font-semibold text-text">{item.value}</p>
                <p className="mt-1 text-xs text-muted">{item.label}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section">
        <div className="container-custom">
          <div className="glass-card mx-auto max-w-4xl rounded-3xl px-6 py-12 text-center sm:px-12">
            <FounderPhoto src="/founder.png" alt={siteConfig.founder} />
            <h2 className="mt-6 text-2xl font-semibold text-text sm:text-3xl">
              {siteConfig.founder}
            </h2>
            <p className="mt-1 text-sm text-accent-light">Founder, {siteConfig.name}</p>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
              &ldquo;I started {siteConfig.name} to help businesses build software
              thats genuinely useful — not bloated, not generic. Every project we
              take on is treated like its our own product, engineered to last and
              built to scale.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            eyebrow="What Drives Us"
            title="Mission, vision, and the values behind our work"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {companyValues.map((value) => (
              <GlowCard key={value.title}>
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-navy-light text-accent-light">
                  <value.icon className="h-5 w-5" />
                </span>
                <h3 className="text-base font-semibold text-text">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {value.description}
                </p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container-custom max-w-3xl">
          <SectionHeading eyebrow="Our Journey" title="How we got here" />
          <div className="relative flex flex-col gap-10 border-l border-border pl-8">
            {timeline.map((item) => (
              <div key={item.year} className="relative">
                <span className="absolute -left-[2.55rem] flex h-5 w-5 items-center justify-center rounded-full bg-accent glow-dot">
                  <span className="h-2 w-2 rounded-full bg-white" />
                </span>
                <span className="font-mono text-xs font-medium text-accent-light">
                  {item.year}
                </span>
                <h3 className="mt-1 text-base font-semibold text-text">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            eyebrow="How We Work"
            title="Our development process"
            description="A consistent, transparent process behind every project we deliver."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
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

      {/* Technologies */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Toolkit"
            title="Technologies we build with"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {techGroups.map((group) => (
              <GlowCard key={group.label}>
                <h3 className="text-sm font-semibold text-accent-light">{group.label}</h3>
                <ul className="mt-3 flex flex-col gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      {/* <section className="section relative overflow-hidden">
        <GradientBlobs variant="subtle" />
        <div className="container-custom relative z-10">
          <SectionHeading eyebrow="Achievements" title="Numbers that reflect our work" />
          <div className="glass-card rounded-3xl px-6 py-14 sm:px-12">
            <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center text-center">
                  <span className="text-4xl font-semibold tracking-tight text-glow gradient-text sm:text-5xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="mt-2 text-xs text-muted sm:text-sm">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="section">
        <div className="container-custom text-center">
          <h2 className="mx-auto max-w-xl text-2xl font-semibold text-text sm:text-3xl">
            Want to work with us?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-muted sm:text-base">
            Let&apos;s talk about your project and how we can help bring it to life.
          </p>
          <div className="mt-8 flex justify-center">
            <AnimatedButton href="/contact" size="lg">
              Get in Touch
            </AnimatedButton>
          </div>
        </div>
      </section> */} 
    </>
  );
}