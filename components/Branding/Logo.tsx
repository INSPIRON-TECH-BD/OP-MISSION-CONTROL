import React from 'react';

interface LogoProps {
    className?: string;
    size?: number;
}

/**
 * InspironIcon - Geometrically Refined Technical Node
 * Features a balanced infinite loop and precision gold node.
 */
export const InspironIcon: React.FC<{ className?: string, scale?: number }> = ({ className, scale = 1 }) => (
    <svg
        viewBox="0 0 1024 1024"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={{ transform: `scale(${scale})` }}
        aria-label="INSPIRON TECH Icon"
    >
        <g transform="translate(192, 192) scale(1.2)">
            {/* Primary Infinite Loop - Electric Aqua */}
            <path
                d="M170.513,390.122c19.041-28.67,153.424-248.52,173.058-275.708,8.149-8.949,19.75-15.307,32.112-15.447,27.55-1.022,48.705,28.922,35.652,54.215-9.11,17.609-14.589,23.714-34.219,56.237-53.038,84.66-128.452,208.551-146.379,234.648-53.063,74.719-163.653,75.626-212.52-3.604-21.821-35.207-24.321-79.579-5.97-117.163,17.907-33.149,99.941-162.985,138.482-226.749,3.662-6.055,6.767-11.057,11.824-16.692,33.443-38.943,96.644-41.399,127.064,2.159,7.858,11.358,12.948,24.767,14.777,38.353.442,3.958-.9,7.273-2.987,10.53-4.825,7.815-14.609,23.603-23.061,37.262-3.023,4.883-5.876,9.492-8.271,13.36-3.7,5.178-5.834,12.552-9.921,8.732-9.712-11.301-18.25-29.614-26.856-42.475-4.833-7.492-14.847-9.796-20.424-2.324-12.261,19.54-89.812,146.075-101.454,164.856-5.259,8.522-12.601,20.202-18.389,29.502-4.836,7.888-9.188,14.126-11.624,20.789-7.631,18.434-.851,40.294,15.896,51.202,27.122,17.669,57.146,3.423,73.128-21.567l.081-.116Z"
                fill="#00FFFF"
            />
            {/* Supporting Architecture Stroke */}
            <path
                d="M457.55,497.321c-15.856-1.518-27.842-9.715-36.62-22.023-1.652-3.001-90.107-150.959-89.665-152.344,11.176-18.256,47.227-76.759,47.245-76.808,4.218,7.102,115.6,195.221,116.923,197.44,15.224,25.077-10.234,54.996-37.647,53.747l-.235-.012Z"
                fill="#00FFFF"
            />
            {/* Precision Gold Node/Dot */}
            <circle cx="418.478" cy="46.739" r="46.739" fill="#FFCC00" />
        </g>
    </svg>
);

/**
 * InspironLogo - The Full Institutional Signature
 * Combines the refined icon with premium Montserrat typography.
 */
export const InspironLogo: React.FC<LogoProps> = ({ className, size = 200 }) => (
    <div className={`flex items-center gap-3 ${className}`}>
        <div className="relative group">
            {/* Multi-Stage Glow Node */}
            <div className="absolute inset-0 bg-aqua/20 blur-lg rounded-full group-hover:bg-aqua/40 transition-all duration-700" />
            <InspironIcon className="relative z-10 w-12 h-12" />
        </div>

        <div className="flex items-baseline font-auth tracking-tighter select-none">
            <span className="text-2xl font-black text-white tracking-[-0.05em]">
                inspiron
            </span>
            <span className="ml-1 text-2xl font-light text-aqua uppercase tracking-[0.1em]">
                TECH
            </span>
        </div>
    </div>
);
