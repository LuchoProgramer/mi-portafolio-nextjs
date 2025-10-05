"use client";

import React, { useState, useEffect, useRef } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend, FiLinkedin, FiGithub, FiGlobe, FiCopy, FiCheck, FiArrowRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useIsMobile } from "@/hooks/useIsMobile";

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [copied, setCopied] = useState('');
    const { isVisible, elementRef } = useIntersectionObserver({ threshold: 0.2 });
    const isMobile = useIsMobile();
    
    // Show immediately on mobile, otherwise wait for intersection
    const shouldShow = isMobile || isVisible;

    const handleCopy = (text: string, type: string) => {
        navigator.clipboard.writeText(text);
        setCopied(type);
        setTimeout(() => setCopied(''), 2000);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = `Contacto desde Portfolio: ${formData.subject}`;
        const body = `Hola Luis,

Mi nombre es ${formData.name} y me pongo en contacto contigo desde tu portfolio.

${formData.message}

Saludos,
${formData.name}
Email: ${formData.email}`;

        const mailtoLink = `mailto:luis.viteri@pukadigital.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink, '_blank');
    };

    const socialLinks = [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/luisviteri/",
            icon: <FiLinkedin className="w-5 h-5" />,
            color: "hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20"
        },
        {
            name: "GitHub", 
            url: "https://github.com/LuchoProgramer",
            icon: <FiGithub className="w-5 h-5" />,
            color: "hover:text-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/20"
        },
        {
            name: "WhatsApp",
            url: "https://wa.me/594964065880",
            icon: <FaWhatsapp className="w-5 h-5" />,
            color: "hover:text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20"
        }
    ];

    const contactInfo = [
        {
            icon: <FiMail className="w-5 h-5" />,
            label: "Email",
            value: "luis.viteri@pukadigital.com",
            action: () => handleCopy("luis.viteri@pukadigital.com", "email")
        },
        {
            icon: <FiPhone className="w-5 h-5" />,
            label: "WhatsApp",
            value: "+594 96 406 5880",
            action: () => window.open("https://wa.me/594964065880", "_blank")
        },
        {
            icon: <FiMapPin className="w-5 h-5" />,
            label: "Ubicación",
            value: "Ecuador (Nomad Digital)",
            action: () => {}
        }
    ];

    return (
        <section 
            ref={elementRef}
            id="contact" 
            className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-20 left-40 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className={`transition-all duration-1000 ${shouldShow ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-blue-600/20 text-blue-300 rounded-full border border-blue-500/30">
                            <FiGlobe className="w-4 h-4" />
                            <span className="text-sm font-medium">Conectemos</span>
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            ¿Listo para dar el <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">siguiente paso</span>?
                        </h2>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            Ya sea que necesites desarrollo web, estrategias de marketing digital, o quieras formar parte del 
                            <span className="font-semibold text-purple-300"> early access de PukaDigital</span>, ¡hablemos!
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        
                        {/* Contact Form */}
                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
                            <h3 className="text-2xl font-bold mb-6">Envíame un mensaje</h3>
                            
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-blue-200 mb-2">
                                            Nombre *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:border-blue-400 transition-colors"
                                            placeholder="Tu nombre"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-blue-200 mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:border-blue-400 transition-colors"
                                            placeholder="tu@email.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-blue-200 mb-2">
                                        Asunto *
                                    </label>
                                    <select
                                        required
                                        value={formData.subject}
                                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-blue-400 transition-colors"
                                    >
                                        <option value="" className="bg-gray-800">Selecciona un tema</option>
                                        <option value="Desarrollo Web" className="bg-gray-800">Desarrollo Web</option>
                                        <option value="Marketing Digital" className="bg-gray-800">Marketing Digital</option>
                                        <option value="PukaDigital Early Access" className="bg-gray-800">PukaDigital Early Access</option>
                                        <option value="Consultoría" className="bg-gray-800">Consultoría</option>
                                        <option value="Colaboración" className="bg-gray-800">Colaboración</option>
                                        <option value="Otro" className="bg-gray-800">Otro</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-blue-200 mb-2">
                                        Mensaje *
                                    </label>
                                    <textarea
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                                        placeholder="Cuéntame sobre tu proyecto o idea..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                                >
                                    <FiSend className="w-5 h-5" />
                                    <span>Enviar Mensaje</span>
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-8">
                            
                            {/* Contact Details */}
                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
                                <h3 className="text-2xl font-bold mb-6">Información de contacto</h3>
                                
                                <div className="space-y-4">
                                    {contactInfo.map((info, index) => (
                                        <div 
                                            key={index}
                                            className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group"
                                            onClick={info.action}
                                        >
                                            <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                                                {info.icon}
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-sm text-blue-200">{info.label}</div>
                                                <div className="font-semibold">{info.value}</div>
                                            </div>
                                            {info.label === "Email" && (
                                                <div className="text-blue-400">
                                                    {copied === "email" ? <FiCheck className="w-5 h-5" /> : <FiCopy className="w-5 h-5" />}
                                                </div>
                                            )}
                                            {info.label === "WhatsApp" && (
                                                <FiArrowRight className="w-5 h-5 text-blue-400 group-hover:translate-x-1 transition-transform" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
                                <h3 className="text-2xl font-bold mb-6">Sígueme en</h3>
                                
                                <div className="grid grid-cols-1 gap-4">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                                        >
                                            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                                {social.icon}
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-semibold">{social.name}</div>
                                                <div className="text-sm text-blue-200">@luisviteri</div>
                                            </div>
                                            <FiArrowRight className="w-5 h-5 text-blue-400 group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Quick CTA */}
                            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-3xl p-8">
                                <h3 className="text-xl font-bold mb-4">¿Proyecto urgente?</h3>
                                <p className="text-blue-100 mb-6 text-sm">
                                    Para proyectos con timeline ajustado o consultas rápidas, contáctame directamente por WhatsApp.
                                </p>
                                <a
                                    href="https://wa.me/594964065880?text=Hola%20Luis,%20tengo%20un%20proyecto%20urgente"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                                >
                                    <FaWhatsapp className="w-5 h-5" />
                                    <span>WhatsApp Directo</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;