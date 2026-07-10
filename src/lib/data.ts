import {
  Globe,
  LayoutDashboard,
  Users,
  AppWindow,
  Building2,
  Boxes,
  Warehouse,
  ShoppingCart,
  School,
  ClipboardList,
  HeartPulse,
  Wrench,
  MessageSquareText,
  Target,
  BookOpenText,
  Bot,
  Sparkles,
  Workflow,
  GitBranch,
  Search,
  UserCog,
  Cpu,
  Lightbulb,
  PenTool,
  Code2,
  Rocket,
  ShieldCheck,
  Eye,
  Heart,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type {
  Service,
  Project,
  TechItem,
  Testimonial,
  StatItem,
  FaqItem,
  ProcessStep,
  TimelineItem,
  ValueItem,
  NavLink,
} from "@/types";

export const siteConfig = {
  name: "Intellibot Creation",
  founder: "Muhammad Shahrukh",
  tagline: "Building Intelligent Software for Modern Businesses",
  description:
    "A software development and AI automation agency building scalable digital systems and AI-powered solutions for modern businesses worldwide.",
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

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const services: Service[] = [
  {
    slug: "web-development",
    icon: Globe,
    title: "Custom Web Development",
    shortDescription:
      "Modern, high-performance business websites and web applications built for growth.",
    description:
      "We design and build modern business websites, admin dashboards, client portals, and custom web applications that scale with your business, engineered with the latest frontend and backend technologies.",
    offerings: [
      "Modern business websites",
      "Company websites",
      "Admin dashboards",
      "Client portals",
      "Custom web applications",
    ],
    features: [
      { title: "Pixel-perfect UI", description: "Interfaces crafted with precision and consistency across every device." },
      { title: "Blazing performance", description: "Optimized for speed with modern rendering and caching strategies." },
      { title: "Scalable architecture", description: "Codebases structured to grow with your product roadmap." },
      { title: "SEO-first build", description: "Technical SEO baked in from the first line of code." },
    ],
    process: ["Discovery & planning", "UI/UX design", "Development", "Testing & QA", "Launch & support"],
  },
  {
    slug: "software-development",
    icon: LayoutDashboard,
    title: "Software Development",
    shortDescription:
      "Business-critical software including ERP, CRM, POS, and management systems.",
    description:
      "We engineer robust business software tailored to your operations — from ERP and CRM systems to POS, inventory, and hospital management platforms — built to handle real-world scale and complexity.",
    offerings: [
      "Business software",
      "ERP systems",
      "CRM systems",
      "Inventory systems",
      "Moile Inventory systems",
      "School management systems",
      "HR & payroll systems",
      "Hospital management systems",
      "Custom internal tools",
    ],
    features: [
      { title: "Tailored workflows", description: "Software modeled around how your business actually operates." },
      { title: "Data integrity", description: "Reliable, auditable systems for financial and operational data." },
      { title: "Role-based access", description: "Granular permissions for teams, departments, and clients." },
      { title: "Cloud-native", description: "Deployed on modern, resilient cloud infrastructure." },
    ],
    process: ["Requirement analysis", "System architecture", "Development", "Integration & testing", "Deployment & training"],
  },
  {
    slug: "ai-chatbot",
    icon: MessageSquareText,
    title: "AI Chatbot Development",
    shortDescription:
      "Intelligent chatbots that support customers, qualify leads, and answer questions instantly.",
    description:
      "We build AI-powered chatbots that understand your business context, support your customers around the clock, and turn conversations into qualified leads and sales.",
    offerings: [
      "Customer support chatbots",
      "Lead generation bots",
      "AI knowledge base chatbots",
      "Website AI assistants",
      "Business AI chatbots",
    ],
    features: [
      { title: "Natural conversations", description: "Powered by modern LLMs for human-like, context-aware replies." },
      { title: "Knowledge grounding", description: "Trained on your docs, FAQs, and business data for accurate answers." },
      { title: "Omnichannel", description: "Deployable on your website, WhatsApp, and internal tools." },
      { title: "Analytics built-in", description: "Track conversations, conversions, and satisfaction." },
    ],
    process: ["Use-case discovery", "Knowledge base setup", "Bot design & training", "Integration", "Launch & monitoring"],
  },
  {
    slug: "ai-agent",
    icon: Bot,
    title: "AI Agent Development",
    shortDescription:
      "Autonomous AI agents that automate workflows and internal business processes.",
    description:
      "We design custom AI agents that go beyond conversation — automating workflows, researching data, generating leads, and acting as intelligent digital employees inside your business.",
    offerings: [
      "Custom AI agents",
      "Workflow automation",
      "Business process automation",
      "AI research agents",
      "Lead generation agents",
      "AI assistants",
      "Internal company AI systems",
    ],
    features: [
      { title: "Task autonomy", description: "Agents that plan and execute multi-step tasks independently." },
      { title: "Tool integration", description: "Connected to your APIs, databases, and business tools." },
      { title: "Human-in-the-loop", description: "Configurable oversight for critical decisions." },
      { title: "Continuous learning", description: "Improves accuracy as it works with your data over time." },
    ],
    process: ["Process mapping", "Agent architecture", "Development & training", "Safety testing", "Deployment & iteration"],
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
  { step: "01", title: "Discovery", description: "We study your business, goals, and users to define the right solution.", icon: Search },
  { step: "02", title: "Design", description: "Wireframes and UI design focused on clarity, trust, and conversion.", icon: PenTool },
  { step: "03", title: "Development", description: "Clean, scalable code built with modern frameworks and best practices.", icon: Code2 },
  { step: "04", title: "Testing", description: "Rigorous QA across devices to make sure everything just works.", icon: ShieldCheck },
  { step: "05", title: "Launch", description: "Deployment, monitoring, and ongoing support after go-live.", icon: Rocket },
];

export const whyChooseUs: ValueItem[] = [
  { icon: Cpu, title: "AI-First Engineering", description: "We build with AI at the core, not as an afterthought." },
  { icon: Zap, title: "Fast, Reliable Delivery", description: "Clear timelines and consistent communication throughout." },
  { icon: ShieldCheck, title: "Production-Grade Quality", description: "Code that's tested, secure, and built to scale." },
  { icon: Users, title: "Client-Centric Process", description: "Transparent collaboration from discovery to launch." },
  { icon: Boxes, title: "Full-Stack Capability", description: "Web, software, and AI systems under one roof." },
  { icon: Heart, title: "Long-Term Partnership", description: "We support and grow with you after the project ships." },
];

export const stats: StatItem[] = [
  { label: "Projects Delivered", value: 40, suffix: "+" },
  { label: "Client Satisfaction", value: 98, suffix: "%" },
  { label: "Technologies Mastered", value: 20, suffix: "+" },
  { label: "Years of Combined Experience", value: 6, suffix: "+" },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Ahmed Raza",
    role: "CEO",
    company: "Retail Chain Pvt Ltd",
    quote:
      "Intellibot Creation delivered our inventory and POS system ahead of schedule. The team understood our operations better than we expected.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Sarah Whitmore",
    role: "Operations Director",
    company: "MedCare Hospitals",
    quote:
      "Our hospital management system has completely streamlined patient records and billing. Professional, responsive, and technically excellent.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Bilal Farooq",
    role: "Founder",
    company: "EduTrack Systems",
    quote:
      "The AI chatbot they built now handles over 70% of our support queries automatically. It paid for itself within two months.",
    rating: 5,
  },
  {
    id: "t4",
    name: "James Carter",
    role: "Head of Growth",
    company: "Northbridge Consulting",
    quote:
      "From strategy to deployment, Intellibot Creation felt like an extension of our own team. Our new client portal looks and feels premium.",
    rating: 5,
  },
];

export const faqs: FaqItem[] = [
  {
    question: "What kind of businesses do you work with?",
    answer:
      "We work with startups, SMEs, and enterprises across industries including retail, healthcare, education, and hospitality — anyone who needs a modern website, custom software, or AI automation.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines depend on scope. A business website typically takes 2-4 weeks, while custom software or AI agent systems can take 6-12 weeks depending on complexity.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. Every project includes a post-launch support window, and we offer ongoing maintenance and improvement plans for long-term partners.",
  },
  {
    question: "Can you integrate AI into our existing system?",
    answer:
      "Absolutely. We regularly integrate AI chatbots, agents, and automation into existing websites, CRMs, and internal tools without disrupting current operations.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes, we work with clients globally and are set up for remote collaboration across time zones, with clear communication and milestone-based delivery.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We offer both fixed-price packages for well-defined projects and milestone-based pricing for larger, evolving systems. Contact us for a tailored quote.",
  },
];

export const timeline: TimelineItem[] = [
  { year: "2021", title: "The Idea", description: "Founder Muhammad Shahrukh starts building custom software for local businesses." },
  { year: "2022", title: "Going Full-Stack", description: "Expanded into complete business systems — ERP, CRM, and management platforms." },
  { year: "2023", title: "AI Integration", description: "Began building AI chatbots and automation tools for clients across industries." },
  { year: "2024", title: "Intellibot Creation", description: "Formally established as an agency focused on software and AI-powered solutions." },
  { year: "2025", title: "Going Global", description: "Expanded services to international clients with a focus on scalable digital systems." },
];

export const projects: Project[] = [
  {
    id: "school-management",
    title: "School Management System",
    category: "Software Development",
    description: "A complete platform for managing admissions, attendance, exams, and fee collection.",
    image: "/projects/Management System2.png",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    features: ["Student & staff records", "Attendance tracking", "Exam & result management", "Fee & billing module"],
    status: "Live",
    featured: true,
  },
  {
    id: "inventory-management",
    title: "Inventory Management System",
    category: "Software Development",
    description: "Real-time inventory tracking system with multi-warehouse support and low-stock alerts.",
    image: "/projects/system1.png",
    technologies: ["React", "Next.js", "Supabase", "Tailwind CSS"],
    features: ["Multi-warehouse tracking", "Low-stock alerts", "Supplier management", "Reporting dashboard"],
    status: "Live",
  },
  {
    id: "Foundation Management System",
    title: "Foundation Management System",
    category: "Software Development",
    description: "A comprehensive platform for managing donations, volunteers, and events for non-profit organizations.",
    image: "/projects/10.jpg",
    technologies: ["Next.js", "Supabase", "TypeScript"],
    features: ["Offline mode", "Receipt printing", "Multi-branch sync", "Sales analytics"],
    status: "Live",
    featured: true,
  },
  {
    id: "AI-powered legal agent",
    title: "AI-powered legal agent",
    category: "AI Agent",
    description: "An AI-powered legal assistant that helps with document review, case research, and legal drafting.",
    image: "/projects/ai-legal-agent.png",
    technologies: ["OpenAI API", "Next.js", "Vector DB"],
    features: ["Document review", "Case research", "Legal drafting", "Contract analysis"],
    status: "Live",
  },
  {
    id: "AI-Employee agent",
    title: "AI-Employee",
    category: "AI Agent",
    description: "An AI-powered employee assistance tool for handling routine queries and tasks.",
    image: "/projects/ai.png",
    technologies: ["OpenAI API", "Next.js", "Vector DB", "NeonDB", "python"],
    features: ["Automated responses", "Task management", "Knowledge base access", "Performance analytics"],
    status: "Live",
    featured: true,
  },
  {
    id: "Design Genie - AI-Powered E-Commerce Platform",
    title: "Design Genie - AI-Powered E-Commerce Platform",
    category: "AI Agent",
    description: "An AI-powered platform for creating and managing e-commerce websites with design automation.",
    image: "/projects/Design-Genie.png",
    technologies: ["OpenAI API", "Next.js", "Vector DB", "Tailwind CSS", "TypeScript", "Supabase", "python"],
    features: ["Design automation", "Product catalog management", "Customer segmentation", "Sales analytics"],
    status: "Live",
    featured: true,
  },
  {
    id: "ai-therapist-chatbot",
    title: "AI Therapist Chatbot",
    category: "AI Chatbot",
    description: "A compassionate AI chatbot designed to provide mental health support and counseling.",
    image: "/projects/ai-therapist-chatbot.png",
    technologies: ["OpenAI API", "Next.js", "Vector DB", "Tailwind CSS", "TypeScript", "Supabase", "python"],
    features: ["Lead qualification", "Automated follow-ups", "Calendar booking", "CRM sync"],
    status: "In Progress",
  },
  {
    id: "restaurant-ordering",
    title: "Restaurant Ordering System",
    category: "Web Development",
    description: "An online ordering platform with live order tracking for restaurants and cafes.",
    image: "/projects/restaurant-ordering.png",
    technologies: ["Next.js", "Stripe", "Supabase", "Tailwind CSS", "TypeScript", "Recharts"],
    features: ["Online ordering", "Live order tracking", "Menu management", "Payment integration"],
    status: "Live",
  },
  {
    id: "FBR Digital Invoicing System",
    title: "FBR Digital Invoicing System",
    category: "Software Development",
    description: "A digital invoicing solution for businesses to streamline their billing and accounting processes.",
    image: "/projects/fbr-invoicing.png",
    technologies: ["React", "TypeScript", "Recharts", "Supabase", "Tailwind CSS", "Next.js", "Sanbox"],
    features: ["Real-time analytics", "Custom reports", "Role-based views", "Export & sharing"],
    status: "Completed",
  },
];

export const projectCategories: (Project["category"] | "All")[] = [
  "All",
  "Web Development",
  "Software Development",
  "AI Chatbot",
  "AI Agent",
];

export const technologiesUsed = {
  frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"] as string[],
  backend: ["Node.js", "Python", "REST APIs", "JWT Authentication"] as string[],
  database: ["PostgreSQL", "MongoDB", "Supabase", "Prisma"] as string[],
  ai: ["OpenAI APIs", "Anthropic APIs", "Modern AI Stack"] as string[],
  infra: ["Vercel", "GitHub", "Cloud Deployment"] as string[],
};

export const companyValues: ValueItem[] = [
  { icon: Target, title: "Mission", description: "To help businesses become smarter, faster, and more efficient through custom software and AI." },
  { icon: Eye, title: "Vision", description: "To be a trusted global partner for intelligent software and automation solutions." },
  { icon: Lightbulb, title: "Innovation", description: "We stay ahead of the curve, adopting the technologies that matter, not just the trends." },
  { icon: ShieldCheck, title: "Integrity", description: "Transparent pricing, honest timelines, and code you can trust." },
];