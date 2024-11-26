"use client";

// src/hooks/useNavigationMenu.ts
import { useState } from "react";

const useNavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return {
    isOpen,
    toggleMenu,
    closeMenu: () => setIsOpen(false),
  };
};

export default useNavigationMenu;