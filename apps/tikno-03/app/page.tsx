import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ProgramsSection } from '@/components/sections/ProgramsSection';
import { AchievementsSection } from '@/components/sections/AchievementsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { NewsSection } from '@/components/sections/NewsSection';
import { CTASection } from '@/components/sections/CTASection';
import { Footer } from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <AchievementsSection />
      <TestimonialsSection />
      <NewsSection />
      <CTASection />
      <Footer />
    </>
  );
}
