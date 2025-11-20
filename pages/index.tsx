import Head from "next/head";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import QuienSomos from "@/components/QuienSomos";
import Instalaciones from "@/components/Instalaciones";
import Servicios from "@/components/Servicios";
import Filosofia from "@/components/Filosofia";
import Contacto from "@/components/Contacto";



export default function Home() {
  return (
    <>
      <Head>
        <title>C.E.I Bressols - Centre d&apos;Educació Infantil a Onda, Castelló</title>
        <meta
          name="description"
          content="Centre autoritzat d&apos;Educació Infantil a Onda. Més de 20 anys d&apos;experiència educant infants de 0 a 3 anys. Instal·lacions modernes, menjador propi i educació trilingüe."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="guardería Onda, escuela infantil Castellón, educación infantil, CEI Bressols, guardería 0-3 años, educación trilingüe" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="C.E.I Bressols - Centre d&apos;Educació Infantil" />
        <meta property="og:description" content="Centre autoritzat amb més de 20 anys d&apos;experiència educant infants de 0 a 3 anys a Onda, Castelló." />
        <meta property="og:image" content="/logo.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="C.E.I Bressols - Centre d&apos;Educació Infantil" />
        <meta name="twitter:description" content="Centre autoritzat amb més de 20 anys d&apos;experiència educant infants." />
        <meta name="twitter:image" content="/logo.jpg" />
        
        <link rel="icon" href="/logo.jpg" />
      </Head>

      <Navbar />

      <main className="bg-fondo text-black  w-full overflow-x-hidden">
        <section id="hero">
          <HeroCarousel />
        </section>

        <section id="quien-somos">
          <QuienSomos />
        </section>
        <section id="instalaciones">
          <Instalaciones />
        </section>

        <section id="serveis">
          <Servicios />
        </section>
        <section id="filosofia">
          <Filosofia />
        </section>

        <section id="contacte">
          <Contacto />
        </section>
      </main>
    </>
  );
}
