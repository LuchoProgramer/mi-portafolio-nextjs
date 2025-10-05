"use client";

import React, { useRef, useEffect, useCallback, useState } from "react";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";
import { FiMenu, FiX, FiDownload, FiMail } from "react-icons/fi";
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
    const [scrolled, setScrolled] = useState(false);

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
    const menuRef = useRef<HTMLDivElement>(null);

    // Detectar scroll para glassmorphism effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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

    const cvUrl = "https://drive.google.com/file/d/1XjSOKsgLSC99uC47Cm0l-P0dI2ma2Ug5/view?usp=sharing";

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${
            scrolled 
                ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border-b border-gray-200/20 dark:border-gray-700/20 shadow-sm' 
                : 'bg-transparent'
        }`}>
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex justify-between items-center h-16">
                    
                    {/* Logo */}
                    <Link
                        href="/"
                        className="group flex items-center transition-all duration-300 hover:scale-105"
                        aria-label="Inicio"
                    >
                        <div className="font-mono bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg px-3 py-1.5 text-sm font-bold shadow-lg">
                            {"<Lucho_dev />"}
                            <span className="ml-1 w-0.5 bg-white animate-pulse h-4 inline-block"></span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <MemoizedNavigationMenu
                            isOpen={false}
                            toggleMenu={toggleMenu}
                            user={user != null}
                        />
                    </div>

                    {/* Right Side - Simple */}
                    <div className="flex items-center space-x-4">
                        
                        {/* Contact CTA - Solo Desktop */}
                        <button
                            onClick={() => {
                                const contactSection = document.querySelector('#contact');
                                contactSection?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="hidden md:inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-sm"
                        >
                            Hablemos
                        </button>

                        {/* Dark Mode Toggle */}
                        <ToggleDarkMode />

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMenu}
                            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none"
                        >
                            {isOpen ? (
                                <FiX className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                            ) : (
                                <FiMenu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden fixed inset-0 top-16 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg z-40">
                    <div ref={menuRef}>
                        <MemoizedNavigationMenu
                            isOpen={isOpen}
                            toggleMenu={toggleMenu}
                            user={user != null}
                        />
                    </div>
                </div>
            )}

            {/* Authentication Modal */}
            <MemoizedModal isOpen={isModalOpen} onClose={closeModal}>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6">
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