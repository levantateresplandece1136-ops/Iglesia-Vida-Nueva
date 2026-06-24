import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen, FileText, Compass, ChevronRight, X, Sparkles } from "lucide-react";
import { ResourceItem } from "../types";

export default function Resources() {
  const [selectedResource, setSelectedResource] = useState<ResourceItem | null>(null);

  const resources: ResourceItem[] = [
    {
      id: "devocional",
      title: "Caminando en Vida Nueva",
      category: "Devocional Semanal",
      description: "Un devocional práctico de 7 días enfocado en la restauración personal y los hábitos espirituales básicos.",
      readTime: "Lectura: 6 min",
      verse: "2 Corintios 5:17 — Las cosas viejas pasaron; he aquí todas son hechas nuevas.",
      content: `Día 1: Dejar atrás el pasado
El arrepentimiento y la fe en Cristo nos otorgan una página en blanco. Muchas veces arrastramos la culpa de errores antiguos que Dios ya perdonó y olvidó. Hoy, haz un compromiso de entregarle tus cargas. Recuerda: eres una nueva creación.

Día 2: La disciplina de la Palabra
Nutrirnos espiritualmente requiere leer las Escrituras a diario. Comienza con el Evangelio de Juan. Medita en un solo versículo durante el día y aplícalo en tus conversaciones.

Día 3: Oración honesta
Orar no es recitar palabras repetitivas; es abrir tu corazón como a un amigo íntimo. Aparta 10 minutos de silencio hoy solo para agradecer y confiar en Su soberanía.

Día 4: Caminar en amor
El perdón es la marca distintiva del creyente. Si hay alguien con quien sostengas un rencor, pídele a Dios la gracia para perdonar y sanar esa relación hoy.

Día 5: Servir al prójimo
No fuimos salvos para ser espectadores, sino servidores. Busca una oportunidad práctica para ayudar a alguien en necesidad hoy, sin esperar nada a cambio.

Día 6: Comunidad de fe
La fe no se vive en aislamiento. Conéctate con otros creyentes. Un carbón fuera del fuego se apaga rápidamente. Mantén tu fe encendida en comunión.

Día 7: Esperanza eterna
Nuestra mirada no está puesta en las dificultades pasajeras de esta tierra, sino en las promesas eternas. ¡Regocíjate hoy porque tu nombre está escrito en el libro de la vida!`
    },
    {
      id: "discipulado",
      title: "Fundamentos de la Fe",
      category: "Guía de Estudio",
      description: "Lecciones doctrinales elementales sobre la gracia salvadora, la inspiración bíblica y el Espíritu Santo.",
      readTime: "Lectura: 10 min",
      verse: "Efesios 2:8 — Porque por gracia sois salvos por medio de la fe...",
      content: `Capítulo 1: La Gracia Redentora
La salvación es un regalo inmerecido de Dios. No podemos ganar el favor divino mediante buenas obras; Cristo lo pagó todo en la cruz del calvario. La fe es el canal para recibir esta salvación.

Capítulo 2: La Autoridad de la Palabra
Creemos que la Biblia es la Palabra inspirada de Dios, nuestra norma de fe y conducta. Estudiarla sistemáticamente revela el carácter de Dios y Su voluntad para nuestras decisiones cotidianas.

Capítulo 3: El Poder del Espíritu Santo
El Espíritu Santo mora en cada creyente desde el momento de su conversión. Él es nuestro Consolador, Guía y la fuente de poder espiritual para vencer el pecado y testificar eficazmente.`
    },
    {
      id: "grupos-pequenos",
      title: "Guía para Grupos Conexión",
      category: "Bosquejo de Reunión",
      description: "Guía de preguntas para el estudio del Evangelio de Marcos, ideal para coordinadores de células y estudios caseros.",
      readTime: "Lectura: 4 min",
      verse: "Marcos 10:45 — Porque el Hijo del Hombre no vino para ser servido...",
      content: `Tema de Discusión: El Carácter de un Servidor

1. Bienvenida y Rompehielos (10 mins)
Pregunta interactiva: ¿Cuál es la tarea de servicio más difícil o graciosa que has tenido que hacer en tu vida cotidiana?

2. Lectura Bíblica: Marcos 10:35-45
Lean el pasaje en voz alta. Presten atención a la petición de Jacobo y Juan.

3. Preguntas de Reflexión (20 mins)
- ¿Por qué crees que los discípulos buscaban posiciones de grandeza a pesar de caminar con Jesús?
- Jesús contrasta la grandeza del mundo con la grandeza de Su reino. ¿Cuáles son las diferencias principales?
- ¿Qué significa en la práctica 'hacerse siervo de todos' en nuestra familia o lugar de trabajo?

4. Aplicación Práctica (10 mins)
Identifiquen una acción concreta de servicio silencioso que puedan realizar esta semana por un miembro del grupo o un vecino.

5. Oración y Cierre (15 mins)
Oren unos por otros pidiendo un corazón humilde y de servicio según el modelo de Cristo.`
    }
  ];

  return (
    <section 
      id="recursos" 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#2c2c2c] relative overflow-hidden"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.02'/%3E%3C/svg%3E")`
      }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Info and Highlight */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <span className="text-xs font-sans uppercase tracking-[0.25em] text-[#C8A96E] font-semibold mb-2 block">
              Crece con nosotros
            </span>
            
            {/* Display Grande */}
            <h2 className="text-6xl sm:text-7xl font-bebas font-bold tracking-wider text-white mb-4">
              RECURSOS
            </h2>
            
            <p className="text-sm sm:text-base font-sans tracking-widest text-[#C8A96E] uppercase font-light mb-6">
              Herramientas para tu crecimiento espiritual
            </p>
            
            <p className="text-xs sm:text-sm text-[#cecece] leading-relaxed mb-8 font-sans font-light">
              Deseamos que tu fe madure sobre bases bíblicas firmes. Por ello, ponemos a tu alcance bosquejos para grupos de conexión, devocionales temáticos y guías de estudio teológico diseñados para toda la familia. Descárgalos de forma gratuita y estúdialos a tu propio ritmo.
            </p>

            {/* CTA button with gold arrow */}
            <button
              onClick={() => setSelectedResource(resources[0])}
              id="btn-explore-resources"
              className="px-8 py-4 bg-transparent border-2 border-[#C8A96E] text-[#C8A96E] font-sans font-bold text-sm tracking-widest uppercase rounded-none hover:bg-[#C8A96E] hover:text-[#2c2c2c] transition-all duration-300 inline-flex items-center gap-3 cursor-pointer"
            >
              Explorar Recursos <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Block: Selection Cards */}
          <div className="lg:col-span-7 space-y-4">
            {resources.map((res, index) => (
              <motion.div
                key={res.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="p-6 bg-[#242424]/80 border border-white/[0.02] hover:border-[#C8A96E]/30 transition-all duration-300 flex items-center justify-between group cursor-pointer"
                onClick={() => setSelectedResource(res)}
                id={`resource-card-${res.id}`}
              >
                <div className="flex items-center gap-4">
                  {/* Category Icons */}
                  <div className="p-3 bg-[#2c2c2c] border border-white/5 text-[#C8A96E] group-hover:border-[#C8A96E]/50 transition-colors duration-300">
                    {res.id === "devocional" && <Sparkles className="w-5 h-5" />}
                    {res.id === "discipulado" && <BookOpen className="w-5 h-5" />}
                    {res.id === "grupos-pequenos" && <FileText className="w-5 h-5" />}
                  </div>
                  <div>
                    <span className="text-[10px] font-sans uppercase tracking-wider text-[#C8A96E] font-medium">
                      {res.category}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bebas font-bold uppercase tracking-wider text-white mt-0.5 group-hover:text-[#C8A96E] transition-colors duration-300">
                      {res.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#9e9e9e] line-clamp-1 mt-1 font-light">
                      {res.description}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col items-end gap-2 shrink-0">
                  <span className="text-[10px] font-mono text-[#9e9e9e] uppercase tracking-wide">
                    {res.readTime}
                  </span>
                  <div className="w-6 h-6 rounded-full border border-white/10 group-hover:border-[#C8A96E] flex items-center justify-center text-white/40 group-hover:text-[#C8A96E] transition-colors duration-300">
                    <ChevronRight className="w-3 h-3" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Slide-over Reader Modal */}
      <AnimatePresence>
        {selectedResource && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" id="resource-modal">
            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl bg-[#242424] border border-[#C8A96E]/40 p-6 sm:p-8 overflow-y-auto max-h-[85vh] shadow-2xl rounded-none card-noise"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedResource(null)}
                className="absolute top-4 right-4 p-2 text-[#9e9e9e] hover:text-white hover:bg-white/5 transition-colors duration-300 focus:outline-none cursor-pointer"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Category */}
              <span className="text-xs font-sans uppercase tracking-[0.2em] text-[#C8A96E] font-semibold block mb-1">
                {selectedResource.category}
              </span>

              {/* Title */}
              <h3 className="text-3xl sm:text-4xl font-bebas font-bold uppercase tracking-wider text-white mb-4">
                {selectedResource.title}
              </h3>

              {/* Quote / Key Verse */}
              {selectedResource.verse && (
                <div className="pl-4 border-l-2 border-[#C8A96E] my-4 py-1">
                  <p className="text-xs sm:text-sm italic text-[#9e9e9e]">
                    {selectedResource.verse}
                  </p>
                </div>
              )}

              {/* Separation line */}
              <div className="w-full h-[1px] bg-white/10 my-4" />

              {/* Body Content */}
              <div className="text-sm sm:text-base text-white/95 leading-relaxed font-sans font-light whitespace-pre-line space-y-4">
                {selectedResource.content}
              </div>

              {/* Separation line */}
              <div className="w-full h-[1px] bg-white/10 my-6" />

              {/* Footer inside modal */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-[10px] font-mono text-[#9e9e9e] uppercase tracking-widest">
                  Iglesia Vida Nueva · Recurso Gratuito
                </span>
                
                <button
                  onClick={() => setSelectedResource(null)}
                  className="px-6 py-2.5 bg-white text-black font-sans font-semibold text-xs tracking-widest uppercase hover:bg-[#C8A96E] hover:text-white transition-colors duration-300"
                >
                  Entendido
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
