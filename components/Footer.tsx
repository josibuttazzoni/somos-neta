import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-linea py-10">
      <div className="wrap flex items-center justify-between text-[13px] text-gris-texto">
        <Image src="/img/logo.svg" alt="Somos NETA." width={474} height={126} className="h-8 w-auto" />
        <span>@somos_neta · © 2026</span>
      </div>
    </footer>
  );
}
