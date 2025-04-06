import React from 'react';
import './call.css';

export default function Call() {
  return (
    <div className="tel">
      <div className="tel-icons">
        <i className="bi bi-telephone"></i>
        <i className="bi bi-chat-dots"></i>
      </div>
      <div className="tel-content">
        <p className="tel-sub-title">Need help? Talk to an expert</p>
        <h4 className="tell-number">
          <a className="tel-link" href="tel:+16173377045">
            +1 (617) 337-7045
          </a>
        </h4>
      </div>
    </div>
  );
}
