'use client'
import React from 'react'

export default function Modal({ display,setDisplay }) {
  const close = () => {
    setDisplay(false);
  }
  return (
    <div className={`bg-white text-black px-5 py-4 z-50 absolute left-1/2 transform -translate-x-1/2 w-full top-0 h-full rounded text-start transition-transform ${display == false ? 'hidden' : 'block'}`}>
        <div className='flex w-full h-8 justify-end'>
            <button onClick={close}>
                <div className='gap-1'>
                    <div className='w-5 h-1 bg-black rounded rotate-45 transform translate-y-1'></div>
                    <div className='w-5 h-1 bg-black rounded -rotate-45'></div>
                </div>
            </button>
        </div>
        <h1 className='text-center text-3xl'>Contacts</h1>
        <div>
            <div>
                Instagram
            </div>
            <div>
                Github
            </div>
            <div>
                Telegram
            </div>
            <div>
                Linkedin
            </div>
        </div>
    </div>
  )
}
