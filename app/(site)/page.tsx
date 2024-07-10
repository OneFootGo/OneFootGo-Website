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

export const metadata: Metadata = {
  title: "OneFootGo",
  description: "Professional-Grade Sports Analysis Tools for Everyone",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Analytics />
      <Hero />
      <About />
      <FAQ />
      <Contact />
    </main>
  );
}
