import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { CoverageSection } from '@/components/sections/CoverageSection';
import { StandardsSection } from '@/components/sections/StandardsSection';
import { ComplianceSection } from '@/components/sections/ComplianceSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { CTASection } from '@/components/sections/CTASection';
import { Footer } from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
      <CoverageSection />
      <StandardsSection />
      <ComplianceSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </>
  );
}
