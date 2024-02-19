"use client"
import React from 'react';
import { useRef } from 'react';

const HamburgerMenu = () => {
    const elementBtn = useRef(null);
    const handleClick = ()=>{
       elementBtn.current?.classList.toggle('open');
    }

    return (
        <>
            <button
            ref={elementBtn}
            onClick={()=>handleClick()} 
            className="z-40 block hamburger md:hidden focus:outline:none">
                        <span className="hamburger-top"></span>
                        <span className="hamburger-middle"></span>
                        <span className="hamburger-bottom"></span>
            </button>
        </>
    )
}

export default HamburgerMenu