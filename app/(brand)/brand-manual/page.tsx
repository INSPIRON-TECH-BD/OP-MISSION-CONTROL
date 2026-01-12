/**
 * INSPIRON TECH - Institutional Brand Manual v1.0
 * Engineered for: MD ABU HASAN
 * Standard: 0.1% Error Tolerance
 */

import React from 'react';
import { ShieldCheck, Zap, BarChart3, Copy, Download, ExternalLink, MousePointer2 } from 'lucide-react';
import { InspironLogo } from '@/components/Branding/Logo';

const BRAND_COLORS = [
    { name: 'Oxford Navy', hex: '#002147', usage: 'Foundation & Trust', text: 'text-white' },
    { name: 'Electric Aqua', hex: '#00FFFF', usage: 'Technical Precision', text: 'text-navy' },
    { name: 'Standard Gold', hex: '#FFCC00', usage: 'High-Yield Returns', text: 'text-navy' },
    { name: 'Pure White', hex: '#FDFDFD', usage: 'Data Clarity', text: 'text-navy' },
];

export default function BrandManualPage() {
    return (
        <div className="space-y-32">
            {/* 1. MISSION LOGIC */}
            <section id="mission">
                <div className="flex items-center gap-3 text-aqua mb-6">
                    <Zap size={20} />
                    <span className="text-xs font-black uppercase tracking-[0.3em]">Operational Directive</span>
                </div>
                <h1 className="text-5xl font-black mb-8 tracking-tighter uppercase leading-none">Mission Logic</h1>
                <p className="text-xl text-gray-400 border-l-4 border-aqua pl-8 italic mb-12 max-w-2xl leading-relaxed">
                    "Stabilizing financial gravity for high-scale aquaculture and industrial operations via custom logic migration."
                </p>
                <div className="p-8 bg-[#002147]/20 border border-aqua/10 rounded-2xl">
                    <h4 className="text-aqua font-bold uppercase text-[10px] tracking-widest mb-4">Primary Strategic Objective</h4>
                    <p className="text-base text-gray-300">Achieve <span className="text-white font-bold">0.1% error tolerance</span> across 10,000+ monthly transactions for clients with BDT 100 Crore+ turnover. Every byte of data must be recoverable and auditable.</p>
                </div>
            </section>

            {/* 2. THE n-LAW STANDARD */}
            <section id="n-law">
                <div className="flex items-center justify-between border-b border-[#30363d] pb-4 mb-10">
                    <h2 className="text-2xl font-black uppercase tracking-widest">The n-Law Standards</h2>
                    <span className="text-[10px] font-mono text-gray-500">ISO-9001 Alignment Ready</span>
                </div>

                <div className="grid md:grid-cols-2 gap-8 font-mono text-xs">
                    <div className="p-6 bg-black rounded-xl border border-[#30363d] group hover:border-gold transition-colors">
                        <p className="text-gold mb-3 font-bold opacity-80">// RULE 01: ZERO APPROXIMATION</p>
                        <p className="text-gray-400 leading-relaxed">All transaction data must be verified against field delivery challans. No manual entry is permitted without secondary systematic audit. Discrepancies &gt; 0.01% trigger immediate re-verification.</p>
                    </div>
                    <div className="p-6 bg-black rounded-xl border border-[#30363d] group hover:border-aqua transition-colors">
                        <p className="text-aqua mb-3 font-bold opacity-80">// RULE 02: PURE VECTORING</p>
                        <p className="text-gray-400 leading-relaxed">The INSPIRON brand icon must never be exported in raster formats (JPEG/PNG) for institutional assets. 1:1 SVG precision is required to maintain architectural integrity at infinity scaling.</p>
                    </div>
                    <div className="p-6 bg-black rounded-xl border border-[#30363d] group hover:border-white transition-colors">
                        <p className="text-white mb-3 font-bold opacity-80">// RULE 03: NO SILICONE SOLUTIONS</p>
                        <p className="text-gray-400 leading-relaxed">Software must not be "bought." It must be "engineered." Every line of logic in MISSION CONTROL must serve a specific operational ROI metric.</p>
                    </div>
                    <div className="p-6 bg-black rounded-xl border border-[#30363d] group hover:border-gray-500 transition-colors">
                        <p className="text-gray-500 mb-3 font-bold opacity-80">// RULE 04: PERSISTENT AUDIT</p>
                        <p className="text-gray-400 leading-relaxed">Every automated workflow must include a persistent logging node. If a system fails, the root cause must be identifiable within 120 seconds of detection.</p>
                    </div>
                </div>
            </section>

            {/* 3. COLOR LAB: CLICK-TO-COPY */}
            <section id="colors">
                <div className="flex items-center justify-between border-b border-[#30363d] pb-4 mb-10">
                    <h2 className="text-2xl font-black uppercase tracking-widest">Visual Engineering Palette</h2>
                    <div className="flex items-center gap-2 text-aqua">
                        <MousePointer2 size={14} className="animate-bounce" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Click to Copy</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {BRAND_COLORS.map((color) => (
                        <div key={color.hex} className="group cursor-pointer">
                            <button
                                onClick={() => navigator.clipboard.writeText(color.hex)}
                                className="w-full h-40 rounded-xl flex items-end p-6 transition-all group-hover:scale-[1.05] group-hover:-translate-y-1 shadow-2xl relative overflow-hidden"
                                style={{ backgroundColor: color.hex }}
                            >
                                <div className="absolute top-4 right-4 p-2 bg-black/20 rounded-full opacity-0 group-hover:opacity-100 transition backdrop-blur-sm">
                                    <Copy size={16} />
                                </div>
                                <div className="relative z-10 text-left">
                                    <p className={`font-black text-lg ${color.text} leading-none mb-1`}>{color.hex.toUpperCase()}</p>
                                    <p className={`font-bold uppercase tracking-widest text-[9px] ${color.text} opacity-60`}>{color.name}</p>
                                </div>
                            </button>
                            <p className="mt-4 text-[10px] text-gray-500 uppercase tracking-widest font-black group-hover:text-aqua transition-colors">{color.usage}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. LOGO GEOMETRY */}
            <section id="geometry">
                <div className="flex items-center justify-between border-b border-[#30363d] pb-4 mb-10">
                    <h2 className="text-2xl font-black uppercase tracking-widest">Logo Geometry</h2>
                    <span className="text-[10px] font-mono text-gray-500">MATH_DRIVEN_IDENTITY</span>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8 text-gray-400">
                        <p className="leading-relaxed">The INSPIRON identity is a mathematical construct generated from path data extracted from v12.1 assets. It utilizes an <span className="text-white font-bold">8px sub-grid</span> for total alignment.</p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="h-2 w-2 rounded-full bg-aqua mt-2 shrink-0"></div>
                                <div>
                                    <p className="text-white font-bold text-sm mb-1 uppercase tracking-wider">The Aqua Engine</p>
                                    <p className="text-xs">Recursive loops symbolizing the fluid data logic of Meta API and server-side tracking engines.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="h-2 w-2 rounded-full bg-gold mt-2 shrink-0"></div>
                                <div>
                                    <p className="text-white font-bold text-sm mb-1 uppercase tracking-wider">The ROI Node</p>
                                    <p className="text-xs">The geometric center of gravity. Represents the precision-point where automation meets financial recovery.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#0b0e14] p-16 rounded-[32px] border border-[#30363d] shadow-2xl group flex items-center justify-center">
                        <InspironLogo className="w-full h-auto drop-shadow-[0_0_40px_rgba(0,255,255,0.15)] group-hover:drop-shadow-[0_0_60px_rgba(0,255,255,0.25)] transition-all duration-500" />
                    </div>
                </div>
            </section>

            {/* 5. CONTENT ENGINE */}
            <section id="factory" className="pt-32 border-t border-[#30363d]">
                <div className="bg-gradient-to-br from-[#010409] to-[#002147]/40 p-12 md:p-20 rounded-[40px] border border-aqua/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-aqua/5 blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

                    <div className="relative z-10 max-w-2xl text-left">
                        <div className="flex items-center gap-3 mb-8 bg-white/5 border border-white/10 w-fit px-4 py-2 rounded-full">
                            <span className="h-2 w-2 rounded-full bg-green-500"></span>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Node v12.1 Active</span>
                        </div>

                        <h2 className="text-5xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">Institutional <br /><span className="text-gray-600">Asset Factory.</span></h2>

                        <p className="text-lg text-gray-400 mb-12 font-medium leading-relaxed">
                            Authorized operators can utilize the v12.1 Content Engine to generate precision-grade social and institutional assets with 0.0% geometric drift.
                        </p>

                        <a href="/tools/factory" className="inline-flex items-center gap-4 bg-white text-navy px-10 py-5 rounded-full font-black uppercase text-xs tracking-[0.2em] hover:bg-aqua transition-all group">
                            Access Static Generator <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="pt-24 pb-12 text-center opacity-30">
                <p className="text-[10px] font-mono tracking-[1em] uppercase">© MD ABU HASAN | OP-MISSION-CONTROL | 2026</p>
            </footer>
        </div>
    );
}
