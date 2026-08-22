import { heroBenefits, payslip, wa } from "@/lib/content";
import PayslipCard from "./PayslipCard";

export default function Hero() {
  return (
    <section className="grid-texture relative bg-crema px-0 pt-16 pb-12">
      <div className="wrap grid items-center gap-[60px] min-[901px]:grid-cols-[1.1fr_.9fr]">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-linea bg-white px-4 py-2 text-[13px] font-medium">
            <span className="animate-pulse-dot h-2 w-2 rounded-full bg-coral" />
            Liquidación de sueldos para PyMEs argentinas
          </div>

          <h1 className="mb-6 text-[38px] min-[901px]:text-[56px]">
            Nosotras liquidamos,
            <br />
            <span className="italic text-coral">vos crecés.</span>
          </h1>

          <p className="mb-9 max-w-[560px] text-[19px] font-light text-gris-texto">
            Nos encargamos de la liquidación de sueldos y la gestión laboral de tu PyME — recibos,
            cargas sociales, legajos y novedades — para que dejes de improvisar cada fin de mes y
            tengas siempre a alguien de confianza del otro lado.
          </p>

          <div className="mb-[26px] flex flex-wrap gap-x-[22px] gap-y-3.5">
            {heroBenefits.map((b) => (
              <span
                key={b}
                className="inline-flex items-center gap-2 text-[13.5px] font-medium text-noche before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-coral before:content-['']"
              >
                {b}
              </span>
            ))}
          </div>

          <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:justify-between">
            <a
              href={wa("Hola Somos NETA, quiero consultar por la liquidación de sueldos de mi empresa")}
              className="btn btn-primary justify-center"
              target="_blank"
              rel="noopener"
            >
              Hablemos por WhatsApp
            </a>
            <a href="#servicios" className="btn btn-ghost justify-center">
              Conocé cómo trabajamos
            </a>
          </div>
        </div>

        <PayslipCard data={payslip} />
      </div>
    </section>
  );
}
