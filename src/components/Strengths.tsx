import React from "react";
import { motion } from "motion/react";
import { Home, Compass, Users2, Sparkles, HeartHandshake, Sun } from "lucide-react";
import { MinistryItem } from "../types";

export default function Strengths() {
  const ministries: MinistryItem[] = [
    {
      id: "familias",
      icon: "home",
      title: "Familias Fuertes",
      description: "Edificamos hogares fundamentados en principios bíblicos y amor incondicional para un porvenir sólido."
    },
    {
      id: "jovenes",
      icon: "compass",
      title: "Jóvenes con Propósito",
      description: "Guiamos a las nuevas generaciones a descubrir su llamado singular en Cristo mediante comunidad y discipulado activo."
    },
    {
      id: "grupos",
      icon: "users",
      title: "Grupos Conexión",
      description: "Grupos pequeños en hogares de Tehuacán para compartir la vida, estudiar las Escrituras y orar en hermandad."
    },
    {
      id: "oracion",
      icon: "sparkles",
      title: "Red de Oración",
      description: "Intercedemos incansablemente por peticiones familiares, milagros de salud y guía divina las 24 horas del día."
    },
    {
      id: "servicio",
      icon: "service",
      title: "Servicio Comunitario",
      description: "Extendemos la mano al necesitado mediante canastas de alimento, brigadas médicas y apoyo en zonas marginadas."
    },
    {
      id: "kids",
      icon: "sun",
      title: "Vida Kids",
      description: "Instruimos el tierno corazón de los niños en las verdades eternas de forma didáctica, alegre y sumamente segura."
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "home":
        return <Home className="w-8 h-8 text-white" />;
      case "compass":
        return <Compass className="w-8 h-8 text-white" />;
      case "users":
        return <Users2 className="w-8 h-8 text-white" />;
      case "sparkles":
        return <Sparkles className="w-8 h-8 text-white" />;
      case "service":
        return <HeartHandshake className="w-8 h-8 text-white" />;
      case "sun":
        return <Sun className="w-8 h-8 text-white" />;
      default:
        return <Home className="w-8 h-8 text-white" />;
    }
  };

  return (
    <section 
      id="ministerios" 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a] relative noise-bg border-b border-[#2a2a2a]"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-xs font-sans uppercase tracking-[0.25em] text-[#C8A96E] font-semibold mb-2">
            Conecta con nosotros
          </p>
          <h2 className="text-4xl sm:text-5xl font-bebas font-bold tracking-wide uppercase text-white">
            Fortalezas y Redes
          </h2>
          <div className="w-12 h-[1px] bg-[#C8A96E] mx-auto mt-4" />
        </div>

        {/* 3x2 Grid on desktop, 1 col on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {ministries.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center sm:items-start text-center sm:text-left group"
              id={`ministry-${item.id}`}
            >
              {/* Icon Frame */}
              <div className="mb-4 p-3 bg-[#242424] border border-white/[0.04] group-hover:border-[#C8A96E]/50 group-hover:bg-[#242424] transition-all duration-300">
                {getIcon(item.icon)}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bebas font-bold tracking-wider uppercase text-white mb-2 group-hover:text-[#C8A96E] transition-colors duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm font-sans text-[#9e9e9e] leading-relaxed font-light">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call-to-action bar */}
        <div className="mt-16 p-8 bg-[#242424] card-noise border border-white/[0.03] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bebas font-bold uppercase tracking-wider text-white">
              ¿Quieres servir o unirte a un grupo?
            </h4>
            <p className="text-xs sm:text-sm font-sans text-[#9e9e9e] mt-1 font-light">
              Nuestras puertas y ministerios están siempre abiertos para ti. ¡Comienza hoy!
            </p>
          </div>
          
          <a
            href="#contacto"
            className="px-6 py-3 border border-[#C8A96E] text-white font-sans text-xs tracking-widest font-semibold uppercase hover:bg-[#C8A96E] hover:text-white transition-colors duration-300 text-center whitespace-nowrap"
          >
            Involúcrate aquí
          </a>
        </div>

      </div>
    </section>
  );
}
