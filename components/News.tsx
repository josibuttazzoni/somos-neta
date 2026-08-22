"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { news } from "@/lib/content";
import SectionHead from "./SectionHead";

const GAP = 20;

export default function News() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [perView, setPerView] = useState(3);
  const [current, setCurrent] = useState(0);
  const [offset, setOffset] = useState(0);
  const touchStartX = useRef(0);

  const maxIndex = Math.max(0, news.length - perView);

  const measure = useCallback(
    (index: number) => {
      const first = trackRef.current?.children[0] as HTMLElement | undefined;
      if (!first) return;
      setOffset(index * (first.getBoundingClientRect().width + GAP));
    },
    []
  );

  useEffect(() => {
    const onResize = () => {
      const pv = window.innerWidth <= 900 ? 1 : 3;
      setPerView(pv);
      setCurrent((c) => Math.min(c, Math.max(0, news.length - pv)));
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    measure(current);
  }, [current, perView, measure]);

  const go = (delta: number) =>
    setCurrent((c) => Math.min(maxIndex, Math.max(0, c + delta)));

  return (
    <section id="novedades" className="py-[76px]">
      <div className="wrap">
        <SectionHead eyebrow="Novedades normativas" title="Siempre al día.">
          El contexto laboral argentino cambia constantemente. Estas son las novedades más relevantes
          que estamos aplicando.
        </SectionHead>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex gap-5 transition-transform duration-[400ms] ease-[cubic-bezier(.34,1.2,.64,1)]"
              style={{ transform: `translateX(-${offset}px)` }}
              onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
              onTouchEnd={(e) => {
                const diff = touchStartX.current - e.changedTouches[0].clientX;
                if (Math.abs(diff) > 40) go(diff > 0 ? 1 : -1);
              }}
            >
              {news.map((n) => (
                <div key={n.title} className="news-card">
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
          </div>

          {/* Con 3 novedades solo hace falta navegar en mobile (1 card por vista). */}
          {maxIndex > 0 && (
            <div className="mt-6 flex justify-center gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  aria-label={`Ir a la novedad ${i + 1}`}
                  className={`carousel-dot ${i === current ? "active" : ""}`}
                  onClick={() => setCurrent(i)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
