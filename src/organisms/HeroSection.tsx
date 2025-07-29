'use client';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center gap-6 py-12">
      <motion.h1 
        className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Your SaaS Solution For Modern Teams
      </motion.h1>
      
      <motion.p
        className="text-xl max-w-2xl text-gray-600 dark:text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Streamline your workflow, boost productivity, and take your business to the next level with our powerful platform.
      </motion.p>
      
      <motion.div
        className="flex gap-4 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <a href="#pricing" className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition">
          Get Started
        </a>
        <a href="#demo" className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition">
          Watch Demo
        </a>
      </motion.div>
    </section>
  );
} 