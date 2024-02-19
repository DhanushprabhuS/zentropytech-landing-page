import React from "react"
import { FooterGithubIcon } from "./icons/FooterGithubIcon"
import { FooterLinkedinIcon } from "./icons/FooterLinkedInIcon"
import { FooterTwitterIcon } from "./icons/FooterTwitterIcon"

export const menuItems = [
  {
    label: "Company",
    items: [
      {
        label: "Home",
        href: "#home"
      },
      {
        label: "About",
        href: "#about"
      },
    ]
  },
  {
    label: "Services",
    items: [
      {
        label: "Service",
        href: "#service"
      },
      {
        label: "Contact",
        href: "#contact"
      }
    ]
  },
  {
    label: "Aim",
    items: [
      {
        label: "Focus",
        href: "#focus"
      }
    ]
  }
]


export const footerDescription = `Zentropy Technologies is a FinTech and Data Science services and consultancy provider. We aim to disrupt financial services like automated trading, portfolio management, crypto trading and blockchain using latest big data technologies, machine learning, and advanced analytics.`

export const socialLinks = [
  {
    icon: FooterGithubIcon,
    href: "https://github.com/zentropytech/"
  },
  {
    icon: FooterTwitterIcon,
    href: "https://www.x.com/zentropytech/"
  },
  {
    icon: FooterLinkedinIcon,
    href: "https://www.linkedin.com/company/zentropytech/"
  }
]
