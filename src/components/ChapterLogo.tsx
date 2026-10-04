import React from 'react';

interface ChapterLogoProps {
  className?: string;
  loading?: 'eager' | 'lazy';
}

export const ChapterLogo: React.FC<ChapterLogoProps> = ({ className = '', loading = 'eager' }) => (
  <img
    src="/images/ieee-chapter-logo-transparent.png"
    alt="IEEE Student Branch Chapter IIT Jammu"
    className={`object-contain ${className}`}
    width={1862}
    height={845}
    loading={loading}
    decoding="async"
  />
);
