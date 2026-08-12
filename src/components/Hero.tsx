import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronRight, ShieldCheck, Flame, Clock, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

const bgImages = [
  "https://i.ibb.co/3m2kJJnp/Chat-GPT-Image-12-de-ago-de-2026-19-35-51.png",
  "https://i.ibb.co/DHVbfWW3/Chat-GPT-Image-12-de-ago-de-2026-19-31-20.png",
  "https://i.ibb.co/BKKg3xP4/Chat-GPT-Image-12-de-ago-de-2026-19-29-35.png",
  "https://i.ibb.co/fGtgjNkP/Chat-GPT-Image-12-de-ago-de-2026-19-28-11.png"
];

export default function Hero() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative flex flex-col justify-center items-center overflow-hidden z-10 min-h-[80svh] pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24">
      
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={bgIndex}
            src={bgImages[bgIndex]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.95, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-pro-red opacity-85"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center w-full"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-white/20 text-[10px] sm:text-xs font-semibold mb-6 uppercase tracking-widest text-white">
              <span className="flex h-2 w-2 relative mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Líder em Segurança e Prevenção
              <ChevronRight size={12} className="text-white/70 ml-1" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading leading-[1.05] mb-6 text-white tracking-tight">
              Prevenção que <br className="hidden md:block"/> salva <span>vidas e património.</span>
            </h1>
            
            <p className="text-base md:text-lg text-white mb-6 max-w-2xl leading-relaxed font-light">
              Venda, instalação, manutenção e inspeção de equipamentos e sistemas de segurança contra incêndios.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
              <a href="https://wa.me/258855240453?text=Ol%C3%A1%2C%20gostaria%20de%20pedir%20um%20or%C3%A7amento." target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-2 btn-primary px-5 py-2.5 rounded-lg font-semibold shadow-lg shadow-pro-red/20 text-white w-full sm:w-auto text-sm hover:shadow-xl hover:shadow-blue-900/30 transition-all group">
                Pedir Orçamento
                <ArrowRight size={16} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <Link to="/#services" className="flex justify-center items-center gap-2 btn-outline hover:bg-white/10 px-5 py-2.5 rounded-lg font-semibold text-white w-full sm:w-auto text-sm group">
                Ver Serviços
                <ChevronRight size={16} className="text-white/70 group-hover:text-white transition-colors" />
              </Link>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="mt-10 flex flex-wrap items-start justify-center gap-6 sm:gap-10 md:gap-16 pt-6 border-t border-white/5 w-full md:max-w-4xl"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-col items-center text-center max-w-[120px]"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-3">
                  <Clock className="text-white" size={20} />
                </div>
                <span className="text-sm font-semibold text-white leading-tight">Atendimento<br/>24/7</span>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex flex-col items-center text-center max-w-[140px]"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-3">
                  <ShieldCheck className="text-white" size={20} />
                </div>
                <span className="text-sm font-semibold text-white leading-tight">Equipamentos<br/>Certificados</span>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="flex flex-col items-center text-center max-w-[140px]"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-3">
                  <Wrench className="text-white" size={20} />
                </div>
                <span className="text-sm font-semibold text-white leading-tight">Técnicos<br/>Especializados</span>
              </motion.div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
