export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  servicesProvided: string[];
  technologies: string[];
  challenge: string;
  solution: string;
  results: {
    label: string;
    value: string;
  }[];
  heroImage: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-1",
    slug: "ecommerce-fulfillment-automation",
    title: "Scaling E-Commerce Order Fulfillment & Multi-Warehouse Sync",
    client: "Retail Enterprise",
    industry: "E-Commerce & Retail",
    servicesProvided: ["E-commerce Development", "Business Process Automation", "API Integration"],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Shopify API", "Redis"],
    challenge: "The client faced manual order entry errors, delayed shipping updates, and overselling across 3 different online sales channels due to disconnected inventory systems.",
    solution: "Titanslab built an automated middleware and real-time inventory management engine connecting Shopify, WooCommerce, and physical warehouse POS systems with instant WebSocket synchronization.",
    results: [
      { label: "Inventory Sync Time", value: "< 1 Sec" },
      { label: "Order Processing Speed", value: "400% Faster" },
      { label: "Stock Error Rate", value: "Reduced to 0%" }
    ],
    heroImage: "/images/case-1.webp"
  },
  {
    id: "case-2",
    slug: "custom-erp-manufacturing",
    title: "Replacing Fragmented Spreadsheets with Unified Cloud ERP",
    client: "Industrial Manufacturer",
    industry: "Manufacturing & Logistics",
    servicesProvided: ["Custom ERP Development", "Cloud Infrastructure", "Database Solutions"],
    technologies: ["React", "Express.js", "MySQL", "AWS EC2", "Docker"],
    challenge: "Managing production schedules, raw material stock, vendor payouts, and client invoicing across separate Excel sheets resulted in stockouts and lost revenue.",
    solution: "We designed a bespoke web-based ERP platform with role-based access control, automated low-stock notifications, automated GST/tax invoice generation, and real-time production status tracking.",
    results: [
      { label: "Manual Data Entry Saved", value: "25+ Hrs/Wk" },
      { label: "Material Waste Reduction", value: "35%" },
      { label: "Invoice Processing Time", value: "90% Faster" }
    ],
    heroImage: "/images/case-2.webp"
  },
  {
    id: "case-3",
    slug: "algo-trading-data-pipeline",
    title: "Building High-Speed Market Data Processing & Trading Execution",
    client: "Proprietary Trading Desk",
    industry: "Financial Services",
    servicesProvided: ["Algorithmic Trading", "API Integration", "Business Dashboards"],
    technologies: ["Python", "FastAPI", "React", "WebSockets", "TimescaleDB"],
    challenge: "Manual execution of systematic trading strategies led to execution slippage, delayed risk alerts, and human errors during volatile market events.",
    solution: "Titanslab developed an automated trading algorithmic gateway with strategy backtesting capabilities, broker API integration, and an ultra-responsive live risk monitoring UI.",
    results: [
      { label: "Order Execution Latency", value: "< 50ms" },
      { label: "Trade Strategy Capacity", value: "10x Expanded" },
      { label: "Risk Event Alert Speed", value: "Instantaneous" }
    ],
    heroImage: "/images/case-3.webp"
  }
];
