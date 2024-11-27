"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import RichTextEditor from "@/cms/RichTextEditor";
import ImageUploader from "@/cms/ImageUploader";
import VideoEmbedder from "@/cms/VideoEmbedder";
import { uploadImageToCloudinary } from "@/utils/cloudinary";


const BlogEdit = ({ params }: { params: { id: string } }) => {
    const router = useRouter();
    const { id } = params;

    const [title, setTitle] = useState<string>("");
    const [blocks, setBlocks] = useState<any[]>([]);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const blogDoc = await getDoc(doc(db, "blogs", id));
                if (blogDoc.exists()) {
                    const blogData = blogDoc.data();
                    setTitle(blogData.title || "");
                    setBlocks(blogData.blocks || []);
                } else {
                    setError("El blog no existe.");
                }
            } catch (err) {
                console.error("Error al cargar el blog:", err);
                setError("Error al cargar el blog.");
            }
        };

        fetchBlog();
    }, [id]);

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
    const handleAddVideo = (url: string) => {
        setBlocks([...blocks, { type: "video", src: url }]);
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

    // Guardar cambios en Firestore
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!title.trim() || blocks.length === 0) {
            setError("Por favor, completa el título y agrega al menos un bloque.");
            return;
        }

        setIsSubmitting(true);
        setError("");

        try {
            await updateDoc(doc(db, "blogs", id), {
                title: title.trim(),
                blocks,
                updatedAt: new Date(),
            });

            alert("Blog actualizado exitosamente");
            router.push(`/blog/${id}`);
        } catch (err: any) {
            console.error("Error al actualizar el blog:", err.message);
            setError(`Hubo un error al actualizar el blog: ${err.message}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="py-12 mt-6 max-w-4xl mx-auto p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">Editar Blog</h2>
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
                                <div>
                                    <img src={block.src} alt={block.alt || "Imagen"} className="max-w-full h-auto rounded" />
                                    <input
                                        type="text"
                                        value={block.alt || ""}
                                        onChange={(e) =>
                                            handleBlockChange(index, { ...block, alt: e.target.value })
                                        }
                                        placeholder="Descripción de la imagen"
                                        className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md"
                                    />
                                </div>
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
                    {isSubmitting ? "Guardando..." : "Guardar Cambios"}
                </button>
            </form>
        </div>
    );
};

export default BlogEdit;