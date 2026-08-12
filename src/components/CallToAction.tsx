import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="bg-pro-red relative overflow-hidden py-16 md:py-20">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-black opacity-10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left md:max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-heading text-white tracking-tight mb-4">
              Proteja hoje o que mais importa.
            </h2>
            <p className="text-white/90 text-sm md:text-base lg:text-lg leading-relaxed font-light">
              Não deixe a segurança do seu património para amanhã. A nossa equipa de especialistas está pronta para avaliar o seu espaço e implementar as soluções ideais para si.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4 shrink-0">
            <a 
              href="https://wa.me/258841234567" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group inline-flex items-center gap-3 bg-white text-pro-red px-8 py-4 rounded-full font-bold hover:bg-gray-50 hover:shadow-xl transition-all duration-300 shadow-md text-base sm:text-lg w-full sm:w-auto justify-center"
            >
              Falar com Especialista
              <div className="w-8 h-8 rounded-full bg-pro-red/10 text-pro-red flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowRight size={16} />
              </div>
            </a>
            
            <div className="flex items-center gap-2 text-white/90 font-bold tracking-wider">
              <Phone size={18} />
              <span>+258 84 123 4567</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
