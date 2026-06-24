import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer 
      id="footer" 
      className="py-16 px-4 sm:px-6 lg:px-8 bg-[#111111] border-t border-[#222222] text-center relative noise-bg"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Scroll to Top Trigger */}
        <button
          onClick={scrollToTop}
          className="mb-8 p-3 bg-[#242424] hover:bg-[#C8A96E] hover:text-white text-white border border-white/5 hover:border-[#C8A96E] rounded-none transition-all duration-300 cursor-pointer group"
          aria-label="Volver arriba"
        >
          <ArrowUp className="w-4 h-4 group-hover:animate-bounce" />
        </button>

        {/* Small IVN Logo */}
        <div className="mb-6 flex flex-col items-center select-none">
          <span className="text-4xl font-bebas font-bold text-white tracking-tight">IVN</span>
          <span className="text-[10px] font-sans tracking-[0.25em] text-[#C8A96E] uppercase font-light mt-1">
            Iglesia Vida Nueva
          </span>
        </div>

        {/* Versículo de Cierre */}
        <div className="max-w-lg mb-8 px-4">
          <p className="text-xs italic text-[#9e9e9e] leading-relaxed font-sans font-light">
            "Y la paz de Dios, que sobrepasa todo entendimiento, guardará vuestros corazones y vuestros pensamientos en Cristo Jesús."
          </p>
          <p className="text-[10px] font-sans font-medium tracking-wider text-[#C8A96E]/60 uppercase mt-2">
            — Filipenses 4:7
          </p>
        </div>

        {/* Quick Links Horizontal Menu */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-8 text-xs font-sans font-medium tracking-widest uppercase">
          <a href="#inicio" className="text-[#9e9e9e] hover:text-[#C8A96E] transition-colors duration-300">
            Inicio
          </a>
          <a href="#horarios" className="text-[#9e9e9e] hover:text-[#C8A96E] transition-colors duration-300">
            Horarios
          </a>
          <a href="#nosotros" className="text-[#9e9e9e] hover:text-[#C8A96E] transition-colors duration-300">
            Nosotros
          </a>
          <a href="#ministerios" className="text-[#9e9e9e] hover:text-[#C8A96E] transition-colors duration-300">
            Ministerios
          </a>
          <a href="#recursos" className="text-[#9e9e9e] hover:text-[#C8A96E] transition-colors duration-300">
            Recursos
          </a>
          <a href="#contacto" className="text-[#9e9e9e] hover:text-[#C8A96E] transition-colors duration-300">
            Contacto
          </a>
        </nav>

        {/* Separator */}
        <div className="w-12 h-[1px] bg-white/5 mb-6" />

        {/* Copyright */}
        <p className="text-[10px] font-mono tracking-wider text-[#9e9e9e]/50 uppercase">
          Copyright © 2025 Iglesia Vida Nueva. Todos los derechos reservados.
        </p>

      </div>
    </footer>
  );
}
