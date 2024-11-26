import React from "react";
import BlockWrapper from "./BlockWrapper";

// Define la estructura del bloque
interface VideoBlockProps {
    block: {
        src: string; // La URL del video
    };
    index: number; // Índice del bloque
    removeBlock: (index: number) => void; // Función para eliminar el bloque
}

const VideoBlock: React.FC<VideoBlockProps> = ({ block, index, removeBlock }) => (
    <BlockWrapper onRemove={() => removeBlock(index)}>
        <iframe
            src={block.src}
            title={`Video ${index}`}
            className="w-full rounded"
            allowFullScreen
        />
    </BlockWrapper>
);

export default VideoBlock;