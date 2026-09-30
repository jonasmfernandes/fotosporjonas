export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  city: string;
  date: string;
  description?: string;
  coverImage: string;
  images: string[];
  videos?: string[];
}

export const categories = [
  { id: "familias", name: "Famílias", slug: "familias" },
  { id: "aniversarios", name: "Aniversários", slug: "aniversarios" },
  { id: "casamentos", name: "Casamentos", slug: "casamentos" },
  { id: "ensaios", name: "Ensaios", slug: "ensaios" },
  { id: "eventos", name: "Eventos", slug: "eventos" },
];

export const projects: Project[] = [
  {
    id: "1",
    slug: "familia-oliveira",
    title: "Família Oliveira",
    category: "Famílias",
    city: "São Paulo, SP",
    date: "Março 2026",
    description: "Um sábado de manhã com a família Oliveira no parque. Momentos espontâneos entre pais e filhos.",
    coverImage: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&q=80",
      "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&q=80",
      "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?w=1200&q=80",
      "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?w=800&q=80",
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1200&q=80",
    ],
  },
  {
    id: "2",
    slug: "aniversario-livia",
    title: "Lívia — 15 Anos",
    category: "Aniversários",
    city: "Rio de Janeiro, RJ",
    date: "Fevereiro 2026",
    description: "Festa de 15 anos da Lívia. Uma noite celebração com amigos e família.",
    coverImage: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=80",
      "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=800&q=80",
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=1200&q=80",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&q=80",
    ],
  },
  {
    id: "3",
    slug: "casamento-ana-pedro",
    title: "Ana & Pedro",
    category: "Casamentos",
    city: "Belo Horizonte, MG",
    date: "Janeiro 2026",
    description: "Casamento intimista no interior de Minas Gerais. Cerimônia ao ar livre e recepção ao pôr do sol.",
    coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
      "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&q=80",
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&q=80",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&q=80",
    ],
  },
  {
    id: "4",
    slug: "ensaio-marina",
    title: "Ensaio Marina",
    category: "Ensaios",
    city: "Florianópolis, SC",
    date: "Dezembro 2025",
    description: "Ensaio pessoal na praia. Luz natural e espontaneidade.",
    coverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
    ],
  },
  {
    id: "5",
    slug: "evento-corporativo",
    title: "Conferência Anual 2025",
    category: "Eventos",
    city: "São Paulo, SP",
    date: "Novembro 2025",
    description: "Cobertura fotográfica de evento corporativo. Palestras, networking e momentos de interação.",
    coverImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1200&q=80",
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80",
    ],
  },
  {
    id: "6",
    slug: "familia-santos",
    title: "Família Santos",
    category: "Famílias",
    city: "Curitiba, PR",
    date: "Outubro 2025",
    description: "Ensaio familiar em casa. A intimidade do cotidiano.",
    coverImage: "https://images.unsplash.com/photo-1602052577122-f73b9710adba?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1602052577122-f73b9710adba?w=1200&q=80",
      "https://images.unsplash.com/photo-1543342384-1f1350e27861?w=800&q=80",
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1200&q=80",
    ],
  },
];

export const videoProjects = [
  {
    id: "v1",
    title: "Ana & Pedro — Filme de Casamento",
    description: "Curta-metragem do casamento de Ana e Pedro.",
    role: "Direção e Fotografia",
    year: "2026",
    thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
    videoUrl: "#",
  },
  {
    id: "v2",
    title: "Família Oliveira — Filme",
    description: "Registro audiovisual de um dia com a família Oliveira.",
    role: "Fotografia e Edição",
    year: "2026",
    thumbnail: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&q=80",
    videoUrl: "#",
  },
  {
    id: "v3",
    title: "Lívia — 15 Anos",
    description: "Reels e filme da festa de 15 anos da Lívia.",
    role: "Produção e Direção",
    year: "2026",
    thumbnail: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=80",
    videoUrl: "#",
  },
];
