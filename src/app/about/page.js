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
      <div className="h-fit mb-10 pt-5">
        <h1 className="text-5xl w-fit mx-auto mb-10 sticky top-28">
          <span className="text-yellow-400">Things</span> i like
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
            <h1 className="text-4xl text-yellow-300 w-fit">Gaming</h1>
            <p className="ml-1">
              I’ve always loved gaming. Back in kindergarten, I used to spend my
              free time playing mobile games like Angry Birds and others, and
              that’s when my love for gaming really began. Over the years, as I
              got older, I started exploring more types of games and different
              platforms. Now, I mostly play PC games because I enjoy the
              complexity and variety they offer. Although I rarely touch mobile
              games anymore, those early experiences are what sparked my passion
              for gaming in the first place.
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
            <h1 className="text-4xl text-yellow-300 w-fit">Learning</h1>
            <p className="ml-1">
              I only enjoy learning when it&apos;s about something I&apos;m
              interested in. I learn how the games I play work, and I started
              building websites because I was bored and wanted to explore
              something new. I picked up basic English mostly from YouTube while
              searching for programming tutorials, and so on.
            </p>
          </div>
        </div>
        <div className="h-fit w-10/12 mx-auto mt-36 p-5 flex items-center sticky top-48 gap-5 bg-zinc-800">
          <div className="">
            <Image
              src="/assets/view.jpg"
              width={500}
              height={500}
              alt="gaming"
              className="mx-auto"
            />
          </div>
          <div className="flex flex-col gap-5 w-6/12">
            <h1 className="text-4xl text-yellow-300 w-fit">View</h1>
            <p className="ml-1">
              I love staring at a view when I&apos;m tired. It kind of heals me
              because the vibe is so chill, and I really enjoy it. There&apos;s
              something peaceful about just sitting back and taking it all in.
              It helps me clear my mind, almost like the world slows down for a
              moment. The calmness of the scenery makes everything feel lighter,
              and I always feel a bit more refreshed afterward.
            </p>
          </div>
        </div>
        <div className="h-fit w-10/12 mx-auto mt-36 p-5 flex items-center sticky top-48 gap-5 bg-zinc-800">
          <div className="">
            <Image
              src="/assets/cat.jpg"
              width={600}
              height={600}
              alt="cat"
              className="mx-auto"
            />
          </div>
          <div className="flex flex-col gap-5 w-6/12">
            <h1 className="text-4xl text-yellow-300 w-fit">Cat</h1>
            <p className="ml-1">
              I love them because they&apos;re so cute and fluffy. I enjoy
              stroking their fur, and when they purr, it sounds adorable. I
              currently have two cats, one male and one female, and they both
              look so cute. Spending time with them always makes me feel
              relaxed, especially when they curl up next to me. Their playful
              personalities and soft fur just make them impossible to resist.
            </p>
          </div>
        </div>
        <div className="h-fit w-10/12 mx-auto mt-36 p-5 flex items-center sticky top-48 gap-5 bg-zinc-800">
          <div className="">
            <Image
              src="/assets/aeri.jpg"
              width={400}
              height={400}
              alt="cat"
              className="mx-auto"
            />
          </div>
          <div className="flex flex-col gap-5 w-6/12">
            <h1 className="text-4xl text-yellow-300 w-fit">Uchinaga Aeri</h1>
            <p className="ml-1">
              idk she's just cute and i can't help myself, so...
            </p>
          </div>
        </div>
        <div className="h-fit w-10/12 mx-auto mt-36 p-5 flex items-center sticky top-48 gap-5 bg-zinc-800">
          <div className="">
            <Image
              src="/assets/nyam.jpg"
              width={350}
              height={350}
              alt="cat"
              className="mx-auto"
            />
          </div>
          <div className="flex flex-col gap-5 w-6/12">
            <h1 className="text-4xl text-yellow-300 w-fit">Fried Rice</h1>
            <p className="ml-1">
              This is my favorite dish, although it&apos;s not that healthy i
              still love it because in different places that serves fried rice
              as a dish, they come with different flavor, some have a bit sweet
              taste some have a bit salty taste, depends on my mood i can love
              every fried rice.
            </p>
          </div>
        </div>
      </div>
      <div className="h-screen"></div>
    </div>
  );
}
