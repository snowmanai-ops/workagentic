'use client';

import Script from 'next/script';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function BookPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-[#ededed] flex flex-col">
            <div className="container mx-auto px-4 py-8">
                <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>

                <div className="max-w-5xl mx-auto text-center space-y-4 mb-8">
                    <h1 className="text-3xl md:text-5xl font-bold">
                        Let's Build Your <span className="text-brand-500">Infrastructure</span>
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Schedule a time to audit your current onboarding flow.
                    </p>
                </div>

                <div className="glass-panel rounded-2xl p-4 md:p-8 bg-white/5 mx-auto w-full max-w-5xl">
                    <div
                        className="calendly-inline-widget w-full"
                        data-url="https://calendly.com/oliverwork/workflow-audit"
                        style={{ height: '700px', minWidth: '320px' }}
                    />
                </div>
            </div>

            <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="lazyOnload"
            />
        </main>
    );
}
