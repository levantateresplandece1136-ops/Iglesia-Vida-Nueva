import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Phone, Mail, Facebook, Send, CheckCircle, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    nombre: "",
    correo: "",
    mensaje: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.nombre || !formState.correo || !formState.mensaje) return;

    setIsSubmitting(true);
    // Simulate brief API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ nombre: "", correo: "", mensaje: "" });
      // Reset success banner after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <section 
      id="contacto" 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a] relative noise-bg border-b border-[#2a2a2a]"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-xs font-sans uppercase tracking-[0.25em] text-[#C8A96E] font-semibold mb-2">
            Comunícate con nosotros
          </p>
          <h2 className="text-4xl sm:text-5xl font-bebas font-bold tracking-wide uppercase text-white">
            Ubicación y Contacto
          </h2>
          <div className="w-12 h-[1px] bg-[#C8A96E] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Panel: Info and Form */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bebas font-bold uppercase tracking-wider text-white mb-6">
                ¿Tienes alguna pregunta?
              </h3>
              <p className="text-xs sm:text-sm text-[#9e9e9e] leading-relaxed mb-8 font-sans font-light">
                Si deseas consejería pastoral, peticiones de oración o simplemente conocer más de nuestra iglesia, escríbenos. Estaremos gustosos de ponernos en contacto contigo.
              </p>

              {/* Direct Info Lines */}
              <div className="space-y-6 mb-8">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#242424] border border-[#C8A96E]/20 text-[#C8A96E] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-white">Dirección</h4>
                    <p className="text-xs sm:text-sm text-[#9e9e9e] mt-1 font-sans font-light">
                      Calle Cuitláhuac #923, Col. Tehuacán, Puebla, México. C.P. 75700
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#242424] border border-[#C8A96E]/20 text-[#C8A96E] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-white">Correo Electrónico</h4>
                    <p className="text-xs sm:text-sm text-[#9e9e9e] mt-1 font-sans font-light">
                      contacto@iglesiavidanueva.mx
                    </p>
                  </div>
                </div>
              </div>

              {/* Redes Sociales / Messenger buttons */}
              <div className="p-6 bg-[#242424] card-noise border border-white/[0.03] mb-8">
                <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#C8A96E] font-medium block mb-3">
                  Nuestras Redes Oficiales
                </span>
                
                <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                  {/* Page link */}
                  <a 
                    href="https://www.facebook.com/p/Iglesia-Vida-Nueva-Tehuacan-100064560731557/"
                    target="_blank" 
                    referrerPolicy="no-referrer"
                    className="px-4 py-2.5 bg-[#1877F2] text-white hover:bg-[#1877F2]/90 text-xs font-sans font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-colors duration-300"
                    id="fb-page-link"
                  >
                    <Facebook className="w-4 h-4" />
                    Página de Facebook
                  </a>

                  {/* Messenger direct link */}
                  <a 
                    href="https://m.me/100064560731557"
                    target="_blank" 
                    referrerPolicy="no-referrer"
                    className="px-4 py-2.5 bg-transparent border border-[#C8A96E] text-[#C8A96E] hover:bg-[#C8A96E]/10 text-xs font-sans font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-all duration-300"
                    id="fb-messenger-link"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Escríbenos en Facebook
                  </a>
                </div>
              </div>
            </div>

            {/* Simple Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4" id="contact-form">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nombre" className="block text-[10px] font-sans uppercase tracking-widest text-[#9e9e9e] mb-1">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    required
                    value={formState.nombre}
                    onChange={(e) => setFormState({ ...formState, nombre: e.target.value })}
                    className="w-full px-4 py-3 bg-[#242424] border border-white/5 text-white font-sans text-xs sm:text-sm rounded-none focus:outline-none focus:border-[#C8A96E] focus:ring-1 focus:ring-[#C8A96E] transition-colors duration-300"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>
                
                <div>
                  <label htmlFor="correo" className="block text-[10px] font-sans uppercase tracking-widest text-[#9e9e9e] mb-1">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="correo"
                    required
                    value={formState.correo}
                    onChange={(e) => setFormState({ ...formState, correo: e.target.value })}
                    className="w-full px-4 py-3 bg-[#242424] border border-white/5 text-white font-sans text-xs sm:text-sm rounded-none focus:outline-none focus:border-[#C8A96E] focus:ring-1 focus:ring-[#C8A96E] transition-colors duration-300"
                    placeholder="correo@ejemplo.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-[10px] font-sans uppercase tracking-widest text-[#9e9e9e] mb-1">
                  Tu Mensaje
                </label>
                <textarea
                  id="mensaje"
                  rows={4}
                  required
                  value={formState.mensaje}
                  onChange={(e) => setFormState({ ...formState, mensaje: e.target.value })}
                  className="w-full px-4 py-3 bg-[#242424] border border-white/5 text-white font-sans text-xs sm:text-sm rounded-none focus:outline-none focus:border-[#C8A96E] focus:ring-1 focus:ring-[#C8A96E] transition-colors duration-300 resize-none"
                  placeholder="¿En qué podemos servirte u orar por ti?"
                />
              </div>

              {/* Submit and Banners */}
              <div className="flex flex-col gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-white text-black font-sans font-bold text-xs tracking-widest uppercase hover:bg-[#C8A96E] hover:text-white transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span>Enviando...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      Enviar Mensaje
                    </>
                  )}
                </button>

                <AnimatePresence>
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="p-3 bg-[#C8A96E]/20 border border-[#C8A96E] flex items-center gap-2"
                      id="contact-success-banner"
                    >
                      <CheckCircle className="w-4 h-4 text-[#C8A96E]" />
                      <span className="text-[11px] sm:text-xs font-sans text-white">
                        ¡Gracias! Tu mensaje ha sido enviado. Nos comunicaremos contigo pronto.
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>

          </div>

          {/* Right Panel: Embedded Map with Dark Style Filter */}
          <div className="lg:col-span-6 flex flex-col min-h-[350px] lg:min-h-full">
            <div className="flex-1 relative w-full h-full min-h-[350px] border border-white/5 group overflow-hidden">
              {/* Map Viewfinder overlay */}
              <div className="absolute inset-4 border border-[#C8A96E]/10 pointer-events-none z-10">
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#C8A96E]" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#C8A96E]" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#C8A96E]" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#C8A96E]" />
              </div>

              {/* Dark Embedded Iframe Map */}
              <iframe
                title="Mapa de ubicación Iglesia Vida Nueva"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.332306232537!2d-97.3917409!3d18.4682054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c5bcd6672323e7%3A0xc0bf06b0b2e259e8!2sCalle%20Cuitl%C3%A1huac%20923%2C%20Tehuac%C3%A1n%2C%20Pue.!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "invert(90%) hue-rotate(180deg) grayscale(30%) contrast(110%)"
                }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 opacity-85 group-hover:opacity-100"
              />
              
              {/* Floating Address Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#242424]/90 backdrop-blur-sm p-3 border border-white/5 z-10 text-center">
                <span className="text-[10px] font-sans text-white tracking-wider block font-light">
                  Calle Cuitláhuac #923, Col. Tehuacán, México
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
