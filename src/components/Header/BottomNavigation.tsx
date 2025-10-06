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
        { id: 'about', label: 'Sobre mí', icon: FiUser, type: 'scroll', color: 'blue' },
        { id: 'technologies', label: 'Skills', icon: FiCode, type: 'scroll', color: 'emerald' },
        { id: 'projects', label: 'Proyectos', icon: FiBriefcase, type: 'scroll', color: 'purple' },
        { id: 'pukadigital', label: 'PukaDigital', icon: FiStar, type: 'scroll', color: 'amber' },
        { id: 'blog', label: 'Blog', icon: FiBookOpen, type: 'link', href: '/blog', color: 'rose' },
        { id: 'contact', label: 'Contacto', icon: FiMail, type: 'scroll', color: 'indigo' },
    ];

    const getActiveState = (item: any) => {
        if (item.type === 'link' && pathname === item.href) {
            return true;
        }
        return false;
    };

    const getColorClasses = (color: string, isActive: boolean) => {
        const colors = {
            blue: {
                inactive: 'text-gray-600 dark:text-gray-400',
                active: 'text-blue-600 dark:text-blue-400',
                indicator: 'bg-blue-600'
            },
            emerald: {
                inactive: 'text-gray-600 dark:text-gray-400',
                active: 'text-emerald-600 dark:text-emerald-400',
                indicator: 'bg-emerald-600'
            },
            purple: {
                inactive: 'text-gray-600 dark:text-gray-400',
                active: 'text-purple-600 dark:text-purple-400',
                indicator: 'bg-purple-600'
            },
            amber: {
                inactive: 'text-gray-600 dark:text-gray-400',
                active: 'text-amber-600 dark:text-amber-400',
                indicator: 'bg-amber-600'
            },
            rose: {
                inactive: 'text-gray-600 dark:text-gray-400',
                active: 'text-rose-600 dark:text-rose-400',
                indicator: 'bg-rose-600'
            },
            indigo: {
                inactive: 'text-gray-600 dark:text-gray-400',
                active: 'text-indigo-600 dark:text-indigo-400',
                indicator: 'bg-indigo-600'
            }
        };
        
        const colorScheme = colors[color as keyof typeof colors] || colors.blue;
        
        return {
            text: isActive ? colorScheme.active : colorScheme.inactive,
            indicator: colorScheme.indicator
        };
    };

    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50">
            {/* Background with subtle glass effect */}
            <div className="absolute inset-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-t border-gray-200/50 dark:border-gray-700/50 shadow-lg"></div>
            
            {/* Navigation content */}
            <div className="relative grid grid-cols-6 h-18 py-2 px-1">
                {menuItems.map((item) => {
                    const IconComponent = item.icon;
                    const isActive = getActiveState(item);
                    const colors = getColorClasses(item.color, isActive);
                    
                    return item.type === 'link' ? (
                        <Link
                            key={item.id}
                            href={item.href || '/'}
                            className={`
                                relative flex flex-col items-center justify-center gap-2 px-2 py-2
                                transition-all duration-300 ease-out transform
                                ${colors.text}
                                hover:scale-105 active:scale-95 
                                group
                            `}
                        >
                            {/* Simple dot indicator for active state */}
                            {isActive && (
                                <div className={`absolute -top-0.5 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 ${colors.indicator} rounded-full`}></div>
                            )}
                            
                            {/* Clean icon without background */}
                            <div className={`
                                transition-all duration-300
                                ${isActive ? 'scale-110' : 'group-hover:scale-105'}
                            `}>
                                <IconComponent className="w-6 h-6" />
                            </div>
                            
                            {/* Better contrast text */}
                            <span className={`
                                text-xs font-medium leading-tight text-center
                                transition-all duration-300
                                ${isActive ? 'font-semibold' : 'group-hover:font-semibold'}
                            `}>
                                {item.label}
                            </span>
                        </Link>
                    ) : (
                        <button
                            key={item.id}
                            onClick={() => handleSectionClick(item.id)}
                            className={`
                                relative flex flex-col items-center justify-center gap-2 px-2 py-2
                                transition-all duration-300 ease-out transform
                                ${colors.text}
                                hover:scale-105 active:scale-95 
                                group
                            `}
                        >
                            {/* Simple dot indicator for active state */}
                            {isActive && (
                                <div className={`absolute -top-0.5 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 ${colors.indicator} rounded-full`}></div>
                            )}
                            
                            {/* Clean icon without background */}
                            <div className={`
                                transition-all duration-300
                                ${isActive ? 'scale-110' : 'group-hover:scale-105'}
                            `}>
                                <IconComponent className="w-6 h-6" />
                            </div>
                            
                            {/* Better contrast text */}
                            <span className={`
                                text-xs font-medium leading-tight text-center
                                transition-all duration-300
                                ${isActive ? 'font-semibold' : 'group-hover:font-semibold'}
                            `}>
                                {item.label}
                            </span>
                        </button>
                    );
                })}
            </div>
        </nav>
    );
};

export default BottomNavigation;