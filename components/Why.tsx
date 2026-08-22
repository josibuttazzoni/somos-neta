import { whyItems } from "@/lib/content";
import SectionHead from "./SectionHead";

export default function Why() {
  return (
    <section className="bg-noche pt-[88px] pb-[76px]">
      <div className="wrap">
        <SectionHead
          eyebrow="Por qué Somos NETA"
          title="No somos un estudio más. Somos especialistas."
          dark
        />
        <div className="grid gap-9 pt-4 min-[901px]:grid-cols-2 min-[901px]:gap-x-9 min-[901px]:gap-y-11">
          {whyItems.map((w) => (
            <div key={w.title} className="why-item">
              <h4>{w.title}</h4>
              <p>{w.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
