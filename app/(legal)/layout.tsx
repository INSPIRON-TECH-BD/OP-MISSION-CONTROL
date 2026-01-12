/**
 * INSPIRON TECH - Legal & Governance Layout
 * Objective: Institutional Compliance for Meta App Review
 */

import React from 'react';
import "@/app/globals.css";

export const metadata = {
    title: 'Privacy & Governance | INSPIRON TECH',
    description: 'Institutional data governance protocols for MD ABU HASAN projects.',
}

export default function LegalLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="bg-[#010409] text-white selection:bg-aqua selection:text-navy">
                <div className="min-h-screen flex flex-col">
                    {/* Minimalist Governance Header */}
                    <header className="border-b border-white/5 py-6 px-10 flex justify-between items-center bg-black/40 backdrop-blur-md">
                        <div className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500">
                            Governance Node // <span className="text-aqua">INSPIRON</span>
                        </div>
                        <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]"></div>
                    </header>

                    <main className="flex-grow">{children}</main>

                    <footer className="border-t border-white/5 py-8 text-center text-[10px] text-gray-700 uppercase tracking-widest font-bold">
                        © 2026 INSPIRON TECH BD | Dhaka Command Node
                    </footer>
                </div>
            </body>
        </html>
    );
}
