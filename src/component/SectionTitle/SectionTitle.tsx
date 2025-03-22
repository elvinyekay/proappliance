import React from 'react';
import './sectiontitle.css';

interface IProps {
  tag: string;
  title: string;
}

export default function SectionTitle({ tag, title }: IProps) {
  return (
    <div className="section-title">
      <h6 className="section-title-tagline">{tag}</h6>
      <h3 className="section-title-text">{title}</h3>
    </div>
  );
}
