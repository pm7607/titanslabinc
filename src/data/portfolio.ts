export interface PortfolioItem {
  id: string;
  title: string;
  category: "Websites" | "E-commerce" | "Web Applications" | "UI/UX" | "Automation" | "AI/ML" | "Cloud";
  client: string;
  url: string;
  shortDesc: string;
  longDesc: string;
  technologies: string[];
  image: string;
  featured: boolean;
  metrics?: string;
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "fycusseeds",
    title: "Fycus Seeds",
    category: "Websites",
    client: "Fycus Seeds",
    url: "https://fycusseeds.com",
    shortDesc: "Innovative seed company focused on quality seeds, crop varieties, and sustainable agriculture.",
    longDesc: "Innovative seed company focused on quality seeds, crop varieties, and sustainable agriculture.",
    technologies: [],
    image: "/images/fycusseeds.png",
    featured: true,
    metrics: "Agriculture & Seeds"
  },
  {
    id: "bellevillewireless",
    title: "Belleville Wireless",
    category: "E-commerce",
    client: "Belleville Wireless",
    url: "https://bellevillewireless.ca",
    shortDesc: "Mobile and wireless retail business providing phones, accessories, and related telecom services.",
    longDesc: "Mobile and wireless retail business providing phones, accessories, and related telecom services.",
    technologies: [],
    image: "/images/belleville.png",
    featured: true,
    metrics: "Telecom & Mobile"
  },
  {
    id: "phoneji",
    title: "Phoneji Wireless",
    category: "E-commerce",
    client: "Phoneji Wireless",
    url: "https://phoneji.ca",
    shortDesc: "Mobile device repair and accessories business specializing in professional smartphone and tablet repairs.",
    longDesc: "Mobile device repair and accessories business specializing in professional smartphone and tablet repairs.",
    technologies: [],
    image: "/images/phoneji.png",
    featured: true,
    metrics: "Repair & Devices"
  },
  {
    id: "kutchiking",
    title: "Kutchi King",
    category: "Web Applications",
    client: "Kutchi King",
    url: "https://kutchiking.ca",
    shortDesc: "Indian fast-food brand serving authentic street food, beverages, and traditional Gujarati-inspired favorites in Canada.",
    longDesc: "Indian fast-food brand serving authentic street food, beverages, and traditional Gujarati-inspired favorites in Canada.",
    technologies: [],
    image: "/images/kutchiking.png",
    featured: true,
    metrics: "Food Retail Chain"
  },
  {
    id: "maas-impex",
    title: "MAAS Impex Company Limited",
    category: "Websites",
    client: "MAAS Impex Company Limited",
    url: "https://maas.com.vn",
    shortDesc: "Global commodity trading and sourcing solutions.",
    longDesc: "Global commodity trading and sourcing solutions built for MAAS Impex Company Limited.",
    technologies: [],
    image: "/images/maas.png",
    featured: true,
    metrics: "Commodity & Trading"
  },
  {
    id: "peelwireless",
    title: "Peel Wireless",
    category: "E-commerce",
    client: "Peel Wireless",
    url: "https://peelwireless.ca",
    shortDesc: "Mobile technology retailer offering new and pre-owned devices, sales, trade-ins, and professional repair services.",
    longDesc: "Mobile technology retailer offering new and pre-owned devices, sales, trade-ins, and professional repair services.",
    technologies: [],
    image: "/images/peel.png",
    featured: false,
    metrics: "Wireless Retail"
  },
  {
    id: "durhamwireless",
    title: "Durham Wireless",
    category: "E-commerce",
    client: "Durham Wireless",
    url: "https://durhamwireless.ca",
    shortDesc: "Mobile technology business specializing in quality pre-owned devices and professional phone, laptop, and tablet repairs.",
    longDesc: "Mobile technology business specializing in quality pre-owned devices and professional phone, laptop, and tablet repairs.",
    technologies: [],
    image: "/images/durham.png",
    featured: false,
    metrics: "Mobile & Repairs"
  },
  {
    id: "mahiratradex",
    title: "Mahira Tradex",
    category: "Websites",
    client: "Mahira Tradex",
    url: "https://mahiratradex.com",
    shortDesc: "International trading company focused on sourcing, supplying, and exporting a diverse range of commodities.",
    longDesc: "International trading company focused on sourcing, supplying, and exporting a diverse range of commodities.",
    technologies: [],
    image: "/images/mahiratradex.png",
    featured: true,
    metrics: "Import & Export"
  },
  {
    id: "karmakrupaexim",
    title: "Karma Krupa Exim",
    category: "Websites",
    client: "Karma Krupa Exim",
    url: "https://karmakrupaexim.com",
    shortDesc: "Export company connecting quality agricultural and food products with international markets.",
    longDesc: "Export company connecting quality agricultural and food products with international markets.",
    technologies: [],
    image: "/images/karmkrupa.png",
    featured: false,
    metrics: "Agri Export"
  },
  {
    id: "shivbhinexim",
    title: "Shivbhin Exim",
    category: "Websites",
    client: "Shivbhin Exim",
    url: "https://shivbhinexim.com",
    shortDesc: "Merchant export company providing international sourcing, trading, and export solutions.",
    longDesc: "Merchant export company providing international sourcing, trading, and export solutions.",
    technologies: [],
    image: "/images/shivbhinexim.png",
    featured: false,
    metrics: "Merchant Exim"
  },
  {
    id: "shivaydevelopers",
    title: "Shivay Developers",
    category: "Websites",
    client: "Shivay Developers",
    url: "https://shivaydeveloper.in",
    shortDesc: "Real estate development company creating premium residential projects with a focus on quality, innovation, and modern living.",
    longDesc: "Real estate development company creating premium residential projects with a focus on quality, innovation, and modern living.",
    technologies: [],
    image: "/images/shivaydeveloper.png",
    featured: false,
    metrics: "Real Estate"
  },
  {
    id: "applefarm",
    title: "Apple Farm Party Plot",
    category: "Websites",
    client: "Apple Farm Party Plot",
    url: "https://applefarm.in",
    shortDesc: "Premium wedding and event venue in Surat offering spaces for weddings, celebrations, corporate events, and parties.",
    longDesc: "Premium wedding and event venue in Surat offering spaces for weddings, celebrations, corporate events, and parties.",
    technologies: [],
    image: "/images/applefarm.png",
    featured: false,
    metrics: "Event Venue"
  },
  {
    id: "candidferrocast",
    title: "Candid Ferro Cast",
    category: "Websites",
    client: "Candid Ferro Cast",
    url: "https://candidferrocast.com",
    shortDesc: "Industrial manufacturing company specializing in precision iron castings and engineering solutions for global markets.",
    longDesc: "Industrial manufacturing company specializing in precision iron castings and engineering solutions for global markets.",
    technologies: [],
    image: "/images/candidferrocast.png",
    featured: false,
    metrics: "Industrial Manufacturing"
  },
  {
    id: "macromic",
    title: "Macromic",
    category: "Web Applications",
    client: "Macromic",
    url: "https://macromic.in",
    shortDesc: "Technology company focused on enterprise software solutions, digital platforms, and modern application development.",
    longDesc: "Technology company focused on enterprise software solutions, digital platforms, and modern application development.",
    technologies: [],
    image: "/images/macromic.png",
    featured: false,
    metrics: "Enterprise Software"
  },
  {
    id: "shiningstarschool",
    title: "Shining Star School",
    category: "Websites",
    client: "Shining Star School",
    url: "https://shiningstar.school",
    shortDesc: "Educational institution providing school-level education with a focus on academic development and student growth.",
    longDesc: "Educational institution providing school-level education with a focus on academic development and student growth.",
    technologies: [],
    image: "/images/shiningstarschool.png",
    featured: false,
    metrics: "Education & Growth"
  },
  {
    id: "samvedskincare",
    title: "Samved Skin Care Clinic",
    category: "Websites",
    client: "Samved Skin Care Clinic",
    url: "https://samvedskincare.com",
    shortDesc: "Dermatology, skin, hair, laser, and aesthetic treatment clinic led by Dr. Dipal Zala.",
    longDesc: "Dermatology, skin, hair, laser, and aesthetic treatment clinic led by Dr. Dipal Zala.",
    technologies: [],
    image: "/images/samved.png",
    featured: true,
    metrics: "Dermatology Clinic"
  }
];
