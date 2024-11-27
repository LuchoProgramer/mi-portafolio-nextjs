import React, { useState } from "react";
import { db } from "../../lib/firebase"; // Ajusta la ruta según tu estructura
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import RichTextEditor from "../RichTextEditor"; // Asegúrate de que el componente exista
import { uploadImageToCloudinary } from "../../utils/cloudinary"; // Para manejar imágenes
import { generateSlug } from "../../utils/slugGenerator"; // Importa tu generador de slugs
import { parseVideoUrl } from "../../utils/videoUtils"; // Importa la utilidad de URLs de video
import dynamic from "next/dynamic";

// Carga dinámica para componentes no compatibles con SSR
const ImageUploader = dynamic(() => import("../ImageUploader"), { ssr: false });
const VideoEmbedder = dynamic(() => import("../VideoEmbedder"), { ssr: false });

const BlogCreate: React.FC = () => {
    const [title, setTitle] = useState<string>("");
    const [blocks, setBlocks] = useState<any[]>([]);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    // Agregar un bloque de texto
    const handleAddText = () => {
        setBlocks([...blocks, { type: "text", content: "" }]);
    };

    // Agregar un bloque de imagen
    const handleAddImage = async (file: File) => {
        try {
            const url = await uploadImageToCloudinary(file);
            const alt = prompt("Describe brevemente la imagen:") || "Imagen relacionada con el blog";
            setBlocks([...blocks, { type: "image", src: url, alt }]);
        } catch (error: any) {
            console.error("Error al subir la imagen:", error.message);
        }
    };

    // Agregar un bloque de video
    const handleAddVideo = async (url: string) => {
        try {
            const parsedUrl = await parseVideoUrl(url);
            if (parsedUrl) {
                setBlocks([...blocks, { type: "video", src: parsedUrl }]);
            } else {
                alert("La URL proporcionada no es válida o no es compatible.");
            }
        } catch (error) {
            console.error("Error procesando la URL del video:", error);
            alert("Ocurrió un error al procesar la URL del video.");
        }
    };


    // Actualizar un bloque
    const handleBlockChange = (index: number, updatedBlock: any) => {
        const updatedBlocks = [...blocks];
        updatedBlocks[index] = updatedBlock;
        setBlocks(updatedBlocks);
    };

    // Eliminar un bloque
    const handleRemoveBlock = (index: number) => {
        setBlocks(blocks.filter((_, i) => i !== index));
    };

    // Verificar unicidad del slug
    const checkSlugExists = async (slug: string): Promise<boolean> => {
        const q = query(collection(db, "blogs"), where("slug", "==", slug));
        const querySnapshot = await getDocs(q);
        return !querySnapshot.empty;
    };

    // Crear el blog
    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!title.trim() || blocks.length === 0) {
            setError("Por favor, completa el título y agrega al menos un bloque.");
            return;
        }

        setIsSubmitting(true);
        setError("");

        try {
            let slug = generateSlug(title);

            // Verificar si el slug ya existe
            if (await checkSlugExists(slug)) {
                slug = `${slug}-${Date.now()}`;
            }

            // Obtener la primera imagen y el resumen del texto
            const firstImageBlock = blocks.find((block) => block.type === "image");
            const firstTextBlock = blocks.find((block) => block.type === "text");

            const image = firstImageBlock?.src || null;
            const excerpt =
                firstTextBlock?.content?.replace(/<[^>]*>?/gm, "").substring(0, 100) + "..." || "No hay contenido disponible.";

            // Guardar el blog en Firestore
            await addDoc(collection(db, "blogs"), {
                title: title.trim(),
                slug,
                blocks,
                image,
                excerpt,
                createdAt: new Date(),
            });

            alert("Blog creado exitosamente");
            setTitle("");
            setBlocks([]);
        } catch (err: any) {
            console.error("Error al crear el blog:", err.message);
            setError(`Hubo un error al crear el blog: ${err.message}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="py-12 mt-6 max-w-4xl mx-auto p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">Crear Nuevo Blog</h2>
            {error && <div className="mb-4 text-red-500 text-center">{error}</div>}
            <form onSubmit={handleCreate}>
                {/* Campo de título */}
                <div className="mb-6">
                    <label htmlFor="title" className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">
                        Título
                    </label>
                    <input
                        id="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Título del blog"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900"
                        required
                    />
                </div>

                {/* Lista de bloques */}
                <div className="mb-6 space-y-4">
                    {blocks.map((block, index) => (
                        <div
                            key={index}
                            className="relative p-8 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 w-full h-[315px]"
                        >
                            <button
                                type="button"
                                onClick={() => handleRemoveBlock(index)}
                                className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
                            >
                                X
                            </button>
                            {block.type === "text" && (
                                <RichTextEditor
                                    value={block.content}
                                    onChange={(content) => handleBlockChange(index, { ...block, content })}
                                />
                            )}
                            {block.type === "image" && (
                                <img src={block.src} alt={block.alt || "Imagen"} className="max-w-full h-auto rounded" />
                            )}
                            {block.type === "video" && (
                                <iframe src={block.src} className="w-full h-auto rounded" allowFullScreen title={`Video ${index}`} />
                            )}
                        </div>
                    ))}
                </div>

                {/* Botones para agregar bloques */}
                <div className="mt-6 flex gap-4">
                    <button type="button" onClick={handleAddText} className="px-4 py-2 bg-blue-500 text-white rounded-md">
                        Agregar Texto
                    </button>
                    <ImageUploader
                        onUpload={(url: string) => {
                            const alt = prompt("Describe brevemente la imagen:") || "Imagen relacionada con el blog";
                            setBlocks((prevBlocks) => [...prevBlocks, { type: "image", src: url, alt }]);
                        }}
                    />
                    <VideoEmbedder onEmbed={handleAddVideo} />
                </div>

                {/* Botón de guardar */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`mt-6 w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md ${isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
                        }`}
                >
                    {isSubmitting ? "Guardando..." : "Crear Blog"}
                </button>
            </form>
        </div>
    );
};

export default BlogCreate;