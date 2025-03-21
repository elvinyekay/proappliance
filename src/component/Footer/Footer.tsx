import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <section className="footer">
      <div className="footer-header">
        <div className="container">
          <div className="footer-head-items">
            <div className="footer-head-item">
              <i className="bi bi-geo-alt"></i>
              <p className="item-content">
                <span>54B, Tailstoi Town 5238 MT, </span>
                <span>La city, IA 522364</span>
              </p>
              <p className="line"></p>
            </div>
            <div className="footer-head-item">
              <i className="bi bi-envelope"></i>
              <p className="item-content">
                <span>Email us:</span>
                <a href="mailto:proapplianceexpress@gmail.com">
                  proapplianceexpress@gmail.com
                </a>
              </p>
              <p className="line"></p>
            </div>
            <div className="footer-head-item">
              <i className="bi bi-telephone"></i>
              <p className="item-content">
                <span>Call us on:</span>
                <a href="tel:+19453335363" className="item-tel">
                  + 1945 333 5363
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-inner">
        <div className="footer-inner-item">
          <h3 className="logo">ProAppliance</h3>
          <p>
            Capitalize on low hanging fruit to identify a ballpark value added
            activity to beta test.
          </p>
        </div>
        <div className="footer-inner-item">
          <h3 className="logo">ProAppliance</h3>
          <p>
            Capitalize on low hanging fruit to identify a ballpark value added
            activity to beta test.
          </p>
        </div>
        <div className="footer-inner-item">
          <h3 className="logo">ProAppliance</h3>
          <p>
            Capitalize on low hanging fruit to identify a ballpark value added
            activity to beta test.
          </p>
        </div>
      </div>
      <div className="footer-copy">
        <p className="copy-text">
          Copyright © 2023 "Fasteny Appliance Repair" LLC.All right reserved.
        </p>
        <p>Website developed by Elvin.</p>
      </div>
    </section>
  );
}
