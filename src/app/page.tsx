import { Metadata } from "next";
import SEO from "@/components/common/SEO";
import Home from "@/components/home/Home";
import AboutMe from "@/components/home/AboutMe";
import PukaDigital from "@/components/home/PukaDigital";
import Technologies from "@/components/home/Technologies";
import Projects from "@/components/home/Projects";
import Contact from "@/components/home/Contact";

export const metadata: Metadata = {
  title: "Portafolio - Luis Viteri",
  description: "Soy Luis Viteri, un desarrollador web especializado en React y Django.",
  keywords: "Luis Viteri, React, Django, Desarrollo Web, Portafolio",
  openGraph: {
    title: "Portafolio - Luis Viteri",
    description: "Soy Luis Viteri, un desarrollador web especializado en React y Django.",
    images: [
      {
        url: "https://res.cloudinary.com/dltfsttr7/image/upload/w_1200,h_630,c_fill,q_auto,f_auto/v1732480322/Screenshot_2024-11-24_at_15-31-19_netlify.app.jpg_JPEG_Image_1280_4301_pixels_l1ugdf.png",
        width: 1200,
        height: 630,
        alt: "Portafolio Luis Viteri"
      }
    ],
    url: "https://luchodev.netlify.app/"
  }
};

export default function Page() {
  return (
    <>
      <Home />
      <AboutMe />
      <PukaDigital />
      <Technologies />
      <Projects />
      <Contact />
    </>
  );
}