import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "INSPIRON TECH | Institutional Brand Manual",
    description: "Operational guidelines and high-precision brand engineering for MD ABU HASAN.",
};

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-grow">
                {children}
            </main>

            <footer className="bg-[#020617] border-t border-aqua/10 py-16 mt-20">
                <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div>
                        <h4 className="text-gold font-bold uppercase tracking-widest mb-6 text-xs">Verified Portfolio</h4>
                        <p className="text-gray-500 text-[11px] leading-relaxed font-mono">
                            INSPIRON TECH BD<br />
                            Business ID: 1129614909344159<br />
                            Verified: Dec 10, 2025
                        </p>
                    </div>
                    <div>
                        <h4 className="text-aqua font-bold uppercase tracking-widest mb-6 text-xs">Dhaka Command Node</h4>
                        <p className="text-gray-400 text-[11px] font-mono">
                            64-68, Eastern Kamalapur Complex (2nd Floor)<br />
                            Dhaka 1217, Bangladesh
                        </p>
                    </div>
                    <div className="flex flex-col items-start">
                        <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-xs">Strategic Status</h4>
                        <div className="px-4 py-2 bg-white/5 border border-white/10 rounded text-[10px] font-mono text-gray-500">
                            OFFICIAL MANAGER.IO RESELLER
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
