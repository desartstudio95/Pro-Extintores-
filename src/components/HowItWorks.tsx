import React from 'react';
import { motion } from 'motion/react';
import { ClipboardList, Search, Wrench, ShieldCheck } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <ClipboardList size={20} />,
      title: "Fale connosco",
      description: "Conte-nos o que precisa."
    },
    {
      icon: <Search size={20} />,
      title: "Avaliamos",
      description: "Analisamos os riscos e necessidades."
    },
    {
      icon: <Wrench size={20} />,
      title: "Apresentamos a solução",
      description: "Receba uma proposta adequada ao seu espaço."
    },
    {
      icon: <ShieldCheck size={20} />,
      title: "Protegemos",
      description: "Instalação, manutenção e assistência contínua."
    }
  ];

  return (
    <section id="how-it-works" className="relative z-10 scroll-mt-24 pt-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-10">
          <h2 className="text-xs font-bold text-pro-red tracking-widest uppercase mb-4 flex justify-center items-center gap-3">
            <span className="w-6 h-[1px] bg-pro-red"></span> Como Funciona <span className="w-6 h-[1px] bg-pro-red"></span>
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-gray-900 tracking-tight leading-[1.1]">
            Processo simplificado e <br className="hidden sm:block"/> focado na sua <span className="text-slate-900">segurança.</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-4 gap-6 lg:gap-8 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-[4rem] left-[12%] right-[12%] h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent -z-10"></div>

          {steps.map((step, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              key={index} 
              className="relative group flex flex-col items-center text-center"
            >
              <div className="bg-gradient-to-br from-pro-red to-red-900 inline-flex items-center justify-center w-24 h-24 rounded-full border-4 border-white shadow-[0_0_20px_rgba(229,57,53,0.3)] mb-6 relative z-10 group-hover:scale-105 transition-all duration-500">
                <div className="text-white relative z-10 scale-100">
                  {step.icon}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2 tracking-tight">0{index + 1} &mdash; {step.title}</h4>
                <p className="text-slate-900 leading-relaxed font-light text-[13px] max-w-[220px]">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
