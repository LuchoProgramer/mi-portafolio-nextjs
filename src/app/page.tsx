import Hero from "@/components/common/Hero";
import Section from "@/components/common/Section";
import Footer from "@/components/common/Footer";

export default function Page() {
  return (
    <>
      <Hero
        title="Estratega Digital"
        subtitle="Transformo visiones en resultados digitales. Ayudo a PYMEs a crecer mediante estrategias de marketing y tecnología disruptiva."
        ctaText="Descubre Puka Digital"
        ctaHref="https://pukadigital.com"
      />
      
      <Section title="Sobre mí">
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Soy Luis Viteri, CEO y fundador de <strong>Puka Digital</strong>. Con más de 3 años en marketing digital y desarrollo web, pasé de ser freelancer a crear una startup enfocada en resultados verificables.
          </p>
          <p>
            Mi misión es ayudar a emprendedores y PYMEs a dominar el entorno digital con estrategias disruptivas y tecnología moderna.
          </p>
        </div>
      </Section>

      <Footer />
    </>
  );
}