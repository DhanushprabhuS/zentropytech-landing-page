import clsx from "clsx"
import React from "react"
import { EnterpriseGetInTouchButton } from "./GetInTouchButton"

export const GetInTouchCTA = props => {
  return (
    <div className={clsx(props.className)}>
      <div
        className={clsx(
          "not-prose",
          "flex flex-col landing-md:flex-row",
          "items-center",
          "justify-between",
          "gap-4 landing-sm:gap-6",
          "py-3 pr-6 pl-6 landing-md:pl-12",
          "rounded-2xl landing-md:rounded-full",
          "dark:bg-slate-800 bg-slate-50",
          "dark:bg-enterprise-cta-dark dark:landing-md:bg-enterprise-cta-dark-md",
          "bg-enterprise-cta-light landing-md:bg-enterprise-cta-light-md"
        )}
      >
        <h2
          className={clsx(
            "text-sm landing-sm:text-2xl",
            "dark:text-slate-300 text-slate-600"
          )}
        >
          Ready to reach new heights? Join our team today!
        </h2>
        <a href="#contact">
        <EnterpriseGetInTouchButton/>
        </a>
      </div>
    </div>
  )
}
