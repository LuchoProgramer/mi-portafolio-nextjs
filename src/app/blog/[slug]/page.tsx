import { Metadata } from "next";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase"; // Ajusta según tu configuración
import { Blog } from "@/types"; // Asegúrate de que Blog incluya blocks
import Comments from "@/components/blogs/Comments";

interface BlogDetailProps {
    params: { slug: string };
}

// Obtener los metadatos dinámicos
export async function generateMetadata({ params }: BlogDetailProps): Promise<Metadata> {
    const blog = await getBlogBySlug(params.slug);
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
            url: `https://luchodev.netlify.app/blog/${params.slug}`,
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

// Función para obtener un blog por slug
const getBlogBySlug = async (slug: string): Promise<Blog | null> => {
    try {
        const blogsRef = collection(db, "blogs");
        const q = query(blogsRef, where("slug", "==", slug));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            const blogDoc = querySnapshot.docs[0];
            const data = blogDoc.data() as Blog;

            return { ...data, id: blogDoc.id }; // Reordenar para evitar sobrescritura
        }

        return null;
    } catch (error) {
        console.error("Error al obtener el blog:", error);
        return null;
    }
};

// Página dinámica
const BlogDetail = async ({ params }: BlogDetailProps) => {
    const blog = await getBlogBySlug(params.slug);

    if (!blog) {
        return (
            <p className="text-center mt-6 text-red-500 dark:text-red-400">
                No se encontró un blog con este slug.
            </p>
        );
    }

    return (
        <div className="max-w-3xl mx-auto p-4 mt-12 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
                {blog.title}
            </h2>
            {/* Renderizar bloques dinámicamente */}
            <div className="space-y-6">
                {blog.blocks.map((block, index) => {
                    if (block.type === "text") {
                        return (
                            <div
                                key={index}
                                className="prose prose-lg dark:prose-invert"
                                dangerouslySetInnerHTML={{ __html: block.content || "" }}
                            />
                        );
                    }
                    if (block.type === "image") {
                        return (
                            <div key={index} className="flex justify-center">
                                <img
                                    src={block.src}
                                    alt={block.alt || `Imagen del blog ${index}`}
                                    className="rounded-lg shadow-md"
                                />
                            </div>
                        );
                    }
                    if (block.type === "video") {
                        return (
                            <div key={index} className="relative" style={{ paddingTop: "56.25%" }}>
                                <iframe
                                    src={block.src}
                                    title={`Video ${index}`}
                                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
            {/* Componente de Comentarios */}
            <Comments blogId={blog.id} />
        </div>
    );
};

export default BlogDetail;