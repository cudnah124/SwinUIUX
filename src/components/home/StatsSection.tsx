import React from 'react';
import { DollarSign, Download, TrendingUp } from 'lucide-react';

export const StatsSection: React.FC = () => {
    const stats = [
        {
            icon: DollarSign,
            value: '₫500B+',
            label: 'Total Disbursed',
        },
        {
            icon: Download,
            value: '2,500+',
            label: 'Loans Approved',
        },
        {
            icon: TrendingUp,
            value: '24h',
            label: 'Approval Time',
        },
    ];

    return (
        <section className="bg-gray-900 py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-8 sm:grid-cols-3">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="mb-4 flex justify-center">
                                <stat.icon className="h-8 w-8 text-blue-500" />
                            </div>
                            <div className="mb-2 text-4xl font-bold text-white lg:text-5xl">
                                {stat.value}
                            </div>
                            <div className="text-sm text-gray-400">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
