import Image from 'next/image';
import './hero.css';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="hero">
      {/* <Image
        src="/assets/img/slider/main-slider-bg.jpg"
        alt="Hero Image"
        width={1200}
        height={800}
        className="hero"
      /> */}
      <h1 className="hero-title">Swift Solutions for Appliance Repair</h1>
      <p className="hero-text">
        Trust Fasteny Appliance Repair for All Your Repair Needs
      </p>
      <a href="tel:+19453335363">+1 (945) 333-5363</a>
      <Link href={'/request'}>Service Request</Link>
    </div>
  );
}
