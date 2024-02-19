'use client'
import clsx from "clsx"
import React from "react"
import Image from 'next/image'
import { useState, useRef, useEffect  } from "react"
import { AnimatePresence, motion, useInView } from "framer-motion"
import { LandingSectionCtaButton } from "../LandingButtonCTA"


export const CompanySkillsRight = ({ className }) => {

  const ref = useRef(null)
  const inView = useInView(ref)

  const [activeIndex, setActiveIndex] = useState(0)
  const activeListItem = list[activeIndex]

  const [shouldIncrement, setShouldIncrement] = useState(true)

  useEffect(() => {
    if (!shouldIncrement) {
      return
    }

    let interval
    if (inView) {
      interval = setInterval(() => {
        setActiveIndex(prev => (prev + 1) % list.length)
      }, 3000)
    }

    return () => clearInterval(interval)
  }, [shouldIncrement, inView])




  return (
    <div ref={ref} className={clsx(className)}>
      <div
        className={
          clsx(
          "not-prose",
          "flex-shrink-0",
          "h-full",
          "p-2 landing-sm:p-4",
          "rounded-2xl landing-sm:rounded-3xl",
          "dark:bg-landing-stars",
          "dark:bg-slate-700 bg-slate-50",
          
        )}

        onMouseEnter={()=>{setShouldIncrement(false)}}

        onMouseLeave={()=>{setShouldIncrement(true)}}
      >
        <Image 
          className={clsx(
           'w-full h-72',
           "rounded-xl landing-sm:rounded-2xl",
            "delay-300",
            1 ? "translate-x-0" : "translate-x-full",
            1 ? "opacity-100" : "opacity-0",
            "transition-[transform,opacity] duration-500 ease-in-out"
          )}
          width={500}
          height={500}
          src={activeListItem.image}  
          alt={activeListItem.title}
        />
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
            {activeListItem.title}
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
              {activeListItem.description}
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


const list = [
  {
    "title":"Algorithmic Trading",
    "image":'/right-skills/trading-on-hands.png',
    "description":`Exchange connectivity and trade execution  |  Smart order routing  |  Strategy development and implementation  |  Event based back testing and optimisation`
  },
  {
    "title":"Crypto Trading & Blockchain",
    "image":'/right-skills/crypto.jpg',
    "description":`ICO infrastructure  |  Multiple exchange connectivity  |  Customised wallets and smart contracts  |  Blockchain based applications`
  },
  {
    "title":"Trade Portfolio Management",
    "image":'/right-skills/portfolio.png',
    "description":`Trade and fund accounting  |  Risk management  |  Reconciliation systems  |  Customised reporting and workflow management`
  },
  {
    "title":"Web Developement",
    "image":'/right-skills/web.png',
    "description":`Fullstack web developement | Frontend Design | UI | UX | Responsive | Landing pages`
  }
]