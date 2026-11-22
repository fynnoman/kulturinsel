// Seed-Daten aus User-Briefing (Stand 2026-11-22).
// VOR VERÖFFENTLICHUNG durch den Verein bestätigen:
//   - Vorstand (Namen, Zuständigkeiten)
//   - Anschrift, Telefonnummern, E-Mail
//   - Projektangaben, Förderbeträge, Daten

export const VEREIN = {
  name: "Kulturinsel Jakobus Kesslingen e.V.",
  short: "Kulturinsel Jakobus",
  founded: "September 2020",
  foundedYear: 2020,
  registered: "11. Dezember 2020",
  seat: "Perl-Kesslingen, Saarland",
  registerCourt: "Amtsgericht Merzig",
  registerNumber: "VR 1681",
  address: {
    street: "Kapellenweg 15",
    city: "66706 Perl-Kesslingen",
  },
  phone: "06865 1233",
  phoneAlt: "06865 18137",
  email: "Kulturinsel-Jakobus-Kesslingen@t-online.de",
};

export const VORSTAND = [
  {
    role: "1. Vorsitzender",
    name: "Peter Kessler",
  },
  {
    role: "Stellvertretender Vorsitzender",
    name: "Franz-Wilhelm Babitsch",
  },
  {
    role: "Vorstand",
    name: "Dr. Julia Kessler",
  },
  {
    role: "Vorstand",
    name: "Silvia Drisch",
  },
];

