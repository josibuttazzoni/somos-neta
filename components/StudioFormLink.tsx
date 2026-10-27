"use client";

import { SOS_EVENT } from "@/lib/content";

/** Baja al formulario y le avisa que preseleccione "Un estudio contable". */
export default function StudioFormLink() {
  return (
    <a
      href="#contacto"
      onClick={() => window.dispatchEvent(new CustomEvent(SOS_EVENT, { detail: "estudio" }))}
      className="text-[13.5px] text-gris-texto underline underline-offset-4 transition hover:text-coral"
    >
      o completá el formulario
    </a>
  );
}
