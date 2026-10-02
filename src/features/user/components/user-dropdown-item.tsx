import Link from "next/link";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { LucideIcon } from "lucide-react";

interface UserDropdownItemProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

export function UserDropdownItem({
  href,
  icon: Icon,
  label,
}: UserDropdownItemProps) {
  return (
    <DropdownMenuItem
      render={<Link href={href} className="flex w-full items-center" />}
    >
      <Icon className="mr-2 h-4 w-4" />
      <span>{label}</span>
    </DropdownMenuItem>
  );
}
