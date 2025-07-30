'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';

// TypeScript interfaces for pricing data
export interface Feature {
  name: string;
  tiers: (boolean | string)[]; // true/false for check/cross, string for custom text
  section?: string; // For collapsible grouping
}

export interface PricingTier {
  name: string;
  monthly: number;
  annual: number;
  cta: string;
  mostPopular?: boolean;
  features: (boolean | string)[];
}

const features: Feature[] = [
  { name: 'Unlimited Projects', tiers: [true, true, true], section: 'Core' },
  { name: 'Team Collaboration', tiers: [false, true, true], section: 'Core' },
  { name: 'AI Analytics', tiers: [false, true, true], section: 'AI' },
  { name: 'Priority Support', tiers: [false, true, true], section: 'Support' },
  { name: 'Custom Integrations', tiers: [false, false, 'add-on'], section: 'Integrations' },
];

const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    monthly: 19,
    annual: 15,
    cta: 'Get Started',
    features: [true, false, false, false, false],
  },
  {
    name: 'Pro',
    monthly: 39,
    annual: 29,
    cta: 'Upgrade Now',
    mostPopular: true,
    features: [true, true, true, true, false],
  },
  {
    name: 'Enterprise',
    monthly: 79,
    annual: 59,
    cta: 'Contact Sales',
    features: [true, true, true, true, 'add-on'],
  },
];

const sections = Array.from(new Set(features.map(f => f.section)));

