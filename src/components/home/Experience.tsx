// Experience.tsx
import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const Experience: React.FC = () => {
    return (
        <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
                    Mi Trayectoria
                </h2>

                {/* De Freelancer a Founder */}
                <div className="mb-12">
                    <div className="flex items-center mb-4">
                        <FaBriefcase
                            size={32}
                            className="text-blue-600 dark:text-blue-400 mr-4"
                            aria-label="Icono de Experiencia"
                        />
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                            De Freelancer a Founder
                        </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                        Comencé como <span className="font-semibold">freelancer hace 3 años</span>, trabajando con 15+ clientes 
                        en diferentes nichos. Cada proyecto me enseñó qué funciona y qué no en digital marketing.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                        Hoy he fundado <span className="font-semibold">Puka Digital</span>, donde aplico todo lo aprendido de forma 
                        escalable. Mi enfoque cambió: de "hacer el trabajo" a "construir sistemas que generan resultados".
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                        Actualmente trabajo con startups en <span className="font-semibold">Salud, Hotelería y Leyes</span>, 
                        generando conversiones medibles a través de Google Ads, TikTok Ads y contenido estratégico.
                    </p>
                </div>

                {/* Formación */}
                <div>
                    <div className="flex items-center mb-4">
                        <FaGraduationCap
                            size={32}
                            className="text-blue-600 dark:text-blue-400 mr-4"
                            aria-label="Icono de Formación"
                        />
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                            Formación Continua
                        </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                        <span className="font-semibold">100% autodidacta</span>. Mi mejor educación ha sido trabajar con clientes reales 
                        y medir qué funciona.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                        Siempre estoy aprendiendo: últimamente en <span className="font-semibold">IA, chatbots con LLMs, 
                        automatización de ventas</span> y nuevas estrategias de marketing digital.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Experience;