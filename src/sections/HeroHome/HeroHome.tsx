import React from 'react';
import './herohome.css';
import Link from 'next/link';

export default function HeroHome() {
  return (
    <div className="herohome">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-8 col-md-9">
            <div className="herohome-content">
              <h1 className="hero-title">
                Swift Solutions for Appliance Repair
              </h1>
              <h4 className="hero-text">
                Trust Pro Appliance Express for All Your Repair Needs
              </h4>
              <div className="hero-btnbox">
                <a href="tel:+19453335363">
                  <span>+1 (945) 333-5363</span>
                </a>
                <Link href={'/request'}>
                  <span>Service Request</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
