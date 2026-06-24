import React from "react";
import { motion } from "motion/react";
import { Church, Users, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <section 
      id="nosotros" 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a] relative overflow-hidden noise-bg border-b border-[#2a2a2a]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Identity and Mission Text */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-xs font-sans uppercase tracking-[0.25em] text-[#C8A96E] font-semibold mb-2">
              ¿Quiénes somos?
            </p>
            <h2 className="text-4xl sm:text-5xl font-bebas font-bold tracking-wide uppercase text-white mb-6">
              Nuestra Iglesia
            </h2>
            
            <p className="text-sm sm:text-base text-[#9e9e9e] leading-relaxed mb-8 font-sans font-light">
              Somos una comunidad cristiana vibrante y acogedora en Tehuacán, México, apasionada por compartir el mensaje transformador de Jesucristo. Creemos en una fe activa que impacta vidas, restaura familias y sirve de puente para que las personas experimenten una verdadera renovación espiritual. En Iglesia Vida Nueva, encontrarás una familia de fe lista para caminar a tu lado en cada etapa de la vida.
            </p>

            {/* Misión centered between golden separators */}
            <div className="py-8 my-4 relative max-w-xl">
              {/* Top separator line */}
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#C8A96E] to-transparent mb-6" />
              
              <div className="text-center px-4">
                <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#C8A96E] font-medium block mb-2">
                  Nuestra Misión
                </span>
                <p className="text-lg sm:text-xl md:text-2xl font-sans font-light tracking-wide text-white italic leading-normal">
                  "Conectar a las personas con el amor incondicional de Dios, discipularles en la verdad bíblica y equiparles para servir con poder en su entorno diario."
                </p>
              </div>

              {/* Bottom separator line */}
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#C8A96E] to-transparent mt-6" />
            </div>

            {/* Three Pillar Icons */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center sm:text-left">
                <div className="inline-block p-2 bg-[#242424] border border-[#C8A96E]/20 mb-2">
                  <Church className="w-5 h-5 text-[#C8A96E]" />
                </div>
                <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-white">Comunidad</h4>
                <p className="text-[10px] font-sans text-[#9e9e9e] mt-1">Unidos en familia</p>
              </div>
              
              <div className="text-center sm:text-left">
                <div className="inline-block p-2 bg-[#242424] border border-[#C8A96E]/20 mb-2">
                  <Users className="w-5 h-5 text-[#C8A96E]" />
                </div>
                <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-white">Crecimiento</h4>
                <p className="text-[10px] font-sans text-[#9e9e9e] mt-1">Fe fundamentada</p>
              </div>

              <div className="text-center sm:text-left">
                <div className="inline-block p-2 bg-[#242424] border border-[#C8A96E]/20 mb-2">
                  <ShieldCheck className="w-5 h-5 text-[#C8A96E]" />
                </div>
                <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-white">Servicio</h4>
                <p className="text-[10px] font-sans text-[#9e9e9e] mt-1">Impacto social</p>
              </div>
            </div>
          </div>

          {/* Right: Custom Abstract Architectural Sanctuary Graphic */}
          <div className="lg:col-span-5 relative w-full h-[400px] sm:h-[450px] flex items-center justify-center">
            {/* Visual Frame wrapper */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 bg-[#242424] card-noise border border-white/[0.03] overflow-hidden"
            >
              {/* Corner Viewfinders */}
              <div className="absolute inset-4 border border-[#C8A96E]/10 pointer-events-none">
                {/* Top Left */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#C8A96E]/40" />
                {/* Top Right */}
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#C8A96E]/40" />
                {/* Bottom Left */}
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#C8A96E]/40" />
                {/* Bottom Right */}
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#C8A96E]/40" />
              </div>

              {/* Glowing Sanctuary Vector Graphic */}
              <div className="absolute inset-0 flex flex-col justify-end items-center pb-12">
                {/* Central illuminated altar aura */}
                <div className="absolute w-48 h-48 rounded-full bg-[#C8A96E]/5 blur-[70px] top-1/4 left-1/2 -translate-x-1/2 pointer-events-none" />

                {/* Arched altar frame lines */}
                <div className="absolute top-12 bottom-0 w-44 sm:w-56 border-t border-l border-r border-white/5 rounded-t-full flex justify-center pt-24 pointer-events-none">
                  <div className="w-36 sm:w-44 h-full border-t border-l border-r border-white/5 rounded-t-full flex justify-center pt-16">
                    <div className="w-28 sm:w-32 h-full border-t border-l border-r border-[#C8A96E]/5 rounded-t-full" />
                  </div>
                </div>

                {/* Minimalist Modern Cross */}
                <div className="relative flex flex-col items-center justify-center h-48 select-none">
                  {/* Glowing vertical beam */}
                  <div className="w-[3px] h-36 bg-gradient-to-b from-[#C8A96E] via-white to-transparent shadow-[0_0_15px_rgba(200,169,110,0.4)]" />
                  {/* Glowing horizontal beam */}
                  <div className="absolute top-10 w-24 h-[3px] bg-white shadow-[0_0_15px_rgba(255,255,255,0.4)]" />
                </div>

                {/* Digital Congregation Overlay */}
                <div className="w-full px-8 text-center mt-6">
                  <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-white/40 block">
                    SANCTUARIO IVN
                  </span>
                  <span className="text-[9px] font-sans text-[#C8A96E]/50 uppercase tracking-widest mt-1 block">
                    18° 28' 22" N | 97° 23' 15" W
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
