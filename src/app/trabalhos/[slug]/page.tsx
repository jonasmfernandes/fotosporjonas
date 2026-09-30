import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Trabalho não encontrado" };
  }

  return {
    title: `${project.title} — Jonas Monteiro`,
    description: project.description || `${project.category} em ${project.city}`,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <Link
          href="/#trabalhos"
          className="text-xs tracking-[0.2em] uppercase text-beige hover:text-cream transition-colors"
        >
          ← Voltar aos trabalhos
        </Link>

        <div className="mt-8 mb-12">
          <p className="text-xs tracking-[0.2em] uppercase text-beige mb-2">
            {project.category}
          </p>
          <h1 className="font-serif text-3xl md:text-5xl text-cream mb-2">
            {project.title}
          </h1>
          <p className="text-sm text-beige">
            {project.city} · {project.date}
          </p>
          {project.description && (
            <p className="text-beige font-light mt-4 max-w-xl">
              {project.description}
            </p>
          )}
        </div>
      </div>

      {/* Gallery - Editorial Layout */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <div className="space-y-4 md:space-y-6">
          {project.images.map((image, index) => {
            // Create varied layout: some full width, some half, some with spacing
            const isLarge = index % 3 === 0;
            const isMedium = index % 3 === 1;
            const isSmall = index % 3 === 2;

            return (
              <div
                key={index}
                className={`${
                  isLarge
                    ? "aspect-[16/9]"
                    : isMedium
                    ? "aspect-[4/3] md:aspect-[16/10]"
                    : "aspect-[3/4] md:aspect-[4/3] md:max-w-2xl md:mx-auto"
                } overflow-hidden`}
              >
                <Image
                  src={image}
                  alt={`${project.title} — Foto ${index + 1}`}
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover"
                  priority={index < 2}
                  loading={index < 2 ? "eager" : "lazy"}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Back to top */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24 text-center">
        <Link
          href="/#trabalhos"
          className="inline-block px-10 py-4 border border-cream/40 text-cream text-xs tracking-[0.2em] uppercase hover:bg-cream hover:text-dark transition-all duration-500"
        >
          Ver mais trabalhos
        </Link>
      </div>
    </main>
  );
}
