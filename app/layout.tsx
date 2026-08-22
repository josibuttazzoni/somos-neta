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
  variable: "--font-cormorant",
});

const yaldevi = Yaldevi({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-yaldevi",
});

export const metadata: Metadata = {
  title: "Somos NETA — Liquidación de sueldos para PyMEs",
  description:
    "Liquidación de sueldos y gestión laboral para PyMEs argentinas: recibos, cargas sociales, legajos y novedades.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body
        className={`${outfit.variable} ${dmSerif.variable} ${cormorant.variable} ${yaldevi.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
