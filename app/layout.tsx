import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Serif_Display, Outfit, Yaldevi } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: "400",
  style: ["italic"],
  variable: "--font-cormorant-raw",
});

const yaldevi = Yaldevi({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-yaldevi-raw",
});

export const metadata: Metadata = {
  title: "Somos NETA — Liquidación de sueldos para PyMEs",
  description:
    "Liquidación de sueldos y gestión laboral para PyMEs argentinas: recibos, cargas sociales, legajos y novedades.",
  manifest: "/favicon/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon/favicon.ico", type: "image/x-icon", sizes: "any" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Las variables de next/font van en <html>: `@theme` las resuelve en `:root`,
    // así que declararlas en <body> las deja fuera de alcance.
    <html
      lang="es"
      className={`${outfit.variable} ${dmSerif.variable} ${cormorant.variable} ${yaldevi.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
