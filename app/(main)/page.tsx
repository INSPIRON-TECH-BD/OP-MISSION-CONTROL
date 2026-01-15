import React from 'react';
import { InspironLogo } from '@/components/Branding/Logo';
import { RevenueDashboard } from '@/components/ui/RevenueDashboard';
import { InstitutionalHero } from '@/components/ui/InstitutionalHero';
import { Shield, Zap, Database } from 'lucide-react';
import Link from 'next/link';

/**
 * INSPIRON TECH - PUBLIC LANDING v1.0
 * Status: DEVELOPMENTAL PLACEHOLDER
 */

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-[#010409] text-white selection:bg-[#00FFFF] selection:text-[#002147]">

            {/* NAVIGATION */}
            <nav className="border-b border-white/10 py-6 px-8 flex justify-between items-center bg-[#002147] sticky top-0 z-50">
                <div className="w-40"><InspironLogo /></div>
                <div className="hidden md:flex gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                    <Link href="/services" className="hover:text-[#00FFFF] transition-colors">Services</Link>
                    <Link href="/precision-audit" className="hover:text-[#00FFFF] transition-colors">Precision Audit</Link>
                    <a href="https://www.upwork.com/freelancers/~011085e2a7cde3f437?viewMode=1" target="_blank" className="text-white hover:text-[#00FFFF] transition-colors">Hire on Upwork</a>
                    <a href="https://wa.me/8801601618030" className="text-[#00FFFF] border border-[#00FFFF]/30 px-4 py-2 rounded-none hover:bg-[#00FFFF]/10 transition-all">Initiate Audit</a>
                </div>
            </nav>

            {/* INSTITUTIONAL HERO - STABILIZED */}
            <InstitutionalHero />

            {/* REVENUE DASHBOARD: THE PRECISION LEDGER */}
            <RevenueDashboard />

            {/* VALUE NODES */}
            <section id="services" className="py-32 border-y border-white/10 px-8 bg-[#00152e]">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
                    <div className="p-10 border border-white/10 bg-[#001a3d] hover:border-[#00FFFF]/50 transition-colors">
                        <Zap className="text-[#00FFFF] mb-6" size={32} />
                        <h3 className="text-xl font-bold uppercase mb-4">Meta API Integration</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">Direct server-side event tracking and automated conversion logic for scaling spend.</p>
                    </div>
                    <div className="p-10 border border-white/10 bg-[#001a3d] hover:border-[#FFD700]/50 transition-colors">
                        <Database className="text-[#FFD700] mb-6" size={32} />
                        <h3 className="text-xl font-bold uppercase mb-4">Financial Engines</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">Custom COGS tracking and write-off logic for 100+ Crore inventory management.</p>
                    </div>
                    <div className="p-10 border border-white/10 bg-[#001a3d] hover:border-white/50 transition-colors">
                        <Shield className="text-white mb-6" size={32} />
                        <h3 className="text-xl font-bold uppercase mb-4">0.1% Error Protocol</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">Rigorous data verification layers that bridge the gap between bank accounts and floor operations.</p>
                    </div>
                </div>
            </section>


            {/* FOOTER NODE - HUMAN ANCHOR */}
            <footer className="py-20 text-center border-t border-white/10 bg-[#000f24]">
                <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium leading-loose">
                    Architected by <span className="text-white font-bold">MD ABU HASAN</span> <span className="mx-2 text-white/20">|</span>
                    <a href="https://www.upwork.com/freelancers/~011085e2a7cde3f437?viewMode=1" target="_blank" className="text-[#00FFFF] hover:underline decoration-[#00FFFF]/30 underline-offset-4 transition-all mx-2">
                        Top Rated Plus
                    </a> Authority (100% JSS).
                </p>
                <p className="text-[10px] font-bold uppercase tracking-[1em] text-white/20 mt-8">DHAKA | 2026</p>
            </footer>

        </div>
    );
}
