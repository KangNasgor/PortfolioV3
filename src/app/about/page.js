import React from "react";
import Image from "next/image";
import pfp from "../assets/pfp.png";

export default function page() {
  return (
    <div>
      <div className="w-3/4 mx-auto mt-14 flex items-center gap-8 p-12 bg-gradient-to-br from-zinc-500/50 via-zinc-500/50 to-zinc-400/50 rounded-md">
        <div className="hidden md:flex justify-center h-72 hover:scale-105 transition duration-500 relative w-fit">
          <Image
            src={pfp}
            alt="Picture of me"
            className="z-20 absolute w-28 h-28 md:w-64 md:h-64 rounded-full"
            data-aos="fade-left"
          />
          <div
            className="bg-gradient-to-br from-white via-slate-400 to-gray-500 w-28 md:w-64 h-28 md:h-64 relative z-10 rounded-full shadow-xl"
            data-aos="fade"
          ></div>
        </div>
        <div>
          <div className="flex flex-col mb-5 poppins">
            <h1 className="text-4xl text-yellow-300">Hi! I&apos;m</h1>
            <h1 className="text-5xl text-yellow-300 font-bold tracking-wide">
              Leonard Alfareno
            </h1>
          </div>
          <div>
            <p className="leading-6 text-left">
              I&apos;m currently a student in Vocational High School 8 Semarang,
              i love <span className="text-yellow-300">programming</span> and
              <span className="text-yellow-300"> gaming</span>, I&apos;ve been
              playing game since i&apos;m in kindergarten and coding since
              i&apos;m in Junior High School, I&apos;m passionate about creating
              cool things and always curious about how things like apps and
              websites being made.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
