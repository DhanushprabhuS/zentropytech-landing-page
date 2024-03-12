"use client"
import React, { useEffect, useRef, useState } from "react"
import clsx from "clsx"
import Image from 'next/image'
import { AnimatePresence, motion, useInView } from "framer-motion"
import { OrangeStarIcon } from "./icons/OrangeStarIcon"
//import { list } from "@/utils/service-data"


import { DataTablesIcon } from "@/components/Services/icons/DataTablesIcon"
import { ListIcon } from "@/components/Services/icons/ListIcon"
import { ChartsIcon } from "@/components/Services/icons/ChartsIcon"
import { FormsIcon } from "@/components/Services/icons/FormsIcon"
import { WizardsIcon } from "@/components/Services/icons/WizardsIcon"
import { AuthenticationIcon } from "@/components/Services/icons/AuthenticationIcon"


const list = [
    {
      title:
        "Data Analytics",
      description: [
        "Process big data and identify meaningful insights",
        "Perform exploratory data analyses and reporting",
        "Build time-series models for advanced financial analysis",
        "Develop prediction models using ML and SL techniques"
      ],
      icon: props => (
        <DataTablesIcon
          className={clsx(
            props.active ? "dark:text-[#FA3852] text-[#D22D2D]" : "text-gray-500"
          )}
        />
      ),
      iconText: "Analysis",
      image1Dark:
        "/datatables-ui-dark.png",
      image1Light:
        "/datatables-ui-light.png",
      imageCode: '/code/ZenData.png',
      backgroundImage:
        "dark:bg-landing-sweet-spot-glow-red-dark bg-landing-sweet-spot-glow-red-light"
    },
    {
      title:
        "Data Design and Reporting Services",
      description: [
        "Build scalable data warehouses for complex business enterprises.",
        "Implement ETL services for dynamic data modelling and reporting needs",
        "Provide generic data services with customizable hierarchical reports",
        "Develop bespoke reports as per business requirements."
      ],
      icon: props => (
        <ListIcon
          className={clsx(
            props.active ? "dark:text-[#F98C1F] text-[#F46A25]" : "text-gray-500"
          )}
        />
      ),
      iconText: "Data Design",
      image1Dark:
        "/list-ui-dark.png",
      image1Light:
        "/list-ui-light.png",
      imageCode: "/code/analysis.png",
      backgroundImage:
        "dark:bg-landing-sweet-spot-glow-orange-dark bg-landing-sweet-spot-glow-orange-light"
    },
    {
      title:
        "Technology Design & Architecture Services",
      description: [
        "Engineer tools that enable complex business work flow.",
        "Build frameworks supporting efficient application development.",
        "Design and develop user configurable data visualisations.",
        "Review and re-engineer existing application for future demands."
      ],
      icon: props => (
        <ChartsIcon
          className={clsx(
            props.active ? "dark:text-[#F9D51F] text-[#FF9F1A]" : "text-gray-500"
          )}
        />
      ),
      iconText: "Architecture",
      image1Dark:
        "/forms-ui-dark.png",
      image1Light:
        "/forms-ui-light.png",
      imageCode: '/code/archi.png',
      backgroundImage:
        "dark:bg-landing-sweet-spot-glow-yellow-dark bg-landing-sweet-spot-glow-yellow-light"
    },
    {
      title:
        "Visualization Management",
      description: [
        "Make the most intuitive and usable story-telling/presentation layer",
        "Simplify and quicken data interpretation with drill-throughs and pivots",
        "Create user centric customization techniques across the tool set",
        "Build sharing and collaboration into usability"
      ],
      icon: props => (
        <FormsIcon
          className={clsx(
            props.active ? "dark:text-[#47D1BF] text-[#089191]" : "text-gray-500"
          )}
        />
      ),
      iconText: "Visualization",
      image1Dark:
        "/charts-ui-dark.png",
      image1Light:
        "/charts-ui-light.png",
      imageCode:
        "/code/visual.png",
      backgroundImage:
        "dark:bg-landing-sweet-spot-glow-cyan-dark bg-landing-sweet-spot-glow-cyan-light"
    },
    {
      title:
        "Web Developement",
      description: [
        "Web based front-end applications adopting latest technology",
        "Single-page application design",
        "UI UX Design",
        "Database management and transition"
      ],
      icon: props => (
        <WizardsIcon
          className={clsx(
            props.active ? "dark:text-[#3DB8F5] text-[#1F80E0]" : "text-gray-500"
          )}
        />
      ),
      iconText: "Web",
      image1Dark:
        "/wizards-ui-dark.png",
      image1Light:
        "/wizards-ui-light.png",
      imageCode:"/code/web.png",
      backgroundImage:
        "dark:bg-landing-sweet-spot-glow-blue-dark bg-landing-sweet-spot-glow-blue-light"
    },
    {
      title:
        "Data Warehouse",
      description: [
        "Designing and implementing business intelligence solutions",
        "Data warehouse integration with the existing infrastructure (data sources, BI and data analytics infrastructure).",
        "Warehouse configuration and development",
        "Data migration and data cleaning."
      ],
      icon: props => (
        <AuthenticationIcon
          className={clsx(
            props.active ? "dark:text-[#5959FF] text-[#693BC6]" : "text-gray-500"
          )}
        />
      ),
      iconText: "DWH",
      image1Dark:
        "/authentication-ui.png",
      image1Light:
        "/authentication-ui-light.png",
      imageCode:"/code/dwh.png",
      backgroundImage:
        "dark:bg-landing-sweet-spot-glow-indigo-dark bg-landing-sweet-spot-glow-indigo-light"
    }
  ]
  



