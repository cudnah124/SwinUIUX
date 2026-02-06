import React from 'react';
import { Button } from '@/components/ui/Button';

export const BusinessSection: React.FC = () => {
    return (
        <section className="bg-gray-900 py-20 text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 grid gap-8 lg:grid-cols-2 lg:items-center">
                    {/* Text Content */}
                    <div>
                        <h2 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl">
                            How It Works
                        </h2>
                        <p className="mb-8 text-lg text-gray-300">
                            AI-powered credit assessment using Alternative Data
                        </p>
                        <div className="flex flex-col gap-4 sm:flex-row">
                            <Button variant="primary" size="lg">
                                Open an Account
                            </Button>
                            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
                                Learn more
                            </Button>
                        </div>
                    </div>

                    {/* Empty right side - can add illustration later */}
                    <div></div>
                </div>

                {/* Business Cards Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Step 1 Card */}
                    <div className="group overflow-hidden rounded-xl bg-gray-800 transition-transform hover:-translate-y-2">
                        <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800">
                            <div className="flex h-full items-center justify-center text-4xl">
                                📝
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="mb-2 text-xl font-bold">Step 1: Apply Online</h3>
                            <p className="text-sm text-gray-400">
                                Quick application form: business info, loan amount, and purpose. Takes only 3 minutes.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 Card */}
                    <div className="group overflow-hidden rounded-xl bg-gray-800 transition-transform hover:-translate-y-2">
                        <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800">
                            <div className="flex h-full items-center justify-center text-4xl">
                                📤
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="mb-2 text-xl font-bold">Step 2: Connect Your Business Data</h3>
                            <p className="text-sm text-gray-400">
                                Connect SoBanHang, E-commerce platforms, or upload bank statements and invoices (even handwritten).
                                Our AI handles messy, unstructured data automatically.
                            </p>
                            <p className="mt-2 text-xs text-blue-400">
                                💡 Powered by AWS Glue + S3 for data processing
                            </p>
                        </div>
                    </div>

                    {/* Step 3 Card */}
                    <div className="group overflow-hidden rounded-xl bg-gray-800 transition-transform hover:-translate-y-2">
                        <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800">
                            <div className="flex h-full items-center justify-center text-4xl">
                                💰
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="mb-2 text-xl font-bold">Step 3: Get AI Financial Health Report</h3>
                            <p className="text-sm text-gray-400">
                                Receive your credit score, explainable AI insights (SHAP), and personalized recommendations
                                to optimize cash flow. Loan decision within 24h, funds in 1-2 days if approved.
                            </p>
                            <p className="mt-2 text-xs text-blue-400">
                                🤖 Powered by Amazon SageMaker + Bedrock for AI analysis
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
