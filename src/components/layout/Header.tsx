'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { NAV_ITEMS } from '@/lib/constants';

export const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    useEffect(() => {
        // Check if user is logged in
        const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
        setIsLoggedIn(loggedIn);
    }, []);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (username === 'user' && password === '1') {
            localStorage.setItem('isLoggedIn', 'true');
            setIsLoggedIn(true);
            setShowLoginModal(false);
            setUsername('');
            setPassword('');
            setLoginError('');
        } else {
            setLoginError('Invalid credentials. Use username: user, password: 1');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    };

    return (
        <>
            <header className="sticky top-0 z-50 bg-white shadow-sm">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center">
                            <span className="text-2xl font-bold text-aella-green">
                                AELLA
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden items-center space-x-8 md:flex">
                            {NAV_ITEMS.map((item) => (
                                <div key={item.label} className="group relative">
                                    <a
                                        href={item.href}
                                        className="text-aella-gray-700 hover:text-aella-green"
                                    >
                                        {item.label}
                                    </a>
                                    {item.dropdown && (
                                        <div className="invisible absolute left-0 top-full mt-2 w-64 rounded-lg bg-white py-2 shadow-lg opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                                            {item.dropdown.map((dropdownItem) => (
                                                <Link
                                                    key={dropdownItem.label}
                                                    href={dropdownItem.href}
                                                    className="block px-4 py-2 text-sm text-aella-gray-700 hover:bg-aella-gray-50 hover:text-aella-green"
                                                >
                                                    {dropdownItem.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* Auth & CTA Buttons */}
                        <div className="hidden items-center space-x-4 md:flex">
                            {isLoggedIn ? (
                                <div className="flex items-center space-x-3">
                                    <div className="flex items-center space-x-2 text-aella-gray-700">
                                        <User size={18} />
                                        <span className="text-sm">user</span>
                                    </div>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={handleLogout}
                                        className="flex items-center space-x-2"
                                    >
                                        <LogOut size={16} />
                                        <span>Logout</span>
                                    </Button>
                                </div>
                            ) : (
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => setShowLoginModal(true)}
                                >
                                    Login
                                </Button>
                            )}
                            <Button variant="primary" size="md">
                                Download the App
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? (
                                <X className="h-6 w-6 text-aella-gray-700" />
                            ) : (
                                <Menu className="h-6 w-6 text-aella-gray-700" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="border-t border-aella-gray-200 md:hidden">
                        <div className="space-y-1 px-4 pb-3 pt-2">
                            {NAV_ITEMS.map((item) => (
                                <div key={item.label}>
                                    <a
                                        href={item.href}
                                        className="block py-2 text-aella-gray-700 hover:text-aella-green"
                                    >
                                        {item.label}
                                    </a>
                                    {item.dropdown && (
                                        <div className="ml-4 space-y-1">
                                            {item.dropdown.map((dropdownItem) => (
                                                <Link
                                                    key={dropdownItem.label}
                                                    href={dropdownItem.href}
                                                    className="block py-1 text-sm text-aella-gray-600 hover:text-aella-green"
                                                >
                                                    {dropdownItem.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div className="pt-2">
                                {isLoggedIn ? (
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={handleLogout}
                                        className="mb-2 w-full"
                                    >
                                        Logout (user)
                                    </Button>
                                ) : (
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => setShowLoginModal(true)}
                                        className="mb-2 w-full"
                                    >
                                        Login
                                    </Button>
                                )}
                                <Button variant="primary" size="md" className="w-full">
                                    Download the App
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </header>

            {/* Login Modal */}
            {showLoginModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-2xl">
                        <div className="mb-6 flex items-center justify-between">
                            <h2 className="text-2xl font-bold text-aella-gray-900">Login</h2>
                            <button
                                onClick={() => {
                                    setShowLoginModal(false);
                                    setLoginError('');
                                }}
                                className="text-aella-gray-500 hover:text-aella-gray-700"
                            >
                                <X size={24} />
                            </button>
                        </div>
                        <form onSubmit={handleLogin} className="space-y-4">
                            <div>
                                <label className="mb-1 block text-sm font-medium text-aella-gray-700">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-full rounded-lg border border-aella-gray-300 px-4 py-2 focus:border-aella-green focus:outline-none focus:ring-2 focus:ring-aella-green"
                                    placeholder="user"
                                    required
                                />
                            </div>
                            <div>
                                <label className="mb-1 block text-sm font-medium text-aella-gray-700">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full rounded-lg border border-aella-gray-300 px-4 py-2 focus:border-aella-green focus:outline-none focus:ring-2 focus:ring-aella-green"
                                    placeholder="•••"
                                    required
                                />
                            </div>
                            {loginError && (
                                <p className="text-sm text-red-600">{loginError}</p>
                            )}
                            <Button type="submit" variant="primary" className="w-full">
                                Login
                            </Button>
                            <p className="text-center text-xs text-aella-gray-500">
                                Demo: username = user, password = 1
                            </p>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};
