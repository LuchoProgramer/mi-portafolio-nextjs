import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const Experience: React.FC = () => {
    return (
        <section id="experience" className="py-20 bg-gray-100 dark:bg-gray-900">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
                    Experiencia y Formación
                </h2>

                {/* Experiencia Profesional */}
                <div className="mb-12">
                    <div className="flex items-center mb-4">
                        <FaBriefcase
                            size={32}
                            className="text-primary dark:text-primary-light mr-4"
                            aria-label="Icono de Experiencia Profesional"
                        />
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                            Experiencia Profesional
                        </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                        He trabajado como freelancer, desarrollando proyectos para diversas empresas. Estos proyectos han fortalecido mis habilidades en desarrollo web, manejo de clientes y adaptación a distintos requerimientos y tecnologías.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                        Actualmente, estoy en el proceso de crear mi propia startup de desarrollo de software, donde puedo aplicar y expandir mis conocimientos, desarrollando soluciones tecnológicas a medida para clientes.
                    </p>
                </div>

                {/* Formación */}
                <div>
                    <div className="flex items-center mb-4">
                        <FaGraduationCap
                            size={32}
                            className="text-primary dark:text-primary-light mr-4"
                            aria-label="Icono de Formación y Motivación"
                        />
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                            Formación y Motivación
                        </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                        Mi formación es principalmente autodidacta. Constantemente busco adquirir nuevas habilidades y conocimientos a través de proyectos reales y de los recursos en línea que tengo a mi disposición.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                        Estoy motivado por el aprendizaje continuo y siempre en busca de mejorar y actualizar mis conocimientos para estar al día con las tendencias y tecnologías del sector.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Experience;