import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      image: "https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80&w=600",
      title: "Extintores e Redes",
      description: "Fornecimento, revisão e recarga de extintores (Pó ABC, CO2, H2O). Mangueiras, hidrantes, carretéis e mantas de incêndio.",
    },
    {
      image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=600",
      title: "Detecção e Prevenção",
      description: "Instalação de Sistemas de Detecção e Alarme de Incêndios. Assessoria especializada em medidas de prevenção e combate.",
    },
    {
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=600",
      title: "Segurança Electrónica",
      description: "Instalação de câmeras de vigilância, sistemas de intrusão, vedações eléctricas e serviços de automação de portões.",
    },
    {
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=600",
      title: "Protecção e Sinalização",
      description: "Equipamentos de Protecção Individual (EPI), KITs de primeiros socorros, sirenes, alarmes de emergência e sinalização.",
    }
  ];

  return (
    <section id="services" className="relative z-10 scroll-mt-24 pt-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <h2 className="text-xs font-bold text-pro-red tracking-widest uppercase mb-4 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-pro-red"></span> Nossos Serviços
            </h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight leading-[1.1] mb-8">
              Soluções completas em proteção <span className="text-gray-500">contra incêndios</span>
            </h3>
            
            <Link to="/#contact" className="group inline-flex items-center gap-3 bg-white text-black px-6 py-4 rounded-full font-bold hover:bg-gray-200 transition-colors">
              Ver todos os serviços
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowRight size={16} />
              </div>
            </Link>
          </div>

          {/* Right Column (Cards) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="glass-panel p-4 rounded-[1.5rem] flex flex-col group hover:bg-white/[0.06] transition-all duration-500 focus-within:ring-2 focus-within:ring-pro-red/50"
              >
                <div className="w-full h-48 rounded-xl overflow-hidden mb-5 relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                  />
                </div>
                
                <div className="px-2 pb-2 flex-grow flex flex-col">
                  <h4 className="text-xl font-bold text-white mb-2 tracking-tight">{service.title}</h4>
                  <p className="text-gray-400 leading-relaxed font-light text-sm mb-6 flex-grow">{service.description}</p>
                  
                  <Link to="/#contact" className="inline-flex items-center gap-2 text-pro-red font-semibold text-sm hover:text-white transition-colors mt-auto w-max">
                    Saiba mais
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
