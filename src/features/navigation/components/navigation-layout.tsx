// src/features/navigation/components/navigation-layout.tsx
import { cookies } from "next/headers";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppNavbar } from "./app-navbar";
import { AppSidebar } from "./app-sidebar";

interface NavigationLayoutProps {
  children: React.ReactNode;
}

export async function NavigationLayout({ children }: NavigationLayoutProps) {
  // All sidebar logic lives HERE inside the navigation feature!
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <div className="flex min-h-screen flex-1 flex-col">
        <AppNavbar />
        {children}
      </div>
    </SidebarProvider>
  );
}
