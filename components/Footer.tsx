import Image from "next/image";
import Link from "next/link";
import { CONTACT_EMAIL, WA_BASE, WA_DISPLAY } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-linea py-10">
      <div className="wrap flex flex-col gap-8 text-[13px] text-gris-texto min-[801px]:flex-row min-[801px]:justify-between">
        <div className="flex flex-col gap-4">
          <Image src="/img/logo.svg" alt="Somos NETA." width={474} height={126} className="h-8 w-auto" />
          <p>Liquidamos sueldos para PyMEs y estudios contables.</p>
        </div>

        <div className="flex flex-col gap-2 min-[801px]:items-end">
          <p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-coral">
              {CONTACT_EMAIL}
            </a>
            {" · "}
            <a href={WA_BASE} data-ubicacion="pie" target="_blank" rel="noopener" className="hover:text-coral">
              WhatsApp {WA_DISPLAY}
            </a>
          </p>
          <p className="flex items-center gap-3">
            <Link href="/privacidad" className="hover:text-coral">
              Política de privacidad
            </Link>
            <span aria-hidden="true">·</span>
            <a
              href="https://instagram.com/somos_neta"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 hover:text-coral"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-none stroke-current stroke-[1.7]">
                <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
                <circle cx="12" cy="12" r="4.2" />
                <circle cx="17" cy="7" r="1.2" fill="currentColor" stroke="none" />
              </svg>
              Instagram
            </a>
          </p>
          <p>Somos NETA. © 2026</p>
        </div>
      </div>
    </footer>
  );
}
