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
      description: "Extintores de pó químico, CO2 e água para todos os tipos de fogo.",
      image: "https://i.ibb.co/7JxnZDV9/Chat-GPT-Image-4-de-ago-de-2026-21-02-31-1.png"
    },
    {
      name: "Mangueiras",
      description: "Mangueiras de alta pressão com certificação internacional.",
      image: "https://i.ibb.co/MDRWqV9x/Chat-GPT-Image-4-de-ago-de-2026-21-12-55.png"
    },
    {
      name: "Detectores",
      description: "Detectores de fumo e calor com tecnologia de precisão.",
      image: "https://i.ibb.co/380TLwt/Chat-GPT-Image-4-de-ago-de-2026-21-15-30.png"
    },
    {
      name: "Alarmes",
      description: "Sistemas de alarme sonoro e visual para evacuação rápida.",
      image: "https://i.ibb.co/b95M058/Chat-GPT-Image-4-de-ago-de-2026-21-17-04.png"
    },
    {
      name: "Sprinklers",
      description: "Sistemas automáticos de supressão de chamas para tetos.",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Equipamentos EPI",
      description: "Capacetes, luvas e proteção térmica resistente ao fogo.",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Bocas de Incêndio",
      description: "Sistemas completos de bocas de incêndio (carretéis).",
      image: "https://images.unsplash.com/photo-1601058268499-e52658b8bb88?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Sinalização",
      description: "Placas fotoluminescentes para indicação de saídas.",
      image: "https://images.unsplash.com/photo-1585834851259-26d1c876e5d8?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <section id="products" className="relative z-10 scroll-mt-24 pt-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-4">
          <div>
            <h2 className="text-xs font-bold text-pro-red tracking-widest uppercase mb-4 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-pro-red"></span> Equipamentos de Combate a Incêndios
            </h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-gray-900 tracking-tight leading-[1.1]">
              Nossos <span className="text-slate-900">Produtos</span>
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="group relative rounded-xl overflow-hidden aspect-[3/4] bg-gray-50 border border-gray-200 shadow-md hover:shadow-xl hover:border-pro-red/50 transition-all duration-300 w-[240px] md:w-[280px] shrink-0 snap-start flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Disponível Badge */}
                <div className="absolute top-3 right-3 z-20">
                  <div className="flex items-center gap-1 bg-pro-red/90 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg">
                    <CheckCircle2 size={12} />
                    <span>Disponível</span>
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 z-20 flex flex-col">
                  <h4 className="text-lg md:text-xl font-bold text-white tracking-tight mb-2">{product.name}</h4>
                  <p className="text-white/80 text-xs md:text-sm font-light mb-4 line-clamp-2">{product.description}</p>
                  
                  <Link to="/#contact" className="inline-flex items-center gap-2 text-white font-semibold text-xs md:text-sm hover:text-pro-red transition-colors w-max group/btn">
                    Ver produto
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="mt-8 flex justify-center">
          <Link to="/#contact" className="group inline-flex items-center gap-3 bg-gray-900 text-white px-6 py-3 rounded-full font-bold hover:bg-pro-red transition-colors shadow-lg">
            Ver catálogo completo
            <div className="w-6 h-6 rounded-full bg-white text-gray-900 flex items-center justify-center group-hover:scale-110 transition-transform">
              <ArrowRight size={14} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
