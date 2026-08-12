import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldAlert, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WelcomeModal() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Usando sessionStorage para que o anúncio apareça uma vez por sessão de navegação.
    // Pode ser alterado para localStorage se desejar que apareça apenas 1 vez na vida.
    const hasSeenWelcome = sessionStorage.getItem('welcome-seen');
    
    if (!hasSeenWelcome) {
      const timer = setTimeout(() => setIsVisible(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const closeModal = () => {
    sessionStorage.setItem('welcome-seen', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Overlay Escuro */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[110]"
            onClick={closeModal}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[120] w-full max-w-lg p-4"
          >
            <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100 flex flex-col">
              
              {/* Header Visual */}
              <div className="bg-gradient-to-br from-slate-900 to-black p-8 text-center relative overflow-hidden">
                {/* Elementos Decorativos de Fundo */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-pro-red/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gray-500/20 rounded-full blur-2xl"></div>
                
                <button 
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
                >
                  <X size={16} />
                </button>
                
                <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-pro-red to-red-900 flex items-center justify-center mb-5 shadow-lg shadow-pro-red/30 border-2 border-white/10 relative z-10">
                  <ShieldAlert className="text-white" size={28} />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold font-heading text-white tracking-tight mb-2 relative z-10">
                  Bem-vindo à Pro Extintores!
                </h3>
                <p className="text-white/80 text-sm font-light relative z-10">
                  A sua segurança é a nossa maior prioridade.
                </p>
              </div>
              
              {/* Conteúdo e CTAs */}
              <div className="p-8 text-center bg-white">
                <p className="text-slate-900 text-sm leading-relaxed font-light mb-8 max-w-sm mx-auto">
                  Procura soluções profissionais em segurança contra incêndios? Oferecemos uma gama completa de serviços e equipamentos com certificação rigorosa para proteger o seu património.
                </p>
                
                <div className="flex flex-col gap-3">
                  <Link 
                    to="/#contact"
                    onClick={closeModal}
                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-pro-red to-red-800 text-white py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-pro-red/20 hover:shadow-xl hover:shadow-black/40 hover:from-gray-900 hover:to-black transition-all active:scale-[0.98] group"
                  >
                    Falar com um Especialista
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  
                  <button
                    onClick={closeModal}
                    className="w-full py-3 rounded-xl font-semibold text-xs text-gray-500 hover:text-slate-900 hover:bg-gray-50 transition-colors uppercase tracking-wider"
                  >
                    Continuar a explorar
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
