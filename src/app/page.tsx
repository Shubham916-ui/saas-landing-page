import HeroSection from '@/organisms/HeroSection';
import FeaturesSection from '@/organisms/FeaturesSection';
import TestimonialsSection from '@/organisms/TestimonialsSection';
import CTASection from '@/organisms/CTASection';
import PricingSection from '@/organisms/PricingSection';

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
