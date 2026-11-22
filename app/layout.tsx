import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kulturinsel Jakobus Kesslingen e.V.",
    template: "%s · Kulturinsel Jakobus Kesslingen",
  },
  description:
    "Kultur, Jakobswege und Begegnung im Dreiländereck. Der Verein Kulturinsel Jakobus Kesslingen pflegt das kulturelle Erbe rund um den Jakobsweg und das Dorfleben in Perl-Kesslingen.",
  openGraph: {
    title: "Kulturinsel Jakobus Kesslingen e.V.",
    description:
      "Kultur, Jakobswege und Begegnung im Dreiländereck Deutschland, Luxemburg und Frankreich.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-sand text-ink">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
