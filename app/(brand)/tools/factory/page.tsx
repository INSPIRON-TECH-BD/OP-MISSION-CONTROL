'use client';

import React from 'react';
import { V121Factory } from '@/components/Branding/v121Factory';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function FactoryPage() {
    return (
        <div className="min-h-screen bg-[#010409] text-white p-6 md:p-12">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12 flex items-center justify-between">
                    <Link
                        href="/brand-manual"
                        className="flex items-center gap-2 text-gray-500 hover:text-aqua transition-colors uppercase text-[10px] font-black tracking-widest"
                    >
                        <ArrowLeft size={14} /> Back to Brand Manual
                    </Link>
                    <div className="text-right">
                        <h1 className="text-xl font-black uppercase tracking-[0.2em] text-gold">Asset Factory v12.1</h1>
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Authorized Personnel Only</p>
                    </div>
                </div>

                <div className="bg-navy/10 rounded-[40px] border border-white/5 p-1 md:p-4">
                    <V121Factory />
                </div>
            </div>
        </div>
    );
}
