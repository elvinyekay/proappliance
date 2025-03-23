import React from 'react';
import './aboutus.css';
import Image from 'next/image';
import SectionTitle from '@/component/SectionTitle/SectionTitle';

interface IPops {
  custom?: boolean;
}

export default function AboutUs({ custom }: IPops) {
  return (
    <section className="aboutus">
      <div className="container">
        <div className="row">
          <div className={`col-xl-5 col-lg-5 ${custom && 'order-2'}`}>
            <div className={`aboutus-left ${custom && 'custom-left'}`}>
              <div className="aboutus-img">
                <Image
                  src={`${
                    custom
                      ? '/assets/img/about-one-img-2.jpg'
                      : '/assets/img/about-one-img-1.jpg'
                  }`}
                  alt="About us"
                  layout="intrinsic"
                  width={custom ? 600 : 365}
                  height={custom ? 750 : 541}
                  priority
                />
              </div>
            </div>
          </div>
          <div className={`col-xl-7 col-lg-7 ${custom && 'order-1'}`}>
            <div className="aboutus-right">
              <div className="aboutus-title">
                <SectionTitle
                  tag="ABOUT OUR COMPANY"
                  title="Take the work out of housework for you."
                />
              </div>
              <p className="aboutus-text-1">
                We are a team of skilled technicians dedicated to providing
                top-quality appliance repair services to our valued customers.
              </p>
              <p className={`aboutus-text ${custom && 'custom-text'}`}>
                At ProAppline Express, we understand the importance of having
                functioning appliances in your home or business. That’s why we
                work hard to ensure that your appliances are running smoothly
                and efficiently, so that you can focus on the more important
                things in life.
              </p>
              <p className={`aboutus-text ${custom && 'custom-text'}`}>
                With years of experience in the industry, our team has the
                knowledge and expertise to repair a wide variety of appliances,
                including refrigerators, ovens, dishwashers, washing machines,
                dryers, and more. We use the latest tools and techniques to
                diagnose and fix any issue your appliance may be facing, and we
                always strive to provide fast, reliable service.
              </p>
              {custom && (
                <>
                  <p className={`aboutus-text ${custom && 'custom-text'}`}>
                    At ProAlliance Express, we pride ourselves on our commitment
                    to customer satisfaction. We believe that honesty,
                    integrity, and professionalism are the keys to building
                    strong, long-lasting relationships with our customers. We
                    understand that your time is valuable, which is why we offer
                    flexible scheduling options to accommodate your busy
                    schedule.
                  </p>
                  <p className={`aboutus-text ${custom && 'custom-text'}`}>
                    Whether you need a simple repair or a more complex service,
                    you can count on our team to get the job done right the
                    first time. We are dedicated to providing the highest level
                    of service to our customers, and we stand behind our work
                    with a satisfaction guarantee.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
