"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { empleadosTramos, SOS_EVENT, type Sos, wa } from "@/lib/content";

type Status = "idle" | "sending" | "sent" | "error";

const sosOptions: { value: Sos; label: string }[] = [
  { value: "empresa", label: "Una empresa" },
  { value: "estudio", label: "Un estudio contable" },
  { value: "otro", label: "Otro" },
];

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [sos, setSos] = useState<Sos>("empresa");

  // Desde `#estudios` ("o completá el formulario") llega preseleccionado "estudio".
  useEffect(() => {
    const onSos = (e: Event) => setSos((e as CustomEvent<Sos>).detail);
    window.addEventListener(SOS_EVENT, onSos);
    return () => window.removeEventListener(SOS_EVENT, onSos);
  }, []);

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
          sos,
          nombre: data.get("nombre"),
          empresa: data.get("empresa"),
          email: data.get("email"),
          rubro: data.get("rubro"),
          empleados: data.get("empleados"),
          liquidaciones_por_mes: data.get("liquidaciones_por_mes"),
          telefono: data.get("telefono"),
          mensaje: data.get("mensaje"),
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "No pudimos enviar la consulta.");
      }

      // Sin GTM cargado igual queda en el array; GTM lo toma al iniciar.
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "generate_lead", metodo: "formulario" });
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
              La primera consulta es sin cargo y sin compromiso. Contanos sobre tu empresa o tu estudio y te decimos
              qué necesitás y cómo arrancamos — sin vueltas.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <a
                href={wa("Hola Somos NETA, quiero pedir mi primera consulta sin cargo")}
                data-ubicacion="contacto"
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
              <fieldset className="flex flex-col gap-2">
                <legend className="mb-2 text-[13px] font-medium text-crema/70">Sos…</legend>
                <div className="flex flex-wrap gap-2">
                  {sosOptions.map((o) => (
                    <label
                      key={o.value}
                      className={`cursor-pointer rounded-full border px-4 py-2 text-[13.5px] transition ${
                        sos === o.value
                          ? "border-coral bg-coral text-noche"
                          : "border-crema/20 text-crema/80 hover:border-coral"
                      }`}
                    >
                      <input
                        type="radio"
                        name="sos"
                        value={o.value}
                        checked={sos === o.value}
                        onChange={() => setSos(o.value)}
                        className="sr-only"
                      />
                      {o.label}
                    </label>
                  ))}
                </div>
              </fieldset>
              <input
                className="form-field"
                name="nombre"
                type="text"
                placeholder="Nombre"
                aria-label="Nombre"
                autoComplete="name"
                required
              />
              <input
                className="form-field"
                name="empresa"
                type="text"
                placeholder="Empresa o estudio"
                aria-label="Empresa o estudio"
                autoComplete="organization"
                required
              />
              <input
                className="form-field"
                name="email"
                type="email"
                placeholder="Email"
                aria-label="Email"
                autoComplete="email"
                required
              />
              <input
                className="form-field"
                name="telefono"
                type="tel"
                placeholder="WhatsApp o teléfono (opcional)"
                aria-label="WhatsApp o teléfono (opcional)"
                autoComplete="tel"
              />
              {sos === "estudio" ? (
                <input
                  className="form-field"
                  name="liquidaciones_por_mes"
                  type="text"
                  inputMode="numeric"
                  placeholder="¿Cuántas liquidaciones hacés por mes?"
                  aria-label="¿Cuántas liquidaciones hacés por mes?"
                />
              ) : (
                <>
                  <input
                    className="form-field"
                    name="rubro"
                    type="text"
                    placeholder="Contanos de qué rubro es tu empresa"
                    aria-label="Rubro de tu empresa"
                  />
                  <select
                    className="form-field"
                    name="empleados"
                    aria-label="Cantidad de empleados"
                    defaultValue=""
                  >
                    <option value="" className="text-noche">
                      Cantidad de empleados
                    </option>
                    {empleadosTramos.map((t) => (
                      <option key={t} value={t} className="text-noche">
                        {t}
                      </option>
                    ))}
                  </select>
                </>
              )}
              <textarea
                className="form-field"
                name="mensaje"
                placeholder="Contanos brevemente qué necesitás"
                aria-label="Mensaje"
                rows={3}
              />
              <button
                type="submit"
                className="btn btn-coral mt-1.5 justify-center disabled:opacity-70"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Enviando…" : "Pedí tu primera consulta sin cargo"}
              </button>

              <p className="text-[12.5px] text-crema/60">
                Al enviar, aceptás nuestra{" "}
                <Link href="/privacidad" className="underline hover:text-coral">
                  política de privacidad
                </Link>
                . Usamos tus datos solo para responderte.
              </p>

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
