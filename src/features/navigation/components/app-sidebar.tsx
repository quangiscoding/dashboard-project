"use client";

import Link from "next/link";
import { Plus, Projector } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar";
import { useUser } from "@/features/user/hooks/use-user";

import { MAIN_NAV_ITEMS } from "../config/navigation.config";
import { NavCollapsibleGroup } from "./nav-collapsible-group";
import { NavUserDropdown } from "./nav-user-dropdown";
import { NavUserHeader } from "./nav-user-header";

export function AppSidebar() {
  const { isLoading, user } = useUser();
  // const { state, setOpen, isMobile } = useSidebar();

  if (isLoading || !user) return null;

  // const handleMouseEnter = () => {
  //   if (!isMobile && state === "collapsed") setOpen(true);
  // };

  // const handleMouseLeave = () => {
  //   if (!isMobile && state === "expanded") setOpen(false);
  // };

  return (
    <Sidebar
      collapsible="icon"
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      <NavUserHeader userName={user.name} />
      <SidebarSeparator />

      <SidebarContent>
        {/* Application Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {MAIN_NAV_ITEMS.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    render={
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    }
                  />
                  {item.title === "Inbox" && (
                    <SidebarMenuBadge>36</SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Project Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel>Project</SidebarGroupLabel>
          <SidebarGroupAction>
            <Plus />
            <span className="sr-only">Add project</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  render={
                    <Link href="/#">
                      <Projector />
                      <span>See all projects</span>
                    </Link>
                  }
                />
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  render={
                    <Link href="/#">
                      <Plus />
                      <span>Add Project</span>
                    </Link>
                  }
                />
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Collapsible Section */}
        <NavCollapsibleGroup title="Collapsible Group" />
      </SidebarContent>

      <NavUserDropdown />
    </Sidebar>
  );
}
