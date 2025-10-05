"use client";

import React, { useState, useEffect, useRef } from "react";
import { FiGlobe } from "react-icons/fi";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface Language {
    idioma: string;
    nivel: number;
    color: string;
    description: string;
}

const languages: Language[] = [
    {
        idioma: "Español",
        nivel: 100,
        color: "#1E3A8A",
        description: "Nativo - Comunicación empresarial fluida"
    },
    {
        idioma: "Inglés",
        nivel: 75,
        color: "#10B981",
        description: "B2 - Negocios internacionales"
    },
    {
        idioma: "Portugués",
        nivel: 50,
        color: "#F59E0B",
        description: "B1 - Mercado latinoamericano"
    },
];

const Languages: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section 
            ref={sectionRef}
            id="languages" 
            className="py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900"
        >
            <div className="max-w-6xl mx-auto px-6">
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full border border-blue-200 dark:border-blue-800">
                            <FiGlobe className="w-4 h-4" />
                            <span className="text-sm font-medium">Global Communication</span>
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                            Idiomas & <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Comunicación</span>
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Como nomad digital, domino múltiples idiomas para comunicar efectivamente con 
                            clientes y equipos internacionales.
                        </p>
                    </div>

                    {/* Languages Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {languages.map((lang, index) => (
                            <div
                                key={lang.idioma}
                                className={`
                                    bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl 
                                    transform transition-all duration-700 hover:scale-105
                                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                                `}
                                style={{ 
                                    transitionDelay: `${index * 200}ms`,
                                    animationDelay: `${index * 200}ms`
                                }}
                            >
                                <div className="text-center">
                                    
                                    {/* Progress Circle */}
                                    <div className="w-32 h-32 mx-auto mb-6">
                                        <CircularProgressbar
                                            value={isVisible ? lang.nivel : 0}
                                            text={`${lang.nivel}%`}
                                            styles={{
                                                path: {
                                                    stroke: lang.color,
                                                    strokeLinecap: 'round',
                                                    transition: 'stroke-dashoffset 1.5s ease 0s',
                                                    transitionDelay: `${index * 200 + 500}ms`
                                                },
                                                trail: {
                                                    stroke: '#E5E7EB',
                                                    strokeLinecap: 'round',
                                                },
                                                text: {
                                                    fill: lang.color,
                                                    fontSize: '16px',
                                                    fontWeight: 'bold'
                                                }
                                            }}
                                        />
                                    </div>

                                    {/* Language Info */}
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                        {lang.idioma}
                                    </h3>
                                    
                                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                        {lang.description}
                                    </p>

                                    {/* Level Badge */}
                                    <div className="mt-4">
                                        <span 
                                            className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white"
                                            style={{ backgroundColor: lang.color }}
                                        >
                                            {`Nivel: ${lang.nivel === 100 ? "Nativo" : lang.nivel === 75 ? "B2" : "B1"}`}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Languages;
