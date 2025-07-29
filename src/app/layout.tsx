import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/organisms/Navbar';
import { Footer } from '@/organisms'; // Import the Footer component

export const metadata: Metadata = {
  title: 'SaaS Platform - Modern Solution',
  description: 'A powerful SaaS platform for modern teams',
  openGraph: {
    title: 'SaaS Platform - Modern Solution',
    description: 'A powerful SaaS platform for modern teams',
    url: 'https://your-domain.com',
    siteName: 'SaaS Platform',
    images: [
      {
        url: 'https://your-domain.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar />
        {children}
        <Footer /> {/* Add the Footer component here */}
      </body>
    </html>
  );
}
