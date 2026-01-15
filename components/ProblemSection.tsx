'use client';

import { XCircle, Clock, FileWarning, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const painPoints = [
    {
        icon: Clock,
        title: 'The Awkward Wait',
        description: 'Deal closed Monday. And by Wednesday, the client is starting to get buyers remorse.',
    },
    {
        icon: FileWarning,
        title: 'Manual Data Entry Error',
        description: 'Copy-pasting details from PandaDoc to Slack to Asana to Hubspot to Stripe. It is insanity.',
    },
    {
        icon: Users,
        title: 'The "Who\'s on This?" Shuffle',
        description: 'Team members asking "Did we onboard them yet?" while the client stares at an empty inbox.',
    },
];

export default function ProblemSection() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold">
                        The Hidden Cost of <span className="text-red-500">Manual Scaling</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        You're not losing clients because you're bad at delivery. You're losing them because your systems are not built for scale.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {painPoints.map((point, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-red-500/30 transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors">
                                <point.icon className="w-6 h-6 text-red-500" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{point.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {point.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
