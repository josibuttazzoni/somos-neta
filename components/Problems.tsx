import { problems } from "@/lib/content";
import SectionHead from "./SectionHead";

export default function Problems() {
  return (
    <section id="problema" className="py-[76px]">
      <div className="wrap">
        <SectionHead
          eyebrow="El problema"
          title="Lo que pasa cuando los sueldos no son tu prioridad."
        />
        <div className="grid gap-6 grid-cols-1 md:grid-cols-4">
          {problems.map((p) => (
            <div key={p.num} className="problem-card">
              <span className="num">{p.num}</span>
              <h4>{p.title}</h4>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
