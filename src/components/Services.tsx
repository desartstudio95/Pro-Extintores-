import React from 'react';
import { motion } from 'motion/react';
import { Flame, ShieldAlert, HardHat, ArrowUpRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Flame size={24} />,
      title: "Segurança Contra Incêndios",
      description: "Fornecimento de extintores, instalação de sistemas de deteção e alarme, manutenção técnica, recarga de extintores e consultoria especializada.",
      featured: true,
      colSpan: "lg:col-span-3"
    },
    {
      icon: <ShieldAlert size={24} />,
      title: "Segurança Electrónica",
      description: "Instalação de sistemas de intrusão, CCTV, vedações eléctricas, automação de portões e alarmes de emergência.",
      featured: false,
      colSpan: "lg:col-span-3 md:col-span-1"
    },
    {
      icon: <HardHat size={24} />,
      title: "Equipamentos de Segurança",
      description: "Fornecimento de EPIs, EPCs, kits de primeiros socorros, placas de sinalização e sinalização de emergência.",
      featured: false,
      colSpan: "lg:col-span-3 md:col-span-1"
    }
  ];

  return (
    <section id="services" className="relative z-10 scroll-mt-24 pt-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 md:mb-16 lg:flex items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-xs font-bold text-pro-red tracking-widest uppercase mb-4 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-pro-red"></span> Nossas Soluções
            </h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight leading-[1.1]">
              Proteção integral para <br className="hidden md:block"/> <span className="text-gray-500">o seu negócio.</span>
            </h3>
          </div>
          <p className="text-gray-400 text-base lg:max-w-md mt-6 lg:mt-0 font-light leading-relaxed">
            Oferecemos soluções completas e avançadas em prevenção e combate a incêndios, além de sistemas robustos de segurança eletrónica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index}
              className={`glass-panel p-6 md:p-8 rounded-[1.5rem] flex flex-col group hover:bg-white/[0.06] transition-all duration-500 relative overflow-hidden focus-within:ring-2 focus-within:ring-pro-red/50 ${index === 0 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <a href="#contact" className="absolute inset-0 z-20"><span className="sr-only">Saber mais sobre {service.title}</span></a>
              
              {service.featured && (
                <div className="absolute top-0 right-0 w-48 h-48 bg-pro-red/10 rounded-full blur-[80px] -z-10 group-hover:bg-pro-red/20 transition-colors duration-700"></div>
              )}
              
              <div className="flex justify-between items-start mb-12 relative z-10">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${
                  service.featured 
                    ? 'bg-pro-red/20 border-pro-red/30 text-pro-red' 
                    : 'bg-white/5 border-white/10 text-white'
                }`}>
                  {service.icon}
                </div>
                <div className="w-8 h-8 rounded-full border border-white/10 bg-black/40 flex items-center justify-center text-gray-400 group-hover:bg-pro-red group-hover:text-white group-hover:border-pro-red transform group-hover:rotate-45 transition-all duration-300 shadow-sm">
                  <ArrowUpRight size={16} />
                </div>
              </div>

              <div className="mt-auto relative z-10">
                <h4 className="text-xl font-bold text-white mb-2 tracking-tight">{service.title}</h4>
                <p className="text-gray-400 leading-relaxed font-light text-sm">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
