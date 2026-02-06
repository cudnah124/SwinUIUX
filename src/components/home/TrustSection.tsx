import React from 'react';
import { Shield, Award, Lock } from 'lucide-react';

export const TrustSection: React.FC = () => {
    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="mb-6 text-2xl font-bold text-creditai-gray-900 sm:text-3xl">
                        Trusted by thousands across emerging markets
                    </h2>
                    <p className="mx-auto mb-12 max-w-3xl text-lg text-creditai-gray-600">
                        CreditAI has been empowering financial freedom in emerging markets
                        for over 8 years. Secured and licensed by CBN, with insured deposits
                        by NDIC.
                    </p>

                    {/* Trust Badges */}
                    <div className="mb-12 flex flex-wrap items-center justify-center gap-8">
                        <div className="flex flex-col items-center">
                            <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-creditai-green/10">
                                <Shield className="text-creditai-green" size={32} />
                            </div>
                            <p className="text-sm font-semibold text-creditai-gray-700">
                                Licensed by CBN
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-creditai-green/10">
                                <Lock className="text-creditai-green" size={32} />
                            </div>
                            <p className="text-sm font-semibold text-creditai-gray-700">
                                Insured by NDIC
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-creditai-green/10">
                                <Award className="text-creditai-green" size={32} />
                            </div>
                            <p className="text-sm font-semibold text-creditai-gray-700">
                                8+ Years of Trust
                            </p>
                        </div>
                    </div>

                    {/* Partner Logos Placeholder */}
                    <div className="border-t border-creditai-gray-200 pt-8">
                        <p className="mb-6 text-sm font-medium text-creditai-gray-500">
                            LICENSED AND REGULATED BY
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-12">
                            <div className="flex h-16 w-32 items-center justify-center rounded-lg border border-creditai-gray-200 bg-creditai-gray-50 px-4">
                                <span className="text-sm font-bold text-creditai-gray-700">
                                    CBN
                                </span>
                            </div>
                            <div className="flex h-16 w-32 items-center justify-center rounded-lg border border-creditai-gray-200 bg-creditai-gray-50 px-4">
                                <span className="text-sm font-bold text-creditai-gray-700">
                                    NDIC
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
