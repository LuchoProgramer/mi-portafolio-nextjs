"use client";

import React, { useRef, useEffect, useCallback } from "react"; // Importa useRef, useEffect y useCallback
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";
import { FiMenu, FiX } from "react-icons/fi";
import ToggleDarkMode from "@/components/common/ToggleDarkMode";
import NavigationMenu from "@/components/Header/NavigationMenu";
import UserMenu from "@/components/Header/UserMenu";
import Modal from "@/components/common/Modal";
import SignIn from "@/components/auth/SignIn";
import SignUp from "@/components/auth/SignUp";
import useUserRole from "@/hooks/useUserRole";
import useModal from "@/hooks/useModal";
import useNavigationMenu from "@/hooks/useNavigationMenu";

// Usamos React.memo para los componentes que no cambian frecuentemente
const MemoizedNavigationMenu = React.memo(NavigationMenu);
const MemoizedUserMenu = React.memo(UserMenu);
const MemoizedModal = React.memo(Modal);

const Header = () => {
    const [user] = useAuthState(auth);
    const { role, loading: roleLoading, error: roleError } = useUserRole(user ?? null);

    const {
        isModalOpen,
        isSignIn,
        openModal,
        openSignUpModal,
        closeModal,
        switchToSignUp,
        switchToSignIn,
    } = useModal();

    const { isOpen, toggleMenu, closeMenu } = useNavigationMenu();
    const menuRef = useRef<HTMLDivElement>(null); // Agrega una ref al elemento del menú

    const handleClickOutside = useCallback(
        (event: MouseEvent) => {
            if (isOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
                closeMenu();
            }
        },
        [isOpen, closeMenu]
    );

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }
    }, [isOpen, handleClickOutside]);

    return (
        <header className="bg-primary-dark text-white p-4 fixed w-full z-20 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link
                    href="/"
                    className="font-mono bg-gray-800 rounded flex items-center px-2 py-0.5 text-sm md:px-3 md:py-1 md:text-lg"
                    aria-label="Inicio"
                >
                    {"<Lucho_dev />"}
                    <span className="ml-1 w-1 bg-white animate-pulse h-4 md:h-5"></span>
                </Link>

                {/* Contenedor del menú y opciones de usuario */}
                <div className="flex items-center space-x-4">
                    {/* Menú de Navegación */}
                    <div ref={menuRef}>
                        <MemoizedNavigationMenu
                            isOpen={isOpen}
                            toggleMenu={toggleMenu}
                            user={user != null}
                        />
                    </div>

                    {/* Toggle Dark Mode */}
                    <ToggleDarkMode />

                    {/* Opciones de autenticación */}
                    {roleLoading ? (
                        <p>Cargando...</p>
                    ) : roleError ? (
                        <p>Error: {roleError}</p>
                    ) : user != null ? (
                        <MemoizedUserMenu user={user} role={role || "viewer"} />
                    ) : (
                        <div className="hidden md:flex space-x-4">
                            <button
                                onClick={openModal}
                                className="text-white hover:text-primary-light"
                            >
                                Iniciar sesión
                            </button>
                            <button
                                onClick={openSignUpModal}
                                className="text-white hover:text-primary-light"
                            >
                                Registrarse
                            </button>
                        </div>
                    )}

                    {/* Botón de Menú para Móviles */}
                    <button
                        onClick={toggleMenu}
                        aria-label="Abrir menú"
                        className="md:hidden focus:outline-none"
                    >
                        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Modal para Iniciar Sesión y Registrarse */}
            <MemoizedModal isOpen={isModalOpen} onClose={closeModal}>
                <div className="dark:bg-gray-800 dark:text-gray-200">
                    {isSignIn ? (
                        <SignIn onSuccess={closeModal} switchToSignUp={switchToSignUp} />
                    ) : (
                        <SignUp onSuccess={closeModal} switchToSignIn={switchToSignIn} />
                    )}
                </div>
            </MemoizedModal>
        </header>
    );
};

export default Header;