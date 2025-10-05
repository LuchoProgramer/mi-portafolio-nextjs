import React from 'react';
import { Metadata } from "next";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Blog } from "@/types";
import Comments from "@/components/blogs/Comments";

// Función para formatear fechas
const formatDate = (date: any): string => {
    try {
        const dateObj = date?.toDate ? date.toDate() : new Date(date);
        return dateObj.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    } catch (error) {
        return 'Fecha no disponible';
    }
};

// Función para obtener un blog por su "slug" desde Firebase
const getBlogBySlug = async (slug: string): Promise<Blog | null> => {
    try {
        const blogsRef = collection(db, "blogs");
        const q = query(blogsRef, where("slug", "==", slug));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            const blogDoc = querySnapshot.docs[0];
            const data = blogDoc.data() as Blog;
            return { ...data, id: blogDoc.id };
        }

        return null;
    } catch (error) {
        console.error("Error al obtener el blog:", error);
        // Si hay error de Firebase, retornamos un blog de ejemplo
        return {
            id: "ejemplo-blog",
            title: "Bienvenido a mi Blog",
            slug: slug,
            content: "Este es un blog de ejemplo mientras configuramos Firebase.",
            excerpt: "Blog de ejemplo con contenido de prueba",
            image: "",
            alt: "",
            blocks: [
                {
                    type: "text",
                    content: `
                        <h2>¡Hola! Bienvenido a mi blog</h2>
                        <p>Actualmente estoy configurando el sistema de blogs. Pronto encontrarás aquí contenido sobre desarrollo web, tecnología y proyectos interesantes.</p>
                        <p>Mientras tanto, puedes explorar el resto de mi portafolio para conocer más sobre mi trabajo y experiencia.</p>
                        <h3>¿Qué encontrarás aquí?</h3>
                        <ul>
                            <li>Tutoriales de desarrollo web</li>
                            <li>Proyectos y casos de estudio</li>
                            <li>Reflexiones sobre tecnología</li>
                            <li>Tips y trucos de programación</li>
                        </ul>
                    `
                }
            ],
            createdAt: new Date(),
        };
    }
};

// Ajuste para trabajar con Next.js App Router y el tipo correcto para rutas dinámicas
export interface BlogDetailPageProps {
    params: Promise<{ slug: string }>;
}

// Función para obtener los metadatos de forma dinámica
export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
    const { slug } = await params; // Obtener el slug de la promesa

    const blog = await getBlogBySlug(slug);
    if (!blog) {
        return { title: "Blog no encontrado", description: "El blog solicitado no existe." };
    }

    return {
        title: `${blog.title} - Blog de Luis Viteri`,
        description: blog.excerpt || "Lee este interesante artículo en mi blog de desarrollo web.",
        openGraph: {
            title: blog.title,
            description: blog.excerpt || "Lee este interesante artículo en mi blog de desarrollo web.",
            images: [blog.image || "/default-blog-image.jpg"],
            url: `https://luchodev.netlify.app/blog/${slug}`,
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: blog.title,
            description: blog.excerpt || "Lee este interesante artículo en mi blog de desarrollo web.",
            images: [blog.image || "/default-blog-image.jpg"],
        },
    };
}

