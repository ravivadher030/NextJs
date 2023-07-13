import Image from "next/image";
import { Inter } from "next/font/google";

import React from "react";
import Hero from "@/Components/Hero/Hero";
import About from "@/Components/About/About";

const inter = Inter({ subsets: ["latin"] });

export default function Home(): React.ReactElement {
  return (
    <>
      <Hero />
      <About />
    </>
  );
}
