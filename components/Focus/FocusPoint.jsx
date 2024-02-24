'use client';
import clsx from "clsx"
import React from "react"
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react';
import PngTemplate from "./icons/PngTemplate"
import { GetInTouchCTA } from "./GetInTouchCTA"


const list = [
    {
        icon: <PngTemplate path={'/focus/tradedoodle.png'} title={'Trading'}/>,
        title: "Algorithmic Trading",
        description:
            "Algorithmic trading is the core focus at Zentropy Technologies, where we specialize in leveraging advanced AI for precision and success in financial markets.",
    },
    {
        icon: <PngTemplate path={'/focus/cryptodoodle.png'} title={'Trading'}/>,
        title: "Crypto Trading",
        description:
            "Crypto trading takes center stage at Zentropy Technologies, where we excel in harnessing innovative strategies and AI technology for profitable investments.",
    },
    {
        icon: <PngTemplate path={'/focus/portfolio.png'} title={'Trading'}/>,
        title: "Trade Portfolio Management",
        description:
            "Trade portfolio management is the primary focus at Zentropy Technologies, where we specialize in optimizing investment strategies and maximizing returns through advanced algorithms.",
    },
    {
        icon: <PngTemplate path={'/focus/dsdoodle.png'} title={'Data Science'}/>,
        title: "Data Science",
        description:
            "Data science stands as the central pillar of Zentropy Technologies, driving innovation and powering insightful decision-making for our clients' success.",
    },
    {
        icon: <PngTemplate path={'/focus/dwhdoodle.png'} title={'Data Warehouse'}/>,
        title: "Data Warehouse",
        description:
            "Data warehouse solutions are the cornerstone of Zentropy Technologies, empowering businesses with robust data storage and analytics capabilities for informed decision-making.",
    },
    {
        icon: <PngTemplate path={'/focus/bcdoodle.png'} title={'Block Chain'}/>,
        title: "Block Chain",
        description:
            "Deploy to your own infrastructure without worrying about regulations, performance, and stability. Maintain your current security best practices with no compromises.",
    },
]

/*
"Algorithmic trading takes center stage, where we specialize in leveraging advanced AI for precision and success in financial markets."
"Crypto trading stands out as our expertise, harnessing innovative strategies and AI technology for profitable investments."
"Trade portfolio management is our primary focus, optimizing investment strategies and maximizing returns through advanced algorithms."
"Data science serves as the central pillar, driving innovation and powering insightful decision-making for success."
"Data warehouse solutions are the cornerstone, empowering businesses with robust data storage and analytics capabilities."
"Blockchain technology leads our focus, revolutionizing industries with decentralized solutions for security, transparency, and efficiency."
*/

export const FocusPoint = () => {

  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  

  return (
    <>
    <div
      id="focus"
      className={clsx(
        "relative",
        "flex",
        "flex-col",
        "items-start landing-md:items-center landing-md:justify-center",
        "gap-6 landing-md:gap-12",
        "not-prose",
        "landing-md:mx-auto",
        "w-full",
        "landing-md:h-[264px]",
        "landing-md:overflow-hidden",
        'pt-12'
      )}
    >
      <Image
        className={clsx(
          "absolute",
          "hidden landing-md:block",
          "w-[1200px]",
          "max-w-[1200px]"
        )}
        src="/templates-hero-dark.png"
        width={1000}
        height={1000}
        alt="Zen title Templates"
      />
      <h2
        className={clsx(
          "flex",
          "items-center",
          "justify-center",
          "gap-2",
          "text-[32px] leading-[40px] landing-sm:text-[56px] landing-sm:leading-[72px]"
        )}
      >
        <span className={clsx("dark:text-slate-50 text-slate-900")}>Our </span>
        <span
          className={clsx(
            "font-semibold",
            "dark:text-refine-cyan-alt dark:drop-shadow-[0_0_30px_rgba(71,235,235,0.25)]",
            "text-refine-blue drop-shadow-[0_0_30px_rgba(51,51,255,0.3)]"
          )}
        >
          Focus
        </span>
      </h2>
      <p
        className={clsx(
          "text-base",
          "max-w-[588px]",
          "dark:text-slate-300 text-slate-600"
        )}
      >
        Our main focus lies in algorithmic trading, crypto & blockchain, and data science. 
        We are specialize in integrating innovative technologies to optimize investment strategies. 
        Trust us to elevate your financial portfolio with our expertise.
      </p>
    </div>
    <div
        ref={ref}
        className={clsx(
                    "landing-md:-mt-24",
                    "grid",
                    "grid-cols-1 landing-md:grid-cols-2 landing-lg:grid-cols-3",
                    "gap-4 landing-sm:gap-12 landing-md:gap-6",
                    "mb-4 landing-sm:mb-8 landing-md:mb-2",
                    'bg-landing-stars',
                    'bg-refine-cyan-alt',
                    'rounded-xl',
                    'p-4',
                    'landing-lg:p-12',
                    'overflow-hidden'

                )}
            >
                {list.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={clsx(
                                "p-4 landing-sm:p-4",
                                "flex",
                                "flex-col landing-sm:flex-row landing-md:flex-col",
                                "items-start",
                                "gap-6",
                                "dark:bg-landing-noise",
                                "dark:bg-slate-800 bg-slate-50",
                                "rounded-2xl landing-sm:rounded-3xl",
                                'border-2',
                                'hover:border-refine-green',
                                index%2==0
                                ?isIntersecting?'animate-focus-slide-left':''
                                :isIntersecting?'animate-focus-slide-right':''

                            )}
                        >
                            <div>{item.icon}</div>
                            <div className={clsx("flex", "flex-col", "gap-4")}>
                                <div
                                    className={clsx(
                                        "text-xl",
                                        "font-semibold",
                                        "text-slate-900 dark:text-slate-50",
                                    )}
                                >
                                    {item.title}
                                </div>
                                <div
                                    className={clsx(
                                        "text-base",
                                        "dark:text-slate-400 text-slate-600",
                                    )}
                                >
                                    {item.description}
                                </div>
                            </div>
                        </div>
                    );
                })}
        </div>


        <GetInTouchCTA
          className={"w-full landing-lg:max-w-[792px] mx-auto"}
        />
    </>
  )
}
