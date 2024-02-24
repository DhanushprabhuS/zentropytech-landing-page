'use client'
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

const Menu = () => {
    console.log('Welcome to .:| Zentropy Technologies |:.');
  
    const menuContent = ['Home', 'About', 'Service', 'Focus', 'Contact'];
    const [isOpen, setIsOpen] = useState(false);
    const elementBtn = useRef(null);

    const handleClick = () => {
        elementBtn.current?.classList.toggle('open');
        setIsOpen(prev => !prev);
    };

    return (
        <>
            <nav className="relative container mx-auto top-0 left-0 right-0 flex justify-center p-4">
                <div className="fixed bg-[#14141F]/50 rounded-full  flex items-center justify-between 
                py-2 px-4 space-x-24 w-64 md:w-5/6 lg:w-2/3 z-10 backdrop-blur-[12px]">
                    <Image
                        src={'/logo.png'} height={100} width={100} alt='Zentropy'
                        className="rounded-xl justify-start"
                    />
                    <div className="hidden md:flex justify-end items-center space-x-8">
                        {menuContent.map(title => (
                            <Link key={title} href={'#' + title.toLowerCase()} 
                            className='text-sm p-1 text-white font-semibold hover:text-slate-500'
                            onClick={handleClick}
                            >
                                {title}
                            </Link>
                        ))}
                    </div>
                    <div className='md:hidden mt-1'>
                        <button
                            ref={elementBtn}
                            onClick={handleClick}
                            className="z-40 block hamburger md:hidden focus:outline-none">
                            <span className="hamburger-top"></span>
                            <span className="hamburger-middle"></span>
                            <span className="hamburger-bottom"></span>
                        </button>
                    </div>
                </div>
            
            {/**Mobile Menu */}
            {isOpen ? (
                <div className={
                    clsx(
                        'p-4 z-[10] top-20 left-6 right-6',
                        'flex flex-col space-y-3 justify-center items-center text-slate-100', 
                        'bg-refine-blue rounded-lg bg-landing-stars',
                        'md:hidden transition-all duration-1000',
                        'animate-menu-slide-in',
                        'fixed'
                    )
                }>
                    {menuContent.map((title, index) => (
                        <Link key={index} href={'#' + title.toLowerCase()} className='text-md p-1 text-white font-semibold hover:text-slate-500'>
                            {title}
                        </Link>
                    ))}
                    <Link href={'#footer'} className='text-md p-1 text-white font-semibold hover:text-slate-500'>
                            Footer
                    </Link>
                    <Link href={'/'}>
                    <Image src={'/logo.png'} height={100} width={100} alt='Zentropy' className="rounded-xl" />
                    </Link>
                </div>
            ) : null}
            </nav>
        </>
    );
};

export default Menu;
