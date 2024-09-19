'use client'
import React from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";
import "../globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faFile } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  useEffect(()=>{
    AOS.init({
      duration: 700,
      easing: 'ease',
    });
  });
  return (
    <div className="h-screen bg-gradient-to-b black flex items-center" id="about" data-aos="fade">
      <div className="flex flex-col md:flex-row w-4/5 bg-gradient-to-br from-zinc-700/75 via-zinc-700/75 to-zinc-600/75 mx-auto rounded-xl p-6 md:p-9 justify-center gap-6 md:gap-20 items-center">
        <div className="md:w-5/12" data-aos="fade-right">
          <h1 className="text-3xl md:text-4xl lato">Hi, i&apos;m <span className="text-yellow-300">Leonard</span>, a student who&apos;s interested in programming especially Web Development.</h1>
        </div>
        <div className="md:w-2/4" data-aos="fade-up">
          <p className="text-lg montserrat">I started <span className="text-yellow-300">web development</span> since 2019 where i&apos;m in junior high school and i love learning and creating a website.</p>
        </div>
      </div>
    </div>
  );
}
