import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, MessageCircle } from 'lucide-react';
import { productCategories } from '../data/products';

export default function CatalogPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex-grow pt-20 pb-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-pro-red font-semibold hover:underline mb-8">
          <ArrowLeft size={16} /> Voltar à página inicial
        </Link>
        
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold font-heading text-gray-900 tracking-tight mb-4">
            Catálogo <span className="text-pro-red">Completo</span>
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-base">
            Explore a nossa gama completa de equipamentos e sistemas de segurança contra incêndios e segurança eletrónica.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productCategories.map((product, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-xl transition-all duration-300 relative flex flex-col aspect-square h-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
              <img 
                src={product.image} 
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 z-20">
                <div className="bg-white/90 backdrop-blur text-gray-900 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                  <span>Disponível</span>
                </div>
              </div>
              
              <div className="absolute inset-x-0 bottom-0 p-5 z-20 flex flex-col">
                <h4 className="text-xl font-bold text-white tracking-tight mb-2">{product.name}</h4>
                <p className="text-white/80 text-sm font-light mb-4 line-clamp-2">{product.description}</p>
                
                <Link to={`/produtos/${product.id}`} className="inline-flex items-center gap-2 text-white font-semibold text-sm hover:text-pro-red transition-colors w-max group/btn">
                  Ver produto
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Banner */}
        <div className="mt-6 bg-slate-50 border border-slate-100 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h4 className="font-bold text-gray-900 text-xl">Não sabe qual equipamento precisa?</h4>
            <p className="text-slate-600 mt-2">Os nossos especialistas ajudam a escolher a solução certa para o seu caso.</p>
          </div>
          <a href="https://wa.me/258841234567" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition-colors shadow-sm shrink-0 w-full sm:w-auto">
            <MessageCircle size={18} /> Falar com um técnico
          </a>
        </div>

      </div>
    </main>
  );
}
