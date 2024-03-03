import { DataTablesIcon } from "@/components/Services/icons/DataTablesIcon"
import { ListIcon } from "@/components/Services/icons/ListIcon"
import { ChartsIcon } from "@/components/Services/icons/ChartsIcon"
import { FormsIcon } from "@/components/Services/icons/FormsIcon"
import { WizardsIcon } from "@/components/Services/icons/WizardsIcon"
import { AuthenticationIcon } from "@/components/Services/icons/AuthenticationIcon"
import clsx from "clsx"

export const list = [
    {
      title:
        "Data Analytics",
      description: [
        "Process big data and identify meaningful insights",
        "Perform exploratory data analyses and reporting",
        "Build time-series models for advanced financial analysis",
        "Develop prediction models using ML and SL techniques"
      ],
      icon: props => (
        <DataTablesIcon
          className={clsx(
            props.active ? "dark:text-[#FA3852] text-[#D22D2D]" : "text-gray-500"
          )}
        />
      ),
      iconText: "Analysis",
      image1Dark:
        "/datatables-ui-dark.png",
      image1Light:
        "/datatables-ui-light.png",
      imageCode: '/code/ZenData.png',
      backgroundImage:
        "dark:bg-landing-sweet-spot-glow-red-dark bg-landing-sweet-spot-glow-red-light"
    },
    {
      title:
        "Data Design and Reporting Services",
      description: [
        "Build scalable data warehouses for complex business enterprises.",
        "Implement ETL services for dynamic data modelling and reporting needs",
        "Provide generic data services with customizable hierarchical reports",
        "Develop bespoke reports as per business requirements."
      ],
      icon: props => (
        <ListIcon
          className={clsx(
            props.active ? "dark:text-[#F98C1F] text-[#F46A25]" : "text-gray-500"
          )}
        />
      ),
      iconText: "Data Design",
      image1Dark:
        "/list-ui-dark.png",
      image1Light:
        "/list-ui-light.png",
      imageCode: "/code/analysis.png",
      backgroundImage:
        "dark:bg-landing-sweet-spot-glow-orange-dark bg-landing-sweet-spot-glow-orange-light"
    },
    {
      title:
        "Technology Design & Architecture Services",
      description: [
        "Engineer tools that enable complex business work flow.",
        "Build frameworks supporting efficient application development.",
        "Design and develop user configurable data visualisations.",
        "Review and re-engineer existing application for future demands."
      ],
      icon: props => (
        <ChartsIcon
          className={clsx(
            props.active ? "dark:text-[#F9D51F] text-[#FF9F1A]" : "text-gray-500"
          )}
        />
      ),
      iconText: "Architecture",
      image1Dark:
        "/forms-ui-dark.png",
      image1Light:
        "/forms-ui-light.png",
      imageCode: '/code/archi.png',
      backgroundImage:
        "dark:bg-landing-sweet-spot-glow-yellow-dark bg-landing-sweet-spot-glow-yellow-light"
    },
    {
      title:
        "Visualization Management",
      description: [
        "Make the most intuitive and usable story-telling/presentation layer",
        "Simplify and quicken data interpretation with drill-throughs and pivots",
        "Create user centric customization techniques across the tool set",
        "Build sharing and collaboration into usability"
      ],
      icon: props => (
        <FormsIcon
          className={clsx(
            props.active ? "dark:text-[#47D1BF] text-[#089191]" : "text-gray-500"
          )}
        />
      ),
      iconText: "Visualization",
      image1Dark:
        "/charts-ui-dark.png",
      image1Light:
        "/charts-ui-light.png",
      imageCode:
        "/code/visual.png",
      backgroundImage:
        "dark:bg-landing-sweet-spot-glow-cyan-dark bg-landing-sweet-spot-glow-cyan-light"
    },
    {
      title:
        "Web Developement",
      description: [
        "Web based front-end applications adopting latest technology",
        "Single-page application design",
        "UI UX Design",
        "Database management and transition"
      ],
      icon: props => (
        <WizardsIcon
          className={clsx(
            props.active ? "dark:text-[#3DB8F5] text-[#1F80E0]" : "text-gray-500"
          )}
        />
      ),
      iconText: "Web",
      image1Dark:
        "/wizards-ui-dark.png",
      image1Light:
        "/wizards-ui-light.png",
      imageCode:"/code/web.png",
      backgroundImage:
        "dark:bg-landing-sweet-spot-glow-blue-dark bg-landing-sweet-spot-glow-blue-light"
    },
    {
      title:
        "Data Warehouse",
      description: [
        "Designing and implementing business intelligence solutions",
        "Data warehouse integration with the existing infrastructure (data sources, BI and data analytics infrastructure).",
        "Warehouse configuration and development",
        "Data migration and data cleaning."
      ],
      icon: props => (
        <AuthenticationIcon
          className={clsx(
            props.active ? "dark:text-[#5959FF] text-[#693BC6]" : "text-gray-500"
          )}
        />
      ),
      iconText: "DWH",
      image1Dark:
        "/authentication-ui.png",
      image1Light:
        "/authentication-ui-light.png",
      imageCode:"/code/dwh.png",
      backgroundImage:
        "dark:bg-landing-sweet-spot-glow-indigo-dark bg-landing-sweet-spot-glow-indigo-light"
    }
  ]
  