import Link from "next/link";
import { SquareMenu } from "lucide-react";
import { ThemeToggler } from "@/features/theme";
import { UserDropdown } from "@/features/user";

export function AppNavbar() {
  return (
    <nav className="flex w-full items-center justify-between p-4">
      {/* LEFT */}
      <SquareMenu />
      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <Link href="/">Dashboard</Link>
        <ThemeToggler />
        <UserDropdown />
      </div>
    </nav>
  );
}
