import React from 'react';
import Hero from '@/sections/Hero/Hero';
import OurServices from '@/sections/OurServices/OurServices';
import './services.css';

export default function Services() {
  return (
    <main id="main" className="page-services">
      <div className="services-content">
        <Hero title="services" />
      </div>
      <div className="services-wrapper">
        <div className="services-overlay"></div>
        <div className="services-content">
          <OurServices custom />
        </div>
      </div>
    </main>
  );
}
