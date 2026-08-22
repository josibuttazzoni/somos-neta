import { NextResponse } from "next/server";
import { Resend } from "resend";

type Payload = {
  nombre?: string;
  empresa?: string;
  email?: string;
  empleados?: string;
  mensaje?: string;
};

const MAX = 2000;

const clean = (v: unknown) => (typeof v === "string" ? v.trim().slice(0, MAX) : "");

const escape = (v: string) =>
  v
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Body inválido." }, { status: 400 });
  }

  const nombre = clean(body.nombre);
  const empresa = clean(body.empresa);
  const email = clean(body.email);
  const empleados = clean(body.empleados);
  const mensaje = clean(body.mensaje);

  if (!nombre || !empresa || !email) {
    return NextResponse.json(
      { error: "Faltan datos: nombre, empresa y email son obligatorios." },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "El email no parece válido." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM;

  if (!apiKey || !to || !from) {
    // Si falta configuración preferimos fallar visiblemente antes que perder la consulta.
    console.error("[contacto] faltan RESEND_API_KEY / CONTACT_TO / CONTACT_FROM");
    return NextResponse.json({ error: "El envío no está configurado." }, { status: 500 });
  }

  const rows: [string, string][] = [
    ["Nombre", nombre],
    ["Empresa", empresa],
    ["Email", email],
    ["Empleados", empleados || "—"],
    ["Mensaje", mensaje || "—"],
  ];

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Nueva consulta de ${nombre} — ${empresa}`,
      text: rows.map(([k, v]) => `${k}: ${v}`).join("\n"),
      html: `<h2>Nueva consulta desde la web</h2>${rows
        .map(([k, v]) => `<p><strong>${k}:</strong> ${escape(v).replace(/\n/g, "<br>")}</p>`)
        .join("")}`,
    });

    if (error) {
      console.error("[contacto] resend:", error);
      return NextResponse.json({ error: "No pudimos enviar la consulta." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contacto]", err);
    return NextResponse.json({ error: "No pudimos enviar la consulta." }, { status: 502 });
  }
}
