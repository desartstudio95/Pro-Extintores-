import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Qual a frequência recomendada para a manutenção de extintores?",
      answer: "A manutenção preventiva e a recarga dos extintores devem ser feitas anualmente por uma equipa técnica especializada, conforme as normas de segurança contra incêndios em vigor."
    },
    {
      question: "Realizam instalações em todo o país?",
      answer: "Sim, a Pro Extintores tem capacidade técnica e logística para atender clientes em diversas regiões de Moçambique."
    },
    {
      question: "Fornecem treinamento para o uso de extintores?",
      answer: "A nossa consultoria pode incluir orientações básicas sobre a utilização correta dos equipamentos e procedimentos de emergência."
    },
    {
      question: "Os vossos equipamentos de segurança eletrónica têm garantia?",
      answer: "Sim, todos os sistemas de intrusão, CCTV e alarmes instalados pela nossa equipa possuem garantia de qualidade e suporte técnico."
    },
    {
      question: "Que tipos de extintores fornecem?",
      answer: "Fornecemos todos os tipos essenciais: Pó Químico Seco (ABC), CO₂, Água, Espuma Mecânica e Wet Chemical, para diferentes classes de fogo."
    }
  ];

  return (
    <section className="relative z-10 scroll-mt-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-xs font-bold text-pro-red tracking-widest uppercase mb-4 flex justify-center items-center gap-3">
            <span className="w-6 h-[1px] bg-pro-red"></span> Suporte <span className="w-6 h-[1px] bg-pro-red"></span>
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-gray-900 tracking-tight leading-[1.1]">
            Dúvidas Frequentes.
          </h3>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              key={index}
              className={`glass-card rounded-2xl border border-white/5 overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-gray-100 border-gray-300' : 'bg-transparent hover:bg-white/[0.03]'}`}
            >
              <button
                className="w-full px-5 md:px-6 py-4 md:py-5 text-left flex justify-between items-center bg-transparent gap-4"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-base text-gray-900 pr-4 leading-tight">{faq.question}</span>
                <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${openIndex === index ? 'bg-pro-red text-gray-900 shadow-lg shadow-pro-red/20' : 'bg-gray-50 text-slate-900 group-hover:bg-gray-100'}`}>
                  {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 md:px-6 pb-5">
                      <p className="text-slate-900 text-sm leading-relaxed font-light pt-3 border-t border-white/5">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
