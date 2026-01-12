/**
 * INSPIRON TECH - Institutional Brand Manual v1.0
 * Engineered for: MD ABU HASAN
 * Standard: 0.1% Error Tolerance
 */

import React from 'react';
import { ShieldCheck, Zap, BarChart3, Copy, Download } from 'lucide-react';
import { InspironLogo } from '@/components/Branding/Logo'; // Your master SVG component

const BRAND_COLORS = [
    { name: 'Oxford Navy', hex: '#002147', usage: 'Foundation & Trust', text: 'text-white' },
    { name: 'Electric Aqua', hex: '#00FFFF', usage: 'Technical Precision', text: 'text-navy' },
    { name: 'Standard Gold', hex: '#FFCC00', usage: 'High-Yield Returns', text: 'text-navy' },
    { name: 'Pure White', hex: '#FDFDFD', usage: 'Data Clarity', text: 'text-navy' },
];

export default function BrandManual() {
    return (
        <div className="min-h-screen bg-[#010409] text-white font-sans selection:bg-aqua selection:text-navy">

            {/* 1. HERO: THE INSTITUTIONAL MISSION */}
            <section className="border-b border-white/10 py-24 px-6 bg-gradient-to-b from-[#002147]/20 to-transparent">
                <div className="max-w-6xl mx-auto">
                    <span className="text-aqua font-bold tracking-[0.4em] uppercase text-xs">Operational Manual v1.0</span>
                    <h1 className="text-6xl md:text-8xl font-black mt-4 mb-8 tracking-tighter uppercase">
                        Stabilizing <br /> <span className="text-[#fc0]">Financial Gravity.</span>
                    </h1>
                    <p className="max-w-2xl text-xl text-gray-400 leading-relaxed">
                        INSPIRON TECH BD is an institutional engineering firm led by MD ABU HASAN.
                        We replace manual chaos with 0.1% error-tolerant automation for 100+ Crore enterprises.
                    </p>
                </div>
            </section>

            {/* 2. LOGO ENGINEERING: GEOMETRIC PRECISION */}
            <section className="py-24 px-6 border-b border-white/10">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                            <ShieldCheck className="text-aqua" /> Logo Engineering
                        </h2>
                        <div className="space-y-6 text-gray-400">
                            <p>The Inspiron logo is a mathematical construct. It utilizes an 8px grid system to ensure perfect scaling across all digital nodes.</p>
                            <ul className="space-y-4">
                                <li className="flex gap-4">
                                    <span className="text-aqua font-bold">01.</span>
                                    <span><strong>The Aqua Engine:</strong> Represents the fluid logic of our custom Meta API integrations.</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-[#fc0] font-bold">02.</span>
                                    <span><strong>The Gold ROI Node:</strong> Positioned at the pinnacle to symbolize capital recovery (৳25L+).</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-[#002147] p-12 rounded-2xl border border-white/5 shadow-2xl">
                        <InspironLogo className="w-full h-auto drop-shadow-3xl" />
                    </div>
                </div>
            </section>

            {/* 3. COLOR LAB: CLICK-TO-COPY INTERFACE */}
            <section className="py-24 px-6 bg-white/[0.02]">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                        <Zap className="text-[#fc0]" /> Visual Engineering Palette
                    </h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {BRAND_COLORS.map((color) => (
                            <div key={color.hex} className="group relative">
                                <div
                                    className="h-48 rounded-xl flex items-end p-6 transition-transform group-hover:scale-[1.02] shadow-xl"
                                    style={{ backgroundColor: color.hex }}
                                >
                                    <button className="absolute top-4 right-4 p-2 bg-black/20 rounded-full opacity-0 group-hover:opacity-100 transition">
                                        <Copy size={16} />
                                    </button>
                                    <div>
                                        <p className={`font-bold uppercase tracking-widest text-xs ${color.text} opacity-60`}>{color.name}</p>
                                        <p className={`font-black text-xl ${color.text}`}>{color.hex}</p>
                                    </div>
                                </div>
                                <p className="mt-4 text-xs text-gray-500 uppercase tracking-widest font-bold">{color.usage}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. THE EVIDENCE ENGINE: NOBIN AGRO CASE STUDY */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto bg-gradient-to-r from-aqua/10 to-transparent p-12 rounded-3xl border border-aqua/20">
                    <div className="flex flex-wrap justify-between items-end gap-6">
                        <div>
                            <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">The Proof of Precision</h2>
                            <p className="text-gray-400 max-w-lg italic">"Recovered ৳25 Lakhs+ in annual capital leakage through logic migration for 29 active ponds."</p>
                        </div>
                        <div className="flex gap-8 text-center">
                            <div><p className="text-3xl font-black text-aqua">14,478</p><p className="text-[10px] uppercase font-bold text-gray-500">Transactions</p></div>
                            <div><p className="text-3xl font-black text-[#fc0]">0.0%</p><p className="text-[10px] uppercase font-bold text-gray-500">Error Rate</p></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. VOICE & AUTHORITY: THE SYSTEMIC TONE */}
            <section className="py-24 px-6 border-t border-white/10 bg-black/20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 flex items-center gap-3 uppercase tracking-widest">
                        Voice & Authority
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <p className="text-gray-400 leading-relaxed font-medium">
                                Our communication is direct, analytical, and authoritative. We do not speculate; we engineer.
                            </p>
                            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 italic text-aqua font-mono text-sm leading-relaxed">
                                "Never use 'I think.' Always use 'The data indicates' or 'The system requires.'"
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 border border-white/5 rounded-xl bg-white/5">
                                <span className="block text-gold font-black text-[10px] uppercase mb-2 tracking-widest">Descriptor</span>
                                <p className="text-sm font-bold">Authoritative</p>
                            </div>
                            <div className="p-6 border border-white/5 rounded-xl bg-white/5">
                                <span className="block text-gold font-black text-[10px] uppercase mb-2 tracking-widest">Perspective</span>
                                <p className="text-sm font-bold">Systemic</p>
                            </div>
                            <div className="p-6 border border-white/5 rounded-xl bg-white/5">
                                <span className="block text-gold font-black text-[10px] uppercase mb-2 tracking-widest">Method</span>
                                <p className="text-sm font-bold">Analytical</p>
                            </div>
                            <div className="p-6 border border-white/5 rounded-xl bg-white/5">
                                <span className="block text-gold font-black text-[10px] uppercase mb-2 tracking-widest">Outcome</span>
                                <p className="text-sm font-bold">Absolute</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. INTEGRATED TOOLS: v12.1 ASSET FACTORY */}
            <section className="py-24 px-6 border-t border-white/10">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-2xl font-bold mb-4 uppercase tracking-widest">Internal Command Tools</h2>
                    <p className="text-gray-500 mb-12">The v12.1 Asset Factory is embedded here for authorized use by MD ABU HASAN.</p>
                    <a href="/tools/factory" className="inline-flex items-center gap-3 bg-white text-navy font-black px-10 py-5 rounded-full hover:bg-aqua transition-all group">
                        Open Strategic Content Engine <Download className="group-hover:translate-y-1 transition" />
                    </a>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-12 px-6 border-t border-white/5 text-center">
                <p className="text-[10px] text-white/20 uppercase tracking-[1em]">MD ABU HASAN | INSPIRON TECH BD | Dhaka</p>
            </footer>
        </div>
    );
}

