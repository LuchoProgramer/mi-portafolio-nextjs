import React from "react";

interface BlockWrapperProps {
    onRemove: () => void;
    children: React.ReactNode;
}

const BlockWrapper: React.FC<BlockWrapperProps> = ({ onRemove, children }) => {
    return (
        <div className="relative p-4 border rounded bg-white dark:bg-gray-700">
            <button
                onClick={onRemove}
                className="absolute top-2 right-2 text-red-500 hover:text-red-600"
            >
                X
            </button>
            {children}
        </div>
    );
};

export default BlockWrapper;