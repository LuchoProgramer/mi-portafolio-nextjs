"use client";

import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function Hero({ title, subtitle, ctaText, ctaHref }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 px-6">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-black dark:text-white mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
          {subtitle}
        </p>
        {ctaText && ctaHref && (
          <Link
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
            style={{ backgroundColor: "#0066FF" }}
          >
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
}
