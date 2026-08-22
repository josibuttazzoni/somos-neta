"use client";

import { useState } from "react";
import { pricingBullets, pricingTiers, wa } from "@/lib/content";
import SectionHead from "./SectionHead";

export default function Pricing() {
  const [employees, setEmployees] = useState(8);

  const tier = pricingTiers.find((t) => employees <= t.max)!;
  const pct = Math.min(100, (employees / 50) * 100);

  return (
    <section id="precios" className="bg-white py-[76px]">
      <div className="wrap">
        <SectionHead eyebrow="Precios" title="Claro desde el principio.">
          Un valor orientativo para que tengas una referencia — la propuesta final se arma a medida.
        </SectionHead>

        <div className="grid items-center gap-14 rounded-3xl border border-linea bg-white px-6 py-8 min-[561px]:p-14 min-[901px]:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="font-serif text-3xl leading-tight text-noche">
              ¿Cuántos
              <br />
              empleados
              <br />
              tenés?
            </p>
            <div className="mt-6 flex items-center gap-4">
              <input
                type="range"
                min={1}
                max={50}
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                aria-label="Cantidad de empleados"
                className="est-slider"
              />
              <span className="stat-num min-w-[52px] text-[40px] text-petroleo">{employees}</span>
            </div>
          </div>

          <div>
            <div className="stat-num mb-4 text-[28px] text-petroleo">
              Desde {tier.price} por empleado
            </div>

            <div className="mb-2">
              <div className="relative h-2.5 rounded-full border border-linea bg-crema">
                <div
                  className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-petroleo to-coral transition-[width] duration-300"
                  style={{ width: `${pct}%` }}
                />
                <div
                  className="absolute top-1/2 h-[18px] w-[18px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-noche bg-white shadow-[0_2px_6px_rgba(21,34,46,.25)] transition-[left] duration-300"
                  style={{ left: `${pct}%` }}
                />
              </div>
              <div className="mt-2.5 flex justify-between text-xs text-gris-texto">
                <span>Costo por empleado más alto</span>
                <span>Costo por empleado más bajo</span>
              </div>
            </div>

            <p className="mb-6 text-[15px] text-gris-texto">{tier.desc}</p>

            <ul>
              {pricingBullets.map((b, i) => (
                <li
                  key={b}
                  className={`flex gap-3 py-2.5 text-[15px] ${i === 0 ? "" : "border-t border-linea"}`}
                >
                  <span className="text-coral">●</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-9 flex max-w-[640px] flex-col gap-1 rounded-[10px] border border-coral/35 bg-coral/[0.08] px-6 py-[18px] text-center">
          <strong className="text-[14.5px] font-semibold text-noche">
            Esto es un valor orientativo, no un presupuesto cerrado.
          </strong>
          <span className="text-[13px] leading-relaxed text-gris-texto">
            Tu propuesta final se arma según la cantidad de empleados, el convenio aplicable, la
            complejidad de tu operación y los servicios que necesites.
          </span>
        </div>

        <div className="mt-7 text-center">
          <a
            href={wa("Hola Somos NETA, quiero pedir una propuesta para mi empresa")}
            className="btn btn-primary"
            target="_blank"
            rel="noopener"
          >
            Pedí tu propuesta a medida →
          </a>
        </div>
      </div>
    </section>
  );
}
