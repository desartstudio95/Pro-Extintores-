import React from 'react';
import { motion } from 'motion/react';
import { Award, MapPin, UserCog, CalendarClock } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      title: "Qualidade Garantida",
      description: "Trabalhamos com equipamentos certificados e aprovados pelas normas internacionais.",
      icon: <Award size={18} />
    },
    {
      title: "Atendimento Nacional",
      description: "Cobertura operacional para atender clientes em diversas regiões de Moçambique.",
      icon: <MapPin size={18} />
    },
    {
      title: "Técnicos Especializados",
      description: "Equipa altamente treinada e certificada para instalações complexas.",
      icon: <UserCog size={18} />
    },
    {
      title: "Manutenção Preventiva",
      description: "Programas de revisão periódica para garantir a operacionalidade 24/7.",
      icon: <CalendarClock size={18} />
    }
  ];

  return (
    <section className="relative z-10 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white border border-gray-100 shadow-sm p-6 md:p-8 lg:p-10 rounded-[2rem] relative overflow-hidden"
        >
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 relative z-10 items-stretch">
            
            {/* Esquerda: Indicadores e texto */}
            <div className="lg:col-span-3 flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-3xl font-bold font-heading text-gray-900 tracking-tight mb-1">+5</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Anos de experiência</div>
                </div>
                <div>
                  <div className="text-3xl font-bold font-heading text-gray-900 tracking-tight mb-1">+200</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Clientes</div>
                </div>
                <div>
                  <div className="text-3xl font-bold font-heading text-gray-900 tracking-tight mb-1">+1500</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Projetos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold font-heading text-gray-900 tracking-tight mb-1">24/7</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Assistência</div>
                </div>
              </div>
              
              <div className="w-12 h-[2px] bg-pro-red/30 mb-5"></div>
              
              <p className="text-gray-600 text-sm leading-relaxed font-light">
                A Pro Extintores dedica-se a proteger vidas e patrimónios, garantindo excelência, rigor e conformidade com as mais exigentes normas de segurança contra incêndios em Moçambique.
              </p>
            </div>

            {/* Centro: Imagem da equipa técnica */}
            <div className="lg:col-span-4 rounded-2xl overflow-hidden min-h-[300px] lg:min-h-full relative shadow-inner">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" 
                alt="Equipa Técnica" 
                className="absolute inset-0 w-full h-full object-cover filter brightness-[0.95]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            {/* Direita: Título e Lista de Vantagens */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <h2 className="text-xs font-bold text-pro-red tracking-widest uppercase mb-3 flex items-center gap-3">
                <span className="w-6 h-[1px] bg-pro-red"></span> Vantagens
              </h2>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900 tracking-tight leading-[1.1] mb-6">
                Por que escolher a <span className="text-gray-600">Pro Extintores?</span>
              </h3>

              <div className="flex flex-col gap-3">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    key={index} 
                    className="p-3.5 rounded-xl bg-gray-50/80 border border-gray-100 hover:border-gray-200 hover:bg-white transition-colors group shadow-sm flex items-center gap-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-white rounded-lg flex items-center justify-center text-gray-900 border border-gray-200 group-hover:text-pro-red group-hover:bg-pro-red/10 group-hover:border-pro-red/20 transition-colors">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="text-[13px] font-bold text-gray-900 mb-0.5 tracking-tight">{benefit.title}</h4>
                      <p className="text-gray-600 leading-relaxed font-light text-[11px]">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
