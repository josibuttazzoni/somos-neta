import Image from "next/image";
import { founders } from "@/lib/content";
import SectionHead from "./SectionHead";

export default function Founders() {
  return (
    <section id="nosotras" className="bg-white py-[76px]">
      <div className="wrap">
        <SectionHead eyebrow="¿Quiénes somos?" title="Dos hermanas, no una plataforma anónima.">
          <span className="block max-w-[640px]">
            Somos NETA nació de una convicción: las PyMEs merecen el mismo nivel de servicio que las
            grandes empresas. Vimos que eso no existía, teníamos la experiencia para hacerlo bien, y
            decidimos construirlo nosotras. Cuando nos contratás, sabés exactamente quién está
            manejando la información de tu empresa y de tu gente — no es un número de ticket, somos
            nosotras dos.
          </span>
        </SectionHead>

        <div className="mt-10 grid gap-9 min-[901px]:grid-cols-2">
          {founders.map((f) => (
            <div key={f.name} className="founder-card">
              <div className="founder-photo">
                <Image src={f.photo} alt={f.name} width={1023} height={1300} />
              </div>
              <div className="flex min-w-0 flex-1 flex-col justify-center px-6 py-[26px]">
                <div className="stat-num text-[26px] text-noche">{f.name}</div>
                <div className="mt-0.5 mb-3 text-[12.5px] font-semibold tracking-[0.2px] text-coral">
                  {f.role}
                </div>
                <p className="text-[13.5px] italic leading-relaxed text-gris-texto">{f.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
