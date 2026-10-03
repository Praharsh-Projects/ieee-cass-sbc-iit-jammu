import React from 'react';

export const CircuitBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0" aria-hidden="true">
      {/* Light PCB Grid Overlay */}
      <div className="absolute inset-0 pcb-grid opacity-30" />
      
      {/* Decorative Circuit Lines (Left) */}
      <svg
        className="absolute top-10 -left-12 w-96 h-96 opacity-10 text-sky-400"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 80 H120 L160 120 V220 L200 260 H340"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="6 6"
        />
        <circle cx="120" cy="80" r="4" fill="currentColor" />
        <circle cx="160" cy="120" r="4" fill="currentColor" />
        <circle cx="200" cy="260" r="4" fill="currentColor" />
        <circle cx="340" cy="260" r="5" fill="#003366" />
        <path
          d="M0 180 H80 L140 240 H280"
          stroke="#009FE3"
          strokeWidth="1.5"
        />
        <circle cx="80" cy="180" r="3.5" fill="#009FE3" />
        <circle cx="280" cy="240" r="3.5" fill="#003366" />
      </svg>

      {/* Decorative Circuit Lines (Right) */}
      <svg
        className="absolute top-1/4 -right-16 w-[500px] h-[500px] opacity-10 text-sky-500"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M500 100 H380 L320 160 V300 L260 360 H100"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="380" cy="100" r="4" fill="currentColor" />
        <circle cx="320" cy="160" r="4" fill="#003366" />
        <circle cx="260" cy="360" r="4" fill="currentColor" />
        <circle cx="100" cy="360" r="5" fill="#009FE3" />
        
        <path
          d="M500 260 H420 L370 310 H220"
          stroke="#003366"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <circle cx="420" cy="260" r="3" fill="#003366" />
        <circle cx="220" cy="310" r="3" fill="#009FE3" />
      </svg>

      {/* Subtle Sky Blue Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-sky-100/60 to-transparent blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[300px] bg-sky-100/40 blur-[130px] rounded-full pointer-events-none" />
    </div>
  );
};
