import Head from "next/head";
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
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({  // Corregido: Envolver el objeto JSON en JSON.stringify
            "@context": "http://schema.org",
            "@type": "SoftwareApplication",
            "name": "Lucho_dev",
            "image": "https://luchodev.netlify.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdltfsttr7%2Fimage%2Fupload%2Fc_fill%2Cw_150%2Ch_150%2Cq_auto%2Cf_webp%2Fv1731879784%2FLuis_Viteri_lxtxcc.jpg&w=3840&q=75",
            "url": "https://www.linkedin.com/in/luisviteri/",
            "author": {
              "@type": "Person",
              "name": "Luis Viteri",
            },
            "publisher": {
              "@type": "Organization",
              "name": "Luis Viteri",
            },
            "applicationCategory": "Desarrollador Web",
            "downloadUrl":
              "https://drive.google.com/file/d/1XjSOKsgLSC99uC47Cm0l-P0dI2ma2Ug5/view?usp=sharing",
          })}
        </script>
      </Head>
      <SEO
        title="Portafolio - Luis Viteri"
        description="Soy Luis Viteri, un desarrollador web especializado en React y Django."
        keywords="Luis Viteri, React, Django, Desarrollo Web, Portafolio"
        image="https://res.cloudinary.com/dltfsttr7/image/upload/w_1200,h_630,c_fill,q_auto,f_auto/v1732480322/Screenshot_2024-11-24_at_15-31-19_netlify.app.jpg_JPEG_Image_1280_4301_pixels_l1ugdf.png"
        url="https://tusitio.com/"
      />
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