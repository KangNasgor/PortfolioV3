"use client"
import {useEffect, useState} from "react";
import React from 'react'

const CarouselText = ({text, interval = 2000, className, translateY = 68}) => {
  const [index, setIndex] = useState(0);
  useEffect(()=>{
    const textInterval = setInterval(()=>{
      setIndex((prev) => (prev + 1) % text.length);
    }, interval);
    return () => clearInterval(textInterval);
  }, [text.length, interval]);
  return (
    <div className="h-10 w-full md:h-12 overflow-hidden">
      <div className="flex flex-col text-start gap-8 md:gap-5" style={{
        transition: 'transform 0.5s ease-in-out',
        transform: `translateY(-${index * translateY}px)`,
      }}>
        {text.map((text, index) => (
          <h1 className={className} key={index}>{text}</h1>
        ))}
      </div>
    </div>
  )
}
export default CarouselText;

/*
EXPLANATION :
  the useEffect hook will set the index based on the text, in const textInterval the index value will match the text's length because of the modulo operator
  the useEffect hook will run for every 2000 miliseconds (or 2 seconds)
  the actual text is just a div containing 3 texts where they are stacked eachother overflowing their container, but because of overflow-hidden the only part that is visible is the center or the index
  the most important part is the transform style where it will make the texts go up and up and after reaching the last text the div will go down because of index * 50
  if the index is 0 and multiplied by 50 it will return 0px so nothing happens, but if the index is 1 and multiplying it with 50 will make it -50px and it will go up, making the second text visible, same goes to the third text
  if the index reaches the last text it will return to 0 because of the modulo operator which index(3) % 3 equals to 0
*/
