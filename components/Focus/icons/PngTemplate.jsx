import React from 'react'
import Image from 'next/image'
const PngTemplate = ({path,title}) => { 
  return (
    <Image src={path} width={100} height={100} alt={title} className=""/>
  )
}

export default PngTemplate