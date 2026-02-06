import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export const CTASection: React.FC = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 py-20">
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Text & Buttons */}
                    <div className="text-white">
                        <h2 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl">
                            Ready to Get Your Credit Assessment?
                        </h2>
                        <p className="mb-8 text-lg text-white/90">Upload your financial documents and get instant AI-powered credit analysis</p>

                        <div className="flex flex-col gap-4 sm:flex-row">
                            <Link href="/upload">
                                <Button variant="primary" size="lg">
                                    Upload Documents
                                </Button>
                            </Link>
                            <Link href="#how-it-works">
                                <Button variant="secondary" size="lg">
                                    Learn More
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* 3D Illustration Placeholder */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative">
                            {/* Donut/Ring illustration placeholder */}
                            <div className="flex h-64 w-64 items-center justify-center">
                                <div className="h-48 w-48 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 opacity-80 shadow-2xl">
                                    <div className="flex h-full w-full items-center justify-center">
                                        <div className="h-24 w-24 rounded-full bg-blue-600"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative bg */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
        </section>
    );
};
