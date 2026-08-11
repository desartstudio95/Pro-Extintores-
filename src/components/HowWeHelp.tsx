import React from 'react';
import { motion } from 'motion/react';
import { Building2, HardHat, Factory, Hotel, Home } from 'lucide-react';

export default function HowWeHelp() {
  const sectors = [
    {
      icon: <Building2 size={24} className="text-pro-red" />,
      title: 'Empresas',
      description: 'Proteção e manutenção completa das instalações.',
    },
    {
      icon: <HardHat size={24} className="text-pro-red" />,
      title: 'Obras e Projetos',
      description: 'Dimensionamento e instalação de sistemas.',
    },
    {
      icon: <Factory size={24} className="text-pro-red" />,
      title: 'Indústrias',
      description: 'Soluções de proteção contra riscos industriais.',
    },
    {
      icon: <Hotel size={24} className="text-pro-red" />,
      title: 'Hotéis e Instituições',
      description: 'Manutenção, sinalização e conformidade.',
    },
    {
      icon: <Home size={24} className="text-pro-red" />,
      title: 'Residências',
      description: 'Equipamentos essenciais para proteção doméstica.',
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 tracking-tight">
            Como podemos <span className="text-pro-red">ajudar?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-3 shadow-sm border border-gray-100">
                {sector.icon}
              </div>
              <h4 className="font-bold text-gray-900 text-base mb-1.5">{sector.title}</h4>
              <p className="text-slate-600 text-xs font-light leading-relaxed">
                {sector.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
