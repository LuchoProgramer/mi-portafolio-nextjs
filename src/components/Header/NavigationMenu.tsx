import React from "react";
import Link from "next/link";

interface NavigationMenuProps {
    isOpen: boolean;
    user: boolean; // Cambiado a booleano para representar si hay un usuario autenticado.
    toggleMenu: () => void;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ isOpen, user, toggleMenu }) => {
    return (
        <nav
            className={`${isOpen ? "block" : "hidden"
                } absolute top-full left-0 w-full bg-primary-dark md:static md:block md:w-auto`}
            aria-label="Menú principal"
        >
            <ul className="flex flex-col md:flex-row md:items-center md:space-x-6 p-4 md:p-0">
                {/* Enlace a Home */}
                <li>
                    <Link
                        href="/#home"
                        className="block px-4 py-2 text-white hover:text-primary-light transition-colors"
                        onClick={() => toggleMenu()}
                    >
                        Inicio
                    </Link>
                </li>

                {/* Enlace a Proyectos */}
                <li>
                    <Link
                        href="/#projects"
                        className="block px-4 py-2 text-white hover:text-primary-light transition-colors"
                        onClick={() => toggleMenu()}
                    >
                        Proyectos
                    </Link>
                </li>

                {/* Enlace a Blog */}
                <li>
                    <Link
                        href="/blog"
                        className="block px-4 py-2 text-white hover:text-primary-light transition-colors"
                        onClick={() => toggleMenu()}
                    >
                        Blog
                    </Link>
                </li>

                {/* Opciones de autenticación en pantallas pequeñas */}
                {!user && (
                    <>
                        <li className="md:hidden">
                            <Link
                                href="/signin"
                                className="block px-4 py-2 text-white hover:text-primary-light"
                                onClick={() => toggleMenu()}
                            >
                                Iniciar sesión
                            </Link>
                        </li>
                        <li className="md:hidden">
                            <Link
                                href="/signup"
                                className="block px-4 py-2 text-white hover:text-primary-light"
                                onClick={() => toggleMenu()}
                            >
                                Registrarse
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default NavigationMenu;