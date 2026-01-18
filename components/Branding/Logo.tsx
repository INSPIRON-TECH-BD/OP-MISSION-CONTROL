import React from 'react';

interface LogoProps {
    className?: string;
    size?: number | string;
}

/**
 * InspironIcon - The Master Geometric Node
 * Renders the definitive 500x500 Master Icon from the Brand System.
 * Geometry: n-Law Compliant (Masked Gap, Option 1 Trace).
 */
export const InspironIcon: React.FC<{ className?: string, scale?: number }> = ({ className, scale = 1 }) => (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: '80px', height: '80px' }}> {/* 80px Mandate */}
        <img
            src="/icon.svg"
            alt="INSPIRON TECH Icon"
            className="object-contain w-full h-full"
            style={{
                transform: `scale(${scale})`
            }}
        />
    </div>
);

/**
 * InspironLogo - The Full Institutional Signature
 * Renders the n-Law Compliant Brand Lockup (Icon + Wordmark).
 * Characteristics:
 * - White "inspiron", Gold "TECH".
 * - Vertically Centered Alignment.
 * - 20% Spacing Constant.
 * - Dimensions: 240px x 80px (Locked).
 */
export const InspironLogo: React.FC<LogoProps> = ({ className, size }) => (
    <div className={`relative inline-flex items-center ${className}`} style={{ width: size || '240px', height: '80px' }}>
        {/* Cinematic Glow Node - Positioned behind the Icon's coordinate space */}
        <div
            className="absolute left-[2%] top-1/2 -translate-y-1/2 w-[25%] aspect-square bg-[#00D2FF]/30 blur-2xl rounded-full pointer-events-none"
            aria-hidden="true"
        />

        <img
            src="/brand_lockup.svg"
            alt="INSPIRON TECH"
            className="relative z-10 select-none object-contain w-full h-full"
        />
    </div>
);
