import React from "react";
import Header from "@/components/Header/Header";
import "../styles/index.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-white">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
