import HeroSection from '@/organisms/HeroSection';
import FeaturesSection from '@/organisms/FeaturesSection';
import TestimonialsSection from '@/organisms/TestimonialsSection';
import PricingSection from '@/organisms/PricingSection';
import CTASection from '@/organisms/CTASection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
    </main>
  );
}
