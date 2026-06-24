import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Schedules from "./components/Schedules";
import About from "./components/About";
import Strengths from "./components/Strengths";
import Resources from "./components/Resources";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Menu, X } from "lucide-react";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="noise-bg min-h-screen text-white select-none selection:bg-[#C8A96E]/30 selection:text-white">
      
      {/* Floating Top Header Navigation */}
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? "bg-[#1a1a1a]/95 backdrop-blur-md py-4 border-b border-white/[0.04]" 
            : "bg-transparent py-6"
        }`}
        id="app-header"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo Brand left */}
          <div 
            onClick={() => navigateTo("inicio")} 
            className="flex flex-col cursor-pointer select-none"
          >
            <span className="text-2xl font-bebas font-bold tracking-tight text-white leading-none">IVN</span>
            <span className="text-[8px] font-sans tracking-[0.2em] text-[#C8A96E] uppercase font-light mt-0.5">
              Vida Nueva
            </span>
          </div>

          {/* Desktop Nav Right */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-sans font-medium tracking-widest uppercase">
            <button 
              onClick={() => navigateTo("inicio")} 
              className="text-[#9e9e9e] hover:text-white transition-colors duration-200 cursor-pointer"
            >
              Inicio
            </button>
            <button 
              onClick={() => navigateTo("horarios")} 
              className="text-[#9e9e9e] hover:text-white transition-colors duration-200 cursor-pointer"
            >
              Horarios
            </button>
            <button 
              onClick={() => navigateTo("nosotros")} 
              className="text-[#9e9e9e] hover:text-white transition-colors duration-200 cursor-pointer"
            >
              Nosotros
            </button>
            <button 
              onClick={() => navigateTo("ministerios")} 
              className="text-[#9e9e9e] hover:text-white transition-colors duration-200 cursor-pointer"
            >
              Ministerios
            </button>
            <button 
              onClick={() => navigateTo("recursos")} 
              className="text-[#9e9e9e] hover:text-white transition-colors duration-200 cursor-pointer"
            >
              Recursos
            </button>
            <button 
              onClick={() => navigateTo("contacto")} 
              className="px-5 py-2.5 bg-white text-black font-semibold tracking-wider hover:bg-[#C8A96E] hover:text-white transition-all duration-300 cursor-pointer"
            >
              Contacto
            </button>
          </nav>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#9e9e9e] hover:text-white focus:outline-none cursor-pointer"
            aria-label="Abrir menú"
            id="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#1a1a1a]/98 backdrop-blur-lg flex flex-col justify-center px-8" id="mobile-drawer">
          <div className="flex flex-col gap-6 text-center text-xl font-bebas font-bold tracking-widest uppercase">
            <button 
              onClick={() => navigateTo("inicio")} 
              className="py-2 text-white hover:text-[#C8A96E] transition-colors cursor-pointer"
            >
              Inicio
            </button>
            <button 
              onClick={() => navigateTo("horarios")} 
              className="py-2 text-white hover:text-[#C8A96E] transition-colors cursor-pointer"
            >
              Horarios
            </button>
            <button 
              onClick={() => navigateTo("nosotros")} 
              className="py-2 text-white hover:text-[#C8A96E] transition-colors cursor-pointer"
            >
              Nosotros
            </button>
            <button 
              onClick={() => navigateTo("ministerios")} 
              className="py-2 text-white hover:text-[#C8A96E] transition-colors cursor-pointer"
            >
              Ministerios
            </button>
            <button 
              onClick={() => navigateTo("recursos")} 
              className="py-2 text-white hover:text-[#C8A96E] transition-colors cursor-pointer"
            >
              Recursos
            </button>
            <button 
              onClick={() => navigateTo("contacto")} 
              className="py-3 px-6 bg-white text-black hover:bg-[#C8A96E] hover:text-white transition-all duration-300 tracking-wider inline-block text-sm cursor-pointer mt-4"
            >
              Contacto
            </button>
          </div>
        </div>
      )}

      {/* Main content wrapper */}
      <main id="app-main">
        {/* Hero Bienvenida */}
        <Hero 
          onJoinClick={() => navigateTo("horarios")} 
          onResourcesClick={() => navigateTo("recursos")} 
        />

        {/* Horarios Encuéntranos */}
        <Schedules />

        {/* Nuestra Iglesia ¿Quiénes somos? */}
        <About />

        {/* Fortalezas y Redes Conecta */}
        <Strengths />

        {/* Recursos Crece con nosotros */}
        <Resources />

        {/* Ubicación y Contacto */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
