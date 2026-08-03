import React from 'react';
import { motion } from 'motion/react';
import { Award, MapPin, UserCog, CalendarClock } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      title: "Qualidade Garantida",
      description: "Trabalhamos com equipamentos certificados e aprovados pelas normas internacionais.",
      icon: <Award size={20} />
    },
    {
      title: "Atendimento Nacional",
      description: "Cobertura operacional para atender clientes em diversas regiões de Moçambique.",
      icon: <MapPin size={20} />
    },
    {
      title: "Técnicos Especializados",
      description: "Equipa altamente treinada e certificada para instalações complexas.",
      icon: <UserCog size={20} />
    },
    {
      title: "Manutenção Preventiva",
      description: "Programas de revisão periódica para garantir a operacionalidade 24/7.",
      icon: <CalendarClock size={20} />
    }
  ];

  return (
    <section className="relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white border border-gray-100 shadow-sm p-6 md:p-10 lg:p-14 rounded-[2rem] border border-gray-200 relative overflow-hidden"
        >
          
          <div className="absolute top-0 right-0 -mr-20 w-[400px] h-[400px] bg-gray-50 rounded-full blur-[60px] pointer-events-none"></div>
          
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 relative z-10 items-center">
            <div className="lg:col-span-5 flex flex-col justify-center">
              <h2 className="text-xs font-bold text-pro-red tracking-widest uppercase mb-4 flex items-center gap-3">
                <span className="w-6 h-[1px] bg-pro-red"></span> Vantagens
              </h2>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-gray-900 tracking-tight leading-[1.1] mb-5">
                Porquê escolher a <span className="text-gray-600">Pro Extintores?</span>
              </h3>
              <p className="text-gray-600 text-base mb-8 leading-relaxed font-light">
                Combinamos experiência técnica com um compromisso inabalável com a qualidade para garantir que as suas instalações e colaboradores estão sempre protegidos.
              </p>
              <div>
                <a href="#contact" className="inline-flex glass-card border border-gray-200 px-5 py-2.5 rounded-lg text-gray-900 font-medium text-xs hover:bg-gray-100 transition-colors shadow-lg">
                  Falar com Consultor
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={index} 
                  className="p-6 rounded-2xl bg-black/40 border border-white/5 hover:border-gray-200 hover:bg-gray-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-900 mb-4 border border-gray-200 group-hover:text-pro-red group-hover:bg-pro-red/10 group-hover:border-pro-red/20 transition-colors">
                    {benefit.icon}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 tracking-tight">{benefit.title}</h4>
                  <p className="text-gray-600 leading-relaxed font-light text-[13px]">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
