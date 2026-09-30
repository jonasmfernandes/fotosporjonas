"use client";

import { useEffect, useRef, useState } from "react";

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const concepts = [
    { title: "Presença", text: "Estar atento ao que acontece." },
    { title: "Naturalidade", text: "Menos pose. Mais verdade." },
    { title: "Memória", text: "Imagens feitas para continuar significando algo." },
  ];

  return (
    <section ref={sectionRef} className="py-32 md:py-48 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <blockquote
          className={`font-serif text-2xl md:text-4xl lg:text-5xl leading-snug text-cream mb-20 ${
            visible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          "Não fotografo apenas o que aconteceu.
          <br />
          Fotografo como aquilo foi vivido."
        </blockquote>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {concepts.map((concept, index) => (
            <div
              key={concept.title}
              className={`${visible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${(index + 1) * 200}ms` }}
            >
              <h3 className="font-serif text-lg text-cream mb-2">
                {concept.title}
              </h3>
              <p className="text-sm text-beige font-light">{concept.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
