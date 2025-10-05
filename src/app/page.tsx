import { Metadata } from "next";
import SEO from "@/components/common/SEO";
import HashScrollHandler from "@/components/common/HashScrollHandler";
import Home from "@/components/home/Home";
import AboutMe from "@/components/home/AboutMe";
import PukaDigital from "@/components/home/PukaDigital";
import Technologies from "@/components/home/Technologies";
import Projects from "@/components/home/Projects";
import Contact from "@/components/home/Contact";

export const metadata: Metadata = {
  title: "Luis Viteri | Full-Stack Developer & Digital Marketing Strategist | Luchodev",
  description: "🚀 Luis Viteri (Luchodev) - Desarrollador Full-Stack especializado en React, Next.js, Django y estrategias de marketing digital ROI-focused. Fundador de PukaDigital LLC. ⚡ +3 años creando soluciones web innovadoras.",
  keywords: [
    "Luis Viteri",
    "Luchodev", 
    "Full-Stack Developer",
    "React Developer",
    "Next.js Expert",
    "Django Developer",
    "Digital Marketing",
    "Google Ads Specialist",
    "Facebook Ads",
    "SEO Expert",
    "PukaDigital",
    "Desarrollo Web Venezuela",
    "Marketing Digital ROI",
    "TypeScript",
    "Python",
    "Web Analytics",
    "Conversion Optimization",
    "Remote Developer",
    "Freelance Developer"
  ].join(", "),
  authors: [{ name: "Luis Viteri", url: "https://luchodev.netlify.app" }],
  creator: "Luis Viteri",
  publisher: "Luis Viteri",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://luchodev.netlify.app",
    languages: {
      'es-ES': 'https://luchodev.netlify.app',
      'en-US': 'https://luchodev.netlify.app/en'
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://luchodev.netlify.app",
    siteName: "Luis Viteri - Luchodev Portfolio",
    title: "Luis Viteri | Full-Stack Developer & Digital Marketing Expert",
    description: "🚀 Desarrollador Full-Stack y estratega de marketing digital. Especialista en React, Next.js, Django. Fundador de PukaDigital LLC. Soluciones web ROI-focused.",
    images: [
      {
        url: "https://res.cloudinary.com/dltfsttr7/image/upload/w_1200,h_630,c_fill,q_auto,f_auto,g_face/v1731879784/Luis_Viteri_lxtxcc.jpg",
        width: 1200,
        height: 630,
        alt: "Luis Viteri - Desarrollador Full-Stack y Marketing Digital Expert | Luchodev Portfolio",
        type: "image/jpeg",
      },
      {
        url: "https://res.cloudinary.com/dltfsttr7/image/upload/w_800,h_600,c_fill,q_auto,f_auto/v1732480322/Screenshot_2024-11-24_at_15-31-19_netlify.app.jpg_JPEG_Image_1280_4301_pixels_l1ugdf.png",
        width: 800,
        height: 600,
        alt: "Portafolio Luis Viteri - Proyectos y Tecnologías",
        type: "image/png",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luis Viteri | Full-Stack Developer & Digital Marketing Strategist",
    description: "🚀 Desarrollador especializado en React, Next.js, Django y marketing digital ROI-focused. Fundador de PukaDigital LLC.",
    creator: "@luchodev",
    site: "@luchodev",
    images: ["https://res.cloudinary.com/dltfsttr7/image/upload/w_1200,h_630,c_fill,q_auto,f_auto,g_face/v1731879784/Luis_Viteri_lxtxcc.jpg"],
  },
  verification: {
    google: "c7a222bfc56de06a",
  },
  category: "Technology",
  classification: "Portfolio",
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "format-detection": "telephone=no",
  },
};

export default function Page() {
  return (
    <>
      <HashScrollHandler />
      <Home />
      <AboutMe />
      <PukaDigital />
      <Technologies />
      <Projects />
      <Contact />
    </>
  );
}