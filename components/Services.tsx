"use client";

import { useState } from "react";
import { services, wa } from "@/lib/content";
import SectionHead from "./SectionHead";

export default function Services() {
  const [scopeOpen, setScopeOpen] = useState(false);

  return (
    <section id="servicios" className="bg-white py-[76px]">
      <div className="wrap">
        <SectionHead
          eyebrow="Servicios"
          title="Todo lo que hace un analista de sueldos, en tus manos."
          className="!mb-4"
        >
          Gestionamos cada aspecto laboral de tu empresa.
        </SectionHead>

        <div className="mb-11 inline-flex items-center gap-[9px] rounded-full bg-petroleo/[0.06] py-[9px] pr-4 pl-3 text-[13px] font-medium leading-snug text-noche">
          <span className="animate-tracking h-[7px] w-[7px] shrink-0 rounded-full bg-coral" />
          No es &ldquo;liquidamos y listo&rdquo; — hacemos seguimiento periódico de lo que pasa en tu
          empresa, mes a mes.
        </div>

        <div className="grid gap-5 min-[640px]:grid-cols-3">
          {services.map((s) => (
            <div key={s.num} className={`service-card ${s.hover}`}>
              <span className="num">{s.num}</span>
              <h3>{s.title}</h3>
              <p className="sub">{s.sub}</p>
              <ul>
                {s.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <button
          onClick={() => setScopeOpen((v) => !v)}
          aria-expanded={scopeOpen}
          className="mt-9 flex items-center gap-2 text-sm font-medium text-gris-texto underline decoration-linea underline-offset-[3px] transition hover:text-noche"
        >
          <span>¿Qué es lo que NO hacemos?</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={`shrink-0 transition-transform duration-300 ${scopeOpen ? "rotate-180" : ""}`}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            scopeOpen ? "max-h-40 pt-3.5" : "max-h-0"
          }`}
        >
          <p className="max-w-[600px] text-sm text-gris-texto">
            No liquidamos impuestos, no hacemos balances contables ni gestionamos pagos o cuentas
            bancarias. Nos especializamos en gestión laboral — y hacemos eso mejor que nadie.
          </p>
        </div>

        <div className="mt-4 flex flex-col items-start gap-6 rounded-2xl border border-[#b9c9c7]/55 bg-[#b9c9c7]/20 px-7 py-6 min-[701px]:flex-row min-[701px]:items-center min-[701px]:justify-between">
          <div>
            <h4 className="mb-1.5 text-[15px] font-semibold text-noche">¿Necesitás algo puntual?</h4>
            <p className="max-w-[520px] text-sm text-gris-texto">
              Liquidaciones finales complejas, auditorías de legajos, migraciones de sistema o
              convenios poco frecuentes — consultanos por servicios extraordinarios, se cotizan
              aparte.
            </p>
          </div>
          <a
            href={wa("Hola Somos NETA, quiero consultar por un servicio puntual")}
            className="btn btn-ghost whitespace-nowrap"
            target="_blank"
            rel="noopener"
          >
            Consultar por WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
