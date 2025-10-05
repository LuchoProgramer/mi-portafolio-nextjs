"use client";

import React from "react";
import Link from "next/link";
import { FiCalendar, FiClock, FiArrowRight, FiUser, FiTag } from "react-icons/fi";
import { Blog } from '../../types';

interface BlogCardProps {
    blog: Blog;
    viewMode?: 'grid' | 'list';
}

const BlogCard: React.FC<BlogCardProps> = ({ blog, viewMode = 'grid' }) => {
    const formatDate = (date: any) => {
        if (!date) return 'Fecha no disponible';
        
        let dateObj: Date;
        if (date instanceof Date) {
            dateObj = date;
        } else if (date.toDate && typeof date.toDate === 'function') {
            dateObj = date.toDate();
        } else {
            dateObj = new Date(date);
        }
        
        return dateObj.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const calculateReadTime = (content: string) => {
        const wordsPerMinute = 200;
        const textLength = content.replace(/<[^>]*>/g, '').split(' ').length;
        const readTime = Math.ceil(textLength / wordsPerMinute);
        return readTime;
    };

    const readTime = blog.blocks ? calculateReadTime(
        blog.blocks.filter(block => block.type === 'text').map(block => block.content || '').join(' ')
    ) : 3;

    if (viewMode === 'list') {
        return (
            <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.02]">
                <div className="flex flex-col md:flex-row">
                    
                    {/* Image Section */}
                    <div className="md:w-1/3 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                        <img
                            src={blog.image || '/assets/default-blog.jpg'}
                            alt={blog.alt || blog.title || 'Imagen del blog'}
                            className="w-full h-48 md:h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            loading="lazy"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 p-6 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                                <div className="flex items-center gap-1">
                                    <FiCalendar className="w-4 h-4" />
                                    <span>{formatDate(blog.createdAt)}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <FiClock className="w-4 h-4" />
                                    <span>{readTime} min lectura</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <FiUser className="w-4 h-4" />
                                    <span>Luchodev</span>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                                {blog.title}
                            </h3>

                            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                                {blog.excerpt}
                            </p>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <FiTag className="w-4 h-4 text-blue-500" />
                                <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                                    Desarrollo Web
                                </span>
                            </div>
                            
                            <Link
                                href={`/blog/${blog.slug}`}
                                className="group/link inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
                            >
                                <span>Leer más</span>
                                <FiArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Grid View (Default)
    return (
        <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:transform hover:scale-105">
            
            {/* Image Section with Overlay */}
            <div className="relative overflow-hidden h-48">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img
                    src={blog.image || '/assets/default-blog.jpg'}
                    alt={blog.alt || blog.title || 'Imagen del blog'}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                />
                
                {/* Floating Badge */}
                <div className="absolute top-4 left-4 z-20">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-600/90 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                        <FiTag className="w-3 h-3" />
                        Desarrollo
                    </span>
                </div>

                {/* Read Time Badge */}
                <div className="absolute top-4 right-4 z-20">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-900/70 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                        <FiClock className="w-3 h-3" />
                        {readTime} min
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
                
                {/* Meta Information */}
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                        <FiCalendar className="w-4 h-4" />
                        <span>{formatDate(blog.createdAt)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <FiUser className="w-4 h-4" />
                        <span>Luchodev</span>
                    </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 leading-tight">
                    {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3 leading-relaxed">
                    {blog.excerpt}
                </p>

                {/* CTA Button */}
                <Link
                    href={`/blog/${blog.slug}`}
                    className="group/link w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                    <span>Leer artículo</span>
                    <FiArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
            </div>
        </div>
    );
};

export default BlogCard;
