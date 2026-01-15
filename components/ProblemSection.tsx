'use client';

import { XCircle, Clock, FileWarning, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const painPoints = [
    {
        icon: Clock,
        title: 'The Awkward Wait',
        description: "Deal closed Monday. Radio silence until Wednesday. By the time you finally send the kickoff email, buyer's remorse has already set in.",
    },
    {
        icon: FileWarning,
        title: 'The $1,000/Hour Data Clerk',
        description: 'Every hour you spend syncing tools manually is an hour you aren\'t selling, strategizing, or scaling.',
    },
    {
        icon: Users,
        title: 'The "Who\'s on This?" Shuffle',
        description: 'Your team: "Did you onboard them?" You: "I thought you did." The Client: Staring at an empty inbox wondering if they made a mistake.',
    },
];

export default function ProblemSection() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold">
                        Great Results. <span className="text-red-500">Amateur Operations.</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        You’re elite at delivery. Don't let messy onboarding kill your client's confidence before the work even starts.
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
