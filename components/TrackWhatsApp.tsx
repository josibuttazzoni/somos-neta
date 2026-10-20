"use client";

import { useEffect } from "react";

/**
 * Empuja `whatsapp_click` al dataLayer en cada clic sobre un enlace con
 * `data-ubicacion` (los de WhatsApp). GTM lo toma con un activador de evento personalizado.
 */
export default function TrackWhatsApp() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element).closest<HTMLAnchorElement>("a[data-ubicacion]");
      if (!a) return;
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "whatsapp_click", ubicacion: a.dataset.ubicacion });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
