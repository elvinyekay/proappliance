import SectionTitle from '@/component/SectionTitle/SectionTitle';
import Facebook from '@/component/Svg/Facebook';
import Hero from '@/sections/Hero/Hero';
import React from 'react';
import './contact.css';

export default function Contact() {
  return (
    <main id="main">
      <Hero title="contact" />
      <section className="contact">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 contact-left">
              <div className="contct-title">
                <SectionTitle tag="Get in touch" title="Have any questions?" />
              </div>
              <div className="contact-text">
                <p className="contact-text-sub">
                  Contact us with any and all of your appliance concerns today,
                  we’ll get your appliances repaired so you can get back to
                  normal!
                </p>
                <div className="contact-items">
                  <div className="contact-item">
                    <i className="bi bi-geo-alt"></i>
                    <div className="contact-item-content">
                      <a href="#" className="contact-item-link">
                        Location
                      </a>
                      <p className="contact-item-desc">
                        656 Ocean Ave APT 621, Revere, MA 02151, United States
                      </p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="bi bi-envelope-at"></i>
                    <div className="contact-item-content">
                      <a
                        href="mailto:proappliance@gmail.com"
                        className="contact-item-link"
                      >
                        Email us
                      </a>
                      <p className="contact-item-desc">
                        proappliance@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="bi bi-telephone-inbound"></i>
                    <div className="contact-item-content">
                      <a href="tel:+19453335363" className="contact-item-link">
                        Call us
                      </a>
                      <p className="contact-item-desc">+1(945) 333-5363 </p>
                    </div>
                  </div>
                </div>
                <div className="contact-bottom">
                  <h5>Follow our social media : </h5>
                  <div className="contact-bottom-icons">
                    <a href="#">
                      <Facebook width="20px" height="20px" color="#00a7eb" />
                    </a>
                    <a href="#">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 contact-right">
              <iframe
                loading="lazy"
                src="https://maps.google.com/maps?q=Fasteny%20Appliance%20Repair%20LLC&amp;t=m&amp;z=14&amp;output=embed&amp;iwloc=near"
                title="Pro Appliance Express"
                aria-label="Pro Appliance Express"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
