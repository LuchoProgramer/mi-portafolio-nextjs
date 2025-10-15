"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

// Definimos el tipo de usuario (Firebase User)
interface User {
    displayName?: string | null;
    photoURL?: string | null;
    uid: string;
}

// Props del componente
interface UserMenuProps {
    user: User | null;
    role: string | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ user, role }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Uso de useCallback para memorizar las funciones y evitar recrearlas en cada render
    const toggleUserMenu = useCallback(() => setMenuOpen((prev) => !prev), []);

    const handleSignOut = useCallback(async () => {
        try {
            await signOut(auth);
            setMenuOpen(false);
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    }, []);

    const renderAvatar = () => {
        const ariaLabel = user?.displayName ? `Menú de usuario: ${user.displayName}` : "Menú de usuario";

        if (user?.photoURL) {
            return (
                <img
                    src={user.photoURL}
                    alt={user.displayName || "Usuario"}
                    className="w-8 h-8 rounded-full cursor-pointer"
                    onClick={toggleUserMenu}
                    aria-label={ariaLabel}
                    aria-haspopup="true"
                    aria-expanded={menuOpen ? "true" : "false"}
                />
            );
        }

        const initial = user?.displayName?.charAt(0).toUpperCase() || "U";
        return (
            <div
                className="w-8 h-8 bg-primary-light text-primary-dark rounded-full flex items-center justify-center cursor-pointer"
                onClick={toggleUserMenu}
                aria-label={ariaLabel}
                aria-haspopup="true"
                aria-expanded={menuOpen ? "true" : "false"}
            >
                {initial}
            </div>
        );
    };

    return (
        <div className="relative">
            {/* Avatar del Usuario */}
            {renderAvatar()}

            {/* Menú Desplegable */}
            {menuOpen && (
                <div className="absolute right-0 mt-2 bg-white text-black shadow-lg rounded-lg py-2 w-48 z-30 dark:bg-gray-800 dark:text-gray-200">
                    <ul>
                        {/* Enlaces para Admin */}
                        {role === "admin" && (
                            <>
                                <li>
                                    <Link
                                        href="/cms/blogs/dashboard"
                                        className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        CMS Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/cms/blogs/create"
                                        className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        Crear Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/cms/blogs"
                                        className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        Lista de Blogs
                                    </Link>
                                </li>
                            </>
                        )}

                        {/* Opción para Cerrar Sesión */}
                        <li>
                            <button
                                onClick={handleSignOut}
                                className="block w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                            >
                                Cerrar sesión
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

// Memoizamos el componente para evitar re-renderizados innecesarios
export default React.memo(UserMenu);