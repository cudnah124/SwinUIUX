import React from 'react';

export const ResourcesSection: React.FC = () => {
    const faqs = [
        {
            q: 'What is CreditAI?',
            a: 'CreditAI is an AI-powered credit assessment platform for Micro SMEs using alternative data sources, without requiring traditional collateral.',
        },
        {
            q: 'What documents do I need?',
            a: 'Upload financial statements (PDF/DOCX) such as bank statements, tax returns, or business documents in vertical layout.',
        },
        {
            q: 'How long does assessment take?',
            a: 'Most assessments complete within 24 hours. Track progress in your dashboard\'s Strategist View.',
        },
        {
            q: 'Is my data secure?',
            a: 'Yes! We use bank-level encryption. All documents are processed securely with strict access controls.',
        },
        {
            q: 'Do I need collateral?',
            a: 'No! We assess creditworthiness based on your actual business performance using alternative data.',
        },
        {
            q: 'How much does it cost?',
            a: 'Basic credit assessment is free. Contact us for pricing on advanced features and loan applications.',
        },
    ];

    return (
        <section id="resources" className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-creditai-gray-900">
                        Resources & FAQ
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-creditai-gray-600">
                        Common questions about CreditAI
                    </p>
                </div>

                <div className="mx-auto max-w-4xl space-y-6">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="rounded-xl border border-creditai-gray-200 bg-creditai-gray-50 p-6"
                        >
                            <h3 className="mb-3 text-lg font-bold text-creditai-gray-900">
                                {faq.q}
                            </h3>
                            <p className="text-creditai-gray-700">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
