"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FiCode, FiDatabase, FiSmartphone, FiTrendingUp, FiTarget, FiHeart, FiGlobe, FiZap } from "react-icons/fi";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useIsMobile } from "@/hooks/useIsMobile";

const AboutMe: React.FC = () => {
    const [counters, setCounters] = useState({ experience: 0, projects: 0, clients: 0 });
    const { isVisible, elementRef } = useIntersectionObserver({ threshold: 0.2 });
    const isMobile = useIsMobile();

    // En móvil, mostrar inmediatamente. En desktop, usar animación
    const shouldShow = isMobile || isVisible;

    useEffect(() => {
        if (shouldShow) {
            // Animación de contadores
            const animateCounters = () => {
                const duration = 2000;
                const steps = 60;
                const increment = duration / steps;
                
                let step = 0;
                const timer = setInterval(() => {
                    step++;
                    const progress = step / steps;
                    
                    setCounters({
                        experience: Math.floor(progress * 3),
                        projects: Math.floor(progress * 25),
                        clients: Math.floor(progress * 15)
                    });
                    
                    if (step >= steps) {
                        clearInterval(timer);
                        setCounters({ experience: 3, projects: 25, clients: 15 });
                    }
                }, increment);
            };
            
            setTimeout(animateCounters, 500);
        }
    }, [shouldShow]);

    const skills = [
        {
            icon: <FiCode className="w-6 h-6" />,
            title: "Frontend Development",
            description: "React, Next.js, TypeScript, Tailwind CSS",
            color: "blue"
        },
        {
            icon: <FiDatabase className="w-6 h-6" />,
            title: "Backend Development", 
            description: "Django, Python, RESTful APIs, PostgreSQL",
            color: "green"
        },
        {
            icon: <FiSmartphone className="w-6 h-6" />,
            title: "Responsive Design",
            description: "Mobile-first, UX/UI, Accesibilidad",
            color: "purple"
        },
        {
            icon: <FiTrendingUp className="w-6 h-6" />,
            title: "Performance",
            description: "Optimización, SEO, Core Web Vitals",
            color: "orange"
        }
    ];

    const highlights = [
        {
            icon: <FiGlobe className="w-5 h-5" />,
            title: "Nómada Digital",
            description: "Trabajo remoto desde cualquier parte del mundo, aportando perspectivas globales a cada proyecto."
        },
        {
            icon: <FiZap className="w-5 h-5" />,
            title: "Innovación Constante",
            description: "Siempre explorando nuevas tecnologías y metodologías para crear soluciones de vanguardia."
        }
    ];

    return (
        <section 
            id="about"
            ref={elementRef}
            className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10 transition-colors duration-300"
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className={`transition-all duration-1000 ${shouldShow ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    
                    {/* Header de la sección */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                                Sobre Mí
                            </span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8"></div>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Soy un desarrollador full-stack y nómada digital apasionado por crear soluciones que marquen la diferencia. 
                            Combino <span className="font-semibold text-blue-600 dark:text-blue-400">tecnología cutting-edge</span> con 
                            <span className="font-semibold text-purple-600 dark:text-purple-400"> diseño centrado en el usuario</span>.
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        <div className="text-center group">
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-8 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl shadow-lg">
                                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                                    {counters.experience}+
                                </div>
                                <div className="text-gray-600 dark:text-gray-300 font-medium">
                                    Años de Experiencia
                                </div>
                            </div>
                        </div>
                        <div className="text-center group">
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-8 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl shadow-lg">
                                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                                    {counters.projects}+
                                </div>
                                <div className="text-gray-600 dark:text-gray-300 font-medium">
                                    Proyectos Completados
                                </div>
                            </div>
                        </div>
                        <div className="text-center group">
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-8 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl shadow-lg">
                                <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                                    {counters.clients}+
                                </div>
                                <div className="text-gray-600 dark:text-gray-300 font-medium">
                                    Clientes Satisfechos
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mi Historia con imagen */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                                Mi Historia
                            </h3>
                            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                                <p>
                                    ¡Hola! Soy <span className="font-bold text-blue-600 dark:text-blue-400">Luchodev</span>, 
                                    también conocido como Luis Viteri, un <span className="font-semibold text-purple-600 dark:text-purple-400">nómada digital</span> y 
                                    desarrollador web con más de <span className="font-bold">un año de experiencia</span> 
                                    especializada en la creación de aplicaciones dinámicas y eficientes.
                                </p>
                                <p>
                                    Mi viaje en el desarrollo web comenzó con una simple curiosidad: 
                                    <span className="font-semibold text-blue-600 dark:text-blue-400"> ¿cómo funcionan realmente las aplicaciones web?</span> 
                                    Esa pregunta me llevó a explorar el fascinante mundo del código.
                                </p>
                                <p>
                                    Mi pasión por el desarrollo y mi <span className="font-semibold">espíritu aventurero</span> me han 
                                    llevado a trabajar desde diversos lugares alrededor del mundo, combinando mi amor por la 
                                    <span className="font-semibold text-green-600 dark:text-green-400"> tecnología y los viajes</span>.
                                </p>
                                <p>
                                    Mi filosofía es simple: 
                                    <span className="italic font-medium text-purple-600 dark:text-purple-400">
                                        "La tecnología debe servir a las personas, no al revés"
                                    </span>. 
                                    Por eso, cada proyecto que desarrollo está centrado en ofrecer 
                                    <span className="font-semibold"> experiencias excepcionales</span>.
                                </p>
                            </div>
                        </div>
                        
                        {/* Imagen mejorada */}
                        <div className="flex justify-center lg:justify-end">
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition-all duration-300 animate-pulse"></div>
                                <div className="relative bg-white dark:bg-gray-800 p-3 rounded-3xl shadow-2xl">
                                    <Image
                                        src="https://res.cloudinary.com/dltfsttr7/image/upload/c_fill,w_300,h_300,q_auto,f_auto/v1732416634/file-Jsh2amEnMytw75DmwtHCX4_1_kde3iy.webp"
                                        alt="Luchodev - Nómada Digital y Desarrollador Full Stack"
                                        width={300}
                                        height={300}
                                        className="rounded-2xl object-cover transition-all duration-300 group-hover:scale-105"
                                        priority
                                        sizes="(max-width: 768px) 250px, 300px"
                                    />
                                </div>
                                {/* Elementos decorativos */}
                                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce shadow-lg"></div>
                                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-ping shadow-lg"></div>
                                <div className="absolute top-1/2 -left-6 w-4 h-4 bg-blue-400 rounded-full animate-pulse shadow-lg"></div>
                            </div>
                        </div>
                    </div>

                    {/* Skills Grid */}
                    <div className="mb-20">
                        <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-12">
                            Mis Especialidades
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {skills.map((skill, index) => (
                                <div 
                                    key={index}
                                    className={`p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg group`}
                                    style={{ animationDelay: `${index * 200}ms` }}
                                >
                                    <div className={`${
                                        skill.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                                        skill.color === 'green' ? 'text-green-600 dark:text-green-400' :
                                        skill.color === 'purple' ? 'text-purple-600 dark:text-purple-400' :
                                        'text-orange-600 dark:text-orange-400'
                                    } mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        {skill.icon}
                                    </div>
                                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                                        {skill.title}
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {skill.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Highlights */}
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
                        <h3 className="text-3xl font-bold text-center mb-12">
                            Lo que me hace único
                        </h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            {highlights.map((highlight, index) => (
                                <div 
                                    key={index}
                                    className="flex gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl transition-all duration-300 hover:bg-white/20 border border-white/20"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                        {highlight.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">
                                            {highlight.title}
                                        </h4>
                                        <p className="text-white/90 text-sm leading-relaxed">
                                            {highlight.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;