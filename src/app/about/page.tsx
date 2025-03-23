import AboutUs from '@/sections/AboutUs/AboutUs';
import Hero from '@/sections/Hero/Hero';
import React from 'react';

export default function About() {
  return (
    <main id="main">
      <Hero title="about" />
      <AboutUs custom />
    </main>
  );
}
