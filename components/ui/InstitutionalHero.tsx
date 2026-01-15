/**
 * INSPIRON TECH - Institutional Hero v1.0
 * Engineered for MD ABU HASAN
 */

import React from 'react';
import { ShieldCheck, MessageSquareCode, ArrowRight, BadgeCheck } from 'lucide-react';
import Link from 'next/link';

export const InstitutionalHero = () => {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center bg-[#010409] overflow-hidden px-6">
            {/* Structural Tech Grid */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00ffff_1px,transparent_1px)] [background-size:40px_40px]"></div>

            <div className="relative z-10 text-center max-w-5xl">
                {/* Meta Verification Badge */}
                {/* Meta Verification Badge */}
                {/* Dual Authority Badges */}
                <div className="relative z-20 flex flex-col md:flex-row gap-4 justify-center mb-10">

                    {/* 1. Meta Verified (Aqua) */}
                    <div className="
                        inline-flex items-center gap-3 
                        px-5 py-2.5 rounded-full 
                        bg-aqua/5 border border-aqua/30 
                        backdrop-blur-xl
                        text-aqua text-[10px] font-black 
                        uppercase tracking-[0.3em] 
                        animate-pulse shadow-[0_0_20px_rgba(0,255,255,0.1)]
                    ">
                        <ShieldCheck size={14} className="text-aqua" />
                        Meta Verified: 1372121971105461
                    </div>

                    {/* 2. Manager.io Partner (Gold) */}
                    <div className="
                        inline-flex items-center gap-3 
                        px-5 py-2.5 rounded-full 
                        bg-[#FFD700]/5 border border-[#FFD700]/30 
                        backdrop-blur-xl
                        text-[#FFD700] text-[10px] font-black 
                        uppercase tracking-[0.3em] 
                        shadow-[0_0_20px_rgba(255,215,0,0.1)]
                    ">
                        <BadgeCheck size={14} className="text-[#FFD700]" />
                        Official Manager.io Partner
                    </div>

                </div>

                <h1 className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-8">
                    Stabilizing <br /> <span className="text-[#fc0]">Financial Gravity.</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-14 leading-relaxed font-medium">
                    Official Manager.io Partner in Bangladesh. We install 0.1% error-tolerant logic for 100+ Crore industrial and agro enterprises.
                </p>

                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    <a
                        href="https://wa.me/8801601618030"
                        className="flex items-center justify-center gap-4 bg-aqua text-navy font-black px-12 py-6 rounded-2xl hover:scale-105 transition-all uppercase tracking-widest text-sm shadow-[0_0_60px_rgba(0,255,255,0.3)]"
                    >
                        <MessageSquareCode size={22} /> Start Technical Audit
                    </a>
                    <Link
                        href="/precision-audit"
                        className="flex items-center justify-center gap-3 px-12 py-6 rounded-2xl border border-white/10 text-white font-bold hover:bg-white/5 transition-all uppercase tracking-widest text-sm"
                    >
                        View Case Study <ArrowRight size={18} />
                    </Link>
                </div>
            </div>

            {/* Institutional Footer Hint */}
            <div className="absolute bottom-10 text-[10px] text-white/20 uppercase tracking-[1em] font-bold">
                Dhaka Command Node // MD ABU HASAN
            </div>
        </section>
    );
};
