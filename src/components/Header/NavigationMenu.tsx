// src/components/Header/NavigationMenu.tsx
"use client";

import React from "react";
import Link from "next/link";

interface NavigationMenuProps {
    isOpen: boolean;
    toggleMenu: () => void;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ isOpen, toggleMenu }) => {
    return (
        <nav
            className={`${isOpen ? "block" : "hidden"} absolute top-full left-0 w-full max-h-[calc(100vh-4rem)] overflow-auto z-50 bg-white dark:bg-gray-800 shadow-lg md:static md:block md:w-auto md:max-h-full md:overflow-visible md:top-auto`}
            aria-label="Navigation"
        >
            <ul className="flex flex-col md:flex-row md:items-center md:space-x-6 p-4 md:p-0">
                <li>
                    <Link
                        href="/#about"
                        className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        onClick={toggleMenu}
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        href="/#work"
                        className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        onClick={toggleMenu}
                    >
                        Work
                    </Link>
                </li>
                <li>
                    <Link
                        href="https://pukadigital.com"
                        target="_blank"
                        className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-semibold"
                        onClick={toggleMenu}
                    >
                        Puka Digital
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavigationMenu;