import React from "react";
import Image from "next/image";
import pfp from "../assets/pfp.png";

export default function page() {
  return (
    <div>
      <div className="h-fit md:h-screen">
        <div className="w-3/4 mx-auto mt-14 md:mt-28 flex flex-col md:flex-row items-center gap-8 pl-4 pr-2 pt-3 pb-6 md:p-12 bg-gradient-to-br from-zinc-500/50 via-zinc-500/50 to-zinc-400/50 rounded-md">
          <div className="flex justify-center hover:scale-105 transition duration-500 relative w-fit">
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
              <h1 className="text-2xl md:text-4xl text-yellow-300">
                Hi! I&apos;m
              </h1>
              <h1 className="text-3xl md:text-5xl text-yellow-300 font-bold tracking-wide">
                Leonard Alfareno
              </h1>
            </div>
            <div>
              <p className="leading-6 text-sm md:text-md text-left">
                I&apos;m currently a student in Vocational High School 8
                Semarang, i love{" "}
                <span className="text-yellow-300">programming</span> and
                <span className="text-yellow-300"> gaming</span>, I&apos;ve been
                playing game since i&apos;m in kindergarten and coding since
                i&apos;m in Junior High School, I&apos;m passionate about
                creating cool things and always curious about how things like
                apps and websites being made.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-fit pt-5 mb-10">
        <h1 className="text-5xl w-fit mx-auto mb-10 sticky top-28">
          Some <span className="text-yellow-400">"Things"</span> i like
        </h1>
        <div className="h-fit w-10/12 mx-auto p-5 flex items-center sticky top-48 gap-5 bg-zinc-800">
          <div className="">
            <Image
              src="/assets/darksouls3.png"
              width={600}
              height={600}
              alt="gaming"
              className="mx-auto"
            />
          </div>
          <div className="flex flex-col gap-5 w-6/12">
            <h1 className="text-4xl w-fit">Gaming</h1>
            <p className="ml-1">
              I've always love gaming, since i was in kindergarten i played
              mobile games like angry birds and others in my free time and
              become a gamer since that day, now i&apos;m mostly playing pc
              games and barely touch mobile games.
            </p>
          </div>
        </div>
        <div className="h-fit w-10/12 mx-auto mt-36 p-5 flex items-center sticky top-48 gap-5 bg-zinc-800">
          <div className="">
            <Image
              src="/assets/learning.png"
              width={400}
              height={400}
              alt="gaming"
              className="mx-auto"
            />
          </div>
          <div className="flex flex-col gap-5 w-6/12">
            <h1 className="text-4xl w-fit">Learning</h1>
            <p className="ml-1">
              I only love learning when it comes to what i like, i learn how the
              games i&apos;m playing work, i start building website because
              i&apos;m bored and want to learn something new, i learn basic
              english mostly from youtube because i was looking for programming
              tutorial, and etc.
            </p>
          </div>
        </div>
        <div className="h-fit w-10/12 mx-auto mt-36 p-5 flex sticky top-48 gap-5 bg-zinc-800">
          <div className="">
            <Image
              src="/assets/darksouls3.png"
              width={600}
              height={600}
              alt="gaming"
              className="mx-auto"
            />
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl w-fit">View</h1>
            <p className="ml-1">I love it</p>
          </div>
        </div>
      </div>
    </div>
  );
}
