import Link from "next/link";
import { ThemeToggler } from "@/features/theme";
import { UserDropdown } from "@/features/user";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function AppNavbar() {
  return (
    <nav className="flex w-full items-center justify-between p-4">
      <SidebarTrigger />
      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <Link href="/">Dashboard</Link>
        <ThemeToggler />
        <UserDropdown />
      </div>
    </nav>
  );
}
