"use client";

import { useState } from "react";
import { wa } from "@/lib/content";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: data.get("nombre"),
          empresa: data.get("empresa"),
          email: data.get("email"),
          empleados: data.get("empleados"),
          mensaje: data.get("mensaje"),
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "No pudimos enviar la consulta.");
      }

      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "No pudimos enviar la consulta.");
    }
  };

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
            </div>
          </div>

          {status === "sent" ? (
            <div
              role="status"
              className="flex flex-col justify-center gap-3 rounded-2xl border border-coral/40 bg-coral/10 p-8"
            >
              <p className="font-serif text-2xl italic text-coral">¡Recibido!</p>
              <p className="text-sm text-crema/80">
                Te vamos a contestar a la brevedad. Si es urgente, escribinos por WhatsApp y te
                respondemos en el momento.
              </p>
            </div>
          ) : (
            <form className="flex flex-col gap-3.5" onSubmit={onSubmit}>
              <input className="form-field" name="nombre" type="text" placeholder="Nombre" required />
              <input className="form-field" name="empresa" type="text" placeholder="Empresa" required />
              <input className="form-field" name="email" type="email" placeholder="Email" required />
              <input
                className="form-field"
                name="empleados"
                type="text"
                placeholder="Cantidad de empleados"
              />
              <textarea
                className="form-field"
                name="mensaje"
                placeholder="Contanos brevemente qué necesitás"
                rows={3}
              />
              <button
                type="submit"
                className="btn btn-coral mt-1.5 justify-center disabled:opacity-70"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Enviando…" : "Pedí tu primera consulta sin cargo"}
              </button>

              {status === "error" && (
                <p role="alert" className="text-[13px] text-coral">
                  {error} Probá de nuevo o escribinos por WhatsApp.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
