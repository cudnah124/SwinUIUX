import React from 'react';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

export const AboutSection: React.FC = () => {
    return (
        <section id="about" className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-creditai-gray-900">
                        About CreditAI
                    </h2>
                    <p className="mx-auto max-w-3xl text-lg text-creditai-gray-600">
                        Empowering Micro SMEs with AI-driven credit assessment and financial inclusion
                    </p>
                </div>

                {/* Mission & Stats */}
                <div className="mb-16 grid gap-12 lg:grid-cols-2">
                    <div>
                        <h3 className="mb-6 text-3xl font-bold text-creditai-gray-900">Our Mission</h3>
                        <p className="mb-4 text-lg text-creditai-gray-700">
                            CreditAI leverages alternative data and explainable AI to provide fair, transparent credit
                            assessments for micro SMEs who traditionally lack access to formal financing.
                        </p>
                        <p className="mb-4 text-lg text-creditai-gray-700">
                            We believe every business deserves a fair chance, regardless of collateral. By analyzing
                            alternative data sources, we enable lenders to make informed decisions quickly.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="rounded-xl bg-creditai-green/10 p-6 text-center">
                            <div className="mb-2 text-4xl font-bold text-creditai-green">10K+</div>
                            <div className="text-sm text-creditai-gray-700">SMEs Assessed</div>
                        </div>
                        <div className="rounded-xl bg-blue-50 p-6 text-center">
                            <div className="mb-2 text-4xl font-bold text-blue-600">24hrs</div>
                            <div className="text-sm text-creditai-gray-700">Avg. Processing</div>
                        </div>
                        <div className="rounded-xl bg-purple-50 p-6 text-center">
                            <div className="mb-2 text-4xl font-bold text-purple-600">95%</div>
                            <div className="text-sm text-creditai-gray-700">Accuracy Rate</div>
                        </div>
                        <div className="rounded-xl bg-orange-50 p-6 text-center">
                            <div className="mb-2 text-4xl font-bold text-orange-600">0</div>
                            <div className="text-sm text-creditai-gray-700">Collateral Needed</div>
                        </div>
                    </div>
                </div>

                {/* Values */}
                <div>
                    <h3 className="mb-12 text-center text-3xl font-bold text-creditai-gray-900">Our Core Values</h3>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <div className="rounded-xl bg-creditai-gray-50 p-6 text-center">
                            <div className="mb-4 flex justify-center">
                                <Target className="h-12 w-12 text-creditai-green" />
                            </div>
                            <h4 className="mb-3 text-xl font-bold text-creditai-gray-900">Transparency</h4>
                            <p className="text-creditai-gray-600">
                                Clear, explainable AI models that businesses can trust
                            </p>
                        </div>
                        <div className="rounded-xl bg-creditai-gray-50 p-6 text-center">
                            <div className="mb-4 flex justify-center">
                                <Users className="h-12 w-12 text-blue-600" />
                            </div>
                            <h4 className="mb-3 text-xl font-bold text-creditai-gray-900">Inclusion</h4>
                            <p className="text-creditai-gray-600">
                                Financial access for all, regardless of collateral
                            </p>
                        </div>
                        <div className="rounded-xl bg-creditai-gray-50 p-6 text-center">
                            <div className="mb-4 flex justify-center">
                                <Award className="h-12 w-12 text-purple-600" />
                            </div>
                            <h4 className="mb-3 text-xl font-bold text-creditai-gray-900">Fairness</h4>
                            <p className="text-creditai-gray-600">
                                Unbiased assessments based on real business data
                            </p>
                        </div>
                        <div className="rounded-xl bg-creditai-gray-50 p-6 text-center">
                            <div className="mb-4 flex justify-center">
                                <TrendingUp className="h-12 w-12 text-orange-600" />
                            </div>
                            <h4 className="mb-3 text-xl font-bold text-creditai-gray-900">Innovation</h4>
                            <p className="text-creditai-gray-600">
                                Cutting-edge AI for modern credit assessment
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
