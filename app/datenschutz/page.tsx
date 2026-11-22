import type { Metadata } from "next";
import Container from "@/components/container";
import { VEREIN } from "@/lib/data";

export const metadata: Metadata = {
  title: "Datenschutz",
};

export default function DatenschutzPage() {
  return (
    <section className="pt-28 pb-16 sm:pt-36 sm:pb-24 bg-sand">
      <Container size="md">
        <span className="rule">Rechtliches</span>
        <h1 className="mt-6 font-display text-4xl sm:text-5xl text-ink">
          Datenschutz
        </h1>

        <div className="mt-12 space-y-10 text-ink-soft leading-relaxed">
          <section>
            <h2 className="font-display text-xl text-ink">Verantwortlich</h2>
            <p className="mt-4">
              {VEREIN.name}
              <br />
              {VEREIN.address.street}
              <br />
              {VEREIN.address.city}
              <br />
              E-Mail: {VEREIN.email}
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink">
              Allgemeiner Hinweis
            </h2>
            <p className="mt-4">
              Diese Website wird so sparsam wie möglich betrieben. Es werden
              keine Cookies zu Tracking- oder Werbezwecken gesetzt. Beim Aufruf
              der Seite verarbeitet der Server technisch notwendige
              Verbindungsdaten wie IP-Adresse, Datum, Uhrzeit und aufgerufene
              Seite in sogenannten Server-Logs. Diese Daten werden nicht mit
              anderen Daten zusammengeführt.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink">Kontaktaufnahme</h2>
            <p className="mt-4">
              Wenn Sie uns per E-Mail oder Telefon kontaktieren, werden Ihre
              Angaben zur Beantwortung Ihrer Anfrage und für etwaige
              Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht
              ohne Ihre Einwilligung weiter.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink">
              Ihre Rechte
            </h2>
            <p className="mt-4">
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über
              Ihre gespeicherten personenbezogenen Daten, deren Herkunft und
              Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf
              Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren
              Fragen zum Thema personenbezogene Daten können Sie sich jederzeit
              unter {VEREIN.email} an uns wenden.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink">Platzhaltertext</h2>
            <p className="mt-4">
              Dies ist eine Entwurfsfassung. Vor Veröffentlichung wird die
              Datenschutzerklärung in Abstimmung mit dem Vorstand
              rechtssicher ergänzt, insbesondere im Hinblick auf Hosting-,
              Schriftart- und Bildquellen.
            </p>
          </section>
        </div>
      </Container>
    </section>
  );
}
