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

                    {/* Data Deletion Node for Meta App Review */}
                    <section id="data-deletion" className="mt-16 pt-8 border-t border-white/10">
                        <h2 className="text-aqua font-bold uppercase tracking-widest mb-4">
                            Data Deletion Instructions (Meta Compliance)
                        </h2>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            At INSPIRON TECH, we adhere to a strict data sovereignty policy. If you wish to delete your user data
                            associated with our WhatsApp automation or accounting integrations, please follow these steps:
                        </p>
                        <ul className="list-decimal list-inside text-gray-400 text-sm space-y-2 font-mono">
                            <li>Send an email to <span className="text-white">privacy@inspiron.tech</span> with the subject "DATA DELETION REQUEST".</li>
                            <li>Include your WhatsApp Phone ID (used for the Technical Audit).</li>
                            <li>Our system will purge your lead record and transaction logs within 24 hours.</li>
                            <li>You will receive a "Handshake Termination" confirmation once the purge is complete.</li>
                        </ul>

                        <div className="bg-white/5 border border-white/10 p-6 rounded-lg mt-8">
                            <h3 className="text-aqua font-bold uppercase text-xs tracking-widest mb-4">
                                Official Data Controller
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                For all data sovereignty inquiries or deletion requests, please contact our
                                verified command node:
                            </p>
                            <div className="font-mono text-sm text-white">
                                EMAIL: <span className="text-aqua underline">privacy@inspiron.tech</span><br />
                                WABA: +880 1601-618030 (Institutional API Only)
                            </div>
                        </div>
                    </section>

                    <p className="pt-6 border-t border-white/5 text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                        Controller: MD ABU HASAN | Verified Dec 10, 2025
                    </p>
                </div>
            </div>
        </main>
    );
}
