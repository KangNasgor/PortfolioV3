"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import style from "../globals.css";


export default function Modal({ display, setDisplay }) {
  const close = () => {
    const modal = document.querySelector('.modal');
    const modalContent = document.querySelector('.modal-animation-open');
    if(modal && event.target === modal){
      modalContent.classList.remove('modal-animation-open');
      modalContent.classList.add('modal-animation-close');
      setTimeout(() => {
        setDisplay(false);
        modalContent.classList.add('modal-animation-open');
        modalContent.classList.remove('modal-animation-close');
      }, 300);
    }
  };
  window.onclick = function(event){
    close();
  }
  return (
    <div className={`modal w-full h-full bg-black/[0.8] fixed left-1/2 transform -translate-x-1/2 top-0 rounded text-start ${ display  ? "block"  : "hidden" }`} style={{ zIndex: 9999 }}>
      <div className='bg-white text-black px-5 py-4 mt-28 md:mt-52 w-9/12 md:w-5/12 rounded mx-auto modal-animation-open'>
        <div className="flex w-full h-8 items-center mb-8 md:mb-20 gap-2 justify-between">
          <button onClick={close}>
            <div className="gap-1">
              <div className="w-5 h-1 bg-black rounded rotate-45 transform translate-y-1"></div>
              <div className="w-5 h-1 bg-black rounded -rotate-45"></div>
            </div>
          </button>
          <h1 className="text-center text-3xl w-fit">Contacts</h1>
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <div className="bg-black text-white md:px-3 pb-3 rounded w-1/2 mx-auto transition-all hover:scale-110 transform active:translate-y-2">
            <a href="https://www.instagram.com/ashurazzx/" target="_blank">
              <div className="w-14 h-14 bg-yellow-300 rounded-full mx-auto flex justify-center items-center transform -translate-y-5">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-3xl text-black"
                />
              </div>
              <p className="w-fit mx-auto -mt-3">@ashurazzx</p>
            </a>
          </div>
          <div className="bg-black text-white md:px-3 pb-3 rounded w-1/2 mx-auto transition-all hover:scale-110 transform active:translate-y-2">
            <a href="https://github.com/KangNasgor" target="_blank">
              <div className="w-14 h-14 bg-yellow-300 rounded-full mx-auto flex justify-center items-center transform -translate-y-5">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-3xl text-black"
                />
              </div>
              <div className="flex w-full -mt-3">
                <p className="w-fit mx-auto">KangNasgor</p>
              </div>
            </a>
          </div>
          <div className="bg-black text-white md:px-3 pb-3 rounded w-1/2 mx-auto transition-all hover:scale-110 transform active:translate-y-2">
            <a href="https://www.youtube.com/@NasgorKang" target="_blank">
              <div className="w-14 h-14 bg-yellow-300 rounded-full mx-auto flex justify-center items-center transform -translate-y-5">
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="text-3xl text-black"
                />
              </div>
              <div className="flex w-full -mt-3">
                <p className="w-fit mx-auto">KangNasgor</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
