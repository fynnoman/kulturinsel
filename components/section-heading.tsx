import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <span className={cn("rule", align === "center" && "center")}>
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink leading-[1.08]">
        {title}
      </h2>
      {lede && (
        <p className="max-w-2xl text-ink-soft text-[1.05rem] leading-relaxed">
          {lede}
        </p>
      )}
    </div>
  );
}
