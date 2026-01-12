/**
 * INSPIRON TECH - Institutional Privacy Governance
 * Required for Meta App Review approval.
 */

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-[#010409] text-gray-300 py-20 px-6 font-sans">
            <div className="max-w-3xl mx-auto border border-white/10 p-10 rounded-2xl bg-[#0d1117] shadow-2xl">
                <h1 className="text-4xl font-black text-white mb-6 uppercase tracking-tighter">
                    Privacy <span className="text-aqua">Governance</span>
                </h1>
                <p className="mb-8 text-aqua font-bold uppercase text-xs tracking-widest">
                    INSPIRON TECH // Institutional Standard v1.0
                </p>
                <div className="space-y-6 text-sm leading-relaxed">
                    <p>We process contact information exclusively through the WhatsApp Business API to categorize business automation needs for Manager.io implementations.</p>
                    <p>Users may request permanent data deletion at any time by messaging <strong>"DELETE"</strong> to our verified business number: <span className="text-white">+880 1601-618030</span>.</p>
                    <p className="pt-6 border-t border-white/5 text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                        Controller: MD ABU HASAN | Verified Dec 10, 2025
                    </p>
                </div>
            </div>
        </main>
    );
}
