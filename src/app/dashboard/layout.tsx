import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Dashboard | CrediReady AI',
    description: 'Manage your profile and loan applications',
};

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
