"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" ref={sectionRef} className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Image */}
        <div
          className={`relative ${
            visible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
              alt="Jonas Monteiro"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Text */}
        <div
          className={`${visible ? "animate-fade-in-up delay-200" : "opacity-0"}`}
        >
          <h2 className="font-serif text-3xl md:text-5xl tracking-wide text-cream mb-8">
            Por trás da câmera
          </h2>
          <div className="space-y-5 text-beige font-light leading-relaxed text-sm md:text-base">
            <p>
              Sou Jonas, fotógrafo e videomaker.
            </p>
            <p>
              Meu trabalho nasceu do interesse por pessoas, histórias e momentos que normalmente passam rápido demais.
            </p>
            <p>
              Gosto de fotografar aquilo que acontece de forma espontânea: um olhar, uma risada, um abraço, a expectativa antes de alguma coisa acontecer.
            </p>
            <p>
              Mais do que criar imagens bonitas, procuro construir registros que façam sentido quando revisitados anos depois.
            </p>
            <p>
              Hoje trabalho principalmente com famílias, aniversários, eventos e casamentos, além de desenvolver projetos audiovisuais.
            </p>
          </div>
          {/* Signature */}
          <div className="mt-10">
            <p className="font-serif text-2xl text-cream/80 italic">
              Jonas Monteiro
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
