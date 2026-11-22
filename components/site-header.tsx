"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/data";
import { cn } from "@/lib/cn";
import ShellMark from "@/components/shell-mark";

const HERO_ROUTES = new Set<string>([
  "/",
  "/verein",
  "/projekte",
  "/jakobsweg",
  "/termine",
  "/mitmachen",
  "/kontakt",
]);

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const overHero = HERO_ROUTES.has(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const onLight = overHero && !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-colors duration-300",
        onLight
          ? "bg-transparent text-sand"
          : "bg-sand/92 backdrop-blur-sm text-ink hairline-bottom",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-6 md:px-10 h-16 sm:h-20">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3 group"
        >
          <ShellMark
            width={34}
            height={34}
            tone={onLight ? "gold" : "pilger"}
            className="shrink-0"
          />
          <span className="flex flex-col leading-tight">
            <span
              className={cn(
                "font-display text-base sm:text-lg leading-none transition-colors",
                onLight ? "text-sand" : "text-pilger",
              )}
            >
              Kulturinsel Jakobus
            </span>
            <span
              className={cn(
                "text-[10px] sm:text-[11px] tracking-[0.22em] uppercase mt-1 transition-colors",
                onLight ? "text-sand/75" : "text-muted",
              )}
            >
              Kesslingen e.V.
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm transition-colors",
                  onLight
                    ? active
                      ? "text-sand"
                      : "text-sand/75 hover:text-sand"
                    : active
                      ? "text-pilger"
                      : "text-ink-soft hover:text-pilger",
                )}
              >
                <span
                  className={cn(
                    "border-b pb-1 border-transparent",
                    active && "border-gold",
                  )}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
          <Link
            href="/mitmachen"
            className={cn(
              "ml-2 inline-flex items-center px-4 py-2 text-[11px] tracking-[0.22em] uppercase transition-colors",
              onLight
                ? "bg-sand text-pilger hover:bg-gold hover:text-sand"
                : "bg-pilger text-sand hover:bg-gold hover:text-sand",
            )}
          >
            Mitmachen
          </Link>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menü"
          className="lg:hidden h-10 w-10 inline-flex flex-col items-center justify-center gap-1.5"
        >
          <span
            className={cn(
              "block h-px w-6 transition-transform",
              onLight ? "bg-sand" : "bg-ink",
              open && "translate-y-[6px] rotate-45",
            )}
          />
          <span
            className={cn(
              "block h-px w-6 transition-opacity",
              onLight ? "bg-sand" : "bg-ink",
              open && "opacity-0",
            )}
          />
          <span
            className={cn(
              "block h-px w-6 transition-transform",
              onLight ? "bg-sand" : "bg-ink",
              open && "-translate-y-[6px] -rotate-45",
            )}
          />
        </button>
      </div>

      {open && (
        <div className="lg:hidden hairline-top bg-sand text-ink max-h-[calc(100svh-4rem)] overflow-y-auto">
          <nav className="mx-auto max-w-6xl px-5 sm:px-6 py-6 flex flex-col gap-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-ink-soft hover:text-pilger text-lg py-2"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/mitmachen"
              className="mt-2 inline-flex items-center justify-center px-4 py-4 text-xs tracking-[0.22em] uppercase text-sand bg-pilger"
            >
              Mitmachen
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
