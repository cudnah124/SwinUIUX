import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { WhyAellaSection } from '@/components/home/WhyAellaSection';
import { StatsSection } from '@/components/home/StatsSection';
import { ProductsSection } from '@/components/home/ProductsSection';
import { CTASection } from '@/components/home/CTASection';
import { BusinessSection } from '@/components/home/BusinessSection';

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <WhyAellaSection />
            <StatsSection />
            <ProductsSection />
            <CTASection />
            <BusinessSection />
        </>
    );
}
