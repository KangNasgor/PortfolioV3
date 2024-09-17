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
    setActive((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const images = [
    "/assets/dapur-caica.png",
    "/assets/swakarya-souvenir.png",
    "/assets/game.png",
    "/assets/app.png",
  ];
  const precs = {
    0: <DapurCaica />,
    1: <SwakaryaSouvenir />,
    2: <Unity />,
    3: <ToDoApp />,
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
          className="md:w-4/12 pl-6 pr-10 pb-10 pt-5 bg-zinc-700 rounded-lg mt-5 md:mt-0 z-10 overflow-hidden"
          data-aos="fade"
        >
          {precs[active]}
        </div>
      </div>
    </div>
  );
}

const DapurCaica = () => {
  return (
    <div className="" data-aos="fade-right">
      <h1 className="text-2xl md:text-4xl mb-5 text-yellow-300 lato tracking-wide">
        Dapur Caica Website
      </h1>
      <h3 className="text-sm md:text-md">
        Dapur Caica is an MSMEs website designed to promote its products. It
        provides information about the business, its products, location, and
        contact details to help customers connect easily.
      </h3>
    </div>
  );
};
const SwakaryaSouvenir = () => {
  return (
    <div className="" data-aos="fade-right">
      <h1 className="text-2xl md:text-4xl mb-5 text-yellow-300 lato tracking-wide">
        Swakarya Souvenir Website
      </h1>
      <h3 className="text-sm md:text-md">
        SwakaryaSouvenir website is a website made for my school task, it&apos;s
        a website that promotes my team&apos;s products like keychain, nametag,
        etc.
      </h3>
    </div>
  );
};
const Unity = () => {
  return (
    <div className="" data-aos="fade-right">
      <h1 className="text-2xl md:text-4xl mb-5 text-yellow-300 lato tracking-wide">
        Unity
      </h1>
      <h3 className="text-sm md:text-md">
        This isn&apos;t a completed project because it's not on the track of the
        career i pursue, I joined a GameDev team but i&apos;m out of the team
        because i want to focus more in web development, I learned some
        mechanics of how game is being made like event handler, hitbox,
        collider, trigger, etc.
      </h3>
    </div>
  );
};
const ToDoApp = () => {
  return (
    <div className="" data-aos="fade-right">
      <h1 className="text-2xl md:text-4xl mb-5 text-yellow-300 lato tracking-wide">
        To-Do App
      </h1>
      <h3 className="text-sm md:text-md">
        I created a simple to-do app for mobile using react native that has
        features like create, update, delete, edit, and save a to-do or a
        schedule.
      </h3>
    </div>
  );
};
