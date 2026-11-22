import type { Metadata } from "next";
import Container from "@/components/container";
import { VEREIN, VORSTAND } from "@/lib/data";

export const metadata: Metadata = {
  title: "Impressum",
};

export default function ImpressumPage() {
  return (
    <section className="pt-28 pb-16 sm:pt-36 sm:pb-24 bg-sand">
      <Container size="md">
        <span className="rule">Rechtliches</span>
        <h1 className="mt-6 font-display text-4xl sm:text-5xl text-ink">
          Impressum
        </h1>
        <div className="mt-12 space-y-10 text-ink-soft leading-relaxed">
          <section>
            <h2 className="font-display text-xl text-ink">
              Angaben gemäß § 5 TMG
            </h2>
            <p className="mt-4">
              {VEREIN.name}
              <br />
              {VEREIN.address.street}
              <br />
              {VEREIN.address.city}
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink">Vertreten durch</h2>
            <ul className="mt-4 space-y-1">
              {VORSTAND.map((v) => (
                <li key={v.name}>
                  {v.role}: {v.name}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink">Kontakt</h2>
            <p className="mt-4">
              Telefon: {VEREIN.phone}
              <br />
              Alternativ: {VEREIN.phoneAlt}
              <br />
              E-Mail: {VEREIN.email}
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink">Registereintrag</h2>
            <p className="mt-4">
              Eintragung im Vereinsregister.
              <br />
              Registergericht: {VEREIN.registerCourt}
              <br />
              Registernummer: {VEREIN.registerNumber}
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p className="mt-4">
              {VORSTAND[0].name}
              <br />
              {VEREIN.address.street}
              <br />
              {VEREIN.address.city}
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink">Haftungshinweis</h2>
            <p className="mt-4">
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
              Haftung für die Inhalte externer Links. Für den Inhalt der
              verlinkten Seiten sind ausschließlich deren Betreiber
              verantwortlich.
            </p>
          </section>
        </div>
      </Container>
    </section>
  );
}
