import HeroSection from "@/components/sections/HeroSection";
import TrustStats from "@/components/sections/TrustStats";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import Card3DTilt from "@/components/ui/Card3DTilt";
import SecurityQR3DScanner from "@/components/3d/SecurityQR3DScanner";
import HorizontalProjectsShowcase from "@/components/sections/HorizontalProjectsShowcase";

import { MAIN_SERVICES_MEGA } from "@/data/services";

export default function HomePage() {
  return (
    <div className="space-y-0 bg-white">
      {/* 1. Hero Section (3D Interactive Core) */}
      <HeroSection />

      {/* 2. Trust Stats Bar */}
      <TrustStats />

      {/* 3. Core Services */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              badge="Services"
              title="What We Build"
              subtitle="Web platforms, e-commerce, automation, and cloud infrastructure."
            />
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {MAIN_SERVICES_MEGA.map((cat) => (
                <Card3DTilt key={cat.id} maxTilt={9} perspective={1100}>
                  <ServiceCard
                    title={cat.title}
                    description={cat.shortDesc}
                    iconName={cat.iconName}
                    href={`/services/${cat.slug}`}
                    items={cat.items.slice(0, 3).map((i) => i.title)}
                  />
                </Card3DTilt>
              ))}
            </div>
          </AnimatedSection>

          <div className="mt-10 text-center">
            <Button href="/services" variant="secondary" showArrow>
              Explore All Services &amp; AI Solutions
            </Button>
          </div>
        </div>
      </section>

      {/* 4. 3D Flagship Product Showcase */}
      <SecurityQR3DScanner />

      {/* 5. Pinned Horizontal Scroll Portfolio Showcase */}
      <HorizontalProjectsShowcase />

      {/* 6. Testimonials Section */}
      <TestimonialsSection />

      {/* 7. CTA Section */}
      <CTASection />
    </div>
  );
}
