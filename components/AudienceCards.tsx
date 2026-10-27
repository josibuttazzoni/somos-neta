import { audienceCards } from "@/lib/content";

export default function AudienceCards() {
  return (
    <section className="pt-4 pb-[76px]">
      <div className="wrap grid gap-6 min-[901px]:grid-cols-2">
        {audienceCards.map((c) => (
          <div
            key={c.tag}
            className="flex flex-col rounded-[20px] border border-linea bg-white p-8 transition hover:border-coral"
          >
            <span className="eyebrow">{c.tag}</span>
            <h3 className="my-2.5 mb-5 text-[28px] leading-[1.1]">{c.title}</h3>
            <ul className="mb-7 flex flex-col gap-3 text-[15px] text-gris-texto">
              {c.items.map((i) => (
                <li
                  key={i}
                  className="flex gap-3 before:mt-[9px] before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-coral before:content-['']"
                >
                  {i}
                </li>
              ))}
            </ul>
            <a
              href={c.href}
              className="mt-auto text-sm font-medium text-noche underline decoration-coral underline-offset-4 transition hover:text-coral"
            >
              {c.cta} →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
