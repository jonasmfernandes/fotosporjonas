"use client";

import { useEffect, useRef, useState } from "react";

export default function Contact() {
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
    <section id="contato" ref={sectionRef} className="py-32 md:py-48 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2
          className={`font-serif text-4xl md:text-6xl tracking-wide text-cream mb-6 ${
            visible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          Vamos conversar?
        </h2>
        <p
          className={`text-beige font-light mb-12 ${
            visible ? "animate-fade-in-up delay-200" : "opacity-0"
          }`}
        >
          Se você está planejando algo importante, me conte um pouco sobre a sua história.
        </p>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 ${
            visible ? "animate-fade-in-up delay-300" : "opacity-0"
          }`}
        >
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-4 bg-cream text-dark text-xs tracking-[0.2em] uppercase hover:bg-beige transition-colors"
          >
            Falar pelo WhatsApp
          </a>
          <a
            href="mailto:contato@jonasmonteiro.com.br"
            className="w-full sm:w-auto px-10 py-4 border border-cream/40 text-cream text-xs tracking-[0.2em] uppercase hover:bg-cream/10 transition-colors"
          >
            Enviar mensagem
          </a>
        </div>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-beige ${
            visible ? "animate-fade-in-up delay-400" : "opacity-0"
          }`}
        >
          <a
            href="https://instagram.com/jonasmonteiro"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cream transition-colors"
          >
            Instagram
          </a>
          <span className="hidden sm:block text-brown">·</span>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cream transition-colors"
          >
            WhatsApp
          </a>
          <span className="hidden sm:block text-brown">·</span>
          <a
            href="mailto:contato@jonasmonteiro.com.br"
            className="hover:text-cream transition-colors"
          >
            E-mail
          </a>
        </div>

        <p
          className={`text-xs text-beige/50 mt-8 ${
            visible ? "animate-fade-in-up delay-500" : "opacity-0"
          }`}
        >
          São Paulo, SP — Brasil
        </p>
      </div>
    </section>
  );
}
