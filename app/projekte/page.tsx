import Image from "next/image";
import type { Metadata } from "next";
import Container from "@/components/container";
import SectionHeading from "@/components/section-heading";
import { PROJEKTE } from "@/lib/data";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "Projekte",
  description:
    "Theaterprojekte, Pilgerwanderungen und europäische Begegnungen der Kulturinsel Jakobus Kesslingen.",
};

const projectImages = [
  IMG.theater,
  IMG.pilgerPath,
  IMG.community,
  IMG.pilgrim,
  IMG.candles,
  IMG.borderLandscape,
];

export default function ProjekteePage() {
  return (
    <>
      <section className="relative">
        <div className="relative h-[60svh] min-h-[440px] photo photo-duotone photo-overlay">
          <Image
            src={IMG.theater}
            alt="Bürgertheater im Dorf"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 z-10 flex">
            <Container className="flex flex-col justify-end pb-14 sm:pb-20">
              <span className="rule rule-light fade-in">Projekte</span>
              <h1 className="mt-6 font-display text-[2.4rem] sm:text-6xl md:text-7xl text-sand max-w-3xl fade-in fade-in-d1 leading-[1.05]">
                Was wir
                <br />
                <span className="italic">auf die Beine stellen.</span>
              </h1>
            </Container>
          </div>
        </div>
      </section>

      <section className="bg-paper hairline-bottom">
        <Container size="md" className="py-16">
          <p className="font-display italic text-2xl sm:text-3xl text-ink leading-[1.3] max-w-3xl">
            „Vom Bürgertheater bis zur Pilgerstation. Unsere Projekte entstehen
            im Dorf, mit den Menschen vor Ort, und wirken bis ins Dreiländereck
            hinein.“
          </p>
        </Container>
      </section>

      <section className="bg-sand">
        <Container className="py-16 sm:py-24">
          <div className="space-y-20 sm:space-y-28">
            {PROJEKTE.map((p, i) => {
              const img = projectImages[i % projectImages.length];
              const reverse = i % 2 === 1;
              return (
                <article
                  key={p.title}
                  className="grid gap-10 md:gap-16 md:grid-cols-12 items-center"
                >
                  <div
                    className={`md:col-span-6 ${
                      reverse ? "md:order-2" : "md:order-1"
                    }`}
                  >
                    <div className="photo photo-warm aspect-[4/3] relative">
                      <Image
                        src={img}
                        alt={p.title}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div
                    className={`md:col-span-6 ${
                      reverse ? "md:order-1 md:pr-8" : "md:order-2 md:pl-8"
                    }`}
                  >
                    <div className="flex items-baseline gap-4 sm:gap-5 flex-wrap">
                      <span className="font-display text-pilger text-4xl sm:text-5xl md:text-6xl leading-none">
                        {p.year}
                      </span>
                      <span className="text-[11px] tracking-[0.3em] uppercase text-gold">
                        {p.kind}
                      </span>
                    </div>
                    <h2 className="mt-5 sm:mt-6 font-display text-2xl sm:text-3xl md:text-4xl text-ink leading-tight">
                      {p.title}
                    </h2>
                    <p className="mt-5 text-ink-soft leading-relaxed text-[1.03rem]">
                      {p.body}
                    </p>
                    {p.note && (
                      <p className="mt-6 text-[11px] tracking-[0.22em] uppercase text-muted">
                        {p.note}
                      </p>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-paper hairline-top">
        <Container size="md" className="py-16 sm:py-24">
          <SectionHeading
            align="center"
            eyebrow="Gemeinsam wirken"
            title={
              <>
                Projekte entstehen
                <br />
                <span className="italic text-pilger">mit Partnern.</span>
              </>
            }
            lede="Mit der Katholischen Erwachsenenbildung im Bistum Trier, der Gemeinde Perl, Pilgerverbänden und Nachbarn aus Luxemburg und Frankreich. Anfragen für Kooperationen gerne an den Vorstand."
          />
        </Container>
      </section>
    </>
  );
}
