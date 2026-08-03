import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      text: "A Pro Extintores instalou o nosso sistema de alarme de incêndio com grande profissionalismo. A equipa foi rápida e o equipamento de excelente qualidade.",
      author: "Maria Tembe",
      role: "Gestora de Facilities, Maputo",
      rating: 5
    },
    {
      text: "Excelente serviço de manutenção de extintores. A recarga foi feita no prazo e o atendimento ao cliente é excecional. Recomendo.",
      author: "João Cossa",
      role: "Diretor de Operações, Matola",
      rating: 5
    },
    {
      text: "Trabalhar com a Pro Extintores trouxe-nos tranquilidade. A instalação do CCTV e controle de acesso foi impecável e sem perturbações no escritório.",
      author: "Ana Mabunda",
      role: "Empreendedora, Beira",
      rating: 5
    }
  ];

  return (
    <section className="relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <h2 className="text-xs font-bold text-pro-red tracking-widest uppercase mb-4 flex justify-center items-center gap-3">
            <span className="w-6 h-[1px] bg-pro-red"></span> Experiência de Cliente <span className="w-6 h-[1px] bg-pro-red"></span>
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold font-heading text-white tracking-tight leading-[1.1]">
            O que dizem os nossos <br className="hidden sm:block"/> <span className="text-gray-500">Parceiros de Negócio.</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index}
              className="glass-panel p-6 md:p-8 rounded-[1.5rem] relative group hover:-translate-y-2 transition-transform duration-500 flex flex-col items-start"
            >
              <div className="absolute top-8 right-8 text-white/5 group-hover:text-pro-red/10 transition-colors duration-500">
                <Quote size={60} strokeWidth={1} />
              </div>
              
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-pro-red text-pro-red" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-8 italic relative z-10 leading-relaxed font-light text-[15px]">
                "{t.text}"
              </p>
              
              <div className="relative z-10 mt-auto flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-full border border-white/20 flex items-center justify-center font-bold text-white text-sm">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white tracking-tight text-sm">{t.author}</h4>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-0.5">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
