"use client";

import { useEffect } from "react";

/**
 * Aplica el reveal al hacer scroll sobre los hijos directos de cada `.wrap`,
 * igual que la landing original.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("section > .wrap > *")
    );
    targets.forEach((el) => el.classList.add("reveal"));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          // `top < 0`: ya quedó por encima del viewport (salto por ancla); se muestra igual.
          if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
            window.setTimeout(() => entry.target.classList.add("in-view"), Math.min(i, 4) * 60);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    targets.forEach((el) => io.observe(el));

    // Al saltar a una sección por ancla, su contenido se muestra de inmediato.
    const revealHash = () => {
      const target = document.querySelector(window.location.hash || "#none");
      target?.querySelectorAll(".reveal").forEach((el) => el.classList.add("in-view"));
    };
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!a) return;
      document
        .querySelector(a.getAttribute("href")!)
        ?.querySelectorAll(".reveal")
        .forEach((el) => el.classList.add("in-view"));
    };
    revealHash();
    document.addEventListener("click", onClick);
    window.addEventListener("hashchange", revealHash);
    return () => {
      io.disconnect();
      document.removeEventListener("click", onClick);
      window.removeEventListener("hashchange", revealHash);
    };
  }, []);

  return null;
}
