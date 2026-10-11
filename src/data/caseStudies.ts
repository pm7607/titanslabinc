export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  timeline?: string;
  servicesProvided: string[];
  technologies: string[];
  challenge: string;
  challengeDetails?: string[];
  solution: string;
  solutionDetails?: string[];
  deliverables?: string[];
  results: {
    label: string;
    value: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  heroImage: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-1",
    slug: "ecommerce-fulfillment-automation",
    title: "Scaling E-Commerce Order Fulfillment & Multi-Warehouse Sync",
    client: "Retail Enterprise",
    industry: "E-Commerce & Retail",
    timeline: "8 Weeks",
    servicesProvided: ["E-commerce Development", "Business Process Automation", "API Integration"],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Shopify API", "Redis", "WebSockets"],
    challenge: "The client faced manual order entry errors, delayed shipping updates, and overselling across 3 different online sales channels due to disconnected inventory systems.",
    challengeDetails: [
      "High order volumes during seasonal sales caused stockouts on Shopify while products remained available on WooCommerce.",
      "Manual re-entry of shipping dispatch notices delayed tracking number generation by up to 24 hours.",
      "No automated alerts when regional warehouse stock reached critical safety thresholds."
    ],
    solution: "Titanslab built an automated middleware and real-time inventory management engine connecting Shopify, WooCommerce, and physical warehouse POS systems with instant WebSocket synchronization.",
    solutionDetails: [
      "Architected an event-driven Node.js middleware with Redis pub/sub queueing to handle high-concurrency order spikes.",
      "Direct two-way REST & GraphQL API integrations synchronizing inventory counts across all channels in sub-second latency.",
      "Real-time warehouse dashboard for order picking, barcode scanning verification, and automated courier label generation."
    ],
    deliverables: [
      "Real-time Omnichannel Inventory Sync Engine",
      "Warehouse POS & Barcode Scanner Integration",
      "Automated Courier Webhook & Shipping Notification Pipeline",
      "Executive Fulfillment Analytics Dashboard"
    ],
    results: [
      { label: "Inventory Sync Time", value: "< 1 Sec" },
      { label: "Order Processing Speed", value: "400% Faster" },
      { label: "Stock Error Rate", value: "Reduced to 0%" },
      { label: "Dispatch Turnaround", value: "Same-Day 98%" }
    ],
    testimonial: {
      quote: "Titanslab transformed our chaotic fulfillment process into a fully automated engine. We went through peak holiday sales with zero inventory overselling.",
      author: "Director of Operations",
      role: "Omnichannel Retail Enterprise"
    },
    heroImage: "/images/case-1.webp"
  },
  {
    id: "case-2",
    slug: "custom-erp-manufacturing",
    title: "Replacing Fragmented Spreadsheets with Unified Cloud ERP",
    client: "Industrial Manufacturer",
    industry: "Manufacturing & Logistics",
    timeline: "12 Weeks",
    servicesProvided: ["Custom ERP Development", "Cloud Infrastructure", "Database Solutions"],
    technologies: ["React", "Express.js", "MySQL", "AWS EC2", "Docker", "Tailwind CSS"],
    challenge: "Managing production schedules, raw material stock, vendor payouts, and client invoicing across separate Excel sheets resulted in stockouts and lost revenue.",
    challengeDetails: [
      "Managing production schedules and material requirements on Excel led to miscommunication between shop floor and procurement.",
      "Manual creation of GST-compliant invoices and vendor payment logs consumed 25+ hours every week.",
      "Zero real-time visibility into machine downtime, scrap rates, or production line bottlenecking."
    ],
    solution: "We designed a bespoke web-based ERP platform with role-based access control, automated low-stock notifications, automated GST/tax invoice generation, and real-time production status tracking.",
    solutionDetails: [
      "Developed a secure multi-tenant web ERP with role-based access for shop operators, floor managers, and executives.",
      "Automated BOM (Bill of Materials) calculations and low-stock purchasing triggers based on live job orders.",
      "Built an automated invoicing module connected with accounting exports and digital signature generation."
    ],
    deliverables: [
      "Live Production Scheduling & Work Order Tracker",
      "Raw Material & Batch Inventory Management",
      "Automated Invoicing & Tax Ledger Generator",
      "Shop Floor Downtime & OEE Metric Analytics"
    ],
    results: [
      { label: "Manual Data Entry Saved", value: "25+ Hrs/Wk" },
      { label: "Material Waste Reduction", value: "35%" },
      { label: "Invoice Processing Time", value: "90% Faster" },
      { label: "Production Visibility", value: "100% Real-time" }
    ],
    testimonial: {
      quote: "The custom ERP developed by Titanslab eliminated dozens of spreadsheets and gave our plant managers instant visibility into every batch.",
      author: "Managing Partner",
      role: "Industrial Manufacturing Firm"
    },
    heroImage: "/images/case-2.webp"
  },
  {
    id: "case-3",
    slug: "algo-trading-data-pipeline",
    title: "Building High-Speed Market Data Processing & Trading Execution",
    client: "Proprietary Trading Desk",
    industry: "Financial Services",
    timeline: "10 Weeks",
    servicesProvided: ["Algorithmic Trading", "API Integration", "Business Dashboards"],
    technologies: ["Python", "FastAPI", "React", "WebSockets", "TimescaleDB", "Redis"],
    challenge: "Manual execution of systematic trading strategies led to execution slippage, delayed risk alerts, and human errors during volatile market events.",
    challengeDetails: [
      "Trading desk strategies suffered up to 800ms execution latency through generic retail broker web terminals.",
      "Lack of automated risk safeguards resulted in exposure overshooting pre-set drawdown limits.",
      "Disparate market data sources made historical strategy backtesting slow and cumbersome."
    ],
    solution: "Titanslab developed an automated trading algorithmic gateway with strategy backtesting capabilities, broker API integration, and an ultra-responsive live risk monitoring UI.",
    solutionDetails: [
      "Built a low-latency execution gateway in Python/FastAPI and TimescaleDB with dedicated WebSocket streams.",
      "Engineered real-time quantitative risk filters that instantly kill rogue orders and enforce risk ceilings.",
      "Developed a custom dark-mode web monitoring terminal with high-frequency candlestick streaming and execution heatmaps."
    ],
    deliverables: [
      "Sub-50ms Low Latency Order Gateway",
      "Multi-broker FIX & WebSocket API Adapter",
      "Automated Pre-trade Quantitative Risk Sentinel",
      "High-Performance Strategy Monitoring Terminal"
    ],
    results: [
      { label: "Order Execution Latency", value: "< 50ms" },
      { label: "Trade Strategy Capacity", value: "10x Expanded" },
      { label: "Risk Event Alert Speed", value: "Instantaneous" },
      { label: "System Uptime", value: "99.99%" }
    ],
    testimonial: {
      quote: "Execution speed and risk controls are everything in proprietary trading. Titanslab delivered a platform that runs flawlessly under extreme market volatility.",
      author: "Head of Quantitative Strategy",
      role: "Proprietary Trading Desk"
    },
    heroImage: "/images/case-3.webp"
  }
];
