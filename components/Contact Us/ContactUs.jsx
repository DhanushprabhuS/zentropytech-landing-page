import React from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { EmailIcon } from './EmailIcon'
import { MarkerIcon } from './MarkerIcon'
import { CallIcon } from './CallIcon'

const locations = [
    {
        addr: `Guindy, Chennai,`,
        state: 'TamilNadu-600032',
        color : 'refine-blue'
    },
    {
        addr: 'Palavanthangal, Chennai',
        state:"TamilNadu-600114",
        color : 'refine-blue'
    },
    {
        addr: 'Kondapur, Hyderabad,',
        state: "Telangana-500032",
        color : 'refine-blue'
    }
]

const ContactUs = () => {
  return (
    <>
    <div className={clsx("w-full",'pt-16')} id='contact'>
      <div className={clsx(
        "not-prose", 
        "w-full", 
        "px-4 landing-md:px-10","mb-6 md:mb-12",'py-6',
        'bg-enterprise-frequent-updates-light-md',
        'rounded-2xl',
        
        )}>
        <h2
          className={clsx(
            "text-2xl landing-sm:text-[32px]",
            "tracking-tight",
            "text-start",
            "p-0",
            "dark:text-white"
          )}
        >
          Reach out and{" "}
          <span
            className={clsx(
              "font-semibold",
              "text-3xl md:text-4xl lg:text-5xl",
              "dark:text-refine-cyan-alt dark:drop-shadow-[0_0_30px_rgba(71,235,235,0.25)]",
              "text-refine-indigo drop-shadow-[0_0_30px_rgba(51,51,255,0.3)]"
            )}
          >
            Connect
          </span>{" "}
          with{" "}
          <span
            className={clsx(
              "font-semibold",
              "text-3xl md:text-4xl lg:text-5xl",
              "dark:text-refine-cyan-alt dark:drop-shadow-[0_0_30px_rgba(71,235,235,0.25)]",
              "text-refine-indigo drop-shadow-[0_0_30px_rgba(51,51,255,0.3)]"
            )}
          >
            Us
          </span>{" "}
          today.
        </h2>
        <p
          className={clsx(
            "mt-4 landing-sm:mt-6",
            "max-w-md",
            "text-base",
            "dark:text-slate-400",
          )}
        >
          {`"Let's create something extraordinary together!"`}
        </p>
      </div>
        
      <div
                    className={clsx(
                        "xl:max-w-[1016px] lg:py-16",
                        "lg:max-w-[912px] lg:py-16",
                        "md:max-w-[624px] md:py-10",
                        "sm:max-w-[480px] py-8",
                        "max-w-[328px]",
                        "w-full mx-auto"
                    )}
                >
                    <h4
                        className={clsx(
                            "text-sm leading-6",
                            "md:text-2xl md:leading-8",
                            "text-center text-slate-800 dark:text-slate-200",
                            "mb-8 lg:mb-16",
                        )}
                    >
                        We are Here
                    </h4>

                    <div className="flex flex-col md:gap-8 lg:flex-row lg:gap-10 xl:gap-24">
                        <div className="w-full shrink-0 lg:order-last lg:h-[416px] lg:w-[624px]">
                            <a  >
                                <Image
                                    alt={'email-contact'}
                                    className="m-0 p-0 rounded-lg"
                                    src="/contact-us-zen.jpeg"
                                    width={600}
                                    height={600}
                                    
                                />
                            </a>
                        </div>


                        <div className="mt-6 md:mt-0 flex justify-start flex-col items-start gap-8 ">
                        
                        <div className="flex justify-center items-center gap-6">
                            <div
                                    className={clsx(
                                        "flex justify-center items-center",
                                        "w-[48px] h-[48px]",
                                        "rounded-full ",
                                        "bg-refine-green bg-opacity-10",
                                        "shrink-0",
                                    )}
                                >
                                    <CallIcon className="text-refine-green"/>
                                </div>
                                <a
                                    href="mailto:contact@zentropytech.com"
                                    className="text-slate-700 dark:text-slate-300 hover:no-underline no-underline"
                                >
                                    +91 9849061671

                                </a>
                            </div>

                            <div className="flex justify-center items-center gap-6">
                                <div
                                    className={clsx(
                                        "flex justify-center items-center",
                                        "w-[48px] h-[48px]",
                                        "rounded-full ",
                                        "bg-refine-pink bg-opacity-10",
                                        "shrink-0",
                                    )}
                                >
                                    <EmailIcon className="text-refine-pink"/>
                                </div>
                                <a
                                    href="mailto:contact@zentropytech.com"
                                    className="text-slate-700 dark:text-slate-300 hover:no-underline no-underline"
                                >
                                    contact@zentropytech.com
                                </a>
                            </div>

                            
                        {
                            locations.map((loc,k)=>{
                                return(
                                    <div className="flex w-max items-center justify-center gap-6" key={k}>
                                <div
                                    className={clsx(
                                        "flex justify-center items-center",
                                        "w-[48px] h-[48px]",
                                        "rounded-full ",
                                        `bg-${loc.color} bg-opacity-10`,
                                        "shrink-0",
                                    )}
                                >
                                    <MarkerIcon className={`text-${loc.color}`}/>
                                </div>
                                <span className="text-slate-700 dark:text-slate-300">
                                    {loc.addr}
                                    <br/>
                                    {loc.state}
                                </span>
                            </div>
                                )
                            })
                        }  
                        </div>
                    </div>
                </div>
    </div>
    </>
  )
}

export default ContactUs