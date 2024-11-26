import React from "react";
import BlockWrapper from "./BlockWrapper";
import RichTextEditor from "../../RichTextEditor";

// Define la estructura de un bloque
interface Block {
    type: string;
    content: string;
}

// Define las propiedades del componente TextBlock
interface TextBlockProps {
    block: Block; // El bloque que se edita
    index: number; // Índice del bloque en la lista
    updateBlock: (index: number, updatedBlock: Block) => void; // Función para actualizar el bloque
    removeBlock: (index: number) => void; // Función para eliminar el bloque
}

const TextBlock: React.FC<TextBlockProps> = ({ block, index, updateBlock, removeBlock }) => (
    <BlockWrapper onRemove={() => removeBlock(index)}>
        <RichTextEditor
            value={block.content}
            onChange={(content) => updateBlock(index, { ...block, content })}
        />
    </BlockWrapper>
);

export default TextBlock;

