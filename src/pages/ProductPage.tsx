import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, ShieldCheck, ChevronRight, FileText, Wrench, Truck, Shield } from 'lucide-react';

import { allProducts } from '../data/products';

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const product = id ? allProducts[id as keyof typeof allProducts] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <main className="flex-grow pt-20 pb-8 flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Produto não encontrado</h1>
        <Link to="/" className="text-pro-red font-semibold hover:underline flex items-center gap-2">
          <ArrowLeft size={16} /> Voltar à página inicial
        </Link>
      </main>
    );
  }

  return (
    <main className="flex-grow pt-24 pb-20 bg-gray-50 min-h-[100svh]">
      
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-gray-500">
            <Link to="/" className="hover:text-pro-red transition-colors">Início</Link>
            <ChevronRight size={14} />
            <Link to="/#products" className="hover:text-pro-red transition-colors">Produtos</Link>
            <ChevronRight size={14} />
            <span className="text-gray-900 font-bold">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 mt-6">
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-900/5 border border-gray-100 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            
            {/* Imagem do Produto */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-[45%] lg:w-[40%] shrink-0 p-6 flex flex-col justify-center bg-gray-50/50"
            >
              <div className="relative aspect-square w-full max-w-[320px] mx-auto rounded-2xl overflow-hidden shadow-md bg-white border border-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-contain p-4"
                />
                <div className="absolute top-4 right-4">
                  <div className="inline-flex items-center gap-1 bg-pro-red text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
                    <CheckCircle2 size={12} />
                    <span>Em Stock</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Informação do Produto */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 md:p-10 flex-1 flex flex-col justify-center border-t md:border-t-0 md:border-l border-gray-100"
            >
              <div className="inline-flex items-center gap-2 text-pro-red mb-4 bg-pro-red/10 px-3 py-1.5 rounded-full border border-pro-red/20 w-max">
                <ShieldCheck size={16} />
                <span className="text-[10px] font-bold tracking-widest uppercase">Equipamento Certificado</span>
              </div>
              
              <h1 className="text-xl md:text-2xl font-bold font-heading text-gray-900 tracking-tight mb-3">
                {product.name}
              </h1>
              
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-light mb-5">
                {product.fullDescription}
              </p>

              <div className="mb-5">
                <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Principais Características</h4>
                <ul className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                      <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={12} strokeWidth={3} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100">
                <a href={`https://wa.me/258855240453?text=${encodeURIComponent('Olá, gostaria de pedir um orçamento para ' + product.name + '.')}`} target="_blank" rel="noopener noreferrer" className="flex-1 bg-gradient-to-r from-pro-red to-red-800 text-white hover:from-blue-900 hover:to-blue-950 px-6 py-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-pro-red/20 hover:shadow-blue-900/30">
                  <FileText size={18} />
                  Pedir Orçamento
                </a>
                <Link 
                  to="/#products" 
                  className="px-6 py-4 rounded-xl font-bold text-sm text-gray-600 border border-gray-200 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                >
                  <ArrowLeft size={18} />
                  Outros Produtos
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Product List Section */}
      {product.items && product.items.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 mt-6 md:mt-24 mb-5">
          <div className="text-center mb-5">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-gray-900 tracking-tight">
              Gama de <span className="text-pro-red">{product.name}</span>
            </h2>
            <p className="text-slate-500 mt-3 text-sm md:text-base max-w-2xl mx-auto">
              Explore a nossa seleção completa de {product.name.toLowerCase()} disponíveis para entrega imediata.
            </p>
          </div>
          
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:overflow-visible scrollbar-hide">
            {product.items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="snap-start shrink-0 w-[75vw] md:w-auto bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-pro-red/30 transition-all group flex flex-col"
              >
                <div className="aspect-square bg-gray-50 relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full text-slate-800 shadow-sm border border-gray-100">
                    Em Stock
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="font-bold text-gray-900 leading-tight mb-3 group-hover:text-pro-red transition-colors text-xs md:text-sm">
                    {item.name}
                  </h3>
                  
                  {item.specs && (
                    <div className="bg-slate-50 rounded-lg p-3.5 mb-5 mt-auto border border-slate-100">
                      <h5 className="text-[9px] uppercase tracking-wider font-bold text-slate-400 mb-2.5 flex items-center gap-1.5">
                        <FileText size={12} /> Especificações Técnicas
                      </h5>
                      <ul className="space-y-2">
                        {item.specs.map((spec, sIdx) => {
                          const parts = spec.split(':');
                          const label = parts.length > 1 ? parts[0] : '';
                          const value = parts.length > 1 ? parts.slice(1).join(':') : spec;
                          
                          return (
                            <li key={sIdx} className="text-xs flex items-center justify-between border-b border-slate-200/60 pb-2 last:border-0 last:pb-0">
                              <span className="font-semibold text-slate-600">{label || '-'}</span>
                              <span className="text-slate-800 font-medium text-right ml-2">{value.trim()}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                  
                  <a href={`https://wa.me/258855240453?text=${encodeURIComponent('Olá, gostaria de solicitar uma cotação para ' + item.name + '.')}`} target="_blank" rel="noopener noreferrer" className="mt-auto w-full inline-flex items-center justify-center gap-1.5 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-2 rounded-lg hover:bg-pro-red transition-colors shadow-md hover:shadow-xl hover:-translate-y-0.5 transform">
                    Solicitar Cotação
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      
      {/* Banner Bottom */}
      <div className="max-w-7xl mx-auto px-6 mt-8 mb-5">
        <div className="bg-pro-red rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-lg shadow-pro-red/20">
          <div>
            <h4 className="font-bold text-white text-xl md:text-2xl">Pronto para proteger o seu espaço?</h4>
            <p className="text-white/80 text-sm md:text-base mt-2">Peça uma avaliação gratuita e garanta a sua segurança.</p>
          </div>
          <a href={`https://wa.me/258855240453?text=${encodeURIComponent('Olá, gostaria de solicitar uma avaliação para ' + product.name + '.')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-pro-red px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors shrink-0 shadow-sm">
            Solicitar avaliação
          </a>
        </div>
      </div>

      {/* Guarantees Section */}
      <div className="bg-slate-900 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-800">
            
            <div className="flex flex-col items-center text-center px-6 pt-0 md:pt-0 pb-8 md:pb-0">
              <div className="w-14 h-14 bg-pro-red/10 rounded-2xl flex items-center justify-center text-pro-red mb-5">
                <Shield size={28} />
              </div>
              <h4 className="text-white font-bold text-lg mb-2">Certificação Garantida</h4>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Todos os nossos equipamentos cumprem as mais rigorosas normas de segurança nacionais e internacionais.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center px-6 pt-8 md:pt-0 pb-8 md:pb-0">
              <div className="w-14 h-14 bg-pro-red/10 rounded-2xl flex items-center justify-center text-pro-red mb-5">
                <Truck size={28} />
              </div>
              <h4 className="text-white font-bold text-lg mb-2">Entrega e Instalação</h4>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Serviço completo desde o fornecimento até à montagem profissional por equipas técnicas qualificadas.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center px-6 pt-8 md:pt-0">
              <div className="w-14 h-14 bg-pro-red/10 rounded-2xl flex items-center justify-center text-pro-red mb-5">
                <Wrench size={28} />
              </div>
              <h4 className="text-white font-bold text-lg mb-2">Manutenção Preventiva</h4>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Garantimos o plano de manutenção anual obrigatório para que os seus sistemas estejam sempre operacionais.
              </p>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
