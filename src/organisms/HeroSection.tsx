'use client';

import React, { useEffect } from 'react';

export default function HeroSection() {
  useEffect(() => {
    console.log('HeroSection mounted, using correct image path');
  }, []);

  return (
    <div className="hero-container">
      <section className="content-container">
        <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-12 pt-24 w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white max-w-3xl mb-6 sm:mb-8 drop-shadow-xl leading-tight" 
              style={{textShadow: '0 2px 4px rgba(0,0,0,0.5)'}}>
            Streamline your workflow, boost productivity, and take your business to the next level with our powerful platform.
          </h1>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <a
              href="#pricing"
              className="px-8 py-3 bg-white text-black font-semibold rounded-lg shadow hover:bg-gray-200 transition text-center min-w-[140px]"
            >
              Get Started
            </a>
            <a
              href="#demo"
              className="px-8 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition bg-transparent text-center min-w-[140px]"
            >
              Watch Demo
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero-container {
          position: relative;
          width: 100%;
          min-height: 100vh;
          background-image: url('/images/bgimage.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .hero-container {
            background-attachment: scroll;
            background-position: center center;
          }
        }

        .hero-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6); /* Dark overlay */
          z-index: 1;
        }

        .content-container {
          position: relative;
          z-index: 2;
          width: 100%;
        }
      `}</style>
    </div>
  );
}