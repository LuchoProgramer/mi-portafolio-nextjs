"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiCopy, FiCheck, FiMail, FiSend } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Home: React.FC = () => {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("luchoviteri1990@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const profileImgBase =
        "https://res.cloudinary.com/dltfsttr7/image/upload/c_fill,w_150,h_150,q_auto,f_webp/v1731879784/Luis_Viteri_lxtxcc.jpg";

    const cvUrl = "https://drive.google.com/file/d/1XjSOKsgLSC99uC47Cm0l-P0dI2ma2Ug5/view?usp=sharing";

    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen bg-gray-light dark:bg-gray-veryDark text-gray-dark dark:text-gray-light px-6 py-10">
            <div className="relative z-10 flex flex-col items-center max-w-4xl w-full mx-auto text-center">

                <h2 className="text-4xl font-bold mb-6">
                    ¡Hola! Soy{" "}
                    <span className="text-primary dark:text-primary-light">
                        Luis Viteri
                    </span>
                </h2>


                <div className="flex flex-col md:flex-row items-center justify-center w-full mb-8">

                    <Image
                        src={profileImgBase}
                        alt="Foto de Luis Viteri"
                        width={150}
                        height={150}
                        className="rounded-full object-cover shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
                        priority
                        sizes="(max-width: 768px) 120px, 160px"
                    />


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


                <p className="text-xl mb-8 max-w-2xl">
                    Desarrollador Web apasionado por crear experiencias digitales elegantes y
                    funcionales. Especializado en{" "}
                    <span className="text-primary dark:text-primary-light">React</span> y{" "}
                    <span className="text-primary dark:text-primary-light">Django</span>.
                </p>

                {/* Botón de CV (con URL de Google Drive) */}
                <div className="flex items-center justify-center">
                    <a
                        href={cvUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-light transition"
                    >
                        Ver CV
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Home;