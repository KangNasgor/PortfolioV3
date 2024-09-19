import React from "react";
import react from "../assets/react.svg";
import tailwind from "../assets/tailwind.svg";
import html from "../assets/html.svg";
import next from "../assets/next-js.svg";
import css from "../assets/css.svg";
import bootstrap from "../assets/bootstrap.svg";
import laravel from "../assets/laravel.svg";
import heidi from "../assets/heidisql.png";
import php from "../assets/php.svg";
import Image from "next/image";

export default function Skills() {
  return (
    <div className="h-fit w-9/12 mx-auto my-14">
      <div className="w-full p-3 rounded-md bg-zinc-800/75" data-aos="fade">
        <h1 className="text-4xl w-fit ml-2" data-aos="fade-right">Skills</h1>
        <div className="flex flex-row md:flex-col gap-5 mt-5">
          <div data-aos="fade-up">
            <h1 className="w-fit ml-2 font-semibold">Front-End</h1>
            <div className="flex flex-col md:flex-row gap-4 py-3 pl-3">
              <a href="https://react.dev" target="_blank">
                <Image src={react} width={100} height={100} alt="react" />
              </a>  
              <a href="https://nextjs.org" target="_blank">
                <Image src={next} width={100} height={100} alt="nextjs" className="bg-white rounded-full"/>
              </a>
              <a href="https://en.wikipedia.org/wiki/HTML" target="_blank">
                <Image src={html} width={100} height={100} alt="html" />
              </a>
              <a href="https://en.wikipedia.org/wiki/CSS" target="_blank">
                <Image src={css} width={100} height={100} alt="css" />
              </a>
              <a href="https://getbootstrap.com" target="_blank">
                <Image src={bootstrap} width={100} height={100} alt="bootstrap" />
              </a>
              <a href="https://tailwindcss.com" target="_blank">
                <Image src={tailwind} width={100} height={100} alt="tailwind" />
              </a>
            </div>
          </div>
          <div className="w-px h-11/12 md:w-full mx-auto bg-white opacity-50" style={{height : "0.5px"}} data-aos="fade-right">
          </div>
          <div data-aos="fade-up">
            <h1 className="w-fit ml-2 font-semibold">Back-End</h1>
            <div className="flex flex-col md:flex-row gap-5 py-3 pl-3">
              <a href="https://www.php.net" target="_blank">
                <Image src={php} width={100} height={100} alt="php"/>
              </a>
              <a href="https://laravel.com" target="_blank">
                <Image src={laravel} width={90} height={90} alt="laravel"/>
              </a>
              <a href="https://www.heidisql.com" target="_blank">
                <Image src={heidi} width={100} height={100} alt="heidi"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
