import React from 'react'
import clsx from 'clsx'
import { LandingSectionCtaButton } from './LandingButtonCTA';
import { objectives_1, objectives_2, description } from '@/utils/about-us-data';



const AboutUs = () => {

return (
        <div className='text-white "w-full"'>
            <div className={clsx("not-prose", "w-full", "px-4 landing-md:px-10")}>
                <h2
                    className={clsx(
                        "text-2xl landing-sm:text-[32px]",
                        "tracking-tight",
                        "text-start",
                        "p-0",
                        "dark:text-gray-0 text-gray-900",
                    )}
                >
                    Where{" "}
                    <span
                        className={clsx(
                            "font-semibold",
                            "dark:text-refine-green-alt dark:drop-shadow-[0_0_30px_rgba(71,235,235,0.3)]",
                            "text-refine-blue drop-shadow-[0_0_30px_rgba(0,128,255,0.3)]",
                        )}
                    >
                        FinTech {" "}
                    </span>
                    and the {" "}
                    <span
                        className={clsx(
                            "font-semibold",
                            "dark:text-refine-cyan-alt dark:drop-shadow-[0_0_30px_rgba(71,235,235,0.25)]",
                            "text-refine-indigo drop-shadow-[0_0_30px_rgba(51,51,255,0.3)]",
                        )}
                    >
                        Data Science{" "}
                    </span>
                    converge to redefine{" "}
                    <span
                        className={clsx(
                            "font-semibold",
                            "dark:text-refine-red dark:drop-shadow-[0_0_30px_rgba(255,76,77,0.4)]",
                            "text-refine-purple drop-shadow-[0_0_30px_rgba(128,0,255,0.3)]",
                        )}
                    >
                        finance
                    </span>
                    .
                </h2>
            </div>

            <div
                className={clsx(
                    "w-full",
                    "relative",
                    "mt-8 landing-sm:mt-12 landing-lg:mt-20",
                    "pb-4 landing-md:pb-10",
                    "dark:bg-landing-packages-dark bg-landing-packages",
                    "dark:bg-slate-800 bg-gray-50",
                    "rounded-2xl landing-sm:rounded-3xl",
                    "overflow-hidden",
                )}
            >
                
                <div className={clsx(
                        "not-prose",
                        "mt-4 landing-sm:mt-6 landing-lg:mt-10",
                        "px-4 landing-sm:px-10",
                    )}>
                    <h6
                        className={clsx(
                            "p-0",
                            "font-semibold",
                            "text-base landing-sm:text-2xl",
                            "dark:text-gray-300 text-gray-900",
                        )}
                    >
                        About Us
                    </h6>
                    <div
                        className={clsx(
                            "not-prose",
                            "flex",
                            "items-center",
                            "justify-between",
                            "flex-wrap",
                            "gap-4 landing-sm:gap-8",
                        )}
                    >
                        <article
                            className={clsx(
                                "p-0",
                                "mt-2 landing-sm:mt-4",
                                "text-base",
                                "dark:text-slate-400 text-slate-600",
                            )}
                        >
                        {description}
                        </article>
                        <a href="#contact">
                            <LandingSectionCtaButton>
                                Contact Us
                            </LandingSectionCtaButton>
                        </a>
                    </div>
                </div>

                <div className="landing-packages-mask pt-4 landing-md:pt-10">
                    <div className='relative flex items-center justify-end'>
                        <div className="hover:[animation-play-state:paused] animate-landing-packages-right-mobile landing-md:animate-landing-packages-right absolute left-0 top-0 pr-4 w-auto flex items-center gap-[18px] mt-6 relative">
                                {
                                    objectives_1.map((data,v)=>{
                                    return(
                                        <div key={v} className="group relative z-10 flex items-center justify-center gap-3 pl-4 pt-4 pb-4 pr-6 bg-[#14141F] rounded-full cursor-pointer">
                                            <div>
                                                {data.icon}
                                            </div>
                                            <div className="text-sm font-medium dark:bg-landing-packages-text-dark bg-landing-packages-text bg-clip-text text-transparent whitespace-nowrap">
                                                {data.title}
                                            </div>
                                        </div>
                                    )
                                    })
                                }
                            </div>
                        </div>
                    <div className="relative flex items-center justify-start">
                                <div className="hover:[animation-play-state:paused] animate-landing-packages-left-mobile landing-md:animate-landing-packages-left absolute left-0 top-0 pr-4 w-auto flex items-center gap-[18px] mt-6 relative">
                                {
                                    objectives_2.map((data,v)=>{
                                    return(
                                        <div key={v} className="group relative z-10 flex items-center justify-center gap-3 pl-4 pt-4 pb-4 pr-6 bg-[#14141F] rounded-full cursor-pointer">
                                            <div>
                                                {data.icon}
                                            </div>
                                            <div className="text-sm font-medium dark:bg-landing-packages-text-dark bg-landing-packages-text bg-clip-text text-transparent whitespace-nowrap">
                                                {data.title}
                                            </div>
                                        </div>
                                    )
                                    })
                                }
                                </div>
                            </div>
                </div>
            </div>
        </div>
  )
  
}

export default AboutUs

//Start faster, maintain easier, manage complexity.
//To revolutionize financial services through cutting-edge solutions. From automated trading to crypto innovation, we harness big data, machine learning, and advanced analytics to pave the way for a smarter, more agile future.
