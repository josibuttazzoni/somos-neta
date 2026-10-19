import { pricingFactors, wa } from "@/lib/content";
import SectionHead from "./SectionHead";

export default function Pricing() {
  return (
    <section id="precios" className="bg-white py-[76px]">
      <div className="wrap">
        <SectionHead eyebrow="Precios" title="Claro desde el principio.">
          Cada propuesta se arma a medida, sin letra chica. El valor depende de:
        </SectionHead>

        <ul className="max-w-[680px]">
          {pricingFactors.map((b, i) => (
            <li
              key={b}
              className={`flex gap-3 py-2.5 text-[15px] ${i === 0 ? "" : "border-t border-linea"}`}
            >
              <span className="text-coral">●</span>
              {b}
            </li>
          ))}
        </ul>

        <p className="mt-6 text-[15px] text-gris-texto">
          La primera consulta es sin cargo y sin compromiso.
        </p>

        <div className="mt-7">
          <a
            href={wa("Hola Somos NETA, quiero pedir una propuesta para mi empresa")}
            data-ubicacion="precios"
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
