import React from 'react';
import Link from 'next/link';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';
import { SOCIAL_LINKS, CONTACT_INFO } from '@/lib/constants';

export const Footer: React.FC = () => {
    const iconMap: Record<string, React.ElementType> = {
        Twitter,
        Facebook,
        Instagram,
        Linkedin,
    };

    return (
        <footer className="bg-aella-navy text-white">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
                    {/* Business */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Business</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/business-banking"
                                    className="text-aella-gray-200 hover:text-aella-green"
                                >
                                    Product Overview
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/business-support"
                                    className="text-aella-gray-200 hover:text-aella-green"
                                >
                                    Merchant Support
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/payment-and-collection"
                                    className="text-aella-gray-200 hover:text-aella-green"
                                >
                                    Payments & Collections
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/fintech-as-a-service"
                                    className="text-aella-gray-200 hover:text-aella-green"
                                >
                                    Fintech as a service
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Personal */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Personal</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/payments"
                                    className="text-aella-gray-200 hover:text-aella-green"
                                >
                                    Payments
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/card"
                                    className="text-aella-gray-200 hover:text-aella-green"
                                >
                                    Card
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/credit"
                                    className="text-aella-gray-200 hover:text-aella-green"
                                >
                                    Credit
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/savings"
                                    className="text-aella-gray-200 hover:text-aella-green"
                                >
                                    Vault
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Company</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/about-us"
                                    className="text-aella-gray-200 hover:text-aella-green"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/career"
                                    className="text-aella-gray-200 hover:text-aella-green"
                                >
                                    Careers
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Resources</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/faq"
                                    className="text-aella-gray-200 hover:text-aella-green"
                                >
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal & Contact */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Legal</h3>
                        <ul className="space-y-2 mb-6">
                            <li>
                                <Link
                                    href="/terms-and-conditions"
                                    className="text-aella-gray-200 hover:text-aella-green"
                                >
                                    Terms and Conditions
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/privacy-policy"
                                    className="text-aella-gray-200 hover:text-aella-green"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/security"
                                    className="text-aella-gray-200 hover:text-aella-green"
                                >
                                    Security
                                </Link>
                            </li>
                        </ul>
                        <div>
                            <h3 className="mb-2 text-lg font-semibold">Contact</h3>
                            <p className="mb-1 text-sm text-aella-gray-200">
                                {CONTACT_INFO.supportEmail}
                            </p>
                            <p className="text-sm text-aella-gray-200">
                                {CONTACT_INFO.infoEmail}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Social Links & Copyright */}
                <div className="mt-12 border-t border-aella-navy-light pt-8">
                    <div className="flex flex-col items-center justify-between md:flex-row">
                        <div className="mb-4 flex space-x-6 md:mb-0">
                            {SOCIAL_LINKS.map((social) => {
                                const Icon = iconMap[social.icon];
                                return (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-aella-gray-200 hover:text-aella-green"
                                        aria-label={social.name}
                                    >
                                        <Icon size={20} />
                                    </a>
                                );
                            })}
                        </div>
                        <p className="text-sm text-aella-gray-200">
                            ©AellaMFB, All Rights Reserved
                        </p>
                    </div>
                    <div className="mt-4 text-center text-xs text-aella-gray-300">
                        <p>
                            Licensed by: <strong>CBN</strong> | Insured by: <strong>NDIC</strong>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