export const NAV = [
  { href: "/", label: "Startseite" },
  { href: "/verein", label: "Verein" },
  { href: "/projekte", label: "Projekte" },
  { href: "/jakobsweg", label: "Jakobsweg" },
  { href: "/termine", label: "Termine" },
  { href: "/mitmachen", label: "Mitmachen" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const PILLARS = [
  {
    key: "kultur",
    kicker: "I.",
    title: "Kultur und Kunst",
    body:
      "Theater, Musik und regionale Kulturprojekte, über Ländergrenzen hinweg gedacht. Die Bühne wird im Dorf aufgebaut, nicht im Zentrum.",
  },
  {
    key: "pilger",
    kicker: "II.",
    title: "Jakobswege und Pilgerkultur",
    body:
      "Wir pflegen das Erbe rund um den Jakobsweg, begleiten Pilger durch das Dreiländereck und halten die Jakobuskapelle in Kesslingen offen.",
  },
  {
    key: "gemeinschaft",
    kicker: "III.",
    title: "Gemeinschaft und Dorfleben",
    body:
      "Wir stärken das Zusammenleben in Kesslingen, verbinden Generationen und geben dem ländlichen Raum einen kulturellen Ort.",
  },
];

export type Projekt = {
  year: string;
  title: string;
  kind: "Theater" | "Pilgerweg" | "Europa" | "Gemeinschaft";
  body: string;
  note?: string;
};

export const PROJEKTE: Projekt[] = [
  {
    year: "2023",
    title: "„Kesslingen ist überall!“",
    kind: "Theater",
    body:
      "Bürger-Theaterprojekt über gesellschaftlichen Wandel und das Leben im ländlichen Raum. Zwei Open-Air-Aufführungen im Juli 2023, in Kooperation mit der Katholischen Erwachsenenbildung im Bistum Trier.",
    note: "Gefördert mit 3.392,74 € aus dem Regionalbudget.",
  },
  {
    year: "2024",
    title: "Neuer Jakobsweg über Kesslingen",
    kind: "Pilgerweg",
    body:
      "Mitwirkung an der Entwicklung und feierlichen Eröffnung der Jakobsweg-Zuwegung von Merzig nach Borg über Kesslingen am 23. März 2024 mit Aufführung, Andacht, Musik und Pilgerbetreuung.",
  },
  {
    year: "2024",
    title: "Empfang der Olympischen Flamme in Perl",
    kind: "Europa",
    body:
      "Der Verein war mit einem Informationsstand beim Empfang der Olympischen Flamme in Perl vertreten und hat Besucher über den Jakobsweg durch die Region informiert.",
  },
  {
    year: "2025",
    title: "Pilgerwanderung Dreisbach zur Jakobuskapelle",
    kind: "Pilgerweg",
    body:
      "Pilgerwanderung am 17. Mai 2025 von Dreisbach über Orscholz zur Jakobuskapelle Kesslingen, mit Rast und Begegnung entlang der Strecke.",
  },
  {
    year: "2025",
    title: "Erste-Hilfe-Auffrischung für Ehrenamtliche",
    kind: "Gemeinschaft",
    body:
      "Kostenloser Auffrischungskurs im Mai 2025 für Pilgerbegleiter, Wanderführer und Ehrenamtliche aus dem Dorf.",
  },
  {
    year: "2026",
    title: "Europa-Festival in Schengen",
    kind: "Europa",
    body:
      "Informationsstand am 9. Mai 2026 beim Europa-Festival in Schengen. Begegnung mit Besuchern aus Deutschland, Luxemburg und Frankreich.",
  },
];

export type Termin = {
  date: string;
  dateLabel: string;
  title: string;
  kind: "Wanderung" | "Theater" | "Begegnung" | "Andacht" | "Kurs";
  place: string;
  note?: string;
};

// Platzhalter-Termine. Vom Verein zu bestätigen.
export const TERMINE: Termin[] = [
  {
    date: "2026-12-06",
    dateLabel: "6. Dezember 2026",
    title: "Adventliche Begegnung an der Jakobuskapelle",
    kind: "Begegnung",
    place: "Jakobuskapelle, Kapellenweg Kesslingen",
    note: "Gemeinsames Innehalten mit Musik und einem warmen Getränk.",
  },
  {
    date: "2027-03-22",
    dateLabel: "22. März 2027",
    title: "Pilgerauftakt im Frühjahr",
    kind: "Andacht",
    place: "Jakobuskapelle Kesslingen",
    note: "Kurze Andacht zum Start in die Pilgersaison, offen für Gäste.",
  },
  {
    date: "2027-05-15",
    dateLabel: "15. Mai 2027",
    title: "Pilgerwanderung Merzig · Borg · Kesslingen",
    kind: "Wanderung",
    place: "Treffpunkt: Merzig",
    note: "Etappenwanderung entlang der Jakobsweg-Zuwegung.",
  },
  {
    date: "2027-07-18",
    dateLabel: "18. Juli 2027",
    title: "Theater im Dorf",
    kind: "Theater",
    place: "Dorfplatz Kesslingen",
    note: "Open-Air-Aufführung des Bürgertheater-Ensembles.",
  },
  {
    date: "2027-09-04",
    dateLabel: "4. September 2027",
    title: "Erste-Hilfe für Pilgerbegleiter",
    kind: "Kurs",
    place: "Perl-Kesslingen",
    note: "Auffrischungskurs für ehrenamtliche Pilgerbegleiter.",
  },
  {
    date: "2027-10-23",
    dateLabel: "23. Oktober 2027",
    title: "Herbstlicher Pilgerabend",
    kind: "Begegnung",
    place: "Jakobuskapelle Kesslingen",
    note: "Rückblick auf die Pilgersaison, offen für alle.",
  },
];

export const CHRONIK = [
  {
    year: "2020",
    title: "Gründung",
    body:
      "Im September 2020 gründet sich die Kulturinsel Jakobus Kesslingen in Perl-Kesslingen. Am 11. Dezember 2020 wird der Verein im Vereinsregister des Amtsgerichts Merzig eingetragen.",
  },
  {
    year: "2023",
    title: "Theaterprojekt „Kesslingen ist überall!“",
    body:
      "Der Verein bringt ein Bürger-Theaterprojekt über das Leben im ländlichen Raum auf die Bühne, in zwei Open-Air-Aufführungen im Juli 2023.",
  },
  {
    year: "2024",
    title: "Jakobsweg-Zuwegung über Kesslingen",
    body:
      "Mit Partnern aus der Region wird die neue Jakobsweg-Zuwegung von Merzig nach Borg über Kesslingen eröffnet. Der Verein organisiert die Feier am 23. März 2024.",
  },
  {
    year: "2025",
    title: "Pilgerjahr und Gemeinschaftsarbeit",
    body:
      "Wanderungen zur Jakobuskapelle, Erste-Hilfe-Kurs für Ehrenamtliche und Pilgerbetreuung prägen das Jahr.",
  },
  {
    year: "2026",
    title: "Europa und Dreiländereck",
    body:
      "Der Verein zeigt Präsenz beim Europa-Festival in Schengen und arbeitet an grenzüberschreitenden Formaten im Dreiländereck.",
  },
];

export const ZIELE = [
  "Natur-Info-Park Kesslingen",
  "Informationszentrum für Pilger und Gäste",
  "Entwicklung der Kesslinger Schleife für Jakobspilger",
  "Kinder- und Jugendarbeit sowie Theaterworkshops",
  "Grenzüberschreitende Kulturkooperationen",
];

export const WEGE = [
  {
    key: "zuwegung",
    title: "Zuwegung Merzig · Borg · Kesslingen",
    distance: "rund 28 km",
    body:
      "Die 2024 eröffnete Zuwegung führt durch die Hügel zwischen Saar und Mosel. Rast an der Jakobuskapelle in Kesslingen.",
  },
  {
    key: "schleife",
    title: "Kesslinger Schleife",
    distance: "in Entwicklung",
    body:
      "Eine geplante Rundroute, die Kesslingen als Pilgerstation im Dreiländereck verankert und das Dorf mit den Nachbargemeinden verbindet.",
  },
  {
    key: "dreilaender",
    title: "Übergang ins Dreiländereck",
    distance: "offene Route",
    body:
      "Vom Kapellenweg aus öffnet sich der Weg nach Luxemburg und Frankreich. Pilgerberatung und Begleitung auf Anfrage.",
  },
];
