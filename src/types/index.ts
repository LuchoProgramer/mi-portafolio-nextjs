// Define el tipo de bloque de contenido en el blog
export interface BlogBlock {
    type: "text" | "image" | "video";
    content?: string; // Para bloques de texto
    src?: string; // Para imágenes o videos
    alt?: string; // Para descripciones de imágenes
}

// Definimos la interfaz para un Blog
export interface Blog {
    id: string;
    content: string;
    createdAt: Date;
    blocks: BlogBlock[];
    image?: string;  // Ahora `image` es opcional y solo puede ser una cadena o undefined
    alt?: string; // `alt` es opcional y puede ser una cadena o undefined
    title: string;
    excerpt?: string;
    slug: string;
}

export default Blog;  // Exportación por defecto