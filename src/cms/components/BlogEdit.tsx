"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useBlogBlocks } from "@/cms/hooks/useBlogBlocks";
import { useCreateBlog } from "@/cms/hooks/useCreateBlog";
import RichTextEditor from "@/cms/RichTextEditor";
import ImageUploader from "@/cms/ImageUploader";
import VideoEmbedder from "@/cms/VideoEmbedder";

const BlogEdit = ({ params }: { params: { id: string } }) => {
    const router = useRouter();
    const { id } = params;

    const [title, setTitle] = useState<string>("");
    const { blocks, addBlock, updateBlock, removeBlock } = useBlogBlocks();
    const { updateBlog, isSubmitting, error, setError } = useCreateBlog();

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const blogDoc = await getDoc(doc(db, "blogs", id));
                if (blogDoc.exists()) {
                    const blogData = blogDoc.data();
                    setTitle(blogData.title || "");
                    blogData.blocks.forEach((block: any) => addBlock(block.type, block));
                } else {
                    setError("El blog no existe.");
                }
            } catch (err) {
                console.error("Error al cargar el blog:", err);
                setError("Error al cargar el blog.");
            }
        };

        fetchBlog();
    }, [id, addBlock, setError]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!title.trim() || blocks.length === 0) {
            setError("Por favor, completa el título y agrega al menos un bloque.");
            return;
        }

        const success = await updateBlog(id, title, blocks);
        if (success) {
            router.push(`/blog/${success}`);
        }
    };

    return (
        <div className="py-8 mt-8 max-w-4xl mx-auto p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
                Editar Blog
            </h2>
            {error && <div className="mb-4 text-red-500 text-center">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label
                        htmlFor="title"
                        className="block text-gray-700 dark:text-gray-200 font-semibold mb-2"
                    >
                        Título
                    </label>
                    <input
                        id="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Título del blog"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                    />
                </div>

                <div className="mb-6">
                    <div className="space-y-4">
                        {blocks.map((block, index) => (
                            <div
                                key={index}
                                className="p-4 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 shadow-sm"
                            >
                                {block.type === "text" && (
                                    <RichTextEditor
                                        value={block.content || ""}
                                        onChange={(content) =>
                                            updateBlock(index, { ...block, content })
                                        }
                                    />
                                )}
                                {block.type === "image" && (
                                    <div>
                                        <img
                                            src={block.src || ""}
                                            alt={block.alt || "Imagen del blog"}
                                            className="max-w-full h-auto rounded"
                                        />
                                        <input
                                            type="text"
                                            value={block.alt || ""}
                                            onChange={(e) =>
                                                updateBlock(index, { ...block, alt: e.target.value })
                                            }
                                            placeholder="Descripción de la imagen"
                                            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                                        />
                                    </div>
                                )}
                                {block.type === "video" && (
                                    <div className="relative" style={{ paddingTop: "56.25%" }}>
                                        <iframe
                                            src={block.src || ""}
                                            title={`Video ${index}`}
                                            className="absolute top-0 left-0 w-full h-full rounded"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                )}
                                <button
                                    type="button"
                                    onClick={() => removeBlock(index)}
                                    className="mt-2 text-red-500 hover:text-red-600"
                                >
                                    Eliminar
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 border-t border-gray-300 dark:border-gray-700 pt-6">
                        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                            Agregar Bloques
                        </h3>
                        <div className="flex flex-wrap gap-4">
                            <button
                                type="button"
                                onClick={() => addBlock("text", "")}
                                className="flex-1 min-w-[120px] bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                            >
                                Agregar Texto
                            </button>
                            <ImageUploader onUpload={(url) => addBlock("image", { src: url })} />
                            <VideoEmbedder onEmbed={(url) => addBlock("video", { src: url })} />
                        </div>
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md transition duration-200 ${isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
                        }`}
                >
                    {isSubmitting ? "Guardando Cambios..." : "Guardar Cambios"}
                </button>
            </form>
        </div>
    );
};

export default BlogEdit;