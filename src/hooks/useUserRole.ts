"use client";

import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { User } from "firebase/auth";

interface UserRoleHook {
    role: string | null; // Rol del usuario, puede ser `null` si no está definido.
    loading: boolean;    // Estado de carga para saber si el rol está siendo recuperado.
    error: string | null; // Mensaje de error si algo falla.
}

const useUserRole = (user: User | null): UserRoleHook => {
    const [role, setRole] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserRole = async () => {
            if (!user) {
                setRole(null);
                setLoading(false);
                setError(null);
                return;
            }

            setLoading(true);
            setError(null);

            try {
                const userRef = doc(db, "users", user.uid);
                const userSnap = await getDoc(userRef);

                if (userSnap.exists()) {
                    const userData = userSnap.data();
                    setRole(userData.role || null); // Establece el rol, o `null` si no existe.
                } else {
                    console.warn("No se encontró el documento del usuario en Firestore.");
                    setRole(null);
                }
            } catch (err) {
                console.error("Error al obtener el rol del usuario:", err);
                setError("Error al obtener el rol del usuario.");
                setRole(null);
            } finally {
                setLoading(false);
            }
        };

        fetchUserRole();
    }, [user]);

    return { role, loading, error };
};

export default useUserRole;
