import React from 'react';
import Image from 'next/image'
import mySVG from '../svgs/tech-company-animate.svg'


const HeroSvgComponent = () => {
  return (
    <div>
    <Image src={mySVG} className='h-full w-full' height={100} width={100} alt='Tech Company Image'/>
    </div>
  )
}

export default HeroSvgComponent