import React from 'react';
import { Award, Wrench, ShieldCheck, Headphones } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      title: "Qualidade Garantida",
      description: "Equipamentos certificados.",
      icon: <Award size={24} className="text-pro-red" />
    },
    {
      title: "Assistência Técnica",
      description: "Equipa qualificada.",
      icon: <Wrench size={24} className="text-pro-red" />
    },
    {
      title: "Conformidade Legal",
      description: "Cumprimento das normas.",
      icon: <ShieldCheck size={24} className="text-pro-red" />
    },
    {
      title: "Atendimento Premium",
      description: "Suporte especializado.",
      icon: <Headphones size={24} className="text-pro-red" />
    }
  ];

  return (
    <section className="bg-pro-blue py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-5 border border-white/10">
                {benefit.icon}
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{benefit.title}</h4>
              <p className="text-gray-400 font-light text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
