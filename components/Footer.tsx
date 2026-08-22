import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-linea py-10">
      <div className="wrap flex items-center justify-between gap-4 text-[13px] text-gris-texto">
        <Image src="/img/logo.svg" alt="Somos NETA." width={474} height={126} className="h-8 w-auto" />

        <div className="flex items-center gap-3">
          <a
            href="https://instagram.com/somos_neta"
            target="_blank"
            rel="noopener"
            aria-label="Instagram de Somos NETA"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-linea text-gris-texto transition-colors hover:border-coral hover:text-coral"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-none stroke-current stroke-[1.7]">
              <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
              <circle cx="12" cy="12" r="4.2" />
              <circle cx="17" cy="7" r="1.2" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <span>@somos_neta · © 2026</span>
        </div>
      </div>
    </footer>
  );
}
