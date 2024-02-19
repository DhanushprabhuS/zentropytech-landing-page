"use client"
import React from "react"
import clsx from "clsx"
import { LandingArrowRightIcon } from "./LandingArrowRightIcon"

export const LandingHeroShowcaseSection = ({}) => {
  const [activeApp, setActiveApp] = React.useState(apps[0])


  return (
    <div
      className={clsx(
        "bg-gray-50 dark:bg-[#1D1E30]",
        "flex",
        "flex-col",
        "w-full",
        "rounded-2xl landing-sm:rounded-[32px]",
        "gap-2 landing-sm:gap-4",
        "p-2 landing-sm:p-4",
        "relative",
        "group/showcase",
        "landing-lg:overflow-hidden"
      )}
    >
      <div className={clsx("flex", "w-full", "gap-2")}>
        <div
          className={clsx(
            "rounded-3xl",
            "overflow-y-auto",
            "flex",
            "w-full",
            "gap-2",
            "scrollbar-hidden",
            "snap snap-x snap-mandatory",
            "snap-mandatory"
          )}
        >
          <div
            className={clsx(
              "rounded-3xl",
              "flex",
              "w-auto",
              "landing-lg:w-full",
              "items-center",
              "justify-start",
              "gap-2",
              "relative",
              "bg-gray-0 dark:bg-gray-900"
            )}
          >
            <div
              className={clsx(
                "hidden landing-sm:block",
                "flex-1",
                "rounded-3xl",
                "h-full",
                "bg-gray-200 dark:bg-gray-900",
                "absolute",
                "left-0",
                "top-0",
                "transition-transform",
                "duration-150",
                "ease-out"
              )}
              style={{
                width: `calc((100% - (3 * 8px)) / 4)`,
                minWidth: "244px",
              }}
            />
            {apps.map((app, index) => (
              <button
                key={app.name}
                type="button"
                onClick={event => {
                  setActiveApp(app)
                }}
                className={clsx(
                  "z-[1]",
                  "snap-start",
                  "appearance-none",
                  "focus:outline-none",
                  "border-none",
                  "flex-1",
                  "break-keep",
                  "whitespace-nowrap",
                  "landing-sm:min-w-[244px]",
                  "py-2",
                  "landing-sm:py-3.5",
                  "px-4",
                  "rounded-3xl",
                  "transition-colors",
                  "ease-in-out",
                  "duration-150",
                   activeApp.name==app.name?"bg-[#303450]":'',
                    "text-gray-600 dark:text-white",
                    activeApp.name==app.name ?'': "landing-sm:bg-transparent",
                    activeApp.name==app.name ?'': "dark:landing-sm:bg-transparent",
                  "transition-colors",
                  "duration-150",
                  "ease-out",
                  "text-xs",
                  "landing-sm:text-sm"
                )}
              >
                {app.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "rounded-lg",
          "landing-md:rounded-xl",
          "landing-lg:rounded-2xl",
          "overflow-hidden",
          "shadow-sm shadow-gray-200 dark:shadow-none",
          "relative",
          "group/showcase-inner"
        )}
      >
        <img src={'https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/devops/form.png'}/>
      </div>
    </div>
  )
}

const ShowcaseCRM = ({ className }) => {
  return (
    <div
      className={className}
      render="https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/crm/base-render.png"
      highlights={[
        {
          x: 224,
          y: 88,
          width: 296,
          height: 136,
          render:
            "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/crm/number_of_companies.png",
          codePosition: "right",
          code: `
                                import { useList } from "@refinedev/core";

                                const { data: { total } } = useList({
                                    resource: "companies"
                                });
                                `
        },
        {
          x: 12,
          y: 88,
          width: 200,
          height: 376,
          render:
            "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/crm/sidebar_navigation.png",
          codePosition: "right",
          code: `
                    import { useMenu } from "@refinedev/core";
                    import { Link } from "react-router-dom";

                    const { menuItems } = useMenu();

                    return menuItems.map((item) => (
                        <Link to={item.route}>
                            {item.icon}
                            {item.label}
                        </Link>
                    ));
                                `
        },
        {
          x: 224,
          y: 240,
          width: 296,
          height: 472,
          render:
            "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/crm/upcoming_events.png",
          codePosition: "right",
          code: `
                    import { useList } from "@refinedev/core";

                    const { data } = useList({    
                        resource: "events",
                        sorters: [
                            { field: "start_date", order: "asc" },
                        ],
                    });
                                `
        },
        {
          x: 536,
          y: 240,
          width: 608,
          height: 472,
          render:
            "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/crm/latest_activities.png",
          codePosition: "left",
          code: `
                    import { useTable } from "@refinedev/core";

                    const { data } = useTable({
                        resource: "activities",
                        pagination: {
                            current: 1,
                            pageSize: 5,
                        },
                    });
                                `
        },
        {
          x: 456,
          y: 16,
          width: 256,
          height: 32,
          render:
            "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/crm/search_bar.png",
          codePosition: "bottom",
          code: `
                    import { RefineKbar } from "@refinedev/kbar";

                    <RefineKbar />
                                `
        },
        {
          x: 1120,
          y: 16,
          width: 32,
          height: 32,
          render:
            "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/crm/user_avatar.png",
          codePosition: "left",
          code: `
                    import { useGetIdentity } from "@refinedev/core";

                    const { data: identity } = useGetIdentity();
                                `
        }
      ]}
    />
  )
}

const ShowcaseHR = ({ className }) => {
  return (
    <div
      className={className}
      render="https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/hr/base_render.png"
      highlights={[
        {
          x: 268,
          y: 184,
          width: 496,
          height: 260,
          render:
            "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/hr/inbox.png",
          codePosition: "right",
          code: `
                                import { useList } from "@refinedev/core";

                                const { data } = useList({
                                    resource: "notifications",
                                    filters: [
                                        {
                                            field: "is_read",
                                            operator: "eq",
                                            value: false 
                                        },
                                    ]
                                });
                                `
        },
        {
          x: 12,
          y: 174,
          width: 200,
          height: 344,
          render:
            "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/hr/sider.png",
          codePosition: "right",
          code: `
                                import { useMenu } from "@refinedev/core";
                                import Link from "next/link";

                                const { menuItems } = useMenu();

                                return menuItems.map((item) => (
                                    <Link to={item.route}>
                                        {item.icon}
                                        {item.label}
                                    </Link>
                                ));
                                `
        },
        {
          x: 788,
          y: 184,
          width: 332,
          height: 260,
          render:
            "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/hr/poll.png",
          codePosition: "left",
          code: `
                                import { useList } from "@refinedev/core";

                                const { data } = useList({
                                    resource: "polls",
                                    filters: [
                                        { field: "is_active", operator: "eq", value: true },
                                    ],
                                    pagination: { current: 1, pageSize: 1 }
                                });
                                `
        },
        {
          x: 736,
          y: 24,
          width: 384,
          height: 112,
          render:
            "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/hr/timer.png",
          codePosition: "left",
          code: `
                                import { useGetIdentity, useUpdate } from "@refinedev/core";

                                const { data: { activeTaskId } } = useGetIdentity();

                                const { mutate } = useUpdate();

                                const onBreak = () => mutate({
                                    resource: "tasks",
                                    id: activeTaskId,
                                    values: { is_paused: true },
                                });
                                `
        }
      ]}
    />
  )
}

const ShowcaseECommerce = ({ className }) => {
  return (
    <div
      className={className}
      render="https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/finefoods/base_render.png"
      highlights={[
        {
          x: 843,
          y: 8,
          width: 142,
          height: 48,
          render:
            "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/finefoods/language.png",
          codePosition: "left",
          code: `
                            import { useSetLocale, useGetLocale } from "@refinedev/core";

                            const currentLanguage = useGetLocale();
                            const setLanguage = useSetLocale();

                            const onChange = (language: string) => {
                                setLanguage(language);
                            };
                            `
        },
        {
          x: 211,
          y: 131,
          width: 618,
          height: 354,
          render:
            "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/finefoods/map.png",
          codePosition: "right",
          codeClassName: "!pl-2",
          overlap: true,
          code: `
                            import { useShow } from "@refinedev/core";

                            const { data } = useShow({
                                liveMode: "auto"
                            });
                            
                            return <Map {...data} />;
                            `
        },
        {
          x: 950,
          y: 72,
          width: 210,
          height: 48,
          render:
            "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/finefoods/actions.png",
          codePosition: "left",
          code: `
                    import { useResource, useUpdate } from "@refinedev/core";

                    const { id }  = useResource();
                    const { mutate } = useUpdate();

                    const onReject = () => mutate({
                        resource: “orders”,
                        id,
                        values: {
                            status: “rejected”,
                        },
                    });
                    `
        },
        {
          x: 8,
          y: 216,
          width: 184,
          height: 120,
          render:
            "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/finefoods/menu.png",
          codePosition: "right",
          code: `
                    
                    import { Refine } from "@refinedev/core";

                    <Refine
                        resources={[
                            {
                                name: "stores",
                                meta: { ... },
                            }
                            {
                                name: "products",
                                meta: { parent: "stores", },  
                            },
                            {
                                name: "categories",
                                meta: { parent: "stores", },  
                            }
                        ]}
                    >   
                        ...
                    </Refine>
                    
                    `
        }
      ]}
    />
  )
}

const ShowcaseDevOps = ({ className }) => {
  return (
    <div
      className={className}
      dark
      render="https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/devops/base_render.png"
      highlights={[
        {
          x: 264,
          y: 16,
          width: 392,
          height: 704,
          render:
            "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/devops/table.png",
          codePosition: "right",
          code: `
                        import { useTable } from "@refinedev/react-table";

                        const columns = [
                            {
                                id: "name",
                                header: "Name",
                                accessorKey: "name",
                            },
                            {
                                id: "cpu",
                                header: "CPU(cores)",
                                accessorKey: "cpu",
                            },
                            // ...
                        ];

                        const table = useTable({
                            columns,
                            refineCoreProps: {
                                liveMode: "auto",
                            }
                        });
                        `
        },
        {
          x: 656,
          y: 16,
          width: 496,
          height: 55,
          render:
            "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/devops/actions.png",
          codePosition: "left",
          code: `
                        import { useDelete, useResource } from "@refinedev/core";

                        const { id } = useResource();
                        const { mutate } = useDelete();

                        const onDelete = () => {
                            mutate({
                                resource: "pods",
                                id,
                            });
                        }
                        `
        },
        {
          x: 656,
          y: 71,
          width: 496,
          height: 649,
          render:
            "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/devops/form.png",
          codePosition: "left",
          code: `
                        import { useModalForm } from "@refinedev/react-hook-form";

                        useModalForm({
                            refineCoreProps: {
                                resource: “pods”,
                                liveMode: “manual”,
                                queryMeta: {
                                    populate: [
                                        "labels",
                                        "conditions",
                                    ],
                                },
                            }
                        });
                        `
        }
      ]}
    />
  )
}

const apps = [
  {
    name: "CRM Application",
    link: "https://example.crm.refine.dev",
    showcase: ShowcaseCRM,
    label: "See live demo"
  },
  {
    name: "HR Application",
    link: "https://refine.dev/templates",
    showcase: ShowcaseHR,
    label: "Templates"
  },
  {
    name: "E-Commerce Application",
    link: "https://example.admin.refine.dev",
    showcase: ShowcaseECommerce,
    label: "See live demo"
  },
  {
    name: "DevOps Dashboard",
    link: "https://refine.dev/templates",
    showcase: ShowcaseDevOps,
    dark: true,
    label: "Templates"
  }
]
