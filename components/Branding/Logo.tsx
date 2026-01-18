import React from 'react';

/**
 * INSPIRON TECH - Institutional Logo Node
 * Mandate: Lowercase human ("inspiron") / Uppercase system ("TECH")
 */
export const InspironIcon = ({ className = "", scale = 1 }) => (
  <div className={`relative flex items-center justify-center ${className}`} style={{ width: '80px', height: '80px' }}>
    <img
      src="/icon.svg"
      alt="INSPIRON TECH Icon"
      className="object-contain w-full h-full"
      style={{ transform: `scale(${scale})` }}
    />
  </div>
);

export const InspironLogo = ({ className = "", size = "280px" }: { className?: string, size?: string | number }) => (
  <div className={`relative inline-flex items-center gap-4 ${className}`} style={{ width: size, height: '80px' }}>
    <img
      src="/icon.svg"
      alt="INSPIRON TECH"
      className="h-full w-auto object-contain scale-125 origin-left"
    />
    <h2 className="text-4xl font-black tracking-tighter leading-none text-white italic-none">
      inspiron<span className="text-[#FFD700]">TECH</span>
    </h2>
  </div>
);
