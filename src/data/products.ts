export interface Product {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  badge: "Flagship Product" | "In Development" | "Coming Soon";
  status: "Live" | "Closed Beta" | "Roadmap";
  description: string;
  highlights: string[];
  iconName: string;
  isFlagship?: boolean;
}

export const PRODUCTS_LIST: Product[] = [
  {
    id: "security-qr-entry",
    slug: "security-qr-entry",
    title: "Security QR Entry System",
    tagline: "Smart Visitor & Event Access Verification Platform",
    badge: "Flagship Product",
    status: "Live",
    isFlagship: true,
    description: "An advanced, high-speed QR-based access control and visitor verification platform. Designed for seamless event registration, workplace access management, duplicate entry prevention, instant ID validation, and real-time attendance analytics.",
    highlights: [
      "Instant QR Code Generation & Scanning",
      "Real-time Access & Visitor Verification",
      "Duplicate Entry & Ticket Fraud Prevention",
      "Executive Live Dashboard & Attendance Logs",
      "Multi-Gate & Multi-Scanner Synchronization",
      "Automated Visitor Badges & WhatsApp Alerts"
    ],
    iconName: "QrCode"
  },
  {
    id: "business-automation-engine",
    slug: "business-automation-engine",
    title: "Business Automation Engine",
    tagline: "Centralized Enterprise Workflow & API Middleware",
    badge: "In Development",
    status: "Closed Beta",
    description: "An all-in-one workflow automation suite connecting web portals, payment gateways, and inventory middleware seamlessly.",
    highlights: [
      "Visual Workflow Pipeline Builder",
      "Automated Trigger-based Actions",
      "API Middleware & Webhook Hub",
      "Cross-Platform Sync Engine"
    ],
    iconName: "Cpu"
  },
  {
    id: "enterprise-cloud-erp",
    slug: "enterprise-cloud-erp",
    title: "Enterprise Cloud ERP Suite",
    tagline: "Modular Resource Planning & Multi-Branch Stock Control",
    badge: "In Development",
    status: "Roadmap",
    description: "Modular cloud resource planning system providing multi-warehouse stock control, automated tax invoicing, and granular role permissions.",
    highlights: [
      "Multi-Warehouse Inventory Tracking",
      "Automated Tax Ledger & Invoicing",
      "Role-Based Access Control (RBAC)",
      "Financial Audit Trail"
    ],
    iconName: "Layers"
  },
  {
    id: "ai-operations-assistant",
    slug: "ai-operations-assistant",
    title: "AI Operations Assistant",
    tagline: "Intelligent Predictive Analytics & CRM Intelligence",
    badge: "Coming Soon",
    status: "Roadmap",
    description: "Intelligent predictive analytics and customer behavior processing tool integrated directly into modern business CRMs.",
    highlights: [
      "Predictive Customer Insights",
      "Automated Lead Scoring",
      "NLP Query Assistant",
      "Smart Performance Reports"
    ],
    iconName: "Sparkles"
  }
];
