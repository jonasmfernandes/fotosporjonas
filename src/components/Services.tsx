"use client";

import { useEffect, useRef, useState } from "react";
import SectionTitle from "./SectionTitle";

export default function Services() {
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

  const services = [
    {
      title: "FAMÍLIAS",
      description: "Aniversários, batizados, chás revelação, encontros e momentos familiares.",
    },
    {
      title: "CASAMENTOS",
      description: "Cerimônia, recepção e momentos espontâneos do dia.",
    },
    {
      title: "ENSAIOS",
      description: "Ensaios pessoais, femininos, familiares e retratos.",
    },
    {
      title: "EVENTOS",
      description: "Cobertura fotográfica de eventos sociais e corporativos.",
    },
    {
      title: "VÍDEO",
      description: "Reels, filmes curtos e registros audiovisuais.",
    },
  ];

  return (
    <section id="servicos" ref={sectionRef} className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <SectionTitle title="O que posso registrar" />

      <div className="max-w-3xl mx-auto space-y-0">
        {services.map((service, index) => (
          <div
            key={service.title}
            className={`group py-8 md:py-10 border-b border-brown/30 ${
              visible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <h3 className="font-serif text-xl md:text-2xl text-cream mb-2 group-hover:text-beige transition-colors">
              {service.title}
            </h3>
            <p className="text-sm text-beige font-light">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <a
          href="#contato"
          className="inline-block px-10 py-4 border border-cream/40 text-cream text-xs tracking-[0.2em] uppercase hover:bg-cream hover:text-dark transition-all duration-500"
        >
          Solicitar orçamento
        </a>
      </div>
    </section>
  );
}
