import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const dmSans = DM_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-dm-sans',
});

export const metadata: Metadata = {
    title: 'Aella | The one stop app for your banking needs',
    description:
        'Enjoy quick payments, zero maintenance fees, low-interest loans and high yield savings accounts. Aella MFB has been empowering financial freedom for over 8 years.',
    keywords: [
        'Aella',
        'banking',
        'fintech',
        'mobile banking',
        'payments',
        'credit',
        'savings',
    ],
    authors: [{ name: 'AellaMFB' }],
    openGraph: {
        title: 'Aella | The one stop app for your banking needs',
        description:
            'Enjoy quick payments, zero maintenance fees, low-interest loans and high yield savings accounts.',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${dmSans.variable} font-sans`}>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
