"use client";

import React from "react";
import Link from "next/link";
import ProjectCard from "./ProjectCard";

interface Project {
    id: string;
    titulo: string;
    descripcion: string;
    enlace: string;
    enlaceGithub: string;
    tecnologias: string[];
    imagen: string;
}

const projectList: Project[] = [
    {
        id: "1",
        titulo: "Healppy Pets - Plataforma de gestión de citas y blog para veterinarias",
        descripcion: "Plataforma web para veterinarias que facilita la gestión de citas y mejora la presencia en línea a través de un blog optimizado para SEO.",
        enlace: "https://healppypets.netlify.app/",
        enlaceGithub: "https://github.com/LuchoProgramer/HealppyPets",
        tecnologias: ["HTML5", "Bootstrap", "JavaScript"],
        imagen:
            "https://res.cloudinary.com/dltfsttr7/image/upload/v1731943715/Healppypets_cyyrbj.png",
    },
    {
        id: "2",
        titulo: "La huequita Quiteña - Sistema de Inventario para Licorería",
        descripcion: "Sistema de inventario a medida, desarrollado en Django y Python, que permite gestionar eficientemente stock, controlar ventas y optimizar operaciones diarias.",
        enlace: "#",
        enlaceGithub: "#",
        tecnologias: ["Django", "Python", "Bootstrap"],
        imagen:
            "https://res.cloudinary.com/dltfsttr7/image/upload/v1731943714/Healppy-pets-sitioweb_mjh1y8.png",
    },
];

const Projects: React.FC = () => {
    return (
        <section id="work" className="py-16 bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-6">
                {/* Título */}
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
                    Mis Proyectos
                </h2>

                {/* Grid de proyectos */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {projectList.map((project) => (
                        <ProjectCard
                            key={project.id}
                            titulo={project.titulo}
                            descripcion={project.descripcion}
                            enlace={project.enlace}
                            enlaceGithub={project.enlaceGithub}
                            tecnologias={project.tecnologias}
                            imagen={project.imagen}
                        />
                    ))}
                </div>

                {/* CTA a Puka Digital */}
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-8 md:p-12 text-center">
                    <p className="text-gray-700 dark:text-gray-300 mb-4 text-base">
                        Estos son mis <span className="font-semibold">proyectos técnicos</span> destacados.
                    </p>
                    
                    <p className="text-gray-700 dark:text-gray-300 mb-6 text-base">
                        Para ver casos donde combinamos <span className="font-semibold">tecnología + marketing digital</span> para 
                        generar <span className="font-semibold text-blue-600 dark:text-blue-400">resultados monetarios reales</span>:
                    </p>
                    
                    <Link
                        href="https://pukadigital.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-300"
                    >
                        → Ver todos los casos en Puka Digital
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Projects;