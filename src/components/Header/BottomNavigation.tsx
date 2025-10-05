'use client';

import React from 'react';
import { FiUser, FiCode, FiBriefcase, FiStar, FiBookOpen, FiMail } from 'react-icons/fi';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const BottomNavigation: React.FC = () => {
    const pathname = usePathname();
    const router = useRouter();
    
    const handleSectionClick = (sectionId: string) => {
        // Si estamos en la página principal, hacer scroll
        if (pathname === '/') {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        } else {
            // Si estamos en otra página, navegar a la página principal con el ancla
            router.push(`/#${sectionId}`);
        }
    };

    const menuItems = [
        { id: 'about', label: 'Sobre mí', icon: FiUser, type: 'scroll' },
        { id: 'technologies', label: 'Skills', icon: FiCode, type: 'scroll' },
        { id: 'projects', label: 'Proyectos', icon: FiBriefcase, type: 'scroll' },
        { id: 'pukadigital', label: 'PukaDigital', icon: FiStar, type: 'scroll' },
        { id: 'blog', label: 'Blog', icon: FiBookOpen, type: 'link', href: '/blog' },
        { id: 'contact', label: 'Contacto', icon: FiMail, type: 'scroll' },
    ];

    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-t border-gray-200/20 dark:border-gray-700/20 shadow-2xl">
            <div className="grid grid-cols-6 h-18 py-2">
                {menuItems.map((item) => {
                    const IconComponent = item.icon;
                    
                    return item.type === 'link' ? (
                        <Link
                            key={item.id}
                            href={item.href || '/'}
                            className="flex flex-col items-center justify-center space-y-1 px-2 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 active:scale-95 active:bg-blue-50 dark:active:bg-blue-900/20 rounded-lg mx-1"
                        >
                            <IconComponent className="w-6 h-6" />
                            <span className="text-xs font-medium leading-none">{item.label}</span>
                        </Link>
                    ) : (
                        <button
                            key={item.id}
                            onClick={() => handleSectionClick(item.id)}
                            className="flex flex-col items-center justify-center space-y-1 px-2 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 active:scale-95 active:bg-blue-50 dark:active:bg-blue-900/20 rounded-lg mx-1"
                        >
                            <IconComponent className="w-6 h-6" />
                            <span className="text-xs font-medium leading-none">{item.label}</span>
                        </button>
                    );
                })}
            </div>
        </nav>
    );
};

export default BottomNavigation;