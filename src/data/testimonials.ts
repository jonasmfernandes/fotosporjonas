export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  eventType: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "Foi como reviver aquele dia inteiro novamente.",
    name: "Mariana S.",
    eventType: "Casamento",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    id: "2",
    quote: "As fotos capturaram exatamente o que sentimos. Cada olhar, cada abraço.",
    name: "Carlos e Fernanda",
    eventType: "Ensaio Família",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    id: "3",
    quote: "Profissionalismo e sensibilidade raros. As fotos da festa da minha filha ficaram perfeitas.",
    name: "Roberta M.",
    eventType: "Aniversário",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
  {
    id: "4",
    quote: "O filme do nosso casamento nos faz chorar toda vez que assistimos.",
    name: "Ana & Pedro",
    eventType: "Casamento",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  },
];
