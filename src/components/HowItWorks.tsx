import React from 'react';
import { motion } from 'motion/react';
import { ClipboardList, Search, Wrench, ShieldCheck } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <ClipboardList size={20} />,
      title: "Contacto Inicial",
      description: "Entre em contacto connosco para solicitar um orçamento ou avaliação técnica."
    },
    {
      icon: <Search size={20} />,
      title: "Avaliação de Riscos",
      description: "A nossa equipa técnica desloca-se ao local para identificar as vulnerabilidades."
    },
    {
      icon: <Wrench size={20} />,
      title: "Instalação",
      description: "Instalamos e configuramos os equipamentos com o mais alto rigor técnico."
    },
    {
      icon: <ShieldCheck size={20} />,
      title: "Proteção Contínua",
      description: "Oferecemos planos de manutenção para garantir a operacionalidade dos sistemas."
    }
  ];

  return (
    <section id="how-it-works" className="relative z-10 scroll-mt-24 pt-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h2 className="text-xs font-bold text-pro-red tracking-widest uppercase mb-4 flex justify-center items-center gap-3">
            <span className="w-6 h-[1px] bg-pro-red"></span> Como Funciona <span className="w-6 h-[1px] bg-pro-red"></span>
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-gray-900 tracking-tight leading-[1.1]">
            Processo simplificado e <br className="hidden sm:block"/> focado na sua <span className="text-gray-500">segurança.</span>
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
              <div className="bg-pro-red inline-flex items-center justify-center w-24 h-24 rounded-full border-4 border-white shadow-[0_0_20px_rgba(229,57,53,0.2)] mb-6 relative z-10 group-hover:scale-105 transition-all duration-500">
                {/* Index Number Background */}
                <span className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-gray-900 text-white font-bold flex items-center justify-center text-xs shadow-lg shadow-black/10">{index + 1}</span>
                <div className="text-white relative z-10 scale-100">
                  {step.icon}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2 tracking-tight">{step.title}</h4>
                <p className="text-gray-600 leading-relaxed font-light text-[13px] max-w-[220px]">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
