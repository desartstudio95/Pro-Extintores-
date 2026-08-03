import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const products = [
  { name: "Extintores", image: "https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80&w=600" },
  { name: "Mangueiras", image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=600" },
  { name: "Detectores", image: "https://images.unsplash.com/photo-1533722285514-419b4e3395c1?auto=format&fit=crop&q=80&w=600" },
  { name: "Alarmes", image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=600" },
  { name: "Sprinklers", image: "https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80&w=600" },
  { name: "Equipamentos EPI", image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=600" },
  { name: "Bocas de Incêndio", image: "https://images.unsplash.com/photo-1533722285514-419b4e3395c1?auto=format&fit=crop&q=80&w=600" },
  { name: "Sinalização", image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=600" },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-pro-blue scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-[10px] sm:text-xs font-bold mb-4 uppercase tracking-widest text-white">
            Catálogo
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white">
            Nossos Produtos
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden group cursor-pointer hover:bg-white/10 transition-colors"
            >
              <div className="aspect-square overflow-hidden relative">
                <div className="absolute inset-0 bg-pro-blue/20 mix-blend-multiply z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 relative z-0" />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-white font-medium text-sm md:text-base">{product.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#contact" className="inline-flex items-center gap-2 btn-primary px-8 py-3 rounded-lg font-semibold text-white shadow-lg text-sm hover:shadow-xl transition-all">
            Ver todos os produtos
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
