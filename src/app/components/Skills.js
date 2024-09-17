import React from "react";
import react from "../assets/react.svg";
import tailwind from "../assets/tailwind.svg";
import html from "../assets/html.svg";
import next from "../assets/next-js.svg";
import css from "../assets/css.svg";
import bootstrap from "../assets/bootstrap.svg";
import laravel from "../assets/laravel.svg";
import heidi from "../assets/heidisql.png";
import Image from "next/image";

export default function Skills() {
  return (
    <div className="h-screen w-9/12 mx-auto">
      <div className="w-6/12 md:w-9/12">
        <h1 className="text-4xl w-fit">Skills</h1>
        <div className="flex flex-row md:flex-col gap-5 mt-5">
          <div>
            <h1 className="w-fit">Front-End</h1>
            <div className="flex flex-col md:flex-row gap-3 py-3">
              <Image src={react} width={100} height={100} alt="react" />
              <Image src={next} width={100} height={100} alt="nextjs" className="bg-white rounded-full"/>
              <Image src={html} width={100} height={100} alt="html" />
              <Image src={css} width={100} height={100} alt="css" />
              <Image src={bootstrap} width={100} height={100} alt="bootstrap" />
              <Image src={tailwind} width={100} height={100} alt="tailwind" />
            </div>
          </div>
          <div>
            <h1 className="w-fit">Back-End</h1>
            <div className="flex flex-col md:flex-row gap-3 py-3">
              <Image src={laravel} width={100} height={100} alt="laravel"/>
              <Image src={heidi} width={100} height={100} alt="heidi"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
