import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  level?: 'h1' | 'h2';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ badge, title, subtitle, align = 'center', level = 'h2' }) => {
  const Heading = level;
  return (
    <div className={'section-heading ' + (level === 'h1' ? 'page-heading ' : '') + (align === 'center' ? 'text-center mx-auto' : 'text-left')}>
      {badge && <p className="eyebrow mb-4">{badge}</p>}
      <Heading className={(level === 'h1' ? 'text-3xl sm:text-4xl lg:text-5xl' : 'text-2xl sm:text-3xl') + ' font-bold tracking-tight text-[#003366] leading-tight'}>{title}</Heading>
      {subtitle && <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">{subtitle}</p>}
      <div className={'mt-6 h-1 w-12 rounded-full bg-sky-500 ' + (align === 'center' ? 'mx-auto' : '')} aria-hidden="true" />
    </div>
  );
};
