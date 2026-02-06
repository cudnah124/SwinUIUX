import React from 'react';
import { Upload, Brain, FileCheck, CheckCircle } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
    const steps = [
        {
            icon: Upload,
            title: '1. Upload Documents',
            description: 'Submit your financial statements (PDF/DOCX) securely. We accept bank statements, tax returns, and business documents.',
            color: 'text-blue-600',
            bgColor: 'bg-blue-50',
        },
        {
            icon: FileCheck,
            title: '2. Validation',
            description: 'Our system validates document format and layout requirements. Documents must be in vertical orientation.',
            color: 'text-purple-600',
            bgColor: 'bg-purple-50',
        },
        {
            icon: Brain,
            title: '3. AI Analysis',
            description: 'Advanced AI extracts and analyzes your financial data using alternative data sources and machine learning models.',
            color: 'text-creditai-green',
            bgColor: 'bg-green-50',
        },
        {
            icon: CheckCircle,
            title: '4. Get Results',
            description: 'Receive your credit assessment report with detailed insights and recommendations within 24 hours.',
            color: 'text-orange-600',
            bgColor: 'bg-orange-50',
        },
    ];

    return (
        <section id="how-it-works" className="bg-creditai-gray-50 py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-creditai-gray-900">
                        How It Works
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-creditai-gray-600">
                        Get your credit assessment in 4 simple steps
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={index}
                                className="relative rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                            >
                                <div className={`mb-4 inline-flex rounded-lg ${step.bgColor} p-3`}>
                                    <Icon className={`h-8 w-8 ${step.color}`} />
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-creditai-gray-900">
                                    {step.title}
                                </h3>
                                <p className="text-creditai-gray-600">{step.description}</p>
                            </div>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <a
                        href="/upload"
                        className="inline-block rounded-lg bg-creditai-green px-8 py-3 font-semibold text-white transition-colors hover:bg-creditai-green-dark"
                    >
                        Start Your Assessment Now
                    </a>
                </div>
            </div>
        </section>
    );
};
