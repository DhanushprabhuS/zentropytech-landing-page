import clsx from 'clsx';
import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import AboutUs from '@/components/AboutUs';
import { LandingSweetSpot } from '@/components/Services/LandingServiceSpot';
import { CompanySkills } from '@/components/AboutCompany/CompanySkills';
import { CompanySkillsRight } from '@/components/AboutCompany/CompanySkillRight';
import { FocusPoint } from '@/components/Focus/FocusPoint';
import ContactUs from '@/components/Contact Us/ContactUs';
import {Footer} from '@/components/Footer/Footer';
import { TopAnnouncement } from '@/components/TopAnnouncement';

export default function Home() {
  //Dhanush Prabhu S
  //dhanushprabhusenthil@gmail.com
  return (
    <div
      className={clsx(
        "dark",
        "main-wrapper",
        "min-h-[100dvh]",
        "flex flex-col",
        "bg-slate-900",
        "scroll-smooth"
      )}
    >
      <Menu/>
      <div
        className={clsx(
          "flex flex-col",
          "gap-16 landing-sm:gap-20 landing-md:gap-28 landing-lg:gap-40",
          "w-full max-w-[592px] landing-sm:max-w-[656px] landing-md:max-w-[896px] landing-lg:max-w-[1200px]",
          "px-2 landing-sm:px-0",
          "pb-12 landing-sm:pb-16 landing-md:pb-20 landing-lg:pb-40",
          "mx-auto",
        )}
        id='home'
      >
          <div
            className={clsx(
              "mt-0",
              "landing-sm:mt-8",
              "landing-lg:mt-20",
              'mx-2'
            )}
          >
            <Hero/>
          </div>
          <div
            className={clsx(
              "flex flex-col",
              "gap-12 landing-md:gap-6",
              'pt-16'
            )}
            id='about'
          >
            <AboutUs/>
            <div
              className={clsx(
                "flex flex-col landing-md:flex-row",
                "gap-12 landing-md:gap-6",
                )}
            >
              <CompanySkills 
                className={clsx(
                  "w-full landing-md:w-[50%] landing-lg:w-[538px]",
                )}
              />
              <CompanySkillsRight 
                className={clsx(
                  "w-full landing-md:w-[50%] landing-lg:w-[640px]",
                )}
              />
            </div>
          </div>
          <LandingSweetSpot/>
          <FocusPoint/>
          <ContactUs/>
      </div>
    <TopAnnouncement/>
    <Footer/>

      <div 
        className=" md:hidden absolute bottom-0 left-0 right-0 top-0 
          dark:bg-[linear-gradient(to_right,#4f4f4f2e_2px,transparent_2px),linear-gradient(to_bottom,#4f4f4f2e_2px,transparent_2px)] 
          bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] 
          bg-[size:32px_32px] 
          [mask-image:radial-gradient(ellipse_60%_100%_at_0%_100%,#000_70%,transparent_100%)]"
      />
    </div>
  )
}
