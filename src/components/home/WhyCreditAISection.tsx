import React from 'react';

export const WhyCreditAISection: React.FC = () => {
    const features = [
        {
            title: 'Fast Automated Approval',
            description: 'AI system analyzes applications within 24 hours. No long waiting times, no complexity.',
            bgColor: 'bg-gray-100',
            textColor: 'text-blue-600',
            illustration: '🔫💵', // Placeholder for 3D gun shooting money
        },
        {
            title: 'No Collateral Required',
            description: "Collateral-free, based on your business performance. Perfect for small SMEs without traditional assets.",
            bgColor: 'bg-[#1A237E]',
            textColor: 'text-white',
            illustration: '💡', // Placeholder for yellow bulb
        },
        {
            title: 'Competitive Rates',
            description: "Interest rates from 1.2% per month, flexible to your needs. Transparent, no hidden fees.",
            bgColor: 'bg-blue-600',
            textColor: 'text-white',
            illustration: '🎧', // Placeholder for headphones
        },
        {
            title: 'Simple Process',
            description: 'Just 3 steps: Apply online → Upload documents → Receive funds. 100% digital.',
            bgColor: 'bg-black',
            textColor: 'text-white',
            illustration: '🔧', // Placeholder for chip
        },
    ];

    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                    Why Choose CrediReady AI?
                </h2>

                {/* Features Grid */}
                <div className="grid gap-6 sm:grid-cols-2">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`${feature.bgColor} ${feature.textColor} group relative overflow-hidden rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-2 lg:p-12`}
                        >
                            {/* Content */}
                            <div className="relative z-10">
                                <h3 className="mb-3 text-2xl font-bold">{feature.title}</h3>
                                <p className={`text-sm leading-relaxed ${feature.textColor === 'text-white' ? 'text-white/80' : 'text-gray-600'}`}>
                                    {feature.description}
                                </p>
                            </div>

                            {/* Illustration placeholder */}
                            <div className="absolute bottom-4 right-4 text-6xl opacity-20">
                                {feature.illustration}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
