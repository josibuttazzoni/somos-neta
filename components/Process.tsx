"use client";

import { useEffect, useRef, useState } from "react";
import { processSteps } from "@/lib/content";
import SectionHead from "./SectionHead";

export default function Process() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setFilled(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="grid-texture-dark relative bg-noche py-[76px]">
      <div className="wrap">
        <SectionHead eyebrow="Proceso" title="Así empezamos a trabajar." dark />
        <div ref={trackRef} className="flex flex-col gap-8 pt-4 min-[901px]:flex-row min-[901px]:gap-0">
          {processSteps.map((s, i) => (
            <div key={s.num} className="process-node relative flex-1 pr-5">
              <div className="process-circle">{s.num}</div>
              {i < processSteps.length - 1 && (
                <div className="process-connector">
                  <div
                    className="process-connector-fill"
                    style={{
                      width: filled ? "100%" : 0,
                      transitionDelay: `${200 + i * 300}ms`,
                    }}
                  />
                </div>
              )}
              <h4 className="mb-2.5 text-base font-semibold text-crema">{s.title}</h4>
              <p className="pr-3 text-sm text-crema/60">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
