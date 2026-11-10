import type { ComponentProps } from "react";
import type { VariantProps } from "class-variance-authority";
import { cn } from "cn";

import { buttonVariants } from "@/components/ui/button";

type ButtonLinkProps = ComponentProps<"a"> & VariantProps<typeof buttonVariants>;

/** An anchor styled as a button, for CTAs that navigate rather than act. */
export function ButtonLink({ className, variant, size, ...props }: ButtonLinkProps) {
  return <a className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
