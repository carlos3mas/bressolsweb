import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen bg-fondo font-nunito">
  <Navbar />
  <Component {...pageProps} />
  <Footer />
</div>

  );
}
