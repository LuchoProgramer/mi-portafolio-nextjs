// src/components/Header/Header.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import ToggleDarkMode from "@/components/common/ToggleDarkMode";
import NavigationMenu from "@/components/Header/NavigationMenu";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 fixed w-full z-20 shadow-sm">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo/Nombre */}
                <Link
                    href="/"
                    className="font-bold text-xl text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                    Luis Viteri
                </Link>

                {/* Navegación Desktop */}
                <nav className="hidden md:flex items-center space-x-8">
                    <Link
                        href="/#about"
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                    >
                        About
                    </Link>
                    <Link
                        href="/#work"
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                    >
                        Work
                    </Link>
                    <Link
                        href="https://pukadigital.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-semibold"
                    >
                        Puka Digital
                    </Link>
                    <a
                        href="mailto:luisviteri@pukadigital.com"
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                    >
                        Contact
                    </a>
                    <ToggleDarkMode />
                </nav>

                {/* Menu Mobile */}
                <div className="md:hidden flex items-center space-x-4">
                    <ToggleDarkMode />
                    <button
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                        className="text-gray-900 dark:text-white"
                    >
                        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Menu Mobile Expandido usando NavigationMenu */}
            {isOpen && (
                <div className="md:hidden">
                    <NavigationMenu isOpen={isOpen} toggleMenu={closeMenu} />
                </div>
            )}
        </header>
    );
};

export default Header;