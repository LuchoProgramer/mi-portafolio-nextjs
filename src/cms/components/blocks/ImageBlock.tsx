import React from 'react';
import BlockWrapper from './BlockWrapper';

interface ImageBlockProps {
    block: {
        src: string;
        alt: string;
    };
    index: number;
    updateBlock: (index: number, updatedBlock: { src: string; alt: string }) => void;
    removeBlock: (index: number) => void;
}

const ImageBlock: React.FC<ImageBlockProps> = ({ block, index, updateBlock, removeBlock }) => {
    return (
        <BlockWrapper onRemove={() => removeBlock(index)}>
            <img
                src={block.src}
                alt={block.alt || 'Imagen del blog'}
                className="max-w-full rounded"
            />
            <input
                type="text"
                value={block.alt}
                onChange={(e) =>
                    updateBlock(index, { ...block, alt: e.target.value })
                }
                placeholder="Descripción de la imagen"
                className="mt-2 w-full p-2 border rounded"
            />
        </BlockWrapper>
    );
};

export default ImageBlock;