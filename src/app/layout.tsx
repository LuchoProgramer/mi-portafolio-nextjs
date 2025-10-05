"use client";

import React from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import Header from "@/components/Header/Header";
import Footer from "@/components/Header/Footer";
import BottomNavigation from "@/components/Header/BottomNavigation";
import "../styles/index.css";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
        <ThemeProvider>
          {/* Header */}
          <Header />

          {/* Main Content */}
          <main className="flex-grow pt-16 md:pt-20 pb-24 md:pb-0">{children}</main>

          {/* Bottom Navigation - Solo móvil */}
          <BottomNavigation />

          {/* Footer */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
