"use client";

import { useState } from "react";
import { wa } from "@/lib/content";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contacto" className="py-[76px]">
      <div className="wrap">
        <div className="grid gap-14 rounded-[28px] bg-noche px-6 py-8 text-crema min-[561px]:p-16 min-[901px]:grid-cols-2">
          <div>
            <span className="eyebrow !text-coral">Contacto</span>
            <h2 className="mb-4 text-4xl text-crema">¿Hablamos?</h2>
            <p className="mb-8 text-base text-crema/70">
              La primera consulta es sin cargo y sin compromiso. Contanos sobre tu PyME y te decimos
              qué necesitás, cuánto cuesta y cómo arrancamos — sin vueltas.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <a
                href={wa("Hola Somos NETA, quiero pedir mi primera consulta sin cargo")}
                className="btn btn-coral"
                target="_blank"
                rel="noopener"
              >
                Hablemos por WhatsApp
              </a>
              <a
                href="https://instagram.com/somos_neta"
                className="btn btn-outline-light"
                target="_blank"
                rel="noopener"
              >
                Instagram
              </a>
            </div>
          </div>

          <form
            className="flex flex-col gap-3.5"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <input className="form-field" type="text" placeholder="Nombre" required />
            <input className="form-field" type="text" placeholder="Empresa" required />
            <input className="form-field" type="email" placeholder="Email" required />
            <input className="form-field" type="text" placeholder="Cantidad de empleados" />
            <textarea
              className="form-field"
              placeholder="Contanos brevemente qué necesitás"
              rows={3}
            />
            <button
              type="submit"
              className="btn btn-coral mt-1.5 justify-center"
              disabled={sent}
              style={sent ? { opacity: 0.7 } : undefined}
            >
              {sent ? "Enviado ✓" : "Pedí tu primera consulta sin cargo"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
