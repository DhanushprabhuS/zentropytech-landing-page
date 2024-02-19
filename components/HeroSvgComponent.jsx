import React from 'react';
import Image from 'next/image'
import mySVG from '../svgs/tech-company-animate.svg'
import hero from '../svgs/hero.svg'
import template from '../svgs/dots.svg'
import logo from '../svgs/logo.svg'


const HeroSvgComponent = () => {
  return (
    <div>
    <Image src={mySVG} className='h-full w-full' height={100} width={100} alt='svg'/>
    </div>
  )
}

export default HeroSvgComponent