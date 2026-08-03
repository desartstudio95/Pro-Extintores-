import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Heart, CheckCircle2 } from 'lucide-react';

export default function About() {
  const points = [
    "Empresa moçambicana fundada em 2019",
    "Equipa técnica altamente especializada",
    "Atendimento a particulares, empresas e grandes projetos",
    "Compromisso com qualidade, rapidez e satisfação"
  ];

  return (
    <section id="about" className="relative z-10 scroll-mt-24 pt-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-gray-100 shadow-sm p-8 md:p-14 lg:p-20 rounded-[2rem] md:rounded-[2.5rem] border border-gray-200 relative overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-xs font-bold text-pro-red tracking-widest uppercase mb-4 flex items-center gap-3">
                <span className="w-6 h-[1px] bg-pro-red"></span> Sobre Nós
              </h2>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-gray-900 tracking-tight leading-[1.1] mb-6">
                A sua segurança é o nosso <span className="text-slate-900">compromisso.</span>
              </h3>
              <p className="text-slate-900 text-base leading-relaxed font-light mb-8">
                A Pro Extintores e Servicos LTDA é uma empresa 100% moçambicana, estabelecida em 2019, que atua no ramo da segurança contra incêndios e segurança eletrónica, pautando pela seriedade, qualidade e competência.
              </p>
              
              <ul className="space-y-4 mb-8">
                {points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-pro-red shrink-0 mt-0.5" size={20} />
                    <span className="text-slate-900 font-light text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="grid gap-6">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gray-50 border border-gray-200 p-6 rounded-2xl"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-pro-red/10 flex items-center justify-center text-pro-red">
                    <Target size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 tracking-tight">Missão</h4>
                </div>
                <p className="text-slate-900 text-sm font-light leading-relaxed">
                  Fornecer equipamentos, materiais e serviços de instalação de elevada qualidade técnica e fiabilidade, garantindo a satisfação e proteção total dos nossos clientes.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gray-50 border border-gray-200 p-6 rounded-2xl"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-pro-red/10 flex items-center justify-center text-pro-red">
                    <Eye size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 tracking-tight">Visão</h4>
                </div>
                <p className="text-slate-900 text-sm font-light leading-relaxed">
                  Ser a empresa líder e de referência nacional no segmento de Segurança Contra Incêndios e Segurança Eletrónica até 2030, inovando continuamente as nossas soluções.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gray-50 border border-gray-200 p-6 rounded-2xl"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-pro-red/10 flex items-center justify-center text-pro-red">
                    <Heart size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 tracking-tight">Valores</h4>
                </div>
                <p className="text-slate-900 text-sm font-light leading-relaxed">
                  Excelência no atendimento, Integridade em todas as operações, Inovação tecnológica, Responsabilidade social e Valorização da vida humana e do património.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
