'use client';

import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32">
            {/* Background Gradients */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl opacity-30" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-400/10 rounded-full blur-3xl opacity-30" />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto space-y-8"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm">
                        <span className="flex h-2 w-2 rounded-full bg-brand-500 animate-pulse"></span>
                        <span className="text-sm text-gray-300">For Agencies Scaling to $100k/mo</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-500 text-glow">One Click Onboarding System</span>
                    </h1>

                    {/* Subhead */}
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Send the contract, create the payment link, build the project board, make the Slack channel, sync your CRM, and send the welcome email in 30 seconds.
                    </p>

                    {/* CTA Group */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <a href="/book" className="group relative px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-lg font-semibold transition-all shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_30px_rgba(20,184,166,0.5)]">
                            <span className="flex items-center gap-2">
                                Book a Call
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </a>
                    </div>

                    {/* Trust Indicators */}
                    <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-500">
                        <div className="flex items-center justify-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-brand-500" />
                            <span>One-Touch Onboarding</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-brand-500" />
                            <span>Eliminate Admin Drag</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-brand-500" />
                            <span>Retention-First Architecture</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
