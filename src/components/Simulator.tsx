import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, ArrowRight, ShieldAlert, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Simulator() {
  const [area, setArea] = useState(250);
  const [riskLevel, setRiskLevel] = useState<'baixo' | 'medio' | 'alto'>('medio');

  const calculateRequirements = () => {
    let divisor = 250;
    let extras = ['Sinalização de Emergência'];

    if (riskLevel === 'baixo') {
      divisor = 250;
    } else if (riskLevel === 'medio') {
      divisor = 150;
      extras.push('Kit Primeiros Socorros', 'Luzes de Emergência');
    } else {
      divisor = 100;
      extras.push('Sistema de Detecção de Fumo', 'Mantas Ignífugas', 'Plano de Evacuação');
    }

    const extinguishersCount = Math.max(1, Math.ceil(area / divisor));

    return {
      extinguishers: extinguishersCount,
      extras: extras
    };
  };

  const results = calculateRequirements();

  return (
    <section id="simulator" className="relative z-10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900 shadow-xl shadow-slate-900/10 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 border border-slate-800 relative overflow-hidden"
        >
          {/* Subtle glow behind simulator */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pro-red/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10">
            
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-white mb-4 bg-pro-red/90 px-3 py-1.5 rounded-full border border-red-500/30">
                <Calculator size={16} />
                <span className="text-[10px] font-bold tracking-widest uppercase">Simulador de Segurança</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-bold font-heading mb-4 tracking-tight text-white leading-tight">
                Saiba quantos <span className="text-pro-red">extintores</span> o seu espaço precisa.
              </h3>
              <p className="text-white/70 text-base mb-8 leading-relaxed font-light">
                Use a nossa ferramenta rápida para estimar a quantidade de equipamentos de segurança necessários para garantir a conformidade e proteção do seu espaço.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white p-6 md:p-8 rounded-[1.5rem] border border-gray-100 space-y-8 shadow-xl">
                
                {/* Area Slider */}
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <label className="text-gray-500 font-bold text-[10px] md:text-xs uppercase tracking-wider">Área do Espaço (m²)</label>
                    <span className="text-2xl md:text-3xl font-bold text-gray-900 font-mono tracking-tight">{area.toLocaleString('pt-MZ')} <span className="text-sm text-pro-red font-sans">m²</span></span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full relative overflow-hidden">
                    <div 
                      className="absolute h-full bg-gradient-to-r from-pro-red to-red-600 rounded-full" 
                      style={{ width: `${((area - 50) / (2000 - 50)) * 100}%` }}
                    ></div>
                    <input
                      type="range"
                      min="50"
                      max="2000"
                      step="10"
                      value={area}
                      onChange={(e) => setArea(Number(e.target.value))}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-gray-400 font-medium">
                    <span>50 m²</span>
                    <span>2.000 m²</span>
                  </div>
                </div>

                {/* Risk Level */}
                <div className="space-y-3">
                  <label className="text-gray-500 font-bold text-[10px] md:text-xs uppercase tracking-wider block">Nível de Risco da Atividade</label>
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    <button
                      onClick={() => setRiskLevel('baixo')}
                      className={`py-2 px-1 sm:px-3 text-xs font-semibold rounded-lg border transition-all ${riskLevel === 'baixo' ? 'bg-green-50 border-green-500 text-green-700 shadow-sm' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}`}
                    >
                      Baixo
                      <span className="block text-[9px] font-normal text-gray-400 mt-0.5">Escritórios, Lojas</span>
                    </button>
                    <button
                      onClick={() => setRiskLevel('medio')}
                      className={`py-2 px-1 sm:px-3 text-xs font-semibold rounded-lg border transition-all ${riskLevel === 'medio' ? 'bg-orange-50 border-orange-500 text-orange-700 shadow-sm' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}`}
                    >
                      Médio
                      <span className="block text-[9px] font-normal text-gray-400 mt-0.5">Armazéns, Oficinas</span>
                    </button>
                    <button
                      onClick={() => setRiskLevel('alto')}
                      className={`py-2 px-1 sm:px-3 text-xs font-semibold rounded-lg border transition-all ${riskLevel === 'alto' ? 'bg-pro-red/10 border-pro-red text-pro-red shadow-sm' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}`}
                    >
                      Alto
                      <span className="block text-[9px] font-normal text-gray-400 mt-0.5">Indústria, Químicos</span>
                    </button>
                  </div>
                </div>

                {/* Results Card */}
                <div className="bg-gray-50 rounded-[1rem] p-5 border border-gray-200 flex flex-col sm:flex-row gap-5 justify-between sm:items-center mt-4">
                  <div>
                    <div className="text-[10px] text-gray-500 mb-1 tracking-wider uppercase font-semibold">Quantidade Estimada</div>
                    <div className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight flex items-center gap-3">
                      {results.extinguishers} <span className="text-sm font-medium text-gray-500 mt-2">Extintores</span>
                    </div>
                    
                    <div className="mt-3 text-[10px] text-gray-600">
                      <span className="font-semibold block mb-1">Recomendações extras:</span>
                      <ul className="list-disc pl-4 space-y-0.5">
                        {results.extras.map((extra, idx) => (
                          <li key={idx}>{extra}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <Link to="/#contact" className="w-full sm:w-auto bg-slate-900 text-white hover:bg-slate-800 px-6 py-3 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 whitespace-nowrap shadow-lg">
                    <FileText size={16} />
                    Pedir Orçamento
                  </Link>
                </div>
                
                <p className="text-[9px] text-gray-400 text-center leading-relaxed">
                  *Esta é apenas uma estimativa baseada em regras gerais. Uma avaliação técnica rigorosa e presencial é obrigatória por lei para um projeto contra incêndios.
                </p>

              </div>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
