import {
  Bot,
  Globe,
  LayoutDashboard,
  Search,
  Users,
  Warehouse,
  ShoppingCart,
  Code2,
  ClipboardList,
  Rocket,
} from "lucide-react";
import type {
  Service,
  Project,
  TechItem,
  ProcessStep,
  ValueItem,
  NavLink,
} from "@/types";

export const siteConfig = {
  name: "Intellibot Creation",
  founder: "Muhammad Shahrukh",
  tagline: "Custom Business Management Systems in Pakistan for Retail & Foundations",
  description:
    "Custom business management systems in Pakistan for retail shops, businesses, foundations, and welfare organizations. Services include inventory, sales and expense management, member management, web applications, and AI-powered business automation.",
  email: "intellibotcreation459@gmail.com",
  whatsapp: "+92 320 5421692",
  url: "https://intellibotcreation.com",
  social: {
    linkedin: "https://www.linkedin.com/company/intellibot-creation/?viewAsMember=true",
    github: "https://github.com/MUHAMMADSHAHRUKH459",
    twitter: "https://twitter.com/intellibotcreation",
    facebook: "https://facebook.com/intellibotcreation",
  },
};

export function getWhatsAppUrl(message?: string) {
  const digits = siteConfig.whatsapp.replace(/[^0-9]/g, "");
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${digits}${text}`;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const services: Service[] = [
  {
    slug: "business-management-systems",
    icon: LayoutDashboard,
    title: "Custom Business Management Systems",
    shortDescription:
      "A business system shaped around the way your shop, business, or organization works.",
    description:
      "Bring the workflows you choose into a custom management system designed around your business or organization.",
    offerings: [
      "Custom systems for retail shops and businesses",
      "Custom systems for foundations and welfare organizations",
      "Workflows selected to fit your operations",
    ],
  },
  {
    slug: "inventory-stock-management",
    icon: Warehouse,
    title: "Inventory and Stock Management",
    shortDescription:
      "Manage inventory and stock records through a system built for your operation.",
    description:
      "Keep inventory and stock management in one purpose-built system, with workflows tailored to your business.",
    offerings: [
      "Inventory management",
      "Stock management",
      "Inventory and sales workflows",
    ],
  },
  {
    slug: "sales-expense-management",
    icon: ShoppingCart,
    title: "Sales and Expense Management",
    shortDescription:
      "Organize sales and expense management in a system suited to your business.",
    description:
      "Bring sales and expense management into your business system, with the workflows your team needs.",
    offerings: [
      "Sales management",
      "Expense management",
      "Business management system integration",
    ],
  },
  {
    slug: "member-foundation-management",
    icon: Users,
    title: "Member and Foundation Management",
    shortDescription:
      "Manage member and foundation workflows, including records, fees, and voting.",
    description:
      "Build a foundation management system around the information and processes your organization needs to manage.",
    offerings: [
      "Member biodata",
      "Fee management",
      "Voting",
      "Age-based categorization",
    ],
  },
  {
    slug: "web-applications",
    icon: Globe,
    title: "Web Applications",
    shortDescription:
      "Custom web applications designed around your business requirements.",
    description:
      "Plan and build a web application around your business requirements and intended workflows.",
    offerings: ["Custom web applications"],
  },
  {
    slug: "ai-business-automation",
    icon: Bot,
    title: "AI-powered Business Automation",
    shortDescription:
      "Apply AI-powered automation to business workflows where it fits.",
    description:
      "Explore AI-powered automation for business workflows, including voice-based sales entry as shown in the NoorParts project.",
    offerings: [
      "AI-powered business automation",
      "AI voice-based sales entry",
    ],
  },
];

export const techStack: TechItem[] = [
  { name: "Next.js" },
  { name: "React" },
  { name: "TypeScript" },
  { name: "Tailwind CSS" },
  { name: "Node.js" },
  { name: "Python" },
  { name: "PostgreSQL" },
  { name: "MongoDB" },
  { name: "Supabase" },
  { name: "Prisma" },
  { name: "OpenAI APIs" },
  { name: "Anthropic APIs" },
  { name: "Vercel" },
  { name: "GitHub" },
  { name: "REST APIs" },
  { name: "JWT Auth" },
  { name: "Cloud Deployment" },
  { name: "Modern AI Stack" },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery",
    description:
      "Understand your business, current workflows, and what the system needs to do.",
    icon: Search,
  },
  {
    step: "02",
    title: "Proposal",
    description:
      "Agree on the proposed scope, deliverables, and next steps before development.",
    icon: ClipboardList,
  },
  {
    step: "03",
    title: "Development",
    description:
      "Build the agreed system around the requirements defined together.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Delivery",
    description:
      "Deliver the completed system and walk through the agreed handover.",
    icon: Rocket,
  },
];

export const whyChooseUs: ValueItem[] = [
  { icon: Users, title: "Client-Centric Process", description: "Work together to define the system around your requirements." },
  { icon: LayoutDashboard, title: "Custom Business Systems", description: "Business management systems tailored to retail and foundation workflows." },
  { icon: Bot, title: "AI-powered Automation", description: "AI automation for business workflows where it fits." },
];

export const faqs = [
  {
    question: "What kinds of systems do you build?",
    answer:
      "Custom business management systems for retail shops, businesses, foundations, and welfare organizations, along with web applications and AI-powered business automation.",
  },
  {
    question: "Can a system cover stock, sales, and expenses?",
    answer:
      "Inventory and stock management, sales management, and expense management are available services. The project scope is discussed around your workflow.",
  },
  {
    question: "Can you help manage a foundation's members?",
    answer:
      "Foundation management systems can include member biodata, fee management, voting, and age-based categorization.",
  },
  {
    question: "How do I get started?",
    answer:
      "Share how your business or organization works and what you want the system to handle. We start with discovery, prepare a proposal, then proceed through development and delivery.",
  },
];

export const projects: Project[] = [
  {
    id: "memon-welfare-foundation",
    title: "Memon Welfare Foundation Management System",
    category: "Business Systems",
    description:
      "Member biodata, fee management, voting, and age-based categorization.",
    image: "/projects/10.jpg",
    featured: true,
  },
  {
    id: "noorparts",
    title: "NoorParts",
    category: "Business Systems",
    description:
      "Inventory and sales management with AI voice-based sales entry.",
    image: "/projects/system1.png",
    featured: true,
  },
  {
    id: "fbr-digital-invoicing",
    title: "FBR Digital Invoicing",
    category: "Business Systems",
    description: "Delivered client project.",
    image: "/projects/fbr-invoicing.png",
    featured: true,
  },
  {
    id: "school-management",
    title: "School Management System",
    category: "Business Systems",
    description: "Original project developed by me.",
    image: "/projects/Management System2.png",
  },
  {
    id: "design-genie",
    title: "Design Genie",
    category: "AI & E-commerce",
    description: "AI-powered personalized design and e-commerce platform.",
    image: "/projects/Design-Genie.png",
  },
];

export const projectCategories: (Project["category"] | "All")[] = [
  "All",
  "Business Systems",
  "AI & E-commerce",
];
