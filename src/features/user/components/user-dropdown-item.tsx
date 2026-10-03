import { ComponentProps } from "react";
import Link from "next/link";

import { type LucideIcon } from "lucide-react";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

interface SharedProps {
  icon: LucideIcon;
  label: string;
  variant?: ComponentProps<typeof DropdownMenuItem>["variant"];
}

// 1. Navigation Link Item
interface LinkItemProps extends SharedProps {
  href: string;
}

export function UserDropdownLink({
  href,
  icon: Icon,
  label,
  variant = "default",
}: LinkItemProps) {
  return (
    <DropdownMenuItem
      variant={variant}
      render={<Link href={href} className="flex w-full items-center" />}
    >
      <Icon className="mr-2 h-4 w-4" />
      <span>{label}</span>
    </DropdownMenuItem>
  );
}

// 2. Action Button Item (Logout, Delete, Open Modal)
interface ActionItemProps extends SharedProps {
  onClick: () => void;
}

export function UserDropdownAction({
  onClick,
  icon: Icon,
  label,
  variant = "default",
}: ActionItemProps) {
  return (
    <DropdownMenuItem
      variant={variant}
      onClick={onClick}
      className="cursor-pointer"
    >
      <Icon className="mr-2 h-4 w-4" />
      <span>{label}</span>
    </DropdownMenuItem>
  );
}
