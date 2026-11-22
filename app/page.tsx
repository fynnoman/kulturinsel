import Link from "next/link";
import Image from "next/image";
import Container from "@/components/container";
import SectionHeading from "@/components/section-heading";
import ShellMark from "@/components/shell-mark";
import { PILLARS, PROJEKTE, TERMINE, VEREIN, WEGE } from "@/lib/data";
import { IMG } from "@/lib/images";

export default function Home() {
  const nextThree = TERMINE.slice(0, 3);
  const latestProjects = PROJEKTE.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative">
        <div className="relative h-[100svh] min-h-[560px] sm:min-h-[640px] w-full photo photo-duotone photo-overlay">
          <Image
            src={IMG.pilgerPath}
            alt="Pilgerweg durch das Dreiländereck"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 z-10 flex">
            <Container className="flex flex-col justify-end pb-14 sm:pb-20 md:pb-28">
              <span className="rule rule-light fade-in">
                Perl · Luxemburg · Schengen
              </span>
              <h1 className="mt-6 sm:mt-8 font-display text-[2.2rem] sm:text-6xl md:text-[6.5rem] leading-[1.05] sm:leading-[0.95] text-sand max-w-5xl fade-in fade-in-d1">
                Kultur, Pilgern
                <br />
                <span className="italic">und Begegnung</span>
                <br />
                im Dreiländereck.
              </h1>
              <div className="mt-8 sm:mt-12 flex flex-wrap items-center gap-5 sm:gap-8 fade-in fade-in-d2">
                <Link
                  href="/jakobsweg"
                  className="inline-flex items-center gap-3 px-6 sm:px-7 py-3.5 sm:py-4 bg-sand text-pilger text-xs sm:text-sm tracking-[0.22em] uppercase hover:bg-gold hover:text-sand transition-colors"
                >
                  Jakobsweg entdecken
                  <span aria-hidden>→</span>
                </Link>
                <Link
                  href="/mitmachen"
                  className="text-sand/90 hover:text-gold text-xs sm:text-sm tracking-[0.22em] uppercase border-b border-sand/40 hover:border-gold pb-1 transition-colors"
                >
                  Mitglied werden
                </Link>
              </div>
            </Container>
          </div>

          <div className="absolute top-20 sm:top-24 right-0 z-10 p-6 md:p-8 hidden md:block">
            <div className="text-right">
              <p className="text-sand/70 text-[11px] tracking-[0.3em] uppercase">
                Patron
              </p>
              <p className="font-display text-sand text-2xl italic mt-2">
                Hl. Jakobus
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NUMBER / MOTTO */}
      <section className="hairline-bottom bg-sand">
        <Container className="py-14 sm:py-16 md:py-20">
          <div className="grid gap-8 md:gap-10 md:grid-cols-12 items-end">
            <div className="md:col-span-5">
              <div className="flex items-end gap-4 sm:gap-6">
                <div className="hidden sm:block shrink-0">
                  <ShellMark width={56} height={56} tone="gold" />
                </div>
                <div className="min-w-0">
                  <p className="font-display text-[4rem] sm:text-[6.5rem] md:text-[9rem] leading-[0.82] text-pilger tracking-tight">
                    2020
                  </p>
                  <p className="mt-2 text-[10px] sm:text-xs tracking-[0.3em] uppercase text-muted">
                    Gegründet in Perl-Kesslingen
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-7 md:pl-10 md:border-l md:border-line">
              <p className="font-display italic text-xl sm:text-3xl md:text-4xl text-ink leading-[1.3] sm:leading-[1.25]">
                &bdquo;Ein Dorf, eine Kapelle, drei Länder. Der Weg beginnt an
                der Jakobuskapelle in Kesslingen.&ldquo;
              </p>
              <p className="mt-6 text-ink-soft leading-relaxed max-w-xl">
                Seit 2020 verbindet die Kulturinsel Jakobus Theater, Pilgerwege
                und Dorfleben zu einem gemeinsamen Ort. Auf einer Höhe zwischen
                Saar und Mosel, an der Grenze nach Luxemburg und Frankreich.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* PILLARS */}
      <section className="bg-paper">
        <Container className="py-16 sm:py-24 md:py-28">
          <SectionHeading
            eyebrow="Drei Anliegen"
            title={
              <>
                Was uns trägt.
                <br />
                <span className="italic text-pilger">Kultur, Weg, Dorf.</span>
              </>
            }
            lede="Der Verein verfolgt drei Tätigkeitsfelder, die sich in jedem unserer Projekte wiederfinden."
          />
          <div className="mt-12 sm:mt-16 grid gap-10 md:gap-6 md:grid-cols-3">
            {PILLARS.map((p) => (
              <article
                key={p.key}
                className="group pt-8 hairline-top flex flex-col"
              >
                <span className="font-display text-gold text-sm tracking-[0.3em]">
                  {p.kicker}
                </span>
                <h3 className="mt-4 font-display text-2xl sm:text-3xl text-ink leading-tight">
                  {p.title}
                </h3>
                <p className="mt-5 text-ink-soft leading-relaxed">{p.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* EDITORIAL SPLIT — JAKOBSWEG */}
      <section className="bg-sand">
        <Container className="py-16 sm:py-24 md:py-32">
          <div className="grid gap-14 md:gap-20 md:grid-cols-12 items-center">
            <div className="md:col-span-6 relative">
              <div className="photo photo-warm aspect-[4/5] relative">
                <Image
                  src={IMG.chapelInterior}
                  alt="Jakobuskapelle"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="hidden md:block absolute -bottom-10 -right-8 bg-sand card px-8 py-6 shadow-sm max-w-xs">
                <p className="text-xs tracking-[0.3em] uppercase text-muted">
                  Zuwegung
                </p>
                <p className="mt-2 font-display text-xl text-pilger leading-snug">
                  Merzig · Borg · Kesslingen. Eröffnet am 23. März 2024.
                </p>
              </div>
            </div>

            <div className="md:col-span-6">
              <SectionHeading
                eyebrow="Jakobsweg durch Kesslingen"
                title={
                  <>
                    Der Weg führt
                    <br />
                    <span className="italic text-pilger">durch unser Dorf.</span>
                  </>
                }
                lede="Zwischen Saar und Mosel verläuft eine der stillen Routen des Jakobswegs. Wir pflegen die Jakobuskapelle, markieren die Zuwegung und begleiten Pilger durch das Dreiländereck."
              />
              <div className="mt-10 grid gap-6 sm:grid-cols-3">
                {[
                  { k: "Patron", v: "Hl. Jakobus" },
                  { k: "Station", v: "Jakobuskapelle" },
                  { k: "Route", v: "Zuwegung 2024" },
                ].map((it) => (
                  <div key={it.k} className="hairline-top pt-5">
                    <p className="text-xs tracking-[0.22em] uppercase text-muted">
                      {it.k}
                    </p>
                    <p className="mt-2 font-display text-xl text-ink">
                      {it.v}
                    </p>
                  </div>
                ))}
              </div>
              <Link
                href="/jakobsweg"
                className="mt-10 inline-flex items-center gap-2 link text-sm tracking-[0.18em] uppercase"
              >
                Routen und Kapelle ansehen
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* BENTO ROW */}
      <section className="bg-sand">
        <Container className="pt-0 pb-16 sm:pb-20 md:pb-24">
          <div className="grid gap-3 sm:gap-4 md:grid-cols-12">
            <div className="md:col-span-5 photo photo-warm aspect-[4/5] md:aspect-auto md:h-[520px] relative">
              <Image
                src={IMG.pilgrim}
                alt="Pilger unterwegs"
                fill
                sizes="(min-width: 768px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="md:col-span-7 grid gap-3 sm:gap-4">
              <div className="photo photo-duotone aspect-[16/9] relative">
                <Image
                  src={IMG.moselleLandscape}
                  alt="Landschaft im Dreiländereck"
                  fill
                  sizes="(min-width: 768px) 58vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
                <div className="photo photo-warm aspect-[4/3] relative">
                  <Image
                    src={IMG.theater}
                    alt="Bürgertheater im Dorf"
                    fill
                    sizes="(min-width: 768px) 29vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="bg-pilger text-sand p-6 sm:p-8 aspect-[4/3] flex flex-col justify-between">
                  <span className="rule rule-light">Im Dreiländereck</span>
                  <div>
                    <p className="font-display text-2xl sm:text-3xl leading-tight">
                      Theater, Weg
                      <br />
                      <span className="italic">und Begegnung</span>
                      <br />
                      aus dem Dorf.
                    </p>
                    <Link
                      href="/projekte"
                      className="mt-5 sm:mt-6 inline-flex text-[11px] sm:text-xs tracking-[0.22em] uppercase border-b border-sand/40 pb-1 hover:border-gold hover:text-gold transition-colors"
                    >
                      Projekte ansehen →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* PROJEKTE — latest three */}
      <section className="bg-paper">
        <Container className="py-16 sm:py-24 md:py-28">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <SectionHeading
              eyebrow="Projekte"
              title={
                <>
                  Was zuletzt
                  <br />
                  <span className="italic text-pilger">entstanden ist.</span>
                </>
              }
            />
            <Link
              href="/projekte"
              className="link text-sm tracking-[0.18em] uppercase"
            >
              Alle Projekte ansehen →
            </Link>
          </div>

          <div className="mt-10 sm:mt-14 grid gap-6 md:grid-cols-3">
            {latestProjects.map((p) => (
              <article key={p.title} className="card p-7 flex flex-col">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-gold text-xs tracking-[0.3em]">
                    {p.kind}
                  </span>
                  <span className="font-display text-pilger text-2xl">
                    {p.year}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl text-ink leading-tight">
                  {p.title}
                </h3>
                <p className="mt-4 text-sm text-ink-soft leading-relaxed flex-1">
                  {p.body}
                </p>
                {p.note && (
                  <p className="mt-5 text-[11px] tracking-[0.2em] uppercase text-muted">
                    {p.note}
                  </p>
                )}
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* WEGE — routes list */}
      <section className="bg-sand">
        <Container className="py-16 sm:py-24 md:py-28">
          <SectionHeading
            align="center"
            eyebrow="Pilgern in Kesslingen"
            title={
              <>
                Drei Wege,
                <br />
                <span className="italic text-pilger">ein Ort.</span>
              </>
            }
          />
          <ul className="mx-auto mt-12 sm:mt-16 max-w-4xl">
            {WEGE.map((w, i) => (
              <li
                key={w.key}
                className="grid grid-cols-1 sm:grid-cols-12 items-baseline gap-4 sm:gap-8 py-7 sm:py-8 hairline-bottom first:hairline-top"
              >
                <span className="sm:col-span-1 font-display text-xs sm:text-sm text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="sm:col-span-7">
                  <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-ink leading-tight">
                    {w.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-ink-soft leading-relaxed">
                    {w.body}
                  </p>
                </div>
                <span className="sm:col-span-4 sm:text-right text-xs tracking-[0.2em] uppercase text-muted">
                  {w.distance}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* TERMINE */}
      <section className="relative">
        <div className="absolute inset-0">
          <Image
            src={IMG.borderLandscape}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-sand via-sand/92 to-sand" />
        </div>
        <Container className="relative py-16 sm:py-24 md:py-28">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <SectionHeading
              eyebrow="Nächste Termine"
              title={
                <>
                  Kommen Sie
                  <br />
                  <span className="italic text-pilger">auf den Weg.</span>
                </>
              }
            />
            <Link
              href="/termine"
              className="link text-sm tracking-[0.18em] uppercase"
            >
              Alle Termine ansehen →
            </Link>
          </div>

          <div className="mt-10 sm:mt-14 grid gap-5 sm:gap-6 md:grid-cols-3">
            {nextThree.map((t, i) => {
              const img = [IMG.chapelInterior, IMG.pilgrimPath2, IMG.candles][i];
              const day = new Date(t.date).getDate();
              return (
                <article key={t.date} className="group card overflow-hidden">
                  <div className="photo photo-warm aspect-[4/3] relative">
                    <Image
                      src={img}
                      alt={t.title}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-sand/95 px-3 py-2">
                      <p className="font-display text-2xl text-pilger leading-none">
                        {day}
                      </p>
                      <p className="text-[10px] tracking-[0.22em] uppercase text-muted mt-1">
                        {t.dateLabel.split(" ").slice(1, 3).join(" ")}
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-[11px] tracking-[0.22em] uppercase text-gold">
                      {t.kind}
                    </p>
                    <h3 className="mt-3 font-display text-2xl text-ink leading-tight">
                      {t.title}
                    </h3>
                    {t.note && (
                      <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                        {t.note}
                      </p>
                    )}
                    <p className="mt-5 text-xs text-muted">{t.place}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* MITMACHEN — CTA BAND */}
      <section className="relative">
        <div className="grid md:grid-cols-12">
          <div className="md:col-span-6 relative min-h-[360px] sm:min-h-[460px] md:min-h-[520px] photo photo-duotone photo-overlay">
            <Image
              src={IMG.community}
              alt="Begegnung im Dorf"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 z-10 flex items-end p-7 sm:p-10 md:p-16">
              <div>
                <span className="rule rule-light">Mitmachen</span>
                <p className="mt-5 sm:mt-6 font-display text-sand text-3xl sm:text-4xl md:text-5xl leading-[1.05]">
                  Ihre Hand
                  <br />
                  <span className="italic">gehört dazu.</span>
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-6 bg-pilger text-sand p-7 sm:p-10 md:p-16 flex flex-col justify-center">
            <p className="text-[11px] tracking-[0.3em] uppercase text-sand/60">
              Kontakt
            </p>
            <p className="mt-3 sm:mt-4 font-display text-[1.75rem] sm:text-4xl md:text-5xl leading-[1.1]">
              Peter Kessler
              <br />
              <span className="italic text-gold-soft">1. Vorsitzender</span>
            </p>
            <div className="h-px w-14 sm:w-16 bg-gold-soft my-8 sm:my-10" />
            <ul className="space-y-2 text-sm sm:text-base">
              <li>{VEREIN.address.street}</li>
              <li>{VEREIN.address.city}</li>
              <li className="pt-3">
                <a className="hover:text-gold-soft" href={`tel:${VEREIN.phone.replace(/\s/g, "")}`}>
                  {VEREIN.phone}
                </a>
              </li>
              <li>
                <a className="hover:text-gold-soft" href={`mailto:${VEREIN.email}`}>
                  {VEREIN.email}
                </a>
              </li>
            </ul>
            <Link
              href="/mitmachen"
              className="mt-8 sm:mt-10 inline-flex items-center gap-3 px-6 sm:px-7 py-3.5 sm:py-4 bg-sand text-pilger text-xs sm:text-sm tracking-[0.22em] uppercase w-fit hover:bg-gold hover:text-sand transition-colors"
            >
              Mitglied werden
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
