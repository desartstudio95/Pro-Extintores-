import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Wrench, FileCheck, Zap } from 'lucide-react';

const benefits = [
  {
    icon: <ShieldCheck size={28} className="text-white" />,
    title: "Qualidade Garantida",
    description: "Equipamentos de alta qualidade e certificados."
  },
  {
    icon: <Wrench size={28} className="text-white" />,
    title: "Assistência Técnica",
    description: "Manutenção e suporte sempre que precisar."
  },
  {
    icon: <FileCheck size={28} className="text-white" />,
    title: "Conformidade Legal",
    description: "Cumprimos todas as normas e regulamentos."
  },
  {
    icon: <Zap size={28} className="text-white" />,
    title: "Ação Rápida",
    description: "Atendimento personalizado e ágil."
  }
];

export default function BenefitBar() {
  return (
    <section className="relative z-20 px-4 md:px-8 max-w-7xl mx-auto w-full -mt-4 md:-mt-10 lg:-mt-16">
      <div className="relative overflow-hidden bg-slate-900 rounded-2xl shadow-2xl shadow-slate-900/20 border border-slate-800">
        <img 
          src="https://images.unsplash.com/photo-1629731238914-996ff423363f?q=80&w=2070&auto=format&fit=crop" 
          alt="Extintores" 
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply"></div>
        
        <div className="relative z-10 p-6 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="bg-pro-red p-3 rounded-full flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h4 className="text-white font-bold text-[15px] mb-0.5">{benefit.title}</h4>
                  <p className="text-white/70 text-xs font-medium">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
