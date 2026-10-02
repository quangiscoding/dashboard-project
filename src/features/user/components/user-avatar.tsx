import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserAvatarProps {
  name?: string;
  src?: string;
  className?: string;
}

export function UserAvatar({ name, src, className }: UserAvatarProps) {
  return (
    <Avatar className={className}>
      <AvatarImage src={src} alt={name || "User avatar"} />
      <AvatarFallback>{getInitials(name)}</AvatarFallback>
    </Avatar>
  );
}

// Helper to extract up to 2 uppercase initials from a name (e.g. "Jane Doe" -> "JD")
function getInitials(name?: string) {
  if (!name) return "CN";
  const initials = name
    .trim()
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return initials.slice(0, 2) || "CN";
}