export const LandingSweetSpot = ({ className }) => {
  const ref = useRef(null)
  const inView = useInView(ref)
  const isDarkTheme = "dark";
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
    <div className={clsx("w-full",'pt-16')} id="service">
      <div className={clsx("not-prose", "w-full", "px-4 py-1 rounded-2xl landing-md:px-10",
      'bg-landing-tile-grid-bg')}>
        <h2
          className={clsx(
            "text-2xl landing-sm:text-[32px]",
            "tracking-tight",
            "text-start",
            "p-0",
            "dark:text-white"
          )}
        >
          The main{" "}
          <span
            className={clsx(
              "font-semibold",
              "text-3xl md:text-4xl lg:text-5xl",
              "dark:text-refine-cyan-alt dark:drop-shadow-[0_0_30px_rgba(71,235,235,0.25)]",
              "text-refine-indigo drop-shadow-[0_0_30px_rgba(51,51,255,0.3)]"
            )}
          >
            Services
          </span>{" "}
          provided by us.
        </h2>
        <p
          className={clsx(
            "mt-4 landing-sm:mt-6",
            "max-w-md",
            "text-base",
            "dark:text-slate-400",
          )}
        >
          {`We're specialize in data analysis and machine learning. We also offer development services in the form of web based front-end applications adopting latest technology and visualization techniques. `}
        </p>
      </div>

      <div className={clsx("mt-8 landing-sm:mt-12 landing-lg:mt-20")} ref={ref}>
        <div
          className={clsx(
            "select-none",
            "relative",
            "h-[752px] landing-sm:h-[874px] landing-md:h-[984px] landing-lg:h-[688px]",
            "not-prose",
            "pt-4 landing-sm:pt-10 landing-lg:pt-20",
            "pb-4 landing-lg:pb-0",
            "pl-4 landing-sm:pl-10",
            "dark:bg-[#1E1E2F] bg-gray-50",
            "rounded-2xl landing-sm:rounded-3xl",
            "overflow-hidden",
            "dark:bg-noise"
          )}
        >
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut"
              }}
              key={activeIndex}
              className={clsx(
                "absolute",
                "inset-0",
                "z-0",
                "landing-xs:bg-landing-sweet-spot-glow-position-xs",
                "landing-lg:bg-landing-sweet-spot-glow-position-lg",
                "landing-md:bg-landing-sweet-spot-glow-position-md",
                "landing-xs:bg-landing-sweet-spot-glow-size-xs",
                "landing-lg:bg-landing-sweet-spot-glow-size-lg",
                activeListItem.backgroundImage
              )}
              style={{
                backgroundRepeat: "repeat, no-repeat"
              }}
            />
          </AnimatePresence>
          <div
            className={clsx(
              "relative",
              "z-[1]",
              "h-full w-full",
              "flex flex-col landing-lg:grid landing-lg:grid-cols-12"
            )}
          >
            <div
              className={clsx(
                "not-prose",
                "pr-6 landing-sm:pr-0",
                "landing-sm:max-w-[540px] landing-md:max-w-[760px] landing-lg:max-w-[416px]",
                "landing-lg:col-span-5",
                "landing-lg:mt-6"
              )}
            >
              <h3
                className={clsx(
                  "text-2xl landing-md:text-3xl font-bold",
                  "dark:text-slate-300 text-slate-700"
                )}
              >
                {activeListItem.title}
              </h3>
              {
                activeListItem.description.map((item,v)=>{
                  return(
                    <div className="flex space-x-4 mt-6 items-center" key={v}>
                      <div>
                      <OrangeStarIcon className="drop-shadow-none dark:drop-shadow-github-stars-glow" />
                      </div>
                      <p
                      key={v}
                      className={clsx(
                        "text-base",
                        "dark:text-slate-400 text-slate-600"
                      )}>
                        {item}
                      </p>
                    </div>
                  )
                })
              }
              <div
                className={clsx(
                  "mt-4 landing-sm:mt-10",
                  "w-max",
                  "grid",
                  "grid-cols-2 landing-sm:grid-cols-3 landing-lg:grid-cols-2",
                  "landing-sm:gap-x-2 gap-y-4",
                  "not-prose"
                )}
              >
                {list.map((item, index) => {
                  const active = index === activeIndex
                  const Icon = item.icon
                  return (
                    <button
                      key={item.iconText}
                      onClick={() => {
                        setShouldIncrement(false)
                        setActiveIndex(index)
                      }}
                      className={clsx(
                        "appearance-none",
                        "focus:outline-none",
                        "cursor-pointer",
                        active
                          ? "dark:bg-[#14141F] bg-slate-0"
                          : "dark:bg-[#14141F]/40 bg-slate-0/50",
                        "w-max",
                        "flex",
                        "items-center",
                        "justify-start",
                        "gap-1",
                        "px-4 py-2",
                        "rounded-full",
                        "text-sm landing-sm:text-base",
                        'text-slate-200'
                      )}
                    >
                      <div>
                        <Icon active={active} />
                      </div>
                      <div
                        className={clsx(
                          active
                            ? "dark:text-white"
                            : "dark:text-slate-400 text-slate-600"
                        )}
                      >
                        {item.iconText}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
              <div
                className={clsx(
                  "relative",
                  "h-full",
                  "mt-4 landing-sm:mt-[72px] landing-lg:mt-0",
                  "flex",
                  "landing-lg:col-start-7 landing-lg:col-end-13"
                )}
              >
                <div
                  className={clsx(
                    "w-full",
                    "h-full",
                    "landing-sweet-spot-mask",
                    "z-[1]",
                    "landing-lg:absolute",
                    "top-0 right-0"
                  )}
                >
                  {list.map((item, index) => {
                    const active = index === activeIndex
                    return (
                      <Image
                        key={index}
                        src={isDarkTheme ? item.image1Dark : item.image1Light}
                        alt="UI of Zentropy"
                        className={clsx(
                          "block",
                          "object-cover",
                          "object-left-top",
                          "w-full landing-md:w-[874px] landing-lg:w-full",
                          "h-full landing-lg:h-[464px]",
                          "landing-md:pl-20 landing-lg:pl-0",
                          "absolute",
                          "top-0 right-0",
                          active && "delay-300",
                          active ? "translate-x-0" : "translate-x-full",
                          active ? "opacity-100" : "opacity-0",
                          "transition-[transform,opacity] duration-500 ease-in-out"
                        )}
                        width={500}
                        height={500}
                      />
                    )
                  })}
                </div>

                {list.map((item, index) => {
                  const active = index === activeIndex

                  return (
                    <div
                      key={index}
                      className={clsx(
                        "block",
                        "z-[2]",
                        "w-[328px] landing-sm:w-[488px]",
                        "absolute",
                        "bottom-0 landing-sm:bottom-[4px] landing-lg:bottom-[78px]",
                        "-left-2 landing-lg:-left-20",
                        "rounded-xl",
                        "dark:bg-gray-900 bg-gray-0",
                        "dark:shadow-landing-sweet-spot-code-dark",
                        "shadow-landing-sweet-spot-code-light",
                        active && "delay-300",
                        active ? "translate-y-0" : "translate-y-full",
                        active ? "opacity-100" : "opacity-0",
                        "transition-[transform,opacity] duration-500 ease-in-out"
                      )}
                    >
                      <Image
                        src={item.imageCode}
                        alt="Code of Zentropy"
                        className="rounded-2xl"
                        width={500}
                        height={500}
                      />
                    </div>
                  )
                })}
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

