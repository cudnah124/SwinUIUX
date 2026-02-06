'use client';

import { DM_Sans } from 'next/font/google';
import { usePathname } from 'next/navigation';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const dmSans = DM_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-dm-sans',
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    const isDashboard = pathname?.startsWith('/dashboard');
    const isUpload = pathname?.startsWith('/upload');
    const hideLayout = isDashboard || isUpload;

    return (
        <html lang="en">
            <body className={`${dmSans.variable} font-sans`}>
                {!hideLayout && <Header />}
                <main>{children}</main>
                {!hideLayout && <Footer />}
            </body>
        </html>
    );
}
