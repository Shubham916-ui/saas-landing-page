'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign in attempt with:', { email, password });
    // Add your authentication logic here
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Keep your existing nav bar - don't modify this part */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold">
            SaaSLogo
          </Link>
        </div>
        <div className="hidden md:flex space-x-8">
          <Link href="#features" className="hover:text-gray-300">Features</Link>
          <Link href="#pricing" className="hover:text-gray-300">Pricing</Link>
          <Link href="#about" className="hover:text-gray-300">About</Link>
          <Link href="#blog" className="hover:text-gray-300">Blog</Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/signin" className="hover:text-gray-300">Sign In</Link>
          <Link href="/get-started" className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Sign In Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="text-center mb-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Login
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Welcome back to the SaaS symphony
        </h1>
        
        <p className="text-gray-400 mb-8 text-center max-w-lg">
          Sign in to your account and explore the powerful features of our platform
        </p>
        
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full py-3 rounded-lg font-medium bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-black transition duration-300"
          >
            Sign In
          </button>
        </form>
        
        <div className="mt-6">
          <Link href="/forgot-password" className="text-gray-400 hover:text-white transition">
            Forgot Password?
          </Link>
        </div>
        
        <div className="mt-8 text-gray-400">
          Don't have an account?{' '}
          <Link href="/signup" className="text-blue-400 hover:text-blue-300 transition">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
} 