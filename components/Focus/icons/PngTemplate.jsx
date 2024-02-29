import React from 'react'
import Image from 'next/image'
const PngTemplate = ({path,title}) => { 
  return (
    <Image src={path} width={75} height={75} alt={title} className=""/>
  )
}

export default PngTemplate