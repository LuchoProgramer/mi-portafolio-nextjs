// AboutMe.tsx
"use client";

import React from "react";
import Image from "next/image";
import { FiTarget, FiTrendingUp } from "react-icons/fi";

const AboutMe: React.FC = () => {
    return (
        <section id="about" className="py-12 bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10">
                {/* Título */}
                <h2 className="text-3xl font-semibold text-center mb-8 text-gray-900 dark:text-gray-100">Sobre Mí</h2>
                <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Imagen */}
                    <div className="md:w-1/3 flex justify-center">
                        <Image
                            src="https://res.cloudinary.com/dltfsttr7/image/upload/c_fill,w_200,h_200,q_auto,f_auto/v1732416634/file-Jsh2amEnMytw75DmwtHCX4_1_kde3iy.webp"
                            alt="Foto de Luis Viteri"
                            width={192}
                            height={192}
                            priority
                            sizes="(max-width: 768px) 120px, (max-width: 1200px) 160px, 192px"
                            className="rounded-full object-cover shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
                        />
                    </div>
                    {/* Contenido */}
                    <div className="md:w-2/3 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                        <p className="mb-4">
                            Soy <span className="font-bold text-gray-900 dark:text-gray-100">Luis Viteri</span>,
                            <span className="text-blue-600 dark:text-blue-400 font-bold"> CEO & Founder</span> de{' '}
                            <span className="font-semibold">Puka Digital</span>.
                        </p>
                        <p className="mb-4">
                            Con <span className="font-bold">3 años de experiencia</span> en digital marketing y desarrollo web,
                            pasé de ser freelancer a construir una startup enfocada en generar
                            <span className="text-blue-600 dark:text-blue-400 font-bold"> resultados verificables</span> para emprendedores.
                        </p>
                        <p>
                            Mi misión es ayudar a startups en Ecuador y Latam a crecer a través de estrategias digitales que realmente funcionan.
                        </p>
                        <div className="flex flex-col md:flex-row gap-6 mt-8">
                            {/* Característica 1 */}
                            <div className="flex flex-col items-center text-center">
                                <FiTarget
                                    size={40}
                                    className="text-blue-600 dark:text-blue-400 mb-3 transition-transform hover:scale-110"
                                />
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                    Enfocado en Resultados
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">
                                    Cada estrategia se mide por conversiones, no vanity metrics.
                                </p>
                            </div>
                            {/* Característica 2 */}
                            <div className="flex flex-col items-center text-center">
                                <FiTrendingUp
                                    size={40}
                                    className="text-blue-600 dark:text-blue-400 mb-3 transition-transform hover:scale-110"
                                />
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                    Escalable
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">
                                    Construyo sistemas que crecen contigo, no soluciones temporales.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;