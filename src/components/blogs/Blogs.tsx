"use client";

import React, { useEffect, useState } from 'react';
import { FiBookOpen, FiCalendar, FiUser, FiSearch, FiFilter, FiGrid, FiList } from 'react-icons/fi';
import { Blog } from '../../types';
import BlogCard from './BlogCard';
import { getBlogs } from '../../lib/firebase';

const Blogs: React.FC = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        const fetchBlogs = async () => {
            try {
                const blogsList = await getBlogs();
                if (blogsList.length === 0) {
                    // Si no hay blogs en Firebase, usar blogs de ejemplo
                    const exampleBlogs: Blog[] = [
                        {
                            id: "ejemplo-1",
                            title: "Construyendo el Portafolio Perfecto en 2025",
                            slug: "portafolio-perfecto-2025",
                            content: "Guía completa para crear un portafolio que destaque en el mercado actual.",
                            excerpt: "Descubre las mejores prácticas para crear un portafolio web moderno que capture la atención de empleadores y clientes.",
                            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
                            alt: "Desarrollador trabajando en código",
                            blocks: [
                                {
                                    type: "text",
                                    content: "<p>Este es un blog de ejemplo mientras configuramos el sistema completo.</p>"
                                }
                            ],
                            createdAt: new Date('2024-12-01')
                        },
                        {
                            id: "ejemplo-2", 
                            title: "El Futuro del Desarrollo Web",
                            slug: "futuro-desarrollo-web",
                            content: "Explorando las tendencias emergentes que definirán el desarrollo web.",
                            excerpt: "Análisis de las tecnologías y metodologías que transformarán la industria del desarrollo web en los próximos años.",
                            image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
                            alt: "Tecnología futurista",
                            blocks: [
                                {
                                    type: "text",
                                    content: "<p>Contenido de ejemplo sobre el futuro del desarrollo web.</p>"
                                }
                            ],
                            createdAt: new Date('2024-11-15')
                        },
                        {
                            id: "ejemplo-3",
                            title: "Optimización de Performance en React",
                            slug: "optimizacion-performance-react", 
                            content: "Técnicas avanzadas para mejorar el rendimiento de aplicaciones React.",
                            excerpt: "Aprende las estrategias más efectivas para optimizar el rendimiento de tus aplicaciones React y ofrecer mejores experiencias de usuario.",
                            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
                            alt: "Código React",
                            blocks: [
                                {
                                    type: "text",
                                    content: "<p>Guía detallada sobre optimización en React.</p>"
                                }
                            ],
                            createdAt: new Date('2024-11-01')
                        }
                    ];
                    setBlogs(exampleBlogs);
                    setFilteredBlogs(exampleBlogs);
                } else {
                    const blogsWithImage = blogsList.map(blog => ({
                        ...blog,
                        image: blog.image ?? undefined,
                        alt: blog.alt ?? undefined,
                    }));
                    setBlogs(blogsWithImage);
                    setFilteredBlogs(blogsWithImage);
                }
            } catch (error) {
                console.error('Error al cargar los blogs:', error);
                // En caso de error, también usar blogs de ejemplo
                const exampleBlogs: Blog[] = [
                    {
                        id: "ejemplo-1",
                        title: "Bienvenido a mi Blog",
                        slug: "bienvenido-blog",
                        content: "Mi primer artículo de blog.",
                        excerpt: "Una introducción a mi blog personal sobre desarrollo web y tecnología.",
                        blocks: [
                            {
                                type: "text",
                                content: "<p>¡Hola! Este es mi blog donde compartiré contenido sobre desarrollo web.</p>"
                            }
                        ],
                        createdAt: new Date()
                    }
                ];
                setBlogs(exampleBlogs);
                setFilteredBlogs(exampleBlogs);
            } finally {
                setLoading(false);
            }
        };
        fetchBlogs();
    }, []);

    useEffect(() => {
        const filtered = blogs.filter(blog =>
            blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            blog.excerpt?.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredBlogs(filtered);
    }, [searchTerm, blogs]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center space-y-4">
                    <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
                    <p className="text-xl text-gray-600 dark:text-gray-300">Cargando artículos...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="relative min-h-screen">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
                <div className="absolute top-40 right-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-20 left-40 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full border border-blue-200 dark:border-blue-800">
                            <FiBookOpen className="w-4 h-4" />
                            <span className="text-sm font-medium">Knowledge Hub</span>
                        </div>
                        
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                            Blog de <span className="relative">Luchodev
                                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                            </span>
                        </h1>
                        
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Comparto mi experiencia en desarrollo web, marketing digital y emprendimiento. 
                            Artículos técnicos, tutoriales y reflexiones sobre tecnología moderna.
                        </p>
                    </div>

                    {/* Stats & Controls */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
                        
                        {/* Blog Stats */}
                        <div className="flex items-center gap-8">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                    {blogs.length}
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Artículos</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                                    {filteredBlogs.length}
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Filtrados</div>
                            </div>
                        </div>

                        {/* Search & View Controls */}
                        <div className="flex items-center gap-4">
                            
                            {/* Search Bar */}
                            <div className="relative">
                                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Buscar artículos..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10 pr-4 py-2 w-64 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
                                />
                            </div>

                            {/* View Mode Toggle */}
                            <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`p-2 rounded-md transition-all ${
                                        viewMode === 'grid'
                                            ? 'bg-blue-600 text-white shadow-md'
                                            : 'text-gray-600 dark:text-gray-400 hover:text-blue-600'
                                    }`}
                                >
                                    <FiGrid className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-2 rounded-md transition-all ${
                                        viewMode === 'list'
                                            ? 'bg-blue-600 text-white shadow-md'
                                            : 'text-gray-600 dark:text-gray-400 hover:text-blue-600'
                                    }`}
                                >
                                    <FiList className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Blog Content */}
                    {filteredBlogs.length === 0 ? (
                        <div className="text-center py-20">
                            <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                                <FiBookOpen className="w-12 h-12 text-gray-400" />
                            </div>
                            {searchTerm ? (
                                <>
                                    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                        No se encontraron artículos
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                                        No hay artículos que coincidan con "{searchTerm}"
                                    </p>
                                    <button
                                        onClick={() => setSearchTerm('')}
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                    >
                                        Limpiar búsqueda
                                    </button>
                                </>
                            ) : (
                                <>
                                    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                        Próximamente...
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Estoy trabajando en contenido increíble para compartir contigo.
                                    </p>
                                </>
                            )}
                        </div>
                    ) : (
                        <div className={`
                            ${viewMode === 'grid' 
                                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                                : 'space-y-6'
                            }
                        `}>
                            {filteredBlogs.map((blog, index) => (
                                <div
                                    key={blog.id}
                                    className={`transition-all duration-700 ${
                                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                    }`}
                                    style={{ 
                                        transitionDelay: `${index * 150}ms`,
                                        animationDelay: `${index * 150}ms`
                                    }}
                                >
                                    <BlogCard blog={blog} viewMode={viewMode} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Blogs;