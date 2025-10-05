"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiCopy, FiCheck, FiMail, FiSend, FiArrowDown, FiCode, FiZap } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Home: React.FC = () => {
    const [copied, setCopied] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [currentText, setCurrentText] = useState(0);

    const dynamicTexts = [
        "Full-Stack Developer",
        "Digital Entrepreneur", 
        "React Specialist", 
        "Django Expert",
        "Marketing Strategist",
        "Technical Founder"
    ];

    useEffect(() => {
        setIsVisible(true);
        const interval = setInterval(() => {
            setCurrentText((prev) => (prev + 1) % dynamicTexts.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("luis.viteri@pukadigital.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const profileImgBase =
        "https://res.cloudinary.com/dltfsttr7/image/upload/c_fill,w_300,h_300,q_auto,f_webp/v1731879784/Luis_Viteri_lxtxcc.jpg";

    const cvUrl = "https://drive.google.com/file/d/1XjSOKsgLSC99uC47Cm0l-P0dI2ma2Ug5/view?usp=sharing";

    const scrollToNextSection = () => {
        const nextSection = document.querySelector('#about');
        nextSection?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section 
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 -mt-16 md:-mt-20 pt-16 md:pt-20">
            {/* Fondo animado con partículas */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -inset-10 opacity-20">
                    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                    <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                    <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
                </div>
            </div>

            <div className={`relative z-10 max-w-6xl mx-auto px-6 py-20 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                
                {/* Badge profesional */}
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded-full dark:text-blue-400 dark:bg-blue-900/30 dark:border-blue-800">
                    <FiZap className="w-4 h-4" />
                    <span>Disponible para proyectos</span>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>

                {/* Título principal con efecto gradiente */}
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight">
                    Hola, soy{" "}
                    <span className="relative">
                        Luchodev
                        <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                    </span>
                </h1>

                {/* Texto dinámico */}
                <div className="mb-8 h-16 flex items-center justify-center">
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
                        <span className="inline-flex items-center gap-2">
                            <FiCode className="text-blue-500" />
                            <span key={currentText} className="animate-fadeInUp">
                                {dynamicTexts[currentText]}
                            </span>
                        </span>
                    </p>
                </div>

                {/* Grid de contenido principal */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                    
                    {/* Imagen con efectos modernos */}
                    <div className="order-2 md:order-1 flex justify-center md:justify-end">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition-all duration-300"></div>
                            <div className="relative bg-white dark:bg-gray-800 p-2 rounded-3xl shadow-2xl">
                                <Image
                                    src={profileImgBase}
                                    alt="Luchodev - Full Stack Developer"
                                    width={280}
                                    height={280}
                                    className="rounded-2xl object-cover transition-all duration-300 group-hover:scale-105"
                                    priority
                                />
                            </div>
                            {/* Elementos decorativos */}
                            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
                            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-ping"></div>
                        </div>
                    </div>

                    {/* Contenido de contacto modernizado */}
                    <div className="order-1 md:order-2 text-left space-y-6">
                        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50">
                            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-800 dark:text-gray-200">
                                <FiMail className="text-blue-500" />
                                Conectemos
                            </h3>
                            
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                                    <span className="text-sm text-gray-600 dark:text-gray-300 flex-1">
                                        luis.viteri@pukadigital.com
                                    </span>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => window.open('mailto:luis.viteri@pukadigital.com')}
                                            className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors"
                                            title="Enviar Correo"
                                        >
                                            <FiSend className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={handleCopyEmail}
                                            className="p-2 text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors"
                                            title="Copiar Correo"
                                        >
                                            {copied ? <FiCheck className="w-4 h-4 text-green-500" /> : <FiCopy className="w-4 h-4" />}
                                        </button>
                                    </div>
                                </div>

                                {copied && (
                                    <div className="text-sm text-green-600 dark:text-green-400 animate-fadeInUp">
                                        ✓ ¡Correo copiado al portapapeles!
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Redes sociales con mejor diseño */}
                        <div className="flex gap-4">
                            <a
                                href="https://www.linkedin.com/in/luisviteri/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                            >
                                <FaLinkedin className="w-5 h-5" />
                                <span className="font-medium">LinkedIn</span>
                            </a>
                            <a
                                href="https://github.com/LuchoProgramer"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-500/25"
                            >
                                <FaGithub className="w-5 h-5" />
                                <span className="font-medium">GitHub</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Descripción mejorada */}
                <div className="max-w-3xl mx-auto mb-12">
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                        Transformo ideas en{" "}
                        <span className="font-semibold text-blue-600 dark:text-blue-400">experiencias digitales</span>{" "}
                        excepcionales. Especializado en{" "}
                        <span className="font-semibold text-purple-600 dark:text-purple-400">React</span>,{" "}
                        <span className="font-semibold text-green-600 dark:text-green-400">Django</span>{" "}
                        y <span className="font-semibold text-orange-600 dark:text-orange-400">Marketing Digital</span>.{" "}
                        Actualmente construyendo{" "}
                        <span className="font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">PukaDigital</span> 
                        {" "}para revolucionar el desarrollo web empresarial.
                    </p>
                </div>

                {/* CTA mejorado */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                    <a
                        href={cvUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        <span className="relative z-10">Descargar CV</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                    <button
                        onClick={scrollToNextSection}
                        className="flex items-center gap-2 px-8 py-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-300"
                    >
                        <span>Ver mis proyectos</span>
                        <FiArrowDown className="w-4 h-4 animate-bounce" />
                    </button>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-bounce"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;