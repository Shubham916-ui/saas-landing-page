'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'About', href: '#about' },
  { name: 'Blog', href: '#blog' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-30 transition-all ${scrolled ? 'backdrop-blur bg-black/60 shadow' : 'bg-black'} border-b border-neutral-800 text-white`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-2xl tracking-tight">
          <span className="text-2xl font-extrabold text-lime-400">🟩</span>
          <span className="text-xl font-bold text-white tracking-tight">SaaSLogo</span>
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center justify-center gap-8">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="px-4 py-2 rounded-lg font-medium text-white transition hover:bg-neutral-800 hover:text-white whitespace-nowrap">
              {link.name}
            </a>
          ))}
        </div>
        {/* Right Side Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/signin" className="px-4 py-2 rounded-lg bg-neutral-900 text-white border border-neutral-700 hover:bg-neutral-800 transition font-semibold whitespace-nowrap">
            Sign In
          </Link>
          <Link href="/get-started" className="px-4 py-2 rounded-lg bg-lime-400 text-black font-bold hover:bg-lime-300 transition whitespace-nowrap">
            Get Started
          </Link>
        </div>
        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col items-center justify-center p-2 w-8 h-8"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white my-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
        </button>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden bg-black/90 backdrop-blur-sm absolute top-full left-0 w-full flex flex-col items-center gap-6 py-6 border-b border-neutral-800 transition-all duration-300 ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="text-lg px-4 py-2 rounded-lg font-medium text-white transition hover:bg-neutral-800 hover:text-white" onClick={() => setMenuOpen(false)}>
              {link.name}
            </a>
          ))}
          <Link href="/signin" className="px-4 py-2 rounded-lg bg-neutral-900 text-white border border-neutral-700 hover:bg-neutral-800 transition font-semibold" onClick={() => setMenuOpen(false)}>
            Sign In
          </Link>
          <Link href="/get-started" className="px-4 py-2 rounded-lg bg-lime-400 text-black font-bold hover:bg-lime-300 transition" onClick={() => setMenuOpen(false)}>
            Get Started
          </Link>
        </div>
    </nav>
  );
} 