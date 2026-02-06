'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { LogOut, Home } from 'lucide-react';

export default function DashboardPage() {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [activeTab, setActiveTab] = useState('personal');
    const [showSaved, setShowSaved] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);

    useEffect(() => {
        const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
        if (!loggedIn) {
            router.push('/');
        } else {
            setIsLoggedIn(true);
        }
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        router.push('/');
    };

    const handleSave = () => {
        setShowSaved(true);
        setTimeout(() => setShowSaved(false), 3000);
    };

    if (!isLoggedIn) {
        return null;
    }

    const menuItems = [
        { id: 'personal', label: 'Business Info' },
        { id: 'strategist', label: 'Strategist View' },
        { id: 'loans', label: 'My Loans' },
        { id: 'credit', label: 'Credit Report' },
        { id: 'integration', label: 'Data Integration' },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Top Navigation Header */}
            <header className="bg-white border-b border-gray-200">
                <div className="flex items-center justify-between px-6 py-4">
                    <div className="flex items-center space-x-4">
                        <Link href="/" className="text-2xl font-bold text-creditai-green">
                            CreditAI
                        </Link>
                        <span className="text-gray-400">|</span>
                        <h1 className="text-lg font-semibold text-gray-700">Dashboard</h1>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Link
                            href="/"
                            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                        >
                            <Home className="h-5 w-5" />
                            <span className="text-sm font-medium">Home</span>
                        </Link>
                        <div className="h-6 w-px bg-gray-300"></div>
                        <div className="flex items-center space-x-2 text-gray-700">
                            <span className="text-sm font-medium">user</span>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="flex items-center space-x-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                        >
                            <LogOut className="h-4 w-4" />
                            <span>Logout</span>
                        </button>
                    </div>
                </div>
            </header>

            <div className="flex">
                {/* Sidebar */}
                <aside className="w-72 bg-white border-r border-gray-200">
                    <div className="border-b border-gray-200 p-6">
                        <h2 className="text-lg font-bold text-gray-900">User profile management</h2>
                    </div>
                    <nav className="space-y-1 p-3">
                        {menuItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={`flex w-full items-center rounded-lg px-4 py-3 text-sm transition-colors ${activeTab === item.id
                                    ? 'bg-gray-100 font-medium text-gray-900'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    {/* User Profile with Dropdown */}
                    <div className="absolute bottom-8 w-72 px-3">
                        {/* Back to Homepage button */}
                        <button
                            onClick={() => router.push('/')}
                            className="mb-3 w-full rounded-lg bg-[#8B4513] px-4 py-3 text-sm font-medium text-white hover:bg-[#6D3610]"
                        >
                            ← Back to Homepage
                        </button>

                        {/* User profile clickable area */}
                        <div className="relative">
                            <button
                                onClick={() => setShowUserMenu(!showUserMenu)}
                                className="flex w-full items-center space-x-3 rounded-lg border border-gray-200 bg-white p-3 hover:bg-gray-50"
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800">
                                    <span className="text-sm font-semibold text-white">U</span>
                                </div>
                                <div className="flex-1 text-left">
                                    <p className="text-sm font-medium text-gray-900">user</p>
                                    <p className="text-xs text-gray-500">SME Owner</p>
                                </div>
                                <span className="text-gray-400">{showUserMenu ? '▲' : '▼'}</span>
                            </button>

                            {/* Dropdown Menu */}
                            {showUserMenu && (
                                <div className="absolute bottom-full left-0 mb-2 w-full rounded-lg border border-gray-200 bg-white shadow-lg">
                                    <button
                                        onClick={() => {
                                            setActiveTab('personal');
                                            setShowUserMenu(false);
                                        }}
                                        className="flex w-full items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50"
                                    >
                                        Dashboard
                                    </button>
                                    <button
                                        onClick={() => {
                                            setActiveTab('settings');
                                            setShowUserMenu(false);
                                        }}
                                        className="flex w-full items-center border-t border-gray-100 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50"
                                    >
                                        Settings
                                    </button>
                                    <button
                                        onClick={() => {
                                            handleLogout();
                                            setShowUserMenu(false);
                                        }}
                                        className="flex w-full items-center border-t border-gray-100 px-4 py-3 text-sm text-red-600 hover:bg-red-50"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 bg-white">
                    <div className="mx-auto max-w-4xl p-8">
                        {activeTab === 'personal' && (
                            <>
                                <div className="mb-6 flex items-center justify-between">
                                    <h1 className="text-2xl font-bold text-gray-900">Business Information</h1>
                                    {showSaved && (
                                        <span className="text-sm font-medium text-green-600">✓ Changes saved successfully!</span>
                                    )}
                                </div>

                                <div className="rounded-2xl border border-gray-200 bg-white p-8">
                                    {/* Avatar */}
                                    <div className="mb-8 flex justify-center">
                                        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-800">
                                            <span className="text-3xl font-bold text-white">U</span>
                                        </div>
                                    </div>

                                    {/* Form */}
                                    <form className="space-y-6">
                                        <div className="grid grid-cols-2 gap-6">
                                            <div>
                                                <label className="mb-2 block text-sm font-medium text-gray-700">
                                                    Business Name
                                                </label>
                                                <input
                                                    type="text"
                                                    defaultValue="My SME Business"
                                                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                            </div>
                                            <div>
                                                <label className="mb-2 block text-sm font-medium text-gray-700">
                                                    Business Type
                                                </label>
                                                <select className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                    <option>Retail</option>
                                                    <option>Manufacturing</option>
                                                    <option>Services</option>
                                                    <option>E-commerce</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-6">
                                            <div>
                                                <label className="mb-2 block text-sm font-medium text-gray-700">
                                                    Owner Full Name
                                                </label>
                                                <input
                                                    type="text"
                                                    defaultValue="User Demo"
                                                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                            </div>
                                            <div>
                                                <label className="mb-2 block text-sm font-medium text-gray-700">
                                                    Tax ID / Business Registration
                                                </label>
                                                <input
                                                    type="text"
                                                    defaultValue="0123456789"
                                                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-6">
                                            <div>
                                                <label className="mb-2 block text-sm font-medium text-gray-700">
                                                    Email Address
                                                </label>
                                                <input
                                                    type="email"
                                                    defaultValue="user@business.com"
                                                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                            </div>
                                            <div>
                                                <label className="mb-2 block text-sm font-medium text-gray-700">
                                                    Phone Number
                                                </label>
                                                <div className="flex gap-2">
                                                    <select className="w-24 rounded-lg border border-gray-300 px-3 py-2.5 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                        <option>+84</option>
                                                        <option>+1</option>
                                                    </select>
                                                    <input
                                                        type="tel"
                                                        defaultValue="123 456 789"
                                                        className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-6">
                                            <div>
                                                <label className="mb-2 block text-sm font-medium text-gray-700">
                                                    City
                                                </label>
                                                <select className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                    <option>Ho Chi Minh</option>
                                                    <option>Hanoi</option>
                                                    <option>Da Nang</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="mb-2 block text-sm font-medium text-gray-700">
                                                    Monthly Revenue (₫)
                                                </label>
                                                <input
                                                    type="text"
                                                    defaultValue="50,000,000"
                                                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                                Business Address
                                            </label>
                                            <input
                                                type="text"
                                                defaultValue="123 Main Street, District 1"
                                                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>

                                        <div>
                                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                                Years in Operation
                                            </label>
                                            <input
                                                type="number"
                                                defaultValue="3"
                                                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                    </form>

                                    {/* Save Button */}
                                    <div className="mt-8 flex justify-end">
                                        <button
                                            type="button"
                                            onClick={handleSave}
                                            className="rounded-lg bg-[#8B4513] px-8 py-3 font-medium text-white hover:bg-[#6D3610] transition-colors"
                                        >
                                            Save Changes
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}

                        {activeTab === 'loans' && (
                            <div>
                                <h1 className="mb-6 text-2xl font-bold text-gray-900">My Loans</h1>

                                {/* Active Loans */}
                                <div className="mb-6 rounded-xl border border-gray-200 bg-white p-6">
                                    <h2 className="mb-4 text-lg font-semibold text-gray-900">Active Loans</h2>
                                    <div className="space-y-4">
                                        <div className="rounded-lg border border-gray-200 p-4">
                                            <div className="mb-2 flex items-center justify-between">
                                                <h3 className="font-semibold text-gray-900">Short-Term Working Capital</h3>
                                                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                                                    Active
                                                </span>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4 text-sm">
                                                <div>
                                                    <p className="text-gray-500">Loan Amount</p>
                                                    <p className="font-semibold">₫150,000,000</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-500">Interest Rate</p>
                                                    <p className="font-semibold">1.2% / month</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-500">Remaining</p>
                                                    <p className="font-semibold">₫120,000,000</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-500">Next Payment</p>
                                                    <p className="font-semibold">Feb 15, 2024</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Loan History */}
                                <div className="rounded-xl border border-gray-200 bg-white p-6">
                                    <h2 className="mb-4 text-lg font-semibold text-gray-900">Loan History</h2>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                                            <div>
                                                <p className="font-medium text-gray-900">Payroll Financing</p>
                                                <p className="text-sm text-gray-500">#LN-2024-002</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-semibold">₫80,000,000</p>
                                                <span className="text-xs text-yellow-600">Under Review</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                                            <div>
                                                <p className="font-medium text-gray-900">Purchase Financing</p>
                                                <p className="text-sm text-gray-500">#LN-2023-045</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-semibold">₫200,000,000</p>
                                                <span className="text-xs text-gray-400">Completed</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'strategist' && (
                            <div>
                                <h1 className="mb-6 text-2xl font-bold text-gray-900">Strategist View</h1>
                                <p className="mb-6 text-gray-600">Track your document processing and credit assessment pipeline</p>

                                {/* Processing Pipeline */}
                                <div className="mb-6 rounded-xl border border-gray-200 bg-white p-6">
                                    <h2 className="mb-4 text-lg font-semibold text-gray-900">Document Processing Pipeline</h2>

                                    <div className="space-y-4">
                                        {/* Document 1 - Processing */}
                                        <div className="rounded-lg border border-gray-200 p-4">
                                            <div className="mb-3 flex items-center justify-between">
                                                <h3 className="font-semibold text-gray-900">Bank Statement Q4 2025</h3>
                                                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                                                    Processing
                                                </span>
                                            </div>
                                            <div className="mb-2 text-sm text-gray-500">Uploaded: 2 hours ago</div>

                                            {/* Progress Steps */}
                                            <div className="space-y-2 pt-3">
                                                <div className="flex items-center space-x-2">
                                                    <span className="text-green-600">✓</span>
                                                    <span className="text-sm text-gray-700">Document uploaded</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <span className="text-green-600">✓</span>
                                                    <span className="text-sm text-gray-700">Layout validation passed</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-blue-600 border-t-transparent"></div>
                                                    <span className="text-sm font-medium text-blue-600">AI extraction in progress...</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <span className="text-gray-400">○</span>
                                                    <span className="text-sm text-gray-400">Credit scoring</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Document 2 - Completed */}
                                        <div className="rounded-lg border border-gray-200 p-4">
                                            <div className="mb-3 flex items-center justify-between">
                                                <h3 className="font-semibold text-gray-900">Business Registration Certificate</h3>
                                                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                                                    Completed
                                                </span>
                                            </div>
                                            <div className="mb-2 text-sm text-gray-500">Uploaded: 1 day ago</div>

                                            <div className="space-y-2 pt-3">
                                                <div className="flex items-center space-x-2">
                                                    <span className="text-green-600">✓</span>
                                                    <span className="text-sm text-gray-700">Document verified</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <span className="text-green-600">✓</span>
                                                    <span className="text-sm text-gray-700">Data extracted successfully</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <span className="text-green-600">✓</span>
                                                    <span className="text-sm text-gray-700">Added to credit profile</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Document 3 - Error */}
                                        <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                                            <div className="mb-3 flex items-center justify-between">
                                                <h3 className="font-semibold text-gray-900">Tax Returns 2024</h3>
                                                <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-800">
                                                    Action Required
                                                </span>
                                            </div>
                                            <div className="mb-2 text-sm text-gray-500">Uploaded: 3 hours ago</div>

                                            <div className="rounded-lg bg-white p-3">
                                                <p className="text-sm text-red-600">⚠ Document must be in vertical layout. Please re-upload.</p>
                                                <a href="/upload" className="mt-2 inline-block text-sm font-medium text-blue-600 hover:underline">
                                                    Upload new version →
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* AI Insights */}
                                <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-purple-50 to-blue-50 p-6">
                                    <h2 className="mb-4 text-lg font-semibold text-gray-900">AI Insights</h2>
                                    <ul className="space-y-3 text-sm">
                                        <li className="flex items-start space-x-2">
                                            <span className="text-purple-600">🤖</span>
                                            <span>Processing 1 document currently - estimated completion in 5 minutes</span>
                                        </li>
                                        <li className="flex items-start space-x-2">
                                            <span className="text-green-600">📊</span>
                                            <span>2 documents successfully analyzed. Credit score updated.</span>
                                        </li>
                                        <li className="flex items-start space-x-2">
                                            <span className="text-orange-600">💡</span>
                                            <span>Recommendation: Upload recent bank statements for better assessment</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}

                        {activeTab === 'credit' && (
                            <div>
                                <h1 className="mb-6 text-2xl font-bold text-gray-900">Credit Health Report</h1>

                                {/* Credit Score Card */}
                                <div className="mb-6 rounded-xl border border-gray-200 bg-gradient-to-br from-[#8B4513] to-[#6D3610] p-8 text-white">
                                    <h2 className="mb-2 text-lg font-semibold">Your Credit Score</h2>
                                    <div className="flex items-end space-x-3">
                                        <p className="text-6xl font-bold">742</p>
                                        <p className="pb-3 text-sm text-orange-100">/ 850</p>
                                    </div>
                                    <p className="mt-2 text-sm text-orange-100">↑ +23 points from last month</p>
                                    <div className="mt-4 rounded-lg bg-white/10 p-3">
                                        <p className="text-sm">Rating: <strong>Good</strong></p>
                                    </div>
                                </div>

                                {/* Score Breakdown */}
                                <div className="mb-6 rounded-xl border border-gray-200 bg-white p-6">
                                    <h2 className="mb-4 text-lg font-semibold text-gray-900">Score Breakdown</h2>
                                    <div className="space-y-4">
                                        <div>
                                            <div className="mb-1 flex justify-between text-sm">
                                                <span className="text-gray-700">Payment History</span>
                                                <span className="font-semibold text-green-600">Excellent (100%)</span>
                                            </div>
                                            <div className="h-2 rounded-full bg-gray-200">
                                                <div className="h-2 rounded-full bg-green-500" style={{ width: '100%' }}></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="mb-1 flex justify-between text-sm">
                                                <span className="text-gray-700">Credit Utilization</span>
                                                <span className="font-semibold text-[#8B4513]">Good (45%)</span>
                                            </div>
                                            <div className="h-2 rounded-full bg-gray-200">
                                                <div className="h-2 rounded-full bg-[#8B4513]" style={{ width: '75%' }}></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="mb-1 flex justify-between text-sm">
                                                <span className="text-gray-700">Business Age</span>
                                                <span className="font-semibold text-orange-600">Fair (3 years)</span>
                                            </div>
                                            <div className="h-2 rounded-full bg-gray-200">
                                                <div className="h-2 rounded-full bg-orange-500" style={{ width: '60%' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* AI Recommendations */}
                                <div className="rounded-xl border border-gray-200 bg-white p-6">
                                    <h2 className="mb-4 text-lg font-semibold text-gray-900">AI Recommendations</h2>
                                    <ul className="space-y-3 text-sm">
                                        <li className="flex items-start space-x-2">
                                            <span className="text-green-500">✓</span>
                                            <span>Continue making on-time payments to maintain your excellent history</span>
                                        </li>
                                        <li className="flex items-start space-x-2">
                                            <span className="text-[#8B4513]">ℹ️</span>
                                            <span>Reduce credit utilization below 30% to improve score further</span>
                                        </li>
                                        <li className="flex items-start space-x-2">
                                            <span className="text-orange-500">📈</span>
                                            <span>Your score will naturally improve as your business ages</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}

                        {activeTab === 'integration' && (
                            <div>
                                <h1 className="mb-6 text-2xl font-bold text-gray-900">Data Integration</h1>

                                <div className="mb-6 rounded-xl border border-orange-200 bg-orange-50 p-4">
                                    <p className="text-sm text-[#8B4513]">
                                        💡 Connect your business data sources for faster loan approval and better credit assessment
                                    </p>
                                </div>

                                {/* Connected Platforms */}
                                <div className="mb-6 rounded-xl border border-gray-200 bg-white p-6">
                                    <h2 className="mb-4 text-lg font-semibold text-gray-900">Connected Platforms</h2>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
                                            <div className="flex items-center space-x-3">
                                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                                                    <span className="text-2xl">🏪</span>
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-900">SoBanHang</p>
                                                    <p className="text-sm text-gray-500">Connected on Jan 10, 2024</p>
                                                </div>
                                            </div>
                                            <button className="text-sm text-red-600 hover:underline">Disconnect</button>
                                        </div>

                                        <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
                                            <div className="flex items-center space-x-3">
                                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                                                    <span className="text-2xl">🏦</span>
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-900">VietcomBank</p>
                                                    <p className="text-sm text-gray-500">Connected on Jan 15, 2024</p>
                                                </div>
                                            </div>
                                            <button className="text-sm text-red-600 hover:underline">Disconnect</button>
                                        </div>
                                    </div>
                                </div>

                                {/* Available Integrations */}
                                <div className="rounded-xl border border-gray-200 bg-white p-6">
                                    <h2 className="mb-4 text-lg font-semibold text-gray-900">Available Integrations</h2>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between rounded-lg border border-dashed border-gray-300 p-4">
                                            <div className="flex items-center space-x-3">
                                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                                                    <span className="text-2xl">🛒</span>
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-900">Shopee</p>
                                                    <p className="text-sm text-gray-500">E-commerce platform</p>
                                                </div>
                                            </div>
                                            <button className="rounded-lg bg-[#8B4513] px-4 py-2 text-sm font-medium text-white hover:bg-[#6D3610]">
                                                Connect
                                            </button>
                                        </div>

                                        <div className="flex items-center justify-between rounded-lg border border-dashed border-gray-300 p-4">
                                            <div className="flex items-center space-x-3">
                                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                                                    <span className="text-2xl">🛍️</span>
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-900">Lazada</p>
                                                    <p className="text-sm text-gray-500">E-commerce platform</p>
                                                </div>
                                            </div>
                                            <button className="rounded-lg bg-[#8B4513] px-4 py-2 text-sm font-medium text-white hover:bg-[#6D3610]">
                                                Connect
                                            </button>
                                        </div>

                                        <div className="flex items-center justify-between rounded-lg border border-dashed border-gray-300 p-4">
                                            <div className="flex items-center space-x-3">
                                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                                                    <span className="text-2xl">📊</span>
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-900">MISA Accounting</p>
                                                    <p className="text-sm text-gray-500">Accounting software</p>
                                                </div>
                                            </div>
                                            <button className="rounded-lg bg-[#8B4513] px-4 py-2 text-sm font-medium text-white hover:bg-[#6D3610]">
                                                Connect
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
}
