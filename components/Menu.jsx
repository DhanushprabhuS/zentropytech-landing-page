import React from 'react';
import logo from '../public/logo.png';
import Image from 'next/image';
import HamburgerMenu from './HamburgerMenu';
import Link from 'next/link'


const Menu = () => {
    const menuContent = ['home','about','service','focus','contact']

    //border-[#328891] border-[1.5px]
    //bg-[#1C1C2E]
    //#bg-[#14141F]
  return (
    <nav className="relative container mx-auto top-0 left-0 right-0 flex justify-center p-4">
        <div className="fixed bg-[#14141F]/50 rounded-full  flex items-center justify-between 
        py-2 px-4 space-x-24 w-64 md:w-5/6 lg:w-2/3 z-10 backdrop-blur-[12px]">
            <Image 
                src={logo} height={100} width={100}  alt='Zentropy'
                className="rounded-xl justify-start"
            />   
            <div className="hidden md:flex justify-end items-center space-x-8">
                {
                    menuContent.map((title)=><Link href={'#'+title} className='text-sm p-1 text-white font-semibold hover:text-slate-500' key={title}>{title[0].toUpperCase()+title.slice(1)}</Link>)
                }       
            </div>
            <div className='md:hidden mt-1'>
                <HamburgerMenu/>
            </div>    
        </div>
    </nav>
  )
}

export default Menu