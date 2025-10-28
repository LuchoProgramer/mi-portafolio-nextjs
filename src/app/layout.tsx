"use client";

import React from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import Header from "@/components/Header/Header";
import "../styles/index.css";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-white dark:bg-gray-950">
        <ThemeProvider>
          {/* Header */}
          <Header />

          {/* Main Content */}
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
