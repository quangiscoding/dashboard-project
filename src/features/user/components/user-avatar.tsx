"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { useUser } from "../hooks/use-user";

interface UserAvatarProps {
  className?: string;
}

export function UserAvatar({ className }: UserAvatarProps) {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return <Skeleton className={cn("h-8 w-8 rounded-full", className)} />;
  }

  const { name = "", avatarUrl = "" } = user ?? {};

  return (
    <Avatar className={cn("h-8 w-8", className)}>
      <AvatarImage src={avatarUrl} alt={name || "User avatar"} />
      <AvatarFallback>{getInitials(name)}</AvatarFallback>
    </Avatar>
  );
}

// Helper to extract up to 2 uppercase initials from a name (e.g. "Jane Doe" -> "JD")
function getInitials(name?: string) {
  if (!name) return "U";

  const initials = name
    .trim()
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return initials.slice(0, 2) || "U";
}
