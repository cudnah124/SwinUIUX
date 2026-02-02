export const BRAND_COLORS = {
    primary: '#00C853',
    secondary: '#1A237E',
};

export const NAV_ITEMS = [
    {
        label: 'Personal Banking',
        href: '#personal',
        dropdown: [
            { label: 'Payments', href: '/payments' },
            { label: 'Card', href: '/card' },
            { label: 'Credit', href: '/credit' },
            { label: 'Vault', href: '/savings' },
        ],
    },
    {
        label: 'Business Banking',
        href: '#business',
        dropdown: [
            { label: 'Product Overview', href: '/business-banking' },
            { label: 'Merchant Support', href: '/business-support' },
            { label: 'Payments & Collections', href: '/payment-and-collection' },
            { label: 'Fintech as a Service', href: '/fintech-as-a-service' },
        ],
    },
    {
        label: 'Company',
        href: '#company',
        dropdown: [
            { label: 'About Us', href: '/about-us' },
            { label: 'Careers', href: '/career' },
        ],
    },
    {
        label: 'Resources',
        href: '#resources',
        dropdown: [{ label: 'FAQ', href: '/faq' }],
    },
];

export const FEATURE_CARDS = [
    {
        icon: 'CreditCard',
        title: 'Payments',
        description: 'Quick and seamless payments with zero maintenance fees',
    },
    {
        icon: 'Wallet',
        title: 'Card',
        description: 'Get your Aella card for easy access to your funds',
    },
    {
        icon: 'TrendingUp',
        title: 'Credit',
        description: 'Low-interest loans to meet your financial needs',
    },
    {
        icon: 'PiggyBank',
        title: 'Vault',
        description: 'High yield savings accounts to grow your wealth',
    },
];

export const SOCIAL_LINKS = [
    { name: 'Twitter', icon: 'Twitter', url: 'https://twitter.com/aellaapp' },
    { name: 'Facebook', icon: 'Facebook', url: 'https://facebook.com/aellaapp' },
    {
        name: 'Instagram',
        icon: 'Instagram',
        url: 'https://instagram.com/aellaapp',
    },
    {
        name: 'LinkedIn',
        icon: 'Linkedin',
        url: 'https://linkedin.com/company/aellaapp',
    },
];

export const CONTACT_INFO = {
    supportEmail: 'support@aellacredit.com',
    infoEmail: 'info@aellamfb.com',
    appDownloadUrl: 'https://install.aella.app',
};
