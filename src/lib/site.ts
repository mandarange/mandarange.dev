import {
  Database,
  Repeat,
  Shield,
  Users,
  FileText,
  Bot,
  Linkedin,
  Youtube,
  BookOpen,
  ExternalLink,
  type LucideIcon,
} from "lucide-react";

export const SITE = {
  name: "Mandarange",
  title: "Daniel Choi",
  email: "cdw0424@gmail.com",
  url: "https://mandarange.dev",
  locale: "en_US",
  tagline:
    "Eliminate data contradictions, design for operational simplicity, and systematize team velocity through documentation, standards, and tooling\u2014so it stays sustainable even in the AI era.",
  description:
    "From game graphics and shader development to web, app, and platform architecture\u2014I build products that ship and systems teams can trust.",
  keywords: [
    "Daniel Choi",
    "software engineer",
    "CTO",
    "platform architecture",
    "SSOT",
    "data integrity",
    "operational reliability",
    "K-beauty commerce",
    "cross-platform development",
    "system design",
    "engineering leadership",
    "Spring Boot",
    "Next.js",
    "React",
    "Flutter",
    "Unity",
  ],
} as const;

export interface SocialLink {
  name: string;
  href: string;
  icon: LucideIcon;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/daniel-choi-a736a322b/", icon: Linkedin },
  { name: "YouTube", href: "https://www.youtube.com/channel/UCMgGulF7OOaIyFfwh-ekFXA", icon: Youtube },
  { name: "Blog", href: "https://m.blog.naver.com/PostList.naver?blogId=cdw0424&tab=1", icon: BookOpen },
] as const;

export interface CompanyLink {
  name: string;
  href: string;
  role: string;
  icon: LucideIcon;
}

export const COMPANY_LINKS: CompanyLink[] = [
  { name: "Hypercape", href: "https://biz.hypercape.com/", role: "CTO", icon: ExternalLink },
  { name: "WeKlem", href: "https://www.weklem.com/", role: "CEO", icon: ExternalLink },
] as const;

export const ALL_EXTERNAL_LINKS: SocialLink[] = [
  ...SOCIAL_LINKS,
  ...COMPANY_LINKS.map((c) => ({ name: c.name, href: c.href, icon: c.icon })),
];

export interface Pillar {
  id: string;
  icon: LucideIcon;
  title: string;
  thesis: string;
  bullets: string[];
}

export const PILLARS: Pillar[] = [
  {
    id: "ssot",
    icon: Database,
    title: "Data IS the Product",
    thesis:
      "SSOT is the top priority. Copies breed operational cost explosions. DB contradictions, circular refs, and ambiguous ownership are the most dangerous tech debt.",
    bullets: [
      "Single Source of Truth for every domain concept",
      "Normalization eliminates contradictions, not for show",
      "Price, inventory, state\u2014always ask \u201cwho is canonical?\u201d",
      "Schema reviews before feature reviews",
    ],
  },
  {
    id: "ops",
    icon: Repeat,
    title: "Operational Simplicity",
    thesis:
      "Idempotent operations, transactional consistency, and clear state management. If an operation can fail halfway, it will. Design for it.",
    bullets: [
      "Idempotency by default on every write path",
      "Transactional boundaries explicitly designed",
      "Retry-safe, crash-safe, restart-safe",
      "State machines over boolean flags",
    ],
  },
  {
    id: "security",
    icon: Shield,
    title: "Security as Infrastructure",
    thesis:
      "Not an afterthought bolted on later. Enforced at the DB and policy level. Audit trails, IP restrictions, admin tooling\u2014manageable security for real-world ops.",
    bullets: [
      "Row-level security and policy-level enforcement",
      "Audit trails on every mutation",
      "Admin tooling with IP restrictions and approval flows",
      "Secrets management as a first-class concern",
    ],
  },
  {
    id: "systems",
    icon: Users,
    title: "Systems Beat Individuals",
    thesis:
      "Dev Standards, PR/review routines, checklists, and decision records. Consistent systems always outperform individual heroics.",
    bullets: [
      "Standards codified, not memorized",
      "PR templates and review checklists enforced",
      "ADRs for every non-trivial decision",
      "Onboarding measured in hours, not weeks",
    ],
  },
  {
    id: "docs",
    icon: FileText,
    title: "Documentation as Operational Tools",
    thesis:
      "Not decoration. PRDs, playbooks, decision records, migration scenarios, and checklists. They recur because they work.",
    bullets: [
      "Runbooks for every critical path",
      "Migration playbooks before every deploy",
      "Incident postmortems as learning infrastructure",
      "Living docs that evolve with the system",
    ],
  },
  {
    id: "ai",
    icon: Bot,
    title: "AI-Era Readiness",
    thesis:
      "Documentation and structure must be machine-readable. AI doesn\u2019t replace engineers\u2014engineers who structure knowledge for AI access multiply their output.",
    bullets: [
      "Machine-readable schemas and documentation",
      "AI-friendly code structure and naming",
      "Automated workflows that AI agents can extend",
      "Knowledge as a compounding competitive advantage",
    ],
  },
];

export const COMPANIES = [
  {
    role: "CTO",
    name: "Hypercape Inc.",
    description:
      "K-beauty commerce and supply-chain systems. Architecting Shopify-integrated dropshipping and fulfillment pipelines at scale.",
    stack: ["Java", "Spring Boot", "JPA", "MySQL", "AWS", "Next.js"],
    href: "https://biz.hypercape.com/",
  },
  {
    role: "CEO",
    name: "WeKlem Inc.",
    description:
      "Full-service web, app, and game development studio. Cross-platform engineering with patented technology, est. 2021.",
    stack: ["React", "Flutter", "Unity", "Node.js"],
    href: "https://www.weklem.com/",
  },
] as const;

export const TIMELINE = [
  { year: "2021", event: "Founded WeKlem Studio. Acquired certifications and filed initial patents." },
  { year: "2023", event: "Incorporated WeKlem as a corporation. Launched apps and games; exhibited at industry events." },
  { year: "2024", event: "Patent registered. Expanded WeKlem product portfolio." },
  { year: "2025", event: "Joined Hypercape Inc. as CTO to architect K-beauty commerce infrastructure." },
  { year: "Now", event: "Operating K-beauty commerce platform at Hypercape and cross-platform dev business at WeKlem." },
] as const;
