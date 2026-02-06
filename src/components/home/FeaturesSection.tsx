import React from 'react';
import { Card } from '@/components/ui/Card';
import {
    CreditCard,
    Wallet,
    TrendingUp,
    PiggyBank,
    Building2,
    Headphones,
    ArrowLeftRight,
    Blocks,
} from 'lucide-react';
import { FEATURE_CARDS } from '@/lib/constants';

export const FeaturesSection: React.FC = () => {
    const personalIcons = [CreditCard, Wallet, TrendingUp, PiggyBank];
    const businessFeatures = [
        {
            icon: Building2,
            title: 'Product Overview',
            description: 'Comprehensive banking solutions for your business',
        },
        {
            icon: Headphones,
            title: 'Merchant Support',
            description: '24/7 support for all your merchant needs',
        },
        {
            icon: ArrowLeftRight,
            title: 'Payments & Collections',
            description: 'Seamless payment processing and collection',
        },
        {
            icon: Blocks,
            title: 'Fintech as a Service',
            description: 'Build on top of our robust infrastructure',
        },
    ];

    return (
        <section className="bg-creditai-gray-50 py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Personal Banking */}
                <div className="mb-16">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-creditai-gray-900 sm:text-4xl">
                            Personal Banking
                        </h2>
                        <p className="text-lg text-creditai-gray-600">
                            Everything you need for your personal finances
                        </p>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {FEATURE_CARDS.map((feature, index) => {
                            const Icon = personalIcons[index];
                            return (
                                <Card
                                    key={feature.title}
                                    icon={<Icon size={32} />}
                                    title={feature.title}
                                    description={feature.description}
                                />
                            );
                        })}
                    </div>
                </div>

                {/* Business Banking */}
                <div>
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-creditai-gray-900 sm:text-4xl">
                            Business Banking
                        </h2>
                        <p className="text-lg text-creditai-gray-600">
                            Powerful tools to grow your business
                        </p>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {businessFeatures.map((feature) => {
                            const Icon = feature.icon;
                            return (
                                <Card
                                    key={feature.title}
                                    icon={<Icon size={32} />}
                                    title={feature.title}
                                    description={feature.description}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
