"use client";

import React, { useState, useEffect, useRef } from "react";
import { FiTrendingUp, FiUsers, FiAward, FiArrowRight, FiLayers, FiZap, FiTarget, FiGlobe, FiCode, FiArrowUp, FiCalendar, FiPlay } from "react-icons/fi";
import { FaGoogle, FaFacebookF, FaChartLine } from "react-icons/fa";

const PukaDigital: React.FC = () => {
    const [activeService, setActiveService] = useState(0);
    

    const services = [
        {
            icon: <FiCode className="w-6 h-6" />,
            title: "Desarrollo Web",
            description: "Sitios web optimizados con GA4, mapas de calor y seguimiento avanzado",
            features: ["React & Next.js", "SEO Optimizado", "Analytics Integrado", "Performance Audit"],
            color: "blue"
        },
        {
            icon: <FaGoogle className="w-6 h-6" />,
            title: "Google Ads",
            description: "Campañas PPC optimizadas para máximo ROI y conversiones",
            features: ["Campaign Setup", "Keyword Research", "A/B Testing", "ROI Tracking"],
            color: "green"
        },
        {
            icon: <FaFacebookF className="w-6 h-6" />,
            title: "Facebook Ads",
            description: "Marketing en redes sociales con targeting preciso y retargeting",
            features: ["Audience Targeting", "Creative Design", "Funnel Optimization", "Pixel Setup"],
            color: "purple"
        },
        {
            icon: <FaChartLine className="w-6 h-6" />,
            title: "Analytics & Data",
            description: "Implementación completa de GA4, pixels y etiquetas de seguimiento",
            features: ["GA4 Setup", "Conversion Tracking", "Heat Maps", "Custom Reports"],
            color: "orange"
        }
    ];

    const timeline = [
        { phase: "Fase 1", title: "LLC Formation", status: "En Proceso", date: "Q4 2024" },
        { phase: "Fase 2", title: "Branding & Website", status: "Próximo", date: "Q1 2025" },
        { phase: "Fase 3", title: "First Clients", status: "Planeado", date: "Q2 2025" },
        { phase: "Fase 4", title: "Team Expansion", status: "Futuro", date: "Q3 2025" }
    ];

    const stats = [
        { number: "100%", label: "Remote First", icon: <FiGlobe className="w-5 h-5" /> },
        { number: "24/7", label: "Global Support", icon: <FiUsers className="w-5 h-5" /> },
        { number: "ROI+", label: "Focus", icon: <FiTrendingUp className="w-5 h-5" /> }
    ];

    return (
        <section 
            id="pukadigital"
            className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-20 left-40 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="transition-all duration-1000 opacity-100 translate-y-0">
                    
                    {/* Header con Logo */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 px-6 py-3 mb-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full backdrop-blur-sm">
                            <FiArrowUp className="w-5 h-5 text-blue-400" />
                            <span className="text-blue-300 font-medium">En Desarrollo</span>
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        </div>
                        
                        <h2 className="text-5xl md:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                PukaDigital
                            </span>
                        </h2>
                        <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mb-8"></div>
                        
                        <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                            La agencia digital que combina <span className="font-semibold text-white">desarrollo web de vanguardia</span> con 
                            <span className="font-semibold text-purple-300"> estrategias de marketing digital</span> para 
                            <span className="font-semibold text-blue-300"> maximizar el ROI empresarial</span>.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center group">
                                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 transition-all duration-300 group-hover:bg-white/20 group-hover:scale-105">
                                    <div className="text-blue-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                                        {stat.icon}
                                    </div>
                                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                                    <div className="text-blue-200">{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Services Grid */}
                    <div className="mb-20">
                        <h3 className="text-3xl font-bold text-center mb-12">
                            Servicios <span className="text-blue-400">Integrales</span>
                        </h3>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {services.map((service, index) => (
                                <div 
                                    key={index}
                                    className={`p-8 rounded-2xl border transition-all duration-300 cursor-pointer group ${
                                        activeService === index 
                                            ? 'bg-white/20 border-white/40 scale-105' 
                                            : 'bg-white/10 border-white/20 hover:bg-white/15'
                                    }`}
                                    onClick={() => setActiveService(index)}
                                >
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                                            service.color === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                                            service.color === 'green' ? 'bg-green-500/20 text-green-400' :
                                            service.color === 'purple' ? 'bg-purple-500/20 text-purple-400' :
                                            'bg-orange-500/20 text-orange-400'
                                        }`}>
                                            {service.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-xl font-semibold text-white mb-2">{service.title}</h4>
                                            <p className="text-blue-100 text-sm leading-relaxed">{service.description}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="grid grid-cols-2 gap-3">
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-sm">
                                                <FiZap className="w-3 h-3 text-blue-400" />
                                                <span className="text-blue-200">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="mb-16">
                        <h3 className="text-3xl font-bold text-center mb-12">
                            Roadmap de <span className="text-purple-400">Desarrollo</span>
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {timeline.map((item, index) => (
                                <div key={index} className="relative">
                                    <div className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                                        item.status === 'En Proceso' 
                                            ? 'border-green-400 bg-green-500/10' 
                                            : item.status === 'Próximo'
                                            ? 'border-blue-400 bg-blue-500/10'
                                            : 'border-gray-500 bg-gray-500/10'
                                    }`}>
                                        <div className="flex items-center gap-2 mb-3">
                                            <FiCalendar className="w-4 h-4 text-blue-400" />
                                            <span className="text-xs text-blue-300 font-medium">{item.date}</span>
                                        </div>
                                        <h4 className="text-lg font-semibold text-white mb-2">{item.phase}</h4>
                                        <p className="text-blue-100 text-sm mb-3">{item.title}</p>
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                                            item.status === 'En Proceso' 
                                                ? 'bg-green-500/20 text-green-300 border border-green-500/50' 
                                                : item.status === 'Próximo'
                                                ? 'bg-blue-500/20 text-blue-300 border border-blue-500/50'
                                                : 'bg-gray-500/20 text-gray-300 border border-gray-500/50'
                                        }`}>
                                            {item.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8 md:p-12 border border-white/20 backdrop-blur-sm">
                        <h3 className="text-3xl md:text-4xl font-bold mb-6">
                            ¿Listo para ser parte de la revolución?
                        </h3>
                        <p className="text-blue-100 mb-8 max-w-3xl mx-auto text-lg">
                            PukaDigital está en construcción, pero ya estamos aceptando 
                            <span className="font-semibold text-white"> early access</span> para proyectos estratégicos. 
                            Únete a nosotros en este journey y obtén 
                            <span className="font-semibold text-purple-300"> tarifas fundadoras</span>.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button 
                                onClick={() => {
                                    window.open('mailto:luis.viteri@pukadigital.com?subject=Early Access - PukaDigital&body=Hola Luis, estoy interesado en ser parte del early access de PukaDigital.', '_blank');
                                }}
                                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                            >
                                <div className="flex items-center gap-2">
                                    <FiPlay className="w-5 h-5" />
                                    <span>Acceso Temprano</span>
                                </div>
                            </button>
                            
                            <button 
                                onClick={() => {
                                    const contactSection = document.querySelector('#contact');
                                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="flex items-center gap-2 px-8 py-4 text-blue-200 hover:text-white font-medium transition-colors duration-300 border border-blue-400/50 rounded-2xl hover:bg-blue-500/20"
                            >
                                <FiTarget className="w-5 h-5" />
                                <span>Más Información</span>
                            </button>
                        </div>
                        
                        <div className="mt-6 text-sm text-blue-300">
                            💡 <span className="font-medium">Tip:</span> Los primeros 10 clientes obtendrán 
                            <span className="font-semibold text-purple-300"> 50% descuento</span> en el primer proyecto
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PukaDigital;