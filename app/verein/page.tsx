import Image from "next/image";
import type { Metadata } from "next";
import Container from "@/components/container";
import SectionHeading from "@/components/section-heading";
import { CHRONIK, VEREIN, VORSTAND, ZIELE } from "@/lib/data";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "Verein",
  description:
    "Kulturinsel Jakobus Kesslingen e.V.: Gründung 2020, Vorstand, Register, Ziele und Chronik.",
};

export default function VereinPage() {
  return (
    <>
      <section className="relative">
        <div className="relative h-[70svh] min-h-[480px] photo photo-duotone photo-overlay">
          <Image
            src={IMG.stoneChapel}
            alt="Historisches Gebäude in der Region"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 z-10 flex">
            <Container className="flex flex-col justify-end pb-14 sm:pb-20">
              <span className="rule rule-light fade-in">Über uns</span>
              <h1 className="mt-6 font-display text-[2.4rem] sm:text-6xl md:text-7xl text-sand max-w-3xl fade-in fade-in-d1 leading-[1.05]">
                Ein Verein
                <br />
                <span className="italic">aus dem Dorf.</span>
              </h1>
            </Container>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-paper hairline-bottom">
        <Container size="md" className="py-16 sm:py-24">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <span className="rule">Seit 2020</span>
              <p className="mt-6 font-display text-3xl sm:text-4xl text-ink leading-tight">
                Gegründet, um Kultur und Pilgern in
                <span className="italic text-pilger"> Kesslingen</span> zu
                verankern.
              </p>
            </div>
            <div className="md:col-span-7 md:pl-10 md:border-l md:border-line">
              <p className="text-ink-soft leading-relaxed text-[1.05rem]">
                Die Kulturinsel Jakobus Kesslingen e.V. ist im September 2020 in
                Perl-Kesslingen entstanden. Am 11. Dezember 2020 wurde der
                Verein im Vereinsregister des Amtsgerichts Merzig eingetragen.
                Die Mitglieder kommen aus dem Dorf und seinem Umfeld und tragen
                drei Anliegen: Kultur und Kunst, Jakobswege und Pilgerkultur
                sowie das Gemeinschaftsleben im ländlichen Raum.
              </p>
              <p className="mt-5 text-ink-soft leading-relaxed">
                Kesslingen liegt im Dreiländereck Deutschland, Luxemburg und
                Frankreich. Die Nähe zu Schengen prägt unsere Arbeit genauso
                wie die Verwurzelung in Perl und im Saarland.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Vorstand */}
      <section className="bg-sand">
        <Container className="py-16 sm:py-24">
          <SectionHeading
            eyebrow="Vorstand"
            title={
              <>
                Menschen,
                <br />
                <span className="italic text-pilger">die den Verein tragen.</span>
              </>
            }
            lede="Der Vorstand führt den Verein ehrenamtlich. Die folgenden Angaben basieren auf dem Vereinsverzeichnis der Gemeinde Perl und dem Registerauszug und werden vor Veröffentlichung durch den Vorstand bestätigt."
          />
          <div className="mt-12 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VORSTAND.map((v) => (
              <div key={v.name} className="card p-7">
                <p className="text-[11px] tracking-[0.22em] uppercase text-muted">
                  {v.role}
                </p>
                <p className="mt-4 font-display text-2xl text-ink leading-tight">
                  {v.name}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Registerkasten */}
      <section className="bg-paper">
        <Container className="py-16 sm:py-24">
          <div className="grid gap-10 md:grid-cols-12 items-start">
            <div className="md:col-span-5">
              <SectionHeading
                eyebrow="Vereinsdaten"
                title={<>Eingetragen beim <span className="italic text-pilger">Amtsgericht Merzig</span>.</>}
              />
            </div>
            <dl className="md:col-span-7 grid gap-5 sm:grid-cols-2">
              {[
                ["Gründung", VEREIN.founded],
                ["Registereintragung", VEREIN.registered],
                ["Registergericht", VEREIN.registerCourt],
                ["Vereinsregister", VEREIN.registerNumber],
                ["Sitz", VEREIN.seat],
                ["Anschrift", `${VEREIN.address.street}, ${VEREIN.address.city}`],
                ["Telefon", `${VEREIN.phone} · ${VEREIN.phoneAlt}`],
                ["E-Mail", VEREIN.email],
              ].map(([k, v]) => (
                <div key={k} className="hairline-top pt-5">
                  <dt className="text-[11px] tracking-[0.22em] uppercase text-muted">
                    {k}
                  </dt>
                  <dd className="mt-2 font-display text-lg text-ink break-words">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* Chronik */}
      <section className="bg-sand">
        <Container size="md" className="py-16 sm:py-24">
          <SectionHeading
            eyebrow="Chronik"
            title={
              <>
                Die Stationen
                <br />
                <span className="italic text-pilger">unseres Weges.</span>
              </>
            }
          />
          <ol className="mt-12 sm:mt-16 space-y-10">
            {CHRONIK.map((c) => (
              <li
                key={c.year}
                className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 pb-8 hairline-bottom last:border-b-0"
              >
                <div className="sm:col-span-3">
                  <p className="font-display text-4xl sm:text-5xl text-pilger leading-none">
                    {c.year}
                  </p>
                </div>
                <div className="sm:col-span-9">
                  <h3 className="font-display text-2xl text-ink">{c.title}</h3>
                  <p className="mt-3 text-ink-soft leading-relaxed">{c.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Ziele */}
      <section className="bg-paper hairline-top">
        <Container className="py-16 sm:py-24">
          <SectionHeading
            align="center"
            eyebrow="Vorhaben"
            title={
              <>
                Woran wir
                <br />
                <span className="italic text-pilger">weiter arbeiten.</span>
              </>
            }
            lede="Nicht alle Ideen sind heute schon umgesetzt. Einige Vorhaben stehen am Anfang und begleiten unsere Vereinsarbeit in den kommenden Jahren."
          />
          <ul className="mx-auto mt-12 sm:mt-14 max-w-3xl">
            {ZIELE.map((z, i) => (
              <li
                key={z}
                className="flex items-baseline gap-4 sm:gap-8 py-5 sm:py-6 hairline-bottom first:hairline-top"
              >
                <span className="font-display text-xs sm:text-sm text-gold w-8 sm:w-12">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-lg sm:text-2xl text-ink flex-1">
                  {z}
                </span>
                <span className="ornament text-sm">✦</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
