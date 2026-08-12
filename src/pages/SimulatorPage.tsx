import React, { useEffect } from 'react';
import Simulator from '../components/Simulator';
import { motion } from 'motion/react';
import { ShieldCheck, Info } from 'lucide-react';

export default function SimulatorPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex-grow pt-28 pb-20 bg-gray-50 min-h-[100svh]">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pro-red/10 text-pro-red mb-6">
            <ShieldCheck size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 tracking-tight mb-4">
            Simulador de <span className="text-pro-red">Segurança</span>
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed font-light">
            Descubra a estimativa de equipamentos necessários para garantir a conformidade e segurança do seu espaço.
          </p>
        </motion.div>
      </div>

      <Simulator />

      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm flex gap-4 items-start">
          <div className="bg-gray-100 text-gray-800 p-3 rounded-full shrink-0">
            <Info size={24} />
          </div>
          <div>
            <h4 className="text-gray-900 font-bold mb-2">Nota Importante sobre o Simulador</h4>
            <p className="text-slate-600 text-sm leading-relaxed font-light">
              Os resultados apresentados por este simulador são estimativas baseadas em regras e normas gerais (como o rácio de extintores por metro quadrado dependendo do nível de risco). 
              Para efeitos de licenciamento, inspeção oficial ou elaboração de um projeto de segurança contra incêndios, é legalmente obrigatória a realização de uma <strong>avaliação técnica presencial</strong> por parte de profissionais qualificados.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
