"use client";

import React from "react";
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

const Header = () => {
    const [user] = useAuthState(auth);
    const roleData = user ? useUserRole(user) : { role: null, loading: false, error: null };
    const { role, loading: roleLoading, error: roleError } = roleData;

    const {
        isModalOpen,
        isSignIn,
        openModal,
        openSignUpModal,
        closeModal,
        switchToSignUp,
        switchToSignIn,
    } = useModal();

    const { isOpen, toggleMenu } = useNavigationMenu();

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
                    <NavigationMenu isOpen={isOpen} toggleMenu={toggleMenu} />

                    {/* Toggle Dark Mode */}
                    <ToggleDarkMode />

                    {/* Opciones de autenticación */}
                    {roleLoading ? (
                        <p>Cargando...</p>
                    ) : roleError ? (
                        <p>Error: {roleError}</p>
                    ) : !user ? (
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
                    ) : (
                        <UserMenu user={user} role={role || "viewer"} />
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
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div className="dark:bg-gray-800 dark:text-gray-200">
                    {isSignIn ? (
                        <SignIn onSuccess={closeModal} switchToSignUp={switchToSignUp} />
                    ) : (
                        <SignUp onSuccess={closeModal} switchToSignIn={switchToSignIn} />
                    )}
                </div>
            </Modal>
        </header>
    );
};

export default Header;