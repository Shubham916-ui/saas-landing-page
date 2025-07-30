import dynamic from 'next/dynamic';
import HeroSection from '@/organisms/HeroSection';

// Lazy load components for better performance
const FeaturesSection = dynamic(() => import('@/organisms/FeaturesSection'), {
  loading: () => <div className="py-20 px-4 max-w-6xl mx-auto"><div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-96 rounded-xl"></div></div>
});

const TestimonialsSection = dynamic(() => import('@/organisms/TestimonialsSection'), {
  loading: () => <div className="py-20 px-4 max-w-6xl mx-auto"><div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-96 rounded-xl"></div></div>
});

const PricingSection = dynamic(() => import('@/organisms/PricingSection'), {
  loading: () => <div className="py-20 px-4 max-w-6xl mx-auto"><div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-96 rounded-xl"></div></div>
});

const CTASection = dynamic(() => import('@/organisms/CTASection'), {
  loading: () => <div className="py-20 px-4 max-w-6xl mx-auto"><div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-96 rounded-xl"></div></div>
});

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
