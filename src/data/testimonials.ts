export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
  projectType: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Vikram Sharma",
    role: "VP of Operations",
    company: "Apex Logistics & Supply",
    avatar: "VS",
    rating: 5,
    projectType: "Enterprise Automation & ERP",
    content: "Titanslab transformed our manual dispatch and inventory pipeline into a unified cloud ERP. Order processing time dropped by 65% in the first month. Exceptional engineering discipline and delivery."
  },
  {
    id: "2",
    name: "Elena Rostova",
    role: "Head of Digital",
    company: "LuxeWear E-Commerce",
    avatar: "ER",
    rating: 5,
    projectType: "Headless E-Commerce Development",
    content: "The custom Next.js storefront engineered by Titanslab doubled our mobile conversion rates. Their attention to page speed, checkout UX, and payment gateways was outstanding."
  },
  {
    id: "3",
    name: "Rajesh Patel",
    role: "Founder & CEO",
    company: "HealthCare Plus Systems",
    avatar: "RP",
    rating: 5,
    projectType: "Custom Web Application",
    content: "Titanslab built our HIPAA-compliant patient appointment and records portal from scratch. The interface is remarkably intuitive, and server uptime has been 100% since launch."
  },
  {
    id: "4",
    name: "Marcus Vance",
    role: "Managing Director",
    company: "PropTech Horizon",
    avatar: "MV",
    rating: 5,
    projectType: "UI/UX & Web Platform",
    content: "Working with Titanslab felt like extending our internal engineering team. Their transparent 7-step process kept milestones predictable, on-budget, and defect-free."
  }
];
