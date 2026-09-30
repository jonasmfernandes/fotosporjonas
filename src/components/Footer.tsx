export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-brown/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-serif text-lg tracking-widest text-cream">
            JONAS MONTEIRO
          </p>
          <p className="text-xs text-beige mt-1">Fotografia & Vídeo</p>
        </div>

        <div className="flex items-center gap-6 text-xs text-beige">
          <a
            href="https://instagram.com/jonasmonteiro"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cream transition-colors"
          >
            Instagram
          </a>
          <span className="text-brown">·</span>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cream transition-colors"
          >
            WhatsApp
          </a>
          <span className="text-brown">·</span>
          <a
            href="mailto:contato@jonasmonteiro.com.br"
            className="hover:text-cream transition-colors"
          >
            E-mail
          </a>
        </div>

        <div className="text-center md:text-right">
          <p className="text-xs text-beige/60">
            Fotografia documental e audiovisual.
          </p>
          <p className="text-xs text-beige/40 mt-1">
            © 2026 Jonas Monteiro.
          </p>
        </div>
      </div>
    </footer>
  );
}
