"use client";

import React, { createContext, useState, useEffect, ReactNode, useContext } from "react";

// Define el tipo del contexto
interface ThemeContextType {
    isDark: boolean;
    toggleTheme: () => void;
}

// Contexto con valor inicial
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [isDark, setIsDark] = useState(false);

    // Recuperar el tema de localStorage o usar preferencia del sistema
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
            setIsDark(storedTheme === "dark");
        } else {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setIsDark(prefersDark);
        }
    }, []);

    // Actualizar el tema en el DOM y localStorage
    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", isDark ? "dark" : "light");
    }, [isDark]);

    const toggleTheme = () => setIsDark((prev) => !prev);

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Hook personalizado para usar el contexto
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme debe usarse dentro de ThemeProvider");
    }
    return context;
};