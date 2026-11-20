"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ShoppingCart, Users } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlowCard from "@/components/ui/GlowCard";

const audiences = [
  {
    icon: ShoppingCart,
    title: "Retail shops and businesses",
    problem:
      "When stock, daily sales, and expenses are tracked separately, keeping a clear view of operations can be difficult.",
    solution:
      "Bring inventory, sales, and expense workflows into a custom business management system.",
  },
  {
    icon: Users,
    title: "Foundations and welfare organizations",
    problem:
      "Member biodata, fees, voting, and age-based categories need records that fit the way your foundation works.",
    solution:
      "Manage foundation workflows with a system built around your members and processes.",
  },
];

export default function BusinessProblems() {
  return (
    <section className="section pt-0">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Who We Help"
          title="Less scattered work. More organized operations."
          description="We build custom business management systems around the work retail businesses and foundations need to manage."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlowCard className="h-full">
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-light text-accent-light">
                  <audience.icon className="h-6 w-6" />
                </span>
                <h3 className="text-xl font-semibold text-text">{audience.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                  {audience.problem}
                </p>
                <p className="mt-3 text-sm font-medium leading-relaxed text-text sm:text-base">
                  {audience.solution}
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-accent-light transition-colors hover:text-text"
                >
                  Discuss your requirements
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
