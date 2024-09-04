import React from "react";
import Image from "next/image";
import Carousels from "./Carousels";

export default function Projects() {
  const images = [
    '/assets/altair.jpg',
    '/assets/guts.jpg',
    '/assets/my-consort.png',
  ];
  return (
    <div className="h-screen pt-10">
      <h1 className="text-4xl text-center mb-10" data-aos="fade-right">
        Projects that i've been working on
      </h1>
      <div className="flex gap-20">
        <Carousels images={images}/>
        <div>
          <h1 className="text-3xl">These are my projects.</h1>
        </div>
      </div>
    </div>
  );
}
