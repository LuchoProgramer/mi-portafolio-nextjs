"use client";

import React from "react";
import { FaHiking, FaGuitar, FaPizzaSlice, FaPlane, FaFireAlt } from "react-icons/fa";

interface Hobby {
    icon: React.ReactNode;
    label: string;
}

const hobbies: Hobby[] = [
    { icon: <FaHiking size={40} />, label: "Trekking" },
    { icon: <FaGuitar size={40} />, label: "Tocar la guitarra" },
    { icon: <FaFireAlt size={40} />, label: "Parrilladas" },
    { icon: <FaPizzaSlice size={40} />, label: "Comer pizza" },
    { icon: <FaPlane size={40} />, label: "Viajar" },
];

const Hobbies: React.FC = () => {
    return (
        <section className="p-8 bg-background-light dark:bg-background-dark">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
                Mis Hobbies
            </h2>
            <div className="flex justify-center gap-8 flex-wrap">
                {hobbies.map((hobby, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-gray-700 dark:text-gray-300 transition-transform hover:scale-105"
                        aria-label={hobby.label}
                    >
                        {hobby.icon}
                        <span className="mt-2 text-sm">{hobby.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Hobbies;