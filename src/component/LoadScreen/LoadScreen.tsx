import React from 'react';
import './loadscreen.css';

export default function LoadScreen() {
  return (
    <section className="loadscreen">
      <svg>
        <g className="g-group">
          <circle className="dot" cx="30vw" />
          <circle className="dot" cx="40vw" />
          <circle className="dot" cx="50vw" />
          <circle className="dot" cx="60vw" />
          <circle className="dot" cx="70vw" />
        </g>
      </svg>
    </section>
  );
}
