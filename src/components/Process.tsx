"use client";

import { useEffect, useRef, useState } from "react";
import SectionTitle from "./SectionTitle";

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: "01",
      title: "Conversa",
      text: "Entendo o evento, o que você espera e o que é importante para você.",
    },
    {
      number: "02",
      title: "Planejamento",
      text: "Definimos cobertura, horários, entrega e todos os detalhes.",
    },
    {
      number: "03",
      title: "Registro",
      text: "No dia, meu trabalho é estar presente e atento ao que acontece.",
    },
    {
      number: "04",
      title: "Entrega",
      text: "Você recebe suas fotografias em uma galeria online cuidadosamente preparada.",
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <SectionTitle title="Como funciona" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className={`${visible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <span className="font-serif text-4xl text-brown block mb-4">
              {step.number}
            </span>
            <h3 className="font-serif text-lg text-cream mb-2">{step.title}</h3>
            <p className="text-sm text-beige font-light leading-relaxed">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
