"use client";

import React from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
    titulo: string;
    descripcion: string;
    enlace: string;
    enlaceGithub: string;
    tecnologias: string[];
    imagen: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    titulo,
    descripcion,
    enlace,
    enlaceGithub,
    tecnologias,
    imagen,
}) => {
    return (
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            {/* Imagen */}
            {imagen && (
                <div className="relative w-full h-48 mb-4">
                    <Image
                        src={imagen}
                        alt={`Imagen de ${titulo}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain rounded-t-lg"
                        priority
                    />
                </div>
            )}

            {/* Título */}
            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">
                {titulo}
            </h3>

            {/* Descripción */}
            <p className="text-gray-600 dark:text-gray-300 mb-4">{descripcion}</p>

            {/* Enlaces */}
            <div className="flex items-center space-x-4 mb-4">
                {enlaceGithub && (
                    <a
                        href={enlaceGithub}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors"
                        aria-label="Ver en GitHub"
                    >
                        <FaGithub size={24} />
                    </a>
                )}
                {enlace && (
                    <a
                        href={enlace}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors"
                        aria-label="Ver Proyecto"
                    >
                        <FaExternalLinkAlt size={24} />
                    </a>
                )}
            </div>

            {/* Tecnologías */}
            <div className="flex flex-wrap gap-2">
                {tecnologias.map((tecnologia, index) => (
                    <span
                        key={index}
                        className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-sm"
                    >
                        {tecnologia}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ProjectCard;