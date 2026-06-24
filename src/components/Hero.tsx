import React from "react";
import { motion } from "motion/react";
import Viewfinder from "./Viewfinder";
import { ArrowRight, BookOpen, Calendar } from "lucide-react";

interface HeroProps {
  onJoinClick: () => void;
  onResourcesClick: () => void;
}

export default function Hero({ onJoinClick, onResourcesClick }: HeroProps) {
  return (
    <section 
      id="inicio"
      className="relative min-h-screen flex items-center justify-center noise-bg px-4 sm:px-6 lg:px-8 py-20 overflow-hidden border-b border-[#2a2a2a]"
    >
      {/* Visual Frame - Viewfinder on the entire Hero */}
      <div className="absolute inset-4 sm:inset-6 md:inset-10 border border-[#C8A96E]/20 pointer-events-none rounded-sm">
        <Viewfinder borderColor="border-[#C8A96E]" size="w-6 h-6 sm:w-10 sm:h-10" />
      </div>

      {/* Decorative Cross inside texture */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.015]">
        <div className="w-[2px] h-96 bg-white" />
        <div className="h-[2px] w-96 bg-white absolute" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center z-10 flex flex-col items-center">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 px-4 py-1.5 rounded-full border border-[#C8A96E]/30 bg-[#242424]/80 backdrop-blur-sm"
        >
          <span className="text-xs font-sans uppercase tracking-[0.2em] text-[#C8A96E] font-medium">
            Bienvenidos a Nuestra Casa
          </span>
        </motion.div>

        {/* Logo IVN Grande */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col items-center mb-10"
        >
          <h1 className="text-8xl sm:text-9xl md:text-[11rem] font-bebas font-bold leading-none text-white tracking-tighter select-none">
            IVN
          </h1>
          <div className="w-16 h-[2px] bg-[#C8A96E] my-4" />
          <p className="text-base sm:text-xl md:text-2xl font-sans tracking-[0.35em] text-white uppercase font-light">
            Iglesia Vida Nueva
          </p>
        </motion.div>

        {/* Cita Bíblica con separadores dorados */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="max-w-2xl mx-auto mb-12 px-6"
        >
          <div className="w-6 h-[1px] bg-[#C8A96E]/50 mx-auto mb-4" />
          <p className="text-sm sm:text-base md:text-lg italic text-[#9e9e9e] leading-relaxed font-sans font-light">
            "De modo que si alguno está en Cristo, nueva criatura es; las cosas viejas pasaron; he aquí todas son hechas nuevas."
          </p>
          <p className="text-xs font-sans font-medium tracking-wider text-[#C8A96E] uppercase mt-3">
            — 2 Corintios 5:17
          </p>
          <div className="w-6 h-[1px] bg-[#C8A96E]/50 mx-auto mt-4" />
        </motion.div>

        {/* Botones de acción CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md"
        >
          {/* Botón primario blanco */}
          <button
            onClick={onJoinClick}
            id="cta-join"
            className="w-full sm:w-auto px-8 py-4 bg-white text-black font-sans font-semibold text-sm tracking-widest uppercase rounded-none hover:bg-[#C8A96E] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#C8A96E] focus:ring-offset-2 focus:ring-offset-[#1a1a1a] transition-all duration-300 shadow-lg cursor-pointer flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            Únete a nosotros
          </button>

          {/* Botón secundario borde dorado */}
          <button
            onClick={onResourcesClick}
            id="cta-resources"
            className="w-full sm:w-auto px-8 py-4 border border-[#C8A96E] text-white font-sans font-medium text-sm tracking-widest uppercase rounded-none bg-transparent hover:bg-[#C8A96E]/10 hover:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1a1a1a] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            Recursos
          </button>
        </motion.div>
      </div>

      {/* Decorative arrow down to invite scrolling */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce pointer-events-none opacity-50">
        <div className="w-[1px] h-10 bg-[#C8A96E]" />
      </div>
    </section>
  );
}
