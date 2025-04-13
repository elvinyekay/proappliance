import AboutUs from '@/sections/AboutUs/AboutUs';
import Hero from '@/sections/Hero/Hero';
import React from 'react';

export const metadata = {
  title: 'About Us | Pro Appliance Express',
  description:
    'Learn more about Pro Appliance Express and our trusted appliance repair services in Boston MA.',
  keywords: [
    'appliance repair',
    'boston appliance service',
    'Pro Appliance Express',
    'home appliance repair',
    'trusted repair service',
  ],
  openGraph: {
    title: 'About Us | Pro Appliance Express',
    description:
      'Discover who we are at Pro Appliance Express — offering expert home appliance repairs across Boston MA.',
    url: 'https://proapplianceexpress.com/about',
    siteName: 'Pro Appliance Express',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pro Appliance Express Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Pro Appliance Express',
    description:
      'Learn more about our professional appliance repair team in Boston.',
    images: ['/og-image.jpg'],
    creator: '@ProApplianceExpress',
  },
};

export default function About() {
  return (
    <main id="main">
      <Hero title="about" />
      <AboutUs custom />
    </main>
  );
}
