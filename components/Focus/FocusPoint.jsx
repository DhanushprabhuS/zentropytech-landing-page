'use client';
import React from "react";
import clsx from "clsx"
import Image from 'next/image'
import { GetInTouchCTA } from "./GetInTouchCTA"
import BackgroundAnimation from "../BackgroundAnimation";
import { Controller, Scene } from 'react-scrollmagic';
import './FocusPoint.css'

import tradeSvg from '../../svgs/trade.svg';
import tradePortfolioSvg from '../../svgs/trade-portfolio.svg';
import dataScienceSvg from '../../svgs/data-science.svg';
import DWHSvg from '../../svgs/DWH.svg';
import cryptoSvg from '../../svgs/crypto.svg';
import blockSvg from '../../svgs/block-chain.svg';

import SvgTemplate from "./SvgTemplate";

const list = 
[
    {
        icon: <SvgTemplate svg={tradeSvg} title={'Algo Trading'}/>,
        title: "Algorithmic Trading",
        description:
            "Algorithmic trading is the core focus at Zentropy Technologies, where we specialize in leveraging advanced AI for precision and success in financial markets.",
    },
    {
        icon: <SvgTemplate svg={cryptoSvg} title={'Crypto Trading'}/>,
        title: "Crypto Trading",
        description:
            "Crypto trading takes center stage at Zentropy Technologies, where we excel in harnessing innovative strategies and AI technology for profitable investments.",
    },
    {
        icon: <SvgTemplate svg={tradePortfolioSvg} title={'Trade porfolio'}/>,
        title: "Trade Portfolio Management",
        description:
            "Trade portfolio management is the primary focus at Zentropy Technologies, where we specialize in optimizing investment strategies and maximizing returns through advanced algorithms.",
    },
    {
      icon: <SvgTemplate svg={dataScienceSvg} title={'Data Science'}/>,
      title: "Data Science",
      description:
          "Data science stands as the central pillar of Zentropy Technologies, driving innovation and powering insightful decision-making for our clients' success.",
    },
    {
        icon: <SvgTemplate svg={DWHSvg} title={'Data Wearhouse'}/>,
        title: "Data Warehouse",
        description:
            "Data warehouse solutions are the cornerstone of Zentropy Technologies, empowering businesses with robust data storage and analytics capabilities for informed decision-making.",
    },
    {
        icon:  <SvgTemplate svg={blockSvg} title={'Block Chain'}/>,
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

/*
const ref = useRef(null);
const [isIntersecting, setIsIntersecting] = useState(false);
useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

*/

export const FocusPoint = () => {

  const [isMobile,setIsMobile] = React.useState(false);

  React.useEffect(()=>{
      if(window.innerWidth<780){
        setIsMobile(true);
      }else
      {
        setIsMobile(false);
      }
  },[])


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
    
    <div className="relative flex flex-col justify-end landing-md:flex-row landing-md:items-start mx-4 overflow-hidden">
      <Controller>
        <Scene
          duration={isMobile?'2200':'3000'}
          triggerHook={0.1}
          pin={'#pin'}
        >
        <div className="w-full landing-md:w-1/2" id="pin">
          <BackgroundAnimation/>
        </div>
        </Scene>
      </Controller>
      <div
          className={clsx(
                        'flex flex-col',
                        'items-center justify-center landing-md:items-center',
                        'space-y-12 landing-md:space-y-24',
                        'w-full landing-md:w-1/2',
                        'relative',
                        'pb-96'
          )}>
        <div className="glowing-line"></div>
          {list.map((item, index) => {
                return (
                  <div
                      key={index}
                      className={clsx(
                                    "p-4",
                                    "flex",
                                    "flex-col",
                                    "items-center",
                                    "gap-1",
                                    'bg-landing-noise',
                                    'bg-slate-900',
                                    "rounded-lg",
                                    'border',
                                    'border-refine-cyan',
                                    'w-full',
                                    'z-[1]'
                                )}
                    >
                    <div className="h-[150px] w-[150px] landing-sm:h-auto landing-sm:w-auto">{item.icon}</div>
                    <div className={clsx("flex", "flex-col", "gap-4")}>
                      <div
                          className={clsx(
                              "text-xl",
                              "font-semibold",
                              "text-slate-900 dark:text-slate-300",
                              'text-left'
                              )}
                            >
                              {item.title}
                      </div>
                      <div
                        className={clsx(
                                  "text-md",
                                  "font-normal",
                                  "text-slate-900 dark:text-slate-400",
                                  'text-left'
                                  )}>
                                  {item.description}
                      </div>
                    </div>
                </div>);
            })}
        </div>
    </div>
    <GetInTouchCTA className={"w-full landing-lg:max-w-[792px] mx-auto mt-0"} />
</>
)
}

