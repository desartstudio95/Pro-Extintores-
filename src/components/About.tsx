import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const advantages = [
    "Equipamentos certificados",
    "Técnicos qualificados",
    "Atendimento rápido",
    "Soluções personalizadas",
    "Cumprimento das normas"
  ];

  return (
    <section id="about" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          
          {/* Left Column */}
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-center">
                <div className="text-3xl font-bold text-pro-red mb-1">5+</div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Anos de experiência</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-center">
                <div className="text-3xl font-bold text-pro-red mb-1">500+</div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Clientes</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-center">
                <div className="text-3xl font-bold text-pro-red mb-1">2000+</div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Projetos</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-center">
                <div className="text-3xl font-bold text-pro-red mb-1">24/7</div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Assistência</div>
              </div>
            </div>
            <div>
              <p className="text-gray-600 font-light leading-relaxed">
                A Pro Extintores e Servicos LTDA é uma empresa 100% moçambicana que atua no ramo da segurança contra incêndios e segurança eletrónica, pautando pela seriedade, qualidade e competência.
              </p>
            </div>
          </div>

          {/* Center Column */}
          <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <img 
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800" 
              alt="Equipa técnica da Pro Extintores" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold font-heading text-gray-900 mb-8 leading-[1.2]">
              Por que escolher a Pro Extintores?
            </h3>
            <ul className="space-y-4">
              {advantages.map((adv, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-pro-red shrink-0" size={24} />
                  <span className="text-gray-700 font-medium">{adv}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
