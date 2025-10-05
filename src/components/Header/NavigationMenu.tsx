'use client';

import React from 'react';
import { FiUser, FiCode, FiBriefcase, FiStar, FiMail } from 'react-icons/fi';

interface NavigationMenuProps {
    isOpen: boolean;
    toggleMenu: () => void;
    user: boolean;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ isOpen, toggleMenu }) => {
    
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
            toggleMenu();
        }
    };

    const menuItems = [
        { id: 'about', label: 'Sobre mí', icon: FiUser },
        { id: 'technologies', label: 'Skills', icon: FiCode },
        { id: 'projects', label: 'Proyectos', icon: FiBriefcase },
        { id: 'pukadigital', label: 'PukaDigital', icon: FiStar },
    ];

    return (
        <>
            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-1">
                {menuItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="group px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all duration-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50"
                    >
                        {item.label}
                    </button>
                ))}
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden py-6 px-6 space-y-1">
                    
                    {/* Menu Items */}
                    {menuItems.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="w-full flex items-center gap-4 px-4 py-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 font-medium transition-all duration-300 rounded-xl text-left animate-fadeInUp"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <IconComponent className="w-5 h-5 flex-shrink-0" />
                                <span className="text-lg">{item.label}</span>
                            </button>
                        );
                    })}

                    {/* Mobile CTA */}
                    <div className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-700">
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg animate-fadeInUp"
                            style={{ animationDelay: '400ms' }}
                        >
                            <FiMail className="w-5 h-5" />
                            <span>Hablemos</span>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default NavigationMenu;
