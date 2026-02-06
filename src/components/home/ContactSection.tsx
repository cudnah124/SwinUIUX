import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const ContactSection: React.FC = () => {
    return (
        <section id="contact" className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-creditai-gray-900">
                        Get in Touch
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-creditai-gray-600">
                        Have questions? We're here to help you get started with CreditAI
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-creditai-gray-900">
                            Contact Information
                        </h3>

                        <div className="space-y-4">
                            <div className="flex items-start space-x-4">
                                <div className="rounded-lg bg-creditai-green/10 p-3">
                                    <Mail className="h-6 w-6 text-creditai-green" />
                                </div>
                                <div>
                                    <h4 className="mb-1 font-semibold text-creditai-gray-900">Email</h4>
                                    <p className="text-creditai-gray-600">support@creditai.com</p>
                                    <p className="text-sm text-creditai-gray-500">
                                        We'll respond within 24 hours
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="rounded-lg bg-blue-50 p-3">
                                    <Phone className="h-6 w-6 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="mb-1 font-semibold text-creditai-gray-900">Phone</h4>
                                    <p className="text-creditai-gray-600">+84 123 456 789</p>
                                    <p className="text-sm text-creditai-gray-500">
                                        Mon-Fri, 9AM - 6PM (GMT+7)
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="rounded-lg bg-purple-50 p-3">
                                    <MapPin className="h-6 w-6 text-purple-600" />
                                </div>
                                <div>
                                    <h4 className="mb-1 font-semibold text-creditai-gray-900">Office</h4>
                                    <p className="text-creditai-gray-600">
                                        District 1, Ho Chi Minh City<br />
                                        Vietnam
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="mt-8 rounded-xl bg-creditai-gray-50 p-6">
                            <h4 className="mb-4 font-semibold text-creditai-gray-900">Why Choose Us?</h4>
                            <ul className="space-y-2 text-sm text-creditai-gray-700">
                                <li>✓ 24-hour average response time</li>
                                <li>✓ 10,000+ SMEs assessed</li>
                                <li>✓ 95% accuracy rate</li>
                                <li>✓ No collateral required</li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="rounded-xl border border-creditai-gray-200 bg-white p-8 shadow-sm">
                        <h3 className="mb-6 text-2xl font-bold text-creditai-gray-900">
                            Send Us a Message
                        </h3>

                        <form className="space-y-4">
                            <div>
                                <label className="mb-2 block text-sm font-medium text-creditai-gray-700">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full rounded-lg border border-creditai-gray-300 px-4 py-3 focus:border-creditai-green focus:outline-none focus:ring-2 focus:ring-creditai-green"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-creditai-gray-700">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    className="w-full rounded-lg border border-creditai-gray-300 px-4 py-3 focus:border-creditai-green focus:outline-none focus:ring-2 focus:ring-creditai-green"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-creditai-gray-700">
                                    Business Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full rounded-lg border border-creditai-gray-300 px-4 py-3 focus:border-creditai-green focus:outline-none focus:ring-2 focus:ring-creditai-green"
                                    placeholder="Your Business"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-creditai-gray-700">
                                    Message
                                </label>
                                <textarea
                                    rows={5}
                                    className="w-full rounded-lg border border-creditai-gray-300 px-4 py-3 focus:border-creditai-green focus:outline-none focus:ring-2 focus:ring-creditai-green"
                                    placeholder="How can we help you?"
                                />
                            </div>

                            <Button variant="primary" size="lg" className="w-full">
                                <Send className="mr-2 h-5 w-5" />
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
