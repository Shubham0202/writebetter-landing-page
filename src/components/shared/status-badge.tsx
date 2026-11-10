import { cn } from "cn";

import { Badge } from "@/components/ui/badge";
import type { FeatureStatus } from "@/content/features";

const STATUS_LABEL: Record<FeatureStatus, string> = {
  available: "Available",
  optional: "Optional",
  planned: "Planned",
};

const STATUS_STYLE: Record<FeatureStatus, string> = {
  available: "bg-success-muted text-success",
  optional: "bg-secondary text-secondary-foreground",
  planned: "border-dashed border-border bg-transparent text-muted-foreground",
};

export function StatusBadge({ status, className }: { status: FeatureStatus; className?: string }) {
  return <Badge className={cn(STATUS_STYLE[status], className)}>{STATUS_LABEL[status]}</Badge>;
}
