"use client";

import React from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import Header from "@/components/Header/Header";
import Footer from "@/components/Header/Footer";
import BottomNavigation from "@/components/Header/BottomNavigation";
import "../styles/index.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" itemScope itemType="https://schema.org/WebPage">
      <head>
        {/* Preconnect para optimización de performance */}
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon optimizado */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Meta tags técnicos */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="color-scheme" content="light dark" />
        
        {/* Verificación de Google */}
        <meta name="google-site-verification" content="c7a222bfc56de06a" />
        
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://luchodev.netlify.app/#person",
                  "name": "Luis Viteri",
                  "alternateName": "Luchodev",
                  "jobTitle": "Full-Stack Developer & Digital Marketing Strategist",
                  "description": "Especialista en desarrollo web con React, Next.js, Django y estrategias de marketing digital. Fundador de PukaDigital LLC.",
                  "url": "https://luchodev.netlify.app",
                  "email": "luis.viteri@pukadigital.com",
                  "telephone": "+593964065880",
                  "image": "https://res.cloudinary.com/dltfsttr7/image/upload/c_fill,w_400,h_400,q_auto,f_webp/v1731879784/Luis_Viteri_lxtxcc.jpg",
                  "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "VE",
                    "addressLocality": "Venezuela"
                  },
                  "sameAs": [
                    "https://github.com/LuchoProgramer",
                    "https://linkedin.com/in/luis-viteri-dev"
                  ],
                  "knowsAbout": [
                    "React",
                    "Next.js",
                    "Django",
                    "TypeScript",
                    "Python",
                    "Digital Marketing",
                    "Google Ads",
                    "Facebook Ads",
                    "SEO",
                    "Web Analytics"
                  ],
                  "alumniOf": {
                    "@type": "Organization",
                    "name": "Universidad de Especialización en Desarrollo Web"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://luchodev.netlify.app/#website",
                  "url": "https://luchodev.netlify.app",
                  "name": "Luis Viteri - Luchodev Portfolio",
                  "description": "Portafolio profesional de Luis Viteri, desarrollador Full-Stack especializado en React, Next.js, Django y marketing digital.",
                  "publisher": {
                    "@id": "https://luchodev.netlify.app/#person"
                  },
                  "inLanguage": "es-ES",
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": {
                      "@type": "EntryPoint",
                      "urlTemplate": "https://luchodev.netlify.app/blog?q={search_term_string}"
                    },
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "Organization",
                  "@id": "https://luchodev.netlify.app/#organization",
                  "name": "PukaDigital LLC",
                  "description": "Agencia digital especializada en desarrollo web y marketing digital ROI-focused.",
                  "url": "https://pukadigital.com",
                  "founder": {
                    "@id": "https://luchodev.netlify.app/#person"
                  },
                  "foundingDate": "2024",
                  "location": {
                    "@type": "Place",
                    "name": "Remote Global"
                  },
                  "service": [
                    "Desarrollo Web",
                    "Google Ads",
                    "Facebook Ads",
                    "Analytics & Data",
                    "SEO",
                    "Marketing Digital"
                  ]
                }
              ]
            })
          }}
        />
      </head>
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
