"use client";

import { useEffect, useRef, useState } from "react";
import SectionTitle from "./SectionTitle";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
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

  return (
    <section ref={sectionRef} className="py-24 md:py-32 px-6 md:px-12 max-w-5xl mx-auto">
      <SectionTitle title="Depoimentos" />

      <div className="space-y-16 md:space-y-24">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`text-center ${visible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <blockquote className="font-serif text-xl md:text-3xl text-cream leading-snug mb-6">
              "{testimonial.quote}"
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              {testimonial.image && (
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                  loading="lazy"
                />
              )}
              <div className="text-left">
                <p className="text-sm text-cream">{testimonial.name}</p>
                <p className="text-xs text-beige">{testimonial.eventType}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-xs text-beige/50 mt-16 italic">
        * Depoimentos de clientes reais serão adicionados em breve.
      </p>
    </section>
  );
}
