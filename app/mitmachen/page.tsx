import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Container from "@/components/container";
import SectionHeading from "@/components/section-heading";
import ShellMark from "@/components/shell-mark";
import { VEREIN } from "@/lib/data";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "Mitmachen",
  description:
    "Mitglied werden, Pilger begleiten oder bei Projekten helfen: So engagieren Sie sich in der Kulturinsel Jakobus Kesslingen.",
};

const paths = [
  {
    title: "Mitglied werden",
    body: "Als Mitglied tragen Sie den Verein dauerhaft mit und entscheiden über die Richtung mit. Aufnahmeantrag auf Anfrage.",
  },
  {
    title: "Pilger begleiten",
    body: "Als Pilgerbegleiter führen Sie Gruppen über unsere Routen oder öffnen die Jakobuskapelle an ausgewählten Tagen.",
  },
  {
    title: "Theater & Projekte",
    body: "Beim Bürgertheater, bei Festen oder beim Aufbau helfen: Wir freuen uns über jede Hand, die mit anpackt.",
  },
  {
    title: "Spenden",
    body: "Der Verein ist auf Spenden angewiesen, um Projekte zu finanzieren. Kontoangaben erhalten Sie auf kurze Nachricht.",
  },
];

export default function MitmachenPage() {
  return (
    <>
      <section className="relative">
        <div className="relative h-[60svh] min-h-[440px] photo photo-duotone photo-overlay">
          <Image
            src={IMG.community}
            alt="Gemeinschaft im Dorf"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 z-10 flex">
            <Container className="flex flex-col justify-end pb-14 sm:pb-20">
              <span className="rule rule-light fade-in">Mitmachen</span>
              <h1 className="mt-6 font-display text-[2.4rem] sm:text-6xl md:text-7xl text-sand max-w-3xl fade-in fade-in-d1 leading-[1.05]">
                Vier Wege,
                <br />
                <span className="italic">dabei zu sein.</span>
              </h1>
            </Container>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <Container className="py-16 sm:py-24">
          <div className="grid gap-10 md:grid-cols-12 items-start">
            <div className="md:col-span-5">
              <SectionHeading
                eyebrow="Engagement"
                title={
                  <>
                    Der Verein lebt
                    <br />
                    <span className="italic text-pilger">
                      vom Mitmachen.
                    </span>
                  </>
                }
                lede="Ob regelmäßig oder bei einem einzelnen Projekt: Es gibt verschiedene Wege, Teil der Kulturinsel Jakobus zu werden."
              />
            </div>
            <div className="md:col-span-7">
              <ul className="space-y-6">
                {paths.map((p) => (
                  <li
                    key={p.title}
                    className="pb-6 hairline-bottom last:border-b-0"
                  >
                    <div className="flex items-start gap-5">
                      <ShellMark width={28} height={28} tone="gold" className="mt-1 shrink-0" />
                      <div>
                        <h3 className="font-display text-xl sm:text-2xl text-ink">
                          {p.title}
                        </h3>
                        <p className="mt-2 text-ink-soft leading-relaxed">
                          {p.body}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-pilger text-sand">
        <Container className="py-16 sm:py-24">
          <div className="grid gap-10 md:grid-cols-12 items-center">
            <div className="md:col-span-6">
              <span className="rule rule-gold">Erste Schritte</span>
              <p className="mt-6 font-display text-[1.75rem] sm:text-4xl md:text-5xl leading-[1.1]">
                Schreiben Sie uns.
                <br />
                <span className="italic text-gold-soft">
                  Wir melden uns persönlich.
                </span>
              </p>
            </div>
            <div className="md:col-span-6 md:pl-10 md:border-l md:border-sand/20">
              <ul className="space-y-3 text-[1.05rem]">
                <li>
                  {VEREIN.address.street}
                  <br />
                  {VEREIN.address.city}
                </li>
                <li className="pt-2">
                  Telefon:
                  <a
                    className="ml-2 hover:text-gold-soft"
                    href={`tel:${VEREIN.phone.replace(/\s/g, "")}`}
                  >
                    {VEREIN.phone}
                  </a>
                </li>
                <li>
                  Alternativ:
                  <a
                    className="ml-2 hover:text-gold-soft"
                    href={`tel:${VEREIN.phoneAlt.replace(/\s/g, "")}`}
                  >
                    {VEREIN.phoneAlt}
                  </a>
                </li>
                <li>
                  E-Mail:
                  <a
                    className="ml-2 hover:text-gold-soft"
                    href={`mailto:${VEREIN.email}`}
                  >
                    {VEREIN.email}
                  </a>
                </li>
              </ul>
              <Link
                href="/kontakt"
                className="mt-10 inline-flex items-center gap-3 px-6 py-4 bg-sand text-pilger text-xs tracking-[0.22em] uppercase hover:bg-gold hover:text-sand transition-colors"
              >
                Kontaktseite öffnen
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
