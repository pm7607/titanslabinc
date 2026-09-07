export interface ServiceCategory {
  id: string;
  column: number;
  title: string;
  shortDesc: string;
  iconName: string;
  slug: string;
  items: {
    title: string;
    description: string;
  }[];
}

export interface ServiceDetail {
  slug: string;
  title: string;
  category: string;
  subtitle: string;
  heroDescription: string;
  iconName: string;
  features: {
    title: string;
    description: string;
  }[];
  process: string[];
  techStack: string[];
  faq: {
    question: string;
    answer: string;
  }[];
}

export const MAIN_SERVICES_MEGA: ServiceCategory[] = [
  {
    id: "ecommerce-automation",
    column: 1,
    title: "E-Commerce & Automation",
    shortDesc: "Scalable online stores and automated business operations.",
    iconName: "ShoppingCart",
    slug: "ecommerce-automation",
    items: [
      { title: "E-commerce Website Development", description: "Custom performant online storefronts built for conversion." },
      { title: "Custom E-commerce Solutions", description: "Tailored shopping experiences with flexible architecture." },
      { title: "WooCommerce Development", description: "Custom WordPress & WooCommerce plugins and themes." },
      { title: "Shopify Development", description: "High-converting Shopify & Shopify Plus store design & dev." },
      { title: "E-commerce Automation", description: "Automate cart recovery, transactional emails, & CRM sync." },
      { title: "Business Process Automation", description: "Streamline workflows and eliminate repetitive manual tasks." },
      { title: "Payment Gateway Integration", description: "Secure global payment gateway integrations (Stripe, Razorpay)." },
      { title: "Inventory Automation", description: "Real-time stock synchronization across multi-channel sales." },
      { title: "Order Management Systems", description: "Automated order routing, fulfillment, and tracking." },
      { title: "CRM Automation", description: "Connect sales channels directly to centralized CRM pipelines." }
    ]
  },
  {
    id: "industry-web-development",
    column: 2,
    title: "Industry Web Development",
    shortDesc: "Custom web applications designed for specific business needs.",
    iconName: "Code2",
    slug: "industry-web-development",
    items: [
      { title: "Business Website Development", description: "Modern responsive websites for high-growth enterprises." },
      { title: "Corporate Website Development", description: "Executive digital identity with top-tier performance." },
      { title: "Industry-specific Websites", description: "Tailored web platforms for Healthcare, Real Estate, Finance." },
      { title: "Custom Web Applications", description: "Complex SaaS applications and web platform portals." },
      { title: "Portal Development", description: "Secure client portals, vendor dashboards, and partner hubs." },
      { title: "Booking Systems", description: "Automated reservation, appointment, and scheduling engines." },
      { title: "Marketplace Development", description: "Multi-vendor marketplaces with commission workflows." },
      { title: "Custom Software Development", description: "Bespoke software engineered to solve exact business bottlenecks." },
      { title: "API Development & Integration", description: "RESTful & GraphQL API architectures and third-party links." },
      { title: "Website Maintenance & Support", description: "Proactive security, updates, monitoring, and SLA support." }
    ]
  },
  {
    id: "ui-ux-domain-hosting",
    column: 3,
    title: "UI/UX & Domain Hosting Services",
    shortDesc: "Intuitive digital experiences and reliable cloud infrastructure.",
    iconName: "Palette",
    slug: "ui-ux-domain-hosting",
    items: [
      { title: "UI/UX Design", description: "Human-centric digital interface design that wows users." },
      { title: "Website UI Design", description: "Sleek, modern web page layouts built for accessibility." },
      { title: "Mobile App UI/UX", description: "Native and cross-platform mobile user interfaces." },
      { title: "Design Systems", description: "Scalable component libraries and design guidelines." },
      { title: "UX Research", description: "User journey mapping, wireframing, and usability testing." },
      { title: "Prototyping", description: "Interactive high-fidelity prototypes for rapid validation." },
      { title: "Domain Registration", description: "Domain name acquisition, DNS management, and protection." },
      { title: "Web Hosting", description: "High-speed NVMe web hosting for fast page loads." },
      { title: "Cloud Hosting", description: "Elastic cloud server infrastructure with auto-scaling." },
      { title: "Managed Hosting", description: "Hands-off server administration, patches, and monitoring." },
      { title: "SSL & Website Security", description: "Enterprise SSL certificates, DDoS mitigation, and firewalls." },
      { title: "Website Migration", description: "Zero-downtime website and database migration to cloud." }
    ]
  },
  {
    id: "erp-cloud",
    column: 4,
    title: "ERP Solutions & Cloud Services",
    shortDesc: "Connected enterprise systems and scalable cloud infrastructure.",
    iconName: "Server",
    slug: "erp-cloud",
    items: [
      { title: "Custom ERP Development", description: "Tailored enterprise resource planning for complex operations." },
      { title: "ERP Implementation", description: "Smooth deployment and integration of ERP platforms." },
      { title: "Inventory Management", description: "Multi-warehouse stock tracking, batch control, and audits." },
      { title: "Accounting & Business Management", description: "Centralized financial ledgers, invoicing, and reporting." },
      { title: "CRM Solutions", description: "Cloud CRM for lead tracking, customer support, and sales." },
      { title: "Cloud Software", description: "SaaS platform engineering with multi-tenant architecture." },
      { title: "Cloud Infrastructure", description: "AWS, GCP & DigitalOcean cloud architecture setup." },
      { title: "Cloud Deployment", description: "CI/CD deployment pipelines for rapid software delivery." },
      { title: "Server Management", description: "Linux/Windows server hardening, performance tuning, & monitoring." },
      { title: "Database Solutions", description: "High-availability MySQL, PostgreSQL, and MongoDB clusters." },
      { title: "Business Dashboards", description: "Real-time analytics, KPI tracking, and executive dashboards." },
      { title: "Cloud Migration", description: "Legacy system modernization and cloud workload migration." }
    ]
  }
];

export const SPECIALIZED_SERVICES = [
  {
    title: "AI/ML Solutions",
    slug: "ai-ml-solutions",
    iconName: "BrainCircuit",
    description: "Innovative AI and ML solutions tailored to transform business operations. From predictive analytics and intelligent automation to data-driven decision-making, we design systems that improve performance and unlock new opportunities.",
    highlights: ["Machine Learning Solutions", "Predictive Analytics", "AI Automation", "Data Analysis", "Recommendation Systems", "AI-powered Business Applications", "Custom AI Models"]
  },
  {
    title: "Algorithmic Trading Solutions",
    slug: "algo-trading",
    iconName: "TrendingUp",
    description: "Algorithmic trading technology focused on automation, low-latency data processing, strategy backtesting, and systematic execution across financial markets.",
    highlights: ["Trading Algorithms", "Automated Trading Systems", "Market Data Processing", "Trading Dashboards", "Strategy Automation", "Broker API Integration"]
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    iconName: "Megaphone",
    description: "Data-backed digital marketing strategies that increase online visibility, drive targeted traffic, and maximize conversion rates for growing brands.",
    highlights: ["Search Engine Optimization (SEO)", "Social Media Marketing", "Content Marketing", "Paid Advertising (PPC)", "Website Analytics", "Conversion Optimization"]
  },
  {
    title: "CRM Cloud Software",
    slug: "crm-cloud-software",
    iconName: "UserCheck",
    description: "Cloud-based CRM solutions that centralize customer information, streamline sales pipelines, and automate daily customer communication workflows.",
    highlights: ["Customer Management", "Lead Tracking", "Sales Pipeline Automation", "Customer Support Desk", "Workflow Automation", "Custom Reports & Dashboards"]
  }
];
