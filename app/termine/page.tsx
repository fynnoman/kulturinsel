import Image from "next/image";
import type { Metadata } from "next";
import Container from "@/components/container";
import SectionHeading from "@/components/section-heading";
import { TERMINE } from "@/lib/data";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "Termine",
  description:
    "Pilgerwanderungen, Theateraufführungen, Kurse und Begegnungen im Jahreskreis der Kulturinsel Jakobus Kesslingen.",
};

export default function TerminePage() {
  return (
    <>
      <section className="relative">
        <div className="relative h-[55svh] min-h-[420px] photo photo-duotone photo-overlay">
          <Image
            src={IMG.moselleLandscape}
            alt="Landschaft im Dreiländereck"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 z-10 flex">
            <Container className="flex flex-col justify-end pb-14 sm:pb-20">
              <span className="rule rule-light fade-in">Termine</span>
              <h1 className="mt-6 font-display text-[2.6rem] sm:text-6xl md:text-7xl text-sand max-w-3xl fade-in fade-in-d1 leading-[1.05]">
                Durch das
                <br />
                <span className="italic">Pilgerjahr.</span>
              </h1>
            </Container>
          </div>
        </div>
      </section>

      <section className="bg-paper hairline-bottom">
        <Container size="md" className="py-14">
          <p className="text-ink-soft leading-relaxed text-[1.05rem] max-w-2xl">
            Die folgenden Termine sind Platzhalter aus dem Jahresplan und
            werden vor Veröffentlichung durch den Vorstand bestätigt. Für
            Anmeldungen und Fragen genügt eine kurze Nachricht an den Verein.
          </p>
        </Container>
      </section>

      <section className="bg-sand">
        <Container className="py-16 sm:py-24">
          <ol className="space-y-6">
            {TERMINE.map((t) => (
              <li
                key={t.date}
                className="card p-5 sm:p-8 grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6 sm:items-center"
              >
                <div className="sm:col-span-2 flex sm:block items-baseline gap-3">
                  <p className="font-display text-4xl sm:text-5xl text-pilger leading-none">
                    {new Date(t.date).getDate()}
                  </p>
                  <p className="sm:mt-2 text-[11px] tracking-[0.22em] uppercase text-muted">
                    {t.dateLabel.split(" ").slice(1).join(" ")}
                  </p>
                </div>
                <div className="sm:col-span-7">
                  <p className="text-[11px] tracking-[0.22em] uppercase text-gold">
                    {t.kind}
                  </p>
                  <h3 className="mt-2 font-display text-2xl sm:text-3xl text-ink leading-tight">
                    {t.title}
                  </h3>
                  {t.note && (
                    <p className="mt-3 text-ink-soft leading-relaxed">
                      {t.note}
                    </p>
                  )}
                </div>
                <div className="sm:col-span-3 sm:text-right">
                  <p className="text-[11px] tracking-[0.22em] uppercase text-muted">
                    Ort
                  </p>
                  <p className="mt-2 text-sm text-ink">{t.place}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </>
  );
}
