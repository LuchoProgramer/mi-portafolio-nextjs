"use client";

import Link from "next/link";
import ToggleDarkMode from "@/components/common/ToggleDarkMode";

const Header = () => {
    return (
        <header className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link
                    href="/"
                    className="font-bold text-lg md:text-xl text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    aria-label="Inicio"
                >
                    Luis Viteri
                </Link>

                {/* Elementos del Header */}
                <div className="flex items-center space-x-6">
                    <Link
                        href="#"
                        className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm"
                    >
                        Sobre mí
                    </Link>
                    <ToggleDarkMode />
                </div>
            </div>
        </header>
    );
};

export default Header;