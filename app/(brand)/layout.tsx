/**
 * INSPIRON TECH - Brand Manual Documentation Layout
 * System: n-Law Technical Interface
 * Accuracy: 0.1% Error Tolerance
 */

import React from 'react';
import { InspironLogo } from '@/components/Branding/Logo';
import { BookOpen, Shield, Palette, FileCode, Workflow } from 'lucide-react';
import { Inter, Montserrat } from "next/font/google";
import "../../globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["900"], variable: "--font-montserrat" });

const DOCS_NAV = [
    {
        group: 'Foundations', items: [
            { name: 'Mission Logic', href: '#mission', icon: BookOpen },
            { name: 'n-Law Standards', href: '#n-law', icon: Shield },
        ]
    },
    {
        group: 'Visual Specs', items: [
            { name: 'Color Lab', href: '#colors', icon: Palette },
            { name: 'Logo Geometry', href: '#geometry', icon: FileCode },
        ]
    },
    {
        group: 'Operational', items: [
            { name: 'Content Engine', href: '#factory', icon: Workflow },
        ]
    }
];

export default function BrandLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={`${inter.variable} ${montserrat.variable} flex min-h-screen bg-[#010409] text-[#e6edf3] font-sans`}>
            {/* 1. THE COMMAND SIDEBAR */}
            <aside className="w-72 border-r border-[#30363d] fixed h-screen bg-[#0d1117] overflow-y-auto hidden lg:block">
                <div className="p-6 border-b border-[#30363d]">
                    <InspironLogo className="w-32 mb-2" />
                    <p className="text-[10px] text-aqua font-mono uppercase tracking-widest">Brand System v1.0</p>
                </div>

                <nav className="p-4 space-y-8">
                    {DOCS_NAV.map((group) => (
                        <div key={group.group}>
                            <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-widest px-3 mb-3">
                                {group.group}
                            </h3>
                            <ul className="space-y-1">
                                {group.items.map((item) => (
                                    <li key={item.name}>
                                        <a href={item.href} className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-white/5 transition-colors text-gray-400 hover:text-white group">
                                            <item.icon size={16} className="text-gray-600 group-hover:text-aqua" />
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </nav>
            </aside>

            {/* 2. THE DOCUMENTATION CANVAS */}
            <main className="flex-1 lg:ml-72">
                <header className="h-16 border-b border-[#30363d] flex items-center justify-between px-8 bg-[#0d1117]/80 backdrop-blur sticky top-0 z-40">
                    <div className="text-xs font-mono text-gray-500">
                        docs / <span className="text-white font-bold tracking-tight">brand-manual</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-[10px] uppercase font-bold text-gray-400">System Live</span>
                    </div>
                </header>

                <div className="max-w-4xl mx-auto py-16 px-8 leading-relaxed">
                    {children}
                </div>
            </main>
        </div>
    );
}
