import type { LucideIcon } from "lucide-react";

export type ServiceCategory =
  | "business-management-systems"
  | "inventory-stock-management"
  | "sales-expense-management"
  | "member-foundation-management"
  | "web-applications"
  | "ai-business-automation";

export interface Service {
  slug: ServiceCategory;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  description: string;
  offerings: string[];
}

export type ProjectCategory =
  | "Business Systems"
  | "AI & E-commerce";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  image: string;
  featured?: boolean;
}

export interface TechItem {
  name: string;
  icon?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ValueItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}