'use client';
import { motion } from 'framer-motion';

const features = [
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
    ),
    title: 'AI-Powered Analytics',
    desc: 'Gain insights from your data with our advanced AI algorithms',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 12h9m-9 0a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm9 0a4.5 4.5 0 110-9 4.5 4.5 0 010 9z" /></svg>
    ),
    title: 'Team Collaboration',
    desc: 'Work seamlessly with your team in real-time',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /></svg>
    ),
    title: 'Secure & Reliable',
    desc: 'Enterprise-grade security with 99.9% uptime guarantee',
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: 'spring' as const, duration: 0.6 } },
};

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
        Powerful Features for Modern Teams
      </h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            className="bg-white dark:bg-gray-800 rounded-xl shadow p-8 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-primary/30 hover:bg-primary/10 dark:hover:bg-primary/20 hover:ring-2 hover:ring-primary/40"
            variants={cardVariants}
            whileHover={{ scale: 1.07, boxShadow: '0 0 24px 0 rgba(37,99,235,0.25)' }}
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
} 