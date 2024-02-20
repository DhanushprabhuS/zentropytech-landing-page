import React from 'react'
import TypeAnimationTagLine from './TypeAnimationTagLine'
import { LandingHeroAnimation } from '@/components/Checking';
import clsx from 'clsx'
import HeroSvgComponent from './HeroSvgComponent';

const Hero = () => {
  return (
<div
            className={clsx(
                "flex",
                "flex-col",
                "w-full",
                "gap-4",
                "landing-sm:gap-12",
                "landing-md:gap-[59px]",
                "landing-lg:gap-20",
            )}
        >
            <div
                className={clsx(
                    "px-2 landing-sm:px-0",
                    "flex",
                    "flex",
                    "w-full",
                    "relative",
                    "min-h-[360px]",
                    "landing-lg:min-h-[480px]",
                    "py-4",
                )}
            >
                <div
                    className={clsx(
                        "landing-sm:pl-10",
                        "flex",
                        "flex-col",
                        "justify-center",
                        "gap-6",
                        "z-[1]",
                        "landing-lg:justify-between",
                        "landing-lg:py-8",
                    )}
                >
                    <div className={clsx("flex", "flex-col", "gap-6")}>
                        <h1
                            className={clsx(
                                "text-[32px] leading-[40px]",
                                "tracking-[-0.5%]",
                                "landing-sm:text-[56px] landing-sm:leading-[72px]",
                                "landing-sm:max-w-[588px]",
                                "landing-sm:tracking-[-2%]",
                                "font-extrabold",
                                "text-white ",
                            )}
                        >
                           Zentropy Technologies
                        </h1>
                        <p
                            className={clsx(
                                "font-normal",
                                "text-md md:text-xl",
                                "text-gray-600 dark:text-[#BCC3CE]",
                                "landing-xs:max-w-[384px]",
                                "h-9 md:h-14"
                            )}
                        >
                          Gateway to enterprise {" "}
                            <span
                              className={clsx(
                                "dark:text-refine-cyan-alt dark:drop-shadow-[0_0_30px_rgba(71,235,235,0.75)]",
                                "text-refine-indigo drop-shadow-[0_0_30px_rgba(51,51,255,0.3)]"
                              )}
                            >
                            <TypeAnimationTagLine/>
                          </span>
                        </p>
                    </div>
                    <div
                        className={clsx(
                            "flex",
                            "items-center",
                            "justify-start",
                            "gap-4",
                            "landing-lg:gap-6",
                        )}
                    >
                        <div
                            className={clsx(
                                "self-start",
                                "rounded-3xl",
                                "!text-slate-0 dark:!text-slate-900",
                                "bg-refine-blue dark:bg-refine-cyan-alt",
                                "transition-[filter]",
                                "duration-150",
                                "ease-in-out",
                                "hover:brightness-110",
                                "py-3",
                                "pl-7 pr-8",
                                "landing-md:px-8",
                                "landing-lg:pl-7 landing-lg:pr-8",
                                "flex",
                                "items-center",
                                "justify-center",
                                "gap-2",
                                "hover:!no-underline"
                            )}
                        >
                          <svg
                              width={25}
                              height={24}
                              viewBox="0 0 25 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"  
                          >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M6.63817 4.33485C7.45968 3.87698 8.46639 3.88939 9.2762 4.36769L18.4191 9.76769C19.21 10.2348 19.7 11.0807 19.7 12C19.7 12.9193 19.21 13.7652 18.4191 14.2323L9.2762 19.6323C8.46639 20.1106 7.45968 20.123 6.63817 19.6652C5.81527 19.2065 5.3 18.343 5.3 17.4V6.6C5.3 5.65703 5.81527 4.79348 6.63817 4.33485ZM8.46252 5.74534C8.14253 5.55634 7.74213 5.55128 7.4171 5.73244C7.09346 5.91282 6.9 6.24599 6.9 6.6V17.4C6.9 17.754 7.09346 18.0872 7.4171 18.2676C7.74213 18.4487 8.14253 18.4437 8.46252 18.2547L17.6054 12.8547C17.916 12.6712 18.1 12.3452 18.1 12C18.1 11.6548 17.916 11.3288 17.6054 11.1453L8.46252 5.74534Z"
                                fill="currentColor"
                            />
                          </svg>
                            <span className={clsx("text-base", "font-semibold")}>
                                <a href='#about'>Learn More</a>
                            </span>
                        </div>
                    </div>
                </div>
                <div
                    className={clsx(
                        "hidden landing-md:block",
                        "absolute",
                        "top-0",
                        "right-0",
                    )}
                >
                    <LandingHeroAnimation />
                </div>
            </div>
            <div className='landing-md:hidden -mt-24'>
                <HeroSvgComponent/>
            </div>
        </div>
  )
}

export default Hero