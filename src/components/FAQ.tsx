import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Vocês fazem manutenção de extintores?",
      answer: "Sim, realizamos manutenção preventiva e corretiva, bem como a recarga de todos os tipos de extintores (Pó ABC, CO2, Água, Espuma)."
    },
    {
      question: "Qual a periodicidade da manutenção?",
      answer: "A manutenção preventiva e a recarga dos extintores devem ser feitas anualmente por uma equipa técnica especializada, conforme as normas de segurança em vigor."
    },
    {
      question: "Fazem instalações em Maputo?",
      answer: "Sim, a nossa sede é em Maputo e realizamos instalações e manutenções em toda a província e arredores."
    },
    {
      question: "Trabalham com empresas e condomínios?",
      answer: "Sim, fornecemos soluções e contratos de manutenção contínua para empresas, condomínios, indústrias, escolas e instituições."
    },
    {
      question: "Fornecem certificados/documentação?",
      answer: "Sim, todos os nossos serviços e equipamentos vêm acompanhados de certificação que comprova a conformidade com as normas de segurança nacionais e internacionais."
    },
    {
      question: "Fazem inspeção no local?",
      answer: "Sim, a nossa equipa técnica desloca-se às suas instalações para realizar uma avaliação completa dos riscos e recomendar a melhor solução."
    },
    {
      question: "Vendem equipamentos individualmente?",
      answer: "Sim, comercializamos extintores, EPIs, e equipamentos de segurança avulso, tanto para pequenas necessidades como para grandes volumes."
    },
    {
      question: "Fazem instalação de sistemas de incêndio?",
      answer: "Sim, instalamos sistemas complexos de deteção e alarme de incêndios, bem como redes de água, carretéis e hidrantes."
    },
    {
      question: "Trabalham com projetos de construção?",
      answer: "Sim, colaboramos com construtores e engenheiros para o dimensionamento e instalação de sistemas de segurança contra incêndios em novos projetos ou reabilitações."
    },
    {
      question: "Quanto custa uma manutenção?",
      answer: "O custo varia consoante a quantidade e o tipo de equipamentos. Recomendamos que entre em contacto connosco para obter um orçamento gratuito e personalizado."
    },
    {
      question: "Quanto tempo demora um orçamento?",
      answer: "A nossa equipa esforça-se por responder a todos os pedidos de orçamento num prazo de 24 a 48 horas úteis."
    }
  ];

  return (
    <section className="relative z-10 scroll-mt-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-8">
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
              className={`rounded-2xl border transition-all duration-300 ${openIndex === index ? 'bg-white border-gray-200 shadow-md' : 'bg-gray-50 border-transparent hover:bg-gray-100'}`}
            >
              <button
                className="w-full px-5 md:px-6 py-4 md:py-5 text-left flex justify-between items-center bg-transparent gap-4"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-base text-gray-900 pr-4 leading-tight">{faq.question}</span>
                <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${openIndex === index ? 'bg-pro-red text-white shadow-lg shadow-pro-red/20' : 'bg-white border border-gray-200 text-slate-900'}`}>
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
                      <p className="text-slate-900 text-sm leading-relaxed font-light pt-3 border-t border-gray-100">
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
