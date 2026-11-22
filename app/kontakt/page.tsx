import Image from "next/image";
import type { Metadata } from "next";
import Container from "@/components/container";
import SectionHeading from "@/components/section-heading";
import { VEREIN, VORSTAND } from "@/lib/data";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie den Vorstand der Kulturinsel Jakobus Kesslingen e.V. Telefon, E-Mail und Anschrift.",
};

export default function KontaktPage() {
  return (
    <>
      <section className="relative">
        <div className="relative h-[50svh] min-h-[380px] photo photo-duotone photo-overlay">
          <Image
            src={IMG.stoneWall}
            alt="Steinmauer im Dorf"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 z-10 flex">
            <Container className="flex flex-col justify-end pb-14 sm:pb-20">
              <span className="rule rule-light fade-in">Kontakt</span>
              <h1 className="mt-6 font-display text-[2.4rem] sm:text-6xl md:text-7xl text-sand max-w-3xl fade-in fade-in-d1 leading-[1.05]">
                Schreiben Sie
                <br />
                <span className="italic">an den Verein.</span>
              </h1>
            </Container>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <Container className="py-16 sm:py-24">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <SectionHeading
                eyebrow="Anschrift"
                title={<>Kulturinsel Jakobus<br /><span className="italic text-pilger">Kesslingen e.V.</span></>}
              />
              <address className="mt-10 not-italic space-y-4 text-ink-soft text-[1.05rem]">
                <p>
                  {VEREIN.address.street}
                  <br />
                  {VEREIN.address.city}
                </p>
                <p>
                  Telefon:{" "}
                  <a className="link" href={`tel:${VEREIN.phone.replace(/\s/g, "")}`}>
                    {VEREIN.phone}
                  </a>
                </p>
                <p>
                  Alternativ:{" "}
                  <a className="link" href={`tel:${VEREIN.phoneAlt.replace(/\s/g, "")}`}>
                    {VEREIN.phoneAlt}
                  </a>
                </p>
                <p>
                  E-Mail:{" "}
                  <a className="link" href={`mailto:${VEREIN.email}`}>
                    {VEREIN.email}
                  </a>
                </p>
              </address>
              <div className="mt-10 hairline-top pt-6">
                <p className="text-[11px] tracking-[0.22em] uppercase text-muted">
                  Register
                </p>
                <p className="mt-2 text-ink">
                  {VEREIN.registerCourt} · {VEREIN.registerNumber}
                </p>
              </div>
            </div>

            <div className="md:col-span-7 md:pl-10 md:border-l md:border-line">
              <p className="text-[11px] tracking-[0.22em] uppercase text-muted">
                Vorstand
              </p>
              <ul className="mt-6 space-y-5">
                {VORSTAND.map((v) => (
                  <li key={v.name} className="hairline-bottom pb-5">
                    <p className="text-[11px] tracking-[0.22em] uppercase text-gold">
                      {v.role}
                    </p>
                    <p className="mt-2 font-display text-2xl text-ink">
                      {v.name}
                    </p>
                  </li>
                ))}
              </ul>
              <p className="mt-10 text-ink-soft leading-relaxed max-w-xl">
                Anfragen zu Pilgerbegleitung, Theaterprojekten oder zur
                Mitgliedschaft nehmen wir gerne per Telefon oder E-Mail
                entgegen. Rückmeldung in der Regel innerhalb weniger Tage.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
