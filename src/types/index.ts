export interface BlogBlock {
    type: "text" | "image" | "video";
    content?: string; // Para bloques de texto
    src?: string; // Para imágenes o videos
    alt?: string; // Para descripciones de imágenes
}
