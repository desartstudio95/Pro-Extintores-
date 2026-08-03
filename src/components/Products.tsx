import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

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
            // Scroll right
            current.scrollBy({ left: 200, behavior: 'smooth' });
          }
        }
      }, 3000); // Auto scroll every 3 seconds
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
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-4">
          <div>
            <h2 className="text-xs font-bold text-pro-red tracking-widest uppercase mb-4 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-pro-red"></span> Equipamentos de Combate a Incêndios
            </h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-gray-900 tracking-tight leading-[1.1]">
              Nossos <span className="text-gray-500">Produtos</span>
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:text-pro-red transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:text-pro-red transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="w-full h-[2px] bg-pro-red mb-8"></div>

        <div 
          className="relative w-full pb-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            ref={scrollRef}
            className="flex gap-4 md:gap-5 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4"
          >
            {products.map((product, index) => (
              <div
                key={index}
                className="group relative rounded-xl overflow-hidden aspect-[4/5] bg-gray-50 border border-gray-200 shadow-md hover:shadow-xl hover:border-pro-red/50 transition-all duration-300 w-[140px] md:w-[170px] shrink-0 snap-start"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Disponível Badge */}
                <div className="absolute top-2 right-2 z-20">
                  <div className="flex items-center gap-1 bg-pro-red/90 backdrop-blur-sm text-white text-[9px] font-bold px-2 py-1 rounded-full shadow-lg">
                    <CheckCircle2 size={10} />
                    <span>Disponível</span>
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-3 md:p-4 z-20">
                  <h4 className="text-sm md:text-base font-bold text-white tracking-tight leading-tight">{product.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-8 flex justify-center">
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
