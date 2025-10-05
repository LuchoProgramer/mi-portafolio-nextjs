import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-12 border-t border-white/10">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    
                    {/* Brand & Info */}
                    <div className="space-y-4">
                        <div className="font-mono bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg px-4 py-2 text-lg font-bold inline-block">
                            {"<Lucho_dev />"}
                        </div>
                        <p className="text-blue-200 text-sm leading-relaxed">
                            Desarrollador Full-Stack & Digital Entrepreneur especializado en crear experiencias web modernas y estrategias de marketing digital.
                        </p>
                        <div className="flex items-center gap-2 text-blue-300">
                            <FiMapPin className="w-4 h-4" />
                            <span className="text-sm">Ecuador 🇪🇨 | Nomad Digital</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Enlaces Rápidos</h3>
                        <div className="grid grid-cols-2 gap-2">
                            <a href="#about" className="text-blue-200 hover:text-white transition-colors text-sm">Sobre mí</a>
                            <a href="#technologies" className="text-blue-200 hover:text-white transition-colors text-sm">Skills</a>
                            <a href="#projects" className="text-blue-200 hover:text-white transition-colors text-sm">Proyectos</a>
                            <a href="#pukadigital" className="text-blue-200 hover:text-white transition-colors text-sm">PukaDigital</a>
                            <a href="#contact" className="text-blue-200 hover:text-white transition-colors text-sm">Contacto</a>
                            <a href="/blog" className="text-blue-200 hover:text-white transition-colors text-sm">Blog</a>
                        </div>
                    </div>

                    {/* Contact & Social */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Conectemos</h3>
                        <div className="space-y-3">
                            <a 
                                href="mailto:luis.viteri@pukadigital.com"
                                className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors text-sm"
                            >
                                <FiMail className="w-4 h-4" />
                                <span>luis.viteri@pukadigital.com</span>
                            </a>
                            
                            <div className="flex space-x-4 pt-2">
                                <a
                                    href="https://github.com/LuchoProgramer"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                                    aria-label="GitHub"
                                >
                                    <FiGithub className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/luisviteri/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                                    aria-label="LinkedIn"
                                >
                                    <FiLinkedin className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://wa.me/593964065880"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                                    aria-label="WhatsApp"
                                >
                                    <FaWhatsapp className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-blue-200 text-sm">
                        © 2024 Luis Viteri | PukaDigital LLC. Todos los derechos reservados.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-blue-300">
                        <span>Hecho con ❤️ en Ecuador</span>
                        <span>•</span>
                        <a href="#contact" className="hover:text-white transition-colors">
                            ¿Trabajamos juntos?
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;