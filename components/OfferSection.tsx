'use client';

import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

export default function OfferSection() {
    return (
        <section className="py-32 relative">
            <div className="absolute inset-0 bg-brand-950/20" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-8 md:p-12 overflow-hidden relative">
                    {/* Decorative Glow */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-500/20 rounded-full blur-3xl opacity-50" />

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                                Are Your Systems <br />
                                <span className="text-brand-400">Churning Clients?</span>
                            </h2>
                            <p className="text-gray-400">
                                Get a free <strong>Infrastructure Audit</strong>. We'll deploy our investigative agent to scan your public footprint and give you a score.
                            </p>
                            <ul className="space-y-3 text-sm text-gray-300">
                                <li className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-brand-500" />
                                    <span>Identify automation gaps</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-brand-500" />
                                    <span>Showcase missed retention opportunities</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-brand-500" />
                                    <span>Actionable "One-Click" fix list</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-black/40 p-8 rounded-2xl border border-white/10 flex flex-col items-center text-center space-y-6">
                            <h3 className="text-2xl font-bold text-white">Ready to Scale?</h3>
                            <p className="text-gray-400">
                                Stop losing clients to chaos. Book your audit call now.
                            </p>
                            <Link
                                href="/book"
                                className="w-full bg-brand-600 hover:bg-brand-500 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-brand-500/25"
                            >
                                Book a Call <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
