import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    "Equipamentos certificados de alta qualidade",
    "Técnicos qualificados e experientes",
    "Atendimento rápido e personalizado",
    "Solução para empresas de todos os portes",
    "Cumprimento das normas de segurança"
  ];

  return (
    <section className="relative z-10 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden"
        >
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 relative z-10 items-stretch">
            
            {/* Esquerda: Indicadores e texto */}
            <div className="lg:col-span-3 flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-x-4 gap-y-6 mb-8">
                <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="border-l-2 border-pro-red pl-3 py-0.5">
                  <div className="text-3xl font-bold font-heading text-gray-900 tracking-tight mb-0.5">+5</div>
                  <div className="text-[10px] text-slate-900 uppercase tracking-wider font-bold leading-tight">Anos de<br/>experiência</div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="border-l-2 border-pro-red pl-3 py-0.5">
                  <div className="text-3xl font-bold font-heading text-gray-900 tracking-tight mb-0.5">+200</div>
                  <div className="text-[10px] text-slate-900 uppercase tracking-wider font-bold leading-tight">Clientes<br/>satisfeitos</div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="border-l-2 border-pro-red pl-3 py-0.5">
                  <div className="text-3xl font-bold font-heading text-gray-900 tracking-tight mb-0.5">+1.5k</div>
                  <div className="text-[10px] text-slate-900 uppercase tracking-wider font-bold leading-tight">Projetos<br/>entregues</div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="border-l-2 border-pro-red pl-3 py-0.5">
                  <div className="text-3xl font-bold font-heading text-gray-900 tracking-tight mb-0.5">24/7</div>
                  <div className="text-[10px] text-slate-900 uppercase tracking-wider font-bold leading-tight">Assistência<br/>técnica</div>
                </motion.div>
              </div>
              
              <p className="text-slate-900 text-sm leading-relaxed font-light">
                A Pro Extintores dedica-se a proteger vidas e patrimónios, garantindo excelência, rigor e conformidade com as mais exigentes normas de segurança contra incêndios em Moçambique.
              </p>
            </div>

            {/* Centro: Imagem da equipa técnica */}
            <div className="lg:col-span-4 rounded-2xl overflow-hidden min-h-[300px] lg:min-h-full relative shadow-inner">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" 
                alt="Equipa Técnica" 
                className="absolute inset-0 w-full h-full object-cover filter brightness-[0.95]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            {/* Direita: Título e Lista de Vantagens */}
            <div className="lg:col-span-5 flex flex-col justify-center pl-0 lg:pl-4">
              <h2 className="text-xs font-bold text-pro-red tracking-widest uppercase mb-3 flex items-center gap-3">
                <span className="w-6 h-[1px] bg-pro-red"></span> Vantagens
              </h2>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900 tracking-tight leading-[1.1] mb-8">
                Por que escolher a <span className="text-slate-900">Pro Extintores?</span>
              </h3>

              <div className="flex flex-col gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    key={index} 
                    className="flex items-center gap-3 group"
                  >
                    <div className="flex-shrink-0 text-pro-red">
                      <CheckCircle2 size={20} />
                    </div>
                    <p className="text-[15px] font-medium text-gray-800 tracking-tight">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
