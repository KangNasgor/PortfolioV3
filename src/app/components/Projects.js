"use client";
import Image from "next/image";
import { useState } from "react";
import ImageCarousels from "./ImageCarousels";

export default function Projects() {
  const [active, setActive] = useState(0);
  const next = () => {
    setActive((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  const prev = () => {
    setActive((prev) => (prev === 0 ? 2 : prev - 1));
  };
  const images = [
    "/assets/webs.jpg",
    "/assets/game.png",
    "/assets/app.png",
  ];
  const precs = {
    0: <Websites/>,
    1: <Games/>,
    2: <Apps/>,
  };
  return (
    <div className="h-screen pt-10 z-20">
      <h1 className="text-4xl text-center mb-10 z-20" data-aos="fade-right">
        Previous Projects
      </h1>
      <div className="flex flex-col md:flex-row w-full md:justify-start gap-0 md:gap-20 lg:gap-10 px-5">
        <div className="md:w-2/4" data-aos="fade-up">
          <ImageCarousels
            images={images}
            active={active}
            prev={prev}
            next={next}
            setActive={setActive}
          />
        </div>
        <div
          className="md:w-4/12 px-5 pb-10 bg-zinc-700 rounded-lg mt-5 md:mt-0 z-10 overflow-hidden"
          data-aos="fade"
        >
          {precs[active]}
        </div>
      </div>
    </div>
  );
}

const Websites = () => {
  return (
    <div className="mt-9" data-aos="fade-right">
    <h1 className="text-5xl mb-5 text-yellow-300 lato tracking-wide">Websites</h1>
      <h3>
        These are my dummy websites that i&apos;m using it to learn Web Development,
        some websites are for my personal practice, some are tasks from
        internship.
      </h3>
    </div>
  );
};
const Games = () => {
  return (
    <div className="mt-9" data-aos="fade-right">
      <h1 className="text-5xl mb-5 text-yellow-300 lato tracking-wide">Game</h1>
      <h3>
        I used to learn a bit of C# and Unity Game Development but now i&apos;m
        more interested in Web Development
      </h3>
    </div>
  );
};
const Apps = () => {
  return (
    <div className="mt-9" data-aos="fade-right">
      <h1 className="text-5xl mb-5 text-yellow-300 lato tracking-wide">Apps</h1>
      <h3>
        I created 2 apps in my internships, one is a basic app that has basic
        features like sign-up, sign-in,and fetching data from API. The second
        one is a To-Do app that has some features including creating, editing,
        and deleting a schedule.
      </h3>
    </div>
  );
};
