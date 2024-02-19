"use client"
import { TypeAnimation } from 'react-type-animation';
import clsx from 'clsx';

const TypeAnimationTagLine = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        '💲Finance ',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        '🖥️ Technology ',
        1500,
        '⚙️ Data Science ',
        1500,
        '🕸️ Web Developement ',
        1500,
        '📈 Algorithmic Trading ',
        1500,
        '🔗 Crypto Trading and Blockchain ',
        1500,
      ]}
      wrapper="span"
      speed={30}
      className={clsx(
        "font-normal",
        "text-md md:text-lg",
        "text-gray-600 dark:text-[#BCC3CE]",
        "landing-xs:max-w-[384px]",

    )}
      repeat={Infinity}
      cursor
    />
  );
};

export default TypeAnimationTagLine;