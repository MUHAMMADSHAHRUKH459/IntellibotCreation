import type { LucideIcon } from "lucide-react";

export type ServiceCategory =
  | "web-development"
  | "software-development"
  | "ai-chatbot"
  | "ai-agent";

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface Service {
  slug: ServiceCategory;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  description: string;
  offerings: string[];
  features: ServiceFeature[];
  process: string[];
}

export type ProjectCategory =
  | "Web Development"
  | "Software Development"
  | "AI Chatbot"
  | "AI Agent";

export type ProjectStatus = "Live" | "Completed" | "In Progress";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  status: ProjectStatus;
  liveUrl?: string;
  caseStudyUrl?: string;
  featured?: boolean;
}

export interface TechItem {
  name: string;
  icon?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar?: string;
  rating: number;
}

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
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

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
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