"use client";

import { useState } from "react";
import { marqueeTerms } from "@/lib/content";

export default function Marquee() {
  const [paused, setPaused] = useState(false);
  const terms = [...marqueeTerms, ...marqueeTerms];

  return (
    <div
      className="overflow-hidden bg-noche py-7"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="animate-marquee flex w-max gap-12 whitespace-nowrap"
        style={{ animationPlayState: paused ? "paused" : "running" }}
      >
        {terms.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="text-sm font-medium tracking-[0.5px] text-crema/70 after:ml-12 after:text-coral after:content-['•']"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
