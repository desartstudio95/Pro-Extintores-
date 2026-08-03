import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Wrench, FileCheck, Zap } from 'lucide-react';

const benefits = [
  {
    icon: <ShieldCheck size={24} className="text-pro-red" />,
    title: "Qualidade Garantida",
    description: "Equipamentos certificados."
  },
  {
    icon: <Wrench size={24} className="text-pro-red" />,
    title: "Assistência Técnica",
    description: "Manutenção e suporte total."
  },
  {
    icon: <FileCheck size={24} className="text-pro-red" />,
    title: "Conformidade Legal",
    description: "De acordo com as normas."
  },
  {
    icon: <Zap size={24} className="text-pro-red" />,
    title: "Ação Rápida",
    description: "Atendimento sempre ágil."
  }
];

export default function BenefitBar() {
  return (
    <section className="relative z-20 px-4 md:px-8 max-w-7xl mx-auto w-full -mt-4 md:-mt-10 lg:-mt-16">
      <div className="bg-pro-red rounded-2xl p-6 md:p-8 lg:p-10 shadow-2xl shadow-pro-red/20 border border-white/20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center sm:items-start sm:text-left gap-4 bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="bg-white p-3 rounded-xl inline-flex items-center justify-center shadow-lg">
                {benefit.icon}
              </div>
              <div>
                <h4 className="text-white font-bold font-heading text-lg mb-1">{benefit.title}</h4>
                <p className="text-white/90 text-sm font-medium">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
