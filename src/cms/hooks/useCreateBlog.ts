import { useState } from "react";
import { doc, updateDoc, collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { generateSlug } from "../../utils/slugGenerator";

// Funciones auxiliares
const getFirstImageBlock = (blocks: any[]) => blocks.find((block) => block.type === "image")?.src || null;

const getExcerptFromBlocks = (blocks: any[]) => {
    const firstTextBlock = blocks.find((block) => block.type === "text");
    return firstTextBlock
        ? firstTextBlock.content.replace(/<[^>]*>?/gm, "").substring(0, 100) + "..."
        : "No hay contenido disponible.";
};

const prepareBlogData = (title: string, blocks: any[]) => {
    const slug = generateSlug(title);
    const image = getFirstImageBlock(blocks);
    const excerpt = getExcerptFromBlocks(blocks);

    return {
        title: title.trim(),
        slug,
        blocks,
        image,
        excerpt,
    };
};

// Hook principal
export const useCreateBlog = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");

    const checkSlugExists = async (slug: string): Promise<boolean> => {
        try {
            const q = query(collection(db, "blogs"), where("slug", "==", slug));
            const querySnapshot = await getDocs(q);
            return !querySnapshot.empty;
        } catch (err) {
            console.error("Error checking slug:", err);
            throw new Error("Error verificando la unicidad del slug.");
        }
    };

    const createBlog = async (title: string, blocks: any[]) => {
        if (!title.trim() || blocks.length === 0) {
            setError("Por favor, completa el título y agrega al menos un bloque.");
            return false;
        }

        setIsSubmitting(true);
        setError("");

        try {
            let blogData = prepareBlogData(title, blocks);
            if (await checkSlugExists(blogData.slug)) {
                blogData.slug = `${blogData.slug}-${Date.now()}`;
            }

            await addDoc(collection(db, "blogs"), {
                ...blogData,
                createdAt: new Date(),
            });

            return blogData.slug;
        } catch (err: any) {
            setError(`Hubo un error al crear el blog: ${err.message}`);
            return false;
        } finally {
            setIsSubmitting(false);
        }
    };

    const updateBlog = async (id: string, title: string, blocks: any[]) => {
        if (!title.trim() || blocks.length === 0) {
            setError("Por favor, completa el título y agrega al menos un bloque.");
            return false;
        }

        setIsSubmitting(true);
        setError("");

        try {
            let blogData = prepareBlogData(title, blocks);
            if (await checkSlugExists(blogData.slug)) {
                blogData.slug = `${blogData.slug}-${Date.now()}`;
            }

            await updateDoc(doc(db, "blogs", id), {
                ...blogData,
                updatedAt: new Date(),
            });

            return blogData.slug;
        } catch (err: any) {
            setError(`Hubo un error al actualizar el blog: ${err.message}`);
            return false;
        } finally {
            setIsSubmitting(false);
        }
    };

    return { createBlog, updateBlog, isSubmitting, error, setError };
};