// Componente de la página dinámica
const BlogDetail = async ({ params }: BlogDetailPageProps) => {
    const { slug } = await params;
    const blog = await getBlogBySlug(slug);

    if (!blog) {
        return (
            <p className="text-center mt-6 text-red-500 dark:text-red-400">
                No se encontró un blog con este slug.
            </p>
        );
    }

    // Generar el Schema Markup dinámico
    const schemaMarkup = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": blog.title,
        "image": blog.image,
        "datePublished": blog.createdAt instanceof Date
            ? blog.createdAt.toISOString()
            : new Date().toISOString(),
        "author": {
            "@type": "Person",
            "name": "Luis Viteri" // Tu nombre como autor
        },
        "description": blog.excerpt,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://luchodev.netlify.app/blog/${slug}`
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
            {/* Hero Section */}
            <div className="relative pt-24 pb-12 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
                    <div className="absolute top-40 right-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
                </div>
                
                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full border border-blue-200 dark:border-blue-800">
                        <span className="text-sm font-medium">Artículo</span>
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
                        {blog.title}
                    </h1>
                    
                    <div className="flex items-center justify-center gap-6 text-gray-600 dark:text-gray-300 mb-8">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                L
                            </div>
                            <span className="font-medium">Por Luchodev</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>{formatDate(blog.createdAt)}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 pb-16">
                <article className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
                    
                    {/* Featured Image */}
                    {blog.image && (
                        <div className="relative h-64 md:h-80 overflow-hidden">
                            <img
                                src={blog.image}
                                alt={blog.alt || blog.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                    )}

                    {/* Article Content */}
                    <div className="p-8 md:p-12">
                        <div className="prose prose-lg dark:prose-invert prose-blue max-w-none">
                            {blog.blocks.map((block, index) => {
                                if (block.type === "text") {
                                    return (
                                        <div
                                            key={index}
                                            className="mb-6 [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:mb-6 [&>h1]:text-gray-900 [&>h1]:dark:text-white [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mb-4 [&>h2]:text-gray-900 [&>h2]:dark:text-white [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mb-3 [&>h3]:text-gray-900 [&>h3]:dark:text-white [&>p]:mb-4 [&>p]:leading-relaxed [&>p]:text-gray-700 [&>p]:dark:text-gray-300 [&>ul]:mb-4 [&>ol]:mb-4 [&>blockquote]:border-l-4 [&>blockquote]:border-blue-500 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:bg-blue-50 [&>blockquote]:dark:bg-blue-900/20 [&>blockquote]:p-4 [&>blockquote]:rounded-r-lg [&>code]:bg-gray-100 [&>code]:dark:bg-gray-800 [&>code]:px-2 [&>code]:py-1 [&>code]:rounded [&>code]:text-sm [&>code]:font-mono"
                                            dangerouslySetInnerHTML={{ __html: block.content || "" }}
                                        />
                                    );
                                }
                                if (block.type === "image") {
                                    return (
                                        <div key={index} className="my-8 text-center">
                                            {block.src && (
                                                <div className="inline-block max-w-full">
                                                    <img
                                                        src={block.src}
                                                        alt={block.alt || `Imagen del blog ${index}`}
                                                        className="rounded-xl shadow-lg max-w-full h-auto"
                                                    />
                                                    {block.alt && (
                                                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 italic">
                                                            {block.alt}
                                                        </p>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    );
                                }
                                if (block.type === "video") {
                                    return (
                                        <div key={index} className="my-8">
                                            <div className="relative rounded-xl overflow-hidden shadow-lg" style={{ paddingTop: "56.25%" }}>
                                                {block.src && (
                                                    <iframe
                                                        src={block.src}
                                                        title={`Video ${index}`}
                                                        className="absolute top-0 left-0 w-full h-full"
                                                        allowFullScreen
                                                    ></iframe>
                                                )}
                                            </div>
                                        </div>
                                    );
                                }
                                return null;
                            })}
                        </div>
                    </div>

                    {/* Author Bio */}
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 md:p-12 border-t border-gray-100 dark:border-gray-700">
                        <div className="flex items-start gap-4">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                                L
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                    Escrito por Luchodev
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                                    Desarrollador Full-Stack y emprendedor digital. Fundador de PukaDigital, especializado en crear experiencias web modernas y estrategias de marketing digital efectivas.
                                </p>
                                <div className="flex items-center gap-4">
                                    <a 
                                        href="https://www.linkedin.com/in/luisviteri/" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
                                    >
                                        LinkedIn
                                    </a>
                                    <span className="text-gray-300 dark:text-gray-600">•</span>
                                    <a 
                                        href="https://github.com/LuchoProgramer" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
                                    >
                                        GitHub
                                    </a>
                                    <span className="text-gray-300 dark:text-gray-600">•</span>
                                    <a 
                                        href="mailto:luis.viteri@pukadigital.com"
                                        className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
                                    >
                                        Contacto
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Comments Section */}
                <div className="mt-12">
                    <Comments blogId={blog.id} />
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;