import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de privacidad — Somos NETA",
  description: "Cómo Somos NETA usa los datos que nos compartís.",
  alternates: { canonical: "/privacidad" },
};

export default function Privacidad() {
  return (
    <>
      <header className="border-b border-linea">
        <div className="wrap flex items-center justify-between py-5">
          <Link href="/" aria-label="Somos NETA, volver al inicio">
            <Image src="/img/logo.svg" alt="Somos NETA." width={120} height={26} priority />
          </Link>
          <Link href="/" className="text-sm font-medium text-noche opacity-80 hover:text-petroleo">
            ← Volver al inicio
          </Link>
        </div>
      </header>

      <main className="wrap max-w-[760px] py-[76px]">
        <h1 className="mb-6 text-[40px] leading-[1.05] min-[901px]:text-[58px]">
          Política de privacidad
        </h1>
        {/* TODO: reemplazar por el texto definitivo que pasa NETA. */}
        <p className="text-[17px] text-gris-texto">
          Usamos los datos que nos compartís por el formulario o por WhatsApp solo para responderte.
          Para consultas sobre tus datos, escribinos a info@somosneta.com.ar.
        </p>
      </main>
    </>
  );
}
