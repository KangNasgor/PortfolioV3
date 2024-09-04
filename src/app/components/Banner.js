import React from "react";
import CarouselText from "./CarouselText";
import Image from "next/image";
import pfp from "../assets/pfp.png";
import Link from "next/link";
import "./style.css";

export default function Banner() {
  const text = ["Leonard.", "a Web Developer.", "a Gamer."];
  return (
    <div className="flex h-screen bg-black">
      <div className="flex flex-col md:flex-row gap-3 mt-20 md:mt-40 mx-auto relative z-20 bg-zinc-900 items-center px-9 py-10 md:py-0 rounded h-96 md-h-80 animation-3">
        <div className="flex md:hidden justify-center animation">
          <Image
            src={pfp}
            alt="Picture of me"
            className="z-20 absolute w-36 rounded-full"
          />
          <div className="bg-gradient-to-br from-white via-slate-400 to-gray-500 w-36 h-36 relative z-10 rounded-full"></div>
        </div>
        <div className="text-center w-auto flex flex-col items-start animation">
          <h1 className="text-3xl md:text-5xl mr-3 md:mb-2">Hello, i&apos;m</h1>
          <CarouselText
            className="text-3xl md:text-5xl"
            text={text}
            interval={2000}
            translateY={68}
          />
          <h1 className="text-md md:text-2xl md:mt-5 text-white opacity-50">
            Student in SMKN 8 Semarang
          </h1>
          <div className="flex md:w-1/4">
            <Link href="#about" className="transition-all">
              <button className="bg-gradient-to-r from-white to-gray-400 text-black transition-all ease-in-out duration-300 rounded p-1 w-28 h-10 mt-5">
                More
              </button>
            </Link>
          </div>
        </div>
        <div className="hidden md:flex justify-center h-72 hover:scale-105 transition duration-500 relative animation-2">
          <Image
            src={pfp}
            alt="Picture of me"
            className="z-20 absolute w-28 h-28 md:w-72 md:h-72 rounded-full"
          />
          <div className="bg-gradient-to-br from-white via-slate-400 to-gray-500 w-28 md:w-72 h-28 md:h-72 relative z-10 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
