import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  as?: "section" | "div" | "header" | "footer" | "article";
};

const sizes = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
};

export default function Container({
  children,
  className,
  size = "lg",
  as: Tag = "div",
}: Props) {
  return (
    <Tag className={cn("mx-auto w-full px-5 sm:px-6 md:px-10", sizes[size], className)}>
      {children}
    </Tag>
  );
}
