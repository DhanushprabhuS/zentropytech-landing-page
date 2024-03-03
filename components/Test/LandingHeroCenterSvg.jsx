import React from "react"

export const LandingHeroCenterSvg = props => (
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={168}
      height={168}
      fill="none"
      {...props}
    >
      <image
        className="hidden dark:block"
        href="/logo.png"
        x={0}
        y={0}
        width={158}
        height={158}
      />
      <image
        className="block dark:hidden"
        href="/logo.png"
        x={0}
        y={0}
        width={158}
        height={158}
      />
    </svg>
  </>
)
