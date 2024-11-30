export interface BlogBlock {
    type: "text" | "image" | "video";
    content?: string; // Para bloques de texto
    src?: string; // Para imágenes o videos
    alt?: string; // Para descripciones de imágenes
}

export interface Blog {
    id: string; // ID del blog (obligatorio)
    title: string; // Título del blog (obligatorio)
    content: string; // Contenido del blog (obligatorio)
    createdAt: Date | null; // Fecha de creación (puede ser nula)
    slug: string; // Slug (obligatorio)
    image?: string | null;
    alt?: string; // Texto alternativo para la imagen (opcional)
    excerpt?: string; // Resumen o extracto del contenido (opcional)
    blocks: BlogBlock[]; // Array de bloques de contenido
}
