"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrollY = window.scrollY;
        const scale = 1 + scrollY * 0.0003;
        const translateY = scrollY * 0.15;
        imageRef.current.style.transform = `scale(${scale}) translateY(${translateY}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="inicio" className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div ref={imageRef} className="absolute inset-0 parallax-slow">
        <img
          src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1920&q=80"
          alt="Fotografia documental"
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-dark/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-wider text-cream mb-4 animate-fade-in-up">
          JONAS MONTEIRO
        </h1>
        <p className="text-sm md:text-base tracking-[0.3em] uppercase text-beige mb-8 animate-fade-in-up delay-200">
          Fotografia & Vídeo
        </p>
        <p className="text-sm md:text-base text-beige/80 max-w-md font-light animate-fade-in-up delay-400">
          Histórias reais, registradas com presença e sensibilidade.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-600">
        <span className="text-[10px] tracking-[0.3em] uppercase text-beige/60">
          Role
        </span>
        <div className="w-px h-8 bg-beige/40 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-cream animate-[scrollLine_2s_ease-in-out_infinite]" />
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
}
