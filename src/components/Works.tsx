"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import SectionTitle from "./SectionTitle";
import { projects, categories } from "@/data/projects";

export default function Works() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
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

  const filteredProjects = activeCategory
    ? projects.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase())
    : projects;

  return (
    <section id="trabalhos" ref={sectionRef} className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <SectionTitle
        title="Trabalhos"
        subtitle="Fotografias que encontram beleza no que acontece de verdade."
      />

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
        <button
          onClick={() => setActiveCategory(null)}
          className={`text-xs tracking-[0.2em] uppercase transition-colors ${
            !activeCategory ? "text-cream" : "text-beige hover:text-cream"
          }`}
        >
          Todos
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.name)}
            className={`text-xs tracking-[0.2em] uppercase transition-colors ${
              activeCategory === cat.name ? "text-cream" : "text-beige hover:text-cream"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Projects Grid - Editorial Asymmetric */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
        {filteredProjects.map((project, index) => (
          <Link
            key={project.id}
            href={`/trabalhos/${project.slug}`}
            className={`group relative overflow-hidden block ${
              visible ? "animate-fade-in-up" : "opacity-0"
            } ${
              index % 5 === 0
                ? "md:col-span-7 aspect-[4/3]"
                : index % 5 === 1
                ? "md:col-span-5 aspect-[4/3] md:mt-12"
                : index % 5 === 2
                ? "md:col-span-4 aspect-[3/4]"
                : index % 5 === 3
                ? "md:col-span-4 aspect-[3/4] md:-mt-8"
                : "md:col-span-4 aspect-[3/4]"
            }`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover img-hover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-all duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <p className="text-[10px] tracking-[0.2em] uppercase text-beige mb-1">
                {project.category}
              </p>
              <h3 className="font-serif text-xl text-cream">{project.title}</h3>
              <p className="text-xs text-beige/70 mt-1">
                {project.city} · {project.date}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
