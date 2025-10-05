"use client";

import React from "react";
import Head from "next/head";

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: "website" | "article" | "profile";
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    locale?: string;
    alternateLocales?: string[];
}

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    keywords,
    image = "https://res.cloudinary.com/dltfsttr7/image/upload/w_1200,h_630,c_fill,q_auto,f_auto,g_face/v1731879784/Luis_Viteri_lxtxcc.jpg",
    url = "https://luchodev.netlify.app",
    type = "website",
    publishedTime,
    modifiedTime,
    author = "Luis Viteri",
    section,
    locale = "es_ES",
    alternateLocales = ["en_US"],
}) => {
    const siteName = "Luis Viteri - Luchodev Portfolio";
    const twitterHandle = "@luchodev";
    
    return (
        <Head>
            {/* Título optimizado */}
            <title>{title}</title>
            
            {/* Meta tags básicos */}
            <meta name="description" content={description} />
            <meta name="author" content={author} />
            {keywords && <meta name="keywords" content={keywords} />}
            
            {/* Canonical URL */}
            <link rel="canonical" href={url} />
            
            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:image:alt" content={`${title} - Luis Viteri Portfolio`} />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:locale" content={locale} />
            {alternateLocales.map((altLocale) => (
                <meta key={altLocale} property="og:locale:alternate" content={altLocale} />
            ))}
            
            {/* Open Graph específico para artículos */}
            {type === "article" && (
                <>
                    {publishedTime && <meta property="article:published_time" content={publishedTime} />}
                    {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
                    {author && <meta property="article:author" content={author} />}
                    {section && <meta property="article:section" content={section} />}
                    <meta property="article:tag" content="desarrollo web" />
                    <meta property="article:tag" content="react" />
                    <meta property="article:tag" content="next.js" />
                    <meta property="article:tag" content="django" />
                    <meta property="article:tag" content="marketing digital" />
                </>
            )}
            
            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content={twitterHandle} />
            <meta name="twitter:creator" content={twitterHandle} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:image:alt" content={`${title} - Luis Viteri`} />
            
            {/* WhatsApp específico */}
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:type" content="image/jpeg" />
            
            {/* LinkedIn específico */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            
            {/* Favicon */}
            <link rel="icon" href="/favicon.ico" sizes="32x32" />
            <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
            
            {/* DNS Prefetch para performance */}
            <link rel="dns-prefetch" href="//res.cloudinary.com" />
            <link rel="dns-prefetch" href="//fonts.googleapis.com" />
            <link rel="dns-prefetch" href="//www.google-analytics.com" />
            
            {/* Preload critical resources */}
            <link 
                rel="preload" 
                href={image} 
                as="image" 
                type="image/jpeg"
            />
            
            {/* Robots meta */}
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            <meta name="googlebot" content="index, follow" />
            <meta name="bingbot" content="index, follow" />
            
            {/* Geo tags */}
            <meta name="geo.region" content="VE" />
            <meta name="geo.placename" content="Venezuela" />
            
            {/* Rating */}
            <meta name="rating" content="General" />
            
            {/* Language */}
            <meta httpEquiv="content-language" content="es-ES" />
            
            {/* Mobile optimization */}
            <meta name="HandheldFriendly" content="true" />
            <meta name="MobileOptimized" content="width" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            
            {/* Security */}
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="referrer" content="origin-when-cross-origin" />
        </Head>
    );
};

export default SEO;