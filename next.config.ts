import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  allowedDevOrigins: ["192.168.1.64", "192.168.1.64:3000", "localhost:3000"],
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  headers: async () => [
    {
      source: "/assets/:all*(svg|jpg|png|webp|avif|ico)",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
  ],
  redirects: async () => [
    // 1. Team & Leadership (fixes Google Search sitelink 404s)
    { source: "/our-team", destination: "/company/our-team", permanent: true },
    { source: "/team", destination: "/company/our-team", permanent: true },
    { source: "/our_team", destination: "/company/our-team", permanent: true },
    { source: "/our-team.html", destination: "/company/our-team", permanent: true },
    { source: "/team.html", destination: "/company/our-team", permanent: true },
    { source: "/about/team", destination: "/company/our-team", permanent: true },
    { source: "/about/our-team", destination: "/company/our-team", permanent: true },
    { source: "/about-us/team", destination: "/company/our-team", permanent: true },
    { source: "/company/team", destination: "/company/our-team", permanent: true },

    // 2. About & Company
    { source: "/about", destination: "/company/about-us", permanent: true },
    { source: "/about-us", destination: "/company/about-us", permanent: true },
    { source: "/about_us", destination: "/company/about-us", permanent: true },
    { source: "/about.html", destination: "/company/about-us", permanent: true },
    { source: "/about-us.html", destination: "/company/about-us", permanent: true },
    { source: "/who-we-are", destination: "/company/about-us", permanent: true },
    { source: "/company/about", destination: "/company/about-us", permanent: true },

    // 3. Company Subpages (Story, Process, Culture, Location)
    { source: "/our-story", destination: "/company/our-story", permanent: true },
    { source: "/story", destination: "/company/our-story", permanent: true },
    { source: "/how-we-work", destination: "/company/how-we-work", permanent: true },
    { source: "/process", destination: "/company/how-we-work", permanent: true },
    { source: "/our-process", destination: "/company/how-we-work", permanent: true },
    { source: "/life-at-titanslab", destination: "/company/life-at-titanslab", permanent: true },
    { source: "/careers", destination: "/company/life-at-titanslab", permanent: true },
    { source: "/career", destination: "/company/life-at-titanslab", permanent: true },
    { source: "/culture", destination: "/company/life-at-titanslab", permanent: true },
    { source: "/jobs", destination: "/company/life-at-titanslab", permanent: true },
    { source: "/office-location", destination: "/company/office-location", permanent: true },
    { source: "/locations", destination: "/company/office-location", permanent: true },
    { source: "/location", destination: "/company/office-location", permanent: true },
    { source: "/office", destination: "/company/office-location", permanent: true },

    // 4. Contact
    { source: "/contact-us", destination: "/contact", permanent: true },
    { source: "/contact_us", destination: "/contact", permanent: true },
    { source: "/contact.html", destination: "/contact", permanent: true },
    { source: "/contact-us.html", destination: "/contact", permanent: true },
    { source: "/reach-us", destination: "/contact", permanent: true },
    { source: "/get-in-touch", destination: "/contact", permanent: true },
    { source: "/inquiry", destination: "/contact", permanent: true },

    // 5. Services
    { source: "/service", destination: "/services", permanent: true },
    { source: "/services.html", destination: "/services", permanent: true },
    { source: "/our-services", destination: "/services", permanent: true },
    { source: "/all-services", destination: "/services", permanent: true },
    { source: "/web-development", destination: "/services/industry-web-development", permanent: true },
    { source: "/website-development", destination: "/services/industry-web-development", permanent: true },
    { source: "/services/web-development", destination: "/services/industry-web-development", permanent: true },
    { source: "/ecommerce", destination: "/services/ecommerce-automation", permanent: true },
    { source: "/ecommerce-development", destination: "/services/ecommerce-automation", permanent: true },
    { source: "/services/ecommerce", destination: "/services/ecommerce-automation", permanent: true },
    { source: "/automation", destination: "/services/ecommerce-automation", permanent: true },
    { source: "/services/automation", destination: "/services/ecommerce-automation", permanent: true },
    { source: "/erp", destination: "/services/erp-cloud", permanent: true },
    { source: "/cloud", destination: "/services/erp-cloud", permanent: true },
    { source: "/cloud-services", destination: "/services/erp-cloud", permanent: true },
    { source: "/services/cloud", destination: "/services/erp-cloud", permanent: true },
    { source: "/services/erp", destination: "/services/erp-cloud", permanent: true },
    { source: "/ui-ux", destination: "/services/ui-ux-domain-hosting", permanent: true },
    { source: "/ui-ux-design", destination: "/services/ui-ux-domain-hosting", permanent: true },
    { source: "/hosting", destination: "/services/ui-ux-domain-hosting", permanent: true },
    { source: "/domain-hosting", destination: "/services/ui-ux-domain-hosting", permanent: true },
    { source: "/services/ui-ux", destination: "/services/ui-ux-domain-hosting", permanent: true },
    { source: "/services/hosting", destination: "/services/ui-ux-domain-hosting", permanent: true },

    // 6. Products
    { source: "/product", destination: "/products", permanent: true },
    { source: "/our-products", destination: "/products", permanent: true },
    { source: "/security-qr", destination: "/products/security-qr-entry", permanent: true },
    { source: "/qr-entry", destination: "/products/security-qr-entry", permanent: true },
    { source: "/products/security-qr", destination: "/products/security-qr-entry", permanent: true },

    // 7. Portfolio & Case Studies
    { source: "/our-work", destination: "/portfolio", permanent: true },
    { source: "/work", destination: "/portfolio", permanent: true },
    { source: "/portfolio.html", destination: "/portfolio", permanent: true },
    { source: "/projects", destination: "/portfolio", permanent: true },
    { source: "/case-study", destination: "/case-studies", permanent: true },
    { source: "/cases", destination: "/case-studies", permanent: true },

    // 8. Blog
    { source: "/blogs", destination: "/blog", permanent: true },
    { source: "/articles", destination: "/blog", permanent: true },
    { source: "/news", destination: "/blog", permanent: true },

    // 9. Policies & Legal
    { source: "/privacy", destination: "/privacy-policy", permanent: true },
    { source: "/privacy.html", destination: "/privacy-policy", permanent: true },
    { source: "/terms-and-conditions", destination: "/terms", permanent: true },
    { source: "/terms-of-service", destination: "/terms", permanent: true },
    { source: "/terms-conditions", destination: "/terms", permanent: true },
    { source: "/terms.html", destination: "/terms", permanent: true },
    { source: "/cookies", destination: "/cookie-policy", permanent: true },
    { source: "/cookie", destination: "/cookie-policy", permanent: true },
  ],
};

export default nextConfig;

