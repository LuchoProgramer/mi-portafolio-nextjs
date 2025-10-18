"use client";

import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const technologies = {
    frontend: [
        { name: "React", logo: "https://res.cloudinary.com/dltfsttr7/image/upload/v1731936862/react-logo_epcclf.svg", level: 85 },
        { name: "Next.js", logo: "https://res.cloudinary.com/dltfsttr7/image/upload/v1731936862/react-logo_epcclf.svg", level: 85 },
        { name: "Tailwind CSS", logo: "https://res.cloudinary.com/dltfsttr7/image/upload/v1731936862/Tailwind_CSS_Logo_wmitwx.svg", level: 90 },
        { name: "TypeScript", logo: "https://res.cloudinary.com/dltfsttr7/image/upload/v1731936862/javascript_j7f2hr.svg", level: 80 },
    ],
    backend: [
        { name: "Python", logo: "https://res.cloudinary.com/dltfsttr7/image/upload/v1731936863/Python-logo_s8sw7e.svg", level: 90 },
        { name: "Django", logo: "https://res.cloudinary.com/dltfsttr7/image/upload/v1731936864/django-logo_vlklt7.svg", level: 85 },
        { name: "Firebase", logo: "https://res.cloudinary.com/dltfsttr7/image/upload/v1731936862/Html_fsy4r4.svg", level: 80 },
    ],
    marketing: [
        { name: "Google Ads", logo: "https://res.cloudinary.com/dltfsttr7/image/upload/v1731936862/Html_fsy4r4.svg", level: 85 },
        { name: "TikTok Ads", logo: "https://res.cloudinary.com/dltfsttr7/image/upload/v1731936862/Html_fsy4r4.svg", level: 80 },
        { name: "Google Analytics", logo: "https://res.cloudinary.com/dltfsttr7/image/upload/v1731936862/Html_fsy4r4.svg", level: 90 },
        { name: "SEO", logo: "https://res.cloudinary.com/dltfsttr7/image/upload/v1731936862/Html_fsy4r4.svg", level: 85 },
    ],
    tools: [
        { name: "Git", logo: "https://res.cloudinary.com/dltfsttr7/image/upload/v1731936862/Git-Icon_ewxnwp.svg", level: 95 },
        { name: "GitHub", logo: "https://res.cloudinary.com/dltfsttr7/image/upload/v1731936862/github-logo_xuuiyh.svg", level: 90 },
    ],
};

const TechSection = ({ title, techs, isDarkMode }: { title: string; techs: typeof technologies.frontend; isDarkMode: boolean }) => {
    return (
        <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">{title}</h3>
            <div className="flex flex-wrap justify-center gap-6">
                {techs.map((tech) => {
                    const pathColor = isDarkMode ? "#60A5FA" : "#3B82F6";
                    const textColor = isDarkMode ? "#FFFFFF" : "#374151";
                    const trailColor = isDarkMode ? "#374151" : "#d1d5db";

                    return (
                        <div
                            key={tech.name}
                            className="flex flex-col items-center p-4 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
                            style={{ width: "140px" }}
                        >
                            <div className="w-16 h-16 mb-2">
                                <CircularProgressbar
                                    value={tech.level}
                                    text={`${tech.level}%`}
                                    styles={buildStyles({
                                        textSize: "14px",
                                        pathColor: pathColor,
                                        textColor: textColor,
                                        trailColor: trailColor,
                                    })}
                                />
                            </div>
                            <img
                                src={tech.logo}
                                alt={`${tech.name} logo`}
                                className="w-10 h-10 object-contain mb-2"
                            />
                            <p className="text-sm font-semibold text-center text-gray-900 dark:text-gray-100">
                                {tech.name}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const Technologies = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const updateDarkMode = () => {
            const darkModeClass = document.documentElement.classList.contains("dark");
            setIsDarkMode(darkModeClass);
        };

        updateDarkMode();

        const observer = new MutationObserver(updateDarkMode);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

        return () => observer.disconnect();
    }, []);

    return (
        <section id="tech" className="py-16 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
                    Mi Stack Técnico
                </h2>

                <TechSection title="Frontend" techs={technologies.frontend} isDarkMode={isDarkMode} />
                <TechSection title="Backend" techs={technologies.backend} isDarkMode={isDarkMode} />
                <TechSection title="Marketing Digital" techs={technologies.marketing} isDarkMode={isDarkMode} />
                <TechSection title="Herramientas" techs={technologies.tools} isDarkMode={isDarkMode} />

                <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                    <p className="text-center text-gray-700 dark:text-gray-300">
                        <span className="font-semibold">La combinación:</span> Tecnología + Marketing Digital + Datos = Resultados verificables para tu negocio
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Technologies;