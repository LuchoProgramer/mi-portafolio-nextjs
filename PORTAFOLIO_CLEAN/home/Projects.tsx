"use client";

import React from "react";
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
        descripcion: "Sistema de inventario a medida, desarrollado en Django y Python, que permite a una licorería gestionar eficientemente su stock, controlar las ventas y optimizar las operaciones diarias.",
        enlace: "#",
        enlaceGithub: "#",
        tecnologias: ["Django", "Python", "Bootstrap"],
        imagen:
            "https://res.cloudinary.com/dltfsttr7/image/upload/v1731943714/Healppy-pets-sitioweb_mjh1y8.png",
    },
];

const Projects: React.FC = () => {
    return (
        <section className="p-8 bg-background-light dark:bg-background-dark">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-6 text-text-primary dark:text-text-light">
                    Mis Proyectos
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center items-center">
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
            </div>
        </section>
    );
};

export default Projects;