"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiCopy, FiCheck, FiMail, FiSend } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Home: React.FC = () => {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("luisviteri@pukadigital.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const profileImgBase =
        "https://res.cloudinary.com/dltfsttr7/image/upload/c_fill,w_150,h_150,q_auto,f_webp/v1731879784/Luis_Viteri_lxtxcc.jpg";

    const cvUrl = "https://drive.google.com/file/d/1XjSOKsgLSC99uC47Cm0l-P0dI2ma2Ug5/view?usp=sharing";

    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6 py-10">
            <div className="relative z-10 flex flex-col items-center max-w-4xl w-full mx-auto text-center">

                <h1 className="text-5xl md:text-6xl font-bold mb-2">
                    <span className="text-gray-900 dark:text-white">
                        Luis Viteri
                    </span>
                </h1>

                <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-8">
                    CEO & Founder - Puka Digital
                </h2>

                <div className="flex flex-col md:flex-row items-center justify-center w-full mb-8 gap-8">

                    <Image
                        src={profileImgBase}
                        alt="Foto de Luis Viteri"
                        width={150}
                        height={150}
                        className="rounded-full object-cover shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
                        priority
                        sizes="(max-width: 768px) 120px, 160px"
                    />

                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-xl font-bold mb-4 flex items-center justify-center md:justify-start">
                            <FiMail className="mr-2" size={24} />
                            Contacto
                        </h3>
                        <div className="flex items-center space-x-4">
                            <span className="text-base">luisviteri@pukadigital.com</span>
                            <div className="flex items-center space-x-2">
                                <a
                                    href="mailto:luisviteri@pukadigital.com"
                                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                                    title="Enviar Correo"
                                >
                                    <FiSend size={24} />
                                </a>
                                <button
                                    onClick={handleCopyEmail}
                                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                                    title="Copiar Correo"
                                >
                                    {copied ? <FiCheck size={24} /> : <FiCopy size={24} />}
                                </button>
                            </div>
                        </div>
                        {copied && (
                            <div className="mt-2 text-green-500">¡Correo copiado!</div>
                        )}
                    </div>
                </div>

                <div className="flex justify-center items-center space-x-6 mb-8">
                    <a
                        href="https://www.linkedin.com/in/luisviteri/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                        title="LinkedIn"
                    >
                        <FaLinkedin size={32} />
                    </a>
                    <a
                        href="https://github.com/LuchoProgramer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                        title="GitHub"
                    >
                        <FaGithub size={32} />
                    </a>
                </div>

                <p className="text-lg md:text-xl mb-4 max-w-2xl text-gray-700 dark:text-gray-300">
                    Construyo <span className="font-semibold text-blue-600 dark:text-blue-400">soluciones digitales</span> que generan{" "}
                    <span className="font-semibold text-blue-600 dark:text-blue-400">resultados verificables</span>.
                </p>

                <p className="text-base md:text-lg mb-8 max-w-2xl text-gray-600 dark:text-gray-400">
                    Especializado en marketing digital, desarrollo web y automatización con IA para startups en Ecuador y Latam.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                    <Link
                        href="https://pukadigital.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
                    >
                        → Ver empresa y casos
                    </Link>
                    <a
                        href={cvUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
                    >
                        Ver CV
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Home;