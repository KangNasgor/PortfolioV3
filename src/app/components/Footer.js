import {
  faGithub,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Footer() {
  return (
    <div className="w-full h-fit z-10 py-9 bg-zinc-900 shadow-2xl">
      <div
        className="w-10/12 bg-white mx-auto mb-10 opacity-50"
        style={{ height: "0.5px" }}
      ></div>
      <div className=" w-9/12 flex flex-col md:flex-row justify-between gap-8 mx-auto">
        <div className="flex flex-col items-start w-full md:w-3/12">
          <h1 className="text-yellow-300 text-3xl text-center">About</h1>
          <h3 className="text-white mt-4">
            This website is all about me, my skills, my knowledge, and my
            improvement in programming
          </h3>
        </div>
        <div className="flex flex-col items-start w-full md:w-fit">
          <h1 className="text-yellow-300 text-3xl text-center">Contact</h1>
          <div className="text-white mt-4 flex flex-col gap-1">
            <a href="https://www.instagram.com/ashurazzx/" target="_blank" className="transition-all hover:text-slate-500 transform hover:translate-x-2">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faInstagram} className="text-xl" />
                <p>@ashurazzx</p>
              </div>
            </a>
            <a href="https://github.com/KangNasgor" target="_blank" className="transition-all hover:text-slate-500 transform hover:translate-x-2">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faGithub} className="text-xl" />
                <p>KangNasgor</p>
              </div>
            </a>
            <a href="https://www.youtube.com/@NasgorKang" target="_blank" className="transition-all hover:text-slate-500 transform hover:translate-x-2">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faYoutube} className="text-xl" />
                <p>KangNasgor</p>
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center w-full md:w-fit">
          <h3 className="text-white">© 2024 Leonard Alfareno. All Rights Reserved.</h3>
        </div>
      </div>
    </div>
  );
}
