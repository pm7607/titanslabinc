export interface TechCategory {
  category: string;
  items: {
    name: string;
    description: string;
    tag: string;
  }[];
}

export const TECH_CATEGORIES: TechCategory[] = [
  {
    category: "Frontend & UI Engineering",
    items: [
      { name: "React", description: "Declarative UI component library", tag: "Frontend" },
      { name: "Next.js", description: "SSR & Edge framework for high-speed web apps", tag: "Full-Stack" },
      { name: "TypeScript", description: "Strongly-typed JavaScript for scalable codebases", tag: "Language" },
      { name: "Tailwind CSS", description: "Utility-first design system & styling", tag: "Styling" },
      { name: "JavaScript (ES6+)", description: "Core web interactive logic", tag: "Language" },
      { name: "Framer Motion", description: "Smooth fluid animations & interactions", tag: "Animation" }
    ]
  },
  {
    category: "Backend & Systems",
    items: [
      { name: "Node.js", description: "High-throughput asynchronous JavaScript runtime", tag: "Backend" },
      { name: "Express.js", description: "Fast, unopinionated web framework for Node", tag: "Framework" },
      { name: "Python", description: "Data science, AI/ML models & backend microservices", tag: "Backend / AI" },
      { name: "FastAPI / Flask", description: "Lightweight Python REST & API frameworks", tag: "API" },
      { name: "PHP", description: "Custom web development & legacy portal support", tag: "Backend" },
      { name: "Java", description: "Enterprise backend applications & security services", tag: "Enterprise" }
    ]
  },
  {
    category: "Database & Cloud Infrastructure",
    items: [
      { name: "PostgreSQL", description: "Advanced open-source relational database", tag: "Database" },
      { name: "MySQL", description: "Reliable structured transactional database", tag: "Database" },
      { name: "MongoDB", description: "High-performance NoSQL document store", tag: "NoSQL" },
      { name: "Cloud Infrastructure", description: "AWS, GCP & DigitalOcean cloud hosting", tag: "Cloud" },
      { name: "WordPress / WooCommerce", description: "Custom CMS & e-commerce store engines", tag: "CMS" },
      { name: "Docker & CI/CD", description: "Containerized deployment pipelines", tag: "DevOps" }
    ]
  }
];
