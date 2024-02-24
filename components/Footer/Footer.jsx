import clsx from "clsx"
import React from "react"
import { menuItems, socialLinks } from "./footer-data"
import { HeartOutlinedIcon } from "./icons/HeartOutlinedIcon"
import Link from 'next/link'
import Image from 'next/image'

export const Footer = () => {
  const info = (
    <div
      className={clsx(
        "py-6 landing-lg:py-0",
        "flex",
        "flex-col",
        "gap-4",
        "landing-lg:max-w-[224px]"
      )}
    >
      <div
        className={clsx(
          "font-semibold",
          "text-sm",
          "leading-6",
          "text-slate-100 dark:text-slate-0"
        )}
      >
        Zentropy Technologies.
      </div>
      <div
        className={clsx(
          "font-normal",
          "text-sm",
          "leading-5",
          "text-slate-600 dark:text-slate-400"
        )}
      >
        Guindy, Chennai, TamilNadu-600032
      </div>
      <Link
        href="mailto:contact@zentropytech.com"
        className={clsx(
          "font-normal",
          "text-sm",
          "leading-5",
          "text-slate-600 dark:text-slate-400",
          "hover:text-slate-800 dark:hover:text-slate-300",
          "hover:no-underline"
        )}
      >
        contact@zentropytech.com
      </Link>
    </div>
  )

  const social = (
    <div
      className={clsx(
        "py-6 landing-lg:py-0",
        "flex",
        "flex-col",
        "landing-sm:items-end"
      )}
    >
      <div className={clsx("flex", "flex-col", "gap-4")}>
        <div
          className={clsx(
            "text-sm",
            "leading-6",
            "font-semibold",
            "text-slate-100 dark:text-slate-0",
            "landing-lg:text-right"
          )}
        >
          Join us on
        </div>
        <div
          className={clsx(
            "flex",
            "items-center",
            "gap-8",
            "landing-lg:gap-4",
            "justify-start"
          )}
        >
          {socialLinks.map(({ href, icon: Icon }) => (
            <Link
              scroll={false}
              href={href}
              key={href}
              className={clsx(
                "text-slate-600 dark:text-slate-400",
                "hover:text-slate-800 dark:hover:text-slate-300",
                "hover:no-underline"
              )}
            >
              <Icon
                className={clsx("w-8 h-8", "landing-lg:w-6 landing-lg:h-6")}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <footer className={clsx("w-full")} id="footer">
      <div
        className={clsx(
          "dark:bg-footer-dark-bg"
        )}
      >
        <div
          className={clsx(
            "grid",
            "grid-cols-1",
            "max-w-screen-landing-md",
            "landing-lg:max-w-screen-landing-lg",
            "mx-auto"
          )}
        >
          <div
            className={clsx(
              "px-4 landing-sm:px-8 landing-lg:px-12",
              "py-4 landing-lg:py-6",
              "flex",
              "items-center",
              "justify-between"
            )}
          >
            <Link href={'/'}>
              <Image src="/logo.png" alt="logo" height={150} width={150}/>
            </Link>
            
          </div>
          <div
            className={clsx(
              "px-4 landing-sm:px-8 landing-lg:px-12",
              "py-6 landing-lg:pt-8 landing-lg:pb-12",
              "flex",
              "flex-row",
              "flex-wrap",
              "items-start",
              "justify-start",
              "gap-6"
            )}
          >
            <div
              className={clsx(
                "hidden",
                "landing-lg:flex",
                "max-w-[282px]",
                "w-full"
              )}
            >
              {info}
            </div>
            {menuItems.map(menu => (
              <div
                className={clsx("flex flex-col gap-4", "min-w-[152px]")}
                key={menu.label}
              >
                <div
                  className={clsx(
                    "text-sm",
                    "leading-6",
                    "font-semibold",
                    "text-slate-100 dark:text-slate-0"
                  )}
                >
                  {menu.label}
                </div>
                <div className={clsx("flex", "flex-col", "gap-2")}>
                  {menu.items.map(item => (
                    <Link
                      
                      href={item.href}
                      key={item.label}
                      className={clsx(
                        "text-sm",
                        "leading-5",
                        "hover:no-underline",
                        "text-slate-600 dark:text-slate-400",
                        "hover:text-slate-800 dark:hover:text-slate-300"
                      )}
                    >
                      <div className={clsx("flex", "items-center", "gap-2")}>
                        {item.label}
                        {item.icon}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className={clsx("hidden", "landing-lg:flex", "ml-auto")}>
              {social}
            </div>
          </div>
          <div
            className={clsx(
              "px-4 landing-sm:px-8",
              "grid",
              "grid-cols-1",
              "landing-sm:grid-cols-2",
              "landing-sm:gap-8",
              "landing-lg:hidden"
            )}
          >
            {info}
            {social}
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "border-t border-t-solid",
          "border-t-slate-100 dark:border-t-slate-700",
          "bg-slate-50 dark:bg-slate-800"
        )}
      >
        <div
          className={clsx(
            "py-4 landing-sm:py-6 landing-lg:py-6",
            "px-4 landing-sm:px-8 landing-lg:px-12",
            
          )}
        >
        
          <div
            className={clsx(
              "text-center",
              "text-sm",
              "pr-6 landing-sm:pr-0",
              "text-slate-100 dark:text-slate-0",
              "font-normal"
            )}
          >
            {"© 2024, Zentropy Technologies.  Finance | Technology | Data Science "}
            <HeartOutlinedIcon
              className={clsx("ml-1", "text-refine-red", "inline", "leading-5")}
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
