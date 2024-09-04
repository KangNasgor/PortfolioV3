'use client'
import React from "react";
import { useState, useEffect } from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Navbar() {
  const [isBarOpen, setIsBarOpen] = useState(false);
  const toggleBar = () => {
    setIsBarOpen(!isBarOpen);
  };
  return (
    <div>
      <div className="h-auto ml-3 mt-4 fixed z-50">
        <button className="flex flex-col gap-1.5 z-40" onClick={toggleBar}>
          <div
            className="w-8 h-1 bg-gradient-to-br from-white via-slate-400 to-gray-500 rounded"
            style={{
              transform: isBarOpen
                ? "translate(0, 10px) rotate(45deg)"
                : "translate(0, 0) rotate(0deg)",
              transition: "0.5s ease",
            }}
          ></div>
          <div
            className="w-8 h-1 bg-gradient-to-br from-white via-slate-400 to-gray-500 rounded"
            style={{
              opacity: isBarOpen ? "0" : "100",
              transition: "0.5s ease",
            }}
          ></div>
          <div
            className="w-8 h-1 bg-gradient-to-br from-white via-slate-400 to-gray-500 rounded"
            style={{
              transform: isBarOpen
                ? "translate(0, -10px) rotate(-45deg)"
                : "translate(0, 0) rotate(0deg)",
              transition: "0.5s ease",
            }}
          ></div>
        </button>
      </div>
      <div
        className="h-full w-8/12 md:w-5/12 lg:w-2/12 bg-zinc-700 fixed flex flex-col z-30 overflow-x-hidden text-xl"
        style={{
          transform: isBarOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "0.5s ease",
        }}
      >
          <Link href="/about" className="flex items-center gap-3 mt-14 bg-zinc-800 py-3 px-3 text-end transition shadow-inner">
            <FontAwesomeIcon icon={faUser} className="text-white"/>
            <h2 className="text-white">About Me</h2>
          </Link>
      </div>
    </div>
  );
}
