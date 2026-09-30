import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jonas Monteiro — Fotografia & Vídeo",
  description:
    "Fotografia documental, eventos, famílias, aniversários e casamentos. Histórias reais, registradas com presença e sensibilidade.",
  keywords: [
    "fotógrafo",
    "fotografia documental",
    "casamento",
    "família",
    "aniversário",
    "eventos",
    "videomaker",
    "São Paulo",
  ],
  openGraph: {
    title: "Jonas Monteiro — Fotografia & Vídeo",
    description:
      "Fotografia documental, eventos, famílias, aniversários e casamentos. Histórias reais, registradas com presença e sensibilidade.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${montserrat.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
