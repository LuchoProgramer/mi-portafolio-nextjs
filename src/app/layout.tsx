"use client";

import React from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import Header from "@/components/Header/Header";
import Footer from "@/components/Header/Footer";
import "../styles/index.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen">
        <ThemeProvider>
          {/* Header */}
          <Header />

          {/* Main Content */}
          <main className="flex-grow">{children}</main>

          {/* Footer */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
