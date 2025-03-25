import React from 'react';
import './request.css';
import Hero from '@/sections/Hero/Hero';
import ServiceRequest from '@/sections/ServiceRequest/ServiceRequest';

export default function Request() {
  return (
    <div>
      <Hero title="Service Request" />
      <ServiceRequest custom />
    </div>
  );
}
