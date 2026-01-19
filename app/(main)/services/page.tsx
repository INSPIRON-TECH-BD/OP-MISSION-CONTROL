/**
 * INSPIRON TECH - Operational Supremacy (Services)
 * Strategic Node: Upwork Conversion & Tiered Pricing
 * Objective: BDT 9,000,000 Mission Scaling
 * Source: V4 Backup
 */

import React from 'react';
import {
    CheckCircle2, ShieldCheck, Zap,
    Database, Globe, Cpu, ArrowRight,
    MessageSquareCode, ExternalLink
} from 'lucide-react';
import Link from 'next/link';
import { InspironLogo } from '@/components/Branding/Logo';

const SERVICE_TIERS = [
    {
        name: "Standard Accounting",
        price: "৳50k - 75k",
        timeline: "5 Days",
        desc: "Ideal for growing enterprises requiring a clean architectural foundation in Manager.io.",
        features: [
            "Institutional Chart of Accounts Setup",
            "Single Currency Optimization (BDT)",
            "Bank & Statement Integration (1 Account)",
            "Institutional Branding on Invoices",
            "One-on-One Technical Training"
        ],
        cta: "INITIATE TECHNICAL AUDIT",
        link: "https://www.upwork.com/freelancers/~011085e2a7cde3f437?viewMode=1",
        color: "border-white/10",
        highlight: false
    },
    {
        name: "Manufacturing Yield Engine",
        price: "৳100k - 150k",
        timeline: "10 Days",
        desc: "Full-scale data migration and automated workflow logic for multi-entity operations.",
        features: [
            "Legacy Data Migration (Excel/Tally to Manager)",
            "Multi-Currency Logic (BDT/USD/AUD)",
            "Automated Recurring Workflows",
            "3-Bank Reconciliation Hub",
            "Custom HTML/CSS Invoice Templates",
            "Advanced Team Training (Up to 5 Users)"
        ],
        cta: "INITIATE TECHNICAL AUDIT",
        link: "https://www.upwork.com/freelancers/~011085e2a7cde3f437?viewMode=1", // Defaulting to Upwork as 'Consultation Form' URL is pending.
        color: "border-aqua",
        highlight: true
    },
    {
        name: "Logic Architecture",
        price: "৳200k+",
        timeline: "20+ Days",
        desc: "The '0.1% Error Protocol' for BDT 100 Crore+ turnover manufacturing and agro-conglomerates.",
        features: [
            "GitHub Actions CI/CD Reporting Integration",
            "Industrial IoT / AquaSmart Sensor Sync",
            "Batch-Lease & Manufacturing Logic Automation",
            "Custom Financial Dashboards (Next.js)",
            "30-Day Critical Support Sentry",
            "Manager.io Server (Self-Hosted) Deployment"
        ],
        cta: "INITIATE TECHNICAL AUDIT",
        link: "https://wa.me/8801601618030?text=I%20want%20to%20initiate%20a%20Technical%20Audit%20for%20my%20enterprise.",
        color: "border-gold",
        highlight: false
    }
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-[#010409] text-white selection:bg-aqua selection:text-navy font-sans">

            {/* 1. INSTITUTIONAL HEADER */}
            <header className="border-b border-white/10 py-10 px-10 sticky top-0 bg-[#010409]/90 backdrop-blur-xl z-50 flex justify-between items-center">
                <div className="flex items-center gap-10">
                    <Link href="/" className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 hover:text-white transition-all">
                        ← RETURN TO BASE
                    </Link>
                    <span className="h-8 w-px bg-white/10"></span>
                    {/* Standardized to V2026.02 Baseline */}
                    <InspironLogo />
                </div>
                <div className="hidden md:flex gap-12 text-[10px] font-bold uppercase tracking-[0.3em] opacity-60">
                    <a href="#operations" className="hover:text-aqua transition-all text-white">Operations</a>
                    <a href="#protocols" className="hover:text-aqua transition-all text-white">Protocols</a>
                </div>
            </header>

            {/* INSTITUTIONAL HERO */}
            <section className="py-24 px-10 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-aqua/5 via-transparent to-transparent -z-10" />
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-3 bg-aqua/10 border border-aqua/20 px-6 py-2 rounded-full mb-10">
                        <ShieldCheck size={14} className="text-aqua" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-aqua">Official Manager.io Partner Node</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.85]">
                        Engineering <br /> <span className="text-white opacity-40">Operational Control.</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl text-gray-500 leading-relaxed font-medium">
                        Fixed-scope technical implementations for businesses where precision is non-negotiable.
                        We don't sell software; we install authority.
                    </p>
                </div>
            </section>

            {/* PRICING NODES */}
            <section className="py-20 px-10">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
                    {SERVICE_TIERS.map((tier, idx) => (
                        <div
                            key={idx}
                            className={`relative p-12 bg-white/[0.02] border ${tier.color} rounded-[48px] flex flex-col justify-between transition-all hover:scale-[1.02] ${tier.highlight ? 'bg-white/[0.04] shadow-[0_0_80px_-20px_rgba(0,255,255,0.15)]' : ''}`}
                        >
                            {tier.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-aqua text-navy text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-widest">
                                    Most Requested Node
                                </div>
                            )}

                            <div>
                                <h3 className="text-sm font-black uppercase tracking-[0.3em] text-gray-500 mb-2">{tier.name}</h3>
                                <div className="flex items-baseline gap-2 mb-6">
                                    <span className={`text-4xl font-black ${tier.highlight ? 'text-aqua' : 'text-white'}`}>{tier.price}</span>
                                </div>
                                <p className="text-gray-400 text-sm mb-10 leading-relaxed font-medium italic">
                                    "{tier.desc}"
                                </p>

                                <div className="space-y-4 mb-12">
                                    <div className="text-[10px] font-black uppercase text-gray-600 tracking-widest mb-6">Technical Specifications:</div>
                                    {tier.features.map((feature, fIdx) => (
                                        <div key={fIdx} className="flex items-start gap-3">
                                            <CheckCircle2 size={16} className="text-aqua mt-0.5 shrink-0" />
                                            <span className="text-sm text-gray-300 font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-10 border-t border-white/5 mt-auto">
                                <div className="flex justify-between items-center mb-8">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-gold">Deployment: {tier.timeline}</span>
                                    <Zap size={14} className="text-gold" />
                                </div>
                                <a
                                    href={tier.link}
                                    className={`w-full flex items-center justify-center gap-3 py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all ${tier.highlight ? 'bg-aqua text-navy shadow-[0_20px_40px_-10px_rgba(0,255,255,0.3)]' : 'bg-white/5 border border-white/10 hover:bg-white/10'}`}
                                >
                                    {tier.cta}
                                    {tier.cta.includes("Upwork") ? <ExternalLink size={18} /> : <MessageSquareCode size={18} />}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CONVERSION ANCHOR */}
            <section className="py-32 px-10 text-center bg-gradient-to-t from-aqua/[0.02] to-transparent">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8 leading-tight">
                        Beyond Standard <br /> <span className="text-aqua">Data Entry.</span>
                    </h2>
                    <p className="text-gray-500 mb-12 text-lg">
                        If your operation exceeds BDT 100 Crore in annual turnover, standard bookkeeping is a risk.
                        You require an engineering audit.
                    </p>
                    <Link
                        href="/precision-audit"
                        className="inline-flex items-center gap-4 text-white hover:text-aqua transition-colors font-black uppercase tracking-[0.3em] text-xs"
                    >
                        View Case Studies (Nobin Agro / STEP Group) <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* FOOTER NODE */}
            <footer className="py-20 text-center opacity-30 border-t border-white/5">
                <div className="flex justify-center gap-6 text-[10px] font-black uppercase tracking-[0.5em] text-gray-500 mb-4">
                    <Link href="/" className="hover:text-aqua">Command Node</Link>
                    <Link href="/n-law" className="hover:text-aqua">n-Law Protocols</Link>
                </div>
                <p className="text-[10px] font-black uppercase tracking-[1em]">MD ABU HASAN | DHAKA | 2026</p>
            </footer>
        </div>
    );
}
