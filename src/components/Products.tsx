import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { productCategories as products } from '../data/products';

export default function Products() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    
    if (!isHovered) {
      intervalId = setInterval(() => {
        if (scrollRef.current) {
          const { current } = scrollRef;
          
          // Check if we reached the end
          if (current.scrollLeft + current.clientWidth >= current.scrollWidth - 10) {
            // Reset to beginning
            current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            // Scroll right by approximately one card width + gap
            current.scrollBy({ left: 350, behavior: 'smooth' });
          }
        }
      }, 3500); // Auto scroll every 3.5 seconds
    }
    
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isHovered]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -350 : 350;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="relative z-10 scroll-mt-24 pt-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-4">
          <div>
            <h2 className="text-xs font-bold text-pro-red tracking-widest uppercase mb-4 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-pro-red"></span> Equipamentos de Combate a Incêndios
            </h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-gray-900 tracking-tight leading-[1.1]">
              Nossos <span className="text-[#0a192f]">Produtos</span>
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-slate-900 hover:bg-gray-50 hover:text-pro-red transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-slate-900 hover:bg-gray-50 hover:text-pro-red transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        <div className="w-full h-[2px] bg-pro-red mb-6 md:mb-12"></div>

        <div 
          className="relative w-full pb-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            ref={scrollRef}
            className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory pb-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {products.map((product, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="shrink-0 snap-start w-[240px] sm:w-[280px] bg-white rounded-[32px] md:rounded-[36px] border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col group"
              >
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-gray-50">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <div className="bg-pro-red text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-widest px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-md">
                      Disponível
                    </div>
                  </div>
                </div>
                
                <div className="p-6 sm:p-8 flex flex-col flex-grow text-left">
                  <h4 className="text-xl sm:text-[22px] font-black text-[#0a192f] mb-3 leading-tight">
                    {product.name}
                  </h4>
                  <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8 line-clamp-3">
                    {product.description}
                  </p>
                  
                  <div className="mt-auto pt-2 flex justify-center">
                    <Link 
                      to={`/produtos/${product.id}`} 
                      className="inline-block px-8 mx-auto text-center bg-[#0a192f] hover:bg-pro-red active:bg-red-700 active:scale-95 text-white font-bold text-sm sm:text-base py-2.5 sm:py-3 rounded-[24px] transition-all duration-300 shadow-md"
                    >
                      Ver Detalhes
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex justify-center">
          <Link to="/catalogo" className="group inline-flex items-center gap-3 bg-[#0a192f] text-white px-6 py-3 rounded-full font-bold hover:bg-pro-red transition-colors shadow-md text-sm sm:text-base">
            Ver catálogo completo
            <div className="w-6 h-6 rounded-full bg-white text-[#0a192f] flex items-center justify-center group-hover:scale-110 transition-transform">
              <ArrowRight size={14} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
