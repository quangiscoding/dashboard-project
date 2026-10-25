import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ActivityItem } from "./activity-item";
import { FeedItem } from "../types";

interface ActivityCardProps {
  title: string;
  description?: string;
  items: FeedItem[];
  valueFormatter?: (count: number) => string;
  className?: string;
}

export function ActivityCard({
  title,
  description,
  items,
  valueFormatter,
  className,
}: ActivityCardProps) {
  return (
    <Card
      className={cn("bg-primary-foreground rounded-lg px-2 py-4", className)}
    >
      <CardHeader>
        <CardTitle className="text-base font-semibold">{title}</CardTitle>
        {description && (
          <CardDescription className="text-xs">{description}</CardDescription>
        )}
      </CardHeader>
      <CardContent className="divide-border divide-y pt-0">
        {items.map((item) => (
          <ActivityItem
            key={item.id}
            item={item}
            valueFormatter={valueFormatter}
          />
        ))}
      </CardContent>
    </Card>
  );
}
