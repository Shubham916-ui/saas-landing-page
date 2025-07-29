'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'Alice Johnson',
    company: 'Acme',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: 'This platform transformed our workflow and made collaboration effortless!',
    rating: 5,
  },
  {
    name: 'Bob Smith',
    company: 'Globex',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'The analytics and reliability are unmatched. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Priya Patel',
    company: 'Initech',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    quote: 'Our team productivity soared after switching to this SaaS solution.',
    rating: 4,
  },
  {
    name: 'David Lee',
    company: 'Umbrella',
    avatar: 'https://randomuser.me/api/portraits/men/76.jpg',
    quote: 'Secure, fast, and beautiful. Everything we needed in one place.',
    rating: 5,
  },
];

const stars = (count: number) => (
  <div className="flex gap-0.5 mb-2">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className={`w-5 h-5 ${i < count ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
    ))}
  </div>
);

export default function TestimonialsSection() {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((i) => (i + 1) % testimonials.length);
  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-2">
          What Our Clients Say
        </h2>
        <div className="flex justify-center gap-6 mt-4">
          <span className="bg-primary/10 px-4 py-2 rounded-full text-primary font-medium">Acme</span>
          <span className="bg-primary/10 px-4 py-2 rounded-full text-primary font-medium">Globex</span>
          <span className="bg-primary/10 px-4 py-2 rounded-full text-primary font-medium">Initech</span>
          <span className="bg-primary/10 px-4 py-2 rounded-full text-primary font-medium">Umbrella</span>
        </div>
      </div>
      <div className="relative max-w-xl mx-auto">
        <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-primary/20 text-primary rounded-full p-2 shadow transition md:-left-8">
          <span className="sr-only">Previous</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-primary/20 text-primary rounded-full p-2 shadow transition md:-right-8">
          <span className="sr-only">Next</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        </button>
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border-2 border-transparent hover:border-primary/40 transition-all p-8 flex flex-col items-center relative min-h-[340px]"
          >
            <span className="absolute left-6 top-6 text-6xl text-primary/20 select-none">“</span>
            <img src={testimonials[idx].avatar} alt={testimonials[idx].name} className="w-20 h-20 rounded-full border-4 border-primary shadow mb-4 object-cover" />
            {stars(testimonials[idx].rating)}
            <blockquote className="text-lg italic mb-4 text-gray-700 dark:text-gray-200 z-10">{testimonials[idx].quote}</blockquote>
            <div className="flex items-center gap-3 mt-auto">
              <span className="font-semibold text-primary">{testimonials[idx].name}</span>
              <span className="text-gray-400">/</span>
              <span className="text-gray-500 dark:text-gray-400 flex items-center gap-2">
                {testimonials[idx].company}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
} 