"use client";

import React, { useRef, useEffect, useContext } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ThemeContext } from "@/context/ThemeContext";
import type { Editor } from '@ckeditor/ckeditor5-core';

interface RichTextEditorProps {
    value: string;
    onChange: (data: string) => void;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ value, onChange }) => {
    const editorRef = useRef<Editor>(null);
    const themeContext = useContext(ThemeContext);

    if (!themeContext) {
        throw new Error("RichTextEditor debe usarse dentro de ThemeProvider");
    }

    const { isDark } = themeContext;

    const updateEditorStyle = (editor: Editor, isDark: boolean) => {
        const root = editor.editing.view.document.getRoot();
        if (root) { // Verifica si 'root' no es null
            editor.editing.view.change((writer) => {
                writer.setStyle(
                    "background-color",
                    isDark ? "#2d3748" : "#ffffff",
                    root // Usa 'root' aquí
                );
                writer.setStyle(
                    "color",
                    isDark ? "#ffffff" : "#000000",
                    root // Usa 'root' aquí
                );
            });
        }
    };

    useEffect(() => {
        if (editorRef.current) {
            updateEditorStyle(editorRef.current, isDark);
        }
    }, [isDark]);

    return (
        <CKEditor
            editor={ClassicEditor}
            data={value}
            onReady={(editor: Editor) => {
                updateEditorStyle(editor, isDark);
            }}
            onChange={(event: any, editor: Editor) => {
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
