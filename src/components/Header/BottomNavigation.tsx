'use client';

import React, { useEffect, useState } from 'react';
import { FiUser, FiCode, FiBriefcase, FiStar, FiBookOpen, FiMail } from 'react-icons/fi';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const BottomNavigation: React.FC = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [activeSection, setActiveSection] = useState<string>('');
    
    // Detectar en qué sección estamos cuando scrolleamos
    useEffect(() => {
        if (pathname !== '/') return;

        const handleScroll = () => {
            const sections = ['about', 'projects', 'pukadigital', 'contact'];
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition <= offsetTop + offsetHeight) {
                        setActiveSection(sectionId);
                        return;
                    }
                }
            }
            
            // Si estamos en el top, no marcar ninguna sección como activa
            if (window.scrollY < 200) {
                setActiveSection('');
            }
        };

        handleScroll(); // Ejecutar una vez al cargar
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname]);
    
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
        { id: 'projects', label: 'Proyectos', icon: FiBriefcase, type: 'scroll', color: 'purple' },
        { id: 'pukadigital', label: 'PukaDigital', icon: FiStar, type: 'scroll', color: 'amber' },
        { id: 'blog', label: 'Blog', icon: FiBookOpen, type: 'link', href: '/blog', color: 'rose' },
        { id: 'contact', label: 'Contacto', icon: FiMail, type: 'scroll', color: 'indigo' },
    ];

    const getActiveState = (item: any) => {
        // Para enlaces de páginas (como blog)
        if (item.type === 'link' && pathname === item.href) {
            return true;
        }
        
        // Para secciones de la página principal
        if (item.type === 'scroll' && pathname === '/' && activeSection === item.id) {
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
            {/* Completely transparent background - no blue box */}
            <div className="absolute inset-0"></div>
            
            {/* Clean navigation content */}
            <div className="relative grid grid-cols-5 h-16 py-2 px-4 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm">
                {menuItems.map((item) => {
                    const IconComponent = item.icon;
                    const isActive = getActiveState(item);
                    const colors = getColorClasses(item.color, isActive);
                    
                    return item.type === 'link' ? (
                        <Link
                            key={item.id}
                            href={item.href || '/'}
                            className={`
                                relative flex flex-col items-center justify-center gap-1 px-1 py-1
                                transition-all duration-200 ease-out
                                ${colors.text}
                                active:scale-95 
                                group
                                !bg-transparent !border-none !p-0 !rounded-none !shadow-none
                            `}
                            style={{
                                backgroundColor: 'transparent !important',
                                border: 'none !important',
                                padding: '0.25rem !important',
                                borderRadius: '0 !important',
                                boxShadow: 'none !important'
                            }}
                        >
                            {/* Elegant dot indicator for active state */}
                            {isActive && (
                                <div className={`absolute -top-1.5 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 ${colors.indicator} rounded-full shadow-sm animate-pulse`}></div>
                            )}
                            
                            {/* Clean icon with subtle active state */}
                            <div className={`
                                transition-all duration-200
                                ${isActive ? 'scale-110' : ''}
                            `}>
                                <IconComponent className={`w-6 h-6 ${isActive ? 'drop-shadow-sm' : ''}`} />
                            </div>
                            
                            {/* Text with active state styling */}
                            <span className={`
                                text-xs font-medium text-center transition-all duration-200
                                ${isActive ? 'font-semibold scale-105' : ''}
                            `}>
                                {item.label}
                            </span>
                        </Link>
                    ) : (
                        <button
                            key={item.id}
                            onClick={() => handleSectionClick(item.id)}
                            className={`
                                relative flex flex-col items-center justify-center gap-1 px-1 py-1
                                transition-all duration-200 ease-out
                                ${colors.text}
                                active:scale-95 
                                group
                                !bg-transparent !border-none !p-0 !rounded-none !shadow-none
                            `}
                            style={{
                                backgroundColor: 'transparent !important',
                                border: 'none !important',
                                padding: '0.25rem !important',
                                borderRadius: '0 !important',
                                boxShadow: 'none !important'
                            }}
                        >
                            {/* Elegant dot indicator for active state */}
                            {isActive && (
                                <div className={`absolute -top-1.5 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 ${colors.indicator} rounded-full shadow-sm animate-pulse`}></div>
                            )}
                            
                            {/* Clean icon with subtle active state */}
                            <div className={`
                                transition-all duration-200
                                ${isActive ? 'scale-110' : ''}
                            `}>
                                <IconComponent className={`w-6 h-6 ${isActive ? 'drop-shadow-sm' : ''}`} />
                            </div>
                            
                            {/* Text with active state styling */}
                            <span className={`
                                text-xs font-medium text-center transition-all duration-200
                                ${isActive ? 'font-semibold scale-105' : ''}
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