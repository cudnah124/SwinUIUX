export interface NavItem {
    label: string;
    href: string;
    dropdown?: DropdownItem[];
}

export interface DropdownItem {
    label: string;
    href: string;
}

export interface FeatureCard {
    icon: string;
    title: string;
    description: string;
}

export interface SocialLink {
    name: string;
    icon: string;
    url: string;
}
