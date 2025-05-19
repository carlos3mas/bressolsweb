import Head from "next/head";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import QuienSomos from "@/components/QuienSomos";
import Servicios from "@/components/Servicios";
import Contacto from "@/components/Contacto";

export default function Home() {
  return (
    <>
      <Head>
        <title>C.E.I Bressols</title>
        <meta
          name="description"
          content="Centre d'Educació Infantil Bressols - Amb més de 20 anys d'experiència educant infants."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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

        <section id="serveis">
          <Servicios />
        </section>

        <section id="contacte">
          <Contacto />
        </section>
      </main>
    </>
  );
}
