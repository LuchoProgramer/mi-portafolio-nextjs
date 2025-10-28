"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          © 2025 Luis Viteri. Estratega Digital.
        </p>
        <div className="mt-4 md:mt-0">
          <Link
            href="https://pukadigital.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium transition-colors"
          >
            Conoce Puka Digital →
          </Link>
        </div>
      </div>
    </footer>
  );
}
