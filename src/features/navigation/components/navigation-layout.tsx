import { SidebarProvider } from "@/components/ui/sidebar";
import { AppNavbar } from "./app-navbar";
import { AppSidebar } from "./app-sidebar";

interface NavigationLayoutProps {
  children: React.ReactNode;
}

export function NavigationLayout({ children }: NavigationLayoutProps) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex min-h-screen flex-1 flex-col">
        <AppNavbar />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </SidebarProvider>
  );
}
