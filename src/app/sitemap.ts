import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://titanslab.in';

  const routes = [
    '',
    '/company',
    '/company/about-us',
    '/company/our-team',
    '/company/our-story',
    '/company/how-we-work',
    '/company/office-location',
    '/company/life-at-titanslab',
    '/services',
    '/services/ecommerce-automation',
    '/services/industry-web-development',
    '/services/ui-ux-domain-hosting',
    '/services/erp-cloud',
    '/products',
    '/case-studies',
    '/portfolio',
    '/blog',
    '/contact',
    '/privacy-policy',
    '/terms',
    '/cookie-policy',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
