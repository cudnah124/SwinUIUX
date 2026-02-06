import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { AboutSection } from '@/components/home/AboutSection';
import { WhyCreditAISection } from '@/components/home/WhyCreditAISection';
import { HowItWorksSection } from '@/components/home/HowItWorksSection';
import { StatsSection } from '@/components/home/StatsSection';
import { CTASection } from '@/components/home/CTASection';
import { ResourcesSection } from '@/components/home/ResourcesSection';
import { ContactSection } from '@/components/home/ContactSection';

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <WhyCreditAISection />
            <HowItWorksSection />
            <StatsSection />
            <CTASection />
            <ResourcesSection />
            <ContactSection />
        </>
    );
}
