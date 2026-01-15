'use client';

import { FileSignature, Zap, CheckCircle, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
    {
        icon: FileSignature,
        title: 'Trigger',
        description: 'You fill out a simple form after closing the deal',
        color: 'text-blue-400',
        bg: 'bg-blue-400/10',
    },
    {
        icon: Zap,
        title: 'Orchestration',
        description: 'n8n "Brain" receives the webhook and initiates the workflow.',
        color: 'text-yellow-400',
        bg: 'bg-yellow-400/10',
    },
    {
        icon: CheckCircle,
        title: 'Execution',
        description: 'Contract written and sent. Invoice generated. Project board created. Slack channels deployed. CRM updated.',
        color: 'text-green-400',
        bg: 'bg-green-400/10',
    },
    {
        icon: Mail,
        title: 'Outcome',
        description: 'Client receives a welcome email with all the links and next steps. Done in 30 seconds.',
        color: 'text-brand-400',
        bg: 'bg-brand-400/10',
    },
];

export default function SolutionSection() {
    return (
        <section className="py-24 bg-white/5 relative">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        The <span className="text-brand-500">One-Click</span> Standard
                    </h2>
                    <p className="text-gray-400 text-lg">
                        We replace manual data entry with linear, deterministic infrastructure. Here is what happens when you install the Engine.
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-brand-500/50 to-transparent -translate-y-1/2 z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center text-center space-y-4"
                            >
                                <div className={`w-16 h-16 rounded-2xl ${step.bg} flex items-center justify-center border border-white/10 backdrop-blur-md shadow-lg`}>
                                    <step.icon className={`w-8 h-8 ${step.color}`} />
                                </div>
                                <h3 className="text-xl font-bold">{step.title}</h3>
                                <p className="text-sm text-gray-400">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
