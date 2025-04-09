'use client';
import React, { useState } from 'react';
import './servicerequest.css';

interface IProps {
  custom?: boolean;
}

export default function ServiceRequest({ custom }: IProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);

    const res = await fetch('/api/sendMail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (data.success) {
      alert('Mesaj gonderildi');
    } else {
      alert('Xeta bash verdi');
    }
  };

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
                href="tel:+16173377045"
              >
                +1 (617) 337-7045
              </a>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="request-right">
              <h2 className="request-form-title">Submit a Service Request</h2>
              <form className="request-form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-xl-12">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="request-form-field"
                      onChange={handleChange}
                      value={formData.name}
                    />
                  </div>
                  <div className="col-xl-12">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone No."
                      className="request-form-field"
                      onChange={handleChange}
                      value={formData.phone}
                    />
                  </div>
                  <div className="col-xl-12">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="request-form-field"
                      onChange={handleChange}
                      value={formData.email}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-12">
                    <textarea
                      name="message"
                      placeholder="Message"
                      className="request-form-area"
                      onChange={handleChange}
                      value={formData.message}
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
