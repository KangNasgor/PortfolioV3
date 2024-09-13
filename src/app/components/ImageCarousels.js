"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight,faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function ImageCarousels({images,active,prev,next,setActive}) {
  const activeStyling = {
    // CSS style for active index
    transform: "translateX(0%) scale(1.2)",
    zIndex: 15,
    transition: "0.5s ease",
  };
  return (
    <div className="">
      <div className="flex w-full h-full gap-0 justify-center relative">
        {images.map((img, index) => (
          <div
            className="absolute w-32 h-32 md:w-52 md:h-52"
            key={index}
            onClick={() => {setActive(index)}}
            style={
              index === active // this checks if the index is active
                ? activeStyling
                : index > active // this checks if the index is larger than active (meaning the right image)
                ? {
                    transform: `translateX(${30 * index - active}%)`,
                    zIndex: `${10 / index}`,
                    transition: "0.5s ease",
                  }
                : index === 0 // this is for the first index when it's not an active index
                ? {
                    transform: "translateX(-40%)",
                    transition: "0.5s ease",
                  }
                : {
                    // this is for the left image
                    transform: `translateX(${-30 * index - active}%)`,
                    zIndex: `${10 * index}`,
                    transition: "0.5s ease",
                  }
            }
          >
            <Image
              src={img}
              width={200}
              height={200}
              alt="idk"
              className="shadow-3xl"
            />
          </div>
        ))}
      </div>
      <div className="flex gap-5 mt-40 md:mt-56 justify-center">
        <button onClick={prev} className="text-yellow-300 transition-all hover:text-yellow-600">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button onClick={next} className="text-yellow-300 transition-all hover:text-yellow-600">
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
}
/**
 EXPLANATION : 
 i define active useState to manage which index should be active and give it a styling using translateX and z-index so it will move to the center
 when the active index changed the styling also change to every image, using ternary operators i manage the styling to be able to move to the right or left with smooth transition
 i map an array containing the img source then i manage the index and everything inside that map
 */
