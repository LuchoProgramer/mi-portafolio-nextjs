'use client';

import { useEffect } from 'react';

const HashScrollHandler: React.FC = () => {
    useEffect(() => {
        // Función para hacer scroll a una sección por ID
        const scrollToSection = (sectionId: string) => {
            const element = document.getElementById(sectionId);
            if (element) {
                // Pequeño delay para asegurar que la página esté completamente cargada
                setTimeout(() => {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                }, 100);
            }
        };

        // Verificar si hay un hash en la URL
        const hash = window.location.hash;
        if (hash) {
            const sectionId = hash.substring(1); // Remover el #
            scrollToSection(sectionId);
        }

        // Manejar cambios en el hash
        const handleHashChange = () => {
            const newHash = window.location.hash;
            if (newHash) {
                const sectionId = newHash.substring(1);
                scrollToSection(sectionId);
            }
        };

        // Escuchar cambios en el hash
        window.addEventListener('hashchange', handleHashChange);

        // Cleanup
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    return null; // Este componente no renderiza nada
};

export default HashScrollHandler;