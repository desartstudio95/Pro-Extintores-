import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-24 flex items-center overflow-hidden z-10 min-h-[90vh]">
      <div className="absolute inset-0 bg-white z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start text-left max-w-xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pro-red/10 text-[10px] sm:text-xs font-bold mb-6 uppercase tracking-widest text-pro-red">
              PRO EXTINTORES
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading leading-[1.1] mb-6 text-gray-900 tracking-tight">
              Segurança que protege o que realmente importa.
            </h1>
            
            <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed font-light">
              Soluções completas em segurança contra incêndios e segurança eletrónica para empresas, residências e grandes projetos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10">
              <a href="#contact" className="flex justify-center items-center gap-2 btn-primary px-6 py-3 rounded-lg font-semibold shadow-lg shadow-pro-red/20 text-white w-full sm:w-auto text-sm hover:shadow-xl hover:shadow-pro-red/30 transition-all group">
                Solicitar Orçamento
                <ArrowRight size={16} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#services" className="flex justify-center items-center gap-2 btn-outline hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold text-gray-900 w-full sm:w-auto text-sm group border-gray-300">
                Nossos Serviços
                <ChevronRight size={16} className="text-gray-500 group-hover:text-gray-900 transition-colors" />
              </a>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-gray-700"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-pro-red" size={18} />
                <span>Atendimento 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-pro-red" size={18} />
                <span>Equipamentos Certificados</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-pro-red" size={18} />
                <span>Técnicos Especializados</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-pro-red/5 rounded-3xl -rotate-3 scale-105 transform origin-center"></div>
            <img 
              src="https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80&w=1000" 
              alt="Técnico com extintor" 
              className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl border border-gray-200"
            />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
