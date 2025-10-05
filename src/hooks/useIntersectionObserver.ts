import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
}

export const useIntersectionObserver = (
    options: UseIntersectionObserverOptions = {}
) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const {
            threshold = 0.1, // Más bajo para móvil
            rootMargin = '0px 0px -10% 0px', // Activa antes de llegar al viewport
            triggerOnce = true
        } = options;

        // Detectar si es móvil
        const isMobile = window.innerWidth < 768;
        
        const observerOptions = {
            threshold: isMobile ? 0.05 : threshold, // Threshold más bajo en móvil
            rootMargin: isMobile ? '0px 0px -5% 0px' : rootMargin, // Menos margen en móvil
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (triggerOnce) {
                        observer.disconnect();
                    }
                } else if (!triggerOnce) {
                    setIsVisible(false);
                }
            },
            observerOptions
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        // Fallback: activar después de 1 segundo si no se ha activado
        const fallbackTimer = setTimeout(() => {
            if (!isVisible) {
                setIsVisible(true);
            }
        }, 1000);

        return () => {
            observer.disconnect();
            clearTimeout(fallbackTimer);
        };
    }, [options.threshold, options.rootMargin, options.triggerOnce, isVisible]);

    return { isVisible, elementRef };
};