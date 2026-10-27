import { estudiosPoints, WA_ESTUDIO } from "@/lib/content";
import StudioFormLink from "./StudioFormLink";

export default function Estudios() {
  return (
    <section id="estudios" className="relative overflow-hidden bg-petroleo py-[96px] text-crema">
      <div className="grid-texture-estudios pointer-events-none absolute inset-0" aria-hidden />
      <div className="wrap relative">
        <div className="mb-14 max-w-[680px]">
          <span className="eyebrow !text-coral">Para estudios contables</span>
          <h2 className="my-2.5 mb-4 text-[40px] leading-[1.05] text-crema min-[901px]:text-[58px]">
            Sueldos al día. Tu estudio, tranquilo.
          </h2>
          <p className="text-[17px] text-coral-soft">
            Funcionamos como el área de sueldos de tu estudio, para que vos te dediques al resto.
          </p>
        </div>

        <div className="grid gap-5 min-[901px]:grid-cols-3">
          {estudiosPoints.map((p) => (
            <div
              key={p.num}
              className="rounded-[20px] border border-crema/15 bg-crema/[0.06] p-8 transition hover:border-coral"
            >
              <span className="mb-4 block font-serif text-[48px] leading-none text-coral">
                {p.num}
              </span>
              <h3 className="mb-2.5 text-xl font-semibold text-crema">{p.title}</h3>
              <p className="text-[15px] text-crema/70">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center text-center">
          <p className="mb-8 max-w-[760px] font-serif text-[28px] leading-[1.2] text-crema min-[901px]:text-[36px]">
            Un mes con nosotras:{" "}
            <span className="text-coral">
              vos nos pasás las novedades, nosotras te entregamos todo listo y en fecha.
            </span>
          </p>
          <a
            href={WA_ESTUDIO}
            data-ubicacion="estudios"
            className="btn btn-coral"
            target="_blank"
            rel="noopener"
          >
            Contanos de tu estudio
          </a>
          <div className="mt-4">
            <StudioFormLink />
          </div>
        </div>
      </div>
    </section>
  );
}
