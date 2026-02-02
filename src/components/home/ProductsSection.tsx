'use client';

import React, { useState } from 'react';
import { Smartphone } from 'lucide-react';

export const ProductsSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Short-Term');

    const tabs = ['Short-Term', 'Medium-Term', 'Purchase', 'Payroll'];

    const productContent: Record<string, { title: string; description: string }> = {
        'Short-Term': {
            title: 'Short-Term Working Capital',
            description: '3-6 month terms, up to ₫500M limit. Perfect for working capital needs and seasonal inventory.',
        },
        'Medium-Term': {
            title: 'Medium-Term Business Loans',
            description: '6-24 month terms, up to ₫2B limit. For business expansion, equipment purchase, and renovations.',
        },
        Purchase: {
            title: 'Purchase Order Financing',
            description: 'Direct payment to suppliers. Fast disbursement within 24 hours after approval. Ideal for retailers.',
        },
        Payroll: {
            title: 'Payroll Financing',
            description: 'Bridge your payroll gaps instantly. Preferential rates, flexible terms aligned with revenue cycles.',
        },
    };

    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
                    Our Loan Products
                </h2>

                {/* Tab Navigation */}
                <div className="mb-12 flex justify-center">
                    <div className="inline-flex flex-wrap gap-2 rounded-lg bg-gray-100 p-1">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`rounded-md px-6 py-3 text-sm font-medium transition-colors ${activeTab === tab
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Area */}
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Text Content */}
                    <div>
                        <h3 className="mb-4 text-2xl font-bold text-gray-900">
                            {productContent[activeTab].title}
                        </h3>
                        <p className="text-lg text-gray-600">
                            {productContent[activeTab].description}
                        </p>
                    </div>

                    {/* Phone Mockup */}
                    <div className="flex justify-center">
                        <div className="relative">
                            <div className="flex h-[500px] w-[280px] items-center justify-center rounded-[3rem] border-8 border-gray-200 bg-white shadow-2xl">
                                <div className="flex flex-col items-center text-gray-400">
                                    <Smartphone size={80} />
                                    <p className="mt-4 text-sm">Phone Mockup</p>
                                    <p className="text-xs">{activeTab} Screen</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
