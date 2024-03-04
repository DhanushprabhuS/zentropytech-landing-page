'use client'
import clsx from "clsx"
import React from "react"
import Image from 'next/image'
import { useState } from "react"
import { LandingSectionCtaButton } from "../LandingButtonCTA"
import './about-company.css';
import right from "../../svgs/arrow-right.svg"
import left from "../../svgs/arrow-left.svg"
import { rightList as list } from "@/utils/about-us-data"


export const CompanySkillsRight = ({ className }) => {

  //const ref = useRef(null)
  //const inView = useInView(ref)

  const [activeIndex, setActiveIndex] = useState(0)
  const activeListItem = list[activeIndex]

  //const [shouldIncrement, setShouldIncrement] = useState(true)

  /*
  useEffect(() => {
    
    let interval
    if (inView) {
      interval = setInterval(() => {
        setActiveIndex(prev => (prev + 1) % list.length)
      }, 5000)
    }

    return () => clearInterval(interval)
  }, [shouldIncrement, inView])
  */


  return (
    <div className={clsx(className)}>
      <div
        className={
          clsx(
          "flex-shrink-0",
          "h-full",
          "p-2 landing-sm:p-4",
          "rounded-2xl landing-sm:rounded-3xl",
          "dark:bg-landing-stars",
          "dark:bg-slate-700 bg-slate-50",
          
        )}
      >
        <div className="relative flex space-x-2 items-center">
          <div className={clsx("left-arrow",activeIndex==0?'cursor-not-allowed':'')} onClick={()=>{ if(activeIndex>0){setActiveIndex(prev => (prev - 1) % list?.length)}}}>
          <Image src={left} width={30} height={30} alt={'icons'} className="bg-refine-blue rounded-full"  />
          </div>
          <Image 
          className={clsx(
          'w-full h-72',
          "rounded-xl landing-sm:rounded-2xl",
          )}
          width={500}
          height={500}
          src={activeListItem?.image}  
          alt={activeListItem?.title}
          />
          <div className="right-arrow" onClick={()=>{ setActiveIndex(prev => (prev + 1) % list?.length)}}>
            <Image src={right} width={30} height={30} alt={'icons'} className="bg-refine-blue rounded-full"  />
          </div>
        </div>
        <div
          className={clsx(
            "not-prose",
            "mt-4 landing-sm:mt-6 landing-lg:mt-10",
            "px-4 landing-sm:px-6"
          )}
        >
          <h6
            className={clsx(
              "p-0",
              "font-semibold",
              "text-base landing-sm:text-2xl",
              "dark:text-slate-300 text-slate-900"
            )}
          >
            {activeListItem?.title}
          </h6>
          <div
            className={clsx(
              "not-prose",
              "flex",
              "items-center",
              "justify-between",
              "flex-wrap",
              "gap-4 landing-sm:gap-8",
              "mb-4 landing-sm:mb-6"
            )}
          >
            <p
              className={clsx(
                "h-auto landing-md:h-[72px] landing-lg:h-auto",
                "p-0",
                "mt-2 landing-sm:mt-4",
                "text-base",
                "dark:text-slate-400 text-slate-600",
              )}
            >
              {activeListItem?.description.map((title,idx)=>{
                return(
	                    <span class="" key={idx}>
	                        {title +" | "}
	                    </span>
                )
              })}
            </p>
            
            <a href="#service">
            <LandingSectionCtaButton >
              Learn more
            </LandingSectionCtaButton>
            </a>
          </div>
        </div>
      </div> 
  </div>
  )
}
