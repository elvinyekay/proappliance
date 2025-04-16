import BrandsRepair from '@/sections/BrandsRepair/BrandsRepair';
import Hero from '@/sections/Hero/Hero';
import React from 'react';

export const metadata = {
  title: 'Brands We Repair | Pro Appliance Express - Boston, MA',
  description:
    'Pro Appliance Express repairs all major appliance brands including Samsung, LG, Whirlpool, GE, Bosch, Maytag, and more. Serving Boston and surrounding areas.',
  keywords: [
    'Appliance brands we repair',
    'Samsung appliance repair',
    'LG appliance service',
    'Whirlpool repair Boston',
    'GE appliance technician',
    'Bosch repair Boston',
    'Maytag appliance fix',
    'Appliance repair all brands',
    'Pro Appliance Express brands',
    'Boston appliance brand repair',
  ],
  openGraph: {
    title: 'Brands We Repair | Pro Appliance Express',
    description:
      'We service a wide range of top appliance brands. Find out if your appliance brand is covered by our expert technicians in Boston.',
    url: 'https://proapplianceexpress.com/brands',
    type: 'website',
    siteName: 'Pro Appliance Express',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Appliance Brands - Pro Appliance Express',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brands We Repair | Pro Appliance Express',
    description:
      'Explore the top appliance brands we repair in Boston, including Samsung, LG, GE, Whirlpool, Bosch and more.',
    images: ['/og-image.jpg'],
  },
};

export default function Brands() {
  return (
    <main id="main">
      <Hero title="brands" />
      <BrandsRepair />
    </main>
  );
}
