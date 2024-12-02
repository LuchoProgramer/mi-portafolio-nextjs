"use client";

import React, { useState } from "react"; // Eliminamos useEffect
import Image from "next/image";
import { FiCopy, FiCheck, FiMail, FiSend } from "react-icons/fi"; // Eliminamos FiArrowRight
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Home: React.FC = () => {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("luchoviteri1990@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // El mensaje desaparece después de 2 segundos
    };

    const profileImg =
        "https://res.cloudinary.com/dltfsttr7/image/upload/w_160,h_160,c_fill,q_auto,f_webp/v1731879784/Luis_Viteri_lxtxcc.jpg"; // Optimizado para WebP y tamaño adecuado

    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen bg-gray-light dark:bg-gray-veryDark text-gray-dark dark:text-gray-light px-6 py-10">
            <div className="relative z-10 flex flex-col items-center max-w-4xl w-full mx-auto text-center">
                {/* Saludo y Título */}
                <h2 className="text-4xl font-bold mb-6">
                    ¡Hola! Soy{" "}
                    <span className="text-primary dark:text-primary-light">
                        Luis Viteri
                    </span>
                </h2>

                {/* Fila con Foto y Contacto */}
                <div className="flex flex-col md:flex-row items-center justify-center w-full mb-8">
                    {/* Imagen de Perfil */}
                    <Image
                        src={profileImg}
                        alt="Foto de Luis Viteri"
                        width={160}
                        height={160}
                        className="rounded-full object-cover shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
                        priority // Prioridad alta para optimizar LCP
                        sizes="(max-width: 768px) 150px, 160px" // Ajusta el tamaño en dispositivos móviles
                    />

                    {/* Información de Contacto */}
                    <div className="flex flex-col items-center md:items-start md:ml-8">
                        <h3 className="text-2xl font-bold mb-4 flex items-center">
                            <FiMail className="mr-2" size={24} />
                            Email
                        </h3>
                        <div className="flex items-center space-x-4">
                            <span className="text-lg">luchoviteri1990@gmail.com</span>
                            <div className="flex items-center space-x-2">
                                <a
                                    href="mailto:luchoviteri1990@gmail.com"
                                    className="text-gray-dark dark:text-gray-light hover:text-primary dark:hover:text-primary-light transition-colors duration-300"
                                    title="Enviar Correo"
                                >
                                    <FiSend size={24} />
                                </a>
                                <button
                                    onClick={handleCopyEmail}
                                    className="text-gray-dark dark:text-gray-light hover:text-primary dark:hover:text-primary-light transition-colors duration-300"
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

                {/* Íconos de Redes Sociales */}
                <div className="flex justify-center items-center space-x-6 mb-8">
                    <a
                        href="https://www.linkedin.com/in/luisviteri/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-dark dark:text-gray-light hover:text-primary dark:hover:text-primary-light transition-colors duration-300"
                        title="LinkedIn"
                    >
                        <FaLinkedin size={32} />
                    </a>
                    <a
                        href="https://github.com/LuchoProgramer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-dark dark:text-gray-light hover:text-primary dark:hover:text-primary-light transition-colors duration-300"
                        title="GitHub"
                    >
                        <FaGithub size={32} />
                    </a>
                </div>

                {/* Descripción */}
                <p className="text-xl mb-8 max-w-2xl">
                    Desarrollador Web apasionado por crear experiencias digitales elegantes y
                    funcionales. Especializado en{" "}
                    <span className="text-primary dark:text-primary-light">React</span> y{" "}
                    <span className="text-primary dark:text-primary-light">Django</span>.
                </p>

                {/* Botón de CV */}
                <div className="flex items-center justify-center">
                    <a
                        href="/path/to/CV.pdf"
                        download="Luis_Viteri_CV.pdf"
                        className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-light transition"
                    >
                        Descargar CV
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Home;