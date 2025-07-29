'use client';
import { useState } from 'react';

const plans = [
  {
    name: 'Basic',
    price: { monthly: 19, annual: 15 },
    features: [
      'Up to 3 team members',
      'Basic analytics',
      'Email support',
      'Community access',
    ],
    cta: 'Start Basic',
    recommended: false,
  },
  {
    name: 'Pro',
    price: { monthly: 39, annual: 29 },
    features: [
      'Up to 15 team members',
      'Advanced analytics',
      'Priority email support',
      'Integrations',
    ],
    cta: 'Start Pro',
    recommended: true,
  },
  {
    name: 'Enterprise',
    price: { monthly: 99, annual: 79 },
    features: [
      'Unlimited team members',
      'Custom analytics',
      'Dedicated support',
      'SSO & advanced security',
    ],
    cta: 'Contact Sales',
    recommended: false,
  },
];

export default function PricingSection() {
  const [annual, setAnnual] = useState(true);
  return (
    <section id="pricing" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
        Simple, Transparent Pricing
      </h2>
      <div className="flex justify-center items-center gap-4 mb-12">
        <span className={!annual ? 'font-semibold text-primary' : 'text-gray-500'}>Monthly</span>
        <button
          className={`relative w-14 h-8 rounded-full transition bg-gray-300 dark:bg-gray-700 flex items-center px-1 ${annual ? 'justify-end' : 'justify-start'}`}
          onClick={() => setAnnual((v) => !v)}
          aria-label="Toggle annual pricing"
        >
          <span className={`absolute left-1 top-1/2 -translate-y-1/2 text-xs text-primary font-bold transition-opacity duration-200 ${annual ? 'opacity-0' : 'opacity-100'}`}>-20%</span>
          <span className="w-6 h-6 bg-white dark:bg-gray-900 rounded-full shadow transition" />
          <span className={`absolute right-1 top-1/2 -translate-y-1/2 text-xs text-primary font-bold transition-opacity duration-200 ${annual ? 'opacity-100' : 'opacity-0'}`}>-20%</span>
        </button>
        <span className={annual ? 'font-semibold text-primary' : 'text-gray-500'}>Annual</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col rounded-2xl shadow-xl border-2 transition-all p-8 bg-white dark:bg-gray-900 ${plan.recommended ? 'border-primary scale-105 z-10 shadow-primary/20' : 'border-gray-200 dark:border-gray-800'}`}
          >
            {plan.recommended && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full shadow">Recommended</span>
            )}
            <h3 className="text-2xl font-bold mb-2 text-center">{plan.name}</h3>
            <div className="text-center mb-6">
              <span className="text-4xl font-extrabold text-primary">${annual ? plan.price.annual : plan.price.monthly}</span>
              <span className="text-gray-500 font-medium">/mo</span>
            </div>
            <ul className="mb-8 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button className={`w-full py-3 rounded-lg font-semibold transition text-white ${plan.recommended ? 'bg-primary hover:bg-primary/90' : 'bg-gray-700 hover:bg-primary/80'}`}>
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
} 