export const COMPANY_INFO = {
  name: "Titanslab Inc.",
  tagline: "Technology & Digital Solutions Partner",
  email: "titanslabinc@gmail.com",
  phone: "+91 97121 17087",
  whatsappNumber: "+919712117087",
  location: "Rajkot, Gujarat, India",
  socials: {
    facebook: "https://facebook.com/titanslabinc",
    instagram: "https://www.instagram.com/titanslabinc/",
    linkedin: "https://www.linkedin.com/company/titanslab-inc/"
  },
  stats: [
    { value: "20+", label: "Completed Projects", sub: "Web, SaaS & Automation" },
    { value: "Global", label: "Client Reach", sub: "Multi-country delivery" },
    { value: "99.9%", label: "System Uptime", sub: "Cloud SLA guarantee" },
    { value: "24/7", label: "Technical Support", sub: "Dedicated maintenance" }
  ]
};

export interface TeamMember {
  name: string;
  role: string;
  badge: string;
  email: string;
  bio: string;
  image: string;
  whatsapp: string;
  instagram: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Anjan Patel",
    role: "Founder · Tech Titan",
    badge: "Founder",
    email: "al@titanslab.in",
    bio: "Anjan Patel is a multifaceted professional with a unique blend of skills in design and development.",
    image: "/our-team/anjan.webp",
    whatsapp: "https://wa.me/+916352078531",
    instagram: "https://www.instagram.com/anjan_patel__?igsh=aDU1OWNtdGp0YW85"
  },
  {
    name: "Dhyey Kathiriya",
    role: "Founder · Chief Titan",
    badge: "Founder",
    email: "dk@titanslab.in",
    bio: "Dhyey Kathiriya is an experienced project manager with a strong background in leading diverse teams.",
    image: "/our-team/dhyey.webp",
    whatsapp: "https://wa.me/+919157264448",
    instagram: "https://www.instagram.com/dk_btx"
  },
  {
    name: "Pratik Mehta",
    role: "Co-Founder · Dev Titan",
    badge: "Co-Founder",
    email: "pm@titanslab.in",
    bio: "Pratik Mehta is a skilled technical designer with extensive experience in creating innovative and efficient design solutions.",
    image: "/our-team/pratik.webp",
    whatsapp: "https://wa.me/+919712117087",
    instagram: "https://www.instagram.com/prem_7607"
  },
  {
    name: "Udit Parekh",
    role: "DevOps · Dev Titan",
    badge: "DevOps",
    email: "udit@titanslab.in",
    bio: "Udit Parekh is a skilled DevOps engineer specializing in automation, CI/CD, and cloud infrastructure to drive seamless software delivery.",
    image: "/our-team/udit.webp",
    whatsapp: "https://wa.me/+917046440827",
    instagram: "https://www.instagram.com/udit__1211"
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Requirements",
    description: "Deep dive into business workflow, target audience, competitive landscape, and technical scope."
  },
  {
    step: "02",
    title: "Architecture & System Design",
    description: "Blueprint database schemas, API flows, cloud infrastructure, and user journey wireframes."
  },
  {
    step: "03",
    title: "UI/UX & Interactive Design",
    description: "Create sleek, accessible Figma prototypes and human-centric design tokens."
  },
  {
    step: "04",
    title: "Agile Engineering Sprints",
    description: "Full-stack development using Next.js, React, TypeScript, and clean code principles."
  },
  {
    step: "05",
    title: "Quality Assurance & Audits",
    description: "Rigorous automated testing, security vulnerability scans, and cross-browser audits."
  },
  {
    step: "06",
    title: "Production Deployment",
    description: "Zero-downtime release on elastic cloud servers with SSL, CDN, and DNS optimization."
  },
  {
    step: "07",
    title: "SLA Support & Scaling",
    description: "Ongoing 24/7 server monitoring, performance tuning, backups, and feature iterations."
  }
];

export const WHY_US_REASONS = [
  {
    iconName: "Target",
    title: "Commercial Outcome Focus",
    description: "We don't just write code; we design systems engineered to increase conversion rates, cut operational costs, and drive growth."
  },
  {
    iconName: "Cpu",
    title: "Modern Full-Stack Engineering",
    description: "Built on Next.js App Router, TypeScript, and modern cloud infrastructure for maximum speed, security, and SEO ranking."
  },
  {
    iconName: "Layers",
    title: "End-to-End Capability",
    description: "From design systems and web apps to cloud ERPs, AI models, and automated payment gateways under one roof."
  },
  {
    iconName: "ShieldCheck",
    title: "Enterprise SLA & Security",
    description: "Proactive server monitoring, automated SSL renewals, daily backups, and robust vulnerability prevention."
  },
  {
    iconName: "MessageSquareText",
    title: "Transparent Milestone Tracking",
    description: "Direct line of communication with our lead engineers and regular sprint updates without agency jargon."
  },
  {
    iconName: "Award",
    title: "Proven Track Record",
    description: "20+ successful web and software projects delivered across multiple countries and industry verticals."
  }
];

export const MILESTONES = [
  {
    year: "2024",
    title: "Titanslab Founded",
    description: "Established as a digital engineering lab focused on high-performance web applications and business automation."
  },
  {
    year: "2024",
    title: "First 10 Global Projects",
    description: "Expanded service delivery across healthcare, e-commerce, real estate, and financial technology clients."
  },
  {
    year: "2025",
    title: "Cloud & ERP Expansion",
    description: "Launched custom ERP software engineering, server management, and specialized AI automation suites."
  },
  {
    year: "2026",
    title: "20+ Completed Milestones & Product Lab",
    description: "Crossed 20+ successfully delivered client systems and launched proprietary SaaS software products."
  }
];

export const ABOUT_FAQS = [
  {
    question: "What services does Titanslab Inc. provide?",
    answer: "Titanslab provides full-stack Website Development, E-Commerce Platforms, Business Process Automation, Cloud Infrastructure & Hosting, ERP Solutions, UI/UX Design, AI/ML Integrations, Algorithmic Trading Systems, and Digital Marketing."
  },
  {
    question: "Where is Titanslab located?",
    answer: "Our main headquarters is located in Rajkot, Gujarat, India. We deliver digital solutions for clients both locally and globally across multiple timezones."
  },
  {
    question: "How long does a typical web or software project take?",
    answer: "Project timelines depend on complexity. Standard corporate websites take 2-4 weeks, while complex e-commerce platforms or custom ERP software take 4-10 weeks with clear sprint milestones."
  },
  {
    question: "Do you provide post-launch maintenance and SLA support?",
    answer: "Yes, we provide dedicated SLA support including 24/7 server monitoring, security updates, SSL renewals, database backups, and ongoing feature development."
  },
  {
    question: "What technology stack do you use?",
    answer: "We use modern, battle-tested technologies including Next.js, React, TypeScript, Node.js, Python, Tailwind CSS, PostgreSQL, AWS, Google Cloud, and DigitalOcean."
  },
  {
    question: "How can we start a project with Titanslab?",
    answer: "You can click 'Let's Talk' or contact us via email at titanslabinc@gmail.com or WhatsApp (+91 97121 17087). We will arrange an initial discovery call to review your project scope and provide a detailed technical proposal."
  }
];
