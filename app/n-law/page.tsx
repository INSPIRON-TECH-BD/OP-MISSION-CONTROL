/**
 * INSPIRON TECH - The n-Law Standards
 * Official Operational Code // Variant C Integrated
 */

import React from 'react';
import {
    Scale, ShieldCheck, ArrowRight, Zap, Lock,
    Hexagon, Code2, ShieldAlert, CheckCircle2, Factory
} from 'lucide-react';
import Link from 'next/link';
import { InspironLogo } from '@/components/Branding/Logo';
import GeometryInspector from '@/components/Branding/GeometryInspector';

export default function NLawStandards() {
    return (
        <div className="min-h-screen bg-[#010409] text-white font-sans selection:bg-aqua selection:text-navy">

            {/* 1. INSTITUTIONAL HEADER (Matched to Precision Audit) */}
            {/* 1. INSTITUTIONAL HEADER - Corrected for Visibility */}
            <header className="border-b border-white/10 py-10 px-10 sticky top-0 bg-[#010409]/90 backdrop-blur-xl z-50 flex justify-between items-center">
                <div className="flex items-center gap-10">
                    <Link href="/" className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 hover:text-white transition-all">
                        ← RETURN TO BASE
                    </Link>
                    <span className="h-8 w-px bg-white/10"></span>
                    <InspironLogo />
                </div>
            </header>

            {/* 2. EXECUTIVE HERO (Matched to Precision Audit) */}
            <section className="relative pt-32 pb-20 px-10 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,_rgba(0,210,255,0.05)_0%,_transparent_50%)]"></div>
                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-2 rounded-full mb-12">
                        <Scale size={14} className="text-aqua" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-300">Phase 02: The N-Law Standards</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-12">
                        Zero <br /> <span className="text-gold">Approximation.</span>
                    </h1>

                    <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
                        <p className="max-w-xl text-2xl text-gray-400 leading-relaxed font-medium italic border-l-4 border-aqua pl-10">
                            "Software must not be bought. It must be engineered. Every line of logic in MISSION CONTROL must serve a specific operational ROI metric."
                        </p>
                    </div>
                </div>
            </section>

            {/* 2.5 GEOMETRIC SENTRY (LIVE AUDIT) */}
            <section className="px-10 pb-32">
                <div className="max-w-4xl mx-auto space-y-20">
                    <GeometryInspector />

                    {/* 3.0 RESPONSIVE HEADER LAB (USER REQUEST) */}
                    <div className="border border-white/10 rounded-[32px] bg-[#001226]/50 p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-30">
                            <span className="text-[9px] font-black uppercase tracking-widest text-white">Lab Node 3.0</span>
                        </div>

                        <h3 className="text-2xl font-black text-white uppercase tracking-widest mb-10">Responsive Header Logic</h3>

                        <div className="grid md:grid-cols-2 gap-12">
                            {/* MOBILE SIMULATION */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-aqua text-xs font-bold uppercase">Mobile Viewport</span>
                                    <span className="text-gray-500 text-[10px] uppercase tracking-widest">(Icon Dominance)</span>
                                </div>
                                <div className="w-[375px] h-[60px] bg-black border border-white/10 rounded-xl flex items-center px-6 relative mx-auto md:mx-0">
                                    {/* MOCK HEADER */}
                                    <div className="w-full flex justify-between items-center opacity-80">
                                        <div className="w-6 h-6 bg-white/10 rounded-md"></div> {/* Menu */}
                                        <div className="absolute left-1/2 -translate-x-1/2">
                                            <InspironLogo size="120px" className="md:hidden" /> {/* Current Mobile Hack */}
                                            {/* MY VERSION: ICON ONLY */}
                                            <div className="p-2 bg-aqua/10 rounded-full border border-aqua/30">
                                                <InspironLogo size="0" className="hidden" /> {/* Hide old */}
                                                <img src="/icon.svg" className="w-8 h-8" alt="Mobile Logic" />
                                            </div>
                                        </div>
                                        <div className="w-6 h-6 bg-white/10 rounded-full"></div> {/* Profile */}
                                    </div>
                                    <div className="absolute -right-4 top-1/2 -translate-y-1/2 text-aqua text-[10px] font-bold rotate-90 origin-bottom">OPTIMIZED</div>
                                </div>
                                <p className="text-[10px] text-gray-400 leading-relaxed uppercase tracking-wider">
                                    Logic: On restricted widths, the "Wordmark" is jettisoned. The "Ribbon Node" anchors the center axis.
                                </p>
                            </div>

                            {/* DESKTOP SIMULATION */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-gold text-xs font-bold uppercase">Desktop Viewport</span>
                                    <span className="text-gray-500 text-[10px] uppercase tracking-widest">(Full Authority)</span>
                                </div>
                                <div className="w-full h-[60px] bg-black border border-white/10 rounded-xl flex items-center px-8 relative">
                                    <div className="flex items-center gap-12 w-full">
                                        <InspironLogo size={48} /> {/* Standard Fit for 60px Header */}
                                        <div className="flex-1 flex gap-4 justify-end opacity-30">
                                            <div className="w-20 h-2 bg-white/20 rounded-full"></div>
                                            <div className="w-20 h-2 bg-white/20 rounded-full"></div>
                                            <div className="w-20 h-2 bg-white/20 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-[10px] text-gray-400 leading-relaxed uppercase tracking-wider">
                                    Logic: Full "Cyan Protocol" lockup is deployed. 20% Gap is maintained.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. THE LAW GRID */}
            <section className="py-24 px-10 border-y border-white/5 bg-white/[0.01]">
                <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">

                    {/* RULE 01 */}
                    <LawCard
                        number="01"
                        title="Zero Approximation"
                        icon={<Scale className="text-aqua" size={32} />}
                        content="All transaction data must be verified against field delivery challans. No manual entry is permitted without secondary systematic audit. Discrepancies > 0.01% trigger immediate re-verification."
                        color="border-aqua"
                    />

                    {/* RULE 02 */}
                    <LawCard
                        number="02"
                        title="Pure Vectoring"
                        icon={<Hexagon className="text-gold" size={32} />}
                        content="The INSPIRON brand icon must never be exported in raster formats (JPEG/PNG) for institutional assets. 1:1 SVG precision is required to maintain architectural integrity at infinity scaling."
                        color="border-gold"
                    />

                    {/* RULE 03 */}
                    <LawCard
                        number="03"
                        title="No Silicone Solutions"
                        icon={<Code2 className="text-white" size={32} />}
                        content="We reject subscription-based dependency. Every implementation must be a sovereign asset owned by the client, built on open-source foundations with zero vendor lock-in."
                        color="border-white"
                    />

                    {/* RULE 04 */}
                    <LawCard
                        number="04"
                        title="Persistent Audit"
                        icon={<ShieldAlert className="text-red-500" size={32} />}
                        content="Every automated workflow must include a persistent logging node. If a system fails, the root cause must be identifiable within 120 seconds of detection."
                        color="border-red-500"
                    />

                </div>
            </section>

            {/* 4. INSTITUTIONAL FOOTER */}
            <footer className="py-20 text-center opacity-30 px-10">
                <div className="flex justify-center gap-12 mb-10 text-[9px] font-black uppercase tracking-[0.5em] text-gray-500">
                    <span>Verified IP</span>
                    <span>n-Law Protocol</span>
                    <span>Dhaka Node 2026</span>
                </div>
                <p className="text-[10px] text-gray-600 font-black uppercase tracking-[1em]">MD ABU HASAN | OP-MISSION-CONTROL</p>
            </footer>

        </div>
    );
}

function LawCard({ number, title, icon, content, color }: any) {
    return (
        <div className={`group relative p-12 bg-[#001226]/50 border-t-4 ${color} hover:bg-[#001830] transition-all duration-500`}>
            <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-6xl font-black text-white stroke-text">{number}</span>
            </div>
            <div className="mb-8 p-4 bg-white/5 rounded-2xl w-fit border border-white/5">
                {icon}
            </div>
            <h3 className="text-2xl font-black uppercase mb-6 tracking-tight text-white group-hover:text-aqua transition-colors">
                Rule {number}: {title}
            </h3>
            <p className="text-gray-400 leading-relaxed font-medium text-sm">
                {content}
            </p>
        </div>
    );
}
