"use client";

import { useEffect, useRef, useState } from "react";
import { testimonialQuote } from "@/lib/content";

export default function Testimonial() {
  const ref = useRef<HTMLParagraphElement>(null);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timer: number | undefined;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          io.unobserve(entry.target);
          let i = 0;
          const type = () => {
            if (i <= testimonialQuote.length) {
              setTyped(testimonialQuote.slice(0, i));
              i++;
              timer = window.setTimeout(type, 18);
            }
          };
          type();
        });
      },
      { threshold: 0.5 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      if (timer) window.clearTimeout(timer);
    };
  }, []);

  return (
    <section className="py-[76px]">
      <div className="wrap">
        <div className="rounded-3xl bg-petroleo px-6 py-9 text-center text-crema min-[561px]:p-16">
          <span className="eyebrow !text-coral-soft">Honestidad, ante todo</span>
          <h2 className="my-3.5 mb-7 text-[32px] text-crema">
            Todavía estamos escribiendo esta historia.
          </h2>
          <p
            ref={ref}
            className="typewriter mx-auto max-w-[760px] text-left font-serif text-xl italic leading-relaxed min-[561px]:text-2xl"
          >
            {typed}
          </p>
          <div className="mx-auto my-8 h-0.5 w-14 bg-crema/25" />
          <p className="mx-auto max-w-[520px] text-base font-medium leading-relaxed text-crema/85">
            Todo recibo de sueldo debería explicarse solo. El tuyo, con nosotras, lo hace.
          </p>
        </div>
      </div>
    </section>
  );
}
