import React from 'react';
import { motion } from 'motion/react';
import { Building2, Store, GraduationCap, Hotel, Car, Fuel, Landmark, Factory, Building } from 'lucide-react';

export default function Clients() {
  const clients = [
    { name: 'Shangong Taikai Power Engeneering', icon: <Factory size={24} /> },
    { name: 'Safira', image: 'https://i.ibb.co/0RRybMxM/images-2.jpg', icon: <Building size={24} /> },
    { name: 'China Mall', icon: <Store size={24} /> },
    { name: 'Colégio Peron', image: 'https://i.ibb.co/b545zXzZ/FB-IMG-1786428201062.jpg', icon: <GraduationCap size={24} /> },
    { name: 'Otia Hotel', image: 'https://i.ibb.co/ZRp939SK/unnamed-3.png', icon: <Hotel size={24} /> },
    { name: 'Bomba Nova Ponte', icon: <Fuel size={24} /> },
    { name: 'Transportes Jose Leubrax', icon: <Car size={24} /> },
    { name: 'Bombas Êxito', image: 'https://i.ibb.co/Jw0cnGX0/logo.png', icon: <Fuel size={24} /> },
    { name: 'Instituto Nacional de Ação Social', image: 'https://i.ibb.co/gsFHn3Q/images-3.jpg', icon: <Landmark size={24} /> },
  ];

  return (
    <section className="py-12 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-xs font-bold text-pro-red tracking-widest uppercase mb-4 inline-flex items-center gap-2">
            <span className="w-4 h-[1px] bg-pro-red"></span>
            Segurança não é apenas o que fazemos. É aquilo que comprovamos.
            <span className="w-4 h-[1px] bg-pro-red"></span>
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 tracking-tight">
            Empresas que <span className="text-pro-red">confiam em nós</span>
          </h3>
        </div>

        <div className="relative overflow-hidden w-full">
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
          
          <motion.div 
            className="flex gap-4 md:gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="w-48 md:w-64 shrink-0 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center hover:shadow-xl hover:border-pro-red/30 transition-all hover:-translate-y-1"
              >
                
                <div className="h-16 md:h-20 flex items-center justify-center mb-4 text-slate-400 w-full">
                  {client.image ? (
                    <img src={client.image} alt={client.name} className="w-full h-full object-contain" />
                  ) : (
                    client.icon
                  )}
                </div>

                <h4 className="font-bold text-gray-900 text-sm md:text-base">{client.name}</h4>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
