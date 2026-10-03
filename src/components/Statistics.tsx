import React from 'react';
import { Users, Calendar, Cpu, Globe, Award } from 'lucide-react';
import { CHAPTER_STATS } from '../data/stats';

export const Statistics: React.FC = () => {
  const renderIcon = (iconName: string) => {
    const icons: Record<string, typeof Cpu> = { users: Users, calendar: Calendar, globe: Globe, award: Award };
    const Icon = icons[iconName] ?? Cpu;
    return <Icon className="w-6 h-6 text-sky-700" />;
  };

  return (
    <section className="relative z-10 pt-5 pb-10 sm:pb-12 bg-white">
      <div className="site-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CHAPTER_STATS.map((stat) => (
            <div key={stat.label} className="surface-card relative p-5 sm:p-6 h-full">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 rounded-xl bg-sky-50 border border-sky-100">{renderIcon(stat.icon)}</div>
                <div className="text-2xl sm:text-3xl font-bold text-sky-700 tracking-tight">{stat.value}</div>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-[#003366]">{stat.label}</p>
                <p className="text-sm text-slate-500">{stat.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
