"use client";

import React from "react";
import ProjectCard from "./ProjectCard";

interface Project {
    id: string; // Cambié a 'id' en lugar de 'index' para una mejor clave única.
    titulo: string;
    descripcion: string;
    enlace: string;
    enlaceGithub: string;
    tecnologias: string[];
    imagen: string;
}

const projectList: Project[] = [
    {
        id: "1",  // Añadí un ID único
        titulo: "Proyecto 1",
        descripcion: "Este es un proyecto increíble que realiza tareas fascinantes.",
        enlace: "https://healppypets.netlify.app/",
        enlaceGithub: "https://github.com/LuchoProgramer/HealppyPets",
        tecnologias: ["HTML5", "Bootstrap", "JavaScript"],
        imagen:
            "https://res.cloudinary.com/dltfsttr7/image/upload/v1731943715/Healppypets_cyyrbj.png",
    },
    {
        id: "2",  // Añadí un ID único
        titulo: "Proyecto 2",
        descripcion: "Este proyecto es innovador y resuelve problemas complejos.",
        enlace: "https://proyecto2.com",
        enlaceGithub: "https://github.com/usuario/proyecto2",
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectList.map((project) => (
                        <ProjectCard
                            key={project.id}  // Usamos 'id' como clave única
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