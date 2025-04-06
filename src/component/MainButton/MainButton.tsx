import React from 'react';
import './button.css';

interface IPorps {
  title: string;
  href?: string;
}

export default function MainButton({ title, href }: IPorps) {
  return (
    <>
      <a href={href} className="mainbtn">
        <span>{title}</span>
      </a>
    </>
  );
}