export default function PricingSection() {
  const [period, setPeriod] = useState<'monthly' | 'annual'>('monthly');
  const [loading, setLoading] = useState<number | null>(null);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  // Animated price counter
  const getPrice = (tier: PricingTier) => period === 'monthly' ? tier.monthly : tier.annual;
  const getSavePercent = (tier: PricingTier) => 100 - Math.round((tier.annual / tier.monthly) * 100);


  const handleCTA = (idx: number) => {
    setLoading(idx);
    setTimeout(() => setLoading(null), 1200);
  };
  const handleSectionToggle = (section: string) => {
    setOpenSections(s => ({ ...s, [section]: !s[section] }));
  };

  return (
    <section id="pricing" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-5xl font-extrabold text-center mb-8 text-white drop-shadow-lg">
        Pricing Plans
      </h2>
      <div className="flex justify-center mb-8">
        <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-full p-1 shadow-md">
          <button
            className={`px-4 py-1 rounded-full transition-all font-medium relative overflow-hidden ${period === 'monthly' ? 'bg-primary text-white shadow' : 'text-gray-700 dark:text-gray-200'} hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 hover:text-white duration-300`}
            onClick={() => setPeriod('monthly')}
          >
            Monthly
          </button>
          <motion.button
            className={`px-4 py-1 rounded-full transition-all font-medium relative overflow-hidden ${period === 'annual' ? 'bg-primary text-white shadow' : 'text-gray-700 dark:text-gray-200'} hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 hover:text-white duration-300`}
            onClick={() => setPeriod('annual')}
            layout
          >
            Annual
          </motion.button>
        </div>
        <AnimatePresence>
          {period === 'annual' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="ml-4 flex items-center text-green-600 font-semibold bg-green-100 dark:bg-green-900 px-3 py-1 rounded-full animate-pulse"
            >
              Save up to 25%!
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingTiers.map((tier, idx) => {
          const isPro = tier.mostPopular;
          return (
            <motion.div
              key={tier.name}
              className={`relative bg-gray-900 dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border-2 transition-all duration-300
                ${isPro ? 'border-blue-500' : 'border-transparent'}
                ${isPro ? 'z-20' : 'z-10'}
              `}
              whileHover={isPro ? {
                scale: 1.05,
                boxShadow: '0 0 32px 8px #3b82f6cc, 0 0 0 4px #2563eb',
                borderColor: '#3b82f6',
              } : {
                scale: 1.03,
                boxShadow: '0 0 16px 4px #2563eb66',
              }}
              transition={{ type: 'tween', duration: 0.25, ease: 'easeInOut' }}
              style={{ willChange: 'transform, box-shadow, border-color' }}
            >
              {tier.mostPopular && (
                <div className="absolute left-1/2 -top-8 -translate-x-1/2 flex flex-col items-center w-full z-20" style={{ pointerEvents: 'none' }}>
                  <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 text-white px-6 py-2 rounded-full font-extrabold text-base shadow-xl animate-glow mb-1 tracking-wide border-4 border-white/10" style={{ minWidth: 140, textAlign: 'center', letterSpacing: 1 }}>
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-semibold mb-2 mt-2 text-white">{tier.name}</h3>
              <div className="flex items-center justify-center mb-2 h-14">
                <motion.span
                  key={period + tier.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ type: 'tween', duration: 0.5, ease: 'easeInOut' }}
                  className="text-5xl font-bold text-primary"
                >
                  <AnimatedPrice value={getPrice(tier)} />
                </motion.span>
                <span className="ml-1 text-lg text-gray-300 font-medium">/mo</span>
              </div>
              {period === 'annual' && (
                <div className="mb-2 text-xs text-green-600 font-semibold bg-green-100 dark:bg-green-900 px-2 py-0.5 rounded-full">
                  Save {getSavePercent(tier)}%
                </div>
              )}
              <ul className="text-left w-full mt-4 mb-6 space-y-2">
                {features.map((feature, fIdx) => (
                  <li key={feature.name} className="flex items-center gap-3 py-0.5">
                    {typeof tier.features[fIdx] === 'boolean' ? (
                      tier.features[fIdx] ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-400" />
                      )
                    ) : tier.features[fIdx] === 'add-on' ? (
                      <span className="text-xs font-bold text-yellow-400 bg-yellow-900/30 px-2 py-0.5 rounded">Add-on</span>
                    ) : null}
                    <span className="text-white">{feature.name}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg font-bold text-lg transition-all mt-4
                  ${isPro ? 'bg-primary text-white shadow-lg hover:bg-blue-600 hover:brightness-110 focus:ring-4 focus:ring-blue-400/40' : tier.name === 'Starter' ? 'bg-gray-700 text-white hover:bg-gray-600' : 'border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white'}
                  ${loading === idx ? 'opacity-60 cursor-wait' : 'hover:scale-105'}
                `}
                style={isPro ? { transition: 'background 0.25s, filter 0.25s, box-shadow 0.25s, border-color 0.25s' } : {}}
                onClick={() => handleCTA(idx)}
                disabled={loading === idx}
              >
                {loading === idx ? 'Loading...' : tier.cta}
              </button>
            </motion.div>
          );
        })}
      </div>
      {/* Collapsible feature sections for mobile */}
      <div className="md:hidden mt-10">
        {sections.map(section => (
          <div key={section} className="mb-4">
            <button
              className="w-full flex justify-between items-center py-2 px-4 bg-gray-100 dark:bg-gray-700 rounded-lg font-semibold text-lg"
              onClick={() => handleSectionToggle(section!)}
            >
              {section}
              <span>{openSections[section!] ? '-' : '+'}</span>
            </button>
            <AnimatePresence>
              {openSections[section!] && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden bg-white dark:bg-gray-800 rounded-b-lg px-4 py-2"
                >
                  {features.filter(f => f.section === section).map((feature, fIdx) => (
                    <li key={feature.name} className="flex items-center gap-2 py-1">
                      {pricingTiers.map((tier) => (
                        <span key={tier.name + feature.name} className="mr-2">
                          {typeof tier.features[fIdx] === 'boolean' ? (
                            tier.features[fIdx] ? (
                              <CheckCircle className="w-4 h-4 text-green-500 inline" />
                            ) : (
                              <XCircle className="w-4 h-4 text-red-400 inline" />
                            )
                          ) : (
                            <span className="text-xs text-yellow-600 font-semibold">{tier.features[fIdx]}</span>
                          )}
                        </span>
                      ))}
                      <span>{feature.name}</span>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      <style>{`
        .animate-glow {
          box-shadow: 0 0 16px 4px #2563eb99, 0 0 32px 8px #2563eb44;
          animation: glow 1.5s infinite alternate;
        }
        @keyframes glow {
          from { box-shadow: 0 0 16px 4px #2563eb99, 0 0 32px 8px #2563eb44; }
          to { box-shadow: 0 0 32px 8px #2563ebcc, 0 0 48px 16px #2563eb66; }
        }
      `}</style>
    </section>
  );
}

// Animated price counter component
const AnimatedPrice = ({ value }: { value: number }) => {
  const [display, setDisplay] = React.useState(value);
  React.useEffect(() => {
    let frame: number;
    const start = display;
    const end = value;
    const duration = 400;
    const startTime = performance.now();
    function animate(now: number) {
      const elapsed = now - startTime;
      if (elapsed < duration) {
        setDisplay(start + (end - start) * (elapsed / duration));
        frame = requestAnimationFrame(animate);
      } else {
        setDisplay(end);
      }
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line
  }, [value]);
  return <span>{Math.round(display)}</span>;
}; 