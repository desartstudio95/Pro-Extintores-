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
        
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-4xl font-bold font-heading text-gray-900 tracking-tight mb-3">
            Catálogo <span className="text-pro-red">Completo</span>
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm">
            Explore a nossa gama completa de equipamentos e sistemas de segurança contra incêndios e segurança eletrónica.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {productCategories.map((product, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index}
              className="bg-white rounded-[28px] border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col group"
            >
              <div className="relative h-40 sm:h-44 w-full overflow-hidden bg-gray-50">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-pro-red text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md">
                    Disponível
                  </div>
                </div>
              </div>
              
              <div className="p-5 flex flex-col flex-grow text-left">
                <h4 className="text-lg font-black text-[#0a192f] mb-2 leading-tight">
                  {product.name}
                </h4>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3">
                  {product.description}
                </p>
                
                <div className="mt-auto pt-2 flex justify-center">
                  <Link 
                    to={`/produtos/${product.id}`} 
                    className="inline-block px-6 w-full text-center bg-[#0a192f] hover:bg-pro-red active:bg-red-700 active:scale-95 text-white font-bold text-sm py-2.5 rounded-[20px] transition-all duration-300 shadow-md"
                  >
                    Ver Detalhes
                  </Link>
                </div>
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
          <a href="https://wa.me/258855240453" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition-colors shadow-sm shrink-0 w-full sm:w-auto">
            <MessageCircle size={18} /> Falar com um técnico
          </a>
        </div>

      </div>
    </main>
  );
}
