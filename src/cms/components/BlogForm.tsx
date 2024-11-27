"use client";

import React, { useState, useEffect } from "react";
import { db } from "../../lib/firebase";
import { collection, doc, getDoc, addDoc, updateDoc, query, where, getDocs } from "firebase/firestore";
import RichTextEditor from "../RichTextEditor";
import { uploadImageToCloudinary } from "../../utils/cloudinary";
import { generateSlug } from "../../utils/slugGenerator";
import { parseVideoUrl } from "../../utils/videoUtils";
import dynamic from "next/dynamic";

// Carga dinámica para componentes no compatibles con SSR
const ImageUploader = dynamic(() => import("../ImageUploader"), { ssr: false });
const VideoEmbedder = dynamic(() => import("../VideoEmbedder"), { ssr: false });

interface BlogFormProps {
    isEditMode?: boolean;
    blogId?: string;
    onSuccess?: (blogId: string) => void;
}

const BlogForm: React.FC<BlogFormProps> = ({ isEditMode = false, blogId, onSuccess }) => {
    const [title, setTitle] = useState<string>("");
    const [blocks, setBlocks] = useState<any[]>([]);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    // Cargar el script de TikTok para bloques de video
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://www.tiktok.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    // Cargar datos si estamos en modo edición
    useEffect(() => {
        if (isEditMode && blogId) {
            const fetchBlog = async () => {
                try {
                    const docRef = doc(db, "blogs", blogId);
                    const docSnap = await getDoc(docRef);

                    if (docSnap.exists()) {
                        const blogData = docSnap.data();
                        setTitle(blogData.title || ""); // Establece el título
                        setBlocks(blogData.blocks || []); // Establece los bloques
                    } else {
                        alert("El blog no existe.");
                    }
                } catch (error) {
                    console.error("Error al cargar el blog:", error);
                    alert("Hubo un error al cargar el blog.");
                }
            };

            fetchBlog();
        }
    }, [isEditMode, blogId]);

    // Añadir bloques al blog
    const handleAddText = () => {
        setBlocks([...blocks, { type: "text", content: "" }]);
    };

    const handleAddImage = async (file: File) => {
        try {
            const url = await uploadImageToCloudinary(file);
            const alt = prompt("Describe brevemente la imagen:") || "Imagen relacionada con el blog";
            setBlocks([...blocks, { type: "image", src: url, alt }]);
        } catch (error: any) {
            console.error("Error al subir la imagen:", error.message);
        }
    };

    const handleAddVideo = (url: string) => {
        const parsedUrl = parseVideoUrl(url);
        if (parsedUrl) {
            setBlocks([...blocks, { type: "video", src: parsedUrl }]);
        } else {
            alert("La URL proporcionada no es válida o no es compatible.");
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

    // Crear o actualizar el blog
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!title.trim() || blocks.length === 0) {
            setError("Por favor, completa el título y agrega al menos un bloque.");
            return;
        }

        setIsSubmitting(true);
        setError("");

        try {
            let slug = generateSlug(title);

            // Verificar unicidad del slug si estamos creando
            if (!isEditMode) {
                const q = query(collection(db, "blogs"), where("slug", "==", slug));
                const querySnapshot = await getDocs(q);
                if (!querySnapshot.empty) {
                    slug = `${slug}-${Date.now()}`;
                }
            }

            // Preparar datos del blog
            const firstImageBlock = blocks.find((block) => block.type === "image");
            const firstTextBlock = blocks.find((block) => block.type === "text");
            const image = firstImageBlock?.src || null;
            const excerpt =
                firstTextBlock?.content?.replace(/<[^>]*>?/gm, "").substring(0, 100) + "..." || "No hay contenido disponible.";

            const blogData = {
                title: title.trim(),
                slug,
                blocks,
                image,
                excerpt,
                updatedAt: new Date(),
            };

            if (isEditMode && blogId) {
                await updateDoc(doc(db, "blogs", blogId), blogData);
                alert("Blog actualizado exitosamente");
                if (onSuccess) onSuccess(blogId);
            } else {
                const docRef = await addDoc(collection(db, "blogs"), {
                    ...blogData,
                    createdAt: new Date(),
                });
                alert("Blog creado exitosamente");
                if (onSuccess) onSuccess(docRef.id);
            }

            setTitle("");
            setBlocks([]);
        } catch (err: any) {
            console.error("Error al guardar el blog:", err.message);
            setError(`Hubo un error al guardar el blog: ${err.message}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Renderizado del componente
    return (
        <div className="py-12 mt-6 max-w-4xl mx-auto p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
                {isEditMode ? "Editar Blog" : "Crear Nuevo Blog"}
            </h2>
            {error && <div className="mb-4 text-red-500 text-center">{error}</div>}
            <form onSubmit={handleSubmit}>
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
                            className="relative p-8 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700"
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
                                block.src.includes("tiktok.com") ? (
                                    <blockquote
                                        className="tiktok-embed"
                                        cite={block.src}
                                        data-video-id={new URL(block.src).pathname.split("/").pop()}
                                        style={{ maxWidth: "605px", margin: "auto" }}
                                    >
                                        <section> </section>
                                    </blockquote>
                                ) : (
                                    <iframe
                                        src={block.src}
                                        className="w-full h-auto rounded"
                                        allowFullScreen
                                        title={`Video ${index}`}
                                    />
                                )
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
                    {isSubmitting ? "Guardando..." : isEditMode ? "Guardar Cambios" : "Crear Blog"}
                </button>
            </form>
        </div>
    );
};

export default BlogForm;