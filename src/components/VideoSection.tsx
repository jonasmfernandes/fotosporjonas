"use client";

import { useEffect, useRef, useState } from "react";
import SectionTitle from "./SectionTitle";
import { videoProjects } from "@/data/projects";

export default function VideoSection() {
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
    <section ref={sectionRef} className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <SectionTitle
        title="Além da fotografia"
        subtitle="Movimento também conta histórias."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {videoProjects.map((video, index) => (
          <div
            key={video.id}
            className={`group relative overflow-hidden ${
              visible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover img-hover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-dark/30 group-hover:bg-dark/50 transition-all duration-500" />
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border border-cream/60 flex items-center justify-center group-hover:border-cream group-hover:scale-110 transition-all duration-500">
                  <svg
                    className="w-5 h-5 text-cream ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-[10px] tracking-[0.2em] uppercase text-beige mb-1">
                {video.role} · {video.year}
              </p>
              <h3 className="font-serif text-lg text-cream">{video.title}</h3>
              <p className="text-xs text-beige/70 mt-1">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
