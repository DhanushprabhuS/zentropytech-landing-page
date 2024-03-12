'use client'
import clsx from "clsx"
import React from "react"
import Image from 'next/image'
import { useState } from "react"
import { LandingSectionCtaButton } from "../LandingButtonCTA"
import { rightList as list } from "@/utils/about-us-data"



export const CompanySkillsRight = ({ className }) => {


  const [activeIndex, setActiveIndex] = useState(0)
  const activeListItem = list[activeIndex]
  
  React.useEffect(() => {
    
    let interval
    if (true) {
      interval = setInterval(() => {
        setActiveIndex(prev => (prev + 1) % list.length)
      }, 5000)
    }

    return () => clearInterval(interval)
  }, [])
  


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
        <div className="flex items-center">
          <Image src={activeListItem?.svg} className="h-72 w-full" height={100} width={100} alt={"Image"}/>
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
            
            <a href="#focus">
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
