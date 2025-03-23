import React from 'react';

interface IProps {
  width: string;
  height: string;
}

export default function Plus({ width, height }: IProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" fill="currentColor">
      <path d="M10 1H6V6L1 6V10H6V15H10V10H15V6L10 6V1Z" />
    </svg>
  );
}
