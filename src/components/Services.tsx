import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Venda de Extintores",
      description: "Equipamentos certificados de diversas classes para todo o tipo de fogos.",
      image: "https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Instalação",
      description: "Montagem de sistemas de deteção e redes de combate a incêndios.",
      image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Manutenção",
      description: "Inspeção e recarga periódica garantindo a máxima eficácia e legalidade.",
      image: "https://images.unsplash.com/photo-1533722285514-419b4e3395c1?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Sinalização",
      description: "Placas fotoluminescentes e sinalética de emergência obrigatória.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-4 flex flex-col items-start justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pro-red/10 text-[10px] sm:text-xs font-bold mb-6 uppercase tracking-widest text-pro-red">
              Nossos Serviços
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 leading-[1.15] mb-6">
              Soluções completas em proteção contra incêndios
            </h2>
            <p className="text-gray-600 mb-8 font-light leading-relaxed">
              Dispomos de uma equipa técnica altamente qualificada para garantir que a sua infraestrutura cumpre todos os requisitos legais e de segurança.
            </p>
            <a href="#contact" className="flex items-center gap-2 btn-primary px-6 py-3 rounded-lg font-semibold text-white shadow-lg text-sm hover:shadow-xl transition-all">
              Ver todos os serviços
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group flex flex-col"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-pro-red/10 mix-blend-multiply z-10"></div>
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 relative z-0" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 font-light text-sm mb-6 flex-grow">{service.description}</p>
                  <a href="#contact" className="inline-flex items-center gap-1.5 text-pro-red font-semibold text-sm hover:text-pro-dark transition-colors">
                    Saiba mais <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
