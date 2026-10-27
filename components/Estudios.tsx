import { estudiosPoints, WA_ESTUDIO } from "@/lib/content";
import StudioFormLink from "./StudioFormLink";

export default function Estudios() {
  return (
    <section id="estudios" className="grid-texture relative bg-crema py-[96px]">
      <div className="wrap">
        <div className="mb-14 max-w-[680px]">
          <span className="eyebrow !text-coral">Para estudios</span>
          <h2 className="my-2.5 mb-4 text-[40px] leading-[1.05] text-petroleo min-[901px]:text-[58px]">
            Sueldos al día. Tu estudio, tranquilo.
          </h2>
          <p className="text-[17px] text-gris-texto">
            Funcionamos como el área de sueldos de tu estudio, para que vos te dediques al resto.
          </p>
        </div>

        <div className="grid gap-5 min-[901px]:grid-cols-3">
          {estudiosPoints.map((p) => (
            <div key={p.num} className="rounded-[20px] bg-petroleo p-8 text-crema">
              <span className="mb-4 block font-serif text-[48px] leading-none text-coral">
                {p.num}
              </span>
              <h3 className="mb-2.5 font-serif text-[24px] font-normal leading-[1.15] text-crema">
                {p.title}
              </h3>
              <p className="text-[15px] text-crema/70">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center text-center">
          <p className="mb-8 max-w-[760px] font-serif text-[28px] leading-[1.2] text-noche min-[901px]:text-[36px]">
            <span className="relative inline-block">
              Un mes con nosotras:
              <svg
                className="absolute -bottom-2 left-0 h-[10px] w-full"
                viewBox="0 0 200 10"
                preserveAspectRatio="none"
                fill="none"
                aria-hidden
              >
                <path
                  d="M2 6 C 22 1, 38 9, 62 5 S 104 2, 128 6 S 170 9, 198 4"
                  stroke="#dc816c"
                  strokeWidth="3"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </span>{" "}
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
