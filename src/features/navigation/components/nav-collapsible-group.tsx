import Link from "next/link";
import { ChevronRight, Plus, Projector } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

interface NavCollapsibleGroupProps {
  title: string;
}

export function NavCollapsibleGroup({ title }: NavCollapsibleGroupProps) {
  return (
    <Collapsible defaultOpen>
      <SidebarGroup>
        <SidebarGroupLabel
          render={
            <CollapsibleTrigger className="group text-sidebar-foreground/70 hover:text-sidebar-foreground flex w-full items-center justify-between text-xs font-medium">
              <span>{title}</span>
              <ChevronRight className="ml-auto size-4 transition-transform duration-200 group-data-open:rotate-90 group-data-panel-open:rotate-90" />
            </CollapsibleTrigger>
          }
        />
        <CollapsibleContent>
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
        </CollapsibleContent>
      </SidebarGroup>
    </Collapsible>
  );
}
