import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, ArrowRight } from 'lucide-react';

export default function Simulator() {
  const [amount, setAmount] = useState(50000);
  const [months, setMonths] = useState(12);
  const [interestRate] = useState(5);

  const calculateLoan = () => {
    const principal = amount;
    const rate = interestRate / 100;
    const totalInterest = principal * rate * months;
    const totalAmount = principal + totalInterest;
    const monthlyPayment = totalAmount / months;

    return {
      monthly: monthlyPayment,
      totalInterest: totalInterest,
      total: totalAmount
    };
  };

  const results = calculateLoan();

  return (
    <section id="simulator" className="relative z-10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 border border-white/10 relative overflow-hidden"
        >
          {/* Subtle glow behind simulator */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pro-red/5 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10">
            
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-pro-red mb-4 bg-pro-red/10 px-3 py-1.5 rounded-full border border-pro-red/20">
                <Calculator size={16} />
                <span className="text-[10px] font-bold tracking-widest uppercase">Simulador de Crédito</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-bold font-heading mb-4 tracking-tight text-white leading-tight">
                Transparência desde o <span className="text-gray-400">primeiro</span> minuto.
              </h3>
              <p className="text-gray-400 text-base mb-8 leading-relaxed font-light">
                Ajuste os valores para visualizar exatamente quanto irá pagar, sem surpresas e com total clareza.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-black/20 p-6 md:p-8 rounded-[1.5rem] border border-white/5 space-y-8 shadow-2xl">
                
                {/* Amount Slider */}
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <label className="text-gray-400 font-medium text-[10px] md:text-xs uppercase tracking-wider">Quanto precisa?</label>
                    <span className="text-2xl md:text-3xl font-bold text-white font-mono tracking-tight">{amount.toLocaleString('pt-MZ')} <span className="text-sm text-pro-red">MT</span></span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full relative overflow-hidden">
                    <div 
                      className="absolute h-full bg-gradient-to-r from-pro-red to-emerald-400 rounded-full" 
                      style={{ width: `${((amount - 5000) / (500000 - 5000)) * 100}%` }}
                    ></div>
                    <input
                      type="range"
                      min="5000"
                      max="500000"
                      step="5000"
                      value={amount}
                      onChange={(e) => setAmount(Number(e.target.value))}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-gray-500 font-medium">
                    <span>5.000 MT</span>
                    <span>500.000 MT</span>
                  </div>
                </div>

                {/* Months Slider */}
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <label className="text-gray-400 font-medium text-[10px] md:text-xs uppercase tracking-wider">Por quanto tempo?</label>
                    <span className="text-2xl md:text-3xl font-bold text-white font-mono tracking-tight">{months} <span className="text-sm text-pro-red">Meses</span></span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full relative overflow-hidden">
                    <div 
                      className="absolute h-full bg-gradient-to-r from-pro-red to-emerald-400 rounded-full" 
                      style={{ width: `${((months - 3) / (36 - 3)) * 100}%` }}
                    ></div>
                    <input
                      type="range"
                      min="3"
                      max="36"
                      step="3"
                      value={months}
                      onChange={(e) => setMonths(Number(e.target.value))}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-gray-500 font-medium">
                    <span>3 Meses</span>
                    <span>36 Meses</span>
                  </div>
                </div>

                {/* Results Card */}
                <div className="glass-card rounded-[1rem] p-5 border border-white/10 flex flex-col sm:flex-row gap-5 justify-between sm:items-center mt-4 shadow-xl">
                  <div>
                    <div className="text-[10px] text-gray-400 mb-1 tracking-wider uppercase">Parcela Mensal Estimada</div>
                    <div className="text-3xl md:text-4xl font-bold text-white font-mono tracking-tight">
                      {results.monthly.toLocaleString('pt-MZ', { maximumFractionDigits: 0 })} <span className="text-lg text-gray-500">MT</span>
                    </div>
                    <div className="text-[9px] text-emerald-400 mt-1 font-medium bg-emerald-400/10 inline-block px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Taxa: {interestRate}% am
                    </div>
                  </div>
                  
                  <button className="w-full sm:w-auto btn-primary px-6 py-3 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2 whitespace-nowrap shadow-lg">
                    Solicitar Valor
                    <ArrowRight size={16} />
                  </button>
                </div>
                
              </div>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
