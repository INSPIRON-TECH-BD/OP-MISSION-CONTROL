import React from 'react';
import { InspironLogo } from '@/components/Branding/Logo';
import { ArrowUpRight, Shield, Zap, Database } from 'lucide-react';

/**
 * INSPIRON TECH - PUBLIC LANDING v1.0
 * Status: DEVELOPMENTAL PLACEHOLDER
 */

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-[#010409] text-white selection:bg-aqua selection:text-navy">

            {/* NAVIGATION */}
            <nav className="border-b border-white/5 py-6 px-8 flex justify-between items-center bg-black/50 backdrop-blur-xl sticky top-0 z-50">
                <div className="w-40"><InspironLogo /></div>
                <div className="hidden md:flex gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
                    <a href="#services" className="hover:text-aqua transition-colors">Services</a>
                    <a href="#case-studies" className="hover:text-aqua transition-colors">Case Studies</a>
                    <a href="#consultation" className="text-aqua">Book Consultation</a>
                </div>
            </nav>

            {/* HERO SECTION */}
            <section className="relative pt-32 pb-48 px-8 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle at center, #00ffff 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>

                <div className="max-w-6xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-2 rounded-full mb-10">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-aqua opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-aqua"></span>
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-300">Operational Engineering Studio</span>
                    </div>

                    <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-12">
                        Engineering <br /> <span className="text-gold">Operational</span> <br /> Supremacy.
                    </h1>

                    <p className="max-w-2xl mx-auto text-xl text-gray-400 leading-relaxed mb-16">
                        We build custom financial logic and automated engines for businesses where a 1% error is unaffordable.
                        From pond-level aquaculture to high-scale Meta API commerce.
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <button className="bg-white text-navy px-12 py-5 rounded-full font-black uppercase text-xs tracking-[0.2em] hover:bg-aqua transition-all flex items-center justify-center gap-3 group">
                            Start Engineering <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
                        </button>
                        <a href="https://brand.inspiron.tech" target="_blank" className="border border-white/10 px-12 py-5 rounded-full font-black uppercase text-xs tracking-[0.2em] hover:bg-white/5 transition-all text-gray-300">
                            View Brand Manual
                        </a>
                    </div>
                </div>
            </section>

            {/* VALUE NODES */}
            <section id="services" className="py-32 border-y border-white/5 px-8">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
                    <div className="p-12 bg-white/5 border border-white/10 rounded-[40px] hover:border-aqua/50 transition-all group">
                        <Zap className="text-aqua mb-8 group-hover:scale-110 transition" size={40} />
                        <h3 className="text-2xl font-black uppercase mb-4">Meta API Integration</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">Direct server-side event tracking and automated conversion logic for scaling spend.</p>
                    </div>
                    <div className="p-12 bg-white/5 border border-white/10 rounded-[40px] hover:border-gold/50 transition-all group">
                        <Database className="text-gold mb-8 group-hover:scale-110 transition" size={40} />
                        <h3 className="text-2xl font-black uppercase mb-4">Financial Engines</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">Custom COGS tracking and write-off logic for 100+ Crore inventory management.</p>
                    </div>
                    <div className="p-12 bg-white/5 border border-white/10 rounded-[40px] hover:border-white/50 transition-all group">
                        <Shield className="text-white mb-8 group-hover:scale-110 transition" size={40} />
                        <h3 className="text-2xl font-black uppercase mb-4">0.1% Error Protocol</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">Rigorous data verification layers that bridge the gap between bank accounts and floor operations.</p>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-20 text-center border-t border-white/5">
                <div className="w-32 mx-auto grayscale opacity-20 hover:opacity-100 transition mb-10"><InspironLogo /></div>
                <p className="text-[10px] text-gray-600 font-black uppercase tracking-[1em]">MD ABU HASAN | DHAKA | 2026</p>
            </footer>
        </div>
    );
}
