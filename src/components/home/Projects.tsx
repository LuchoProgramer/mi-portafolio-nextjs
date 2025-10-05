"use client";

import React, { useState, useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { FiCode, FiTrendingUp, FiGlobe, FiFilter, FiExternalLink, FiGithub } from "react-icons/fi";

interface Project {
    id: string;
    titulo: string;
    descripcion: string;
    enlace: string;
    enlaceGithub: string;
    tecnologias: string[];
    imagen: string;
    categoria: string;
    tipo: "desarrollo" | "marketing" | "fullstack";
    metricas?: {
        conversiones?: string;
        trafico?: string;
        roi?: string;
    };
}

const projectList: Project[] = [
    {
        id: "1",
        titulo: "Healppy Pets - Plataforma de gestión de citas y blog para veterinarias",
        descripcion: "Plataforma web completa para veterinarias con gestión de citas, blog optimizado para SEO, y sistema de analytics integrado para maximizar conversiones.",
        enlace: "https://healppypets.netlify.app/",
        enlaceGithub: "https://github.com/LuchoProgramer/HealppyPets",
        tecnologias: ["HTML5", "Bootstrap", "JavaScript", "SEO", "Analytics"],
        imagen: "https://res.cloudinary.com/dltfsttr7/image/upload/v1731943715/Healppypets_cyyrbj.png",
        categoria: "Salud Digital",
        tipo: "fullstack",
        metricas: {
            conversiones: "+45%",
            trafico: "12k visitas/mes",
            roi: "300%"
        }
    },
    {
        id: "2",
        titulo: "La huequita Quiteña - Sistema de Inventario Inteligente",
        descripcion: "Sistema de gestión empresarial con Django y Python, incluyendo dashboards analíticos, reportes automáticos y optimización de inventario mediante algoritmos predictivos.",
        enlace: "#",
        enlaceGithub: "#",
        tecnologias: ["Django", "Python", "Bootstrap", "Analytics", "Machine Learning"],
        imagen: "https://res.cloudinary.com/dltfsttr7/image/upload/v1731943714/Healppy-pets-sitioweb_mjh1y8.png",
        categoria: "E-commerce",
        tipo: "desarrollo",
        metricas: {
            conversiones: "+25%",
            trafico: "8k visitas/mes",
            roi: "250%"
        }
    },
    {
        id: "3",
        titulo: "PukaDigital - Landing Page de Alto Rendimiento",
        descripcion: "Sitio web corporativo optimizado para conversiones con GA4, mapas de calor, A/B testing y campañas de Google Ads integradas.",
        enlace: "#",
        enlaceGithub: "#",
        tecnologias: ["Next.js", "Google Ads", "GA4", "Heat Maps", "A/B Testing"],
        imagen: "https://res.cloudinary.com/dltfsttr7/image/upload/c_fill,w_600,h_400,q_auto,f_webp/v1731879784/Luis_Viteri_lxtxcc.jpg",
        categoria: "Marketing Digital",
        tipo: "marketing",
        metricas: {
            conversiones: "+180%",
            trafico: "25k visitas/mes", 
            roi: "450%"
        }
    }
];

const categories = ["Todos", "Desarrollo", "Marketing", "Full-Stack"];

const Projects: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeCategory, setActiveCategory] = useState("Todos");
    const [filteredProjects, setFilteredProjects] = useState(projectList);
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

    useEffect(() => {
        if (activeCategory === "Todos") {
            setFilteredProjects(projectList);
        } else {
            const filtered = projectList.filter(project => {
                if (activeCategory === "Desarrollo") return project.tipo === "desarrollo";
                if (activeCategory === "Marketing") return project.tipo === "marketing";
                if (activeCategory === "Full-Stack") return project.tipo === "fullstack";
                return true;
            });
            setFilteredProjects(filtered);
        }
    }, [activeCategory]);

    return (
        <section 
            ref={sectionRef}
            id="projects"
            className="py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 relative overflow-hidden"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full border border-blue-200 dark:border-blue-800">
                            <FiCode className="w-4 h-4" />
                            <span className="text-sm font-medium">Portfolio + Marketing</span>
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                            Proyectos que <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Convierten</span>
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Desarrollo web moderno combinado con estrategias de marketing digital 
                            para maximizar <span className="font-semibold text-blue-600 dark:text-blue-400">ROI</span> y 
                            <span className="font-semibold text-purple-600 dark:text-purple-400"> conversiones</span>
                        </p>
                    </div>

                    {/* Filter Categories */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                                    activeCategory === category
                                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                                        : 'bg-white/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                                }`}
                            >
                                <div className="flex items-center gap-2">
                                    <FiFilter className="w-4 h-4" />
                                    <span>{category}</span>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
                        {filteredProjects.map((project, index) => (
                            <div 
                                key={project.id}
                                className={`transition-all duration-700 delay-${index * 100} ${
                                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                            >
                                <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                                    
                                    {/* Project Image */}
                                    <div className="relative h-48 overflow-hidden">
                                        <img 
                                            src={project.imagen} 
                                            alt={project.titulo}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        
                                        {/* Project Type Badge */}
                                        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                                            project.tipo === 'desarrollo' ? 'bg-blue-500/90 text-white' :
                                            project.tipo === 'marketing' ? 'bg-purple-500/90 text-white' :
                                            'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                                        }`}>
                                            {project.tipo === 'desarrollo' ? 'DEV' : 
                                             project.tipo === 'marketing' ? 'MKT' : 'FULL'}
                                        </div>
                                    </div>

                                    {/* Project Content */}
                                    <div className="p-6">
                                        <div className="mb-3">
                                            <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                                                {project.categoria}
                                            </span>
                                        </div>
                                        
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                                            {project.titulo}
                                        </h3>
                                        
                                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                                            {project.descripcion}
                                        </p>

                                        {/* Metrics */}
                                        {project.metricas && (
                                            <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                                                <div className="text-center">
                                                    <div className="text-xs text-gray-500 dark:text-gray-400">Conversiones</div>
                                                    <div className="font-bold text-green-600 dark:text-green-400 text-sm">
                                                        {project.metricas.conversiones}
                                                    </div>
                                                </div>
                                                <div className="text-center">
                                                    <div className="text-xs text-gray-500 dark:text-gray-400">Tráfico</div>
                                                    <div className="font-bold text-blue-600 dark:text-blue-400 text-sm">
                                                        {project.metricas.trafico}
                                                    </div>
                                                </div>
                                                <div className="text-center">
                                                    <div className="text-xs text-gray-500 dark:text-gray-400">ROI</div>
                                                    <div className="font-bold text-purple-600 dark:text-purple-400 text-sm">
                                                        {project.metricas.roi}
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tecnologias.slice(0, 4).map((tech, idx) => (
                                                <span 
                                                    key={idx}
                                                    className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md text-xs font-medium"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.tecnologias.length > 4 && (
                                                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-md text-xs">
                                                    +{project.tecnologias.length - 4}
                                                </span>
                                            )}
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-3">
                                            {project.enlace !== "#" && (
                                                <a
                                                    href={project.enlace}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
                                                >
                                                    <FiExternalLink className="w-4 h-4" />
                                                    <span>Ver Proyecto</span>
                                                </a>
                                            )}
                                            {project.enlaceGithub !== "#" && (
                                                <a
                                                    href={project.enlaceGithub}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors duration-300"
                                                >
                                                    <FiGithub className="w-4 h-4" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="text-center bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl p-8 md:p-12 border border-blue-200 dark:border-blue-800">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                            ¿Tienes un proyecto en mente?
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                            Combinemos desarrollo web moderno con estrategias de marketing digital 
                            para crear soluciones que realmente <span className="font-semibold text-blue-600 dark:text-blue-400">conviertan</span>
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button 
                                onClick={() => {
                                    window.open('mailto:luis.viteri@pukadigital.com?subject=Proyecto%20-%20Desarrollo%20%2B%20Marketing&body=Hola%20Luis,%20tengo%20un%20proyecto%20que%20combina%20desarrollo%20web%20y%20marketing%20digital.', '_blank');
                                }}
                                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                                <div className="flex items-center gap-2">
                                    <FiTrendingUp className="w-5 h-5" />
                                    <span>Iniciar Proyecto</span>
                                </div>
                            </button>
                            
                            <button 
                                onClick={() => {
                                    const contactSection = document.querySelector('#contact');
                                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="px-8 py-3 text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 border border-blue-200 dark:border-blue-800 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20"
                            >
                                <div className="flex items-center gap-2">
                                    <FiGlobe className="w-5 h-5" />
                                    <span>Más Información</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;