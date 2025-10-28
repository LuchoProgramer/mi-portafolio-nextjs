"use client";

import Link from "next/link";

const Header = () => {
    return (
        <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
            <div className="max-w-7xl mx-auto px-6 py-8">
                <nav className="flex justify-between items-center">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="font-bold text-xl text-black hover:text-[#0066FF] transition-colors duration-200"
                        aria-label="Inicio"
                    >
                        LV
                    </Link>

                    {/* Elementos del Header */}
                    <div className="flex items-center">
                        <Link
                            href="https://pukadigital.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-[#0066FF] transition-colors duration-200 font-medium"
                        >
                            Puka Digital
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;