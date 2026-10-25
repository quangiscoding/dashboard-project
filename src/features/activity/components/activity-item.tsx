import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FeedItem } from "../types";

interface ActivityItemProps {
  item: FeedItem;
  valueFormatter?: (count: number) => string;
}

export function ActivityItem({ item, valueFormatter }: ActivityItemProps) {
  const formattedValue = valueFormatter
    ? valueFormatter(item.count)
    : item.count.toLocaleString();

  return (
    <div className="flex items-center justify-between gap-4 py-3">
      <div className="flex min-w-0 items-center gap-3">
        <Avatar className="h-10 w-10 shrink-0">
          <AvatarImage src={item.image} alt={item.badge} />
          <AvatarFallback>
            {item.badge.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="min-w-0">
          <p className="truncate text-sm leading-none font-medium">
            {item.title}
          </p>
          <p className="text-muted-foreground mt-1 truncate text-xs">
            {item.badge}
          </p>
        </div>
      </div>
      <div className="shrink-0 text-sm font-semibold">{formattedValue}</div>
    </div>
  );
}
