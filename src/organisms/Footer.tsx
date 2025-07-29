import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand/Description */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl font-extrabold text-lime-400">🟩</span>
            <span className="text-xl font-bold text-white tracking-tight">SaaSLogo</span>
          </div>
          <p className="mb-2">Your all-in-one SaaS platform for productivity, collaboration, and growth.</p>
          <p className="text-xs">Curated by <span className="text-white font-semibold">Your Name</span></p>
        </div>
        {/* SaaS Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Platform</h4>
          <ul className="space-y-2">
            <li><Link href="#features" className="hover:text-white transition">Features</Link></li>
            <li><Link href="#pricing" className="hover:text-white transition">Pricing</Link></li>
            <li><Link href="#about" className="hover:text-white transition">About</Link></li>
            <li><Link href="#blog" className="hover:text-white transition">Blog</Link></li>
          </ul>
        </div>
        {/* Information */}
        <div>
          <h4 className="text-white font-semibold mb-3">Information</h4>
          <ul className="space-y-2">
            <li><Link href="/signin" className="hover:text-white transition">Sign In</Link></li>
            <li><Link href="/get-started" className="hover:text-white transition">Get Started</Link></li>
            <li><Link href="#faq" className="hover:text-white transition">FAQ</Link></li>
            <li><Link href="#contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>
        {/* Legal/Social */}
        <div>
          <h4 className="text-white font-semibold mb-3">Legal</h4>
          <ul className="space-y-2">
            <li><Link href="#privacy" className="hover:text-white transition">Privacy Policy</Link></li>
            <li><Link href="#terms" className="hover:text-white transition">Terms of Service</Link></li>
            <li><Link href="#license" className="hover:text-white transition">License</Link></li>
          </ul>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-white transition">Twitter(X)</a>
            <a href="#" className="hover:text-white transition">Instagram</a>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center text-xs text-gray-600">
        © Copyright SaaSLogo {new Date().getFullYear()}
      </div>
    </footer>
  );
}