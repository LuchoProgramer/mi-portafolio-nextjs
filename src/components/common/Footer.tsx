"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-gray-600 text-sm">
          © 2025 Luis Viteri. Todos los derechos reservados.
        </p>

        <a
          href="https://pukadigital.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0066FF] hover:text-blue-700 text-sm font-medium transition-colors"
        >
          Visita Puka Digital
        </a>
      </div>
    </footer>
  );
}
