import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Garcar Enterprise | AI-Powered Business Automation',
  description: 'Automate customer onboarding, billing, and growth with AI-powered enterprise infrastructure. Built for SaaS teams.',
  keywords: 'SaaS automation, billing automation, customer onboarding, enterprise AI, revenue growth',
  openGraph: {
    title: 'Garcar Enterprise | AI-Powered Business Automation',
    description: 'Scale your business without scaling operations. Automate billing, onboarding, and growth.',
    type: 'website',
    url: 'https://garcar.io',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Garcar Enterprise',
    description: 'AI-powered business automation platform',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-950 text-white">
        {children}
      </body>
    </html>
  );
}
