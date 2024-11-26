"use client";

import React, { useRef, useEffect, useContext } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ThemeContext } from "@/context/ThemeContext";

interface RichTextEditorProps {
    value: string;
    onChange: (data: string) => void;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ value, onChange }) => {
    const editorRef = useRef<any>(null);
    const themeContext = useContext(ThemeContext);

    // Validar que el contexto esté disponible
    if (!themeContext) {
        throw new Error("RichTextEditor debe usarse dentro de ThemeProvider");
    }

    const { isDark } = themeContext;

    // Cambiar estilo del editor dinámicamente según el tema
    useEffect(() => {
        if (editorRef.current) {
            const editor = editorRef.current;
            editor.editing.view.change((writer: any) => {
                writer.setStyle(
                    "background-color",
                    isDark ? "#2d3748" : "#ffffff",
                    editor.editing.view.document.getRoot()
                );
                writer.setStyle(
                    "color",
                    isDark ? "#ffffff" : "#000000",
                    editor.editing.view.document.getRoot()
                );
            });
        }
    }, [isDark]);

    return (
        <CKEditor
            editor={ClassicEditor}
            data={value}
            onReady={(editor: any) => {
                editorRef.current = editor;
                editor.editing.view.change((writer: any) => {
                    writer.setStyle(
                        "background-color",
                        isDark ? "#2d3748" : "#ffffff",
                        editor.editing.view.document.getRoot()
                    );
                    writer.setStyle(
                        "color",
                        isDark ? "#ffffff" : "#000000",
                        editor.editing.view.document.getRoot()
                    );
                });
            }}
            onChange={(event: any, editor: any) => {
                const data = editor.getData();
                onChange(data);
            }}
            config={{
                toolbar: [
                    "heading",
                    "|",
                    "bold",
                    "italic",
                    "link",
                    "bulletedList",
                    "numberedList",
                    "blockQuote",
                    "|",
                    "insertTable",
                    "mediaEmbed",
                    "|",
                    "undo",
                    "redo",
                ],
            }}
        />
    );
};

export default RichTextEditor;
