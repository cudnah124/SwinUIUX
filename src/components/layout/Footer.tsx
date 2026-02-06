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
        <footer className="bg-creditai-navy text-white">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#about"
                                    className="text-creditai-gray-200 hover:text-creditai-green"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#how-it-works"
                                    className="text-creditai-gray-200 hover:text-creditai-green"
                                >
                                    How It Works
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/upload"
                                    className="text-creditai-gray-200 hover:text-creditai-green"
                                >
                                    Upload Documents
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/dashboard"
                                    className="text-creditai-gray-200 hover:text-creditai-green"
                                >
                                    Dashboard
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Resources</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#resources"
                                    className="text-creditai-gray-200 hover:text-creditai-green"
                                >
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="text-creditai-gray-200 hover:text-creditai-green"
                                >
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Legal</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/terms-and-conditions"
                                    className="text-creditai-gray-200 hover:text-creditai-green"
                                >
                                    Terms and Conditions
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/privacy-policy"
                                    className="text-creditai-gray-200 hover:text-creditai-green"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/security"
                                    className="text-creditai-gray-200 hover:text-creditai-green"
                                >
                                    Security
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Contact</h3>
                        <p className="mb-2 text-sm text-creditai-gray-200">
                            {CONTACT_INFO.supportEmail}
                        </p>
                        <p className="mb-4 text-sm text-creditai-gray-200">
                            {CONTACT_INFO.infoEmail}
                        </p>
                        <p className="text-sm text-creditai-gray-200">
                            District 1, Ho Chi Minh City
                        </p>
                    </div>
                </div>

                {/* Social Links & Copyright */}
                <div className="mt-12 border-t border-creditai-navy-light pt-8">
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
                                        className="text-creditai-gray-200 hover:text-creditai-green"
                                        aria-label={social.name}
                                    >
                                        <Icon size={20} />
                                    </a>
                                );
                            })}
                        </div>
                        <p className="text-sm text-creditai-gray-200">
                            ©CreditAI, All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
