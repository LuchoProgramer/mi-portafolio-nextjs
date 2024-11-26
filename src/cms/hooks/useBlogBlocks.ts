import { useState } from "react";

// Define una interfaz para un bloque genérico
interface Block {
    type: string;
    content?: any;
    src?: string;
}

export const useBlogBlocks = () => {
    const [blocks, setBlocks] = useState<Block[]>([]); // Estado de bloques

    // Agregar un bloque
    const addBlock = (type: string, content: Partial<Block> = {}) => {
        const newBlock: Block = { type, ...content };
        setBlocks((prevBlocks) => [...prevBlocks, newBlock]);
    };

    // Actualizar un bloque
    const updateBlock = (index: number, updatedBlock: Partial<Block>) => {
        setBlocks((prevBlocks) =>
            prevBlocks.map((block, i) =>
                i === index ? { ...block, ...updatedBlock } : block
            )
        );
    };

    // Eliminar un bloque
    const removeBlock = (index: number) => {
        setBlocks((prevBlocks) => prevBlocks.filter((_, i) => i !== index));
    };

    return { blocks, addBlock, updateBlock, removeBlock };
};