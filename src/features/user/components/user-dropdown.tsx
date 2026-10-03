"use client";

import {
  User,
  Users,
  CreditCard,
  Sparkles,
  Settings,
  LogOut,
} from "lucide-react";
import { useUser } from "@/features/user/hooks/use-user";
import { UserAvatar } from "./user-avatar";
import { UserDropdownItem } from "./user-dropdown-item";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function UserDropdown() {
  const { user } = useUser();

  if (!user) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="ghost"
            className="relative h-9 w-9 overflow-hidden rounded-full p-0"
          />
        }
      >
        <UserAvatar name={user.name} src={user.avatarUrl} />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-fit">
        {/* Header thông tin người dùng */}
        <DropdownMenuGroup>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm leading-none font-medium">{user.name}</p>
              <p className="text-muted-foreground text-xs">{user.email}</p>
            </div>
          </DropdownMenuLabel>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        {/* Nhóm tài khoản cá nhân */}
        <DropdownMenuGroup>
          <UserDropdownItem href="/profile" icon={User} label="Profile" />

          {user.role === "ADMIN" && (
            <UserDropdownItem
              href="/billing"
              icon={CreditCard}
              label="Billing"
            />
          )}

          <UserDropdownItem
            href="/subscription"
            icon={Sparkles}
            label="Subscription"
          />
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        {/* Nhóm Workspace */}
        <DropdownMenuGroup>
          <UserDropdownItem href="/team" icon={Users} label="Team" />
          <UserDropdownItem href="/settings" icon={Settings} label="Settings" />
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        {/* Nút Đăng xuất */}
        <DropdownMenuItem
          className="text-destructive focus:text-destructive cursor-pointer"
          onClick={() => {
            // Logic đăng xuất
          }}
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
