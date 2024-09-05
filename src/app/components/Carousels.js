'use client'
import React, { useState } from "react";
import Image from "next/image";

const Carousels = ({ images }) => {
    const [index, setIndex] = useState(0);
  const prev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const next = () => {
    setIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div>
      <div className="slider-container relative w-2/4 max-w-4xl overflow-hidden">
        <div className="image-wrapper flex items-center justify-center relative">
          <div
            className="prev-image absolute left-0 cursor-pointer"
            onClick={prev}
          >
            <Image
              src={images[(index - 1 + images.length) % images.length]}
              alt="Previous"
              className="transition-opacity duration-300 ease-in-out relative z-10"
              width={200}
              height={200}
            />
          </div>
          <div className="current-image">
            <Image
              src={images[index]}
              alt="Current"
              className="w-80 transition-transform duration-300 ease-in-out relative z-50"
              width={300}
              height={300}
            />
          </div>
          <div
            className="next-image absolute right-0 cursor-pointer"
            onClick={next}
          >
            <Image
              src={images[(index + 1) % images.length]}
              alt="Next"
              className="w-40 transition-opacity duration-300 ease-in-out relative z-10"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="nav-buttons absolute inset-0 flex justify-between items-center px-4">
          <button
            className="prev-button text-white text-xl font-bold bg-black p-2"
            onClick={prev}
          >
            ‹
          </button>
          <button
            className="next-button text-white text-xl font-bold bg-black p-2"
            onClick={next}
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousels;
