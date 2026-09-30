"use client";

import { useEffect, useRef, useState } from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionTitle({ title, subtitle, className = "" }: SectionTitleProps) {
  const ref = useRef<HTMLDivElement>(null);
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

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`text-center mb-16 md:mb-24 ${className} ${
        visible ? "animate-fade-in-up" : "opacity-0"
      }`}
    >
      <h2 className="font-serif text-3xl md:text-5xl tracking-wide text-cream mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-beige text-sm md:text-base font-light max-w-lg mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
