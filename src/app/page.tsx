import React from "react";
import SEO from "@/components/common/SEO";
import Home from "@/components/home/Home";
import AboutMe from "@/components/home/AboutMe";
import Technologies from "@/components/home/Technologies";
import Projects from "@/components/home/Projects";
import Experience from "@/components/home/Experience";
import Languages from "@/components/home/Languages";
import Hobbies from "@/components/home/Hobbies";
import TravelMap from "@/components/home/TravelMap";


export default function Page() {
  return (
    <>
      {/* Metaetiquetas para SEO */}
      <SEO
        title="Portafolio - Luis Viteri"
        description="Soy Luis Viteri, un desarrollador web especializado en React y Django."
        keywords="Luis Viteri, React, Django, Desarrollo Web, Portafolio"
        image="https://res.cloudinary.com/dltfsttr7/image/upload/w_1200,h_630,c_fill,q_auto,f_auto/v1732480322/Screenshot_2024-11-24_at_15-31-19_netlify.app.jpg_JPEG_Image_1280_4301_pixels_l1ugdf.png"
        url="https://tusitio.com/"
      />

      {/* Secciones de la página */}
      <Home />
      <AboutMe />
      <Technologies />
      <Projects />
      <Experience />
      <Languages />
      <Hobbies />
      <TravelMap />
    </>
  );
}