import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ProgramsSection } from '@/components/sections/ProgramsSection';
import { AchievementsSection } from '@/components/sections/AchievementsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { NewsSection } from '@/components/sections/NewsSection';
import { CTASection } from '@/components/sections/CTASection';
import { Footer } from '@/components/sections/Footer';
import { WaveDivider } from '@/components/ui/WaveDivider';
import { CrayonDivider } from '@/components/ui/CrayonDivider';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WaveDivider color="#FFF8EE" />
      <AboutSection />
      <CrayonDivider color="#F39F5F" bgColor="#FFFFFF" variant="scribble" />
      <ProgramsSection />
      <WaveDivider color="#FFF8EE" flip />
      <AchievementsSection />
      <CrayonDivider color="#FF6B9D" bgColor="#FFFFFF" variant="zigzag" />
      <TestimonialsSection />
      <WaveDivider color="#FFFFFF" />
      <NewsSection />
      <CrayonDivider color="#4ECDC4" bgColor="#FFFFFF" variant="wavy" />
      <CTASection />
      <Footer />
    </>
  );
}