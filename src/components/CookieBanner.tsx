import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Info } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 pointer-events-none"
        >
          <div className="max-w-5xl mx-auto bg-slate-900 text-white rounded-2xl shadow-2xl p-5 md:p-6 flex flex-col md:flex-row items-center gap-5 md:gap-8 pointer-events-auto border border-slate-800">
            <div className="flex items-start gap-4 flex-grow">
              <div className="bg-pro-red/20 p-2.5 rounded-full hidden sm:block shrink-0 mt-1">
                <Info className="text-pro-red" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1 tracking-tight">Aviso de Cookies e Privacidade</h4>
                <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed">
                  Utilizamos cookies para melhorar a sua experiência de navegação, analisar o tráfego do site e personalizar conteúdo. Ao clicar em "Aceitar Todos", concorda com o armazenamento de cookies no seu dispositivo.
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 w-full md:w-auto shrink-0 mt-2 md:mt-0">
              <button
                onClick={declineCookies}
                className="flex-1 md:flex-none px-5 py-2.5 rounded-lg font-medium text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              >
                Recusar
              </button>
              <button
                onClick={acceptCookies}
                className="flex-1 md:flex-none bg-gradient-to-r from-pro-red to-red-700 hover:from-blue-900 hover:to-blue-950 hover:shadow-blue-900/30 px-6 py-2.5 rounded-lg font-bold text-sm text-white shadow-lg shadow-pro-red/20 transition-all active:scale-95"
              >
                Aceitar Todos
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
