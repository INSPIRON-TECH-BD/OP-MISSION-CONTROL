import React from 'react';
import { ShieldCheck, Server } from 'lucide-react';
import Link from 'next/link';

export const InstitutionalHero = () => {
    return (
        <section className="bg-[#002147] py-24 text-white overflow-hidden border-b border-white/10">
            <div className="container mx-auto px-6 text-center md:text-left">
                {/* STATIC HEADLINE - NO ANIMATION TO PREVENT JUMPING */}
                <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter leading-[0.9]">
                    STABILIZING <br /> <span className="text-[#00FFFF]">FINANCIAL GRAVITY</span>
                </h1>

                <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mb-12 font-medium leading-relaxed">
                    Logic Migration & Audit Architecture for BDT 100 Crore+ Enterprises.
                    <br /><span className="text-[#00FFFF]">0.1% Error Tolerance.</span>
                </p>

                {/* TRUST BAR - FIXED POSITION (Simulated SVGs with Text/Icons for reliability) */}
                <div className="flex flex-col md:flex-row items-center gap-8 opacity-60 hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-2">
                        <ShieldCheck size={24} className="text-[#00FFFF]" />
                        <span className="text-sm font-bold tracking-widest uppercase">Meta Verified Developer</span>
                    </div>
                    <div className="hidden md:block h-8 w-[1px] bg-white/30"></div>
                    <div className="flex items-center gap-2">
                        <Server size={24} className="text-[#FFD700]" />
                        <span className="text-sm font-bold tracking-widest uppercase">Manager.io Partner</span>
                    </div>
                </div>

                <div className="mt-16">
                    <a href="https://wa.me/8801601618030" className="inline-block bg-[#00FFFF] text-[#002147] font-black uppercase tracking-widest py-4 px-8 rounded-none hover:bg-white transition-colors">
                        INITIATE TECHNICAL AUDIT_
                    </a>
                </div>
            </div>
        </section>
    );
};
