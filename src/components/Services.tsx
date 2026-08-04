import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      image: "https://i.ibb.co/GfFh5TGF/Chat-GPT-Image-4-de-ago-de-2026-16-40-10.png",
      title: "Extintores e Redes",
      description: "Fornecimento, revisão e recarga de extintores (Pó ABC, CO2, H2O). Mangueiras, hidrantes, carretéis e mantas de incêndio.",
    },
    {
      image: "https://i.ibb.co/RkVHSqqQ/Chat-GPT-Image-4-de-ago-de-2026-16-42-34.png",
      title: "Detecção e Prevenção",
      description: "Instalação de Sistemas de Detecção e Alarme de Incêndios. Assessoria especializada em medidas de prevenção e combate.",
    },
    {
      image: "https://i.ibb.co/MxJ23pjv/Chat-GPT-Image-4-de-ago-de-2026-16-44-42.png",
      title: "Segurança Electrónica",
      description: "Instalação de câmeras de vigilância, sistemas de intrusão, vedações eléctricas e serviços de automação de portões.",
    },
    {
      image: "https://i.ibb.co/j9mrkGw4/Chat-GPT-Image-4-de-ago-de-2026-16-47-29.png",
      title: "Protecção e Sinalização",
      description: "Equipamentos de Protecção Individual (EPI), KITs de primeiros socorros, sirenes, alarmes de emergência e sinalização.",
    }
  ];

  return (
    <section id="services" className="relative z-10 scroll-mt-24 pt-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col mb-10 items-center text-center">
          <h2 className="text-xs font-bold text-pro-red tracking-widest uppercase mb-4 flex items-center justify-center gap-3">
            <span className="w-6 h-[1px] bg-pro-red"></span> Nossos Serviços <span className="w-6 h-[1px] bg-pro-red"></span>
          </h2>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-gray-900 tracking-tight leading-[1.1] mb-6">
            Soluções completas em proteção <span className="text-slate-900">contra incêndios</span>
          </h3>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index}
              className="bg-white border border-gray-100 shadow-md p-3 rounded-2xl flex flex-col group hover:border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-full h-40 rounded-xl overflow-hidden mb-4 relative">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              
              <div className="px-1 pb-1 flex-grow flex flex-col">
                <h4 className="text-sm font-bold text-gray-900 mb-1.5 tracking-tight">{service.title}</h4>
                <p className="text-slate-900 leading-relaxed font-light text-[11px] mb-4 flex-grow">{service.description}</p>
                
                <Link to="/#contact" className="inline-flex items-center gap-1.5 text-pro-red font-semibold text-xs hover:text-gray-900 transition-colors mt-auto w-max">
                  Saiba mais
                  <ArrowRight size={12} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link to="/#contact" className="group inline-flex items-center gap-3 bg-gray-900 text-white px-5 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors text-sm">
            Ver todos os serviços
            <div className="w-6 h-6 rounded-full bg-white text-gray-900 flex items-center justify-center group-hover:scale-110 transition-transform">
              <ArrowRight size={14} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
