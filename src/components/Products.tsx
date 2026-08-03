import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Products() {
  const products = [
    {
      name: "Extintores",
      image: "https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Mangueiras",
      image: "https://images.unsplash.com/photo-1621287955562-b9138ce316a3?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Detectores",
      image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Alarmes",
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Sprinklers",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Equipamentos EPI",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Bocas de Incêndio",
      image: "https://images.unsplash.com/photo-1601058268499-e52658b8bb88?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Sinalização",
      image: "https://images.unsplash.com/photo-1585834851259-26d1c876e5d8?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <section id="products" className="relative z-10 scroll-mt-24 pt-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col mb-12">
          <div>
            <h2 className="text-xs font-bold text-pro-red tracking-widest uppercase mb-4 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-pro-red"></span> Produtos de Excelência
            </h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-gray-900 tracking-tight leading-[1.1]">
              Nossos <span className="text-gray-500">Produtos</span>
            </h3>
          </div>
        </div>

        <div className="relative overflow-hidden w-full max-w-full pb-4">
          <div className="absolute inset-y-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-pro-black to-transparent z-30 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-pro-black to-transparent z-30 pointer-events-none"></div>

          <div className="flex animate-scroll w-max">
            {/* List 1 */}
            <div className="flex gap-4 md:gap-6 pr-4 md:pr-6">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-gray-50 border border-gray-200 hover:border-pro-red/50 transition-colors w-[220px] md:w-[260px] shrink-0"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10"></div>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 z-20">
                    <h4 className="text-lg md:text-xl font-bold text-white tracking-tight">{product.name}</h4>
                  </div>
                </div>
              ))}
            </div>
            {/* List 2 */}
            <div className="flex gap-4 md:gap-6 pr-4 md:pr-6">
              {products.map((product, index) => (
                <div
                  key={`copy-${index}`}
                  className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-gray-50 border border-gray-200 hover:border-pro-red/50 transition-colors w-[220px] md:w-[260px] shrink-0"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10"></div>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 z-20">
                    <h4 className="text-lg md:text-xl font-bold text-white tracking-tight">{product.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 flex justify-center">
          <Link to="/#contact" className="group inline-flex items-center gap-3 bg-gray-100 text-gray-900 border border-gray-300 px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">
            Ver todos os produtos
            <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition-transform">
              <ArrowRight size={14} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
