"use client";

import Image from "next/image";
import { useState } from "react";
import { navLinks, wa } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-linea bg-crema/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-[1180px] items-center justify-between px-8 py-5">
        <a href="#" className="firma" aria-label="Somos NETA">
          <Image src="/img/logo.svg" alt="Somos NETA." width={120} height={26} priority />
        </a>

        <div className="hidden items-center gap-9 min-[901px]:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-noche opacity-80 transition hover:text-petroleo hover:opacity-100"
            >
              {l.label}
            </a>
          ))}
          <a
            href={wa("Hola Somos NETA, quiero consultar por la liquidación de sueldos de mi empresa")}
            className="btn btn-primary !px-[22px] !py-[10px]"
            target="_blank"
            rel="noopener"
          >
            WhatsApp
          </a>
        </div>

        <button
          className="min-[901px]:hidden"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </nav>

      {open && (
        <div className="flex flex-col gap-1 border-t border-linea px-8 py-4 min-[901px]:hidden">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm font-medium text-noche"
            >
              {l.label}
            </a>
          ))}
          <a
            href={wa("Hola Somos NETA, quiero consultar por la liquidación de sueldos de mi empresa")}
            className="btn btn-primary mt-2 justify-center"
            target="_blank"
            rel="noopener"
          >
            WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
