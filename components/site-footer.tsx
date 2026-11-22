import Link from "next/link";
import { VEREIN } from "@/lib/data";
import ShellMark from "@/components/shell-mark";

export default function SiteFooter() {
  return (
    <footer className="mt-24 bg-sand-deep/60 hairline-top">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-10 py-12 sm:py-16 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <ShellMark width={40} height={40} tone="gold" />
            <div>
              <p className="font-display text-xl text-pilger leading-none">
                Kulturinsel Jakobus
              </p>
              <p className="mt-1 text-[11px] tracking-[0.22em] uppercase text-muted">
                Kesslingen e.V.
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm text-ink-soft max-w-sm leading-relaxed">
            Kultur, Jakobswege und Begegnung im Dreiländereck. Wir pflegen das
            Erbe rund um die Jakobuskapelle in Kesslingen und machen Kultur im
            Dorf erlebbar.
          </p>
          <p className="mt-6 text-xs tracking-[0.2em] uppercase text-muted">
            {VEREIN.registerCourt} · {VEREIN.registerNumber}
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs tracking-[0.22em] uppercase text-muted">
            Verein
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link className="hover:text-pilger text-ink-soft" href="/verein">
                Über uns
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-pilger text-ink-soft"
                href="/projekte"
              >
                Projekte
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-pilger text-ink-soft"
                href="/jakobsweg"
              >
                Jakobsweg
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-pilger text-ink-soft"
                href="/termine"
              >
                Termine
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="text-xs tracking-[0.22em] uppercase text-muted">
            Kontakt
          </p>
          <ul className="mt-4 space-y-2 text-sm text-ink-soft">
            <li>
              {VEREIN.address.street}
              <br />
              {VEREIN.address.city}
            </li>
            <li>
              <a
                className="hover:text-pilger"
                href={`tel:${VEREIN.phone.replace(/\s/g, "")}`}
              >
                {VEREIN.phone}
              </a>
            </li>
            <li>
              <a className="hover:text-pilger" href={`mailto:${VEREIN.email}`}>
                {VEREIN.email}
              </a>
            </li>
          </ul>
          <ul className="mt-6 space-y-2 text-xs text-muted">
            <li>
              <Link className="hover:text-pilger" href="/impressum">
                Impressum
              </Link>
            </li>
            <li>
              <Link className="hover:text-pilger" href="/datenschutz">
                Datenschutz
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="hairline-top">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-10 py-5 sm:py-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-muted">
          <p>© 2026 {VEREIN.name}.</p>
          <p>Perl · Luxemburg · Schengen</p>
        </div>
      </div>
    </footer>
  );
}
