import React from "react";
import dynamic from "next/dynamic";
import Banner from "./components/Banner";
import About from "./components/About";
import Projects from "./components/Projects";
import ImageCarousels from "./components/ImageCarousels";
export default function page() {
  return (
    <div>
      <Banner />
      <About />
      <Projects />
    </div>
  );
}
