import React from 'react';
import './request.css';
import Hero from '@/sections/Hero/Hero';
import ServiceRequest from '@/sections/ServiceRequest/ServiceRequest';

export const metadata = {
  title: 'Service Request | Pro Appliance Express',
  description:
    'Request fast and reliable appliance repair services in Boston, MA. Fill out our service request form and get a quick response from our expert team.',
  keywords: [
    'Service request',
    'Appliance repair request',
    'Schedule appliance repair',
    'Boston appliance repair',
    'Book repair service',
    'Home appliance technician',
    'Appliance service form',
    'Request appliance help',
  ],
  openGraph: {
    title: 'Service Request | Pro Appliance Express',
    description:
      'Need appliance repair in Boston? Submit a service request today and get fast, professional help.',
    url: 'https://proapplianceexpress.com/request',
    type: 'website',
    siteName: 'Pro Appliance Express',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Service Request - Pro Appliance Express',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Service Request | Pro Appliance Express',
    description:
      'Submit your appliance repair request online. We provide same-day service in Boston and nearby areas.',
    images: ['/og-image.jpg'],
  },
};

export default function Request() {
  return (
    <div>
      <Hero title="Service Request" />
      <ServiceRequest custom />
    </div>
  );
}
