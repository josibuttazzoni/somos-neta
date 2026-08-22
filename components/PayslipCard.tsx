"use client";

import { useRef } from "react";
import type { payslip as Payslip } from "@/lib/content";

type Props = { data: typeof Payslip };

export default function PayslipCard({ data }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || !window.matchMedia("(min-width: 901px)").matches) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${px * 10}deg) rotateX(${-py * 6}deg)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "perspective(800px) rotateY(0) rotateX(0)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative rounded-[20px] bg-noche p-8 text-crema transition-transform duration-200"
    >
      <div className="mb-[18px] flex items-start justify-between border-b border-crema/15 pb-4">
        <div>
          <div className="font-serif text-[17px] text-crema">Recibo de sueldo</div>
          <div className="mt-1 text-[11px] text-crema/50">{data.period}</div>
        </div>
        <div className="inline-flex items-center gap-1.5 rounded-full bg-coral/15 px-3 py-1.5 text-xs font-semibold text-coral">
          <span className="h-1.5 w-1.5 rounded-full bg-coral" /> Liquidado
        </div>
      </div>

      <div className="mb-[18px] grid grid-cols-2 gap-x-4 gap-y-2.5 border-b border-crema/10 pb-4">
        {data.employee.map((f) => (
          <div key={f.label} className="flex flex-col gap-0.5">
            <span className="text-[10px] uppercase tracking-[0.4px] text-crema/45">{f.label}</span>
            <strong className="text-[13px] font-medium text-crema">{f.value}</strong>
          </div>
        ))}
      </div>

      <SectionTitle>Conceptos remunerativos</SectionTitle>
      {data.earnings.map((r) => (
        <Row key={r.label} label={r.label} value={r.value} />
      ))}
      <div className="flex justify-between border-t border-crema/15 py-2.5 text-[13px] font-semibold text-crema">
        <span>Total remunerativo</span>
        <span>{data.earningsTotal}</span>
      </div>

      <SectionTitle>Descuentos</SectionTitle>
      {data.deductions.map((r) => (
        <Row key={r.label} label={r.label} value={r.value} deduction />
      ))}

      <div className="mt-4 flex justify-between border-t border-white/15 pt-4">
        <span>Neto a pagar</span>
        <span className="stat-num text-2xl text-coral">{data.net}</span>
      </div>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 mb-2 text-[11px] font-semibold uppercase tracking-[0.5px] text-coral">
      {children}
    </div>
  );
}

function Row({
  label,
  value,
  deduction = false,
}: {
  label: string;
  value: string;
  deduction?: boolean;
}) {
  return (
    <div className="flex justify-between py-[7px] text-[13px]">
      <span className="text-crema/60">{label}</span>
      <span className={deduction ? "text-coral-soft" : undefined}>{value}</span>
    </div>
  );
}
