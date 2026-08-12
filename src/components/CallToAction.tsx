import React from 'react';
import { Phone, ArrowRight, ShieldAlert } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="bg-gradient-to-r from-pro-red to-red-900 relative overflow-hidden py-10 md:py-12">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-black opacity-10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-8">
          
          <div className="text-center lg:text-left max-w-2xl">
            <h2 className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-3 text-xl md:text-2xl lg:text-3xl font-black font-heading text-white tracking-tight mb-3">
              <ShieldAlert size={32} className="shrink-0 text-white/90 hidden md:block" />
              <div className="flex items-center justify-center gap-2 md:hidden">
                <ShieldAlert size={24} className="shrink-0 text-white/90" />
                <span>Proteja hoje o que mais importa.</span>
              </div>
              <span className="hidden md:block">Proteja hoje o que mais importa.</span>
            </h2>
            <p className="text-white/90 text-xs md:text-sm leading-relaxed font-light md:pl-11">
              Solicite uma avaliação gratuita e descubra a melhor solução para o seu negócio.
            </p>
          </div>
          
          <div className="flex items-center shrink-0 w-full sm:w-auto">
            <a 
              href="https://wa.me/258855240453" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center justify-between gap-3 bg-white p-1.5 pl-5 pr-1.5 rounded-full hover:bg-gray-50 hover:shadow-xl transition-all duration-300 shadow-md w-full sm:w-auto"
            >
              <div className="flex flex-col items-start py-0.5">
                <span className="text-pro-red font-bold text-[11px] sm:text-xs leading-tight uppercase tracking-wide">Falar com Especialista</span>
                <span className="text-gray-900 font-black text-xs sm:text-sm tracking-wide flex items-center gap-1.5 mt-0.5">
                  <Phone size={12} className="text-gray-500" /> +258 85 524 0453
                </span>
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-pro-red text-white flex items-center justify-center group-hover:scale-110 group-active:scale-95 transition-transform ml-3 shrink-0 shadow-md">
                <ArrowRight size={16} />
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
