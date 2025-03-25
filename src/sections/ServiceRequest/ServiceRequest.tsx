import React from 'react';
import './servicerequest.css';

interface IProps {
  custom?: boolean;
}

export default function ServiceRequest({ custom }: IProps) {
  return (
    <section className="request">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="request-left">
              <h3 className={`request-title ${custom ? 'custom-title' : ''}`}>
                Appliance Repair Specialist in Your Neighborhood
              </h3>
              <a
                className={`request-call ${custom ? 'custom-call' : ''}`}
                href="tel:+19453335363"
              >
                +1 (945) 333-5363
              </a>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="request-right">
              <h2 className="request-form-title">Submit a Service Request</h2>
              <form className="request-form">
                <div className="row">
                  <div className="col-xl-12">
                    <input
                      type="text"
                      name="name"
                      id=""
                      placeholder="Your Name"
                      className="request-form-field"
                    />
                  </div>
                  <div className="col-xl-12">
                    <input
                      type="text"
                      name="phone"
                      id=""
                      placeholder="Phone No."
                      className="request-form-field"
                    />
                  </div>
                  <div className="col-xl-12">
                    <input
                      type="email"
                      name="email"
                      id=""
                      placeholder="Email Address"
                      className="request-form-field"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-12">
                    <textarea
                      name="message"
                      id=""
                      placeholder="Message"
                      className="request-form-area"
                    ></textarea>
                    <button className="request-form-btn" type="submit">
                      send request
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
