import React from 'react';
import Image from 'next/image'

const SvgTemplate = ({svg,title}) => {
  return (
    <div>
    <Image src={svg} className='h-full w-full' height={200} width={200} alt={title}/>
    </div>
  )
}

export default SvgTemplate