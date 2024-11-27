import React from "react";
import BlogEdit from "@/cms/components/BlogEdit"; // Ruta al componente de edición de blogs

interface Props {
    params: { id: string }; // El objeto params contendrá el ID dinámico de la ruta
}

const EditBlogPage: React.FC<Props> = ({ params }) => {
    const { id } = params;

    return (
        <div>
            <BlogEdit params={{ id }} />
        </div>
    );
};

export default EditBlogPage;
