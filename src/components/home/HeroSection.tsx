import React from 'react';
import { Button } from '@/components/ui/Button';
import { QrCode } from 'lucide-react';

export const HeroSection: React.FC = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-[#8B4513] via-[#A0522D] to-[#D2691E] py-20 lg:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative z-10 max-w-2xl">
                    {/* Small tag line */}
                    <div className="mb-6 flex items-center space-x-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white">
                            <span className="text-xs font-bold text-white">©</span>
                        </span>
                        <span className="text-sm font-medium uppercase tracking-wide text-white">
                            CREDIREADY AI FOR YOUR BUSINESS
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="mb-6 text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
                        Business Loans Made Simple - Approved in 24 Hours
                    </h1>

                    {/* Description */}
                    <p className="mb-8 text-lg text-white/90 sm:text-xl">
                        Smart financing for Micro SMEs. No collateral required - just your
                        business documents. Interest rates from 1.2% per month.
                    </p>

                    {/* QR Code Section */}
                    <div className="mb-8">
                        <div className="inline-block rounded-xl bg-white p-4 shadow-lg">
                            <div className="flex h-32 w-32 items-center justify-center rounded-lg bg-black">
                                <QrCode className="text-white" size={100} />
                            </div>
                        </div>
                        <p className="mt-3 text-sm text-white/90">Scan to start your application</p>
                    </div>

                    {/* Trust message */}
                    <p className="text-sm text-white/80">
                        CrediReady AI uses AI technology to automate loan approval,
                        helping you get fast and accurate decisions.
                    </p>
                </div>
            </div>

            {/* Decorative pattern overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        </section>
    );
};
