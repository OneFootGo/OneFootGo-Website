import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";
import { Analytics } from "@vercel/analytics/react"
import Head from "next/head";

export const metadata: Metadata = {
  title: "OneFootGo",
  description: "Professional-Grade Sports Analysis Tools for Everyone",
  // other metadata
};

export default function Home() {
  return (
    <>
      <Head>
        <title>OneFootGo</title>
        <meta name="description" content="Professional-Grade Sports Analysis Tools for Everyone" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="OneFootGo" />
        <meta property="og:description" content="Professional-Grade Sports Analysis Tools for Everyone" />
        <meta property="og:image" content="https://onefootgo.com/images/logo/logo-light.png" />
        <meta property="og:url" content="https://onefootgo.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta property="twitter:domain" content="onefootgo.com" />
        <meta property="twitter:url" content="https://onefootgo.com" />
        <meta name="twitter:title" content="OneFootGo" />
        <meta name="twitter:description" content="Professional-Grade Sports Analysis Tools for Everyone" />
        <meta name="twitter:image" content="https://onefootgo.com/path-to-your-logo.jpg" />
      </Head>
      <main>
        <Analytics />
        <Hero />
        <About />
        <FAQ />
        <Contact />
      </main>
    </>
  );
}
