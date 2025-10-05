"use client";

import React, { useState, useEffect, useRef } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useIsMobile } from "@/hooks/useIsMobile";

const technologies = [
    { 
        name: "HTML5", 
        logo: "https://res.cloudinary.com/dltfsttr7/image/upload/v1731936862/Html_fsy4r4.svg", 
        level: 90,
        category: "Frontend",
        color: "#E34F26"
    },
    { 
        name: "CSS3", 
        logo: "https://res.cloudinary.com/dltfsttr7/image/upload/v1731936864/css_xo6me2.svg", 
        level: 85,
        category: "Frontend",
        color: "#1572B6"
    },
    { 
        name: "JavaScript", 
        logo: "https://res.cloudinary.com/dltfsttr7/image/upload/v1731936862/javascript_j7f2hr.svg", 
        level: 80,
        category: "Frontend",
        color: "#F7DF1E"
    },
    { 
        name: "React", 
        logo: "https://res.cloudinary.com/dltfsttr7/image/upload/v1731936862/react-logo_epcclf.svg", 
        level: 75,
        category: "Frontend",
        color: "#61DAFB"
    },
    { 
        name: "Tailwind CSS", 
        logo: "https://res.cloudinary.com/dltfsttr7/image/upload/v1731936862/Tailwind_CSS_Logo_wmitwx.svg", 
        level: 70,
        category: "Frontend",
        color: "#06B6D4"
    },
    { 
        name: "Python", 
        logo: "https://res.cloudinary.com/dltfsttr7/image/upload/v1731936863/Python-logo_s8sw7e.svg", 
        level: 85,
        category: "Backend",
        color: "#3776AB"
    },
    { 
        name: "Django", 
        logo: "https://res.cloudinary.com/dltfsttr7/image/upload/v1731936864/django-logo_vlklt7.svg", 
        level: 80,
        category: "Backend",
        color: "#092E20"
    },
    { 
        name: "Git", 
        logo: "https://res.cloudinary.com/dltfsttr7/image/upload/v1731936862/Git-Icon_ewxnwp.svg", 
        level: 90,
        category: "Tools",
        color: "#F05032"
    },
    { 
        name: "GitHub", 
        logo: "https://res.cloudinary.com/dltfsttr7/image/upload/v1731936862/github-logo_xuuiyh.svg", 
        level: 88,
        category: "Tools",
        color: "#181717"
    },
];

const Technologies = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [activeCategory, setActiveCategory] = useState("All");
    const [animatedLevels, setAnimatedLevels] = useState<{ [key: string]: number }>({});
    const { isVisible, elementRef } = useIntersectionObserver({ threshold: 0.2 });
    const isMobile = useIsMobile();

    // En móvil, mostrar inmediatamente. En desktop, usar animación
    const shouldShow = isMobile || isVisible;

    const categories = ["All", "Frontend", "Backend", "Tools"];

    useEffect(() => {
        const updateDarkMode = () => {
            const darkModeClass = document.documentElement.classList.contains("dark");
            setIsDarkMode(darkModeClass);
        };

        updateDarkMode();

        const observer = new MutationObserver(updateDarkMode);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (shouldShow) {
            // Animar los niveles de las tecnologías
            const animateSkills = () => {
                technologies.forEach((tech, index) => {
                    setTimeout(() => {
                        setAnimatedLevels(prev => ({
                            ...prev,
                            [tech.name]: tech.level
                        }));
                    }, index * 200);
                });
            };
            setTimeout(animateSkills, 500);
        }
    }, [shouldShow]);

    const filteredTechnologies = activeCategory === "All" 
        ? technologies 
        : technologies.filter(tech => tech.category === activeCategory);

    const getPathColor = (tech: any) => {
        return isDarkMode ? tech.color + "CC" : tech.color;
    };

    const getTextColor = () => {
        return isDarkMode ? "#FFFFFF" : "#374151";
    };

    const getTrailColor = () => {
        return isDarkMode ? "#374151" : "#E5E7EB";
    };

    return (
        <section 
            ref={elementRef}
            id="technologies"
            className="py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900"
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className={`transition-all duration-1000 ${shouldShow ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                                Tecnologías
                            </span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8"></div>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Herramientas y tecnologías que domino para crear 
                            <span className="font-semibold text-blue-600 dark:text-blue-400"> experiencias digitales excepcionales</span>
                        </p>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                                    activeCategory === category
                                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                                        : 'bg-white/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Technologies Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredTechnologies.map((tech, index) => (
                            <div
                                key={tech.name}
                                className="group flex flex-col items-center p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:-translate-y-2"
                                style={{ 
                                    animationDelay: `${index * 100}ms`,
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                                }}
                            >
                                {/* Progress Circle */}
                                <div className="w-24 h-24 mb-6 relative group-hover:scale-110 transition-transform duration-300">
                                    <CircularProgressbar
                                        value={animatedLevels[tech.name] || 0}
                                        text={`${animatedLevels[tech.name] || 0}%`}
                                        styles={buildStyles({
                                            textSize: "16px",
                                            pathColor: getPathColor(tech),
                                            textColor: getTextColor(),
                                            trailColor: getTrailColor(),
                                            pathTransitionDuration: 1.5,
                                        })}
                                    />
                                    
                                    {/* Glow effect */}
                                    <div 
                                        className="absolute inset-0 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-sm"
                                        style={{ backgroundColor: tech.color }}
                                    ></div>
                                </div>

                                {/* Tech Logo */}
                                <div className="relative mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <img
                                        src={tech.logo}
                                        alt={`${tech.name} logo`}
                                        className={`w-12 h-12 object-contain ${
                                            tech.name === "Django" ? "bg-white dark:bg-gray-200 p-2 rounded-lg shadow-sm" : ""
                                        }`}
                                    />
                                </div>

                                {/* Tech Name */}
                                <h3 className="text-lg font-semibold text-center text-gray-800 dark:text-gray-200 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                    {tech.name}
                                </h3>

                                {/* Category Badge */}
                                <span 
                                    className="px-3 py-1 text-xs font-medium rounded-full"
                                    style={{
                                        backgroundColor: tech.color + "20",
                                        color: isDarkMode ? tech.color + "DD" : tech.color,
                                        border: `1px solid ${tech.color}40`
                                    }}
                                >
                                    {tech.category}
                                </span>

                                {/* Skill Level Bar */}
                                <div className="w-full mt-4">
                                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                                        <span>Nivel</span>
                                        <span>{animatedLevels[tech.name] || 0}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                                        <div 
                                            className="h-full rounded-full transition-all duration-1500 ease-out"
                                            style={{ 
                                                width: `${animatedLevels[tech.name] || 0}%`,
                                                backgroundColor: tech.color,
                                                boxShadow: `0 0 10px ${tech.color}40`
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className="mt-16 text-center">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                ¿Listo para trabajar juntos?
                            </h3>
                            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                                Estas tecnologías son solo el comienzo. Combino experiencia técnica con creatividad 
                                para crear soluciones que realmente marquen la diferencia en tu negocio.
                            </p>
                            <button 
                                onClick={() => {
                                    const contactSection = document.querySelector('#contact');
                                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                                Hablemos de tu proyecto
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Technologies;