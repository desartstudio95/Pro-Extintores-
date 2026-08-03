import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="bg-pro-red py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6 leading-tight">
          Proteja hoje o que mais importa.
        </h2>
        <p className="text-white/90 text-lg mb-10 font-light max-w-2xl mx-auto">
          Não deixe a segurança da sua empresa para depois. A nossa equipa de especialistas está pronta para desenvolver a solução ideal para si.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#contact" className="flex items-center gap-2 bg-white text-pro-red px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl group">
            Falar com Especialista
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <div className="flex items-center gap-3 text-white">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
              <Phone size={20} />
            </div>
            <div className="text-left">
              <div className="text-xs text-white/80 uppercase tracking-wider font-semibold">Ligue Agora</div>
              <a href="tel:+258800000000" className="text-xl font-bold hover:text-white/90 transition-colors">
                +258 800 000 000
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
