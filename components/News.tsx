"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { news } from "@/lib/content";
import SectionHead from "./SectionHead";

const GAP = 20;

export default function News() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [perView, setPerView] = useState(3);
  const [current, setCurrent] = useState(0);

  const maxIndex = Math.max(0, news.length - perView);

  const step = useCallback(() => {
    const first = trackRef.current?.children[0] as HTMLElement | undefined;
    return first ? first.getBoundingClientRect().width + GAP : 0;
  }, []);

  useEffect(() => {
    const onResize = () => setPerView(window.innerWidth <= 900 ? 1 : 3);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // El índice activo se deriva del scroll real, así los dots siguen al arrastre y a la rueda.
  const onScroll = () => {
    const track = trackRef.current;
    const s = step();
    if (!track || !s) return;
    setCurrent(Math.min(maxIndex, Math.max(0, Math.round(track.scrollLeft / s))));
  };

  const scrollToIndex = (index: number) => {
    trackRef.current?.scrollTo({ left: index * step(), behavior: "smooth" });
  };

  return (
    <section id="novedades" className="py-[76px]">
      <div className="wrap">
        <SectionHead eyebrow="Novedades normativas" title="Siempre al día.">
          El contexto laboral argentino cambia constantemente. Estas son las novedades más relevantes
          que estamos aplicando.
        </SectionHead>

        <div className="relative">
          <div
            ref={trackRef}
            className="news-track flex snap-x snap-mandatory gap-5 overflow-x-auto pb-1"
            onScroll={onScroll}
          >
            {news.map((n) => (
              <div key={n.title} className="news-card snap-start">
                <span
                  className={`mb-3.5 inline-block rounded-full px-3 py-[5px] text-[11px] font-semibold ${n.badgeClass}`}
                >
                  {n.badge}
                </span>
                <div className="mb-1.5 text-xs text-gris-texto">{n.date}</div>
                <h4 className="mb-2 text-base font-semibold">{n.title}</h4>
                <p className="text-[13.5px] text-gris-texto">{n.body}</p>
              </div>
            ))}
          </div>

          {/* Los dots aparecen cuando hay más novedades que cards por vista. */}
          {maxIndex > 0 && (
            <div className="mt-6 flex justify-center gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  aria-label={`Ir a la novedad ${i + 1}`}
                  className={`carousel-dot ${i === current ? "active" : ""}`}
                  onClick={() => scrollToIndex(i)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
