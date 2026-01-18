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
    <img
        src="/icon.svg"
        alt="INSPIRON TECH Icon"
        className={`object-contain ${className}`}
        style={{
            transform: `scale(${scale})`,
            width: 'auto',
            height: 'auto'
        }}
    />
);

/**
 * InspironLogo - The Full Institutional Signature
 * Renders the n-Law Compliant Brand Lockup (Icon + Wordmark).
 * Characteristics:
 * - White "inspiron", Gold "TECH".
 * - Vertically Centered Alignment.
 * - 20% Spacing Constant.
 */
export const InspironLogo: React.FC<LogoProps> = ({ className, size }) => (
    <div className={`relative inline-flex items-center ${className}`}>
        {/* Cinematic Glow Node - Positioned behind the Icon's coordinate space */}
        <div
            className="absolute left-[2%] top-1/2 -translate-y-1/2 w-[25%] aspect-square bg-aqua/30 blur-2xl rounded-full pointer-events-none"
            aria-hidden="true"
        />

        <img
            src="/brand_lockup.svg"
            alt="INSPIRON TECH"
            className="relative z-10 select-none object-contain"
            style={{
                width: size || undefined, // Allow className to control width if size is undefined
                height: 'auto'
            }}
        />
    </div>
);
