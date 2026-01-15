/**
 * INSPIRON TECH - Operational Supremacy (Services)
 * STABILITY PROTOCOL: Solid Grid, No Animation.
 */

import React from 'react';
import { CheckCircle2, Zap } from 'lucide-react';
import Link from 'next/link';
import { InspironLogo } from '@/components/Branding/Logo';

const SERVICE_TIERS = [
    {
        name: "Standard Accounting",
        price: "৳50k - 75k",
        features: ["Chart of Accounts", "Single Currency (BDT)", "1 Bank Integration", "Invoice Branding"],
        link: "https://www.upwork.com/freelancers/~011085e2a7cde3f437?viewMode=1",
        cta: "HIRE ON UPWORK"
    },
    {
        name: "Manufacturing Yield Engine",
        price: "৳100k - 150k",
        features: ["Legacy Data Migration", "Multi-Currency", "Recurring Workflows", "3-Bank Hub"],
        link: "https://www.upwork.com/freelancers/~011085e2a7cde3f437?viewMode=1",
        cta: "HIRE ON UPWORK"
    },
    {
        name: "Logic Architecture",
        price: "৳200k+",
        features: ["GitHub CI/CD Reporting", "IoT Sensor Sync", "Batch Logic", "Custom Next.js Dashboards"],
        link: "https://wa.me/8801601618030",
        cta: "INITIATE AUDIT"
    }
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-[#010409] text-white font-sans selection:bg-[#00FFFF] selection:text-[#002147]">

            {/* NAVIGATION NODE */}
            <nav className="border-b border-white/10 py-6 px-6 flex justify-between items-center bg-[#002147]">
                <div className="w-32"><InspironLogo size={120} /></div>
                <div className="flex gap-6 items-center">
                    <Link href="/" className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-white">Hub</Link>
                </div>
            </nav>

            {/* HEADER */}
            <section className="py-20 px-6 bg-[#002147] border-b border-white/10">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-4">
                        COMMAND <span className="text-[#00FFFF]">PRICING</span>
                    </h1>
                    <p className="text-gray-400 text-lg">Fixed-Scope Technical Implementations. No Hidden Variables.</p>
                </div>
            </section>

            {/* SOLID GRID - PRICING */}
            <section className="max-w-6xl mx-auto my-20 px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 border border-white/10 bg-[#00152e]">
                    {SERVICE_TIERS.map((tier, idx) => (
                        <div key={idx} className="p-10 border-b md:border-b-0 md:border-r border-white/10 last:border-0 hover:bg-[#001a3d] transition-colors">
                            <h3 className="text-[#FFD700] font-bold uppercase tracking-widest text-xs mb-4">{tier.name}</h3>
                            <p className="text-3xl font-bold text-white mb-8">{tier.price}</p>

                            <ul className="space-y-4 mb-10">
                                {tier.features.map((feat, fIdx) => (
                                    <li key={fIdx} className="flex items-start gap-3 text-sm text-gray-300">
                                        <CheckCircle2 size={16} className="text-[#00FFFF] mt-0.5 shrink-0" />
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            <a href={tier.link} className="block w-full text-center border border-[#00FFFF] text-[#00FFFF] font-bold py-3 uppercase tracking-widest text-xs hover:bg-[#00FFFF] hover:text-[#002147] transition-all">
                                {tier.cta}
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-12 text-center border-t border-white/10">
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                    DHAKA COMMAND NODE // INSPIRON TECH
                </p>
            </footer>
        </div>
    );
}
