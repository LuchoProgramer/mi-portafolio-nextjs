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
                inactive: 'text-gray-500 dark:text-gray-400',
                active: 'text-blue-600 dark:text-blue-400',
                hover: 'hover:text-blue-600 dark:hover:text-blue-400',
                bg: 'hover:bg-blue-50 dark:hover:bg-blue-900/20',
                activeBg: 'bg-blue-50 dark:bg-blue-900/30',
                indicator: 'bg-blue-600'
            },
            emerald: {
                inactive: 'text-gray-500 dark:text-gray-400',
                active: 'text-emerald-600 dark:text-emerald-400',
                hover: 'hover:text-emerald-600 dark:hover:text-emerald-400',
                bg: 'hover:bg-emerald-50 dark:hover:bg-emerald-900/20',
                activeBg: 'bg-emerald-50 dark:bg-emerald-900/30',
                indicator: 'bg-emerald-600'
            },
            purple: {
                inactive: 'text-gray-500 dark:text-gray-400',
                active: 'text-purple-600 dark:text-purple-400',
                hover: 'hover:text-purple-600 dark:hover:text-purple-400',
                bg: 'hover:bg-purple-50 dark:hover:bg-purple-900/20',
                activeBg: 'bg-purple-50 dark:bg-purple-900/30',
                indicator: 'bg-purple-600'
            },
            amber: {
                inactive: 'text-gray-500 dark:text-gray-400',
                active: 'text-amber-600 dark:text-amber-400',
                hover: 'hover:text-amber-600 dark:hover:text-amber-400',
                bg: 'hover:bg-amber-50 dark:hover:bg-amber-900/20',
                activeBg: 'bg-amber-50 dark:bg-amber-900/30',
                indicator: 'bg-amber-600'
            },
            rose: {
                inactive: 'text-gray-500 dark:text-gray-400',
                active: 'text-rose-600 dark:text-rose-400',
                hover: 'hover:text-rose-600 dark:hover:text-rose-400',
                bg: 'hover:bg-rose-50 dark:hover:bg-rose-900/20',
                activeBg: 'bg-rose-50 dark:bg-rose-900/30',
                indicator: 'bg-rose-600'
            },
            indigo: {
                inactive: 'text-gray-500 dark:text-gray-400',
                active: 'text-indigo-600 dark:text-indigo-400',
                hover: 'hover:text-indigo-600 dark:hover:text-indigo-400',
                bg: 'hover:bg-indigo-50 dark:hover:bg-indigo-900/20',
                activeBg: 'bg-indigo-50 dark:bg-indigo-900/30',
                indicator: 'bg-indigo-600'
            }
        };
        
        const colorScheme = colors[color as keyof typeof colors] || colors.blue;
        
        return {
            text: isActive ? colorScheme.active : `${colorScheme.inactive} ${colorScheme.hover}`,
            bg: isActive ? colorScheme.activeBg : colorScheme.bg,
            indicator: colorScheme.indicator
        };
    };

    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50">
            {/* Background with modern glass effect */}
            <div className="absolute inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-t border-gray-200/30 dark:border-gray-700/30 shadow-2xl shadow-black/10"></div>
            
            {/* Navigation content */}
            <div className="relative grid grid-cols-6 h-20 py-1 px-2">
                {menuItems.map((item) => {
                    const IconComponent = item.icon;
                    const isActive = getActiveState(item);
                    const colors = getColorClasses(item.color, isActive);
                    
                    return item.type === 'link' ? (
                        <Link
                            key={item.id}
                            href={item.href || '/'}
                            className={`
                                relative flex flex-col items-center justify-center gap-1 px-1 py-2 mx-1 rounded-2xl
                                transition-all duration-300 ease-out transform
                                ${colors.text} ${colors.bg}
                                hover:scale-105 active:scale-95 
                                group
                            `}
                        >
                            {/* Active indicator */}
                            {isActive && (
                                <div className={`absolute -top-1 left-1/2 transform -translate-x-1/2 w-8 h-1 ${colors.indicator} rounded-full`}></div>
                            )}
                            
                            {/* Icon with modern styling */}
                            <div className={`
                                relative p-1.5 rounded-xl transition-all duration-300
                                ${isActive ? 'scale-110' : 'group-hover:scale-110'}
                            `}>
                                <IconComponent className="w-5 h-5" />
                                
                                {/* Glow effect for active state */}
                                {isActive && (
                                    <div className={`absolute inset-0 ${colors.indicator} opacity-20 blur-sm rounded-xl`}></div>
                                )}
                            </div>
                            
                            {/* Label with better typography */}
                            <span className={`
                                text-xs font-medium leading-none text-center
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
                                relative flex flex-col items-center justify-center gap-1 px-1 py-2 mx-1 rounded-2xl
                                transition-all duration-300 ease-out transform
                                ${colors.text} ${colors.bg}
                                hover:scale-105 active:scale-95 
                                group
                            `}
                        >
                            {/* Active indicator */}
                            {isActive && (
                                <div className={`absolute -top-1 left-1/2 transform -translate-x-1/2 w-8 h-1 ${colors.indicator} rounded-full`}></div>
                            )}
                            
                            {/* Icon with modern styling */}
                            <div className={`
                                relative p-1.5 rounded-xl transition-all duration-300
                                ${isActive ? 'scale-110' : 'group-hover:scale-110'}
                            `}>
                                <IconComponent className="w-5 h-5" />
                                
                                {/* Glow effect for active state */}
                                {isActive && (
                                    <div className={`absolute inset-0 ${colors.indicator} opacity-20 blur-sm rounded-xl`}></div>
                                )}
                            </div>
                            
                            {/* Label with better typography */}
                            <span className={`
                                text-xs font-medium leading-none text-center
                                transition-all duration-300
                                ${isActive ? 'font-semibold' : 'group-hover:font-semibold'}
                            `}>
                                {item.label}
                            </span>
                        </button>
                    );
                })}
            </div>
            
            {/* Modern bottom padding for safe area */}
            <div className="h-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl"></div>
        </nav>
    );
};

export default BottomNavigation;