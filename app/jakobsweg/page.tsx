import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/container";
import SectionHeading from "@/components/section-heading";
import ShellMark from "@/components/shell-mark";
import { VEREIN, WEGE } from "@/lib/data";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "Jakobsweg",
  description:
    "Pilgerwege, Jakobuskapelle und Routen durch das Dreiländereck. Der Jakobsweg führt über Kesslingen.",
};

export default function JakobswegPage() {
  return (
    <>
      <section className="relative">
        <div className="relative h-[75svh] min-h-[520px] photo photo-duotone photo-overlay">
          <Image
            src={IMG.pilgrimPath2}
            alt="Pilgerpfad im Wald"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 z-10 flex">
            <Container className="flex flex-col justify-end pb-14 sm:pb-20">
              <span className="rule rule-light fade-in">Jakobsweg</span>
              <h1 className="mt-6 font-display text-[2.4rem] sm:text-6xl md:text-7xl text-sand max-w-4xl fade-in fade-in-d1 leading-[1.05]">
                Der Weg führt
                <br />
                <span className="italic">durch Kesslingen.</span>
              </h1>
              <p className="mt-6 text-sand/85 max-w-xl text-[1.05rem] leading-relaxed fade-in fade-in-d2">
                Zwischen Saar, Mosel und Schengen verläuft eine der stillen
                Routen des Jakobswegs. Wir halten die Jakobuskapelle offen und
                begleiten Pilger durch das Dreiländereck.
              </p>
            </Container>
          </div>
        </div>
      </section>

      {/* Kapelle */}
      <section className="bg-paper">
        <Container className="py-16 sm:py-24 md:py-28">
          <div className="grid gap-14 md:gap-20 md:grid-cols-12 items-center">
            <div className="md:col-span-7">
              <SectionHeading
                eyebrow="Jakobuskapelle"
                title={
                  <>
                    Ein kleiner Ort,
                    <br />
                    <span className="italic text-pilger">
                      ein langer Weg.
                    </span>
                  </>
                }
                lede="Die Jakobuskapelle in Kesslingen ist unser Herzstück. Pilger finden hier eine Rast, eine Kerze, einen Pilgerstempel und das offene Dorf ringsherum."
              />
              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {[
                  ["Lage", `${VEREIN.address.street}, Kesslingen`],
                  ["Patron", "Hl. Jakobus"],
                  ["Pilgerstempel", "an der Kapelle"],
                  ["Rast", "jederzeit möglich"],
                ].map(([k, v]) => (
                  <div key={k} className="hairline-top pt-5">
                    <p className="text-[11px] tracking-[0.22em] uppercase text-muted">
                      {k}
                    </p>
                    <p className="mt-2 font-display text-lg text-ink">{v}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="photo photo-warm aspect-[4/5] relative">
                <Image
                  src={IMG.chapelInterior}
                  alt="Jakobuskapelle Kesslingen"
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Routen Grid */}
      <section className="bg-sand">
        <Container className="py-16 sm:py-24">
          <SectionHeading
            eyebrow="Routen"
            title={
              <>
                Drei Wege,
                <br />
                <span className="italic text-pilger">ein Dorf.</span>
              </>
            }
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {WEGE.map((w, i) => {
              const img = [IMG.pilgerPath, IMG.wayMarker, IMG.borderLandscape][i];
              return (
                <article key={w.key} className="card overflow-hidden flex flex-col">
                  <div className="photo photo-warm aspect-[4/3] relative">
                    <Image
                      src={img}
                      alt={w.title}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-7 flex-1 flex flex-col">
                    <p className="text-[11px] tracking-[0.22em] uppercase text-gold">
                      {w.distance}
                    </p>
                    <h3 className="mt-3 font-display text-2xl text-ink leading-tight">
                      {w.title}
                    </h3>
                    <p className="mt-4 text-sm text-ink-soft leading-relaxed flex-1">
                      {w.body}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Für Pilger */}
      <section className="bg-paper">
        <Container size="md" className="py-16 sm:py-24">
          <SectionHeading
            eyebrow="Für Pilger"
            title={
              <>
                Praktische Hinweise
                <br />
                <span className="italic text-pilger">für Ihren Weg.</span>
              </>
            }
          />
          <dl className="mt-12 grid gap-5 sm:grid-cols-2">
            {[
              [
                "Pilgerstempel",
                "Der Stempel für den Pilgerausweis kann an der Jakobuskapelle abgeholt werden. Bitte vorher kurz beim Vorstand ankündigen.",
              ],
              [
                "Rast und Wasser",
                "Im Dorf findet sich ein ruhiger Ort für eine Pause. Trinkwasser und eine Bank stehen an der Kapelle bereit.",
              ],
              [
                "Begleitung",
                "Für Gruppen bieten wir auf Anfrage eine kurze Einführung zur Geschichte der Kapelle und zum Jakobsweg in der Region an.",
              ],
              [
                "Unterkunft",
                "Übernachtung in Perl und im Umkreis. Gerne vermitteln wir Kontakte zu Gastgebern im Dorf und in der Umgebung.",
              ],
            ].map(([k, v]) => (
              <div key={k} className="hairline-top pt-5">
                <dt className="font-display text-xl text-ink">{k}</dt>
                <dd className="mt-3 text-sm text-ink-soft leading-relaxed">
                  {v}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-14 flex flex-wrap gap-5 items-center">
            <ShellMark width={44} height={44} tone="gold" />
            <p className="text-ink-soft max-w-xl">
              Fragen zu Routen, Stempel oder Begleitung?
              <Link
                href="/kontakt"
                className="link ml-2 text-sm tracking-[0.18em] uppercase"
              >
                Kontakt aufnehmen →
              </Link>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
