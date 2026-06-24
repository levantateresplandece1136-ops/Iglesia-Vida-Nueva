import React from "react";
import { motion } from "motion/react";
import { CalendarDays, Flame, Heart } from "lucide-react";
import Viewfinder from "./Viewfinder";
import { ScheduleItem } from "../types";

export default function Schedules() {
  const schedules: ScheduleItem[] = [
    {
      id: "domingos",
      icon: "calendar",
      title: "Servicios Dominicales",
      time: "Domingos — 10:00 AM & 12:00 PM",
      description: "Nuestra celebración semanal de fe, adoración y comunidad. Un tiempo para renovar la esperanza en Cristo Jesús."
    },
    {
      id: "miercoles",
      icon: "prayer",
      title: "Reunión de Oración",
      time: "Miércoles — 7:30 PM",
      description: "Un espacio íntimo de intercesión, gratitud y búsqueda espiritual para clamar juntos por nuestra comunidad y familias."
    },
    {
      id: "sabados",
      icon: "youth",
      title: "Reunión de Jóvenes",
      time: "Sábados — 6:30 PM",
      description: "Adoración vibrante, amistad genuina y conferencias dinámicas diseñadas para la próxima generación (18-35 años)."
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "calendar":
        return <CalendarDays className="w-10 h-10 text-white" />;
      case "prayer":
        return <Heart className="w-10 h-10 text-white" />;
      case "youth":
        return <Flame className="w-10 h-10 text-white" />;
      default:
        return <CalendarDays className="w-10 h-10 text-white" />;
    }
  };

  return (
    <section 
      id="horarios" 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a] relative noise-bg border-b border-[#2a2a2a]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-xs font-sans uppercase tracking-[0.25em] text-[#C8A96E] font-semibold mb-2">
            Encuéntranos
          </p>
          <h2 className="text-4xl sm:text-5xl font-bebas font-bold tracking-wide uppercase text-white">
            Nuestros Horarios
          </h2>
          <div className="w-12 h-[1px] bg-[#C8A96E] mx-auto mt-4" />
        </div>

        {/* 3 cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {schedules.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative p-8 bg-[#242424] card-noise border border-white/[0.03] flex flex-col justify-between group hover:border-[#C8A96E]/40 transition-all duration-300 min-h-[320px]"
              id={`schedule-card-${item.id}`}
            >
              {/* Signature Viewfinder borders */}
              <Viewfinder borderColor="border-[#C8A96E]/40 group-hover:border-[#C8A96E]" size="w-3.5 h-3.5" />

              <div>
                {/* Icon Container */}
                <div className="mb-6 inline-block p-3 bg-[#1a1a1a] border border-[#C8A96E]/20 rounded-none group-hover:border-[#C8A96E] transition-colors duration-300">
                  {getIcon(item.icon)}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bebas font-bold uppercase tracking-wider text-white mb-2 group-hover:text-[#C8A96E] transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Subtitle / Time */}
                <p className="text-sm font-sans font-semibold tracking-wide text-[#C8A96E] mb-4">
                  {item.time}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm font-sans text-[#9e9e9e] leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              {/* Minimalist Bottom Indicator */}
              <div className="mt-6 flex justify-end">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#9e9e9e]/40 group-hover:text-[#C8A96E] transition-colors duration-300">
                  IVN · COMUNIDAD
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote overlay */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="text-xs italic text-[#9e9e9e]/60 font-sans font-light">
            "Donde están dos o tres congregados en mi nombre, allí estoy yo en medio de ellos."
          </p>
          <p className="text-[10px] font-sans font-medium tracking-wider text-[#C8A96E]/50 uppercase mt-1">
            — Mateo 18:20
          </p>
        </div>
      </div>
    </section>
  );
}
