"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";
import ToggleDarkMode from "@/components/common/ToggleDarkMode";
import NavigationMenu from "@/components/Header/NavigationMenu";
import UserMenu from "@/components/Header/UserMenu";
import Modal from "@/components/common/Modal";
import SignIn from "@/components/auth/SignIn";
import SignUp from "@/components/auth/SignUp";
import useUserRole from "@/hooks/useUserRole";
import useModal from "@/hooks/useModal";

// Usamos React.memo para los componentes que no cambian frecuentemente
const MemoizedNavigationMenu = React.memo(NavigationMenu);
const MemoizedUserMenu = React.memo(UserMenu);
const MemoizedModal = React.memo(Modal);

const Header = () => {
    const [user] = useAuthState(auth);
    const { role } = useUserRole(user ?? null);
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

    // Detectar scroll para glassmorphism effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
                        <MemoizedNavigationMenu />
                    </div>

                    {/* Right Side - Desktop: Contact + Dark Mode + User, Mobile: Solo Dark Mode + User */}
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

                        {/* User Menu - Visible en todas las pantallas */}
                        <MemoizedUserMenu
                            user={user ?? null}
                            role={role}
                        />
                    </div>
                </div>
            </div>

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