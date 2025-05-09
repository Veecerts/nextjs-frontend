"use client";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { ADMIN_NAVIGATION } from "@/constants/navigation/admin";
import { APP_NAVIGATION } from "@/constants/navigation/app";
import { useUserQuery } from "@/lib/services/graphql/generated";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import dynamic from "next/dynamic";

const Sidebar = dynamic(
  () => import("@/components/ui/sidebar").then((mod) => mod.Sidebar),
  { ssr: false },
);

interface Props {
  variant?: "app" | "admin";
}

const AppSidebar: React.FC<Props> = ({ variant = "app" }) => {
  const [{ fetching, data }] = useUserQuery();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenuButton className="py-4 pt-8">
          <Image width={190.33} height={57} src="/veeLogo.svg" alt="Veecerts" />
          <Link
            className="w-full"
            href={variant === "admin" ? "/admin" : "/app"}
          >
            <div className="flex text-xs items-center gap-2">
              <div>
                {fetching ? (
                  <Skeleton className="h-4 w-full" />
                ) : (
                  <span>
                    {data?.user?.profile?.firstName}{" "}
                    {data?.user?.profile?.lastName}
                  </span>
                )}
                <address>{data?.user?.email}</address>
              </div>
            </div>
          </Link>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        {(variant === "admin" ? ADMIN_NAVIGATION : APP_NAVIGATION).map(
          (nav) => (
            <SidebarGroup key={nav.header}>
              <SidebarGroupLabel>{nav.header}</SidebarGroupLabel>
              <SidebarMenu>
                {nav.navs.map((inav) =>
                  inav.type === "group" ? (
                    <Collapsible
                      key={inav.title}
                      asChild
                      className="group/collapsible"
                    >
                      <SidebarMenuItem>
                        <CollapsibleTrigger asChild className="w-full">
                          <SidebarMenuButton
                            className="w-full text-base font-medium"
                            tooltip={inav.title}
                          >
                            {inav.icon}
                            <span>{inav.title}</span>
                            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {inav.navs.map((subItem) => (
                              <SidebarMenuSubItem
                                key={subItem.url + subItem.name}
                              >
                                <SidebarMenuSubButton>
                                  <Link href={subItem.url}>
                                    <span>{subItem.name}</span>
                                  </Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </SidebarMenuItem>
                    </Collapsible>
                  ) : (
                    <SidebarMenu key={inav.url + inav.name}>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          {inav.icon}
                          <Link
                            className="w-full text-base font-medium"
                            href={inav.url}
                          >
                            <span>{inav.name}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  ),
                )}
              </SidebarMenu>
            </SidebarGroup>
          ),
        )}
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
