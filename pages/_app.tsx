import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GoogleAnalytics from "../components/GoogleAnalytics";
import * as gtag from "../lib/gtag";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Track page views when route changes
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className="min-h-screen bg-fondo font-nunito">
      {/* Google Analytics */}
      {gtag.GA_MEASUREMENT_ID && (
        <GoogleAnalytics measurementId={gtag.GA_MEASUREMENT_ID} />
      )}
      
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
