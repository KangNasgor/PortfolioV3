"use client";
import Image from "next/image";
import Carousels from "./Carousels";
import { useState } from "react";

export default function Projects() {
  const [index, setIndex] = useState(0);
  const images = [
    "/assets/guts.jpg",
    "/assets/altair.jpg",
    "/assets/my-consort.png",
  ];
  const prev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const next = () => {
    setIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const precs = {
    0: <Websites />,
    1: <Games />,
    2: <Apps />,
  };
  return (
    <div className="h-screen pt-10 z-20">
      <h1 className="text-4xl text-center mb-10 z-20" data-aos="fade-right">
        Previous Projects
      </h1>
      <div className="flex w-full gap-10 px-5">
        <div
          className="slider-container relative w-2/4 max-w-4xl overflow-hidden"
          data-aos="fade-up"
        >
          <div className="image-wrapper flex items-center justify-center relative">
            <div
              className="prev-image absolute left-0 cursor-pointer"
              onClick={prev}
            >
              <Image
                src={images[(index - 1 + images.length) % images.length]}
                alt="Previous"
                className="transition-opacity duration-300 ease-in-out relative z-10"
                width={200}
                height={200}
              />
            </div>
            <div className="current-image">
              <Image
                src={images[index]}
                alt="Current"
                className="w-80 transition-transform duration-300 ease-in-out relative z-50"
                width={300}
                height={300}
              />
            </div>
            <div
              className="next-image absolute right-0 cursor-pointer"
              onClick={next}
            >
              <Image
                src={images[(index + 1) % images.length]}
                alt="Next"
                className="w-40 transition-opacity duration-300 ease-in-out relative z-10"
                width={200}
                height={200}
              />
            </div>
          </div>
          <div className="nav-buttons absolute inset-0 flex justify-between items-center px-4">
            <button
              className="prev-button text-white text-xl font-bold bg-black p-2"
              onClick={prev}
            >
              ‹
            </button>
            <button
              className="next-button text-white text-xl font-bold bg-black p-2"
              onClick={next}
            >
              ›
            </button>
          </div>
        </div>
        <div className="w-4/12 px-5 bg-zinc-700 rounded z-20" data-aos="fade">
          {precs[index]}
        </div>
      </div>
    </div>
  );
}

const Websites = () => {
  return (
    <div className="mt-9" data-aos="fade-left">
      <h1 className="text-5xl mb-5 text-yellow-300">Websites</h1>
      <h3>
        These are my dummy websites that i'm using it to learn Web Development.
      </h3>
    </div>
  );
};
const Games = () => {
  return (
    <div className="mt-9" data-aos="fade-left">
      <h1 className="text-5xl mb-5 text-yellow-300">Game</h1>
      <h3>
        I used to learn a bit of C# and Unity Game Development but now i&apos;m
        more interested in Web Development
      </h3>
    </div>
  );
};
const Apps = () => {
  return (
    <div className="mt-9" data-aos="fade-left">
      <h1 className="text-5xl mb-5 text-yellow-300">Apps</h1>
      <h3>
        I created 2 apps in my internships, one is a basic app that has basic
        features like sign-up, sign-in,and fetching data from API. The second
        one is a To-Do app that has some features including creating, editing,
        and deleting a schedule.
      </h3>
    </div>
  );
};
