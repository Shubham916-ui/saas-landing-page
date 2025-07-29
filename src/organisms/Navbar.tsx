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
      className={`fixed top-0 left-0 w-full z-30 transition-all ${scrolled ? 'backdrop-blur bg-black/60 shadow' : 'bg-transparent'} text-white`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="font-bold text-2xl tracking-tight">
          SaaSLogo
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-8">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="hover:text-primary transition">
              {link.name}
            </a>
          ))}
        </div>
        {/* Right Side Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/signin" className="px-4 py-2 rounded hover:bg-white/10 transition">
            Sign In
          </Link>
          <Link href="/get-started" className="px-4 py-2 rounded bg-primary text-white hover:bg-primary/90 transition">
            Get Started
          </Link>
        </div>
        {/* Hamburger */}
        <button
          className="md:hidden flex items-center justify-center p-2"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-sm absolute top-full left-0 w-full flex flex-col items-center gap-6 py-6">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="text-lg hover:text-primary transition" onClick={() => setMenuOpen(false)}>
              {link.name}
            </a>
          ))}
          <Link href="/signin" className="px-4 py-2 rounded hover:bg-white/10 transition" onClick={() => setMenuOpen(false)}>
            Sign In
          </Link>
          <Link href="/get-started" className="px-4 py-2 rounded bg-primary text-white hover:bg-primary/90 transition" onClick={() => setMenuOpen(false)}>
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
} 