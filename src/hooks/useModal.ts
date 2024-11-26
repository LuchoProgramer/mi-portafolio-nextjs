"use client";

// src/hooks/useModal.ts
import { useState } from "react";

const useModal = (defaultSignIn = true) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSignIn, setIsSignIn] = useState(defaultSignIn);

    const openModal = () => {
        setIsModalOpen(true);
        setIsSignIn(true); // Por defecto, mostrar SignIn
    };

    const openSignUpModal = () => {
        setIsModalOpen(true);
        setIsSignIn(false); // Mostrar SignUp
    };

    const closeModal = () => setIsModalOpen(false);

    const switchToSignUp = () => setIsSignIn(false);
    const switchToSignIn = () => setIsSignIn(true);

    return {
        isModalOpen,
        isSignIn,
        openModal,
        openSignUpModal,
        closeModal,
        switchToSignUp,
        switchToSignIn,
    };
};

export default useModal;
